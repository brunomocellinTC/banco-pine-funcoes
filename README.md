# Automação Web — Função

Base Playwright + TypeScript com a mesma organização do `banco-pine-web/Automacao_web`. Dependências e lockfile partem do projeto de referência. Use Node 20.19.0 ou superior para atender às dependências do relatório. O launcher usa `.mjs`, sem depender da execução nativa de TypeScript pelo Node.

## Estrutura

```text
Automacao_web/
  Data/             exemplos de ambientes e inventário dos cenários
  PageObjects/      ElementsMap e Actions por tela
    LoginPageObject/
    LoggedHomePageObject/
    CotacoesPageObject/
    ContabilIFRSPageObject/
  Scripts/          ambiente, placeholders, execução e limpeza de relatórios
  Tests/            Login.Test.ts, Cotacoes.Test.ts, ContabilIFRS.Test.ts
  Workflows/        autenticação e pontos de preparação/restauração
  Reports/          relatórios gerados (ignorado no Git)
  playwright.config.ts
```

## Instalar e conferir a estrutura

Execute nesta pasta:

```powershell
npm ci
npm run typecheck
npm run test:list
npm test
```

São **84 testes pendentes**: login/home 6, cotações 17 e contábil IFRS 61. Os 29 cenários BDD originais foram expandidos pelos exemplos (teclas, campos e produtos). Os IDs, tags, passos e tabelas foram preservados. `Data/cenarios.example.json` relaciona cada variação à fonte em `../cases/cases/interface/`.

Todos usam `test.fixme` e `@pending`: `npm test` deve apresentar testes ignorados, sem acessar a aplicação ou exigir navegador instalado. Isso valida a estrutura, não o comportamento do Função. Cada `pendingStep` lança erro se executado, impedindo aprovação acidental ao remover `fixme` antes de implementar as etapas.

## Preencher e implementar

1. Copie `Data/homologacao.example.json` para `Data/homologacao.json` e preencha URL, caminho de login, usuário/perfil, cotação e referências de cada produto. O JSON local é ignorado no Git. Opcionalmente, forneça credenciais por `FUNCAO_USUARIO` e `FUNCAO_SENHA`.
2. Substitua `<PREENCHER:...>` nos `ElementsMap` por seletores reais. Confira frames, novas janelas e componentes customizados; nada disso foi presumido. Os métodos existentes são pontos de partida, ainda sem validação contra a aplicação.
3. Implemente preparação e restauração independentes em `Workflows/PreparacaoWorkflow.ts`. Para os casos de Voltar, implemente consulta autorizada ao estado para demonstrar ausência de gravação/execução.
4. Em cada teste, substitua `pendingStep` por chamadas aos Page Objects/Workflows e asserções Playwright (`expect`). Instale handlers de alertas antes do clique quando aplicável. Retire `test.fixme` e `@pending` somente desse teste quando estiver completo.
5. Instale os navegadores necessários e execute os casos implementados.

```powershell
npx playwright install chromium
npm test -- --grep BDD-001 --headed
npm test -- --grep @cotacoes
npm run test:edge
npm run test:firefox
npm run test:webkit
npm run test:all
```

`chrome` usa Chromium do Playwright, como o projeto de referência; `edge` usa Microsoft Edge instalado. Firefox/WebKit exigem suas instalações pelo Playwright.

O ambiente padrão é homologação. O exemplo de produção é apenas um modelo vazio; não há comando de execução em produção no início rápido. O launcher aceita `ENV` por seu primeiro argumento e valida o nome do ambiente. Configuração e leitura de massa não fazem login automaticamente.

## Regras preservadas dos cases

- A home com 11 módulos exige perfil equivalente ao SUPERVISOR; não generalizar para todos os usuários.
- Cotações: datas são definidas pelo sistema a partir do histórico. Não há regra de avanço diário inferida. As mensagens especificadas são `Inclusão realizada com sucesso!` e `Registro Inexistente`.
- Contábil: somente 009, 015, 016, 017 e 018. Os rótulos de seleção seguem os Exemplos dos BDDs; validar no DOM a tabela de nomenclatura incompleta do documento. O produto 038 não entra nesta execução.
- D-1 e D-2 são dias úteis do calendário operacional, com feriados, relativos à inicialização do produto. Preencher as referências preparadas; não usar a data do computador ou subtrair dias corridos. Preparar tanto intervalo de dias úteis quanto travessia de fim de semana/feriado.
- Inicialização, desbloqueio e comandos de servidor ficam como pré-condições externas. Os comandos de `cases` não são executados por este projeto.
- Validar data, mensagens e status da execução atual. Um `Sucesso` histórico não comprova a execução em teste. Downloads e logs exigem validação dos registros identificados, sem inventar formato ou extensão.
- O timeout inicial de 60 segundos é técnico e deve ser ajustado para o processamento observado antes de habilitar casos longos. Não representa SLA. Retries estão desativados para evitar repetir operações contábeis automaticamente.

## Relatórios

```powershell
npm run report:clear
npm test
npm run report
# Alternativa: relatório HTML do Playwright
npm run report:playwright
```

Allure usa `Reports/allure-results` e `Reports/allure-report`; o HTML do Playwright fica em `Reports/playwright-report`. Resultados e screenshots de falha ficam ignorados no Git. Verifique as evidências antes de compartilhá-las, pois podem conter dados do ambiente.

## Gerador do esqueleto

`Scripts/generate-cases.mjs` documenta a transformação dos BDDs em testes e exemplos. Ele **sobrescreve** os três arquivos de testes e os JSONs de exemplo. Não o execute após iniciar a implementação sem revisar/preservar suas alterações. Os testes gerados já estão entregues; não é necessário executar o gerador para instalar ou testar.

## Verificação desta entrega

`typecheck` passou, `test:list` identificou 84 testes e `npm test` terminou com 84 ignorados, sem acessar o Função. A instalação offline não concluiu por pacote ausente no cache; para essas verificações foram copiadas as dependências já instaladas do projeto de referência. O Node local era 20.18.0, abaixo do mínimo de algumas dependências do Allure. A geração do Allure não concluiu e reportou `EPERM` ao tentar criar a pasta de logs `.allure` no perfil do usuário, fora da área permitida. O relatório Allure permanece sem validação; o HTML do Playwright foi gerado pela execução.
