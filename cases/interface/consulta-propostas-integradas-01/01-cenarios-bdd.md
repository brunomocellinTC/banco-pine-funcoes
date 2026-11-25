# Cenários BDD

## Identificação

- **Aplicação:** Função (`app-pine-funcao`)
- **Escopo:** Cobertura Essencial da consulta de propostas integradas no BackOffice Corporate Ativo, da home à visualização dos dados da operação em Consultas > Consulta de Cobrança. Busca por Número de Operação com Pesquisa de Contratos Abertos, Liquidados e Todos; demais tipos limitados à disponibilidade no seletor. Sem executar cadastro, aprovação, integração, liquidação ou alteração do contrato.
- **Formato:** TestingQA 0.7.1 · Architect 1.4.5

## Funcionalidade

```gherkin
# language: pt
Funcionalidade: Consultar propostas integradas no BackOffice
  O usuário localiza o contrato por número da operação e consulta seus dados no Corporate Ativo.
```

## Dados necessários

- **Usuário/perfil:** Usuário autenticado com acesso ao BackOffice Corporate Ativo e à Consulta de Cobrança.
- **Ambiente:** Base de teste com propostas já integradas ao Corporate Ativo. Capturas do BackOffice na versão 25.0430.106.6732; propostas integradas são pré-condição, sem executar sua integração nesta suíte.
- **Massa de dados:** Operações integradas de contratos abertos e liquidados, com números identificados e dados esperados de cliente, documento, produto, datas, valores, parcelas, proposta e liberação. Preparar referência autorizada e independente para conferir os dados exibidos. Usar registros compatíveis com cada filtro; nenhum número de operação, cliente, conta ou valor das capturas é obrigatório.
- **Observações de negócio:** A integração disponibiliza a operação no BackOffice conforme o procedimento informado. Este recorte utiliza Corporate Ativo no seletor BackOffice e no campo Módulo. As capturas de resultado e detalhe apresentam operações diferentes; não devem ser combinadas como um único contrato. Não se presume que número da operação e número da proposta sejam iguais, nem regras de cálculo ou prazo de disponibilização. Seções sem registros devem ser conferidas conforme a massa, sem exigir a ausência demonstrada no exemplo.

## Tags utilizadas

| Tag | Significado |
|---|---|
| `@smoke` | Disponibilidade inicial da entrada da consulta. |
| `@regressao` | Proteção de comportamento existente contra mudanças. |
| `@funcional` | Capacidade funcional da consulta. |
| `@positivo` | Uso de filtros e operações válidos para a massa. |
| `@modulo_backoffice` | Agrupamento pelo módulo BackOffice. |
| `@funcionalidade_consulta_propostas_integradas` | Agrupamento pela consulta de propostas integradas. |
| `@alta` | Acesso, localização e identificação central da operação. |
| `@media` | Disponibilidade das opções de pesquisa, de impacto restrito. |
| `@automatizar` | Candidato à automação, sem implementação pronta. |

## Cenários BDD

### BDD-CPI-001 — Acessar o BackOffice pela home

**Classificação:** Confirmado · **Prioridade:** Alta · **Execução:** Candidata à automação
**Rastreabilidade:** EVD-CPI-001; EVD-CPI-006
**Justificativa das tags:** O acesso ao BackOffice é necessário à consulta das operações integradas; protege essa entrada existente contra mudanças.
**Automação:** Repetir a consulta com contratos controlados e comparar a tela com os dados esperados. Preparar seletores e massa estável de contratos abertos e liquidados; não há automação implementada. A consulta de operações previamente integradas não comprova o processo de integração.

```gherkin
@regressao @funcional @positivo @modulo_backoffice @funcionalidade_consulta_propostas_integradas @alta @automatizar
Cenário: BDD-CPI-001 — Acessar o BackOffice pela home
  Dado que o usuário está autenticado na home do Função
  Quando o usuário clica em Backoffice
  Então a tela principal do BackOffice deve ser exibida
  E deve apresentar o seletor BackOffice com Corporate Ativo
```

### BDD-CPI-002 — Abrir Consulta de Cobrança em Corporate Ativo

**Classificação:** Confirmado · **Prioridade:** Alta · **Execução:** Candidata à automação
**Rastreabilidade:** EVD-CPI-002; EVD-CPI-006
**Justificativa das tags:** Smoke limitado à disponibilidade da consulta que permite localizar as operações integradas; não comprova integração nem a correção dos dados de um contrato.
**Automação:** Repetir a consulta com contratos controlados e comparar a tela com os dados esperados. Preparar seletores e massa estável de contratos abertos e liquidados; não há automação implementada. A consulta de operações previamente integradas não comprova o processo de integração.

```gherkin
@smoke @regressao @funcional @positivo @modulo_backoffice @funcionalidade_consulta_propostas_integradas @alta @automatizar
Cenário: BDD-CPI-002 — Abrir Consulta de Cobrança em Corporate Ativo
  Dado que a tela principal do BackOffice está aberta com Corporate Ativo selecionado
  Quando o usuário abre o menu Consultas
  E clica em Consulta de Cobrança
  Então a tela Consulta de Cobrança deve ser exibida
  E deve apresentar Tipo, Conteúdo, Módulo, Pesquisa de Contratos e Buscar
  E deve apresentar a área Resultados da Pesquisa
```

### BDD-CPI-003 — Visualizar os tipos de pesquisa disponíveis

**Classificação:** Confirmado · **Prioridade:** Média · **Execução:** Candidata à automação
**Rastreabilidade:** EVD-CPI-003; EVD-CPI-006
**Justificativa das tags:** Protege as opções do seletor Tipo; impacto restrito à configuração da pesquisa, sem afirmar resultados de buscas pelos demais critérios.
**Automação:** Repetir a consulta com contratos controlados e comparar a tela com os dados esperados. Preparar seletores e massa estável de contratos abertos e liquidados; não há automação implementada. A consulta de operações previamente integradas não comprova o processo de integração.

```gherkin
@regressao @funcional @positivo @modulo_backoffice @funcionalidade_consulta_propostas_integradas @media @automatizar
Cenário: BDD-CPI-003 — Visualizar os tipos de pesquisa disponíveis
  Dado que Consulta de Cobrança está aberta em Corporate Ativo
  Quando o usuário abre o seletor Tipo
  Então o seletor deve disponibilizar Nome, CPF, CNPJ, Número de Operação, Código do cliente e Número do lastro
```

### BDD-CPI-004 — Buscar uma operação integrada por número e situação do contrato

**Classificação:** Confirmado · **Prioridade:** Alta · **Execução:** Candidata à automação
**Rastreabilidade:** EVD-CPI-004; EVD-CPI-006
**Justificativa das tags:** Protege a localização do contrato integrado com filtros compatíveis com sua situação. Abertos, Liquidados e Todos são variações do mesmo percurso, sem justificar alternativo.
**Automação:** Repetir a consulta com contratos controlados e comparar a tela com os dados esperados. Preparar seletores e massa estável de contratos abertos e liquidados; não há automação implementada. A consulta de operações previamente integradas não comprova o processo de integração.

```gherkin
@regressao @funcional @positivo @modulo_backoffice @funcionalidade_consulta_propostas_integradas @alta @automatizar
Esquema do Cenário: BDD-CPI-004 — Buscar uma operação integrada por número e situação do contrato
  Dado que Consulta de Cobrança está aberta em Corporate Ativo
  E a massa de teste contém uma operação integrada de contrato <situacao> identificada por seu número
  Quando o usuário seleciona Número de Operação em Tipo
  E preenche Conteúdo com o número da operação preparada
  E seleciona Corporate Ativo em Módulo
  E seleciona <filtro> em Pesquisa de Contratos
  E clica em Buscar
  Então Resultados da Pesquisa deve apresentar a operação correspondente ao número informado
  E o resultado deve apresentar o cliente, CPF/CNPJ, Data Base, Data Liq. e Sistema do contrato preparado
  E o sistema do contrato deve ser Corporate Ativo

  Exemplos:
    | situacao | filtro |
    | aberto | Abertos |
    | liquidado | Liquidados |
    | aberto | Todos |
    | liquidado | Todos |
```

### BDD-CPI-005 — Visualizar os dados da operação selecionada

**Classificação:** Confirmado · **Prioridade:** Alta · **Execução:** Candidata à automação
**Rastreabilidade:** EVD-CPI-005; EVD-CPI-006
**Justificativa das tags:** Protege a identificação e os dados exibidos ao abrir o contrato encontrado; a conferência usa a operação preparada e não mistura os números diferentes das capturas.
**Automação:** Repetir a consulta com contratos controlados e comparar a tela com os dados esperados. Preparar seletores e massa estável de contratos abertos e liquidados; não há automação implementada. A consulta de operações previamente integradas não comprova o processo de integração.

```gherkin
@regressao @funcional @positivo @modulo_backoffice @funcionalidade_consulta_propostas_integradas @alta @automatizar
Cenário: BDD-CPI-005 — Visualizar os dados da operação selecionada
  Dado que Resultados da Pesquisa apresenta a operação integrada preparada
  E os dados esperados dessa operação estão disponíveis na massa de teste
  Quando o usuário clica no número da operação no resultado
  Então o sistema deve apresentar Operação Selecionada para o contrato escolhido
  E deve apresentar número da operação, nome do cliente, Data Base, Data de Vencimento, Valor da Operação, Qtd de Parcelas e Sistema correspondentes ao contrato preparado
  E deve apresentar produto, descrição e status do produto correspondentes ao contrato preparado
  E deve apresentar as seções Dados da Operação, Dados do Cliente, Avalistas, Despesas/Tarifas, Dados da Liberação, Garantia(s), Cessão de Crédito, Histórico de Alteração, Taxas e Condições da Operação
  E os dados da proposta e da liberação apresentados devem corresponder aos esperados para a operação preparada
```

