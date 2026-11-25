# Pacote de Atualização da Knowledge Base

## Identificação

- Aplicação: Função
- Application ID: app-pine-funcao
- Package ID: PKG-2026-11-25-001
- Versão do contrato: 1
- Revisão esperada: 0
- Run de origem: interface/baixa-parcelas-01
- Resultado: com_alteracoes
- Estado de curadoria inicial: proposto
- Base de referência: registry.yaml revisão 3; Função ausente; pacotes pendentes e documentos históricos não usados como contexto canônico.
- Operação proposta: inicializacao
- Data ou contexto: 2026-11-25; identidade Função confirmada anteriormente.
- Versão e ambiente: BackOffice web 25.0430.106.6732 nas capturas; ambiente de execução não confirmado.
- Escopo: Baixa de Parcelas no Corporate Ativo.
- **Formato:** TestingQA 0.7.1 · Architect 1.4.5

## Evidências

### EVD-BXP-001

- Tipo: Imagens e esclarecimentos textuais.
- Natureza: especificada
- Origem: Usuário nesta conversa sobre baixa de parcelas.
- Referência: Imagens 1–3 e descrição.
- Data e versão: 2026-11-25, capturas históricas de novembro na versão 25.0430.106.6732.
- Ambiente, perfil ou canal: Interface web; perfil das capturas não generalizado.
- Escopo: Acesso ao BackOffice e à baixa.
- Limitações: Valores e códigos são exemplos. Não há captura pós-confirmação; fórmulas não fornecidas. Estado após RAP e padrão de recebimento desconhecidos.

### EVD-BXP-002

- Tipo: Imagens e esclarecimentos textuais.
- Natureza: especificada
- Origem: Usuário nesta conversa sobre baixa de parcelas.
- Referência: Imagem 4 e descrição.
- Data e versão: 2026-11-25, capturas históricas de novembro na versão 25.0430.106.6732.
- Ambiente, perfil ou canal: Interface web; perfil das capturas não generalizado.
- Escopo: Quatro opções de baixa.
- Limitações: Valores e códigos são exemplos. Não há captura pós-confirmação; fórmulas não fornecidas. Estado após RAP e padrão de recebimento desconhecidos.

### EVD-BXP-003

- Tipo: Imagens e esclarecimentos textuais.
- Natureza: especificada
- Origem: Usuário nesta conversa sobre baixa de parcelas.
- Referência: Imagens 5–7 e respostas 1 e 3.
- Data e versão: 2026-11-25, capturas históricas de novembro na versão 25.0430.106.6732.
- Ambiente, perfil ou canal: Interface web; perfil das capturas não generalizado.
- Escopo: Datas, cálculo e conta.
- Limitações: Valores e códigos são exemplos. Não há captura pós-confirmação; fórmulas não fornecidas. Estado após RAP e padrão de recebimento desconhecidos.

### EVD-BXP-004

- Tipo: Imagens e esclarecimentos textuais.
- Natureza: especificada
- Origem: Usuário nesta conversa sobre baixa de parcelas.
- Referência: Respostas 2–4 e descrição dos tipos.
- Data e versão: 2026-11-25, capturas históricas de novembro na versão 25.0430.106.6732.
- Ambiente, perfil ou canal: Interface web; perfil das capturas não generalizado.
- Escopo: Efeitos dos tipos e informações desconhecidas.
- Limitações: Valores e códigos são exemplos. Não há captura pós-confirmação; fórmulas não fornecidas. Estado após RAP e padrão de recebimento desconhecidos.

## Entidades afetadas

- Funcionalidade: FUN-BXP-001 — Baixa de Parcelas no Corporate Ativo.
- Aplicação: app-pine-funcao — Função.

## Afirmações

### AFR-BXP-001

- Conteúdo: A Baixa de Parcelas é acessada em Backoffice, Corporate Ativo, Lançamentos > Baixa de Parcelas.
- Entidade: FUN-BXP-001
- Classificação: Confirmada
- Natureza: especificada
- Evidências: EVD-BXP-001
- Escopo: Baixa de Parcelas no Corporate Ativo.
- Vigência: Contexto informado em novembro de 2026.
- Limitações: Sem generalização para outros BackOffices, fórmulas ou mensagem de sucesso.
- Confirmação necessária: Não aplicável.

### AFR-BXP-002

- Conteúdo: Tipo da Baixa oferece Baixa Normal, Baixa com Desconto SEM Diferença, Baixa com Desconto COM Diferença e Baixa Antecipada com Desconto de Rap.
- Entidade: FUN-BXP-001
- Classificação: Confirmada
- Natureza: especificada
- Evidências: EVD-BXP-002
- Escopo: Baixa de Parcelas no Corporate Ativo.
- Vigência: Contexto informado em novembro de 2026.
- Limitações: Sem generalização para outros BackOffices, fórmulas ou mensagem de sucesso.
- Confirmação necessária: Não aplicável.

### AFR-BXP-003

- Conteúdo: A coluna Valor Parcela é preenchida conforme o usuário informa Dt. Liquid. e Dt. Efetiv.
- Entidade: FUN-BXP-001
- Classificação: Confirmada
- Natureza: especificada
- Evidências: EVD-BXP-003
- Escopo: Baixa de Parcelas no Corporate Ativo.
- Vigência: Contexto informado em novembro de 2026.
- Limitações: Sem generalização para outros BackOffices, fórmulas ou mensagem de sucesso.
- Confirmação necessária: Não aplicável.

### AFR-BXP-004

- Conteúdo: Após informar os dados da baixa, é necessário clicar em Calcular para preencher a coluna Valor Pago.
- Entidade: FUN-BXP-001
- Classificação: Confirmada
- Natureza: especificada
- Evidências: EVD-BXP-003
- Escopo: Baixa de Parcelas no Corporate Ativo.
- Vigência: Contexto informado em novembro de 2026.
- Limitações: Sem generalização para outros BackOffices, fórmulas ou mensagem de sucesso.
- Confirmação necessária: Não aplicável.

### AFR-BXP-005

- Conteúdo: O procedimento utiliza Código Financeiro, Nro. Operação, Parc., datas, Recebimento, Vlr. Acrésc. e Vlr. Pago.
- Entidade: FUN-BXP-001
- Classificação: Confirmada
- Natureza: especificada
- Evidências: EVD-BXP-003
- Escopo: Baixa de Parcelas no Corporate Ativo.
- Vigência: Contexto informado em novembro de 2026.
- Limitações: Sem generalização para outros BackOffices, fórmulas ou mensagem de sucesso.
- Confirmação necessária: Não aplicável.

### AFR-BXP-006

- Conteúdo: O usuário seleciona a última conta disponível em Banco / Agência / Conta Corrente e clica em Confirmar para a baixa.
- Entidade: FUN-BXP-001
- Classificação: Confirmada
- Natureza: especificada
- Evidências: EVD-BXP-003
- Escopo: Baixa de Parcelas no Corporate Ativo.
- Vigência: Contexto informado em novembro de 2026.
- Limitações: Sem generalização para outros BackOffices, fórmulas ou mensagem de sucesso.
- Confirmação necessária: Não aplicável.

### AFR-BXP-007

- Conteúdo: Na Baixa Normal, pagamento igual ao devido liquida a parcela.
- Entidade: FUN-BXP-001
- Classificação: Confirmada
- Natureza: especificada
- Evidências: EVD-BXP-004
- Escopo: Baixa de Parcelas no Corporate Ativo.
- Vigência: Contexto informado em novembro de 2026.
- Limitações: Sem generalização para outros BackOffices, fórmulas ou mensagem de sucesso.
- Confirmação necessária: Não aplicável.

### AFR-BXP-008

- Conteúdo: Na Baixa Normal, pagamento maior ou menor é aceito com lançamento de juros ou desconto, mantendo a parcela aberta.
- Entidade: FUN-BXP-001
- Classificação: Confirmada
- Natureza: especificada
- Evidências: EVD-BXP-004
- Escopo: Baixa de Parcelas no Corporate Ativo.
- Vigência: Contexto informado em novembro de 2026.
- Limitações: Sem generalização para outros BackOffices, fórmulas ou mensagem de sucesso.
- Confirmação necessária: Não aplicável.

### AFR-BXP-009

- Conteúdo: Baixa com Desconto SEM Diferença aplica desconto e liquida a parcela sem diferença a pagar.
- Entidade: FUN-BXP-001
- Classificação: Confirmada
- Natureza: especificada
- Evidências: EVD-BXP-004
- Escopo: Baixa de Parcelas no Corporate Ativo.
- Vigência: Contexto informado em novembro de 2026.
- Limitações: Sem generalização para outros BackOffices, fórmulas ou mensagem de sucesso.
- Confirmação necessária: Não aplicável.

### AFR-BXP-010

- Conteúdo: Baixa com Desconto COM Diferença aplica desconto e mantém saldo a pagar da parcela.
- Entidade: FUN-BXP-001
- Classificação: Confirmada
- Natureza: especificada
- Evidências: EVD-BXP-004
- Escopo: Baixa de Parcelas no Corporate Ativo.
- Vigência: Contexto informado em novembro de 2026.
- Limitações: Sem generalização para outros BackOffices, fórmulas ou mensagem de sucesso.
- Confirmação necessária: Não aplicável.

### AFR-BXP-011

- Conteúdo: Baixa Antecipada com Desconto de Rap aplica desconto no RAP da parcela.
- Entidade: FUN-BXP-001
- Classificação: Confirmada
- Natureza: especificada
- Evidências: EVD-BXP-004
- Escopo: Baixa de Parcelas no Corporate Ativo.
- Vigência: Contexto informado em novembro de 2026.
- Limitações: Sem generalização para outros BackOffices, fórmulas ou mensagem de sucesso.
- Confirmação necessária: Não aplicável.

### AFR-BXP-012

- Conteúdo: Os descontos são calculados pelo sistema a partir do valor pago.
- Entidade: FUN-BXP-001
- Classificação: Confirmada
- Natureza: especificada
- Evidências: EVD-BXP-004
- Escopo: Baixa de Parcelas no Corporate Ativo.
- Vigência: Contexto informado em novembro de 2026.
- Limitações: Sem generalização para outros BackOffices, fórmulas ou mensagem de sucesso.
- Confirmação necessária: Não aplicável.

### AFR-BXP-013

- Conteúdo: O estado de liquidação ou saldo após a baixa antecipada com desconto de RAP ainda não foi confirmado.
- Entidade: FUN-BXP-001
- Classificação: Pendente
- Natureza: especificada
- Evidências: EVD-BXP-004
- Escopo: Baixa de Parcelas no Corporate Ativo.
- Vigência: Contexto informado em novembro de 2026.
- Limitações: Sem generalização para outros BackOffices, fórmulas ou mensagem de sucesso.
- Confirmação necessária: Resolver PEN-BXP-001.

### AFR-BXP-014

- Conteúdo: A resposta da interface após Confirmar, o caminho de consulta do estado e o padrão de Forma de Recebimento ainda não foram confirmados.
- Entidade: FUN-BXP-001
- Classificação: Pendente
- Natureza: especificada
- Evidências: EVD-BXP-004
- Escopo: Baixa de Parcelas no Corporate Ativo.
- Vigência: Contexto informado em novembro de 2026.
- Limitações: Sem generalização para outros BackOffices, fórmulas ou mensagem de sucesso.
- Confirmação necessária: Resolver PEN-BXP-002.

## Alterações propostas

### ALT-BXP-001

- Operação: adicionar
- Alvo: AFR-BXP-001
- Afirmações: AFR-BXP-001
- Valor anterior: Não aplicável; aplicação ausente no registro consultado.
- Valor proposto: A Baixa de Parcelas é acessada em Backoffice, Corporate Ativo, Lançamentos > Baixa de Parcelas.
- Justificativa: Evidência e resposta explícita do usuário, preservando os desconhecidos.

### ALT-BXP-002

- Operação: adicionar
- Alvo: AFR-BXP-002
- Afirmações: AFR-BXP-002
- Valor anterior: Não aplicável; aplicação ausente no registro consultado.
- Valor proposto: Tipo da Baixa oferece Baixa Normal, Baixa com Desconto SEM Diferença, Baixa com Desconto COM Diferença e Baixa Antecipada com Desconto de Rap.
- Justificativa: Evidência e resposta explícita do usuário, preservando os desconhecidos.

### ALT-BXP-003

- Operação: adicionar
- Alvo: AFR-BXP-003
- Afirmações: AFR-BXP-003
- Valor anterior: Não aplicável; aplicação ausente no registro consultado.
- Valor proposto: A coluna Valor Parcela é preenchida conforme o usuário informa Dt. Liquid. e Dt. Efetiv.
- Justificativa: Evidência e resposta explícita do usuário, preservando os desconhecidos.

### ALT-BXP-004

- Operação: adicionar
- Alvo: AFR-BXP-004
- Afirmações: AFR-BXP-004
- Valor anterior: Não aplicável; aplicação ausente no registro consultado.
- Valor proposto: Após informar os dados da baixa, é necessário clicar em Calcular para preencher a coluna Valor Pago.
- Justificativa: Evidência e resposta explícita do usuário, preservando os desconhecidos.

### ALT-BXP-005

- Operação: adicionar
- Alvo: AFR-BXP-005
- Afirmações: AFR-BXP-005
- Valor anterior: Não aplicável; aplicação ausente no registro consultado.
- Valor proposto: O procedimento utiliza Código Financeiro, Nro. Operação, Parc., datas, Recebimento, Vlr. Acrésc. e Vlr. Pago.
- Justificativa: Evidência e resposta explícita do usuário, preservando os desconhecidos.

### ALT-BXP-006

- Operação: adicionar
- Alvo: AFR-BXP-006
- Afirmações: AFR-BXP-006
- Valor anterior: Não aplicável; aplicação ausente no registro consultado.
- Valor proposto: O usuário seleciona a última conta disponível em Banco / Agência / Conta Corrente e clica em Confirmar para a baixa.
- Justificativa: Evidência e resposta explícita do usuário, preservando os desconhecidos.

### ALT-BXP-007

- Operação: adicionar
- Alvo: AFR-BXP-007
- Afirmações: AFR-BXP-007
- Valor anterior: Não aplicável; aplicação ausente no registro consultado.
- Valor proposto: Na Baixa Normal, pagamento igual ao devido liquida a parcela.
- Justificativa: Evidência e resposta explícita do usuário, preservando os desconhecidos.

### ALT-BXP-008

- Operação: adicionar
- Alvo: AFR-BXP-008
- Afirmações: AFR-BXP-008
- Valor anterior: Não aplicável; aplicação ausente no registro consultado.
- Valor proposto: Na Baixa Normal, pagamento maior ou menor é aceito com lançamento de juros ou desconto, mantendo a parcela aberta.
- Justificativa: Evidência e resposta explícita do usuário, preservando os desconhecidos.

### ALT-BXP-009

- Operação: adicionar
- Alvo: AFR-BXP-009
- Afirmações: AFR-BXP-009
- Valor anterior: Não aplicável; aplicação ausente no registro consultado.
- Valor proposto: Baixa com Desconto SEM Diferença aplica desconto e liquida a parcela sem diferença a pagar.
- Justificativa: Evidência e resposta explícita do usuário, preservando os desconhecidos.

### ALT-BXP-010

- Operação: adicionar
- Alvo: AFR-BXP-010
- Afirmações: AFR-BXP-010
- Valor anterior: Não aplicável; aplicação ausente no registro consultado.
- Valor proposto: Baixa com Desconto COM Diferença aplica desconto e mantém saldo a pagar da parcela.
- Justificativa: Evidência e resposta explícita do usuário, preservando os desconhecidos.

### ALT-BXP-011

- Operação: adicionar
- Alvo: AFR-BXP-011
- Afirmações: AFR-BXP-011
- Valor anterior: Não aplicável; aplicação ausente no registro consultado.
- Valor proposto: Baixa Antecipada com Desconto de Rap aplica desconto no RAP da parcela.
- Justificativa: Evidência e resposta explícita do usuário, preservando os desconhecidos.

### ALT-BXP-012

- Operação: adicionar
- Alvo: AFR-BXP-012
- Afirmações: AFR-BXP-012
- Valor anterior: Não aplicável; aplicação ausente no registro consultado.
- Valor proposto: Os descontos são calculados pelo sistema a partir do valor pago.
- Justificativa: Evidência e resposta explícita do usuário, preservando os desconhecidos.

### ALT-BXP-013

- Operação: registrar_pendencia
- Alvo: AFR-BXP-013
- Afirmações: AFR-BXP-013
- Valor anterior: Não aplicável; aplicação ausente no registro consultado.
- Valor proposto: O estado de liquidação ou saldo após a baixa antecipada com desconto de RAP ainda não foi confirmado.
- Justificativa: Evidência e resposta explícita do usuário, preservando os desconhecidos.

### ALT-BXP-014

- Operação: registrar_pendencia
- Alvo: AFR-BXP-014
- Afirmações: AFR-BXP-014
- Valor anterior: Não aplicável; aplicação ausente no registro consultado.
- Valor proposto: A resposta da interface após Confirmar, o caminho de consulta do estado e o padrão de Forma de Recebimento ainda não foram confirmados.
- Justificativa: Evidência e resposta explícita do usuário, preservando os desconhecidos.

## Relações

Não foram propostas relações adicionais neste recorte.

## Conflitos e pendências

### PEN-BXP-001

- Elemento afetado: AFR-BXP-013
- Informação ausente: Estado da parcela após baixa antecipada com desconto de RAP.
- Evidências relacionadas: EVD-BXP-004
- Pergunta objetiva: A parcela é liquidada ou permanece com saldo nessa baixa?
- Impacto: Usuário respondeu que ainda não sabe; liquidação não pode ser afirmada.
- Condição de desbloqueio: Regra confirmada ou execução com consulta do estado da parcela com RAP.

### PEN-BXP-002

- Elemento afetado: AFR-BXP-014
- Informação ausente: Mensagem ou tela após confirmar, consulta do estado e padrão de Forma de Recebimento.
- Evidências relacionadas: EVD-BXP-004
- Pergunta objetiva: Qual resposta ocorre após Confirmar, onde conferir o estado e qual configuração de recebimento usar?
- Impacto: Usuário respondeu que ainda não sabe; não presumir confirmação visual de sucesso nem configuração padrão.
- Condição de desbloqueio: Evidência pós-confirmação e procedimento autorizado de consulta, com definição de recebimento.

## Histórico e vigência

- Conhecimento anterior: Função ausente do registry.yaml revisão 3.
- Estado anterior: Sem contexto canônico disponível; propostas pendentes não constituem base aprovada.
- Nova vigência: Contexto esclarecido em novembro de 2026.
- Motivo: Registrar fluxo e diferenças dos tipos de baixa com lacunas explícitas.
- Evidências: EVD-BXP-001; EVD-BXP-002; EVD-BXP-003; EVD-BXP-004

## Resumo

- Evidências: 4
- Confirmadas: 12
- Inferidas: 0
- Pendentes: 2
- Conflitos: 0
- Alterações propostas: 14

## Validação

- Identificação: aprovado — identidade confirmada na conversa.
- Base de referência: aprovado — vínculo consultado; ausência canônica registrada.
- Isolamento entre aplicações: aprovado — restrito a app-pine-funcao.
- Rastreabilidade: aprovado — afirmações vinculadas às evidências.
- Separação epistemológica: aprovado — lacunas mantidas Pendentes.
- Conflitos e pendências: aprovado — dúvidas e condições de desbloqueio registradas.
- Histórico e vigência: aprovado — contexto delimitado.
- Ausência de BDD e tags: aprovado — somente conhecimento funcional proposto.
- Prontidão para curadoria: pendente — aplicação nova requer prévia e confirmação próprias do Maintainer.
- Resultado geral: pendente
- Bloqueios: Sem bloqueio para enfileirar; efeitos desconhecidos não devem ser promovidos sem evidência.
