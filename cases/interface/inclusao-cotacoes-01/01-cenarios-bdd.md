# Cenários BDD

## Identificação

- **Aplicação:** Função (`app-pine-funcao`)
- **Escopo:** Cobertura Essencial de inclusão de cotação pela interface: Tabelas Corporativas → Tabelas WEB → Operacional → Cotações → Incluir. Inclui navegação, indexador existente/inexistente, edição permitida, confirmação, limpeza e retorno; exclui execução de inicialização por CMD.
- **Formato:** TestingQA 0.7.1 · Architect 1.4.5

## Funcionalidade

```gherkin
# language: pt
Funcionalidade: Incluir cotação de um indexador em Tabelas WEB
  O usuário identifica o indexador, informa Taxa/Índice e Tipo e confirma a inclusão pela interface.
```

## Dados necessários

- **Usuário/perfil:** Usuário de teste autenticado, com acesso a Tabelas Corporativas e Tabelas WEB; sem reproduzir credenciais.
- **Ambiente:** Base de teste restaurável com histórico de cotações controlado; capturas do módulo na versão 26.0824.123.5180. Preparar estado independente para cada caso.
- **Massa de dados:** Indexador existente com código e nome identificados na base de teste, histórico da última inclusão, taxa válida para a referência apresentada e opção de Tipo compatível disponível no cadastro. Preparar também um código sem indexador correspondente. Códigos, moeda e valores das capturas são apenas exemplos, não massa obrigatória.
- **Observações de negócio:** As datas são determinadas com base na última inclusão do indexador e não são editáveis. A regra de avanço exato e o calendário não foram definidos; os casos não fixam datas nem presumem acréscimo de um dia. Para verificar ausência de gravação ao Voltar, disponibilizar consulta autorizada ao estado do indexador sem inventar um caminho de consulta. O erro de inicialização por CMD serve apenas como origem possível do código, não como etapa executada nesta suíte.

## Tags utilizadas

| Tag | Significado |
|---|---|
| `@smoke` | Verificação inicial de disponibilidade da entrada da inclusão. |
| `@regressao` | Proteção de comportamentos existentes contra mudanças. |
| `@funcional` | Comportamento funcional especificado. |
| `@positivo` | Condição válida de uso. |
| `@negativo` | Código inexistente ou tentativa de edição proibida. |
| `@alternativo` | Cancelar ou Voltar em vez de confirmar. |
| `@modulo_tabelas_corporativas` | Agrupamento pelo módulo Tabelas Corporativas. |
| `@funcionalidade_inclusao_cotacoes` | Agrupamento pela inclusão de cotações. |
| `@alta` | Cadastro, controle de campos ou continuidade central da funcionalidade. |
| `@media` | Limpeza ou navegação de impacto restrito. |
| `@automatizar` | Candidato à automação, sem implementação pronta. |

## Cenários BDD

### BDD-COT-001 — Acessar Tabelas Corporativas pela home

**Classificação:** Confirmado · **Prioridade:** Alta · **Execução:** Candidata à automação
**Rastreabilidade:** EVD-COT-001; EVD-COT-007
**Justificativa das tags:** Protege o acesso existente ao módulo que contém a inclusão; sem testar outros módulos.
**Automação:** Repetição com respostas observáveis por tela ou alerta. Definir seletores e tratamento de alertas do navegador; preparar histórico e restauração do indexador para evitar avanço cumulativo das referências. A ausência de gravação requer consulta de estado preparada.

```gherkin
@regressao @funcional @positivo @modulo_tabelas_corporativas @funcionalidade_inclusao_cotacoes @alta @automatizar
Cenário: BDD-COT-001 — Acessar Tabelas Corporativas pela home
  Dado que o usuário está autenticado na home do Função
  Quando o usuário clica em Tabelas Corporativas
  Então a tela do módulo deve apresentar o seletor BackOffice
```

### BDD-COT-002 — Selecionar Tabelas WEB no BackOffice

**Classificação:** Confirmado · **Prioridade:** Alta · **Execução:** Candidata à automação
**Rastreabilidade:** EVD-COT-002; EVD-COT-003; EVD-COT-007
**Justificativa das tags:** A seleção define o contexto da inclusão e protege sua navegação contra mudanças.
**Automação:** Repetição com respostas observáveis por tela ou alerta. Definir seletores e tratamento de alertas do navegador; preparar histórico e restauração do indexador para evitar avanço cumulativo das referências. A ausência de gravação requer consulta de estado preparada.

```gherkin
@regressao @funcional @positivo @modulo_tabelas_corporativas @funcionalidade_inclusao_cotacoes @alta @automatizar
Cenário: BDD-COT-002 — Selecionar Tabelas WEB no BackOffice
  Dado que a tela principal de Tabelas Corporativas está aberta
  Quando o usuário seleciona Tabelas WEB no BackOffice
  Então o seletor deve apresentar Tabelas WEB
  E o menu Operacional deve estar disponível
```

### BDD-COT-003 — Acessar a inclusão de cotações pelo menu Operacional

**Classificação:** Confirmado · **Prioridade:** Alta · **Execução:** Candidata à automação
**Rastreabilidade:** EVD-COT-003; EVD-COT-004; EVD-COT-007
**Justificativa das tags:** Smoke limitado à disponibilidade da entrada da funcionalidade que supre cotação requerida pela inicialização; não comprova cadastro nem execução por CMD.
**Automação:** Repetição com respostas observáveis por tela ou alerta. Definir seletores e tratamento de alertas do navegador; preparar histórico e restauração do indexador para evitar avanço cumulativo das referências. A ausência de gravação requer consulta de estado preparada.

```gherkin
@smoke @regressao @funcional @positivo @modulo_tabelas_corporativas @funcionalidade_inclusao_cotacoes @alta @automatizar
Cenário: BDD-COT-003 — Acessar a inclusão de cotações pelo menu Operacional
  Dado que Tabelas WEB está selecionado no BackOffice
  Quando o usuário abre Operacional
  E acessa Cotações
  E seleciona Incluir
  Então a tela Inclusão de Cotações deve ser exibida
  E deve apresentar Cód. Indexador, Nome Indexador, Confirmar, Cancelar e Voltar
```

### BDD-COT-004 — Acessar o cadastro de um indexador existente

**Classificação:** Confirmado · **Prioridade:** Alta · **Execução:** Candidata à automação
**Rastreabilidade:** EVD-COT-004; EVD-COT-005; EVD-COT-007
**Justificativa das tags:** Verifica que um código existente direciona ao cadastro do indexador correspondente, conforme a massa preparada.
**Automação:** Repetição com respostas observáveis por tela ou alerta. Definir seletores e tratamento de alertas do navegador; preparar histórico e restauração do indexador para evitar avanço cumulativo das referências. A ausência de gravação requer consulta de estado preparada.

```gherkin
@regressao @funcional @positivo @modulo_tabelas_corporativas @funcionalidade_inclusao_cotacoes @alta @automatizar
Cenário: BDD-COT-004 — Acessar o cadastro de um indexador existente
  Dado que a tela Inclusão de Cotações está aberta
  E o código de um indexador existente está identificado na massa de teste
  Quando o usuário informa o código do indexador preparado em Cód. Indexador
  E clica em Confirmar
  Então a tela Cadastro de Cotações deve ser exibida para o indexador preparado
  E deve apresentar Código, Indexador, Referência, Dt. Validade, Dt. Início, Taxa/Índice, Valor Acumulado, Tipo e Usuário
```

### BDD-COT-005 — Manter os campos informativos do cadastro sem edição

**Classificação:** Confirmado · **Prioridade:** Alta · **Execução:** Candidata à automação
**Rastreabilidade:** EVD-COT-005; EVD-COT-007
**Justificativa das tags:** Protege os campos que o usuário declarou não editáveis, incluindo datas; a tentativa de edição é contrária à restrição especificada.
**Automação:** Repetição com respostas observáveis por tela ou alerta. Definir seletores e tratamento de alertas do navegador; preparar histórico e restauração do indexador para evitar avanço cumulativo das referências. A ausência de gravação requer consulta de estado preparada.

```gherkin
@regressao @funcional @negativo @modulo_tabelas_corporativas @funcionalidade_inclusao_cotacoes @alta @automatizar
Esquema do Cenário: BDD-COT-005 — Manter os campos informativos do cadastro sem edição
  Dado que Cadastro de Cotações está aberto para o indexador preparado
  Quando o usuário tenta editar o campo <campo> pela interface
  Então o campo <campo> deve permanecer sem permitir edição pelo usuário

  Exemplos:
    | campo |
    | Código |
    | Indexador |
    | Referência |
    | Dt. Validade |
    | Dt. Início |
    | Valor Acumulado |
    | Usuário |
```

### BDD-COT-006 — Incluir a cotação do indexador com sucesso

**Classificação:** Confirmado · **Prioridade:** Alta · **Execução:** Candidata à automação
**Rastreabilidade:** EVD-COT-004; EVD-COT-005; EVD-COT-006; EVD-COT-007; EVD-COT-008
**Justificativa das tags:** Protege a capacidade central com taxa e tipo válidos. O critério é a mensagem especificada; datas fixas das imagens e sucesso posterior por CMD não são presumidos.
**Automação:** Repetição com respostas observáveis por tela ou alerta. Definir seletores e tratamento de alertas do navegador; preparar histórico e restauração do indexador para evitar avanço cumulativo das referências. A ausência de gravação requer consulta de estado preparada.

```gherkin
@regressao @funcional @positivo @modulo_tabelas_corporativas @funcionalidade_inclusao_cotacoes @alta @automatizar
Cenário: BDD-COT-006 — Incluir a cotação do indexador com sucesso
  Dado que a tela Inclusão de Cotações está aberta
  E o indexador existente preparado possui histórico de última inclusão na base de teste
  E existe uma cotação preparada para a referência que será apresentada pelo sistema
  Quando o usuário informa o código do indexador preparado em Cód. Indexador
  E clica em Confirmar
  E preenche Taxa/Índice no Cadastro de Cotações com o valor preparado para a referência apresentada
  E seleciona no campo Tipo a opção compatível definida na massa de teste
  E clica em Confirmar no cadastro
  Então o navegador deve apresentar a mensagem "Inclusão realizada com sucesso!"
```

### BDD-COT-007 — Limpar o código do indexador com Cancelar

**Classificação:** Confirmado · **Prioridade:** Média · **Execução:** Candidata à automação
**Rastreabilidade:** EVD-COT-004; EVD-COT-008
**Justificativa das tags:** Percurso alternativo a confirmar o indexador; limpeza local com impacto restrito, sem confundir Cancelar com navegação.
**Automação:** Repetição com respostas observáveis por tela ou alerta. Definir seletores e tratamento de alertas do navegador; preparar histórico e restauração do indexador para evitar avanço cumulativo das referências. A ausência de gravação requer consulta de estado preparada.

```gherkin
@regressao @funcional @positivo @alternativo @modulo_tabelas_corporativas @funcionalidade_inclusao_cotacoes @media @automatizar
Cenário: BDD-COT-007 — Limpar o código do indexador com Cancelar
  Dado que Inclusão de Cotações está aberta
  E Cód. Indexador está preenchido com o código do indexador preparado
  Quando o usuário clica em Cancelar
  Então os dados preenchidos para a seleção devem ser limpos
  E a tela Inclusão de Cotações deve permanecer aberta
```

### BDD-COT-008 — Limpar os dados editados no cadastro com Cancelar

**Classificação:** Confirmado · **Prioridade:** Média · **Execução:** Candidata à automação
**Rastreabilidade:** EVD-COT-005; EVD-COT-008
**Justificativa das tags:** Percurso alternativo à confirmação, conforme limpeza especificada; não impõe valor padrão para o seletor nem limpeza dos campos informativos.
**Automação:** Repetição com respostas observáveis por tela ou alerta. Definir seletores e tratamento de alertas do navegador; preparar histórico e restauração do indexador para evitar avanço cumulativo das referências. A ausência de gravação requer consulta de estado preparada.

```gherkin
@regressao @funcional @positivo @alternativo @modulo_tabelas_corporativas @funcionalidade_inclusao_cotacoes @media @automatizar
Cenário: BDD-COT-008 — Limpar os dados editados no cadastro com Cancelar
  Dado que Cadastro de Cotações está aberto para o indexador preparado
  E Taxa/Índice foi preenchido com um valor de teste
  E a opção compatível definida na massa de teste foi selecionada no campo Tipo
  Quando o usuário clica em Cancelar
  Então os dados editados para inclusão devem ser limpos
  E a tela Cadastro de Cotações deve permanecer aberta
```

### BDD-COT-009 — Voltar do cadastro para a seleção sem salvar

**Classificação:** Confirmado · **Prioridade:** Alta · **Execução:** Candidata à automação
**Rastreabilidade:** EVD-COT-004; EVD-COT-005; EVD-COT-008
**Justificativa das tags:** Retorno alternativo ao cadastro confirmado; protege ausência de gravação, verificável por consulta autorizada da massa. Não presume retenção do código na tela anterior.
**Automação:** Repetição com respostas observáveis por tela ou alerta. Definir seletores e tratamento de alertas do navegador; preparar histórico e restauração do indexador para evitar avanço cumulativo das referências. A ausência de gravação requer consulta de estado preparada.

```gherkin
@regressao @funcional @positivo @alternativo @modulo_tabelas_corporativas @funcionalidade_inclusao_cotacoes @alta @automatizar
Cenário: BDD-COT-009 — Voltar do cadastro para a seleção sem salvar
  Dado que Cadastro de Cotações está aberto para o indexador preparado
  E Taxa/Índice contém um valor preparado ainda não confirmado
  Quando o usuário clica em Voltar
  Então a tela Inclusão de Cotações deve ser exibida
  E a cotação preenchida no cadastro não deve ser salva
```

### BDD-COT-010 — Voltar da seleção de indexador para a tela anterior

**Classificação:** Confirmado · **Prioridade:** Média · **Execução:** Candidata à automação
**Rastreabilidade:** EVD-COT-003; EVD-COT-004; EVD-COT-007; EVD-COT-008
**Justificativa das tags:** Retorno válido distinto de confirmar; limitado à tela anterior informada, sem inventar rota ou estado adicional.
**Automação:** Repetição com respostas observáveis por tela ou alerta. Definir seletores e tratamento de alertas do navegador; preparar histórico e restauração do indexador para evitar avanço cumulativo das referências. A ausência de gravação requer consulta de estado preparada.

```gherkin
@regressao @funcional @positivo @alternativo @modulo_tabelas_corporativas @funcionalidade_inclusao_cotacoes @media @automatizar
Cenário: BDD-COT-010 — Voltar da seleção de indexador para a tela anterior
  Dado que o usuário acessou Inclusão de Cotações por Operacional, Cotações e Incluir
  E o cadastro ainda não foi confirmado
  Quando o usuário clica em Voltar
  Então o sistema deve retornar à tela anterior à Inclusão de Cotações
```

### BDD-COT-011 — Informar um código de indexador inexistente

**Classificação:** Confirmado · **Prioridade:** Alta · **Execução:** Candidata à automação
**Rastreabilidade:** EVD-COT-004; EVD-COT-008
**Justificativa das tags:** Entrada inexistente explicitamente especificada; protege a resposta de erro sem inferir grafia pela captura de sucesso ou criar outros erros.
**Automação:** Repetição com respostas observáveis por tela ou alerta. Definir seletores e tratamento de alertas do navegador; preparar histórico e restauração do indexador para evitar avanço cumulativo das referências. A ausência de gravação requer consulta de estado preparada.

```gherkin
@regressao @funcional @negativo @modulo_tabelas_corporativas @funcionalidade_inclusao_cotacoes @alta @automatizar
Cenário: BDD-COT-011 — Informar um código de indexador inexistente
  Dado que Inclusão de Cotações está aberta
  E o código preparado para este caso não corresponde a um indexador cadastrado na base de teste
  Quando o usuário informa o código inexistente preparado em Cód. Indexador
  E clica em Confirmar
  Então o sistema deve apresentar a mensagem "Registro Inexistente"
```
