# Cenários BDD

## Identificação

- **Aplicação:** Função (`app-pine-funcao`)
- **Escopo:** Cobertura Essencial de Backoffice > Corporate Ativo > Lançamentos > Baixa de Parcelas: acesso, tipos, preenchimento por datas, cálculo, seleção da última conta disponível e efeitos de baixa. Estado após baixa antecipada de RAP e resposta da interface após Confirmar permanecem condicionais.
- **Formato:** TestingQA 0.7.1 · Architect 1.4.5

## Funcionalidade

```gherkin
# language: pt
Funcionalidade: Dar baixa em parcelas de operações ativas
  O usuário identifica a parcela, calcula os valores e confirma a baixa no tipo escolhido.
```

## Dados necessários

- **Usuário/perfil:** Usuário autenticado com acesso ao Corporate Ativo e à Baixa de Parcelas.
- **Ambiente:** Base de teste restaurável com operações ativas e parcelas abertas. Capturas do BackOffice 25.0430.106.6732; preparar parcela independente para cada execução que confirma baixa.
- **Massa de dados:** Código Financeiro, operação, parcela, datas de liquidação e efetivação, Recebimento, acréscimo e valor pago válidos. Preparar casos de pagamento igual, maior e menor que o devido, descontos com e sem diferença e parcela com RAP. Disponibilizar valores esperados e uma consulta autorizada do estado da parcela e dos lançamentos, cujo caminho não foi definido nas evidências. Não executar casos de efeito persistido antes de preparar essa consulta. Usar conta disponível; códigos, cliente, valores e conta das capturas são exemplos.
- **Observações de negócio:** Valor Parcela é preenchido ao informar Dt. Liquid. e Dt. Efetiv.; Valor Pago exige clicar em Calcular. Descontos são calculados pelo sistema a partir do valor pago, sem fórmula fornecida. A última conta disponível é a mais atual segundo o procedimento do usuário. O padrão ou necessidade de alterar Forma de Recebimento não foi confirmado; preparar configuração válida sem fixar Conta Corrente Condicional como regra. Não afirmar débito efetivo na conta apenas pela seleção ou por confirmar a baixa.

## Tags utilizadas

| Tag | Significado |
|---|---|
| `@smoke` | Disponibilidade inicial da página de baixa. |
| `@regressao` | Proteção dos comportamentos com resultado sustentado. |
| `@funcional` | Regra funcional de baixa ou cálculo. |
| `@positivo` | Dados válidos, incluindo pagamento divergente aceito. |
| `@condicional` | Efeito específico ainda sujeito a confirmação. |
| `@resultado_pendente` | Oráculo incompleto registrado em pendência. |
| `@modulo_backoffice` | Agrupamento pelo BackOffice. |
| `@funcionalidade_baixa_parcelas` | Agrupamento pela Baixa de Parcelas. |
| `@alta` | Efeito financeiro ou continuidade central da baixa. |
| `@media` | Disponibilidade de opções do seletor. |
| `@automatizar` | Candidato à automação, sem implementação pronta. |

## Cenários BDD

### BDD-BXP-001 — Acessar Baixa de Parcelas

**Classificação:** Confirmado · **Prioridade:** Alta · **Execução:** Candidata à automação
**Rastreabilidade:** EVD-BXP-001
**Justificativa das tags:** Protege o acesso à baixa no Corporate Ativo; smoke limitado à abertura da funcionalidade.
**Automação:** Repetição com massa controlada, restauração das parcelas e comparação com valores esperados. Preparar seletores e consulta de estado; não há automação implementada. A mensagem pós-confirmação não é usada como critério conhecido.

```gherkin
@smoke @regressao @funcional @positivo @modulo_backoffice @funcionalidade_baixa_parcelas @alta @automatizar
Cenário: BDD-BXP-001 — Acessar Baixa de Parcelas
  Dado que o usuário está autenticado na home do Função
  Quando o usuário acessa Backoffice
  E mantém Corporate Ativo no seletor BackOffice
  E abre Lançamentos
  E clica em Baixa de Parcelas
  Então a página Baixa de Parcelas - BackOffice: Corporate Ativo deve ser exibida
```

### BDD-BXP-002 — Visualizar os tipos de baixa

**Classificação:** Confirmado · **Prioridade:** Média · **Execução:** Candidata à automação
**Rastreabilidade:** EVD-BXP-002
**Justificativa das tags:** Protege as quatro opções especificadas, sem atribuir liquidação a todos os tipos.
**Automação:** Repetição com massa controlada, restauração das parcelas e comparação com valores esperados. Preparar seletores e consulta de estado; não há automação implementada. A mensagem pós-confirmação não é usada como critério conhecido.

```gherkin
@regressao @funcional @positivo @modulo_backoffice @funcionalidade_baixa_parcelas @media @automatizar
Cenário: BDD-BXP-002 — Visualizar os tipos de baixa
  Dado que Baixa de Parcelas está aberta
  Quando o usuário abre Tipo da Baixa
  Então o seletor deve apresentar Baixa Normal, Baixa com Desconto SEM Diferença, Baixa com Desconto COM Diferença e Baixa Antecipada com Desconto de Rap
```

### BDD-BXP-003 — Preencher o valor da parcela a partir das datas

**Classificação:** Confirmado · **Prioridade:** Alta · **Execução:** Candidata à automação
**Rastreabilidade:** EVD-BXP-003
**Justificativa das tags:** Protege a atualização do valor devido conforme as datas informadas, distinguindo-a do cálculo do valor pago.
**Automação:** Repetição com massa controlada, restauração das parcelas e comparação com valores esperados. Preparar seletores e consulta de estado; não há automação implementada. A mensagem pós-confirmação não é usada como critério conhecido.

```gherkin
@regressao @funcional @positivo @modulo_backoffice @funcionalidade_baixa_parcelas @alta @automatizar
Cenário: BDD-BXP-003 — Preencher o valor da parcela a partir das datas
  Dado que Baixa de Parcelas está aberta para o tipo definido na massa
  E Código Financeiro, Nro. Operação e Parc. identificam a parcela ativa preparada
  Quando o usuário preenche Dt. Liquid. e Dt. Efetiv. com as datas preparadas
  Então a coluna Valor Parcela deve ser preenchida conforme a parcela e as datas informadas
  E os valores devem corresponder aos esperados na massa de teste
```

### BDD-BXP-004 — Calcular os valores pagos da parcela

**Classificação:** Confirmado · **Prioridade:** Alta · **Execução:** Candidata à automação
**Rastreabilidade:** EVD-BXP-003
**Justificativa das tags:** Protege o acionamento necessário de Calcular para preencher Valor Pago; as fórmulas não são inferidas das imagens.
**Automação:** Repetição com massa controlada, restauração das parcelas e comparação com valores esperados. Preparar seletores e consulta de estado; não há automação implementada. A mensagem pós-confirmação não é usada como critério conhecido.

```gherkin
@regressao @funcional @positivo @modulo_backoffice @funcionalidade_baixa_parcelas @alta @automatizar
Cenário: BDD-BXP-004 — Calcular os valores pagos da parcela
  Dado que o tipo de baixa e a parcela preparada estão identificados
  E Dt. Liquid. e Dt. Efetiv. estão preenchidas
  E a tabela apresenta Valor Parcela para as datas informadas
  Quando o usuário preenche Recebimento, Vlr. Acrésc. e Vlr. Pago com os dados preparados
  E clica em Calcular
  Então a coluna Valor Pago da tabela deve ser preenchida conforme os dados informados
  E os valores calculados devem corresponder aos esperados na massa de teste
```

### BDD-BXP-005 — Liquidar a parcela por baixa normal com valor exato

**Classificação:** Confirmado · **Prioridade:** Alta · **Execução:** Candidata à automação
**Rastreabilidade:** EVD-BXP-004
**Justificativa das tags:** Protege a liquidação com pagamento igual ao devido, confirmada expressamente; não presume mensagem de sucesso.
**Automação:** Repetição com massa controlada, restauração das parcelas e comparação com valores esperados. Preparar seletores e consulta de estado; não há automação implementada. A mensagem pós-confirmação não é usada como critério conhecido.

```gherkin
@regressao @funcional @positivo @modulo_backoffice @funcionalidade_baixa_parcelas @alta @automatizar
Cenário: BDD-BXP-005 — Liquidar a parcela por baixa normal com valor exato
  Dado que Baixa Normal está selecionada para a parcela aberta preparada
  E os dados da baixa foram preenchidos com pagamento igual ao valor devido
  E o usuário clicou em Calcular
  Quando o usuário seleciona a última conta disponível em Banco / Agência / Conta Corrente
  E clica em Confirmar
  Então a parcela deve ser liquidada conforme a consulta de estado preparada para a execução
```

### BDD-BXP-006 — Manter a parcela aberta por baixa normal com valor diferente

**Classificação:** Confirmado · **Prioridade:** Alta · **Execução:** Candidata à automação
**Rastreabilidade:** EVD-BXP-004
**Justificativa das tags:** Pagamento maior ou menor é aceito no percurso informado e mantém a parcela aberta; variação válida, sem presumir regra de distribuição de juros e desconto.
**Automação:** Repetição com massa controlada, restauração das parcelas e comparação com valores esperados. Preparar seletores e consulta de estado; não há automação implementada. A mensagem pós-confirmação não é usada como critério conhecido.

```gherkin
@regressao @funcional @positivo @modulo_backoffice @funcionalidade_baixa_parcelas @alta @automatizar
Esquema do Cenário: BDD-BXP-006 — Manter a parcela aberta por baixa normal com valor diferente
  Dado que Baixa Normal está selecionada para a parcela aberta preparada
  E o valor pago preparado é <relacao> que o valor devido
  E os demais dados da baixa estão preenchidos
  E o usuário clicou em Calcular
  Quando o usuário seleciona a última conta disponível em Banco / Agência / Conta Corrente
  E clica em Confirmar
  Então o sistema deve aceitar a baixa com o valor informado
  E deve realizar lançamento de juros ou desconto conforme a regra aplicável à massa preparada
  E a parcela deve permanecer aberta conforme a consulta de estado preparada

  Exemplos:
    | relacao |
    | maior |
    | menor |
```

### BDD-BXP-007 — Aplicar desconto com e sem diferença

**Classificação:** Confirmado · **Prioridade:** Alta · **Execução:** Candidata à automação
**Rastreabilidade:** EVD-BXP-004
**Justificativa das tags:** Protege os efeitos distintos dos dois descontos definidos pelo usuário; cálculo parte do valor pago e o resultado é conferido com massa controlada.
**Automação:** Repetição com massa controlada, restauração das parcelas e comparação com valores esperados. Preparar seletores e consulta de estado; não há automação implementada. A mensagem pós-confirmação não é usada como critério conhecido.

```gherkin
@regressao @funcional @positivo @modulo_backoffice @funcionalidade_baixa_parcelas @alta @automatizar
Esquema do Cenário: BDD-BXP-007 — Aplicar desconto com e sem diferença
  Dado que <tipo> está selecionado para a parcela aberta preparada
  E os dados da baixa estão preenchidos com valor pago que gera desconto
  E o usuário clicou em Calcular
  Quando o usuário seleciona a última conta disponível em Banco / Agência / Conta Corrente
  E clica em Confirmar
  Então o sistema deve aplicar o desconto calculado a partir do valor pago
  E a parcela deve apresentar <resultado> conforme a consulta de estado preparada

  Exemplos:
    | tipo | resultado |
    | Baixa com Desconto SEM Diferença | liquidação sem diferença a pagar |
    | Baixa com Desconto COM Diferença | saldo remanescente a pagar |
```

### BDD-BXP-008 — Verificar o estado da parcela na baixa antecipada com desconto de RAP

**Classificação:** Condicional · **Prioridade:** Alta · **Execução:** Candidata à automação
**Rastreabilidade:** EVD-BXP-004
**Justificativa das tags:** Desconto no RAP foi especificado, mas a liquidação ou manutenção do saldo permanece desconhecida; não elegível a regressão enquanto o efeito estiver pendente.
**Automação:** Repetição com massa controlada, restauração das parcelas e comparação com valores esperados. Preparar seletores e consulta de estado; não há automação implementada. O assert do efeito pendente exige resolução da pendência vinculada.
**Pendência:** PEN-BXP-001

```gherkin
@condicional @resultado_pendente @funcional @positivo @modulo_backoffice @funcionalidade_baixa_parcelas @alta @automatizar
Cenário: BDD-BXP-008 — Verificar o estado da parcela na baixa antecipada com desconto de RAP
  Dado que Baixa Antecipada com Desconto de Rap está selecionada para uma parcela preparada com RAP
  E os dados válidos da baixa foram preenchidos
  E o usuário clicou em Calcular
  Quando o usuário seleciona a última conta disponível em Banco / Agência / Conta Corrente
  E clica em Confirmar
  Então deve ser confirmado se a parcela é liquidada ou permanece com saldo após a baixa
  E deve ser aplicado o desconto no RAP calculado a partir do valor pago
```

#### PEN-BXP-001 — Estado após desconto de RAP

- **Pergunta original:** Na antecipada de RAP, a parcela é liquidada ou pode permanecer com saldo?
- **Resposta do usuário:** "calculados pelo sistema à partir do valor pago, em rap se é liquidada ainda não sei."
- **Impacto:** Não permite afirmar liquidação ou manutenção de saldo após essa baixa.
- **Evidência necessária:** Regra confirmada ou execução observada com parcela que possua RAP, acompanhada de consulta de estado.
- **Cenários afetados:** BDD-BXP-008.

### BDD-BXP-009 — Verificar a resposta da interface após confirmar a baixa

**Classificação:** Condicional · **Prioridade:** Alta · **Execução:** Candidata à automação
**Rastreabilidade:** EVD-BXP-004
**Justificativa das tags:** Tela ou mensagem após Confirmar não foi informada; a resposta da interface não pode ser tratada como evidência confirmada de sucesso.
**Automação:** Repetição com massa controlada, restauração das parcelas e comparação com valores esperados. Preparar seletores e consulta de estado; não há automação implementada. O assert do efeito pendente exige resolução da pendência vinculada.
**Pendência:** PEN-BXP-002

```gherkin
@condicional @resultado_pendente @funcional @positivo @modulo_backoffice @funcionalidade_baixa_parcelas @alta @automatizar
Cenário: BDD-BXP-009 — Verificar a resposta da interface após confirmar a baixa
  Dado que a baixa preparada possui dados válidos calculados
  E a última conta disponível foi selecionada
  Quando o usuário clica em Confirmar
  Então deve ser confirmado se o sistema apresenta mensagem ou navega para outra tela após processar a baixa
```

#### PEN-BXP-002 — Resposta e verificação após Confirmar

- **Pergunta original:** Após selecionar a última conta e clicar em Confirmar, qual mensagem ou tela aparece? Onde o usuário verifica se a parcela foi liquidada ou permaneceu aberta? A Forma de Recebimento deve permanecer no padrão apresentado?
- **Resposta do usuário:** "ainda não sei"
- **Impacto:** Resposta da interface permanece aberta; consulta de estado e configuração válida de recebimento precisam ser preparadas antes da execução dos casos de baixa. Não há critério de mensagem literal confirmado.
- **Evidência necessária:** Captura ou execução da confirmação, caminho autorizado para consulta do estado e definição de Forma de Recebimento.
- **Cenários afetados:** BDD-BXP-009.
