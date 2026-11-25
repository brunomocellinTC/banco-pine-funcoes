# Cenários BDD

## Identificação

- **Aplicação:** Função (`app-pine-funcao`)
- **Escopo:** Cobertura Essencial da geração do documento 3044 em WEB Bacen IFRS > Integrações > Geração do Documento 3044 > Gerar Informação. Inclui acesso, Data Inicial sem edição, preparação semanal com término na sexta-feira fechada, Empresa 001, Produto 000, confirmação, status e arquivo gerado no servidor com diretório informado na tabela de processamento. Não inclui transmissão ao Bacen, validação do conteúdo do arquivo nem execução da Carga do Bacen.
- **Formato:** TestingQA 0.7.1 · Architect 1.4.5

## Funcionalidade

```gherkin
# language: pt
Funcionalidade: Gerar o documento 3044 do Bacen
  O usuário gera o documento semanal a partir das movimentações previamente carregadas no WEB Bacen IFRS.
```

## Dados necessários

- **Usuário/perfil:** Usuário autorizado com acesso ao WEB Bacen IFRS e à geração do documento 3044.
- **Ambiente:** Base de teste com a rotina disponível e geração controlada para evitar interferência entre execuções. Versão do módulo não legível nas capturas fornecidas.
- **Massa de dados:** Período semanal anterior a gerar, com início compatível com a Data Inicial apresentada pelo sistema e término na sexta-feira fechada correspondente. Empresa 001 e Produto 000, abrangendo todos os produtos. Não fixar a data de exemplo da captura nem calcular o período pela data do computador.
- **Dependências externas:** Carga do Bacen concluída para as datas abrangidas. O usuário definiu essa carga como insumo das movimentações diárias necessárias ao preenchimento do documento; a execução da carga não faz parte desta suíte.
- **Observações de negócio:** Manter Layout Banco Central e Tipo de Período Novo Período. A regra exata que determina automaticamente a Data Inicial não foi fornecida; conferir a compatibilidade do período preparado antes da execução. A sexta-feira é a última data fechada antes do encerramento da semana no procedimento informado. Não presumir SLA, nome, extensão, estrutura, conteúdo, diretório fixo de geração ou transmissão do arquivo. O log visível na captura é histórico; conferir o registro de diretório da geração atual, conforme esclarecimento posterior do usuário.

A geração ocorre no servidor; o diretório pode variar e deve ser obtido na tabela de processamento da execução atual. Não se espera download automático na máquina do usuário.

## Tags utilizadas

| Tag | Significado |
|---|---|
| `@smoke` | Disponibilidade inicial da entrada da geração. |
| `@regressao` | Proteção de comportamento existente contra mudanças. |
| `@funcional` | Capacidade funcional de preparação ou geração. |
| `@positivo` | Uso de período e parâmetros válidos. |
| `@negativo` | Tentativa de edição de campo que não permite alteração. |
| `@modulo_web_bacen_ifrs` | Agrupamento pelo WEB Bacen IFRS. |
| `@funcionalidade_geracao_documento_3044` | Agrupamento pela geração do documento 3044. |
| `@alta` | Preparação, restrição ou resultado central da geração. |
| `@automatizar` | Candidato à automação, sem implementação pronta. |

## Cenários BDD

### BDD-3044-001 — Acessar a geração do documento 3044

**Classificação:** Confirmado · **Prioridade:** Alta · **Execução:** Candidata à automação
**Rastreabilidade:** EVD-3044-001
**Justificativa das tags:** Protege a entrada da geração no WEB Bacen IFRS; smoke limitado à abertura da tela.
**Automação:** Repetir a verificação com período e insumos controlados, conferindo os parâmetros, o status ou o diretório de geração informado na tabela conforme o objetivo. Preparar seletores, estado da geração e leitura do diretório registrado na tabela de processamento; não há automação implementada. Nome, formato, conteúdo e prazo do arquivo não estão especificados.

```gherkin
@smoke @regressao @funcional @positivo @modulo_web_bacen_ifrs @funcionalidade_geracao_documento_3044 @alta @automatizar
Cenário: BDD-3044-001 — Acessar a geração do documento 3044
  Dado que a tela principal do WEB Bacen IFRS está aberta para o usuário autorizado
  Quando o usuário abre Integrações
  E acessa Geração do Documento 3044
  E clica em Gerar Informação
  Então o sistema deve apresentar Geração do Documento 3044 - Dados de Eventos em Operações de Crédito
  E deve apresentar Layout, Tipo de Período, Data Inicial, Data Final, Empresa, Produto e Confirmar
```

### BDD-3044-002 — Manter a Data Inicial sem edição

**Classificação:** Confirmado · **Prioridade:** Alta · **Execução:** Candidata à automação
**Rastreabilidade:** EVD-3044-003
**Justificativa das tags:** Protege a restrição de edição confirmada pelo usuário; a tentativa é contrária à restrição e justifica negativo.
**Automação:** Repetir a verificação com período e insumos controlados, conferindo os parâmetros, o status ou o diretório de geração informado na tabela conforme o objetivo. Preparar seletores, estado da geração e leitura do diretório registrado na tabela de processamento; não há automação implementada. Nome, formato, conteúdo e prazo do arquivo não estão especificados.

```gherkin
@regressao @funcional @negativo @modulo_web_bacen_ifrs @funcionalidade_geracao_documento_3044 @alta @automatizar
Cenário: BDD-3044-002 — Manter a Data Inicial sem edição
  Dado que a tela de geração do documento 3044 apresenta Data Inicial preenchida
  Quando o usuário tenta editar Data Inicial pela interface
  Então o campo deve permanecer sem permitir edição pelo usuário
  E a data apresentada deve ser preservada
```

### BDD-3044-003 — Preparar o período semanal e os parâmetros da geração

**Classificação:** Confirmado · **Prioridade:** Alta · **Execução:** Candidata à automação
**Rastreabilidade:** EVD-3044-003
**Justificativa das tags:** Protege os parâmetros definidos para o documento: sexta-feira de encerramento, Empresa 001 e Produto 000 para todos os produtos.
**Automação:** Repetir a verificação com período e insumos controlados, conferindo os parâmetros, o status ou o diretório de geração informado na tabela conforme o objetivo. Preparar seletores, estado da geração e leitura do diretório registrado na tabela de processamento; não há automação implementada. Nome, formato, conteúdo e prazo do arquivo não estão especificados.

```gherkin
@regressao @funcional @positivo @modulo_web_bacen_ifrs @funcionalidade_geracao_documento_3044 @alta @automatizar
Cenário: BDD-3044-003 — Preparar o período semanal e os parâmetros da geração
  Dado que a tela de geração do documento 3044 está aberta
  E a semana anterior a gerar está identificada na massa com início correspondente à Data Inicial exibida
  E a sexta-feira de encerramento desse período já está fechada
  E a Carga do Bacen está concluída para as datas abrangidas
  Quando o usuário mantém Banco Central em Layout
  E mantém Novo Período em Tipo de Período
  E preenche Data Final com a sexta-feira de encerramento preparada
  E preenche Empresa com 001
  E preenche Produto com 000
  Então a tela deve apresentar os parâmetros informados para o período preparado
  E deve preservar a Data Inicial apresentada pelo sistema
```

### BDD-3044-004 — Gerar o documento 3044 e disponibilizar o arquivo

**Classificação:** Confirmado · **Prioridade:** Alta · **Execução:** Candidata à automação
**Rastreabilidade:** EVD-3044-003; EVD-3040-004
**Justificativa das tags:** Protege a capacidade central com os insumos carregados; o status e o diretório de geração na tabela são observáveis, sem afirmar conteúdo ou extensão não fornecidos.
**Automação:** Repetir a verificação com período e insumos controlados, conferindo os parâmetros, o status ou o diretório de geração informado na tabela conforme o objetivo. Preparar seletores, estado da geração e leitura do diretório registrado na tabela de processamento; não há automação implementada. Nome, formato, conteúdo e prazo do arquivo não estão especificados.

```gherkin
@regressao @funcional @positivo @modulo_web_bacen_ifrs @funcionalidade_geracao_documento_3044 @alta @automatizar
Cenário: BDD-3044-004 — Gerar o documento 3044 e disponibilizar o arquivo
  Dado que a geração está preparada com Layout Banco Central e Tipo de Período Novo Período
  E Data Inicial apresenta o início do período preparado
  E Data Final contém a sexta-feira fechada de encerramento desse período
  E Empresa contém 001
  E Produto contém 000 para abranger todos os produtos
  E a Carga do Bacen foi concluída para as datas abrangidas
  Quando o usuário clica em Confirmar
  Então o sistema deve atualizar o status da geração para Sucesso ao concluir o processamento
  E deve gerar o arquivo do documento 3044 no servidor
  E deve informar na tabela de processamento o diretório onde esse arquivo foi gerado
```

