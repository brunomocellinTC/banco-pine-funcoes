# Automação Função

Base Playwright focada em login e cadastro de uma proposta. Documentos de cenários futuros continuam em cases/.

## Primeiro teste visual

O segundo HAR mostra a home do portal, sem porta 8087, com o usuário autenticado e o link Proposta. Ainda não contém o formulário de login nem o envio das credenciais. Este primeiro teste usa login manual e valida automaticamente a home.

Na pasta do projeto:

```powershell
npx playwright install chromium
npm run test:login:visual
```

O comando abre o Chromium e o Playwright Inspector, sem limite de tempo para a conferência manual.

1. No navegador, faça o login normalmente e aguarde a home do portal. Não entre no módulo Proposta ainda.
2. No Inspector, clique em Resume (ícone de continuar). O teste valida a URL FI.AC.GUI.FIMENU.aspx, um usuário identificado e o link Proposta visível.
3. Se as verificações passarem, o teste pausa novamente na home. Confira se o usuário e a tela são os esperados. Se Data/homologacao.json tiver usuario preenchido, o teste também exige esse usuário específico; caso contrário, exige apenas um usuário identificado.
4. Clique em Resume novamente para encerrar. O terminal deve mostrar 1 passed. Se alguma verificação falhar, consulte o erro no terminal ou execute npm run report:playwright.

Se já existir Data/homologacao.json, ele tem prioridade sobre o exemplo. Use baseURL http://w19pnhhfcatc01.pine.com.br e loginPath / para entrar pelo portal; a porta 8087 pertence ao módulo de propostas visto no primeiro HAR. O teste abre um contexto limpo: faça login na janela aberta pelo Playwright.

Este teste confirma a home após um login manual. Não comprova ainda o preenchimento automático de credenciais nem um cadastro de proposta.

## Login automático

Requer Node 20.19 ou superior e dependências instaladas com npm ci.

```powershell
Copy-Item Data/homologacao.example.json Data/homologacao.json
npm run typecheck
npm run test:list
npm run test:login -- --headed
```

Copie o exemplo apenas se o arquivo local ainda não existir. Para o login automático, configure usuario, senha e os seletores reais em login.usuario, login.senha e login.entrar. Credenciais também podem vir de FUNCAO_USUARIO e FUNCAO_SENHA. Enquanto faltar configuração, o teste automático é ignorado.

JSON local com credenciais e arquivos HAR são ignorados pelo Git. Sessões e tokens dos HARs não são reutilizados.

## Cadastro de proposta

Continua marcado como fixme: falta a captura da entrada no módulo Proposta, do formulário, dos valores finais enviados e da confirmação de gravação. A navegação do módulo foi identificada no primeiro HAR, mas não validada no ambiente.

Não há tentativas automáticas de repetir cadastros. Os testes gerados de cotações, contábil IFRS e variações de login foram retirados. Existem dois cenários nesta base; testes ignorados não comprovam funcionamento.

```powershell
npm run test:proposta -- --headed
npm run report:playwright
```
