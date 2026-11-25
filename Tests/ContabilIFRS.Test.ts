// Fonte: ../cases/cases/interface/web-corporate-contabil-ifrs-01/01-cenarios-bdd.md
// Estrutura pendente: implementar ações e asserções antes de remover test.fixme.
import { test } from '@playwright/test';
import { pendingStep } from '../Scripts/utils';

test.describe("ContabilIFRS", { tag: "@contabil_ifrs" }, () => {

  test.fixme("BDD-WCC-IFRS-001 — Acessar Web Corporate Contábil IFRS pela home", { tag: ["@smoke","@regressao","@funcional","@positivo","@modulo_web_corporate_contabil_ifrs","@funcionalidade_fechamento","@alta","@automatizar","@pending"] }, async () => {
    await pendingStep("Dado que o usuário está autenticado na home do Função");
    await pendingStep("Quando o usuário clica em Web Corporate Contabil IFRS");
    await pendingStep("Então a tela principal do módulo deve apresentar o seletor BackOffice");
  });

  test.fixme("BDD-WCC-IFRS-002 — Selecionar o produto no BackOffice [Corporate Ativo]", { tag: ["@regressao","@funcional","@positivo","@modulo_web_corporate_contabil_ifrs","@funcionalidade_fechamento","@alta","@automatizar","@pending"] }, async () => {
    // | produto |
    // | Corporate Ativo |
    // | Repasse BNDES Ativo |
    // | Repasse BNDES Passivo |
    // | Repasse ME Ativo |
    // | Repasse ME Passivo |
    await pendingStep("Dado que a tela principal de Web Corporate Contábil IFRS está aberta");
    await pendingStep("Quando o usuário seleciona no BackOffice o produto Corporate Ativo");
    await pendingStep("Então o seletor BackOffice deve apresentar o nome do produto Corporate Ativo selecionado");
  });

  test.fixme("BDD-WCC-IFRS-002 — Selecionar o produto no BackOffice [Repasse BNDES Ativo]", { tag: ["@regressao","@funcional","@positivo","@modulo_web_corporate_contabil_ifrs","@funcionalidade_fechamento","@alta","@automatizar","@pending"] }, async () => {
    // | produto |
    // | Corporate Ativo |
    // | Repasse BNDES Ativo |
    // | Repasse BNDES Passivo |
    // | Repasse ME Ativo |
    // | Repasse ME Passivo |
    await pendingStep("Dado que a tela principal de Web Corporate Contábil IFRS está aberta");
    await pendingStep("Quando o usuário seleciona no BackOffice o produto Repasse BNDES Ativo");
    await pendingStep("Então o seletor BackOffice deve apresentar o nome do produto Repasse BNDES Ativo selecionado");
  });

  test.fixme("BDD-WCC-IFRS-002 — Selecionar o produto no BackOffice [Repasse BNDES Passivo]", { tag: ["@regressao","@funcional","@positivo","@modulo_web_corporate_contabil_ifrs","@funcionalidade_fechamento","@alta","@automatizar","@pending"] }, async () => {
    // | produto |
    // | Corporate Ativo |
    // | Repasse BNDES Ativo |
    // | Repasse BNDES Passivo |
    // | Repasse ME Ativo |
    // | Repasse ME Passivo |
    await pendingStep("Dado que a tela principal de Web Corporate Contábil IFRS está aberta");
    await pendingStep("Quando o usuário seleciona no BackOffice o produto Repasse BNDES Passivo");
    await pendingStep("Então o seletor BackOffice deve apresentar o nome do produto Repasse BNDES Passivo selecionado");
  });

  test.fixme("BDD-WCC-IFRS-002 — Selecionar o produto no BackOffice [Repasse ME Ativo]", { tag: ["@regressao","@funcional","@positivo","@modulo_web_corporate_contabil_ifrs","@funcionalidade_fechamento","@alta","@automatizar","@pending"] }, async () => {
    // | produto |
    // | Corporate Ativo |
    // | Repasse BNDES Ativo |
    // | Repasse BNDES Passivo |
    // | Repasse ME Ativo |
    // | Repasse ME Passivo |
    await pendingStep("Dado que a tela principal de Web Corporate Contábil IFRS está aberta");
    await pendingStep("Quando o usuário seleciona no BackOffice o produto Repasse ME Ativo");
    await pendingStep("Então o seletor BackOffice deve apresentar o nome do produto Repasse ME Ativo selecionado");
  });

  test.fixme("BDD-WCC-IFRS-002 — Selecionar o produto no BackOffice [Repasse ME Passivo]", { tag: ["@regressao","@funcional","@positivo","@modulo_web_corporate_contabil_ifrs","@funcionalidade_fechamento","@alta","@automatizar","@pending"] }, async () => {
    // | produto |
    // | Corporate Ativo |
    // | Repasse BNDES Ativo |
    // | Repasse BNDES Passivo |
    // | Repasse ME Ativo |
    // | Repasse ME Passivo |
    await pendingStep("Dado que a tela principal de Web Corporate Contábil IFRS está aberta");
    await pendingStep("Quando o usuário seleciona no BackOffice o produto Repasse ME Passivo");
    await pendingStep("Então o seletor BackOffice deve apresentar o nome do produto Repasse ME Passivo selecionado");
  });

  test.fixme("BDD-WCC-IFRS-003 — Realizar abertura contábil para a referência preparada [Corporate Ativo]", { tag: ["@regressao","@funcional","@positivo","@modulo_web_corporate_contabil_ifrs","@funcionalidade_fechamento","@alta","@automatizar","@pending"] }, async () => {
    // | produto |
    // | Corporate Ativo |
    // | Repasse BNDES Ativo |
    // | Repasse BNDES Passivo |
    // | Repasse ME Ativo |
    // | Repasse ME Passivo |
    await pendingStep("Dado que a tela principal de Web Corporate Contábil IFRS está aberta para o produto Corporate Ativo selecionado no BackOffice");
    await pendingStep("E a referência de abertura foi preparada para esse produto");
    await pendingStep("Quando o usuário abre o menu Fechamento");
    await pendingStep("E seleciona Abertura Contábil");
    await pendingStep("E o usuário informa a referência no campo Abertura do dia");
    await pendingStep("E clica em Confirmar");
    await pendingStep("E aguarda a conclusão da abertura");
    await pendingStep("Então a tabela do modal Abertura de saldos contábeis deve apresentar os passos da abertura realizada para a referência informada");
    await pendingStep("E as linhas da execução atual devem apresentar a data e a mensagem do respectivo processo");
  });

  test.fixme("BDD-WCC-IFRS-003 — Realizar abertura contábil para a referência preparada [Repasse BNDES Ativo]", { tag: ["@regressao","@funcional","@positivo","@modulo_web_corporate_contabil_ifrs","@funcionalidade_fechamento","@alta","@automatizar","@pending"] }, async () => {
    // | produto |
    // | Corporate Ativo |
    // | Repasse BNDES Ativo |
    // | Repasse BNDES Passivo |
    // | Repasse ME Ativo |
    // | Repasse ME Passivo |
    await pendingStep("Dado que a tela principal de Web Corporate Contábil IFRS está aberta para o produto Repasse BNDES Ativo selecionado no BackOffice");
    await pendingStep("E a referência de abertura foi preparada para esse produto");
    await pendingStep("Quando o usuário abre o menu Fechamento");
    await pendingStep("E seleciona Abertura Contábil");
    await pendingStep("E o usuário informa a referência no campo Abertura do dia");
    await pendingStep("E clica em Confirmar");
    await pendingStep("E aguarda a conclusão da abertura");
    await pendingStep("Então a tabela do modal Abertura de saldos contábeis deve apresentar os passos da abertura realizada para a referência informada");
    await pendingStep("E as linhas da execução atual devem apresentar a data e a mensagem do respectivo processo");
  });

  test.fixme("BDD-WCC-IFRS-003 — Realizar abertura contábil para a referência preparada [Repasse BNDES Passivo]", { tag: ["@regressao","@funcional","@positivo","@modulo_web_corporate_contabil_ifrs","@funcionalidade_fechamento","@alta","@automatizar","@pending"] }, async () => {
    // | produto |
    // | Corporate Ativo |
    // | Repasse BNDES Ativo |
    // | Repasse BNDES Passivo |
    // | Repasse ME Ativo |
    // | Repasse ME Passivo |
    await pendingStep("Dado que a tela principal de Web Corporate Contábil IFRS está aberta para o produto Repasse BNDES Passivo selecionado no BackOffice");
    await pendingStep("E a referência de abertura foi preparada para esse produto");
    await pendingStep("Quando o usuário abre o menu Fechamento");
    await pendingStep("E seleciona Abertura Contábil");
    await pendingStep("E o usuário informa a referência no campo Abertura do dia");
    await pendingStep("E clica em Confirmar");
    await pendingStep("E aguarda a conclusão da abertura");
    await pendingStep("Então a tabela do modal Abertura de saldos contábeis deve apresentar os passos da abertura realizada para a referência informada");
    await pendingStep("E as linhas da execução atual devem apresentar a data e a mensagem do respectivo processo");
  });

  test.fixme("BDD-WCC-IFRS-003 — Realizar abertura contábil para a referência preparada [Repasse ME Ativo]", { tag: ["@regressao","@funcional","@positivo","@modulo_web_corporate_contabil_ifrs","@funcionalidade_fechamento","@alta","@automatizar","@pending"] }, async () => {
    // | produto |
    // | Corporate Ativo |
    // | Repasse BNDES Ativo |
    // | Repasse BNDES Passivo |
    // | Repasse ME Ativo |
    // | Repasse ME Passivo |
    await pendingStep("Dado que a tela principal de Web Corporate Contábil IFRS está aberta para o produto Repasse ME Ativo selecionado no BackOffice");
    await pendingStep("E a referência de abertura foi preparada para esse produto");
    await pendingStep("Quando o usuário abre o menu Fechamento");
    await pendingStep("E seleciona Abertura Contábil");
    await pendingStep("E o usuário informa a referência no campo Abertura do dia");
    await pendingStep("E clica em Confirmar");
    await pendingStep("E aguarda a conclusão da abertura");
    await pendingStep("Então a tabela do modal Abertura de saldos contábeis deve apresentar os passos da abertura realizada para a referência informada");
    await pendingStep("E as linhas da execução atual devem apresentar a data e a mensagem do respectivo processo");
  });

  test.fixme("BDD-WCC-IFRS-003 — Realizar abertura contábil para a referência preparada [Repasse ME Passivo]", { tag: ["@regressao","@funcional","@positivo","@modulo_web_corporate_contabil_ifrs","@funcionalidade_fechamento","@alta","@automatizar","@pending"] }, async () => {
    // | produto |
    // | Corporate Ativo |
    // | Repasse BNDES Ativo |
    // | Repasse BNDES Passivo |
    // | Repasse ME Ativo |
    // | Repasse ME Passivo |
    await pendingStep("Dado que a tela principal de Web Corporate Contábil IFRS está aberta para o produto Repasse ME Passivo selecionado no BackOffice");
    await pendingStep("E a referência de abertura foi preparada para esse produto");
    await pendingStep("Quando o usuário abre o menu Fechamento");
    await pendingStep("E seleciona Abertura Contábil");
    await pendingStep("E o usuário informa a referência no campo Abertura do dia");
    await pendingStep("E clica em Confirmar");
    await pendingStep("E aguarda a conclusão da abertura");
    await pendingStep("Então a tabela do modal Abertura de saldos contábeis deve apresentar os passos da abertura realizada para a referência informada");
    await pendingStep("E as linhas da execução atual devem apresentar a data e a mensagem do respectivo processo");
  });

  test.fixme("BDD-WCC-IFRS-004 — Realizar pré-fechamento no dia útil anterior à inicialização [Corporate Ativo]", { tag: ["@regressao","@funcional","@positivo","@modulo_web_corporate_contabil_ifrs","@funcionalidade_fechamento","@alta","@automatizar","@pending"] }, async () => {
    // | produto |
    // | Corporate Ativo |
    // | Repasse BNDES Ativo |
    // | Repasse BNDES Passivo |
    // | Repasse ME Ativo |
    // | Repasse ME Passivo |
    await pendingStep("Dado que a tela principal de Web Corporate Contábil IFRS está aberta para o produto Corporate Ativo selecionado no BackOffice");
    await pendingStep("E o produto está inicializado");
    await pendingStep("Quando o usuário abre o menu Fechamento");
    await pendingStep("E seleciona Pré-Fechamento Contábil");
    await pendingStep("E o usuário preenche Data do Pré-Fechamento com D-1");
    await pendingStep("E clica em Confirmar");
    await pendingStep("E aguarda a conclusão do processamento");
    await pendingStep("Então o modal deve apresentar Sucesso para a execução atual");
    await pendingStep("E o campo Data do Último Pré-Fechamento deve apresentar a data informada");
  });

  test.fixme("BDD-WCC-IFRS-004 — Realizar pré-fechamento no dia útil anterior à inicialização [Repasse BNDES Ativo]", { tag: ["@regressao","@funcional","@positivo","@modulo_web_corporate_contabil_ifrs","@funcionalidade_fechamento","@alta","@automatizar","@pending"] }, async () => {
    // | produto |
    // | Corporate Ativo |
    // | Repasse BNDES Ativo |
    // | Repasse BNDES Passivo |
    // | Repasse ME Ativo |
    // | Repasse ME Passivo |
    await pendingStep("Dado que a tela principal de Web Corporate Contábil IFRS está aberta para o produto Repasse BNDES Ativo selecionado no BackOffice");
    await pendingStep("E o produto está inicializado");
    await pendingStep("Quando o usuário abre o menu Fechamento");
    await pendingStep("E seleciona Pré-Fechamento Contábil");
    await pendingStep("E o usuário preenche Data do Pré-Fechamento com D-1");
    await pendingStep("E clica em Confirmar");
    await pendingStep("E aguarda a conclusão do processamento");
    await pendingStep("Então o modal deve apresentar Sucesso para a execução atual");
    await pendingStep("E o campo Data do Último Pré-Fechamento deve apresentar a data informada");
  });

  test.fixme("BDD-WCC-IFRS-004 — Realizar pré-fechamento no dia útil anterior à inicialização [Repasse BNDES Passivo]", { tag: ["@regressao","@funcional","@positivo","@modulo_web_corporate_contabil_ifrs","@funcionalidade_fechamento","@alta","@automatizar","@pending"] }, async () => {
    // | produto |
    // | Corporate Ativo |
    // | Repasse BNDES Ativo |
    // | Repasse BNDES Passivo |
    // | Repasse ME Ativo |
    // | Repasse ME Passivo |
    await pendingStep("Dado que a tela principal de Web Corporate Contábil IFRS está aberta para o produto Repasse BNDES Passivo selecionado no BackOffice");
    await pendingStep("E o produto está inicializado");
    await pendingStep("Quando o usuário abre o menu Fechamento");
    await pendingStep("E seleciona Pré-Fechamento Contábil");
    await pendingStep("E o usuário preenche Data do Pré-Fechamento com D-1");
    await pendingStep("E clica em Confirmar");
    await pendingStep("E aguarda a conclusão do processamento");
    await pendingStep("Então o modal deve apresentar Sucesso para a execução atual");
    await pendingStep("E o campo Data do Último Pré-Fechamento deve apresentar a data informada");
  });

  test.fixme("BDD-WCC-IFRS-004 — Realizar pré-fechamento no dia útil anterior à inicialização [Repasse ME Ativo]", { tag: ["@regressao","@funcional","@positivo","@modulo_web_corporate_contabil_ifrs","@funcionalidade_fechamento","@alta","@automatizar","@pending"] }, async () => {
    // | produto |
    // | Corporate Ativo |
    // | Repasse BNDES Ativo |
    // | Repasse BNDES Passivo |
    // | Repasse ME Ativo |
    // | Repasse ME Passivo |
    await pendingStep("Dado que a tela principal de Web Corporate Contábil IFRS está aberta para o produto Repasse ME Ativo selecionado no BackOffice");
    await pendingStep("E o produto está inicializado");
    await pendingStep("Quando o usuário abre o menu Fechamento");
    await pendingStep("E seleciona Pré-Fechamento Contábil");
    await pendingStep("E o usuário preenche Data do Pré-Fechamento com D-1");
    await pendingStep("E clica em Confirmar");
    await pendingStep("E aguarda a conclusão do processamento");
    await pendingStep("Então o modal deve apresentar Sucesso para a execução atual");
    await pendingStep("E o campo Data do Último Pré-Fechamento deve apresentar a data informada");
  });

  test.fixme("BDD-WCC-IFRS-004 — Realizar pré-fechamento no dia útil anterior à inicialização [Repasse ME Passivo]", { tag: ["@regressao","@funcional","@positivo","@modulo_web_corporate_contabil_ifrs","@funcionalidade_fechamento","@alta","@automatizar","@pending"] }, async () => {
    // | produto |
    // | Corporate Ativo |
    // | Repasse BNDES Ativo |
    // | Repasse BNDES Passivo |
    // | Repasse ME Ativo |
    // | Repasse ME Passivo |
    await pendingStep("Dado que a tela principal de Web Corporate Contábil IFRS está aberta para o produto Repasse ME Passivo selecionado no BackOffice");
    await pendingStep("E o produto está inicializado");
    await pendingStep("Quando o usuário abre o menu Fechamento");
    await pendingStep("E seleciona Pré-Fechamento Contábil");
    await pendingStep("E o usuário preenche Data do Pré-Fechamento com D-1");
    await pendingStep("E clica em Confirmar");
    await pendingStep("E aguarda a conclusão do processamento");
    await pendingStep("Então o modal deve apresentar Sucesso para a execução atual");
    await pendingStep("E o campo Data do Último Pré-Fechamento deve apresentar a data informada");
  });

  test.fixme("BDD-WCC-IFRS-005 — Realizar fechamento sem comparação de saldos [Corporate Ativo]", { tag: ["@regressao","@funcional","@positivo","@modulo_web_corporate_contabil_ifrs","@funcionalidade_fechamento","@alta","@automatizar","@pending"] }, async () => {
    // | produto |
    // | Corporate Ativo |
    // | Repasse BNDES Ativo |
    // | Repasse BNDES Passivo |
    // | Repasse ME Ativo |
    // | Repasse ME Passivo |
    await pendingStep("Dado que a tela principal de Web Corporate Contábil IFRS está aberta para o produto Corporate Ativo selecionado no BackOffice");
    await pendingStep("E o produto está inicializado");
    await pendingStep("E o pré-fechamento foi concluído para D-1");
    await pendingStep("Quando o usuário abre o menu Fechamento");
    await pendingStep("E seleciona Fechamento Contábil");
    await pendingStep("E o usuário mantém desmarcado o checkbox Comparar saldos na Posição de saldos sintético/analítico");
    await pendingStep("E o usuário preenche Fechar até o dia com D-1");
    await pendingStep("E clica em Confirmar");
    await pendingStep("E aguarda a conclusão do processamento");
    await pendingStep("Então o modal deve apresentar Sucesso para a execução atual");
    await pendingStep("E o campo Data do Último Fechamento deve apresentar a data informada");
  });

  test.fixme("BDD-WCC-IFRS-005 — Realizar fechamento sem comparação de saldos [Repasse BNDES Ativo]", { tag: ["@regressao","@funcional","@positivo","@modulo_web_corporate_contabil_ifrs","@funcionalidade_fechamento","@alta","@automatizar","@pending"] }, async () => {
    // | produto |
    // | Corporate Ativo |
    // | Repasse BNDES Ativo |
    // | Repasse BNDES Passivo |
    // | Repasse ME Ativo |
    // | Repasse ME Passivo |
    await pendingStep("Dado que a tela principal de Web Corporate Contábil IFRS está aberta para o produto Repasse BNDES Ativo selecionado no BackOffice");
    await pendingStep("E o produto está inicializado");
    await pendingStep("E o pré-fechamento foi concluído para D-1");
    await pendingStep("Quando o usuário abre o menu Fechamento");
    await pendingStep("E seleciona Fechamento Contábil");
    await pendingStep("E o usuário mantém desmarcado o checkbox Comparar saldos na Posição de saldos sintético/analítico");
    await pendingStep("E o usuário preenche Fechar até o dia com D-1");
    await pendingStep("E clica em Confirmar");
    await pendingStep("E aguarda a conclusão do processamento");
    await pendingStep("Então o modal deve apresentar Sucesso para a execução atual");
    await pendingStep("E o campo Data do Último Fechamento deve apresentar a data informada");
  });

  test.fixme("BDD-WCC-IFRS-005 — Realizar fechamento sem comparação de saldos [Repasse BNDES Passivo]", { tag: ["@regressao","@funcional","@positivo","@modulo_web_corporate_contabil_ifrs","@funcionalidade_fechamento","@alta","@automatizar","@pending"] }, async () => {
    // | produto |
    // | Corporate Ativo |
    // | Repasse BNDES Ativo |
    // | Repasse BNDES Passivo |
    // | Repasse ME Ativo |
    // | Repasse ME Passivo |
    await pendingStep("Dado que a tela principal de Web Corporate Contábil IFRS está aberta para o produto Repasse BNDES Passivo selecionado no BackOffice");
    await pendingStep("E o produto está inicializado");
    await pendingStep("E o pré-fechamento foi concluído para D-1");
    await pendingStep("Quando o usuário abre o menu Fechamento");
    await pendingStep("E seleciona Fechamento Contábil");
    await pendingStep("E o usuário mantém desmarcado o checkbox Comparar saldos na Posição de saldos sintético/analítico");
    await pendingStep("E o usuário preenche Fechar até o dia com D-1");
    await pendingStep("E clica em Confirmar");
    await pendingStep("E aguarda a conclusão do processamento");
    await pendingStep("Então o modal deve apresentar Sucesso para a execução atual");
    await pendingStep("E o campo Data do Último Fechamento deve apresentar a data informada");
  });

  test.fixme("BDD-WCC-IFRS-005 — Realizar fechamento sem comparação de saldos [Repasse ME Ativo]", { tag: ["@regressao","@funcional","@positivo","@modulo_web_corporate_contabil_ifrs","@funcionalidade_fechamento","@alta","@automatizar","@pending"] }, async () => {
    // | produto |
    // | Corporate Ativo |
    // | Repasse BNDES Ativo |
    // | Repasse BNDES Passivo |
    // | Repasse ME Ativo |
    // | Repasse ME Passivo |
    await pendingStep("Dado que a tela principal de Web Corporate Contábil IFRS está aberta para o produto Repasse ME Ativo selecionado no BackOffice");
    await pendingStep("E o produto está inicializado");
    await pendingStep("E o pré-fechamento foi concluído para D-1");
    await pendingStep("Quando o usuário abre o menu Fechamento");
    await pendingStep("E seleciona Fechamento Contábil");
    await pendingStep("E o usuário mantém desmarcado o checkbox Comparar saldos na Posição de saldos sintético/analítico");
    await pendingStep("E o usuário preenche Fechar até o dia com D-1");
    await pendingStep("E clica em Confirmar");
    await pendingStep("E aguarda a conclusão do processamento");
    await pendingStep("Então o modal deve apresentar Sucesso para a execução atual");
    await pendingStep("E o campo Data do Último Fechamento deve apresentar a data informada");
  });

  test.fixme("BDD-WCC-IFRS-005 — Realizar fechamento sem comparação de saldos [Repasse ME Passivo]", { tag: ["@regressao","@funcional","@positivo","@modulo_web_corporate_contabil_ifrs","@funcionalidade_fechamento","@alta","@automatizar","@pending"] }, async () => {
    // | produto |
    // | Corporate Ativo |
    // | Repasse BNDES Ativo |
    // | Repasse BNDES Passivo |
    // | Repasse ME Ativo |
    // | Repasse ME Passivo |
    await pendingStep("Dado que a tela principal de Web Corporate Contábil IFRS está aberta para o produto Repasse ME Passivo selecionado no BackOffice");
    await pendingStep("E o produto está inicializado");
    await pendingStep("E o pré-fechamento foi concluído para D-1");
    await pendingStep("Quando o usuário abre o menu Fechamento");
    await pendingStep("E seleciona Fechamento Contábil");
    await pendingStep("E o usuário mantém desmarcado o checkbox Comparar saldos na Posição de saldos sintético/analítico");
    await pendingStep("E o usuário preenche Fechar até o dia com D-1");
    await pendingStep("E clica em Confirmar");
    await pendingStep("E aguarda a conclusão do processamento");
    await pendingStep("Então o modal deve apresentar Sucesso para a execução atual");
    await pendingStep("E o campo Data do Último Fechamento deve apresentar a data informada");
  });

  test.fixme("BDD-WCC-IFRS-006 — Fechar com comparação de saldos e baixar o arquivo gerado [Corporate Ativo]", { tag: ["@regressao","@funcional","@positivo","@alternativo","@modulo_web_corporate_contabil_ifrs","@funcionalidade_fechamento","@alta","@automatizar","@pending"] }, async () => {
    // | produto |
    // | Corporate Ativo |
    // | Repasse BNDES Ativo |
    // | Repasse BNDES Passivo |
    // | Repasse ME Ativo |
    // | Repasse ME Passivo |
    await pendingStep("Dado que a tela principal de Web Corporate Contábil IFRS está aberta para o produto Corporate Ativo selecionado no BackOffice");
    await pendingStep("E o produto está inicializado");
    await pendingStep("E o pré-fechamento foi concluído para D-1");
    await pendingStep("E a base contém movimentações preparadas para essa referência");
    await pendingStep("Quando o usuário abre o menu Fechamento");
    await pendingStep("E seleciona Fechamento Contábil");
    await pendingStep("E o usuário informa D-1 em Fechar até o dia");
    await pendingStep("E marca Comparar saldos na Posição de saldos sintético/analítico");
    await pendingStep("E clica em Confirmar");
    await pendingStep("E aguarda a conclusão do processamento");
    await pendingStep("E clica em Baixar Arquivo");
    await pendingStep("Então o arquivo gerado pela opção de comparação deve ser disponibilizado para download");
    await pendingStep("E o modal deve apresentar Sucesso para a execução atual");
    await pendingStep("E o campo Data do Último Fechamento deve apresentar a data informada");
  });

  test.fixme("BDD-WCC-IFRS-006 — Fechar com comparação de saldos e baixar o arquivo gerado [Repasse BNDES Ativo]", { tag: ["@regressao","@funcional","@positivo","@alternativo","@modulo_web_corporate_contabil_ifrs","@funcionalidade_fechamento","@alta","@automatizar","@pending"] }, async () => {
    // | produto |
    // | Corporate Ativo |
    // | Repasse BNDES Ativo |
    // | Repasse BNDES Passivo |
    // | Repasse ME Ativo |
    // | Repasse ME Passivo |
    await pendingStep("Dado que a tela principal de Web Corporate Contábil IFRS está aberta para o produto Repasse BNDES Ativo selecionado no BackOffice");
    await pendingStep("E o produto está inicializado");
    await pendingStep("E o pré-fechamento foi concluído para D-1");
    await pendingStep("E a base contém movimentações preparadas para essa referência");
    await pendingStep("Quando o usuário abre o menu Fechamento");
    await pendingStep("E seleciona Fechamento Contábil");
    await pendingStep("E o usuário informa D-1 em Fechar até o dia");
    await pendingStep("E marca Comparar saldos na Posição de saldos sintético/analítico");
    await pendingStep("E clica em Confirmar");
    await pendingStep("E aguarda a conclusão do processamento");
    await pendingStep("E clica em Baixar Arquivo");
    await pendingStep("Então o arquivo gerado pela opção de comparação deve ser disponibilizado para download");
    await pendingStep("E o modal deve apresentar Sucesso para a execução atual");
    await pendingStep("E o campo Data do Último Fechamento deve apresentar a data informada");
  });

  test.fixme("BDD-WCC-IFRS-006 — Fechar com comparação de saldos e baixar o arquivo gerado [Repasse BNDES Passivo]", { tag: ["@regressao","@funcional","@positivo","@alternativo","@modulo_web_corporate_contabil_ifrs","@funcionalidade_fechamento","@alta","@automatizar","@pending"] }, async () => {
    // | produto |
    // | Corporate Ativo |
    // | Repasse BNDES Ativo |
    // | Repasse BNDES Passivo |
    // | Repasse ME Ativo |
    // | Repasse ME Passivo |
    await pendingStep("Dado que a tela principal de Web Corporate Contábil IFRS está aberta para o produto Repasse BNDES Passivo selecionado no BackOffice");
    await pendingStep("E o produto está inicializado");
    await pendingStep("E o pré-fechamento foi concluído para D-1");
    await pendingStep("E a base contém movimentações preparadas para essa referência");
    await pendingStep("Quando o usuário abre o menu Fechamento");
    await pendingStep("E seleciona Fechamento Contábil");
    await pendingStep("E o usuário informa D-1 em Fechar até o dia");
    await pendingStep("E marca Comparar saldos na Posição de saldos sintético/analítico");
    await pendingStep("E clica em Confirmar");
    await pendingStep("E aguarda a conclusão do processamento");
    await pendingStep("E clica em Baixar Arquivo");
    await pendingStep("Então o arquivo gerado pela opção de comparação deve ser disponibilizado para download");
    await pendingStep("E o modal deve apresentar Sucesso para a execução atual");
    await pendingStep("E o campo Data do Último Fechamento deve apresentar a data informada");
  });

  test.fixme("BDD-WCC-IFRS-006 — Fechar com comparação de saldos e baixar o arquivo gerado [Repasse ME Ativo]", { tag: ["@regressao","@funcional","@positivo","@alternativo","@modulo_web_corporate_contabil_ifrs","@funcionalidade_fechamento","@alta","@automatizar","@pending"] }, async () => {
    // | produto |
    // | Corporate Ativo |
    // | Repasse BNDES Ativo |
    // | Repasse BNDES Passivo |
    // | Repasse ME Ativo |
    // | Repasse ME Passivo |
    await pendingStep("Dado que a tela principal de Web Corporate Contábil IFRS está aberta para o produto Repasse ME Ativo selecionado no BackOffice");
    await pendingStep("E o produto está inicializado");
    await pendingStep("E o pré-fechamento foi concluído para D-1");
    await pendingStep("E a base contém movimentações preparadas para essa referência");
    await pendingStep("Quando o usuário abre o menu Fechamento");
    await pendingStep("E seleciona Fechamento Contábil");
    await pendingStep("E o usuário informa D-1 em Fechar até o dia");
    await pendingStep("E marca Comparar saldos na Posição de saldos sintético/analítico");
    await pendingStep("E clica em Confirmar");
    await pendingStep("E aguarda a conclusão do processamento");
    await pendingStep("E clica em Baixar Arquivo");
    await pendingStep("Então o arquivo gerado pela opção de comparação deve ser disponibilizado para download");
    await pendingStep("E o modal deve apresentar Sucesso para a execução atual");
    await pendingStep("E o campo Data do Último Fechamento deve apresentar a data informada");
  });

  test.fixme("BDD-WCC-IFRS-006 — Fechar com comparação de saldos e baixar o arquivo gerado [Repasse ME Passivo]", { tag: ["@regressao","@funcional","@positivo","@alternativo","@modulo_web_corporate_contabil_ifrs","@funcionalidade_fechamento","@alta","@automatizar","@pending"] }, async () => {
    // | produto |
    // | Corporate Ativo |
    // | Repasse BNDES Ativo |
    // | Repasse BNDES Passivo |
    // | Repasse ME Ativo |
    // | Repasse ME Passivo |
    await pendingStep("Dado que a tela principal de Web Corporate Contábil IFRS está aberta para o produto Repasse ME Passivo selecionado no BackOffice");
    await pendingStep("E o produto está inicializado");
    await pendingStep("E o pré-fechamento foi concluído para D-1");
    await pendingStep("E a base contém movimentações preparadas para essa referência");
    await pendingStep("Quando o usuário abre o menu Fechamento");
    await pendingStep("E seleciona Fechamento Contábil");
    await pendingStep("E o usuário informa D-1 em Fechar até o dia");
    await pendingStep("E marca Comparar saldos na Posição de saldos sintético/analítico");
    await pendingStep("E clica em Confirmar");
    await pendingStep("E aguarda a conclusão do processamento");
    await pendingStep("E clica em Baixar Arquivo");
    await pendingStep("Então o arquivo gerado pela opção de comparação deve ser disponibilizado para download");
    await pendingStep("E o modal deve apresentar Sucesso para a execução atual");
    await pendingStep("E o campo Data do Último Fechamento deve apresentar a data informada");
  });

  test.fixme("BDD-WCC-IFRS-007 — Voltar de Abertura Contábil sem executar a rotina [Corporate Ativo]", { tag: ["@regressao","@funcional","@positivo","@alternativo","@modulo_web_corporate_contabil_ifrs","@funcionalidade_fechamento","@media","@automatizar","@pending"] }, async () => {
    // | produto |
    // | Corporate Ativo |
    // | Repasse BNDES Ativo |
    // | Repasse BNDES Passivo |
    // | Repasse ME Ativo |
    // | Repasse ME Passivo |
    await pendingStep("Dado que a tela principal de Web Corporate Contábil IFRS está aberta para o produto Corporate Ativo selecionado no BackOffice");
    await pendingStep("E o estado contábil e o histórico anteriores do produto foram registrados");
    await pendingStep("Quando o usuário abre o menu Fechamento");
    await pendingStep("E seleciona Abertura Contábil");
    await pendingStep("E o usuário preenche o campo Abertura do dia com uma referência preparada");
    await pendingStep("E Confirmar ainda não foi acionado");
    await pendingStep("E o usuário clica em Voltar");
    await pendingStep("Então a tela principal de Web Corporate Contábil IFRS deve ser exibida");
    await pendingStep("E a rotina Abertura Contábil não deve ser executada para a referência preenchida");
  });

  test.fixme("BDD-WCC-IFRS-007 — Voltar de Abertura Contábil sem executar a rotina [Repasse BNDES Ativo]", { tag: ["@regressao","@funcional","@positivo","@alternativo","@modulo_web_corporate_contabil_ifrs","@funcionalidade_fechamento","@media","@automatizar","@pending"] }, async () => {
    // | produto |
    // | Corporate Ativo |
    // | Repasse BNDES Ativo |
    // | Repasse BNDES Passivo |
    // | Repasse ME Ativo |
    // | Repasse ME Passivo |
    await pendingStep("Dado que a tela principal de Web Corporate Contábil IFRS está aberta para o produto Repasse BNDES Ativo selecionado no BackOffice");
    await pendingStep("E o estado contábil e o histórico anteriores do produto foram registrados");
    await pendingStep("Quando o usuário abre o menu Fechamento");
    await pendingStep("E seleciona Abertura Contábil");
    await pendingStep("E o usuário preenche o campo Abertura do dia com uma referência preparada");
    await pendingStep("E Confirmar ainda não foi acionado");
    await pendingStep("E o usuário clica em Voltar");
    await pendingStep("Então a tela principal de Web Corporate Contábil IFRS deve ser exibida");
    await pendingStep("E a rotina Abertura Contábil não deve ser executada para a referência preenchida");
  });

  test.fixme("BDD-WCC-IFRS-007 — Voltar de Abertura Contábil sem executar a rotina [Repasse BNDES Passivo]", { tag: ["@regressao","@funcional","@positivo","@alternativo","@modulo_web_corporate_contabil_ifrs","@funcionalidade_fechamento","@media","@automatizar","@pending"] }, async () => {
    // | produto |
    // | Corporate Ativo |
    // | Repasse BNDES Ativo |
    // | Repasse BNDES Passivo |
    // | Repasse ME Ativo |
    // | Repasse ME Passivo |
    await pendingStep("Dado que a tela principal de Web Corporate Contábil IFRS está aberta para o produto Repasse BNDES Passivo selecionado no BackOffice");
    await pendingStep("E o estado contábil e o histórico anteriores do produto foram registrados");
    await pendingStep("Quando o usuário abre o menu Fechamento");
    await pendingStep("E seleciona Abertura Contábil");
    await pendingStep("E o usuário preenche o campo Abertura do dia com uma referência preparada");
    await pendingStep("E Confirmar ainda não foi acionado");
    await pendingStep("E o usuário clica em Voltar");
    await pendingStep("Então a tela principal de Web Corporate Contábil IFRS deve ser exibida");
    await pendingStep("E a rotina Abertura Contábil não deve ser executada para a referência preenchida");
  });

  test.fixme("BDD-WCC-IFRS-007 — Voltar de Abertura Contábil sem executar a rotina [Repasse ME Ativo]", { tag: ["@regressao","@funcional","@positivo","@alternativo","@modulo_web_corporate_contabil_ifrs","@funcionalidade_fechamento","@media","@automatizar","@pending"] }, async () => {
    // | produto |
    // | Corporate Ativo |
    // | Repasse BNDES Ativo |
    // | Repasse BNDES Passivo |
    // | Repasse ME Ativo |
    // | Repasse ME Passivo |
    await pendingStep("Dado que a tela principal de Web Corporate Contábil IFRS está aberta para o produto Repasse ME Ativo selecionado no BackOffice");
    await pendingStep("E o estado contábil e o histórico anteriores do produto foram registrados");
    await pendingStep("Quando o usuário abre o menu Fechamento");
    await pendingStep("E seleciona Abertura Contábil");
    await pendingStep("E o usuário preenche o campo Abertura do dia com uma referência preparada");
    await pendingStep("E Confirmar ainda não foi acionado");
    await pendingStep("E o usuário clica em Voltar");
    await pendingStep("Então a tela principal de Web Corporate Contábil IFRS deve ser exibida");
    await pendingStep("E a rotina Abertura Contábil não deve ser executada para a referência preenchida");
  });

  test.fixme("BDD-WCC-IFRS-007 — Voltar de Abertura Contábil sem executar a rotina [Repasse ME Passivo]", { tag: ["@regressao","@funcional","@positivo","@alternativo","@modulo_web_corporate_contabil_ifrs","@funcionalidade_fechamento","@media","@automatizar","@pending"] }, async () => {
    // | produto |
    // | Corporate Ativo |
    // | Repasse BNDES Ativo |
    // | Repasse BNDES Passivo |
    // | Repasse ME Ativo |
    // | Repasse ME Passivo |
    await pendingStep("Dado que a tela principal de Web Corporate Contábil IFRS está aberta para o produto Repasse ME Passivo selecionado no BackOffice");
    await pendingStep("E o estado contábil e o histórico anteriores do produto foram registrados");
    await pendingStep("Quando o usuário abre o menu Fechamento");
    await pendingStep("E seleciona Abertura Contábil");
    await pendingStep("E o usuário preenche o campo Abertura do dia com uma referência preparada");
    await pendingStep("E Confirmar ainda não foi acionado");
    await pendingStep("E o usuário clica em Voltar");
    await pendingStep("Então a tela principal de Web Corporate Contábil IFRS deve ser exibida");
    await pendingStep("E a rotina Abertura Contábil não deve ser executada para a referência preenchida");
  });

  test.fixme("BDD-WCC-IFRS-008 — Voltar de Pré-Fechamento Contábil sem executar a rotina [Corporate Ativo]", { tag: ["@regressao","@funcional","@positivo","@alternativo","@modulo_web_corporate_contabil_ifrs","@funcionalidade_fechamento","@media","@automatizar","@pending"] }, async () => {
    // | produto |
    // | Corporate Ativo |
    // | Repasse BNDES Ativo |
    // | Repasse BNDES Passivo |
    // | Repasse ME Ativo |
    // | Repasse ME Passivo |
    await pendingStep("Dado que a tela principal de Web Corporate Contábil IFRS está aberta para o produto Corporate Ativo selecionado no BackOffice");
    await pendingStep("E o estado contábil e o histórico anteriores do produto foram registrados");
    await pendingStep("Quando o usuário abre o menu Fechamento");
    await pendingStep("E seleciona Pré-Fechamento Contábil");
    await pendingStep("E o usuário preenche o campo Data do Pré-Fechamento com uma referência preparada");
    await pendingStep("E Confirmar ainda não foi acionado");
    await pendingStep("E o usuário clica em Voltar");
    await pendingStep("Então a tela principal de Web Corporate Contábil IFRS deve ser exibida");
    await pendingStep("E a rotina Pré-Fechamento Contábil não deve ser executada para a referência preenchida");
  });

  test.fixme("BDD-WCC-IFRS-008 — Voltar de Pré-Fechamento Contábil sem executar a rotina [Repasse BNDES Ativo]", { tag: ["@regressao","@funcional","@positivo","@alternativo","@modulo_web_corporate_contabil_ifrs","@funcionalidade_fechamento","@media","@automatizar","@pending"] }, async () => {
    // | produto |
    // | Corporate Ativo |
    // | Repasse BNDES Ativo |
    // | Repasse BNDES Passivo |
    // | Repasse ME Ativo |
    // | Repasse ME Passivo |
    await pendingStep("Dado que a tela principal de Web Corporate Contábil IFRS está aberta para o produto Repasse BNDES Ativo selecionado no BackOffice");
    await pendingStep("E o estado contábil e o histórico anteriores do produto foram registrados");
    await pendingStep("Quando o usuário abre o menu Fechamento");
    await pendingStep("E seleciona Pré-Fechamento Contábil");
    await pendingStep("E o usuário preenche o campo Data do Pré-Fechamento com uma referência preparada");
    await pendingStep("E Confirmar ainda não foi acionado");
    await pendingStep("E o usuário clica em Voltar");
    await pendingStep("Então a tela principal de Web Corporate Contábil IFRS deve ser exibida");
    await pendingStep("E a rotina Pré-Fechamento Contábil não deve ser executada para a referência preenchida");
  });

  test.fixme("BDD-WCC-IFRS-008 — Voltar de Pré-Fechamento Contábil sem executar a rotina [Repasse BNDES Passivo]", { tag: ["@regressao","@funcional","@positivo","@alternativo","@modulo_web_corporate_contabil_ifrs","@funcionalidade_fechamento","@media","@automatizar","@pending"] }, async () => {
    // | produto |
    // | Corporate Ativo |
    // | Repasse BNDES Ativo |
    // | Repasse BNDES Passivo |
    // | Repasse ME Ativo |
    // | Repasse ME Passivo |
    await pendingStep("Dado que a tela principal de Web Corporate Contábil IFRS está aberta para o produto Repasse BNDES Passivo selecionado no BackOffice");
    await pendingStep("E o estado contábil e o histórico anteriores do produto foram registrados");
    await pendingStep("Quando o usuário abre o menu Fechamento");
    await pendingStep("E seleciona Pré-Fechamento Contábil");
    await pendingStep("E o usuário preenche o campo Data do Pré-Fechamento com uma referência preparada");
    await pendingStep("E Confirmar ainda não foi acionado");
    await pendingStep("E o usuário clica em Voltar");
    await pendingStep("Então a tela principal de Web Corporate Contábil IFRS deve ser exibida");
    await pendingStep("E a rotina Pré-Fechamento Contábil não deve ser executada para a referência preenchida");
  });

  test.fixme("BDD-WCC-IFRS-008 — Voltar de Pré-Fechamento Contábil sem executar a rotina [Repasse ME Ativo]", { tag: ["@regressao","@funcional","@positivo","@alternativo","@modulo_web_corporate_contabil_ifrs","@funcionalidade_fechamento","@media","@automatizar","@pending"] }, async () => {
    // | produto |
    // | Corporate Ativo |
    // | Repasse BNDES Ativo |
    // | Repasse BNDES Passivo |
    // | Repasse ME Ativo |
    // | Repasse ME Passivo |
    await pendingStep("Dado que a tela principal de Web Corporate Contábil IFRS está aberta para o produto Repasse ME Ativo selecionado no BackOffice");
    await pendingStep("E o estado contábil e o histórico anteriores do produto foram registrados");
    await pendingStep("Quando o usuário abre o menu Fechamento");
    await pendingStep("E seleciona Pré-Fechamento Contábil");
    await pendingStep("E o usuário preenche o campo Data do Pré-Fechamento com uma referência preparada");
    await pendingStep("E Confirmar ainda não foi acionado");
    await pendingStep("E o usuário clica em Voltar");
    await pendingStep("Então a tela principal de Web Corporate Contábil IFRS deve ser exibida");
    await pendingStep("E a rotina Pré-Fechamento Contábil não deve ser executada para a referência preenchida");
  });

  test.fixme("BDD-WCC-IFRS-008 — Voltar de Pré-Fechamento Contábil sem executar a rotina [Repasse ME Passivo]", { tag: ["@regressao","@funcional","@positivo","@alternativo","@modulo_web_corporate_contabil_ifrs","@funcionalidade_fechamento","@media","@automatizar","@pending"] }, async () => {
    // | produto |
    // | Corporate Ativo |
    // | Repasse BNDES Ativo |
    // | Repasse BNDES Passivo |
    // | Repasse ME Ativo |
    // | Repasse ME Passivo |
    await pendingStep("Dado que a tela principal de Web Corporate Contábil IFRS está aberta para o produto Repasse ME Passivo selecionado no BackOffice");
    await pendingStep("E o estado contábil e o histórico anteriores do produto foram registrados");
    await pendingStep("Quando o usuário abre o menu Fechamento");
    await pendingStep("E seleciona Pré-Fechamento Contábil");
    await pendingStep("E o usuário preenche o campo Data do Pré-Fechamento com uma referência preparada");
    await pendingStep("E Confirmar ainda não foi acionado");
    await pendingStep("E o usuário clica em Voltar");
    await pendingStep("Então a tela principal de Web Corporate Contábil IFRS deve ser exibida");
    await pendingStep("E a rotina Pré-Fechamento Contábil não deve ser executada para a referência preenchida");
  });

  test.fixme("BDD-WCC-IFRS-009 — Voltar de Fechamento Contábil sem executar a rotina [Corporate Ativo]", { tag: ["@regressao","@funcional","@positivo","@alternativo","@modulo_web_corporate_contabil_ifrs","@funcionalidade_fechamento","@media","@automatizar","@pending"] }, async () => {
    // | produto |
    // | Corporate Ativo |
    // | Repasse BNDES Ativo |
    // | Repasse BNDES Passivo |
    // | Repasse ME Ativo |
    // | Repasse ME Passivo |
    await pendingStep("Dado que a tela principal de Web Corporate Contábil IFRS está aberta para o produto Corporate Ativo selecionado no BackOffice");
    await pendingStep("E o estado contábil e o histórico anteriores do produto foram registrados");
    await pendingStep("Quando o usuário abre o menu Fechamento");
    await pendingStep("E seleciona Fechamento Contábil");
    await pendingStep("E o usuário preenche o campo Fechar até o dia com uma referência preparada");
    await pendingStep("E Confirmar ainda não foi acionado");
    await pendingStep("E o usuário clica em Voltar");
    await pendingStep("Então a tela principal de Web Corporate Contábil IFRS deve ser exibida");
    await pendingStep("E a rotina Fechamento Contábil não deve ser executada para a referência preenchida");
  });

  test.fixme("BDD-WCC-IFRS-009 — Voltar de Fechamento Contábil sem executar a rotina [Repasse BNDES Ativo]", { tag: ["@regressao","@funcional","@positivo","@alternativo","@modulo_web_corporate_contabil_ifrs","@funcionalidade_fechamento","@media","@automatizar","@pending"] }, async () => {
    // | produto |
    // | Corporate Ativo |
    // | Repasse BNDES Ativo |
    // | Repasse BNDES Passivo |
    // | Repasse ME Ativo |
    // | Repasse ME Passivo |
    await pendingStep("Dado que a tela principal de Web Corporate Contábil IFRS está aberta para o produto Repasse BNDES Ativo selecionado no BackOffice");
    await pendingStep("E o estado contábil e o histórico anteriores do produto foram registrados");
    await pendingStep("Quando o usuário abre o menu Fechamento");
    await pendingStep("E seleciona Fechamento Contábil");
    await pendingStep("E o usuário preenche o campo Fechar até o dia com uma referência preparada");
    await pendingStep("E Confirmar ainda não foi acionado");
    await pendingStep("E o usuário clica em Voltar");
    await pendingStep("Então a tela principal de Web Corporate Contábil IFRS deve ser exibida");
    await pendingStep("E a rotina Fechamento Contábil não deve ser executada para a referência preenchida");
  });

  test.fixme("BDD-WCC-IFRS-009 — Voltar de Fechamento Contábil sem executar a rotina [Repasse BNDES Passivo]", { tag: ["@regressao","@funcional","@positivo","@alternativo","@modulo_web_corporate_contabil_ifrs","@funcionalidade_fechamento","@media","@automatizar","@pending"] }, async () => {
    // | produto |
    // | Corporate Ativo |
    // | Repasse BNDES Ativo |
    // | Repasse BNDES Passivo |
    // | Repasse ME Ativo |
    // | Repasse ME Passivo |
    await pendingStep("Dado que a tela principal de Web Corporate Contábil IFRS está aberta para o produto Repasse BNDES Passivo selecionado no BackOffice");
    await pendingStep("E o estado contábil e o histórico anteriores do produto foram registrados");
    await pendingStep("Quando o usuário abre o menu Fechamento");
    await pendingStep("E seleciona Fechamento Contábil");
    await pendingStep("E o usuário preenche o campo Fechar até o dia com uma referência preparada");
    await pendingStep("E Confirmar ainda não foi acionado");
    await pendingStep("E o usuário clica em Voltar");
    await pendingStep("Então a tela principal de Web Corporate Contábil IFRS deve ser exibida");
    await pendingStep("E a rotina Fechamento Contábil não deve ser executada para a referência preenchida");
  });

  test.fixme("BDD-WCC-IFRS-009 — Voltar de Fechamento Contábil sem executar a rotina [Repasse ME Ativo]", { tag: ["@regressao","@funcional","@positivo","@alternativo","@modulo_web_corporate_contabil_ifrs","@funcionalidade_fechamento","@media","@automatizar","@pending"] }, async () => {
    // | produto |
    // | Corporate Ativo |
    // | Repasse BNDES Ativo |
    // | Repasse BNDES Passivo |
    // | Repasse ME Ativo |
    // | Repasse ME Passivo |
    await pendingStep("Dado que a tela principal de Web Corporate Contábil IFRS está aberta para o produto Repasse ME Ativo selecionado no BackOffice");
    await pendingStep("E o estado contábil e o histórico anteriores do produto foram registrados");
    await pendingStep("Quando o usuário abre o menu Fechamento");
    await pendingStep("E seleciona Fechamento Contábil");
    await pendingStep("E o usuário preenche o campo Fechar até o dia com uma referência preparada");
    await pendingStep("E Confirmar ainda não foi acionado");
    await pendingStep("E o usuário clica em Voltar");
    await pendingStep("Então a tela principal de Web Corporate Contábil IFRS deve ser exibida");
    await pendingStep("E a rotina Fechamento Contábil não deve ser executada para a referência preenchida");
  });

  test.fixme("BDD-WCC-IFRS-009 — Voltar de Fechamento Contábil sem executar a rotina [Repasse ME Passivo]", { tag: ["@regressao","@funcional","@positivo","@alternativo","@modulo_web_corporate_contabil_ifrs","@funcionalidade_fechamento","@media","@automatizar","@pending"] }, async () => {
    // | produto |
    // | Corporate Ativo |
    // | Repasse BNDES Ativo |
    // | Repasse BNDES Passivo |
    // | Repasse ME Ativo |
    // | Repasse ME Passivo |
    await pendingStep("Dado que a tela principal de Web Corporate Contábil IFRS está aberta para o produto Repasse ME Passivo selecionado no BackOffice");
    await pendingStep("E o estado contábil e o histórico anteriores do produto foram registrados");
    await pendingStep("Quando o usuário abre o menu Fechamento");
    await pendingStep("E seleciona Fechamento Contábil");
    await pendingStep("E o usuário preenche o campo Fechar até o dia com uma referência preparada");
    await pendingStep("E Confirmar ainda não foi acionado");
    await pendingStep("E o usuário clica em Voltar");
    await pendingStep("Então a tela principal de Web Corporate Contábil IFRS deve ser exibida");
    await pendingStep("E a rotina Fechamento Contábil não deve ser executada para a referência preenchida");
  });

  test.fixme("BDD-WCC-IFRS-010 — Exportar o log de Abertura Contábil [Corporate Ativo]", { tag: ["@regressao","@funcional","@positivo","@modulo_web_corporate_contabil_ifrs","@funcionalidade_fechamento","@media","@automatizar","@pending"] }, async () => {
    // | produto |
    // | Corporate Ativo |
    // | Repasse BNDES Ativo |
    // | Repasse BNDES Passivo |
    // | Repasse ME Ativo |
    // | Repasse ME Passivo |
    await pendingStep("Dado que a tela principal de Web Corporate Contábil IFRS está aberta para o produto Corporate Ativo selecionado no BackOffice");
    await pendingStep("E existe uma execução identificada da rotina realizada pela interface");
    await pendingStep("Quando o usuário abre o menu Fechamento");
    await pendingStep("E seleciona Abertura Contábil");
    await pendingStep("E localiza os registros dessa execução na tabela do modal");
    await pendingStep("E o usuário clica em Exportar Log");
    await pendingStep("Então deve ser exportado um log dos processos da rotina para o produto selecionado");
    await pendingStep("E o log deve conter os registros da execução identificada na tabela");
  });

  test.fixme("BDD-WCC-IFRS-010 — Exportar o log de Abertura Contábil [Repasse BNDES Ativo]", { tag: ["@regressao","@funcional","@positivo","@modulo_web_corporate_contabil_ifrs","@funcionalidade_fechamento","@media","@automatizar","@pending"] }, async () => {
    // | produto |
    // | Corporate Ativo |
    // | Repasse BNDES Ativo |
    // | Repasse BNDES Passivo |
    // | Repasse ME Ativo |
    // | Repasse ME Passivo |
    await pendingStep("Dado que a tela principal de Web Corporate Contábil IFRS está aberta para o produto Repasse BNDES Ativo selecionado no BackOffice");
    await pendingStep("E existe uma execução identificada da rotina realizada pela interface");
    await pendingStep("Quando o usuário abre o menu Fechamento");
    await pendingStep("E seleciona Abertura Contábil");
    await pendingStep("E localiza os registros dessa execução na tabela do modal");
    await pendingStep("E o usuário clica em Exportar Log");
    await pendingStep("Então deve ser exportado um log dos processos da rotina para o produto selecionado");
    await pendingStep("E o log deve conter os registros da execução identificada na tabela");
  });

  test.fixme("BDD-WCC-IFRS-010 — Exportar o log de Abertura Contábil [Repasse BNDES Passivo]", { tag: ["@regressao","@funcional","@positivo","@modulo_web_corporate_contabil_ifrs","@funcionalidade_fechamento","@media","@automatizar","@pending"] }, async () => {
    // | produto |
    // | Corporate Ativo |
    // | Repasse BNDES Ativo |
    // | Repasse BNDES Passivo |
    // | Repasse ME Ativo |
    // | Repasse ME Passivo |
    await pendingStep("Dado que a tela principal de Web Corporate Contábil IFRS está aberta para o produto Repasse BNDES Passivo selecionado no BackOffice");
    await pendingStep("E existe uma execução identificada da rotina realizada pela interface");
    await pendingStep("Quando o usuário abre o menu Fechamento");
    await pendingStep("E seleciona Abertura Contábil");
    await pendingStep("E localiza os registros dessa execução na tabela do modal");
    await pendingStep("E o usuário clica em Exportar Log");
    await pendingStep("Então deve ser exportado um log dos processos da rotina para o produto selecionado");
    await pendingStep("E o log deve conter os registros da execução identificada na tabela");
  });

  test.fixme("BDD-WCC-IFRS-010 — Exportar o log de Abertura Contábil [Repasse ME Ativo]", { tag: ["@regressao","@funcional","@positivo","@modulo_web_corporate_contabil_ifrs","@funcionalidade_fechamento","@media","@automatizar","@pending"] }, async () => {
    // | produto |
    // | Corporate Ativo |
    // | Repasse BNDES Ativo |
    // | Repasse BNDES Passivo |
    // | Repasse ME Ativo |
    // | Repasse ME Passivo |
    await pendingStep("Dado que a tela principal de Web Corporate Contábil IFRS está aberta para o produto Repasse ME Ativo selecionado no BackOffice");
    await pendingStep("E existe uma execução identificada da rotina realizada pela interface");
    await pendingStep("Quando o usuário abre o menu Fechamento");
    await pendingStep("E seleciona Abertura Contábil");
    await pendingStep("E localiza os registros dessa execução na tabela do modal");
    await pendingStep("E o usuário clica em Exportar Log");
    await pendingStep("Então deve ser exportado um log dos processos da rotina para o produto selecionado");
    await pendingStep("E o log deve conter os registros da execução identificada na tabela");
  });

  test.fixme("BDD-WCC-IFRS-010 — Exportar o log de Abertura Contábil [Repasse ME Passivo]", { tag: ["@regressao","@funcional","@positivo","@modulo_web_corporate_contabil_ifrs","@funcionalidade_fechamento","@media","@automatizar","@pending"] }, async () => {
    // | produto |
    // | Corporate Ativo |
    // | Repasse BNDES Ativo |
    // | Repasse BNDES Passivo |
    // | Repasse ME Ativo |
    // | Repasse ME Passivo |
    await pendingStep("Dado que a tela principal de Web Corporate Contábil IFRS está aberta para o produto Repasse ME Passivo selecionado no BackOffice");
    await pendingStep("E existe uma execução identificada da rotina realizada pela interface");
    await pendingStep("Quando o usuário abre o menu Fechamento");
    await pendingStep("E seleciona Abertura Contábil");
    await pendingStep("E localiza os registros dessa execução na tabela do modal");
    await pendingStep("E o usuário clica em Exportar Log");
    await pendingStep("Então deve ser exportado um log dos processos da rotina para o produto selecionado");
    await pendingStep("E o log deve conter os registros da execução identificada na tabela");
  });

  test.fixme("BDD-WCC-IFRS-011 — Exportar o log de Pré-Fechamento Contábil [Corporate Ativo]", { tag: ["@regressao","@funcional","@positivo","@modulo_web_corporate_contabil_ifrs","@funcionalidade_fechamento","@media","@automatizar","@pending"] }, async () => {
    // | produto |
    // | Corporate Ativo |
    // | Repasse BNDES Ativo |
    // | Repasse BNDES Passivo |
    // | Repasse ME Ativo |
    // | Repasse ME Passivo |
    await pendingStep("Dado que a tela principal de Web Corporate Contábil IFRS está aberta para o produto Corporate Ativo selecionado no BackOffice");
    await pendingStep("E existe uma execução identificada da rotina realizada pela interface");
    await pendingStep("Quando o usuário abre o menu Fechamento");
    await pendingStep("E seleciona Pré-Fechamento Contábil");
    await pendingStep("E localiza os registros dessa execução na tabela do modal");
    await pendingStep("E o usuário clica em Exportar Log");
    await pendingStep("Então deve ser exportado um log dos processos da rotina para o produto selecionado");
    await pendingStep("E o log deve conter os registros da execução identificada na tabela");
  });

  test.fixme("BDD-WCC-IFRS-011 — Exportar o log de Pré-Fechamento Contábil [Repasse BNDES Ativo]", { tag: ["@regressao","@funcional","@positivo","@modulo_web_corporate_contabil_ifrs","@funcionalidade_fechamento","@media","@automatizar","@pending"] }, async () => {
    // | produto |
    // | Corporate Ativo |
    // | Repasse BNDES Ativo |
    // | Repasse BNDES Passivo |
    // | Repasse ME Ativo |
    // | Repasse ME Passivo |
    await pendingStep("Dado que a tela principal de Web Corporate Contábil IFRS está aberta para o produto Repasse BNDES Ativo selecionado no BackOffice");
    await pendingStep("E existe uma execução identificada da rotina realizada pela interface");
    await pendingStep("Quando o usuário abre o menu Fechamento");
    await pendingStep("E seleciona Pré-Fechamento Contábil");
    await pendingStep("E localiza os registros dessa execução na tabela do modal");
    await pendingStep("E o usuário clica em Exportar Log");
    await pendingStep("Então deve ser exportado um log dos processos da rotina para o produto selecionado");
    await pendingStep("E o log deve conter os registros da execução identificada na tabela");
  });

  test.fixme("BDD-WCC-IFRS-011 — Exportar o log de Pré-Fechamento Contábil [Repasse BNDES Passivo]", { tag: ["@regressao","@funcional","@positivo","@modulo_web_corporate_contabil_ifrs","@funcionalidade_fechamento","@media","@automatizar","@pending"] }, async () => {
    // | produto |
    // | Corporate Ativo |
    // | Repasse BNDES Ativo |
    // | Repasse BNDES Passivo |
    // | Repasse ME Ativo |
    // | Repasse ME Passivo |
    await pendingStep("Dado que a tela principal de Web Corporate Contábil IFRS está aberta para o produto Repasse BNDES Passivo selecionado no BackOffice");
    await pendingStep("E existe uma execução identificada da rotina realizada pela interface");
    await pendingStep("Quando o usuário abre o menu Fechamento");
    await pendingStep("E seleciona Pré-Fechamento Contábil");
    await pendingStep("E localiza os registros dessa execução na tabela do modal");
    await pendingStep("E o usuário clica em Exportar Log");
    await pendingStep("Então deve ser exportado um log dos processos da rotina para o produto selecionado");
    await pendingStep("E o log deve conter os registros da execução identificada na tabela");
  });

  test.fixme("BDD-WCC-IFRS-011 — Exportar o log de Pré-Fechamento Contábil [Repasse ME Ativo]", { tag: ["@regressao","@funcional","@positivo","@modulo_web_corporate_contabil_ifrs","@funcionalidade_fechamento","@media","@automatizar","@pending"] }, async () => {
    // | produto |
    // | Corporate Ativo |
    // | Repasse BNDES Ativo |
    // | Repasse BNDES Passivo |
    // | Repasse ME Ativo |
    // | Repasse ME Passivo |
    await pendingStep("Dado que a tela principal de Web Corporate Contábil IFRS está aberta para o produto Repasse ME Ativo selecionado no BackOffice");
    await pendingStep("E existe uma execução identificada da rotina realizada pela interface");
    await pendingStep("Quando o usuário abre o menu Fechamento");
    await pendingStep("E seleciona Pré-Fechamento Contábil");
    await pendingStep("E localiza os registros dessa execução na tabela do modal");
    await pendingStep("E o usuário clica em Exportar Log");
    await pendingStep("Então deve ser exportado um log dos processos da rotina para o produto selecionado");
    await pendingStep("E o log deve conter os registros da execução identificada na tabela");
  });

  test.fixme("BDD-WCC-IFRS-011 — Exportar o log de Pré-Fechamento Contábil [Repasse ME Passivo]", { tag: ["@regressao","@funcional","@positivo","@modulo_web_corporate_contabil_ifrs","@funcionalidade_fechamento","@media","@automatizar","@pending"] }, async () => {
    // | produto |
    // | Corporate Ativo |
    // | Repasse BNDES Ativo |
    // | Repasse BNDES Passivo |
    // | Repasse ME Ativo |
    // | Repasse ME Passivo |
    await pendingStep("Dado que a tela principal de Web Corporate Contábil IFRS está aberta para o produto Repasse ME Passivo selecionado no BackOffice");
    await pendingStep("E existe uma execução identificada da rotina realizada pela interface");
    await pendingStep("Quando o usuário abre o menu Fechamento");
    await pendingStep("E seleciona Pré-Fechamento Contábil");
    await pendingStep("E localiza os registros dessa execução na tabela do modal");
    await pendingStep("E o usuário clica em Exportar Log");
    await pendingStep("Então deve ser exportado um log dos processos da rotina para o produto selecionado");
    await pendingStep("E o log deve conter os registros da execução identificada na tabela");
  });

  test.fixme("BDD-WCC-IFRS-012 — Exportar o log de Fechamento Contábil [Corporate Ativo]", { tag: ["@regressao","@funcional","@positivo","@modulo_web_corporate_contabil_ifrs","@funcionalidade_fechamento","@media","@automatizar","@pending"] }, async () => {
    // | produto |
    // | Corporate Ativo |
    // | Repasse BNDES Ativo |
    // | Repasse BNDES Passivo |
    // | Repasse ME Ativo |
    // | Repasse ME Passivo |
    await pendingStep("Dado que a tela principal de Web Corporate Contábil IFRS está aberta para o produto Corporate Ativo selecionado no BackOffice");
    await pendingStep("E existe uma execução identificada da rotina realizada pela interface");
    await pendingStep("Quando o usuário abre o menu Fechamento");
    await pendingStep("E seleciona Fechamento Contábil");
    await pendingStep("E localiza os registros dessa execução na tabela do modal");
    await pendingStep("E o usuário clica em Exportar Log");
    await pendingStep("Então deve ser exportado um log dos processos da rotina para o produto selecionado");
    await pendingStep("E o log deve conter os registros da execução identificada na tabela");
  });

  test.fixme("BDD-WCC-IFRS-012 — Exportar o log de Fechamento Contábil [Repasse BNDES Ativo]", { tag: ["@regressao","@funcional","@positivo","@modulo_web_corporate_contabil_ifrs","@funcionalidade_fechamento","@media","@automatizar","@pending"] }, async () => {
    // | produto |
    // | Corporate Ativo |
    // | Repasse BNDES Ativo |
    // | Repasse BNDES Passivo |
    // | Repasse ME Ativo |
    // | Repasse ME Passivo |
    await pendingStep("Dado que a tela principal de Web Corporate Contábil IFRS está aberta para o produto Repasse BNDES Ativo selecionado no BackOffice");
    await pendingStep("E existe uma execução identificada da rotina realizada pela interface");
    await pendingStep("Quando o usuário abre o menu Fechamento");
    await pendingStep("E seleciona Fechamento Contábil");
    await pendingStep("E localiza os registros dessa execução na tabela do modal");
    await pendingStep("E o usuário clica em Exportar Log");
    await pendingStep("Então deve ser exportado um log dos processos da rotina para o produto selecionado");
    await pendingStep("E o log deve conter os registros da execução identificada na tabela");
  });

  test.fixme("BDD-WCC-IFRS-012 — Exportar o log de Fechamento Contábil [Repasse BNDES Passivo]", { tag: ["@regressao","@funcional","@positivo","@modulo_web_corporate_contabil_ifrs","@funcionalidade_fechamento","@media","@automatizar","@pending"] }, async () => {
    // | produto |
    // | Corporate Ativo |
    // | Repasse BNDES Ativo |
    // | Repasse BNDES Passivo |
    // | Repasse ME Ativo |
    // | Repasse ME Passivo |
    await pendingStep("Dado que a tela principal de Web Corporate Contábil IFRS está aberta para o produto Repasse BNDES Passivo selecionado no BackOffice");
    await pendingStep("E existe uma execução identificada da rotina realizada pela interface");
    await pendingStep("Quando o usuário abre o menu Fechamento");
    await pendingStep("E seleciona Fechamento Contábil");
    await pendingStep("E localiza os registros dessa execução na tabela do modal");
    await pendingStep("E o usuário clica em Exportar Log");
    await pendingStep("Então deve ser exportado um log dos processos da rotina para o produto selecionado");
    await pendingStep("E o log deve conter os registros da execução identificada na tabela");
  });

  test.fixme("BDD-WCC-IFRS-012 — Exportar o log de Fechamento Contábil [Repasse ME Ativo]", { tag: ["@regressao","@funcional","@positivo","@modulo_web_corporate_contabil_ifrs","@funcionalidade_fechamento","@media","@automatizar","@pending"] }, async () => {
    // | produto |
    // | Corporate Ativo |
    // | Repasse BNDES Ativo |
    // | Repasse BNDES Passivo |
    // | Repasse ME Ativo |
    // | Repasse ME Passivo |
    await pendingStep("Dado que a tela principal de Web Corporate Contábil IFRS está aberta para o produto Repasse ME Ativo selecionado no BackOffice");
    await pendingStep("E existe uma execução identificada da rotina realizada pela interface");
    await pendingStep("Quando o usuário abre o menu Fechamento");
    await pendingStep("E seleciona Fechamento Contábil");
    await pendingStep("E localiza os registros dessa execução na tabela do modal");
    await pendingStep("E o usuário clica em Exportar Log");
    await pendingStep("Então deve ser exportado um log dos processos da rotina para o produto selecionado");
    await pendingStep("E o log deve conter os registros da execução identificada na tabela");
  });

  test.fixme("BDD-WCC-IFRS-012 — Exportar o log de Fechamento Contábil [Repasse ME Passivo]", { tag: ["@regressao","@funcional","@positivo","@modulo_web_corporate_contabil_ifrs","@funcionalidade_fechamento","@media","@automatizar","@pending"] }, async () => {
    // | produto |
    // | Corporate Ativo |
    // | Repasse BNDES Ativo |
    // | Repasse BNDES Passivo |
    // | Repasse ME Ativo |
    // | Repasse ME Passivo |
    await pendingStep("Dado que a tela principal de Web Corporate Contábil IFRS está aberta para o produto Repasse ME Passivo selecionado no BackOffice");
    await pendingStep("E existe uma execução identificada da rotina realizada pela interface");
    await pendingStep("Quando o usuário abre o menu Fechamento");
    await pendingStep("E seleciona Fechamento Contábil");
    await pendingStep("E localiza os registros dessa execução na tabela do modal");
    await pendingStep("E o usuário clica em Exportar Log");
    await pendingStep("Então deve ser exportado um log dos processos da rotina para o produto selecionado");
    await pendingStep("E o log deve conter os registros da execução identificada na tabela");
  });

  test.fixme("BDD-WCC-IFRS-013 — Manter a última data de pré-fechamento após nova inicialização [Corporate Ativo]", { tag: ["@regressao","@funcional","@positivo","@modulo_web_corporate_contabil_ifrs","@funcionalidade_fechamento","@alta","@automatizar","@pending"] }, async () => {
    // | produto |
    // | Corporate Ativo |
    // | Repasse BNDES Ativo |
    // | Repasse BNDES Passivo |
    // | Repasse ME Ativo |
    // | Repasse ME Passivo |
    await pendingStep("Dado que o produto Corporate Ativo possui pré-fechamento e fechamento concluídos para o dia útil anterior à sua inicialização anterior");
    await pendingStep("E o produto foi novamente inicializado no próximo dia útil por preparação externa a estes cenários");
    await pendingStep("E nenhum novo pré-fechamento foi executado após essa inicialização");
    await pendingStep("Quando o usuário seleciona o produto Corporate Ativo no BackOffice");
    await pendingStep("E abre o menu Fechamento");
    await pendingStep("E seleciona Pré-Fechamento Contábil");
    await pendingStep("Então o campo Data do Último Pré-Fechamento deve continuar apresentando a data do último pré-fechamento concluído");
    await pendingStep("E essa data deve corresponder a dois dias úteis anteriores à nova data de inicialização");
  });

  test.fixme("BDD-WCC-IFRS-013 — Manter a última data de pré-fechamento após nova inicialização [Repasse BNDES Ativo]", { tag: ["@regressao","@funcional","@positivo","@modulo_web_corporate_contabil_ifrs","@funcionalidade_fechamento","@alta","@automatizar","@pending"] }, async () => {
    // | produto |
    // | Corporate Ativo |
    // | Repasse BNDES Ativo |
    // | Repasse BNDES Passivo |
    // | Repasse ME Ativo |
    // | Repasse ME Passivo |
    await pendingStep("Dado que o produto Repasse BNDES Ativo possui pré-fechamento e fechamento concluídos para o dia útil anterior à sua inicialização anterior");
    await pendingStep("E o produto foi novamente inicializado no próximo dia útil por preparação externa a estes cenários");
    await pendingStep("E nenhum novo pré-fechamento foi executado após essa inicialização");
    await pendingStep("Quando o usuário seleciona o produto Repasse BNDES Ativo no BackOffice");
    await pendingStep("E abre o menu Fechamento");
    await pendingStep("E seleciona Pré-Fechamento Contábil");
    await pendingStep("Então o campo Data do Último Pré-Fechamento deve continuar apresentando a data do último pré-fechamento concluído");
    await pendingStep("E essa data deve corresponder a dois dias úteis anteriores à nova data de inicialização");
  });

  test.fixme("BDD-WCC-IFRS-013 — Manter a última data de pré-fechamento após nova inicialização [Repasse BNDES Passivo]", { tag: ["@regressao","@funcional","@positivo","@modulo_web_corporate_contabil_ifrs","@funcionalidade_fechamento","@alta","@automatizar","@pending"] }, async () => {
    // | produto |
    // | Corporate Ativo |
    // | Repasse BNDES Ativo |
    // | Repasse BNDES Passivo |
    // | Repasse ME Ativo |
    // | Repasse ME Passivo |
    await pendingStep("Dado que o produto Repasse BNDES Passivo possui pré-fechamento e fechamento concluídos para o dia útil anterior à sua inicialização anterior");
    await pendingStep("E o produto foi novamente inicializado no próximo dia útil por preparação externa a estes cenários");
    await pendingStep("E nenhum novo pré-fechamento foi executado após essa inicialização");
    await pendingStep("Quando o usuário seleciona o produto Repasse BNDES Passivo no BackOffice");
    await pendingStep("E abre o menu Fechamento");
    await pendingStep("E seleciona Pré-Fechamento Contábil");
    await pendingStep("Então o campo Data do Último Pré-Fechamento deve continuar apresentando a data do último pré-fechamento concluído");
    await pendingStep("E essa data deve corresponder a dois dias úteis anteriores à nova data de inicialização");
  });

  test.fixme("BDD-WCC-IFRS-013 — Manter a última data de pré-fechamento após nova inicialização [Repasse ME Ativo]", { tag: ["@regressao","@funcional","@positivo","@modulo_web_corporate_contabil_ifrs","@funcionalidade_fechamento","@alta","@automatizar","@pending"] }, async () => {
    // | produto |
    // | Corporate Ativo |
    // | Repasse BNDES Ativo |
    // | Repasse BNDES Passivo |
    // | Repasse ME Ativo |
    // | Repasse ME Passivo |
    await pendingStep("Dado que o produto Repasse ME Ativo possui pré-fechamento e fechamento concluídos para o dia útil anterior à sua inicialização anterior");
    await pendingStep("E o produto foi novamente inicializado no próximo dia útil por preparação externa a estes cenários");
    await pendingStep("E nenhum novo pré-fechamento foi executado após essa inicialização");
    await pendingStep("Quando o usuário seleciona o produto Repasse ME Ativo no BackOffice");
    await pendingStep("E abre o menu Fechamento");
    await pendingStep("E seleciona Pré-Fechamento Contábil");
    await pendingStep("Então o campo Data do Último Pré-Fechamento deve continuar apresentando a data do último pré-fechamento concluído");
    await pendingStep("E essa data deve corresponder a dois dias úteis anteriores à nova data de inicialização");
  });

  test.fixme("BDD-WCC-IFRS-013 — Manter a última data de pré-fechamento após nova inicialização [Repasse ME Passivo]", { tag: ["@regressao","@funcional","@positivo","@modulo_web_corporate_contabil_ifrs","@funcionalidade_fechamento","@alta","@automatizar","@pending"] }, async () => {
    // | produto |
    // | Corporate Ativo |
    // | Repasse BNDES Ativo |
    // | Repasse BNDES Passivo |
    // | Repasse ME Ativo |
    // | Repasse ME Passivo |
    await pendingStep("Dado que o produto Repasse ME Passivo possui pré-fechamento e fechamento concluídos para o dia útil anterior à sua inicialização anterior");
    await pendingStep("E o produto foi novamente inicializado no próximo dia útil por preparação externa a estes cenários");
    await pendingStep("E nenhum novo pré-fechamento foi executado após essa inicialização");
    await pendingStep("Quando o usuário seleciona o produto Repasse ME Passivo no BackOffice");
    await pendingStep("E abre o menu Fechamento");
    await pendingStep("E seleciona Pré-Fechamento Contábil");
    await pendingStep("Então o campo Data do Último Pré-Fechamento deve continuar apresentando a data do último pré-fechamento concluído");
    await pendingStep("E essa data deve corresponder a dois dias úteis anteriores à nova data de inicialização");
  });
});
