# Cenários BDD

## Identificação

- **Aplicação:** Função (`app-pine-funcao`)
- **Escopo:** Cobertura Essencial de Cadastro de Proposta pela interface, do acesso ao módulo Proposta até a confirmação da liberação de crédito e retorno à página inicial. Produto 50 - CAPITAL GIRO. Consulta, revisão, aprovação e integração pela Esteira ficam fora deste arquivo.
- **Formato:** TestingQA 0.7.1 · Architect 1.4.5

## Funcionalidade

```gherkin
# language: pt
Funcionalidade: Cadastro de proposta
  O usuário seleciona produto e cliente, define as condições, valida o fluxo de parcelas e cadastra a liberação de crédito.
```

## Dados necessários

- **Usuário/perfil:** Usuário de teste autenticado com acesso ao módulo Proposta e ao Cadastro de Proposta.
- **Ambiente:** Base de teste com produto 50 - CAPITAL GIRO, cliente elegível e contas disponíveis. Capturas históricas na versão 26.0413.118.3876; preparar uma proposta independente no estado inicial de cada caso.
- **Massa de dados:** Cliente disponível na pesquisa, valor válido da operação, cálculo preparado (utilizado no teste relatado: 51 - Principais iguais jrs s/parcela), indexador/moeda compatível, parâmetros válidos de parcelamento e fluxo esperado com quantidade, vencimentos, valores e vencimento final. Cliente, indexador, conta, número de proposta, datas e valores das capturas não são obrigatórios. Preparar a liberação para inclusão com beneficiário, data, valor e histórico financeiro preenchidos.
- **Observações de negócio:** Porte Média e tributação Completo neste percurso. Avalistas e eventos podem permanecer sem inclusão. Manter padrões de Mora e Juros; alterações opcionais ficam fora da cobertura Essencial. A conta utilizada é sempre a última opção disponível na lista, conforme orientação do usuário. O tipo de cálculo participa do direcionamento ao BackOffice com relação N:N relatada; a correspondência exata permanece desconhecida e não é validada por esta suíte. O cálculo 51 é referência de massa, não regra geral. As capturas representam configurações diferentes; preparar o fluxo esperado sem combinar seus valores. Fórmulas de juros, CET, IOF e calendário não foram fornecidas.

## Tags utilizadas

| Tag | Significado |
|---|---|
| `@smoke` | Disponibilidade inicial do acesso ao cadastro. |
| `@regressao` | Proteção de comportamento existente com resultado sustentado. |
| `@funcional` | Capacidade funcional especificada. |
| `@positivo` | Percurso com dados válidos. |
| `@negativo` | Tentativa de avanço sem a validação obrigatória. |
| `@modulo_proposta` | Agrupamento pelo módulo Proposta. |
| `@funcionalidade_cadastro_proposta` | Agrupamento pelo Cadastro de Proposta. |
| `@alta` | Etapa que compromete a continuidade central do cadastro. |
| `@automatizar` | Candidato à automação, sem implementação pronta. |

## Cenários BDD

### BDD-PROP-001 — Acessar o cadastro de proposta

**Classificação:** Confirmado · **Prioridade:** Alta · **Execução:** Candidata à automação
**Rastreabilidade:** EVD-PROP-001; EVD-PROP-006
**Justificativa das tags:** O acesso existente ao cadastro é necessário para iniciar a jornada e os demais testes, justificando prioridade alta e proteção regressiva. Smoke limitado à abertura da seleção de produtos, sem comprovar conclusão do cadastro.
**Automação:** Repetir a verificação da transição e dos dados apresentados com massa controlada. Preparar estados de proposta, seletores e tratamento de modal; não há automação implementada. A automação não comprova destino de BackOffice nem aprovação ou integração.

```gherkin
@smoke @regressao @funcional @positivo @modulo_proposta @funcionalidade_cadastro_proposta @alta @automatizar
Cenário: BDD-PROP-001 — Acessar o cadastro de proposta
  Dado que o usuário está autenticado na home do Função
  Quando o usuário acessa Proposta no menu principal
  E abre o menu Proposta na página inicial do módulo
  E seleciona Cadastro de Proposta
  Então a tela Cadastro de Proposta deve apresentar o seletor Produtos
  E deve disponibilizar Confirmar
```

### BDD-PROP-002 — Selecionar o produto para o cadastro

**Classificação:** Confirmado · **Prioridade:** Alta · **Execução:** Candidata à automação
**Rastreabilidade:** EVD-PROP-001; EVD-PROP-006
**Justificativa das tags:** A seleção do produto define o contexto do formulário; escopo explicitamente limitado ao produto informado.
**Automação:** Repetir a verificação da transição e dos dados apresentados com massa controlada. Preparar estados de proposta, seletores e tratamento de modal; não há automação implementada. A automação não comprova destino de BackOffice nem aprovação ou integração.

```gherkin
@regressao @funcional @positivo @modulo_proposta @funcionalidade_cadastro_proposta @alta @automatizar
Cenário: BDD-PROP-002 — Selecionar o produto para o cadastro
  Dado que a seleção de produtos de Cadastro de Proposta está aberta
  Quando o usuário abre o seletor Produtos
  E seleciona 50 - CAPITAL GIRO
  E clica em Confirmar
  Então a tela Dados Básicos da Proposta deve ser exibida
  E o cabeçalho deve identificar o produto selecionado
```

### BDD-PROP-003 — Pesquisar clientes pelo código

**Classificação:** Confirmado · **Prioridade:** Alta · **Execução:** Candidata à automação
**Rastreabilidade:** EVD-PROP-002; EVD-PROP-006
**Justificativa das tags:** Protege a pesquisa existente que fornece o cliente da proposta, sem fixar uma identidade das capturas.
**Automação:** Repetir a verificação da transição e dos dados apresentados com massa controlada. Preparar estados de proposta, seletores e tratamento de modal; não há automação implementada. A automação não comprova destino de BackOffice nem aprovação ou integração.

```gherkin
@regressao @funcional @positivo @modulo_proposta @funcionalidade_cadastro_proposta @alta @automatizar
Cenário: BDD-PROP-003 — Pesquisar clientes pelo código
  Dado que Dados Básicos da Proposta está aberto
  Quando o usuário clica no link Código do Cliente
  E seleciona a opção Código do Cliente no modal Pesquisa
  E mantém o campo de pesquisa vazio conforme o percurso informado
  E clica em Pesquisar
  Então o modal deve apresentar a lista de clientes disponíveis para seleção
  E a lista deve apresentar código, CNPJ e nome do cliente
```

### BDD-PROP-004 — Selecionar o cliente da proposta

**Classificação:** Confirmado · **Prioridade:** Alta · **Execução:** Candidata à automação
**Rastreabilidade:** EVD-PROP-002; EVD-PROP-006
**Justificativa das tags:** Protege o vínculo com o cliente escolhido e o preenchimento dos dados de identificação.
**Automação:** Repetir a verificação da transição e dos dados apresentados com massa controlada. Preparar estados de proposta, seletores e tratamento de modal; não há automação implementada. A automação não comprova destino de BackOffice nem aprovação ou integração.

```gherkin
@regressao @funcional @positivo @modulo_proposta @funcionalidade_cadastro_proposta @alta @automatizar
Cenário: BDD-PROP-004 — Selecionar o cliente da proposta
  Dado que o modal Pesquisa apresenta a lista de clientes
  E o cliente preparado está disponível na lista
  Quando o usuário seleciona o código do cliente preparado
  Então o sistema deve retornar a Dados Básicos da Proposta
  E deve preencher o código, o documento e o nome ou razão social do cliente selecionado
  E deve preencher os dados de origens apresentados para esse cliente
```

### BDD-PROP-005 — Confirmar dados básicos sem avalista

**Classificação:** Confirmado · **Prioridade:** Alta · **Execução:** Candidata à automação
**Rastreabilidade:** EVD-PROP-002; EVD-PROP-006
**Justificativa das tags:** O valor da operação e o cliente sustentam o avanço; a ausência de avalista é permitida no percurso especificado.
**Automação:** Repetir a verificação da transição e dos dados apresentados com massa controlada. Preparar estados de proposta, seletores e tratamento de modal; não há automação implementada. A automação não comprova destino de BackOffice nem aprovação ou integração.

```gherkin
@regressao @funcional @positivo @modulo_proposta @funcionalidade_cadastro_proposta @alta @automatizar
Cenário: BDD-PROP-005 — Confirmar dados básicos sem avalista
  Dado que Dados Básicos da Proposta apresenta os dados do cliente preparado
  E os dados de origens estão preenchidos
  Quando o usuário informa o Valor da Operação definido na massa de teste
  E mantém Avalista(s) sem inclusão
  E clica em Confirmar
  Então o sistema deve apresentar Condições da Operação para a proposta
  E o cabeçalho deve identificar o produto e o cliente selecionados
```

### BDD-PROP-006 — Selecionar o cálculo e editar os dados da operação

**Classificação:** Confirmado · **Prioridade:** Alta · **Execução:** Candidata à automação
**Rastreabilidade:** EVD-PROP-003; EVD-PROP-006
**Justificativa das tags:** Protege a liberação dos campos pelo cálculo utilizado; não valida o destino de BackOffice, cuja correspondência não foi definida.
**Automação:** Repetir a verificação da transição e dos dados apresentados com massa controlada. Preparar estados de proposta, seletores e tratamento de modal; não há automação implementada. A automação não comprova destino de BackOffice nem aprovação ou integração.

```gherkin
@regressao @funcional @positivo @modulo_proposta @funcionalidade_cadastro_proposta @alta @automatizar
Cenário: BDD-PROP-006 — Selecionar o cálculo e editar os dados da operação
  Dado que Condições da Operação está aberta para a proposta preparada
  Quando o usuário seleciona Média em Porte da Empresa
  E seleciona Completo em Regime de Tributação
  E seleciona o tipo de cálculo preparado para o teste
  Então o sistema deve preencher os Dados da Operação conforme o cálculo selecionado
  E deve permitir editar Qtd. Parc., 1ª Amortização, Prz. 1ºVcto. e 1º Vcto.
```

### BDD-PROP-007 — Recalcular o vencimento final

**Classificação:** Confirmado · **Prioridade:** Alta · **Execução:** Candidata à automação
**Rastreabilidade:** EVD-PROP-003; EVD-PROP-006
**Justificativa das tags:** Protege a atualização automática após a edição dos parâmetros de prazo; o calendário esperado deve estar preparado, sem copiar datas das capturas.
**Automação:** Repetir a verificação da transição e dos dados apresentados com massa controlada. Preparar estados de proposta, seletores e tratamento de modal; não há automação implementada. A automação não comprova destino de BackOffice nem aprovação ou integração.

```gherkin
@regressao @funcional @positivo @modulo_proposta @funcionalidade_cadastro_proposta @alta @automatizar
Cenário: BDD-PROP-007 — Recalcular o vencimento final
  Dado que os campos de Dados da Operação estão habilitados pelo cálculo selecionado
  E a massa de teste contém parâmetros válidos de parcelamento e o vencimento final esperado
  Quando o usuário preenche Qtd. Parc., 1ª Amortização, Prz. 1ºVcto. e 1º Vcto. com os parâmetros preparados
  Então o sistema deve recalcular automaticamente Vcto. Final
  E o vencimento final deve corresponder ao esperado para os parâmetros preparados
```

### BDD-PROP-008 — Selecionar indexador ou moeda e abrir o fluxo de parcelas

**Classificação:** Confirmado · **Prioridade:** Alta · **Execução:** Candidata à automação
**Rastreabilidade:** EVD-PROP-003; EVD-PROP-006
**Justificativa das tags:** Protege a preparação do fluxo preservando os padrões suficientes ao cadastro; não exige alteração de Mora.
**Automação:** Repetir a verificação da transição e dos dados apresentados com massa controlada. Preparar estados de proposta, seletores e tratamento de modal; não há automação implementada. A automação não comprova destino de BackOffice nem aprovação ou integração.

```gherkin
@regressao @funcional @positivo @modulo_proposta @funcionalidade_cadastro_proposta @alta @automatizar
Cenário: BDD-PROP-008 — Selecionar indexador ou moeda e abrir o fluxo de parcelas
  Dado que os Dados da Operação estão preenchidos com o parcelamento preparado
  Quando o usuário seleciona em Index./Moeda a opção definida na massa de teste
  E mantém os padrões preenchidos nas seções de correção monetária, Mora e Juros
  E clica em Fluxo de Parcelas na seção Custo Efetivo Total
  Então a tela Fluxo de Parcelas deve apresentar as parcelas da proposta
  E deve disponibilizar Validar Fluxo de Parcelas
```

### BDD-PROP-009 — Validar o fluxo de parcelas

**Classificação:** Confirmado · **Prioridade:** Alta · **Execução:** Candidata à automação
**Rastreabilidade:** EVD-PROP-003; EVD-PROP-006; EVD-PROP-007
**Justificativa das tags:** Protege a validação obrigatória que permite continuar o cadastro, justificando prioridade alta e regressão. O objetivo é a apresentação do resumo após validar; a confirmação do fluxo e o retorno às condições são cobertos em BDD-PROP-010.
**Automação:** Repetir a verificação da transição e dos dados apresentados com massa controlada. Preparar estados de proposta, seletores e tratamento de modal; não há automação implementada. A automação não comprova destino de BackOffice nem aprovação ou integração.

```gherkin
@regressao @funcional @positivo @modulo_proposta @funcionalidade_cadastro_proposta @alta @automatizar
Cenário: BDD-PROP-009 — Validar o fluxo de parcelas
  Dado que Fluxo de Parcelas está aberto para a proposta preparada
  E as quantidades, os vencimentos e os valores das parcelas foram conferidos contra o fluxo esperado da massa de teste
  Quando o usuário clica em Validar Fluxo de Parcelas
  Então o sistema deve apresentar a tabela de resumo do fluxo validado
  E o botão Confirmar deve permitir confirmar o fluxo validado
```

### BDD-PROP-010 — Retornar às condições com o fluxo validado

**Classificação:** Confirmado · **Prioridade:** Alta · **Execução:** Candidata à automação
**Rastreabilidade:** EVD-PROP-003; EVD-PROP-006; EVD-PROP-007
**Justificativa das tags:** Protege o retorno necessário por Confirmar após validar, preservando o resultado que permite continuar o cadastro. É o percurso principal especificado, não uma alternativa de abandono.
**Automação:** Repetir o retorno com fluxo validado e conferir os dados apresentados. Preparar proposta e seletores; não há automação implementada nem cálculo de CET ou IOF especificado.

```gherkin
@regressao @funcional @positivo @modulo_proposta @funcionalidade_cadastro_proposta @alta @automatizar
Cenário: BDD-PROP-010 — Retornar às condições com o fluxo validado
  Dado que Fluxo de Parcelas apresenta a tabela de resumo após a validação
  E o fluxo de parcelas foi validado
  Quando o usuário clica em Confirmar
  Então o sistema deve retornar a Condições da Operação
  E deve indicar Fluxo de parcelas atualizado
  E deve preencher as seções Custo Efetivo Total e Valor da Operação
```

### BDD-PROP-011 — Avançar com o fluxo de parcelas validado

**Classificação:** Confirmado · **Prioridade:** Alta · **Execução:** Candidata à automação
**Rastreabilidade:** EVD-PROP-003; EVD-PROP-006
**Justificativa das tags:** Protege a continuidade da proposta após a validação obrigatória, sem validar fórmulas de CET e IOF não fornecidas.
**Automação:** Repetir a verificação da transição e dos dados apresentados com massa controlada. Preparar estados de proposta, seletores e tratamento de modal; não há automação implementada. A automação não comprova destino de BackOffice nem aprovação ou integração.

```gherkin
@regressao @funcional @positivo @modulo_proposta @funcionalidade_cadastro_proposta @alta @automatizar
Cenário: BDD-PROP-011 — Avançar com o fluxo de parcelas validado
  Dado que Condições da Operação está aberta com o fluxo de parcelas validado
  E Custo Efetivo Total e Valor da Operação foram preenchidos pelo sistema
  Quando o usuário clica em Confirmar
  Então o sistema deve apresentar a tela Número da Operação
```

### BDD-PROP-012 — Informar o número da operação

**Classificação:** Confirmado · **Prioridade:** Alta · **Execução:** Candidata à automação
**Rastreabilidade:** EVD-PROP-004; EVD-PROP-006
**Justificativa das tags:** Protege a identificação da operação; reutilizar o número da proposta é uma escolha do percurso e não uma obrigatoriedade geral.
**Automação:** Repetir a verificação da transição e dos dados apresentados com massa controlada. Preparar estados de proposta, seletores e tratamento de modal; não há automação implementada. A automação não comprova destino de BackOffice nem aprovação ou integração.

```gherkin
@regressao @funcional @positivo @modulo_proposta @funcionalidade_cadastro_proposta @alta @automatizar
Cenário: BDD-PROP-012 — Informar o número da operação
  Dado que Número da Operação está aberto para a proposta cadastrada
  E o número da proposta está disponível no cabeçalho
  Quando o usuário preenche o número da operação com o mesmo número da proposta
  E clica em Confirmar
  Então o sistema deve apresentar Forma de Recebimento das Parcelas
```

### BDD-PROP-013 — Confirmar o recebimento e avançar sem eventos

**Classificação:** Confirmado · **Prioridade:** Alta · **Execução:** Candidata à automação
**Rastreabilidade:** EVD-PROP-004; EVD-PROP-006
**Justificativa das tags:** Protege a continuidade com Outros e sem eventos, ambos permitidos no percurso informado.
**Automação:** Repetir a verificação da transição e dos dados apresentados com massa controlada. Preparar estados de proposta, seletores e tratamento de modal; não há automação implementada. A automação não comprova destino de BackOffice nem aprovação ou integração.

```gherkin
@regressao @funcional @positivo @modulo_proposta @funcionalidade_cadastro_proposta @alta @automatizar
Cenário: BDD-PROP-013 — Confirmar o recebimento e avançar sem eventos
  Dado que Forma de Recebimento das Parcelas está aberta para a proposta
  Quando o usuário mantém a opção Outros em Forma de Recebimento
  E clica em Confirmar
  E mantém Cadastro de Eventos sem inclusões
  E clica em Confirmar no Cadastro de Eventos
  Então o sistema deve apresentar Liberação de Crédito
```

### BDD-PROP-014 — Incluir a conta da liberação de crédito

**Classificação:** Confirmado · **Prioridade:** Alta · **Execução:** Candidata à automação
**Rastreabilidade:** EVD-PROP-005; EVD-PROP-006
**Justificativa das tags:** Protege o registro do destino do crédito; selecionar a última conta é a orientação explícita deste percurso, sem fixar banco, agência ou conta.
**Automação:** Repetir a verificação da transição e dos dados apresentados com massa controlada. Preparar estados de proposta, seletores e tratamento de modal; não há automação implementada. A automação não comprova destino de BackOffice nem aprovação ou integração.

```gherkin
@regressao @funcional @positivo @modulo_proposta @funcionalidade_cadastro_proposta @alta @automatizar
Cenário: BDD-PROP-014 — Incluir a conta da liberação de crédito
  Dado que Liberação de Crédito está aberta para a proposta preparada
  E os dados de beneficiário, data, valor e histórico financeiro da liberação estão preenchidos
  E existem contas disponíveis para o beneficiário
  Quando o usuário abre Cód. Banco/Agência/Conta
  E seleciona a última conta disponível na lista
  E clica em Incluir
  Então a tabela à direita deve apresentar a liberação incluída
  E os dados apresentados devem corresponder ao beneficiário e à liberação informados
```

### BDD-PROP-015 — Concluir o cadastro e retornar à página inicial de Proposta

**Classificação:** Confirmado · **Prioridade:** Alta · **Execução:** Candidata à automação
**Rastreabilidade:** EVD-PROP-005; EVD-PROP-006
**Justificativa das tags:** Protege o término do cadastro solicitado; aprovação, consulta pela Esteira e integração pertencem a outro recorte.
**Automação:** Repetir a verificação da transição e dos dados apresentados com massa controlada. Preparar estados de proposta, seletores e tratamento de modal; não há automação implementada. A automação não comprova destino de BackOffice nem aprovação ou integração.

```gherkin
@regressao @funcional @positivo @modulo_proposta @funcionalidade_cadastro_proposta @alta @automatizar
Cenário: BDD-PROP-015 — Concluir o cadastro e retornar à página inicial de Proposta
  Dado que a tabela de Liberação de Crédito apresenta o registro incluído para a proposta
  Quando o usuário clica em Confirmar
  Então o sistema deve retornar à página inicial do módulo Proposta
```

### BDD-PROP-016 — Tentar confirmar condições sem validar o fluxo de parcelas

**Classificação:** Confirmado · **Prioridade:** Alta · **Execução:** Candidata à automação
**Rastreabilidade:** EVD-PROP-003; EVD-PROP-006; EVD-PROP-007
**Justificativa das tags:** Protege a exigência de validar o fluxo antes de avançar, com mensagem exata confirmada pela nova captura. A tentativa sem a etapa obrigatória justifica negativo e prioridade alta; o resultado conhecido permite regressão.
**Automação:** Repetir a tentativa com proposta ainda sem fluxo validado e conferir o alerta do navegador e o bloqueio do avanço. Preparar massa e tratamento de alerta; não há automação implementada.
**Evidência recomendada:** Captura da mensagem apresentada ao confirmar sem validar o fluxo.

```gherkin
@regressao @funcional @negativo @modulo_proposta @funcionalidade_cadastro_proposta @alta @automatizar
Cenário: BDD-PROP-016 — Tentar confirmar condições sem validar o fluxo de parcelas
  Dado que Condições da Operação está preenchida com dados válidos
  E o fluxo de parcelas ainda não foi validado
  Quando o usuário clica em Confirmar
  Então o navegador deve apresentar a mensagem "Atualize o fluxo de parcelas."
  E o sistema deve impedir o avanço a Número da Operação
```
