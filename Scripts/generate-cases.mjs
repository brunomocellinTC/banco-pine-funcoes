// Gera somente o esqueleto inicial. Não executar após implementar os testes:
// os arquivos Tests/*.Test.ts serão recriados.
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';

const root = new URL('../', import.meta.url);
const sources = [
  ['login-home-01', 'Login', '@login'],
  ['inclusao-cotacoes-01', 'Cotacoes', '@cotacoes'],
  ['web-corporate-contabil-ifrs-01', 'ContabilIFRS', '@contabil_ifrs'],
];
const products = [
  ['009', 'Corporate Ativo'], ['015', 'Repasse BNDES Ativo'],
  ['016', 'Repasse BNDES Passivo'], ['017', 'Repasse ME Ativo'], ['018', 'Repasse ME Passivo'],
];
const placeholder = (name) => `<PREENCHER:${name}>`;
const data = {
  baseURL: placeholder('URL_DO_AMBIENTE'), loginPath: placeholder('CAMINHO_LOGIN'),
  usuario: placeholder('USUARIO'), senha: placeholder('SENHA'), perfil: placeholder('PERFIL_EQUIVALENTE_SUPERVISOR'),
  cotacao: Object.fromEntries(['codigoIndexador', 'nomeIndexador', 'codigoInexistente', 'taxa', 'tipo', 'referenciaApresentada'].map(key => [key, placeholder(key)])),
  produtos: products.map(([codigo, rotuloBackOffice]) => ({
    codigo, rotuloBackOffice,
    ...Object.fromEntries(['dataInicializacao', 'diaUtilAnterior', 'referenciaAbertura', 'ultimaReferenciaPreFechamento', 'novaDataInicializacao', 'identificadorExecucao'].map(key => [key, placeholder(key)])),
  })),
};
mkdirSync(new URL('Data/', root), { recursive: true });
for (const environment of ['homologacao', 'producao']) {
  writeFileSync(new URL(`Data/${environment}.example.json`, root), JSON.stringify(data, null, 2) + '\n');
}
mkdirSync(new URL('Tests/', root), { recursive: true });
const inventory = [];
for (const [folder, name, tag] of sources) {
  const source = `cases/cases/interface/${folder}/01-cenarios-bdd.md`;
  const markdown = readFileSync(new URL(`../${source}`, root), 'utf8');
  let output = `// Fonte: ../${source}\n// Estrutura pendente: implementar ações e asserções antes de remover test.fixme.\nimport { test } from '@playwright/test';\nimport { pendingStep } from '../Scripts/utils';\n\n`;
  output += `test.describe(${JSON.stringify(name)}, { tag: ${JSON.stringify(tag)} }, () => {\n`;
  const sections = [...markdown.matchAll(/^### (BDD-[^\n]+)\r?\n([\s\S]*?)(?=^### BDD-|$(?![\s\S]))/gm)];
  for (const match of sections) {
    const title = match[1].trim();
    const id = title.split(' — ')[0];
    const block = match[2].match(/```gherkin\r?\n([\s\S]*?)```/)?.[1];
    if (!block) throw new Error(`BDD sem Gherkin: ${id}`);
    const lines = block.split(/\r?\n/);
    const tags = lines.filter(line => line.startsWith('@')).join(' ').split(/\s+/).filter(Boolean);
    const steps = lines.map(line => line.trim()).filter(line => /^(Dado|Quando|Então|E)\s/.test(line));
    const exampleBlock = block.split(/Exemplos:\s*\r?\n/)[1];
    const rows = exampleBlock ? exampleBlock.split(/\r?\n/).map(line => line.trim()).filter(line => line.startsWith('|')).map(line => line.split('|').slice(1, -1).map(cell => cell.trim())) : [];
    const variants = rows.length ? rows.slice(1).map(row => Object.fromEntries(rows[0].map((key, index) => [key, row[index]]))) : [{}];
    for (const variant of variants) {
      const replace = text => text.replace(/<([^>]+)>/g, (token, key) => variant[key] ?? token);
      const fullTitle = title + (Object.keys(variant).length ? ` [${Object.values(variant).join(' / ')}]` : '');
      output += `\n  test.fixme(${JSON.stringify(fullTitle)}, { tag: ${JSON.stringify([...tags, '@pending'])} }, async () => {\n`;
      // Tabelas de resultado (por exemplo os 11 módulos) permanecem como checklist.
      output += lines.filter(line => line.trim().startsWith('|')).map(line => `    // ${line.trim()}\n`).join('');
      output += steps.map(step => `    await pendingStep(${JSON.stringify(replace(step))});\n`).join('');
      output += '  });\n';
      inventory.push({ id, title: fullTitle, source, variant, tags });
    }
  }
  output += '});\n';
  writeFileSync(new URL(`Tests/${name}.Test.ts`, root), output);
}
writeFileSync(new URL('Data/cenarios.example.json', root), JSON.stringify(inventory, null, 2) + '\n');
console.log(`${inventory.length} testes pendentes gerados a partir dos BDDs.`);
