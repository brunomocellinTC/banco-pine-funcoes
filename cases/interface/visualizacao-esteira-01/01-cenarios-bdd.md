# Cenários BDD

## Identificação

- **Aplicação:** Função (`app-pine-funcao`)
- **Escopo:** Cobertura Essencial da visualização da esteira em Proposta > Esteira > Aprovação/Consulta de Proposta: listagem, situação Integrado, detalhes de proposta em Andamento, retorno à tabela e retomada do cadastro pela Próxima Atividade até a etapa seguinte. Produto neutro. Não inclui aprovação final, integração nem reprodução do alerta de campos das capturas.
- **Formato:** TestingQA 0.7.1 · Architect 1.4.5

## Funcionalidade

```gherkin
# language: pt
Funcionalidade: Visualizar a esteira e retomar o cadastro de propostas
  O usuário consulta a situação e os detalhes de propostas e retoma o cadastro na etapa pendente.
```

## Dados necessários

- **Usuário/perfil:** Usuário autenticado com acesso a Proposta, à esteira e às etapas de cadastro utilizadas na massa.
- **Ambiente:** Base de teste com propostas já cadastradas e listadas na esteira; capturas históricas da versão 26.0413.118.3876. Preparar estado independente por caso, especialmente antes da confirmação que avança o cadastro.
- **Massa de dados:** Uma proposta previamente integrada e uma proposta em Andamento com link de Próxima Atividade. Identificar números, clientes, produtos e dados esperados dos detalhes. Para retomada, preparar a etapa pendente, seus dados válidos, ações obrigatórias e próxima etapa esperada de acordo com o fluxo daquela proposta. Condições da Operação é um exemplo de etapa, sem fixar produto, cliente, cálculo, indexador ou valores das capturas.
- **Observações de negócio:** O link Andamento abre detalhes; o link em Próxima Atividade retoma o cadastro no ponto pendente. Confirmar nos detalhes retorna à listagem; confirmar após preencher a etapa retomada avança à próxima etapa do cadastro. Não confundir esses efeitos. A imagem do alerta foi retirada do recorte por orientação do usuário. A referência aos cenários de cadastro previamente mapeados é de continuidade da jornada, não fonte canônica nem regra universal para produtos diferentes.

## Tags utilizadas

| Tag | Significado |
|---|---|
| `@smoke` | Disponibilidade inicial da listagem na esteira. |
| `@regressao` | Proteção de comportamento existente contra mudanças. |
| `@funcional` | Comportamento funcional da consulta ou retomada. |
| `@positivo` | Uso de propostas e dados válidos. |
| `@modulo_proposta` | Agrupamento pelo módulo Proposta. |
| `@funcionalidade_visualizacao_esteira` | Agrupamento pela visualização da esteira e retomada. |
| `@alta` | Identificação e continuidade central da proposta. |
| `@media` | Retorno da consulta à listagem, de impacto restrito. |
| `@automatizar` | Candidato à automação, sem implementação pronta. |

## Cenários BDD

### BDD-EST-001 — Acessar Aprovação/Consulta de Proposta pela esteira

**Classificação:** Confirmado · **Prioridade:** Alta · **Execução:** Candidata à automação
**Rastreabilidade:** EVD-EST-001; EVD-EST-005
**Justificativa das tags:** O acesso é necessário à consulta e à retomada do cadastro; smoke limitado à disponibilidade da listagem.
**Automação:** Repetir a consulta ou transição com proposta preparada e conferir sua identidade e a tela resultante. Preparar seletores, permissões e restauração do estado após avanço; não há automação implementada. Retomada exige dados e próxima etapa específicos da massa; não comprova aprovação final nem integração.

```gherkin
@smoke @regressao @funcional @positivo @modulo_proposta @funcionalidade_visualizacao_esteira @alta @automatizar
Cenário: BDD-EST-001 — Acessar Aprovação/Consulta de Proposta pela esteira
  Dado que o usuário está autenticado na home do Função
  Quando o usuário acessa Proposta
  E abre o menu Esteira na página inicial do módulo
  E seleciona Aprovação/Consulta de Proposta
  Então o sistema deve apresentar a tela Aprovação / Consulta de Proposta
  E deve apresentar a tabela de propostas cadastradas
```

### BDD-EST-002 — Visualizar a situação de uma proposta integrada

**Classificação:** Confirmado · **Prioridade:** Alta · **Execução:** Candidata à automação
**Rastreabilidade:** EVD-EST-002; EVD-EST-005
**Justificativa das tags:** Protege a identificação de propostas já integradas na listagem; não executa nem comprova o processo de integração.
**Automação:** Repetir a consulta ou transição com proposta preparada e conferir sua identidade e a tela resultante. Preparar seletores, permissões e restauração do estado após avanço; não há automação implementada. Retomada exige dados e próxima etapa específicos da massa; não comprova aprovação final nem integração.

```gherkin
@regressao @funcional @positivo @modulo_proposta @funcionalidade_visualizacao_esteira @alta @automatizar
Cenário: BDD-EST-002 — Visualizar a situação de uma proposta integrada
  Dado que Aprovação / Consulta de Proposta está aberta
  E existe uma proposta integrada preparada na listagem
  Quando o usuário localiza a proposta preparada pelo seu número
  Então a coluna Situação dessa proposta deve apresentar Integrado
  E a linha deve identificar o cliente e o produto correspondentes à proposta preparada
```

### BDD-EST-003 — Consultar os detalhes de uma proposta em andamento

**Classificação:** Confirmado · **Prioridade:** Alta · **Execução:** Candidata à automação
**Rastreabilidade:** EVD-EST-003; EVD-EST-005
**Justificativa das tags:** Protege o acesso aos detalhes da proposta escolhida sem confundir o link de situação com a retomada pela Próxima Atividade.
**Automação:** Repetir a consulta ou transição com proposta preparada e conferir sua identidade e a tela resultante. Preparar seletores, permissões e restauração do estado após avanço; não há automação implementada. Retomada exige dados e próxima etapa específicos da massa; não comprova aprovação final nem integração.

```gherkin
@regressao @funcional @positivo @modulo_proposta @funcionalidade_visualizacao_esteira @alta @automatizar
Cenário: BDD-EST-003 — Consultar os detalhes de uma proposta em andamento
  Dado que a tabela apresenta uma proposta preparada com Situação Andamento
  Quando o usuário clica em Andamento na linha dessa proposta
  Então o sistema deve apresentar os dados e detalhes de aprovação da proposta selecionada
  E os dados devem corresponder ao número, cliente e produto da proposta preparada
  E deve disponibilizar Confirmar ao final da página
```

### BDD-EST-004 — Retornar dos detalhes para a listagem de propostas

**Classificação:** Confirmado · **Prioridade:** Média · **Execução:** Candidata à automação
**Rastreabilidade:** EVD-EST-003; EVD-EST-005
**Justificativa das tags:** Confirmação da consulta retorna à listagem no percurso informado; não é aprovação nem retomada do cadastro.
**Automação:** Repetir a consulta ou transição com proposta preparada e conferir sua identidade e a tela resultante. Preparar seletores, permissões e restauração do estado após avanço; não há automação implementada. Retomada exige dados e próxima etapa específicos da massa; não comprova aprovação final nem integração.

```gherkin
@regressao @funcional @positivo @modulo_proposta @funcionalidade_visualizacao_esteira @media @automatizar
Cenário: BDD-EST-004 — Retornar dos detalhes para a listagem de propostas
  Dado que os detalhes da proposta em andamento estão abertos
  Quando o usuário rola até o final da página
  E clica em Confirmar
  Então o sistema deve retornar à tabela de Aprovação / Consulta de Proposta
```

### BDD-EST-005 — Retomar o cadastro na etapa indicada em Próxima Atividade

**Classificação:** Confirmado · **Prioridade:** Alta · **Execução:** Candidata à automação
**Rastreabilidade:** EVD-EST-004; EVD-EST-005
**Justificativa das tags:** Protege a retomada no ponto pendente da proposta; produto e etapa são definidos pela massa, sem fixar Condições da Operação para todos os registros.
**Automação:** Repetir a consulta ou transição com proposta preparada e conferir sua identidade e a tela resultante. Preparar seletores, permissões e restauração do estado após avanço; não há automação implementada. Retomada exige dados e próxima etapa específicos da massa; não comprova aprovação final nem integração.

```gherkin
@regressao @funcional @positivo @modulo_proposta @funcionalidade_visualizacao_esteira @alta @automatizar
Cenário: BDD-EST-005 — Retomar o cadastro na etapa indicada em Próxima Atividade
  Dado que a tabela apresenta uma proposta preparada com Situação Andamento
  E a coluna Próxima Atividade dessa proposta apresenta um link para a etapa pendente do cadastro
  Quando o usuário clica no link de Próxima Atividade da proposta preparada
  Então o sistema deve abrir o cadastro da mesma proposta na etapa indicada pelo link
  E a tela deve identificar a proposta, o cliente e o produto correspondentes ao registro selecionado
```

### BDD-EST-006 — Avançar no cadastro após preencher as pendências

**Classificação:** Confirmado · **Prioridade:** Alta · **Execução:** Candidata à automação
**Rastreabilidade:** EVD-EST-005; EVD-EST-005
**Justificativa das tags:** Protege a continuidade da proposta retomada; confirmar avança à próxima etapa do cadastro e não implica integração imediata.
**Automação:** Repetir a consulta ou transição com proposta preparada e conferir sua identidade e a tela resultante. Preparar seletores, permissões e restauração do estado após avanço; não há automação implementada. Retomada exige dados e próxima etapa específicos da massa; não comprova aprovação final nem integração.

```gherkin
@regressao @funcional @positivo @modulo_proposta @funcionalidade_visualizacao_esteira @alta @automatizar
Cenário: BDD-EST-006 — Avançar no cadastro após preencher as pendências
  Dado que o cadastro foi retomado pelo link Próxima Atividade da esteira
  E a etapa aberta possui pendências identificadas na massa de teste
  E os dados válidos e a próxima etapa esperada estão definidos para essa proposta
  Quando o usuário preenche as informações pendentes com os dados preparados
  E realiza as ações obrigatórias da etapa retomada
  E clica em Confirmar
  Então o sistema deve avançar para a próxima etapa do cadastro definida para a proposta preparada
  E deve manter a identificação da mesma proposta
```

