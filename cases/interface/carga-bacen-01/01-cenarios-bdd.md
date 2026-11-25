# Cenários BDD

## Identificação

- **Aplicação:** Função (`app-pine-funcao`)
- **Escopo:** Cobertura Essencial da Carga do Bacen pela interface WEB Bacen IFRS > Processamento > Carga do Bacen > Processar. Carga Mensal ou Diária para referência já fechada, respeitando a exclusividade de Mensal no último dia do mês e selecionando todos os sistemas envolvidos que tenham a mesma referência de fechamento. Inclui datas da última carga e requisição de processamento, status Trabalhando e atualização das datas ao término. Exclui execução de movimentações, pré-fechamento e fechamento.
- **Formato:** TestingQA 0.7.1 · Architect 1.4.5

## Funcionalidade

```gherkin
# language: pt
Funcionalidade: Realizar a carga do Bacen após o fechamento
  O usuário informa a referência fechada, seleciona os sistemas envolvidos e confirma a carga.
```

## Dados necessários

- **Usuário/perfil:** Usuário autenticado com acesso ao WEB Bacen IFRS e à rotina Carga do Bacen.
- **Ambiente:** Base de teste restaurável com os sistemas disponíveis na rotina. Capturas históricas na versão 26.0416.118.5495; preparar o estado de carga independentemente para cada execução.
- **Massa de dados:** Qualquer data de referência já movimentada, pré-fechada e fechada para todos os sistemas envolvidos na carga, sem ultrapassar o último fechamento contábil de nenhum sistema selecionado. Identificar o conjunto completo desses sistemas e seus históricos conhecidos de última carga. Para conferir a atualização, preparar uma referência ainda não carregada e as datas esperadas após sua conclusão. Não fixar datas nem os sistemas exemplificados nas capturas. Não confundir a referência de fechamento da massa com a data da última carga exibida na lista.
- **Observações de negócio:** Selecionar Mensal ou Diária conforme o período preparado. A data de referência deve ser menor ou igual à data do último fechamento contábil de cada sistema selecionado. No último dia do mês, somente Mensal é permitida; não utilizar Diária nessa referência. A forma de bloqueio dessa escolha não foi especificada. As tabelas Exemplos variam apenas a opção de carga. A data de referência deve ser preparada na massa de teste de forma compatível com a opção: no último dia do mês usar Mensal; para Diária usar uma data que não seja o último dia do mês. Mensal não foi restringida exclusivamente ao último dia; a restrição fornecida impede Diária nesse dia. A carga ocorre após o fechamento para permitir visualizar as movimentações corretamente; não foram definidos relatórios ou consultas de conferência dessas movimentações. As primeiras capturas mostram log e status Erro de execução anterior. A nova evidência confirma o modal de requisição, seu fechamento por Ok, o início com status Trabalhando e a atualização da última carga após finalizar. A mensagem confirma a requisição, não a conclusão. Texto literal do status final, prazo e atualização do log continuam não definidos; a data esperada após a carga deve estar preparada, sem presumir igualdade com a referência apenas pela nova evidência. Não executar Cancelar, Voltar ou Exportar Log como testes neste recorte, pois seus efeitos não foram especificados.

## Tags utilizadas

| Tag | Significado |
|---|---|
| `@smoke` | Disponibilidade inicial da entrada da rotina. |
| `@regressao` | Proteção de comportamentos existentes com resultado sustentado. |
| `@funcional` | Comportamento funcional da carga e da sua preparação. |
| `@positivo` | Uso de referência fechada e sistemas elegíveis. |
| `@modulo_web_bacen_ifrs` | Agrupamento pelo WEB Bacen IFRS. |
| `@funcionalidade_carga_bacen` | Agrupamento pela Carga do Bacen. |
| `@alta` | Acesso ou preparação central da carga. |
| `@media` | Visualização de informação histórica por sistema. |
| `@automatizar` | Candidato à automação, sem implementação pronta. |

## Cenários BDD

### BDD-BAC-001 — Acessar WEB Bacen IFRS

**Classificação:** Confirmado · **Prioridade:** Alta · **Execução:** Candidata à automação
**Rastreabilidade:** EVD-BAC-001; EVD-BAC-004
**Justificativa das tags:** Protege a entrada existente no módulo necessário à carga após o fechamento.
**Automação:** Repetir a verificação com referência e sistemas controlados, comparando seleção e histórico exibidos. Preparar seletores e restauração da base antes de repetir a carga; não há automação implementada. Não usar o log anterior como resultado da execução atual.

```gherkin
@regressao @funcional @positivo @modulo_web_bacen_ifrs @funcionalidade_carga_bacen @alta @automatizar
Cenário: BDD-BAC-001 — Acessar WEB Bacen IFRS
  Dado que o usuário está autenticado na home do Função
  Quando o usuário clica em WEB Bacen IFRS
  Então a tela principal do WEB Bacen IFRS deve ser exibida
  E deve disponibilizar o menu Processamento
```

### BDD-BAC-002 — Abrir a Carga do Bacen

**Classificação:** Confirmado · **Prioridade:** Alta · **Execução:** Candidata à automação
**Rastreabilidade:** EVD-BAC-002; EVD-BAC-004
**Justificativa das tags:** Smoke limitado à abertura da rotina, necessária para iniciar os testes da carga; não comprova processamento nem movimentações carregadas.
**Automação:** Repetir a verificação com referência e sistemas controlados, comparando seleção e histórico exibidos. Preparar seletores e restauração da base antes de repetir a carga; não há automação implementada. Não usar o log anterior como resultado da execução atual.

```gherkin
@smoke @regressao @funcional @positivo @modulo_web_bacen_ifrs @funcionalidade_carga_bacen @alta @automatizar
Cenário: BDD-BAC-002 — Abrir a Carga do Bacen
  Dado que a tela principal do WEB Bacen IFRS está aberta
  Quando o usuário abre Processamento
  E acessa Carga do Bacen
  E clica em Processar
  Então a tela Carga do Bacen deve ser exibida
  E deve apresentar Data de Referência, Opções de Carga, Sistemas e Confirmar
```

### BDD-BAC-003 — Visualizar a data da última carga por sistema

**Classificação:** Confirmado · **Prioridade:** Média · **Execução:** Candidata à automação
**Rastreabilidade:** EVD-BAC-003; EVD-BAC-004
**Justificativa das tags:** Protege a informação por sistema confirmada pelo usuário; não interpreta a data exibida como referência de fechamento nem como prova de sucesso da nova carga.
**Automação:** Repetir a verificação com referência e sistemas controlados, comparando seleção e histórico exibidos. Preparar seletores e restauração da base antes de repetir a carga; não há automação implementada. Não usar o log anterior como resultado da execução atual.

```gherkin
@regressao @funcional @positivo @modulo_web_bacen_ifrs @funcionalidade_carga_bacen @media @automatizar
Cenário: BDD-BAC-003 — Visualizar a data da última carga por sistema
  Dado que Carga do Bacen está aberta
  E a massa contém sistemas com histórico conhecido de última carga
  Quando o usuário consulta a lista Sistemas - Data da Última Carga
  Então cada sistema preparado deve apresentar ao seu lado a data da última carga correspondente ao histórico conhecido
```

### BDD-BAC-004 — Preparar a carga mensal ou diária para a referência fechada

**Classificação:** Confirmado · **Prioridade:** Alta · **Execução:** Candidata à automação
**Rastreabilidade:** EVD-BAC-006; EVD-BAC-004
**Justificativa das tags:** Protege a preparação Mensal ou Diária para os sistemas da mesma referência; exemplos válidos usam Mensal no último dia do mês e Diária em outro dia. Não presume o mecanismo de bloqueio de Diária no fim do mês.
**Automação:** Repetir a verificação com referência e sistemas controlados, comparando seleção e histórico exibidos. Preparar seletores e restauração da base antes de repetir a carga; não há automação implementada. Não usar o log anterior como resultado da execução atual.

```gherkin
@regressao @funcional @positivo @modulo_web_bacen_ifrs @funcionalidade_carga_bacen @alta @automatizar
Esquema do Cenário: BDD-BAC-004 — Preparar a carga mensal ou diária para a referência fechada
  Dado que Carga do Bacen está aberta
  E os sistemas envolvidos na carga estão identificados na massa de teste
  E todos esses sistemas tiveram movimentações, pré-fechamento e fechamento concluídos na data de referência preparada na massa de teste
  E essa referência não ultrapassa o último fechamento contábil de nenhum sistema selecionado
  Quando o usuário informa a data preparada na massa de teste em Data de Referência
  E seleciona <opcao> em Opções de Carga
  E marca todos os sistemas envolvidos com essa referência de fechamento
  Então a tela deve apresentar a data de referência preparada na massa de teste
  E a opção <opcao> deve estar selecionada
  E os sistemas selecionados devem corresponder ao conjunto preparado para essa referência

  Exemplos:
    | opcao |
    | Mensal |
    | Diária |
```

### BDD-BAC-005 — Confirmar a requisição de processamento da carga

**Classificação:** Confirmado · **Prioridade:** Alta · **Execução:** Candidata à automação
**Rastreabilidade:** EVD-BAC-006; EVD-BAC-004; EVD-BAC-005
**Justificativa das tags:** Protege a confirmação observável da requisição; a mensagem literal está sustentada pela nova captura e não significa término do processamento.
**Automação:** Repetir com referência e sistemas controlados; capturar o modal, a transição de status ou as datas conforme o objetivo. Preparar seletores e restauração da carga; não há automação implementada. Espera pelo término sem SLA definido e sem exigir literal de status final.

```gherkin
@regressao @funcional @positivo @modulo_web_bacen_ifrs @funcionalidade_carga_bacen @alta @automatizar
Esquema do Cenário: BDD-BAC-005 — Confirmar a requisição de processamento da carga
  Dado que a carga está preparada com <opcao> selecionada
  E Data de Referência contém a data já fechada preparada na massa de teste
  E todos os sistemas envolvidos com a mesma referência de fechamento estão selecionados
  Quando o usuário clica em Confirmar
  Então o sistema deve apresentar o modal Confirmação
  E o modal deve exibir a mensagem "Requisição para processamento da Carga do Bacen realizada com sucesso!"
  E deve apresentar o botão Ok

  Exemplos:
    | opcao |
    | Mensal |
    | Diária |
```

### BDD-BAC-006 — Iniciar o processamento ao fechar o aviso com Ok

**Classificação:** Confirmado · **Prioridade:** Alta · **Execução:** Candidata à automação
**Rastreabilidade:** EVD-BAC-006; EVD-BAC-004; EVD-BAC-005
**Justificativa das tags:** Protege a transição do aviso para a execução na própria tela, conforme esclarecimento do usuário.
**Automação:** Repetir com referência e sistemas controlados; capturar o modal, a transição de status ou as datas conforme o objetivo. Preparar seletores e restauração da carga; não há automação implementada. Espera pelo término sem SLA definido e sem exigir literal de status final.

```gherkin
@regressao @funcional @positivo @modulo_web_bacen_ifrs @funcionalidade_carga_bacen @alta @automatizar
Esquema do Cenário: BDD-BAC-006 — Iniciar o processamento ao fechar o aviso com Ok
  Dado que o modal Confirmação apresenta a mensagem de requisição da Carga do Bacen realizada com sucesso
  E a requisição foi feita com <opcao> para a data já fechada preparada na massa de teste
  Quando o usuário clica em Ok
  Então o sistema deve fechar o modal
  E deve iniciar o processamento da carga
  E a tela Carga do Bacen deve apresentar o status Trabalhando

  Exemplos:
    | opcao |
    | Mensal |
    | Diária |
```

### BDD-BAC-007 — Atualizar a data da última carga após finalizar

**Classificação:** Confirmado · **Prioridade:** Alta · **Execução:** Candidata à automação
**Rastreabilidade:** EVD-BAC-006; EVD-BAC-004; EVD-BAC-005
**Justificativa das tags:** Protege o efeito confirmado ao término nos sistemas processados. Não exige mensagem ou texto literal de status final ainda desconhecido, nem afirma sucesso apenas pelo aviso de requisição.
**Automação:** Repetir com referência e sistemas controlados; capturar o modal, a transição de status ou as datas conforme o objetivo. Preparar seletores e restauração da carga; não há automação implementada. Espera pelo término sem SLA definido e sem exigir literal de status final.

```gherkin
@regressao @funcional @positivo @modulo_web_bacen_ifrs @funcionalidade_carga_bacen @alta @automatizar
Esquema do Cenário: BDD-BAC-007 — Atualizar a data da última carga após finalizar
  Dado que a carga da referência preparada está em processamento na tela Carga do Bacen
  E a carga foi solicitada com <opcao> para a data já fechada preparada na massa de teste
  E os sistemas selecionados possuem datas anteriores registradas na massa
  E as datas esperadas após essa carga estão preparadas para conferência
  Quando o processamento da carga é finalizado
  Então as datas da última carga apresentadas ao lado dos sistemas processados devem ser atualizadas
  E devem corresponder às datas esperadas para a execução preparada

  Exemplos:
    | opcao |
    | Mensal |
    | Diária |
```

