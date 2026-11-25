# Pacote de Atualização da Knowledge Base

## Identificação

- Aplicação: Função
- Application ID: app-pine-funcao
- Package ID: PKG-2026-11-25-010
- Versão do contrato: 1
- Revisão esperada: 0
- Run de origem: interface/carga-bacen-01
- Resultado: com_alteracoes
- Estado de curadoria inicial: proposto
- Base de referência: registry.yaml revisão 3; Função ausente. Pacotes pendentes e documentos históricos não usados como contexto canônico.
- Operação proposta: inicializacao
- Data ou contexto: 2026-11-25; identidade Função confirmada anteriormente.
- Versão e ambiente: Interface web 26.0416.118.5495 nas capturas; ambiente de execução não confirmado.
- Escopo: Carga Mensal do Bacen após fechamento para os sistemas envolvidos na mesma referência.
- **Formato:** TestingQA 0.7.1 · Architect 1.4.5

## Evidências

### EVD-BAC-001

- Tipo: Imagens e descrição textual
- Natureza: especificada
- Origem: Usuário nesta conversa sobre Carga do Bacen.
- Referência: Imagens 1–2 e descrição.
- Data e versão: Contexto de novembro de 2026; versão 26.0416.118.5495 nas capturas do módulo.
- Ambiente, perfil ou canal: Interface web; permissões das capturas não generalizadas.
- Escopo: Entrada no WEB Bacen IFRS.
- Limitações: Log com Erro é anterior à confirmação ilustrada. Capturas não comprovam resultado da nova carga. Data e sistemas selecionados são exemplos; não há evidência de conclusão nem de atualização das datas após processar.

### EVD-BAC-002

- Tipo: Imagens e descrição textual
- Natureza: especificada
- Origem: Usuário nesta conversa sobre Carga do Bacen.
- Referência: Imagens 3–4 e descrição.
- Data e versão: Contexto de novembro de 2026; versão 26.0416.118.5495 nas capturas do módulo.
- Ambiente, perfil ou canal: Interface web; permissões das capturas não generalizadas.
- Escopo: Menu Processamento e tela Carga do Bacen.
- Limitações: Log com Erro é anterior à confirmação ilustrada. Capturas não comprovam resultado da nova carga. Data e sistemas selecionados são exemplos; não há evidência de conclusão nem de atualização das datas após processar.

### EVD-BAC-003

- Tipo: Imagens e descrição textual
- Natureza: especificada
- Origem: Usuário nesta conversa sobre Carga do Bacen.
- Referência: Imagens 4–5 e descrição.
- Data e versão: Contexto de novembro de 2026; versão 26.0416.118.5495 nas capturas do módulo.
- Ambiente, perfil ou canal: Interface web; permissões das capturas não generalizadas.
- Escopo: Opções, sistemas, datas e log anterior.
- Limitações: Log com Erro é anterior à confirmação ilustrada. Capturas não comprovam resultado da nova carga. Data e sistemas selecionados são exemplos; não há evidência de conclusão nem de atualização das datas após processar.

### EVD-BAC-004

- Tipo: Esclarecimento textual
- Natureza: especificada
- Origem: Usuário nesta conversa sobre Carga do Bacen.
- Referência: Respostas 1–3 do usuário nesta retomada.
- Data e versão: Contexto de novembro de 2026; versão 26.0416.118.5495 nas capturas do módulo.
- Ambiente, perfil ou canal: Interface web; permissões das capturas não generalizadas.
- Escopo: Mensal, qualquer data fechada, todos os sistemas da mesma referência e conclusão desconhecida.
- Limitações: Log com Erro é anterior à confirmação ilustrada. Capturas não comprovam resultado da nova carga. Data e sistemas selecionados são exemplos; não há evidência de conclusão nem de atualização das datas após processar.

### EVD-BAC-005

- Tipo: Captura adicional e esclarecimento textual.
- Natureza: especificada
- Origem: Usuário nesta conversa, atualização da carga pela interface.
- Referência: Modal Confirmação com mensagem "Requisição para processamento da Carga do Bacen realizada com sucesso!"; relato do fechamento por Ok, status Trabalhando e atualização da última carga ao finalizar.
- Data e versão: Contexto de novembro de 2026; versão não visível na captura adicional.
- Ambiente, perfil ou canal: Interface WEB Bacen IFRS; não se aplica ao CMD.
- Escopo: Requisição, início do processamento e efeito nas datas após o término.
- Limitações: Mensagem confirma requisição, não conclusão. Texto literal do status final, prazo e data exata esperada após a carga não fornecidos.

## Entidades afetadas

- Aplicação: app-pine-funcao — Função.
- Funcionalidade: FUN-BAC-001 — Carga Mensal do Bacen.

## Afirmações

### AFR-BAC-001

- Conteúdo: A Carga do Bacen é realizada após as movimentações, pré-fechamento e fechamento da referência para visualizar as movimentações corretamente.
- Entidade: FUN-BAC-001
- Classificação: Confirmada
- Natureza: especificada
- Evidências: EVD-BAC-004
- Escopo: Carga Mensal no WEB Bacen IFRS.
- Vigência: Contexto fornecido pelo usuário em novembro de 2026.
- Limitações: Não generalizar para Diária, transmissão ao Banco Central, relatórios específicos ou resultado não demonstrado.
- Confirmação necessária: Não aplicável.

### AFR-BAC-002

- Conteúdo: O módulo é acessado por WEB Bacen IFRS na home do Função.
- Entidade: FUN-BAC-001
- Classificação: Confirmada
- Natureza: especificada
- Evidências: EVD-BAC-001
- Escopo: Carga Mensal no WEB Bacen IFRS.
- Vigência: Contexto fornecido pelo usuário em novembro de 2026.
- Limitações: Não generalizar para Diária, transmissão ao Banco Central, relatórios específicos ou resultado não demonstrado.
- Confirmação necessária: Não aplicável.

### AFR-BAC-003

- Conteúdo: A rotina é acessada por Processamento > Carga do Bacen > Processar.
- Entidade: FUN-BAC-001
- Classificação: Confirmada
- Natureza: especificada
- Evidências: EVD-BAC-002
- Escopo: Carga Mensal no WEB Bacen IFRS.
- Vigência: Contexto fornecido pelo usuário em novembro de 2026.
- Limitações: Não generalizar para Diária, transmissão ao Banco Central, relatórios específicos ou resultado não demonstrado.
- Confirmação necessária: Não aplicável.

### AFR-BAC-004

- Conteúdo: A tela apresenta Data de Referência, Opções de Carga, Sistemas e Confirmar.
- Entidade: FUN-BAC-001
- Classificação: Confirmada
- Natureza: especificada
- Evidências: EVD-BAC-003
- Escopo: Carga Mensal no WEB Bacen IFRS.
- Vigência: Contexto fornecido pelo usuário em novembro de 2026.
- Limitações: Não generalizar para Diária, transmissão ao Banco Central, relatórios específicos ou resultado não demonstrado.
- Confirmação necessária: Não aplicável.

### AFR-BAC-005

- Conteúdo: O procedimento informado utiliza a opção Mensal.
- Entidade: FUN-BAC-001
- Classificação: Confirmada
- Natureza: especificada
- Evidências: EVD-BAC-004
- Escopo: Carga Mensal no WEB Bacen IFRS.
- Vigência: Contexto fornecido pelo usuário em novembro de 2026.
- Limitações: Não generalizar para Diária, transmissão ao Banco Central, relatórios específicos ou resultado não demonstrado.
- Confirmação necessária: Não aplicável.

### AFR-BAC-006

- Conteúdo: A data de referência pode ser qualquer data já fechada, conforme o procedimento informado.
- Entidade: FUN-BAC-001
- Classificação: Confirmada
- Natureza: especificada
- Evidências: EVD-BAC-004
- Escopo: Carga Mensal no WEB Bacen IFRS.
- Vigência: Contexto fornecido pelo usuário em novembro de 2026.
- Limitações: Não generalizar para Diária, transmissão ao Banco Central, relatórios específicos ou resultado não demonstrado.
- Confirmação necessária: Não aplicável.

### AFR-BAC-007

- Conteúdo: Devem ser selecionados todos os sistemas envolvidos que possuam a mesma data de referência de fechamento.
- Entidade: FUN-BAC-001
- Classificação: Confirmada
- Natureza: especificada
- Evidências: EVD-BAC-004
- Escopo: Carga Mensal no WEB Bacen IFRS.
- Vigência: Contexto fornecido pelo usuário em novembro de 2026.
- Limitações: Não generalizar para Diária, transmissão ao Banco Central, relatórios específicos ou resultado não demonstrado.
- Confirmação necessária: Não aplicável.

### AFR-BAC-008

- Conteúdo: Após informar a referência e selecionar os sistemas, o usuário clica em Confirmar para solicitar a carga.
- Entidade: FUN-BAC-001
- Classificação: Confirmada
- Natureza: especificada
- Evidências: EVD-BAC-003
- Escopo: Carga Mensal no WEB Bacen IFRS.
- Vigência: Contexto fornecido pelo usuário em novembro de 2026.
- Limitações: Não generalizar para Diária, transmissão ao Banco Central, relatórios específicos ou resultado não demonstrado.
- Confirmação necessária: Não aplicável.

### AFR-BAC-009

- Conteúdo: A tela informa a data da última carga ao lado dos sistemas listados.
- Entidade: FUN-BAC-001
- Classificação: Confirmada
- Natureza: especificada
- Evidências: EVD-BAC-004
- Escopo: Carga Mensal no WEB Bacen IFRS.
- Vigência: Contexto fornecido pelo usuário em novembro de 2026.
- Limitações: Não generalizar para Diária, transmissão ao Banco Central, relatórios específicos ou resultado não demonstrado.
- Confirmação necessária: Não aplicável.

### AFR-BAC-010

- Conteúdo: O texto literal do status final e o prazo do processamento ainda não foram confirmados; a requisição, o início e a atualização das datas ao término estão esclarecidos em EVD-BAC-005.
- Entidade: FUN-BAC-001
- Classificação: Pendente
- Natureza: especificada
- Evidências: EVD-BAC-004
- Escopo: Carga Mensal no WEB Bacen IFRS.
- Vigência: Contexto fornecido pelo usuário em novembro de 2026.
- Limitações: Não generalizar para Diária, transmissão ao Banco Central, relatórios específicos ou resultado não demonstrado.
- Confirmação necessária: Resolver PEN-BAC-001.

### AFR-BAC-011

- Conteúdo: Confirmar apresenta o modal Confirmação com a mensagem "Requisição para processamento da Carga do Bacen realizada com sucesso!" e botão Ok.
- Entidade: FUN-BAC-001
- Classificação: Confirmada
- Natureza: especificada
- Evidências: EVD-BAC-005
- Escopo: Carga do Bacen pela interface.
- Vigência: Atualização fornecida pelo usuário em novembro de 2026.
- Limitações: Sem extrapolação para CMD, status final literal, SLA ou igualdade obrigatória da data atualizada com a referência.
- Confirmação necessária: Não aplicável.

### AFR-BAC-012

- Conteúdo: Clicar em Ok fecha o modal e inicia o processamento, acompanhado na própria tela de Carga do Bacen.
- Entidade: FUN-BAC-001
- Classificação: Confirmada
- Natureza: especificada
- Evidências: EVD-BAC-005
- Escopo: Carga do Bacen pela interface.
- Vigência: Atualização fornecida pelo usuário em novembro de 2026.
- Limitações: Sem extrapolação para CMD, status final literal, SLA ou igualdade obrigatória da data atualizada com a referência.
- Confirmação necessária: Não aplicável.

### AFR-BAC-013

- Conteúdo: Durante o processamento iniciado após Ok, a tela apresenta o status Trabalhando.
- Entidade: FUN-BAC-001
- Classificação: Confirmada
- Natureza: especificada
- Evidências: EVD-BAC-005
- Escopo: Carga do Bacen pela interface.
- Vigência: Atualização fornecida pelo usuário em novembro de 2026.
- Limitações: Sem extrapolação para CMD, status final literal, SLA ou igualdade obrigatória da data atualizada com a referência.
- Confirmação necessária: Não aplicável.

### AFR-BAC-014

- Conteúdo: A data da última carga exibida ao lado dos sistemas é atualizada após finalizar o processo.
- Entidade: FUN-BAC-001
- Classificação: Confirmada
- Natureza: especificada
- Evidências: EVD-BAC-005
- Escopo: Carga do Bacen pela interface.
- Vigência: Atualização fornecida pelo usuário em novembro de 2026.
- Limitações: Sem extrapolação para CMD, status final literal, SLA ou igualdade obrigatória da data atualizada com a referência.
- Confirmação necessária: Não aplicável.

## Alterações propostas

### ALT-BAC-001

- Operação: adicionar
- Alvo: AFR-BAC-001
- Afirmações: AFR-BAC-001
- Valor anterior: Não aplicável; aplicação ausente do registro consultado.
- Valor proposto: A Carga do Bacen é realizada após as movimentações, pré-fechamento e fechamento da referência para visualizar as movimentações corretamente.
- Justificativa: Evidência específica do usuário e respostas explícitas preservadas.

### ALT-BAC-002

- Operação: adicionar
- Alvo: AFR-BAC-002
- Afirmações: AFR-BAC-002
- Valor anterior: Não aplicável; aplicação ausente do registro consultado.
- Valor proposto: O módulo é acessado por WEB Bacen IFRS na home do Função.
- Justificativa: Evidência específica do usuário e respostas explícitas preservadas.

### ALT-BAC-003

- Operação: adicionar
- Alvo: AFR-BAC-003
- Afirmações: AFR-BAC-003
- Valor anterior: Não aplicável; aplicação ausente do registro consultado.
- Valor proposto: A rotina é acessada por Processamento > Carga do Bacen > Processar.
- Justificativa: Evidência específica do usuário e respostas explícitas preservadas.

### ALT-BAC-004

- Operação: adicionar
- Alvo: AFR-BAC-004
- Afirmações: AFR-BAC-004
- Valor anterior: Não aplicável; aplicação ausente do registro consultado.
- Valor proposto: A tela apresenta Data de Referência, Opções de Carga, Sistemas e Confirmar.
- Justificativa: Evidência específica do usuário e respostas explícitas preservadas.

### ALT-BAC-005

- Operação: adicionar
- Alvo: AFR-BAC-005
- Afirmações: AFR-BAC-005
- Valor anterior: Não aplicável; aplicação ausente do registro consultado.
- Valor proposto: O procedimento informado utiliza a opção Mensal.
- Justificativa: Evidência específica do usuário e respostas explícitas preservadas.

### ALT-BAC-006

- Operação: adicionar
- Alvo: AFR-BAC-006
- Afirmações: AFR-BAC-006
- Valor anterior: Não aplicável; aplicação ausente do registro consultado.
- Valor proposto: A data de referência pode ser qualquer data já fechada, conforme o procedimento informado.
- Justificativa: Evidência específica do usuário e respostas explícitas preservadas.

### ALT-BAC-007

- Operação: adicionar
- Alvo: AFR-BAC-007
- Afirmações: AFR-BAC-007
- Valor anterior: Não aplicável; aplicação ausente do registro consultado.
- Valor proposto: Devem ser selecionados todos os sistemas envolvidos que possuam a mesma data de referência de fechamento.
- Justificativa: Evidência específica do usuário e respostas explícitas preservadas.

### ALT-BAC-008

- Operação: adicionar
- Alvo: AFR-BAC-008
- Afirmações: AFR-BAC-008
- Valor anterior: Não aplicável; aplicação ausente do registro consultado.
- Valor proposto: Após informar a referência e selecionar os sistemas, o usuário clica em Confirmar para solicitar a carga.
- Justificativa: Evidência específica do usuário e respostas explícitas preservadas.

### ALT-BAC-009

- Operação: adicionar
- Alvo: AFR-BAC-009
- Afirmações: AFR-BAC-009
- Valor anterior: Não aplicável; aplicação ausente do registro consultado.
- Valor proposto: A tela informa a data da última carga ao lado dos sistemas listados.
- Justificativa: Evidência específica do usuário e respostas explícitas preservadas.

### ALT-BAC-010

- Operação: registrar_pendencia
- Alvo: AFR-BAC-010
- Afirmações: AFR-BAC-010
- Valor anterior: Não aplicável; aplicação ausente do registro consultado.
- Valor proposto: O texto literal do status final e o prazo do processamento ainda não foram confirmados; a requisição, o início e a atualização das datas ao término estão esclarecidos em EVD-BAC-005.
- Justificativa: Evidência específica do usuário e respostas explícitas preservadas.

### ALT-BAC-011

- Operação: adicionar
- Alvo: AFR-BAC-011
- Afirmações: AFR-BAC-011
- Valor anterior: Não informado na proposta histórica PKG-2026-11-25-002.
- Valor proposto: Confirmar apresenta o modal Confirmação com a mensagem "Requisição para processamento da Carga do Bacen realizada com sucesso!" e botão Ok.
- Justificativa: Nova captura e esclarecimento explícito resolvem os efeitos antes desconhecidos.

### ALT-BAC-012

- Operação: adicionar
- Alvo: AFR-BAC-012
- Afirmações: AFR-BAC-012
- Valor anterior: Não informado na proposta histórica PKG-2026-11-25-002.
- Valor proposto: Clicar em Ok fecha o modal e inicia o processamento, acompanhado na própria tela de Carga do Bacen.
- Justificativa: Nova captura e esclarecimento explícito resolvem os efeitos antes desconhecidos.

### ALT-BAC-013

- Operação: adicionar
- Alvo: AFR-BAC-013
- Afirmações: AFR-BAC-013
- Valor anterior: Não informado na proposta histórica PKG-2026-11-25-002.
- Valor proposto: Durante o processamento iniciado após Ok, a tela apresenta o status Trabalhando.
- Justificativa: Nova captura e esclarecimento explícito resolvem os efeitos antes desconhecidos.

### ALT-BAC-014

- Operação: adicionar
- Alvo: AFR-BAC-014
- Afirmações: AFR-BAC-014
- Valor anterior: Não informado na proposta histórica PKG-2026-11-25-002.
- Valor proposto: A data da última carga exibida ao lado dos sistemas é atualizada após finalizar o processo.
- Justificativa: Nova captura e esclarecimento explícito resolvem os efeitos antes desconhecidos.

## Relações

Não foram propostas relações adicionais neste recorte.

## Conflitos e pendências

### PEN-BAC-001

- Elemento afetado: AFR-BAC-010
- Informação ausente: Texto literal do status final e prazo do processamento; demais aspectos esclarecidos em EVD-BAC-005.
- Evidências relacionadas: EVD-BAC-004
- Pergunta objetiva: Como identificar sucesso e como as datas da última carga mudam após confirmar?
- Impacto: Pendência parcialmente resolvida. Requisição, início por Ok, status Trabalhando e atualização das datas confirmados. Não exigir literal de status final ou prazo não fornecido.
- Condição de desbloqueio: Evidência do texto do status final e prazo esperado, se esses critérios forem incorporados à cobertura.

## Histórico e vigência

- Conhecimento anterior: Função ausente do registry.yaml revisão 3.
- Estado anterior: Sem contexto canônico disponível; propostas pendentes não são conhecimento aprovado.
- Nova vigência: Contexto esclarecido em novembro de 2026.
- Motivo: Revisar a proposta histórica PKG-2026-11-25-002 com a nova evidência, preservando-a sem alteração. Reconciliar as duas propostas antes de aplicar; requisição não equivale à conclusão.
- Evidências: EVD-BAC-001; EVD-BAC-002; EVD-BAC-003; EVD-BAC-004

## Resumo

- Evidências: 5
- Confirmadas: 13
- Inferidas: 0
- Pendentes: 1
- Conflitos: 0
- Alterações propostas: 14

## Validação

- Identificação: aprovado — identidade confirmada na conversa.
- Base de referência: aprovado — vínculo consultado; ausência canônica registrada.
- Isolamento entre aplicações: aprovado — restrito a app-pine-funcao.
- Rastreabilidade: aprovado — afirmações vinculadas às evidências.
- Separação epistemológica: aprovado — conclusão não confirmada preservada como Pendente.
- Conflitos e pendências: aprovado — log histórico não tratado como resultado atual.
- Histórico e vigência: aprovado — contexto delimitado.
- Ausência de BDD e tags: aprovado — somente conhecimento funcional proposto.
- Prontidão para curadoria: pendente — aplicação nova requer prévia e confirmação próprias do Maintainer.
- Resultado geral: pendente
- Bloqueios: Sem bloqueio para enfileirar; conclusão não pode ser confirmada sem nova evidência.
