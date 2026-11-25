# Pacote de Atualização da Knowledge Base

## Identificação

- Aplicação: Função
- Application ID: app-pine-funcao
- Package ID: PKG-2026-11-25-003
- Versão do contrato: 1
- Revisão esperada: 0
- Run de origem: interface/geracao-documento-3044-01
- Resultado: com_alteracoes
- Estado de curadoria inicial: proposto
- Base de referência: registry.yaml revisão 3; Função ausente. Pacotes pendentes e documentos históricos não usados como contexto canônico.
- Operação proposta: inicializacao
- Data ou contexto: 2026-11-25; identidade Função confirmada anteriormente.
- Versão e ambiente: Interface WEB Bacen IFRS; versão não legível nas capturas da geração.
- Escopo: Geração semanal do documento 3044, parâmetros, insumo da carga e disponibilização do arquivo.
- **Formato:** TestingQA 0.7.1 · Architect 1.4.5

## Evidências

### EVD-3044-001

- Tipo: Imagem e descrição
- Natureza: especificada
- Origem: Usuário nesta conversa sobre geração do documento 3044.
- Referência: Imagem 1 e passo a passo.
- Data e versão: Contexto de novembro de 2026; versão não legível na captura da tela.
- Ambiente, perfil ou canal: Interface web; sem generalização de perfil.
- Escopo: Caminho Integrações > Geração do Documento 3044 > Gerar Informação.
- Limitações: Data e log da captura são históricos. Não definem algoritmo da Data Inicial, SLA, formato, conteúdo ou transmissão do arquivo. Sucesso está visível na imagem 2 e a atualização de status foi confirmada na resposta 3.

### EVD-3044-002

- Tipo: Imagem e descrição
- Natureza: especificada
- Origem: Usuário nesta conversa sobre geração do documento 3044.
- Referência: Imagem 2 e descrição.
- Data e versão: Contexto de novembro de 2026; versão não legível na captura da tela.
- Ambiente, perfil ou canal: Interface web; sem generalização de perfil.
- Escopo: Tela de geração, parâmetros e status Sucesso em histórico.
- Limitações: Data e log da captura são históricos. Não definem algoritmo da Data Inicial, SLA, formato, conteúdo ou transmissão do arquivo. Sucesso está visível na imagem 2 e a atualização de status foi confirmada na resposta 3.

### EVD-3044-003

- Tipo: Esclarecimento textual
- Natureza: especificada
- Origem: Usuário nesta conversa sobre geração do documento 3044.
- Referência: Respostas 1–3 do usuário nesta retomada.
- Data e versão: Contexto de novembro de 2026; versão não legível na captura da tela.
- Ambiente, perfil ou canal: Interface web; sem generalização de perfil.
- Escopo: Data Inicial sem edição, sexta-feira, configuração, dependência da carga, arquivo e atualização de status.
- Limitações: Data e log da captura são históricos. Não definem algoritmo da Data Inicial, SLA, formato, conteúdo ou transmissão do arquivo. Sucesso está visível na imagem 2 e a atualização de status foi confirmada na resposta 3.

## Entidades afetadas

- Aplicação: app-pine-funcao — Função.
- Funcionalidade: FUN-3044-001 — Geração do documento 3044.

## Afirmações

### AFR-3044-001

- Conteúdo: A geração é acessada em WEB Bacen IFRS por Integrações > Geração do Documento 3044 > Gerar Informação.
- Entidade: FUN-3044-001
- Classificação: Confirmada
- Natureza: especificada
- Evidências: EVD-3044-001
- Escopo: Geração semanal com Empresa 001 e Produto 000 no procedimento informado.
- Vigência: Contexto esclarecido pelo usuário em novembro de 2026.
- Limitações: Não generalizar para outros layouts, períodos ou transmissão ao Bacen.
- Confirmação necessária: Não aplicável.

### AFR-3044-002

- Conteúdo: A tela é denominada Geração do Documento 3044 - Dados de Eventos em Operações de Crédito.
- Entidade: FUN-3044-001
- Classificação: Confirmada
- Natureza: especificada
- Evidências: EVD-3044-002
- Escopo: Geração semanal com Empresa 001 e Produto 000 no procedimento informado.
- Vigência: Contexto esclarecido pelo usuário em novembro de 2026.
- Limitações: Não generalizar para outros layouts, períodos ou transmissão ao Bacen.
- Confirmação necessária: Não aplicável.

### AFR-3044-003

- Conteúdo: O documento do procedimento abrange o período semanal anterior.
- Entidade: FUN-3044-001
- Classificação: Confirmada
- Natureza: especificada
- Evidências: EVD-3044-003
- Escopo: Geração semanal com Empresa 001 e Produto 000 no procedimento informado.
- Vigência: Contexto esclarecido pelo usuário em novembro de 2026.
- Limitações: Não generalizar para outros layouts, períodos ou transmissão ao Bacen.
- Confirmação necessária: Não aplicável.

### AFR-3044-004

- Conteúdo: Data Inicial é apresentada pelo sistema e não permite edição pelo usuário.
- Entidade: FUN-3044-001
- Classificação: Confirmada
- Natureza: especificada
- Evidências: EVD-3044-003
- Escopo: Geração semanal com Empresa 001 e Produto 000 no procedimento informado.
- Vigência: Contexto esclarecido pelo usuário em novembro de 2026.
- Limitações: Não generalizar para outros layouts, períodos ou transmissão ao Bacen.
- Confirmação necessária: Não aplicável.

### AFR-3044-005

- Conteúdo: Data Final deve encerrar o período semanal na sexta-feira, última data fechada antes de acabar a semana no procedimento informado.
- Entidade: FUN-3044-001
- Classificação: Confirmada
- Natureza: especificada
- Evidências: EVD-3044-003
- Escopo: Geração semanal com Empresa 001 e Produto 000 no procedimento informado.
- Vigência: Contexto esclarecido pelo usuário em novembro de 2026.
- Limitações: Não generalizar para outros layouts, períodos ou transmissão ao Bacen.
- Confirmação necessária: Não aplicável.

### AFR-3044-006

- Conteúdo: O procedimento mantém Layout Banco Central e Tipo de Período Novo Período.
- Entidade: FUN-3044-001
- Classificação: Confirmada
- Natureza: especificada
- Evidências: EVD-3044-003
- Escopo: Geração semanal com Empresa 001 e Produto 000 no procedimento informado.
- Vigência: Contexto esclarecido pelo usuário em novembro de 2026.
- Limitações: Não generalizar para outros layouts, períodos ou transmissão ao Bacen.
- Confirmação necessária: Não aplicável.

### AFR-3044-007

- Conteúdo: Empresa deve ser preenchida com 001 no procedimento informado.
- Entidade: FUN-3044-001
- Classificação: Confirmada
- Natureza: especificada
- Evidências: EVD-3044-003
- Escopo: Geração semanal com Empresa 001 e Produto 000 no procedimento informado.
- Vigência: Contexto esclarecido pelo usuário em novembro de 2026.
- Limitações: Não generalizar para outros layouts, períodos ou transmissão ao Bacen.
- Confirmação necessária: Não aplicável.

### AFR-3044-008

- Conteúdo: Produto 000 inclui todos os produtos no documento.
- Entidade: FUN-3044-001
- Classificação: Confirmada
- Natureza: especificada
- Evidências: EVD-3044-003
- Escopo: Geração semanal com Empresa 001 e Produto 000 no procedimento informado.
- Vigência: Contexto esclarecido pelo usuário em novembro de 2026.
- Limitações: Não generalizar para outros layouts, períodos ou transmissão ao Bacen.
- Confirmação necessária: Não aplicável.

### AFR-3044-009

- Conteúdo: A Carga do Bacen precisa estar concluída para as datas abrangidas, fornecendo as movimentações realizadas nos dias do período como insumo do documento.
- Entidade: FUN-3044-001
- Classificação: Confirmada
- Natureza: especificada
- Evidências: EVD-3044-003
- Escopo: Geração semanal com Empresa 001 e Produto 000 no procedimento informado.
- Vigência: Contexto esclarecido pelo usuário em novembro de 2026.
- Limitações: Não generalizar para outros layouts, períodos ou transmissão ao Bacen.
- Confirmação necessária: Não aplicável.

### AFR-3044-010

- Conteúdo: Confirmar solicita a geração do documento 3044 com os parâmetros informados.
- Entidade: FUN-3044-001
- Classificação: Confirmada
- Natureza: especificada
- Evidências: EVD-3044-003
- Escopo: Geração semanal com Empresa 001 e Produto 000 no procedimento informado.
- Vigência: Contexto esclarecido pelo usuário em novembro de 2026.
- Limitações: Não generalizar para outros layouts, períodos ou transmissão ao Bacen.
- Confirmação necessária: Não aplicável.

### AFR-3044-011

- Conteúdo: A geração atualiza o status e disponibiliza arquivo para download; a tela apresenta Sucesso como estado de conclusão.
- Entidade: FUN-3044-001
- Classificação: Confirmada
- Natureza: especificada
- Evidências: EVD-3044-003; EVD-3044-002
- Escopo: Geração semanal com Empresa 001 e Produto 000 no procedimento informado.
- Vigência: Contexto esclarecido pelo usuário em novembro de 2026.
- Limitações: Não generalizar para outros layouts, períodos ou transmissão ao Bacen.
- Confirmação necessária: Não aplicável.

## Alterações propostas

### ALT-3044-001

- Operação: adicionar
- Alvo: AFR-3044-001
- Afirmações: AFR-3044-001
- Valor anterior: Não aplicável; aplicação ausente do registro canônico consultado.
- Valor proposto: A geração é acessada em WEB Bacen IFRS por Integrações > Geração do Documento 3044 > Gerar Informação.
- Justificativa: Novas evidências e respostas explícitas do usuário sobre o procedimento.

### ALT-3044-002

- Operação: adicionar
- Alvo: AFR-3044-002
- Afirmações: AFR-3044-002
- Valor anterior: Não aplicável; aplicação ausente do registro canônico consultado.
- Valor proposto: A tela é denominada Geração do Documento 3044 - Dados de Eventos em Operações de Crédito.
- Justificativa: Novas evidências e respostas explícitas do usuário sobre o procedimento.

### ALT-3044-003

- Operação: adicionar
- Alvo: AFR-3044-003
- Afirmações: AFR-3044-003
- Valor anterior: Não aplicável; aplicação ausente do registro canônico consultado.
- Valor proposto: O documento do procedimento abrange o período semanal anterior.
- Justificativa: Novas evidências e respostas explícitas do usuário sobre o procedimento.

### ALT-3044-004

- Operação: adicionar
- Alvo: AFR-3044-004
- Afirmações: AFR-3044-004
- Valor anterior: Não aplicável; aplicação ausente do registro canônico consultado.
- Valor proposto: Data Inicial é apresentada pelo sistema e não permite edição pelo usuário.
- Justificativa: Novas evidências e respostas explícitas do usuário sobre o procedimento.

### ALT-3044-005

- Operação: adicionar
- Alvo: AFR-3044-005
- Afirmações: AFR-3044-005
- Valor anterior: Não aplicável; aplicação ausente do registro canônico consultado.
- Valor proposto: Data Final deve encerrar o período semanal na sexta-feira, última data fechada antes de acabar a semana no procedimento informado.
- Justificativa: Novas evidências e respostas explícitas do usuário sobre o procedimento.

### ALT-3044-006

- Operação: adicionar
- Alvo: AFR-3044-006
- Afirmações: AFR-3044-006
- Valor anterior: Não aplicável; aplicação ausente do registro canônico consultado.
- Valor proposto: O procedimento mantém Layout Banco Central e Tipo de Período Novo Período.
- Justificativa: Novas evidências e respostas explícitas do usuário sobre o procedimento.

### ALT-3044-007

- Operação: adicionar
- Alvo: AFR-3044-007
- Afirmações: AFR-3044-007
- Valor anterior: Não aplicável; aplicação ausente do registro canônico consultado.
- Valor proposto: Empresa deve ser preenchida com 001 no procedimento informado.
- Justificativa: Novas evidências e respostas explícitas do usuário sobre o procedimento.

### ALT-3044-008

- Operação: adicionar
- Alvo: AFR-3044-008
- Afirmações: AFR-3044-008
- Valor anterior: Não aplicável; aplicação ausente do registro canônico consultado.
- Valor proposto: Produto 000 inclui todos os produtos no documento.
- Justificativa: Novas evidências e respostas explícitas do usuário sobre o procedimento.

### ALT-3044-009

- Operação: adicionar
- Alvo: AFR-3044-009
- Afirmações: AFR-3044-009
- Valor anterior: Não aplicável; aplicação ausente do registro canônico consultado.
- Valor proposto: A Carga do Bacen precisa estar concluída para as datas abrangidas, fornecendo as movimentações realizadas nos dias do período como insumo do documento.
- Justificativa: Novas evidências e respostas explícitas do usuário sobre o procedimento.

### ALT-3044-010

- Operação: adicionar
- Alvo: AFR-3044-010
- Afirmações: AFR-3044-010
- Valor anterior: Não aplicável; aplicação ausente do registro canônico consultado.
- Valor proposto: Confirmar solicita a geração do documento 3044 com os parâmetros informados.
- Justificativa: Novas evidências e respostas explícitas do usuário sobre o procedimento.

### ALT-3044-011

- Operação: adicionar
- Alvo: AFR-3044-011
- Afirmações: AFR-3044-011
- Valor anterior: Não aplicável; aplicação ausente do registro canônico consultado.
- Valor proposto: A geração atualiza o status e disponibiliza arquivo para download; a tela apresenta Sucesso como estado de conclusão.
- Justificativa: Novas evidências e respostas explícitas do usuário sobre o procedimento.

## Relações

Não foram propostas relações adicionais entre entidades neste recorte; a dependência da carga está registrada nas afirmações.

## Conflitos e pendências

Sem pendências materiais para o recorte de geração configurada. Algoritmo da Data Inicial, nome, formato, conteúdo, prazo e transmissão do arquivo não foram definidos e não são objeto desta proposta.

## Histórico e vigência

- Conhecimento anterior: Função ausente do registry.yaml revisão 3.
- Estado anterior: Sem contexto canônico disponível; pacotes pendentes não constituem base aprovada.
- Nova vigência: Contexto informado em novembro de 2026.
- Motivo: Registrar preparação e geração semanal do documento 3044 com insumos previamente carregados.
- Evidências: EVD-3044-001; EVD-3044-002; EVD-3044-003

## Resumo

- Evidências: 3
- Confirmadas: 11
- Inferidas: 0
- Pendentes: 0
- Conflitos: 0
- Alterações propostas: 11

## Validação

- Identificação: aprovado — identidade confirmada na conversa.
- Base de referência: aprovado — vínculo consultado; ausência de Função registrada.
- Isolamento entre aplicações: aprovado — conteúdo restrito a app-pine-funcao.
- Rastreabilidade: aprovado — afirmações vinculadas a imagens e respostas.
- Separação epistemológica: aprovado — parâmetros e resultados limitados às evidências.
- Conflitos e pendências: aprovado — nenhuma dúvida material no recorte configurado.
- Histórico e vigência: aprovado — contexto e limitações registrados.
- Ausência de BDD e tags: aprovado — apenas conhecimento funcional proposto.
- Prontidão para curadoria: pendente — aplicação nova requer prévia e confirmação próprias do Maintainer.
- Resultado geral: pendente
- Bloqueios: Sem bloqueio para enfileirar; aplicação canônica depende do Maintainer.
