# Cenários BDD

## Identificação

- **Aplicação:** Função (`app-pine-funcao`)
- **Escopo:** Cobertura Essencial de WEB Bacen IFRS > Integrações > Geração do Documento 3050 - Estatísticas Agregadas de Crédito e Arrendamento > Gerar Informação. Inclui datas editáveis da semana anterior, término na sexta-feira, Empresa 001, Produto 000, opções desmarcadas, ausência de filtros selecionados, confirmação, atualização de status e arquivo gerado no servidor com diretório informado na tabela de processamento. Não inclui carga, transmissão ou validação do conteúdo do arquivo.
- **Formato:** TestingQA 0.7.1 · Architect 1.4.5

## Funcionalidade

```gherkin
# language: pt
Funcionalidade: Gerar o documento 3050 do Bacen
  O usuário informa o período semanal e gera o arquivo com os insumos previamente carregados.
```

## Dados necessários

- **Usuário/perfil:** Usuário autorizado com acesso ao WEB Bacen IFRS e à geração do documento 3050.
- **Ambiente:** Base de teste com geração controlada e Carga do Bacen concluída para o período. Versão não legível nas capturas fornecidas; preparar estado independente para repetir a geração.
- **Massa de dados:** Datas de início e fim da semana anterior a gerar, com término na sexta-feira. Empresa 001 e Produto 000 para todos os produtos. Não fixar as datas do exemplo nem deduzir o início pela data do computador; preparar o período de referência antes da execução.
- **Dependências externas:** Carga do Bacen concluída para as datas abrangidas, conforme pré-condição expressamente confirmada pelo usuário. A execução da carga não integra esta suíte.
- **Observações de negócio:** Ambos os campos de data permitem edição. Manter desmarcadas as três opções adicionais e não mover itens à lista Filtro(s) selecionado(s). Não presumir nome, extensão, conteúdo, diretório fixo de geração, mensagem literal do status ou prazo de geração. A captura apresenta Erro de processamento anterior por ausência de carga; esse histórico não é resultado esperado da nova geração com insumo completo. Tratamento de erro sem carga e uso de filtros/opções avançadas estão fora do recorte Essencial informado.

A geração ocorre no servidor; o diretório pode variar e deve ser obtido na tabela de processamento da execução atual. Não se espera download automático na máquina do usuário.

## Tags utilizadas

| Tag | Significado |
|---|---|
| `@smoke` | Disponibilidade inicial da entrada da geração. |
| `@regressao` | Proteção de comportamento existente contra mudanças. |
| `@funcional` | Comportamento funcional de preparação e geração. |
| `@positivo` | Uso de parâmetros e insumos válidos. |
| `@modulo_web_bacen_ifrs` | Agrupamento pelo WEB Bacen IFRS. |
| `@funcionalidade_geracao_documento_3050` | Agrupamento pela geração do documento 3050. |
| `@alta` | Acesso, parâmetros ou resultado central da geração. |
| `@automatizar` | Candidato à automação, sem implementação pronta. |

## Cenários BDD

### BDD-3050-001 — Acessar a geração do documento 3050

**Classificação:** Confirmado · **Prioridade:** Alta · **Execução:** Candidata à automação
**Rastreabilidade:** EVD-3050-001; EVD-3050-003
**Justificativa das tags:** Protege o acesso à geração existente; smoke limitado à abertura da tela, sem comprovar a geração do arquivo.
**Automação:** Repetir a verificação com período e insumos controlados; conferir campos, seleção, status ou arquivo conforme o objetivo. Preparar seletores, estado da geração e leitura do diretório registrado na tabela de processamento; não há automação implementada. Formato, conteúdo, texto literal do status e prazo do arquivo não estão especificados.

```gherkin
@smoke @regressao @funcional @positivo @modulo_web_bacen_ifrs @funcionalidade_geracao_documento_3050 @alta @automatizar
Cenário: BDD-3050-001 — Acessar a geração do documento 3050
  Dado que a tela principal do WEB Bacen IFRS está aberta para o usuário autorizado
  Quando o usuário abre Integrações
  E acessa Geração do Documento 3050 - Estatísticas Agregadas de Crédito e Arrendamento
  E clica em Gerar Informação
  Então o sistema deve apresentar a tela de geração do documento 3050
  E deve apresentar Dt. Início Referência, Dt. Fim Referência, Empresa, Produto e Confirmar
```

### BDD-3050-002 — Editar as datas de referência do período semanal

**Classificação:** Confirmado · **Prioridade:** Alta · **Execução:** Candidata à automação
**Rastreabilidade:** EVD-3050-003
**Justificativa das tags:** Protege a edição permitida nos dois campos, distinguindo o comportamento específico do 3050 da restrição do 3044.
**Automação:** Repetir a verificação com período e insumos controlados; conferir campos, seleção, status ou arquivo conforme o objetivo. Preparar seletores, estado da geração e leitura do diretório registrado na tabela de processamento; não há automação implementada. Formato, conteúdo, texto literal do status e prazo do arquivo não estão especificados.

```gherkin
@regressao @funcional @positivo @modulo_web_bacen_ifrs @funcionalidade_geracao_documento_3050 @alta @automatizar
Cenário: BDD-3050-002 — Editar as datas de referência do período semanal
  Dado que a tela de geração do documento 3050 está aberta
  E a massa identifica o período semanal anterior com início e término na sexta-feira
  Quando o usuário preenche Dt. Início Referência com o início preparado
  E preenche Dt. Fim Referência com a sexta-feira de encerramento preparada
  Então os dois campos devem aceitar a edição
  E devem apresentar as datas informadas
```

### BDD-3050-003 — Preparar empresa e todos os produtos sem opções adicionais

**Classificação:** Confirmado · **Prioridade:** Alta · **Execução:** Candidata à automação
**Rastreabilidade:** EVD-3050-003
**Justificativa das tags:** Protege a configuração suficiente à geração de todos os produtos, com Empresa 001 e Produto 000, sem exigir filtros ou opções adicionais.
**Automação:** Repetir a verificação com período e insumos controlados; conferir campos, seleção, status ou arquivo conforme o objetivo. Preparar seletores, estado da geração e leitura do diretório registrado na tabela de processamento; não há automação implementada. Formato, conteúdo, texto literal do status e prazo do arquivo não estão especificados.

```gherkin
@regressao @funcional @positivo @modulo_web_bacen_ifrs @funcionalidade_geracao_documento_3050 @alta @automatizar
Cenário: BDD-3050-003 — Preparar empresa e todos os produtos sem opções adicionais
  Dado que a tela de geração do documento 3050 está aberta com o período semanal preparado
  Quando o usuário preenche Empresa com 001
  E preenche Produto com 000
  E mantém Montar Arquivo com layout Externo desmarcado
  E mantém Gerar Informações Analíticas desmarcado
  E mantém Efetuar Análise Semântica 3050 desmarcado
  E mantém Filtro(s) selecionado(s) sem itens
  Então Empresa deve apresentar 001
  E Produto deve apresentar 000 para abranger todos os produtos
  E as três opções adicionais devem permanecer desmarcadas
  E a lista Filtro(s) selecionado(s) deve permanecer vazia
```

### BDD-3050-004 — Gerar o documento 3050 sem filtros adicionais

**Classificação:** Confirmado · **Prioridade:** Alta · **Execução:** Candidata à automação
**Rastreabilidade:** EVD-3050-003; EVD-3040-004
**Justificativa das tags:** Protege a geração com insumos carregados e a configuração confirmada; não testa conteúdo, transmissão ou opções avançadas.
**Automação:** Repetir a verificação com período e insumos controlados; conferir campos, seleção, status ou arquivo conforme o objetivo. Preparar seletores, estado da geração e leitura do diretório registrado na tabela de processamento; não há automação implementada. Formato, conteúdo, texto literal do status e prazo do arquivo não estão especificados.

```gherkin
@regressao @funcional @positivo @modulo_web_bacen_ifrs @funcionalidade_geracao_documento_3050 @alta @automatizar
Cenário: BDD-3050-004 — Gerar o documento 3050 sem filtros adicionais
  Dado que Dt. Início Referência e Dt. Fim Referência delimitam o período semanal anterior preparado com término na sexta-feira
  E Empresa contém 001
  E Produto contém 000 para incluir todos os produtos
  E Montar Arquivo com layout Externo, Gerar Informações Analíticas e Efetuar Análise Semântica 3050 estão desmarcados
  E Filtro(s) selecionado(s) está vazio
  E a Carga do Bacen está concluída para as datas abrangidas
  Quando o usuário clica em Confirmar
  Então o sistema deve atualizar o status indicando a conclusão da geração
  E deve gerar o arquivo do documento 3050 no servidor
  E deve informar na tabela de processamento o diretório onde esse arquivo foi gerado
```

