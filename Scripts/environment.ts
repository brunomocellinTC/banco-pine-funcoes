import { existsSync, readFileSync } from 'node:fs';

export type ProductData = {
  codigo: string;
  rotuloBackOffice: string;
  dataInicializacao: string;
  diaUtilAnterior: string;
  referenciaAbertura: string;
  ultimaReferenciaPreFechamento: string;
  novaDataInicializacao: string;
  identificadorExecucao: string;
};

export type EnvironmentData = {
  baseURL: string;
  loginPath: string;
  usuario: string;
  senha: string;
  perfil: string;
  cotacao: {
    codigoIndexador: string;
    nomeIndexador: string;
    codigoInexistente: string;
    taxa: string;
    tipo: string;
    referenciaApresentada: string;
  };
  produtos: ProductData[];
};

export function isPlaceholder(value: string): boolean {
  return !value.trim() || value.includes('<PREENCHER');
}

export function requireConfigured(value: string, name: string): string {
  if (isPlaceholder(value)) throw new Error(`Preencha o placeholder: ${name}.`);
  return value;
}

export function getEnvironmentData(): EnvironmentData {
  const environment = process.env.ENV ?? 'homologacao';
  if (!['homologacao', 'producao'].includes(environment)) throw new Error('ENV inválido.');
  const local = new URL(`../Data/${environment}.json`, import.meta.url);
  const example = new URL(`../Data/${environment}.example.json`, import.meta.url);
  // O exemplo permite listar/executar os marcadores pendentes sem massa privada.
  const data = JSON.parse(readFileSync(existsSync(local) ? local : example, 'utf8')) as EnvironmentData;
  data.usuario = process.env.FUNCAO_USUARIO ?? data.usuario;
  data.senha = process.env.FUNCAO_SENHA ?? data.senha;
  return data;
}
