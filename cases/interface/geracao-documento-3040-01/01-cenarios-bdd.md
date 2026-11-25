# Cenários BDD

## Identificação

- **Aplicação:** Função (`app-pine-funcao`)
- **Escopo:** Cobertura Essencial de WEB Bacen IFRS > Integrações > Geração de Informações de Risco - 3040 > Gerar Informação. Documento mensal com referência no último dia útil do mês, Empresa 001, Produto 000, confirmação, status e diretório de geração no servidor. Não inclui execução da carga, acesso ao servidor, validação do conteúdo ou transmissão ao Bacen.
- **Formato:** TestingQA 0.7.1 · Architect 1.4.5

## Funcionalidade

```gherkin
# language: pt
Funcionalidade: Gerar o documento mensal 3040 do Bacen
  O usuário informa a referência mensal e gera no servidor o arquivo com as movimentações previamente carregadas.
```

## Dados necessários

- **Usuário/perfil:** Usuário autorizado com acesso ao WEB Bacen IFRS e à geração do documento 3040.
- **Ambiente:** Base de teste com geração controlada; versão não legível nas capturas fornecidas. Preparar estado independente para repetir o processamento.
- **Massa de dados:** Mês de referência com último dia útil identificado conforme o calendário aplicável ao ambiente. Empresa 001 e Produto 000 para todos os produtos. A referência é o último dia útil, sem fixar a data histórica da captura nem calcular pela data do computador.
- **Dependências externas:** Carga do Bacen concluída para todos os dias do mês abrangido, conforme definição do usuário. A execução da carga é pré-condição, não etapa executada nesta suíte.
- **Observações de negócio:** Manter Layout Banco Central, conforme a captura. O arquivo é gerado no servidor e a tabela de processamento informa seu diretório. C:\Temp é o exemplo apresentado, não um caminho obrigatório; nome, extensão, conteúdo e prazo não foram definidos. Conferir a linha da geração atual, distinguindo-a de parâmetros ou logs históricos. Não se espera download automático na máquina do usuário. Texto literal do status de conclusão não fornecido; Erro na imagem é histórico, não resultado esperado com insumos válidos.

## Tags utilizadas

| Tag | Significado |
|---|---|
| `@smoke` | Disponibilidade inicial da entrada da geração. |
| `@regressao` | Proteção dos comportamentos existentes contra mudanças. |
| `@funcional` | Comportamento funcional de preparação e geração. |
| `@positivo` | Parâmetros válidos e insumos completos. |
| `@modulo_web_bacen_ifrs` | Agrupamento pelo WEB Bacen IFRS. |
| `@funcionalidade_geracao_documento_3040` | Agrupamento pela geração do documento 3040. |
| `@alta` | Acesso, referência ou resultado central da geração. |
| `@automatizar` | Candidato à automação, sem implementação pronta. |

## Cenários BDD

### BDD-3040-001 — Acessar a geração das informações de risco 3040

**Classificação:** Confirmado · **Prioridade:** Alta · **Execução:** Candidata à automação
**Rastreabilidade:** EVD-3040-001; EVD-3040-004
**Justificativa das tags:** Protege a entrada existente da geração mensal; smoke limitado à abertura da tela.
**Automação:** Repetir a verificação com mês e insumos controlados, conferindo parâmetros, status e registro da geração atual. Preparar seletores, estado da base e leitura da tabela; não há automação implementada. A indicação do diretório não equivale à validação do conteúdo do arquivo no servidor.

```gherkin
@smoke @regressao @funcional @positivo @modulo_web_bacen_ifrs @funcionalidade_geracao_documento_3040 @alta @automatizar
Cenário: BDD-3040-001 — Acessar a geração das informações de risco 3040
  Dado que a tela principal do WEB Bacen IFRS está aberta para o usuário autorizado
  Quando o usuário abre Integrações
  E acessa Geração de Informações de Risco - 3040
  E clica em Gerar Informação
  Então o sistema deve apresentar Geração do Documento de Risco de Crédito - 3040
  E deve apresentar Data de Referência, Empresa, Produto, Layout e Confirmar
```

### BDD-3040-002 — Preparar a referência mensal e os parâmetros da geração

**Classificação:** Confirmado · **Prioridade:** Alta · **Execução:** Candidata à automação
**Rastreabilidade:** EVD-3040-003; EVD-3040-004
**Justificativa das tags:** Protege a referência no último dia útil e os parâmetros Empresa 001 e Produto 000; carga de todos os dias do mês é pré-condição, sem executar essa carga aqui.
**Automação:** Repetir a verificação com mês e insumos controlados, conferindo parâmetros, status e registro da geração atual. Preparar seletores, estado da base e leitura da tabela; não há automação implementada. A indicação do diretório não equivale à validação do conteúdo do arquivo no servidor.

```gherkin
@regressao @funcional @positivo @modulo_web_bacen_ifrs @funcionalidade_geracao_documento_3040 @alta @automatizar
Cenário: BDD-3040-002 — Preparar a referência mensal e os parâmetros da geração
  Dado que a tela de geração do documento 3040 está aberta
  E o mês preparado tem seu último dia útil identificado na massa de teste
  E a Carga do Bacen está concluída para todos os dias desse mês
  Quando o usuário informa o último dia útil do mês em Data de Referência
  E preenche Empresa com 001
  E preenche Produto com 000
  E mantém Banco Central em Layout
  Então a tela deve apresentar a referência mensal e os parâmetros preparados
  E Produto deve abranger todos os produtos pela opção 000
```

### BDD-3040-003 — Gerar o documento 3040 no servidor e informar o diretório

**Classificação:** Confirmado · **Prioridade:** Alta · **Execução:** Candidata à automação
**Rastreabilidade:** EVD-3040-003; EVD-3040-004
**Justificativa das tags:** Protege o resultado central: atualização do status e registro do diretório do arquivo no servidor. C:\Temp é somente exemplo, sem presumir caminho fixo ou download local.
**Automação:** Repetir a verificação com mês e insumos controlados, conferindo parâmetros, status e registro da geração atual. Preparar seletores, estado da base e leitura da tabela; não há automação implementada. A indicação do diretório não equivale à validação do conteúdo do arquivo no servidor.

```gherkin
@regressao @funcional @positivo @modulo_web_bacen_ifrs @funcionalidade_geracao_documento_3040 @alta @automatizar
Cenário: BDD-3040-003 — Gerar o documento 3040 no servidor e informar o diretório
  Dado que a geração do documento 3040 está preparada com a referência no último dia útil do mês
  E Empresa contém 001
  E Produto contém 000 para todos os produtos
  E Layout apresenta Banco Central
  E a Carga do Bacen está concluída para todos os dias do mês de referência
  Quando o usuário clica em Confirmar
  Então o sistema deve atualizar o status indicando a conclusão da geração
  E deve gerar o arquivo do documento 3040 no servidor
  E deve informar na tabela de processamento o diretório onde o arquivo foi gerado
```

