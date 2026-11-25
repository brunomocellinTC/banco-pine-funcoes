# Pacote de Atualização da Knowledge Base

## Identificação

- Aplicação: Função
- Application ID: app-pine-funcao
- Package ID: PKG-2026-11-25-005
- Versão do contrato: 1
- Revisão esperada: 0
- Run de origem: interface/geracao-documento-3040-01
- Resultado: com_alteracoes
- Estado de curadoria inicial: proposto
- Base de referência: registry.yaml revisão 3; Função ausente. Pacotes pendentes não usados como contexto canônico; propostas anteriores de 3044 e 3050 permanecem históricas e exigem reconciliação com a correção explícita deste pacote antes de aplicar.
- Operação proposta: inicializacao
- Data ou contexto: 2026-11-25; identidade Função confirmada anteriormente.
- Versão e ambiente: WEB Bacen IFRS; versão não legível nas capturas do 3040.
- Escopo: Geração mensal 3040 e correção do destino dos arquivos 3044 e 3050 para servidor.
- **Formato:** TestingQA 0.7.1 · Architect 1.4.5

## Evidências

### EVD-3040-001

- Tipo: Imagem de interface
- Natureza: especificada
- Origem: Usuário nesta conversa sobre geração mensal 3040 e correção de destino dos três documentos.
- Referência: Imagem 1 e descrição.
- Data e versão: Contexto de novembro de 2026; versão não legível na tela capturada.
- Ambiente, perfil ou canal: Interface web e geração de arquivo no servidor.
- Escopo: Menu de acesso à geração 3040.
- Limitações: Diretório é exemplo. A linha histórica de parâmetro na captura é complementada pelo esclarecimento do usuário sobre registro do destino; não comprova geração nova nem conteúdo de arquivo. Sem transmissão ou acesso ao servidor pela Skill.

### EVD-3040-002

- Tipo: Imagem de interface
- Natureza: observada
- Origem: Usuário nesta conversa sobre geração mensal 3040 e correção de destino dos três documentos.
- Referência: Imagens 2–3.
- Data e versão: Contexto de novembro de 2026; versão não legível na tela capturada.
- Ambiente, perfil ou canal: Interface web e geração de arquivo no servidor.
- Escopo: Tela, parâmetros e exemplo de diretório C:\Temp no servidor.
- Limitações: Diretório é exemplo. A linha histórica de parâmetro na captura é complementada pelo esclarecimento do usuário sobre registro do destino; não comprova geração nova nem conteúdo de arquivo. Sem transmissão ou acesso ao servidor pela Skill.

### EVD-3040-003

- Tipo: Esclarecimento textual
- Natureza: especificada
- Origem: Usuário nesta conversa sobre geração mensal 3040 e correção de destino dos três documentos.
- Referência: Descrição do usuário sobre o documento 3040.
- Data e versão: Contexto de novembro de 2026; versão não legível na tela capturada.
- Ambiente, perfil ou canal: Interface web e geração de arquivo no servidor.
- Escopo: Mensalidade, último dia útil, carga de todos os dias do mês, Empresa 001 e Produto 000.
- Limitações: Diretório é exemplo. A linha histórica de parâmetro na captura é complementada pelo esclarecimento do usuário sobre registro do destino; não comprova geração nova nem conteúdo de arquivo. Sem transmissão ou acesso ao servidor pela Skill.

### EVD-3040-004

- Tipo: Esclarecimento textual
- Natureza: especificada
- Origem: Usuário nesta conversa sobre geração mensal 3040 e correção de destino dos três documentos.
- Referência: Esclarecimento do usuário aplicável a 3040, 3044 e 3050.
- Data e versão: Contexto de novembro de 2026; versão não legível na tela capturada.
- Ambiente, perfil ou canal: Interface web e geração de arquivo no servidor.
- Escopo: Arquivo no servidor, sem download automático local, com diretório informado na tabela e variável por documento.
- Limitações: Diretório é exemplo. A linha histórica de parâmetro na captura é complementada pelo esclarecimento do usuário sobre registro do destino; não comprova geração nova nem conteúdo de arquivo. Sem transmissão ou acesso ao servidor pela Skill.

## Entidades afetadas

- Aplicação: app-pine-funcao — Função.
- Funcionalidade: FUN-3040-001 — Geração do documento 3040.
- Funcionalidade: FUN-3044-001 — Geração do documento 3044.
- Funcionalidade: FUN-3050-001 — Geração do documento 3050.

## Afirmações

### AFR-3040-001

- Conteúdo: O documento 3040 é mensal e utiliza uma única Data de Referência no último dia útil do mês.
- Entidade: FUN-3040-001
- Classificação: Confirmada
- Natureza: especificada
- Evidências: EVD-3040-003
- Escopo: Geração mensal do documento 3040.
- Vigência: Contexto esclarecido pelo usuário em novembro de 2026.
- Limitações: Sem generalizar diretório fixo, formato, conteúdo, prazo ou transmissão.
- Confirmação necessária: Não aplicável.

### AFR-3040-002

- Conteúdo: A Carga do Bacen deve estar concluída para todos os dias do mês abrangido pelo documento 3040.
- Entidade: FUN-3040-001
- Classificação: Confirmada
- Natureza: especificada
- Evidências: EVD-3040-003
- Escopo: Geração mensal do documento 3040.
- Vigência: Contexto esclarecido pelo usuário em novembro de 2026.
- Limitações: Sem generalizar diretório fixo, formato, conteúdo, prazo ou transmissão.
- Confirmação necessária: Não aplicável.

### AFR-3040-003

- Conteúdo: A geração 3040 é acessada por Integrações > Geração de Informações de Risco - 3040 > Gerar Informação no WEB Bacen IFRS.
- Entidade: FUN-3040-001
- Classificação: Confirmada
- Natureza: especificada
- Evidências: EVD-3040-001
- Escopo: Geração mensal do documento 3040.
- Vigência: Contexto esclarecido pelo usuário em novembro de 2026.
- Limitações: Sem generalizar diretório fixo, formato, conteúdo, prazo ou transmissão.
- Confirmação necessária: Não aplicável.

### AFR-3040-004

- Conteúdo: A tela é denominada Geração do Documento de Risco de Crédito - 3040 e apresenta Data de Referência, Empresa, Produto, Layout e Confirmar.
- Entidade: FUN-3040-001
- Classificação: Confirmada
- Natureza: especificada
- Evidências: EVD-3040-002
- Escopo: Geração mensal do documento 3040.
- Vigência: Contexto esclarecido pelo usuário em novembro de 2026.
- Limitações: Sem generalizar diretório fixo, formato, conteúdo, prazo ou transmissão.
- Confirmação necessária: Não aplicável.

### AFR-3040-005

- Conteúdo: O procedimento 3040 utiliza Empresa 001, Produto 000 para todos os produtos e Layout Banco Central.
- Entidade: FUN-3040-001
- Classificação: Confirmada
- Natureza: especificada
- Evidências: EVD-3040-003
- Escopo: Geração mensal do documento 3040.
- Vigência: Contexto esclarecido pelo usuário em novembro de 2026.
- Limitações: Sem generalizar diretório fixo, formato, conteúdo, prazo ou transmissão.
- Confirmação necessária: Não aplicável.

### AFR-3040-006

- Conteúdo: Confirmar solicita a geração do arquivo 3040 e atualiza o status.
- Entidade: FUN-3040-001
- Classificação: Confirmada
- Natureza: especificada
- Evidências: EVD-3040-003
- Escopo: Geração mensal do documento 3040.
- Vigência: Contexto esclarecido pelo usuário em novembro de 2026.
- Limitações: Sem generalizar diretório fixo, formato, conteúdo, prazo ou transmissão.
- Confirmação necessária: Não aplicável.

### AFR-3040-007

- Conteúdo: Os arquivos 3040, 3044 e 3050 são gerados no servidor, sem download automático na máquina do usuário.
- Entidade: FUN-3040-001; FUN-3044-001; FUN-3050-001
- Classificação: Confirmada
- Natureza: especificada
- Evidências: EVD-3040-004
- Escopo: Destino dos arquivos 3040, 3044 e 3050.
- Vigência: Contexto esclarecido pelo usuário em novembro de 2026.
- Limitações: Sem generalizar diretório fixo, formato, conteúdo, prazo ou transmissão.
- Confirmação necessária: Não aplicável.

### AFR-3040-008

- Conteúdo: A tabela de processamento informa o diretório onde o arquivo foi gerado para 3040, 3044 e 3050.
- Entidade: FUN-3040-001; FUN-3044-001; FUN-3050-001
- Classificação: Confirmada
- Natureza: especificada
- Evidências: EVD-3040-004
- Escopo: Destino dos arquivos 3040, 3044 e 3050.
- Vigência: Contexto esclarecido pelo usuário em novembro de 2026.
- Limitações: Sem generalizar diretório fixo, formato, conteúdo, prazo ou transmissão.
- Confirmação necessária: Não aplicável.

### AFR-3040-009

- Conteúdo: O exemplo de diretório do 3040 é C:\Temp; os diretórios podem variar e devem ser lidos na tabela da respectiva geração.
- Entidade: FUN-3040-001; FUN-3044-001; FUN-3050-001
- Classificação: Confirmada
- Natureza: especificada
- Evidências: EVD-3040-004
- Escopo: Destino dos arquivos 3040, 3044 e 3050.
- Vigência: Contexto esclarecido pelo usuário em novembro de 2026.
- Limitações: Sem generalizar diretório fixo, formato, conteúdo, prazo ou transmissão.
- Confirmação necessária: Não aplicável.

## Alterações propostas

### ALT-3040-001

- Operação: adicionar
- Alvo: AFR-3040-001
- Afirmações: AFR-3040-001
- Valor anterior: Não aplicável; aplicação ausente no registro canônico consultado.
- Valor proposto: O documento 3040 é mensal e utiliza uma única Data de Referência no último dia útil do mês.
- Justificativa: Evidência específica e correção explícita do usuário; preservar as propostas anteriores como histórico sem aplicar a descrição superada de destino local.

### ALT-3040-002

- Operação: adicionar
- Alvo: AFR-3040-002
- Afirmações: AFR-3040-002
- Valor anterior: Não aplicável; aplicação ausente no registro canônico consultado.
- Valor proposto: A Carga do Bacen deve estar concluída para todos os dias do mês abrangido pelo documento 3040.
- Justificativa: Evidência específica e correção explícita do usuário; preservar as propostas anteriores como histórico sem aplicar a descrição superada de destino local.

### ALT-3040-003

- Operação: adicionar
- Alvo: AFR-3040-003
- Afirmações: AFR-3040-003
- Valor anterior: Não aplicável; aplicação ausente no registro canônico consultado.
- Valor proposto: A geração 3040 é acessada por Integrações > Geração de Informações de Risco - 3040 > Gerar Informação no WEB Bacen IFRS.
- Justificativa: Evidência específica e correção explícita do usuário; preservar as propostas anteriores como histórico sem aplicar a descrição superada de destino local.

### ALT-3040-004

- Operação: adicionar
- Alvo: AFR-3040-004
- Afirmações: AFR-3040-004
- Valor anterior: Não aplicável; aplicação ausente no registro canônico consultado.
- Valor proposto: A tela é denominada Geração do Documento de Risco de Crédito - 3040 e apresenta Data de Referência, Empresa, Produto, Layout e Confirmar.
- Justificativa: Evidência específica e correção explícita do usuário; preservar as propostas anteriores como histórico sem aplicar a descrição superada de destino local.

### ALT-3040-005

- Operação: adicionar
- Alvo: AFR-3040-005
- Afirmações: AFR-3040-005
- Valor anterior: Não aplicável; aplicação ausente no registro canônico consultado.
- Valor proposto: O procedimento 3040 utiliza Empresa 001, Produto 000 para todos os produtos e Layout Banco Central.
- Justificativa: Evidência específica e correção explícita do usuário; preservar as propostas anteriores como histórico sem aplicar a descrição superada de destino local.

### ALT-3040-006

- Operação: adicionar
- Alvo: AFR-3040-006
- Afirmações: AFR-3040-006
- Valor anterior: Não aplicável; aplicação ausente no registro canônico consultado.
- Valor proposto: Confirmar solicita a geração do arquivo 3040 e atualiza o status.
- Justificativa: Evidência específica e correção explícita do usuário; preservar as propostas anteriores como histórico sem aplicar a descrição superada de destino local.

### ALT-3040-007

- Operação: adicionar
- Alvo: AFR-3040-007
- Afirmações: AFR-3040-007
- Valor anterior: Propostas históricas PKG-2026-11-25-003 e PKG-2026-11-25-004 referiam download; não são base canônica e devem ser reconciliadas com este esclarecimento antes de aplicar.
- Valor proposto: Os arquivos 3040, 3044 e 3050 são gerados no servidor, sem download automático na máquina do usuário.
- Justificativa: Evidência específica e correção explícita do usuário; preservar as propostas anteriores como histórico sem aplicar a descrição superada de destino local.

### ALT-3040-008

- Operação: adicionar
- Alvo: AFR-3040-008
- Afirmações: AFR-3040-008
- Valor anterior: Propostas históricas PKG-2026-11-25-003 e PKG-2026-11-25-004 referiam download; não são base canônica e devem ser reconciliadas com este esclarecimento antes de aplicar.
- Valor proposto: A tabela de processamento informa o diretório onde o arquivo foi gerado para 3040, 3044 e 3050.
- Justificativa: Evidência específica e correção explícita do usuário; preservar as propostas anteriores como histórico sem aplicar a descrição superada de destino local.

### ALT-3040-009

- Operação: adicionar
- Alvo: AFR-3040-009
- Afirmações: AFR-3040-009
- Valor anterior: Propostas históricas PKG-2026-11-25-003 e PKG-2026-11-25-004 referiam download; não são base canônica e devem ser reconciliadas com este esclarecimento antes de aplicar.
- Valor proposto: O exemplo de diretório do 3040 é C:\Temp; os diretórios podem variar e devem ser lidos na tabela da respectiva geração.
- Justificativa: Evidência específica e correção explícita do usuário; preservar as propostas anteriores como histórico sem aplicar a descrição superada de destino local.

## Relações

Não foram propostas relações adicionais neste recorte.

## Conflitos e pendências

Sem conflito residual no recorte: o usuário esclareceu explicitamente que a disponibilização antes descrita como download ocorre no servidor para os três documentos. Reconciliar este pacote com as propostas históricas de 3044 e 3050 antes da aplicação, preservando o histórico. Diretórios específicos, nomes, formatos e conteúdo dos arquivos não foram definidos como requisitos fixos.

## Histórico e vigência

- Conhecimento anterior: Função ausente do registry.yaml revisão 3; sem contexto canônico disponível.
- Estado anterior: Propostas históricas de 3044 e 3050 referiam download; nenhuma delas é conhecimento canônico aprovado.
- Nova vigência: Esclarecimento de novembro de 2026: arquivo no servidor e diretório informado na tabela.
- Motivo: Registrar geração mensal 3040 e corrigir o destino dos arquivos nas propostas anteriores por evidência explícita, sem alterar seus registros históricos.
- Evidências: EVD-3040-001; EVD-3040-002; EVD-3040-003; EVD-3040-004

## Resumo

- Evidências: 4
- Confirmadas: 9
- Inferidas: 0
- Pendentes: 0
- Conflitos: 0
- Alterações propostas: 9

## Validação

- Identificação: aprovado — identidade confirmada na conversa.
- Base de referência: aprovado — vínculo consultado; ausência canônica registrada.
- Isolamento entre aplicações: aprovado — restrito a app-pine-funcao.
- Rastreabilidade: aprovado — afirmações vinculadas às imagens e ao esclarecimento do usuário.
- Separação epistemológica: aprovado — geração atual não presumida a partir de log histórico.
- Conflitos e pendências: aprovado — correção explícita registrada; reconciliação com propostas anteriores indicada.
- Histórico e vigência: aprovado — propostas anteriores preservadas.
- Ausência de BDD e tags: aprovado — somente conhecimento funcional proposto.
- Prontidão para curadoria: pendente — depende do Maintainer, incluindo reconciliação das propostas de 3044 e 3050.
- Resultado geral: pendente
- Bloqueios: Sem bloqueio para enfileirar; aplicar apenas após reconciliação e confirmação próprias do Maintainer.
