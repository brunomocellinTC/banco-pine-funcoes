# Banco Pine — Função Web

Playwright com TypeScript e Microsoft Edge instalado no notebook. Não é necessário instalar Chromium pelo Playwright.

## Organização

Cada página tem sua pasta, com seletores em Objects e ações básicas em Actions:

```text
PageObjects/
  Login/
    LoginObjects.ts
    LoginActions.ts
  Home/
    HomeObjects.ts
    HomeActions.ts
  Proposta/
    PropostaObjects.ts
    PropostaActions.ts
Workflows/
Tests/
  Login.Test.ts
Data/
  homologacao.example.json
Scripts/
  environment.ts
  run-env.mjs
```

`LoginObjects.ts` contém os seletores em branco para preencher. `LoginActions.ts` tem apenas ações básicas: abrir login, preencher usuário, preencher senha e clicar em OK. O teste chama essas ações e mantém as validações com `expect` dentro de `Tests/Login.Test.ts`.

Os seletores de home já existentes foram mantidos em `HomeObjects.ts`. `HomeActions.ts`, os arquivos de Proposta e `Workflows` estão vazios para implementação futura. Workflows contém somente `.gitkeep` para preservar a pasta no Git. Os documentos de referência permanecem em `cases`.

## URL e dados

A URL de login configurada é:

`http://w19pnhhfcatc01.pine.com.br/login/AC.UI.LOGIN.aspx`

No JSON, ela é composta por:

```json
{
  "baseURL": "http://w19pnhhfcatc01.pine.com.br",
  "login": {
    "path": "/login/AC.UI.LOGIN.aspx",
    "usuario": "",
    "senha": ""
  },
  "home": {
    "path": "/FI.AC.GUI.FIMENU.aspx",
    "dropdown2": ""
  }
}
```

Copie `Data/homologacao.example.json` para `Data/homologacao.json` e preencha `login.usuario` e `login.senha`. O arquivo local tem prioridade e é ignorado no Git. As variáveis `FUNCAO_USUARIO` e `FUNCAO_SENHA` também podem fornecer as credenciais.

Mantenha um objeto por tela: `data.login.usuario`, `data.login.path`, `data.home.path` etc. `baseURL` é compartilhado pelo ambiente. `home.dropdown2` é um placeholder para o valor que será escolhido no campo; seu seletor pertence a `HomeObjects.ts`. Ao adicionar telas ou campos, atualize também o tipo `EnvironmentData` em `Scripts/environment.ts`.

Para outro ambiente, crie `Data/<ambiente>.json` (ou `<ambiente>.example.json`) com a mesma estrutura e execute `node Scripts/run-env.mjs <ambiente> --project=edge`. Por exemplo, `node Scripts/run-env.mjs desenvolvimento --project=edge`. Os comandos npm continuam usando homologação por padrão.

## Executar

Na raiz deste projeto:

```powershell
npm ci
npm run typecheck
npm run test:list
npm run test:login
```

Preencha antes os três seletores em `PageObjects/Login/LoginObjects.ts`. Enquanto faltarem seletores ou credenciais, o único teste de login fica ignorado. Depois de preenchidos, ele abre o Edge instalado (`channel: 'msedge'`) com janela visível e executa as ações e validações.

`npm test` e `npm run test:edge` também executam somente login. Não há Allure, relatório HTML ou comandos de relatórios; o resultado aparece no terminal. O Playwright pode criar `test-results/.last-run.json` como controle interno da execução; esse arquivo é ignorado no Git.
