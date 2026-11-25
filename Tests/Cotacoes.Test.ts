// Fonte: ../cases/cases/interface/inclusao-cotacoes-01/01-cenarios-bdd.md
// Estrutura pendente: implementar ações e asserções antes de remover test.fixme.
import { test } from '@playwright/test';
import { pendingStep } from '../Scripts/utils';

test.describe("Cotacoes", { tag: "@cotacoes" }, () => {

  test.fixme("BDD-COT-001 — Acessar Tabelas Corporativas pela home", { tag: ["@regressao","@funcional","@positivo","@modulo_tabelas_corporativas","@funcionalidade_inclusao_cotacoes","@alta","@automatizar","@pending"] }, async () => {
    await pendingStep("Dado que o usuário está autenticado na home do Função");
    await pendingStep("Quando o usuário clica em Tabelas Corporativas");
    await pendingStep("Então a tela do módulo deve apresentar o seletor BackOffice");
  });

  test.fixme("BDD-COT-002 — Selecionar Tabelas WEB no BackOffice", { tag: ["@regressao","@funcional","@positivo","@modulo_tabelas_corporativas","@funcionalidade_inclusao_cotacoes","@alta","@automatizar","@pending"] }, async () => {
    await pendingStep("Dado que a tela principal de Tabelas Corporativas está aberta");
    await pendingStep("Quando o usuário seleciona Tabelas WEB no BackOffice");
    await pendingStep("Então o seletor deve apresentar Tabelas WEB");
    await pendingStep("E o menu Operacional deve estar disponível");
  });

  test.fixme("BDD-COT-003 — Acessar a inclusão de cotações pelo menu Operacional", { tag: ["@smoke","@regressao","@funcional","@positivo","@modulo_tabelas_corporativas","@funcionalidade_inclusao_cotacoes","@alta","@automatizar","@pending"] }, async () => {
    await pendingStep("Dado que Tabelas WEB está selecionado no BackOffice");
    await pendingStep("Quando o usuário abre Operacional");
    await pendingStep("E acessa Cotações");
    await pendingStep("E seleciona Incluir");
    await pendingStep("Então a tela Inclusão de Cotações deve ser exibida");
    await pendingStep("E deve apresentar Cód. Indexador, Nome Indexador, Confirmar, Cancelar e Voltar");
  });

  test.fixme("BDD-COT-004 — Acessar o cadastro de um indexador existente", { tag: ["@regressao","@funcional","@positivo","@modulo_tabelas_corporativas","@funcionalidade_inclusao_cotacoes","@alta","@automatizar","@pending"] }, async () => {
    await pendingStep("Dado que a tela Inclusão de Cotações está aberta");
    await pendingStep("E o código de um indexador existente está identificado na massa de teste");
    await pendingStep("Quando o usuário informa o código do indexador preparado em Cód. Indexador");
    await pendingStep("E clica em Confirmar");
    await pendingStep("Então a tela Cadastro de Cotações deve ser exibida para o indexador preparado");
    await pendingStep("E deve apresentar Código, Indexador, Referência, Dt. Validade, Dt. Início, Taxa/Índice, Valor Acumulado, Tipo e Usuário");
  });

  test.fixme("BDD-COT-005 — Manter os campos informativos do cadastro sem edição [Código]", { tag: ["@regressao","@funcional","@negativo","@modulo_tabelas_corporativas","@funcionalidade_inclusao_cotacoes","@alta","@automatizar","@pending"] }, async () => {
    // | campo |
    // | Código |
    // | Indexador |
    // | Referência |
    // | Dt. Validade |
    // | Dt. Início |
    // | Valor Acumulado |
    // | Usuário |
    await pendingStep("Dado que Cadastro de Cotações está aberto para o indexador preparado");
    await pendingStep("Quando o usuário tenta editar o campo Código pela interface");
    await pendingStep("Então o campo Código deve permanecer sem permitir edição pelo usuário");
  });

  test.fixme("BDD-COT-005 — Manter os campos informativos do cadastro sem edição [Indexador]", { tag: ["@regressao","@funcional","@negativo","@modulo_tabelas_corporativas","@funcionalidade_inclusao_cotacoes","@alta","@automatizar","@pending"] }, async () => {
    // | campo |
    // | Código |
    // | Indexador |
    // | Referência |
    // | Dt. Validade |
    // | Dt. Início |
    // | Valor Acumulado |
    // | Usuário |
    await pendingStep("Dado que Cadastro de Cotações está aberto para o indexador preparado");
    await pendingStep("Quando o usuário tenta editar o campo Indexador pela interface");
    await pendingStep("Então o campo Indexador deve permanecer sem permitir edição pelo usuário");
  });

  test.fixme("BDD-COT-005 — Manter os campos informativos do cadastro sem edição [Referência]", { tag: ["@regressao","@funcional","@negativo","@modulo_tabelas_corporativas","@funcionalidade_inclusao_cotacoes","@alta","@automatizar","@pending"] }, async () => {
    // | campo |
    // | Código |
    // | Indexador |
    // | Referência |
    // | Dt. Validade |
    // | Dt. Início |
    // | Valor Acumulado |
    // | Usuário |
    await pendingStep("Dado que Cadastro de Cotações está aberto para o indexador preparado");
    await pendingStep("Quando o usuário tenta editar o campo Referência pela interface");
    await pendingStep("Então o campo Referência deve permanecer sem permitir edição pelo usuário");
  });

  test.fixme("BDD-COT-005 — Manter os campos informativos do cadastro sem edição [Dt. Validade]", { tag: ["@regressao","@funcional","@negativo","@modulo_tabelas_corporativas","@funcionalidade_inclusao_cotacoes","@alta","@automatizar","@pending"] }, async () => {
    // | campo |
    // | Código |
    // | Indexador |
    // | Referência |
    // | Dt. Validade |
    // | Dt. Início |
    // | Valor Acumulado |
    // | Usuário |
    await pendingStep("Dado que Cadastro de Cotações está aberto para o indexador preparado");
    await pendingStep("Quando o usuário tenta editar o campo Dt. Validade pela interface");
    await pendingStep("Então o campo Dt. Validade deve permanecer sem permitir edição pelo usuário");
  });

  test.fixme("BDD-COT-005 — Manter os campos informativos do cadastro sem edição [Dt. Início]", { tag: ["@regressao","@funcional","@negativo","@modulo_tabelas_corporativas","@funcionalidade_inclusao_cotacoes","@alta","@automatizar","@pending"] }, async () => {
    // | campo |
    // | Código |
    // | Indexador |
    // | Referência |
    // | Dt. Validade |
    // | Dt. Início |
    // | Valor Acumulado |
    // | Usuário |
    await pendingStep("Dado que Cadastro de Cotações está aberto para o indexador preparado");
    await pendingStep("Quando o usuário tenta editar o campo Dt. Início pela interface");
    await pendingStep("Então o campo Dt. Início deve permanecer sem permitir edição pelo usuário");
  });

  test.fixme("BDD-COT-005 — Manter os campos informativos do cadastro sem edição [Valor Acumulado]", { tag: ["@regressao","@funcional","@negativo","@modulo_tabelas_corporativas","@funcionalidade_inclusao_cotacoes","@alta","@automatizar","@pending"] }, async () => {
    // | campo |
    // | Código |
    // | Indexador |
    // | Referência |
    // | Dt. Validade |
    // | Dt. Início |
    // | Valor Acumulado |
    // | Usuário |
    await pendingStep("Dado que Cadastro de Cotações está aberto para o indexador preparado");
    await pendingStep("Quando o usuário tenta editar o campo Valor Acumulado pela interface");
    await pendingStep("Então o campo Valor Acumulado deve permanecer sem permitir edição pelo usuário");
  });

  test.fixme("BDD-COT-005 — Manter os campos informativos do cadastro sem edição [Usuário]", { tag: ["@regressao","@funcional","@negativo","@modulo_tabelas_corporativas","@funcionalidade_inclusao_cotacoes","@alta","@automatizar","@pending"] }, async () => {
    // | campo |
    // | Código |
    // | Indexador |
    // | Referência |
    // | Dt. Validade |
    // | Dt. Início |
    // | Valor Acumulado |
    // | Usuário |
    await pendingStep("Dado que Cadastro de Cotações está aberto para o indexador preparado");
    await pendingStep("Quando o usuário tenta editar o campo Usuário pela interface");
    await pendingStep("Então o campo Usuário deve permanecer sem permitir edição pelo usuário");
  });

  test.fixme("BDD-COT-006 — Incluir a cotação do indexador com sucesso", { tag: ["@regressao","@funcional","@positivo","@modulo_tabelas_corporativas","@funcionalidade_inclusao_cotacoes","@alta","@automatizar","@pending"] }, async () => {
    await pendingStep("Dado que a tela Inclusão de Cotações está aberta");
    await pendingStep("E o indexador existente preparado possui histórico de última inclusão na base de teste");
    await pendingStep("E existe uma cotação preparada para a referência que será apresentada pelo sistema");
    await pendingStep("Quando o usuário informa o código do indexador preparado em Cód. Indexador");
    await pendingStep("E clica em Confirmar");
    await pendingStep("E preenche Taxa/Índice no Cadastro de Cotações com o valor preparado para a referência apresentada");
    await pendingStep("E seleciona no campo Tipo a opção compatível definida na massa de teste");
    await pendingStep("E clica em Confirmar no cadastro");
    await pendingStep("Então o navegador deve apresentar a mensagem \"Inclusão realizada com sucesso!\"");
  });

  test.fixme("BDD-COT-007 — Limpar o código do indexador com Cancelar", { tag: ["@regressao","@funcional","@positivo","@alternativo","@modulo_tabelas_corporativas","@funcionalidade_inclusao_cotacoes","@media","@automatizar","@pending"] }, async () => {
    await pendingStep("Dado que Inclusão de Cotações está aberta");
    await pendingStep("E Cód. Indexador está preenchido com o código do indexador preparado");
    await pendingStep("Quando o usuário clica em Cancelar");
    await pendingStep("Então os dados preenchidos para a seleção devem ser limpos");
    await pendingStep("E a tela Inclusão de Cotações deve permanecer aberta");
  });

  test.fixme("BDD-COT-008 — Limpar os dados editados no cadastro com Cancelar", { tag: ["@regressao","@funcional","@positivo","@alternativo","@modulo_tabelas_corporativas","@funcionalidade_inclusao_cotacoes","@media","@automatizar","@pending"] }, async () => {
    await pendingStep("Dado que Cadastro de Cotações está aberto para o indexador preparado");
    await pendingStep("E Taxa/Índice foi preenchido com um valor de teste");
    await pendingStep("E a opção compatível definida na massa de teste foi selecionada no campo Tipo");
    await pendingStep("Quando o usuário clica em Cancelar");
    await pendingStep("Então os dados editados para inclusão devem ser limpos");
    await pendingStep("E a tela Cadastro de Cotações deve permanecer aberta");
  });

  test.fixme("BDD-COT-009 — Voltar do cadastro para a seleção sem salvar", { tag: ["@regressao","@funcional","@positivo","@alternativo","@modulo_tabelas_corporativas","@funcionalidade_inclusao_cotacoes","@alta","@automatizar","@pending"] }, async () => {
    await pendingStep("Dado que Cadastro de Cotações está aberto para o indexador preparado");
    await pendingStep("E Taxa/Índice contém um valor preparado ainda não confirmado");
    await pendingStep("Quando o usuário clica em Voltar");
    await pendingStep("Então a tela Inclusão de Cotações deve ser exibida");
    await pendingStep("E a cotação preenchida no cadastro não deve ser salva");
  });

  test.fixme("BDD-COT-010 — Voltar da seleção de indexador para a tela anterior", { tag: ["@regressao","@funcional","@positivo","@alternativo","@modulo_tabelas_corporativas","@funcionalidade_inclusao_cotacoes","@media","@automatizar","@pending"] }, async () => {
    await pendingStep("Dado que o usuário acessou Inclusão de Cotações por Operacional, Cotações e Incluir");
    await pendingStep("E o cadastro ainda não foi confirmado");
    await pendingStep("Quando o usuário clica em Voltar");
    await pendingStep("Então o sistema deve retornar à tela anterior à Inclusão de Cotações");
  });

  test.fixme("BDD-COT-011 — Informar um código de indexador inexistente", { tag: ["@regressao","@funcional","@negativo","@modulo_tabelas_corporativas","@funcionalidade_inclusao_cotacoes","@alta","@automatizar","@pending"] }, async () => {
    await pendingStep("Dado que Inclusão de Cotações está aberta");
    await pendingStep("E o código preparado para este caso não corresponde a um indexador cadastrado na base de teste");
    await pendingStep("Quando o usuário informa o código inexistente preparado em Cód. Indexador");
    await pendingStep("E clica em Confirmar");
    await pendingStep("Então o sistema deve apresentar a mensagem \"Registro Inexistente\"");
  });
});
