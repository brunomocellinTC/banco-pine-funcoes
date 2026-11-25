# Pacote de Atualização da Knowledge Base

## Identificação

- Aplicação: Função
- Application ID: app-pine-funcao
- Package ID: PKG-2026-10-29-001
- Versão do contrato: 1
- Revisão esperada: 0
- Run de origem: 2026-10-29-login-home-01
- Resultado: com_alteracoes
- Estado de curadoria inicial: proposto
- Base de referência: registry.yaml revisão 3; aplicação ausente no registro consultado.
- Operação proposta: inicializacao
- Data ou contexto: 2026-10-29; identidade e recorte confirmados pelo usuário na conversa.
- Versão e ambiente: Capturas 16.1226.2.61875; home identificada como Produção, perfil SUPERVISOR. Ambiente das interações especificadas não delimitado.
- Escopo: Login e exibição da home com os 11 módulos; exclui os fluxos internos.
- **Formato:** TestingQA 0.7.0 · Architect 1.4.4

## Evidências

### EVD-001

- Tipo: Captura de tela
- Natureza: observada
- Origem: Imagem 1 anexada pelo usuário nesta conversa
- Referência: Tela de login; campos Usuário e Senha, senha mascarada e botão de login
- Data e versão: Recebida nesta conversa; data de captura não informada.
- Ambiente, perfil ou canal: Interface web; contexto específico descrito no escopo.
- Escopo: Login; versão 16.1226.2.61875
- Limitações: Não demonstra autenticação, foco ou regras de validação.

### EVD-002

- Tipo: Captura de tela
- Natureza: observada
- Origem: Imagem 2 anexada pelo usuário nesta conversa
- Referência: Home; painel Módulos - Função Web (Produção), 11 módulos
- Data e versão: Recebida nesta conversa; data de captura não informada.
- Ambiente, perfil ou canal: Interface web; contexto específico descrito no escopo.
- Escopo: Home; perfil SUPERVISOR; versão 16.1226.2.61875
- Limitações: Não demonstra abertura dos módulos nem disponibilidade para outros perfis.

### EVD-003

- Tipo: Especificação do usuário
- Natureza: especificada
- Origem: Mensagem do usuário que acompanha as imagens 1 e 2
- Referência: Descrição do login e lista dos 11 módulos
- Data e versão: Recebida nesta conversa; data de captura não informada.
- Ambiente, perfil ou canal: Interface web; contexto específico descrito no escopo.
- Escopo: Login e home
- Limitações: A ambiguidade inicial sobre Enter foi resolvida em EVD-004; não define cenários negativos.

### EVD-004

- Tipo: Esclarecimento do usuário
- Natureza: especificada
- Origem: Resposta: move o foco para o botão de login; confirmações posteriores de identidade e recorte
- Referência: Enter na senha move o foco ao botão; Tab e ativação no botão preservados conforme descrição original
- Data e versão: Recebida nesta conversa; data de captura não informada.
- Ambiente, perfil ou canal: Interface web; contexto específico descrito no escopo.
- Escopo: Login; identidade Função / app-pine-funcao
- Limitações: Especificação na conversa; não constitui execução da aplicação.

## Entidades afetadas

- Aplicação: app-pine-funcao — Função
- Tela: TEL-LOGIN — Login
- Tela: TEL-HOME — Home

## Afirmações

### AFR-001

- Conteúdo: O login apresenta campos Usuário e Senha e um botão de login.
- Entidade: TEL-LOGIN
- Classificação: Confirmada
- Natureza: observada
- Evidências: EVD-001; EVD-003
- Escopo: Login e home; AFR-007 restrita ao contexto da imagem 2, perfil SUPERVISOR.
- Vigência: Contexto fornecido nesta conversa; início de vigência em produção não informado.
- Limitações: Não generalizar a outros perfis ou versões; especificação não comprova execução.
- Confirmação necessária: Não aplicável ao recorte especificado.

### AFR-002

- Conteúdo: O acionamento do botão por clique com credenciais válidas permite acessar a home.
- Entidade: TEL-LOGIN
- Classificação: Confirmada
- Natureza: especificada
- Evidências: EVD-003
- Escopo: Login e home; AFR-007 restrita ao contexto da imagem 2, perfil SUPERVISOR.
- Vigência: Contexto fornecido nesta conversa; início de vigência em produção não informado.
- Limitações: Não generalizar a outros perfis ou versões; especificação não comprova execução.
- Confirmação necessária: Não aplicável ao recorte especificado.

### AFR-003

- Conteúdo: Enter no campo Senha transfere o foco para o botão de login.
- Entidade: TEL-LOGIN
- Classificação: Confirmada
- Natureza: especificada
- Evidências: EVD-004
- Escopo: Login e home; AFR-007 restrita ao contexto da imagem 2, perfil SUPERVISOR.
- Vigência: Contexto fornecido nesta conversa; início de vigência em produção não informado.
- Limitações: Não generalizar a outros perfis ou versões; especificação não comprova execução.
- Confirmação necessária: Não aplicável ao recorte especificado.

### AFR-004

- Conteúdo: Tab no campo Senha transfere o foco para o botão de login.
- Entidade: TEL-LOGIN
- Classificação: Confirmada
- Natureza: especificada
- Evidências: EVD-003; EVD-004
- Escopo: Login e home; AFR-007 restrita ao contexto da imagem 2, perfil SUPERVISOR.
- Vigência: Contexto fornecido nesta conversa; início de vigência em produção não informado.
- Limitações: Não generalizar a outros perfis ou versões; especificação não comprova execução.
- Confirmação necessária: Não aplicável ao recorte especificado.

### AFR-005

- Conteúdo: Enter com foco no botão de login aciona o acesso com as credenciais preenchidas.
- Entidade: TEL-LOGIN
- Classificação: Confirmada
- Natureza: especificada
- Evidências: EVD-003; EVD-004
- Escopo: Login e home; AFR-007 restrita ao contexto da imagem 2, perfil SUPERVISOR.
- Vigência: Contexto fornecido nesta conversa; início de vigência em produção não informado.
- Limitações: Não generalizar a outros perfis ou versões; especificação não comprova execução.
- Confirmação necessária: Não aplicável ao recorte especificado.

### AFR-006

- Conteúdo: O conteúdo preenchido no campo Senha aparece mascarado na captura de referência.
- Entidade: TEL-LOGIN
- Classificação: Confirmada
- Natureza: observada
- Evidências: EVD-001
- Escopo: Login e home; AFR-007 restrita ao contexto da imagem 2, perfil SUPERVISOR.
- Vigência: Contexto fornecido nesta conversa; início de vigência em produção não informado.
- Limitações: Não generalizar a outros perfis ou versões; especificação não comprova execução.
- Confirmação necessária: Não aplicável ao recorte especificado.

### AFR-007

- Conteúdo: A home de referência apresenta 11 módulos: Proposta; Relatórios; Acesso; BackOffice; Tabelas Corporativas; Cessao de Credito - C3; Duplo Controle; Tabelas Corporativo IFRS; Tabelas IFRS; Web Corporate Contabil IFRS; Web Bacen IFRS.
- Entidade: TEL-HOME
- Classificação: Confirmada
- Natureza: observada
- Evidências: EVD-002; EVD-003
- Escopo: Login e home; AFR-007 restrita ao contexto da imagem 2, perfil SUPERVISOR.
- Vigência: Contexto fornecido nesta conversa; início de vigência em produção não informado.
- Limitações: Não generalizar a outros perfis ou versões; especificação não comprova execução.
- Confirmação necessária: Não aplicável ao recorte especificado.

## Alterações propostas

### ALT-001

- Operação: adicionar
- Alvo: TEL-LOGIN / AFR-001
- Afirmações: AFR-001
- Valor anterior: Não aplicável; aplicação sem registro canônico.
- Valor proposto: Incorporar a afirmação AFR-001, preservando classificação, origem e escopo.
- Justificativa: Proposta inicial baseada nas evidências fornecidas e identidade confirmada.

### ALT-002

- Operação: adicionar
- Alvo: TEL-LOGIN / AFR-002
- Afirmações: AFR-002
- Valor anterior: Não aplicável; aplicação sem registro canônico.
- Valor proposto: Incorporar a afirmação AFR-002, preservando classificação, origem e escopo.
- Justificativa: Proposta inicial baseada nas evidências fornecidas e identidade confirmada.

### ALT-003

- Operação: adicionar
- Alvo: TEL-LOGIN / AFR-003
- Afirmações: AFR-003
- Valor anterior: Não aplicável; aplicação sem registro canônico.
- Valor proposto: Incorporar a afirmação AFR-003, preservando classificação, origem e escopo.
- Justificativa: Proposta inicial baseada nas evidências fornecidas e identidade confirmada.

### ALT-004

- Operação: adicionar
- Alvo: TEL-LOGIN / AFR-004
- Afirmações: AFR-004
- Valor anterior: Não aplicável; aplicação sem registro canônico.
- Valor proposto: Incorporar a afirmação AFR-004, preservando classificação, origem e escopo.
- Justificativa: Proposta inicial baseada nas evidências fornecidas e identidade confirmada.

### ALT-005

- Operação: adicionar
- Alvo: TEL-LOGIN / AFR-005
- Afirmações: AFR-005
- Valor anterior: Não aplicável; aplicação sem registro canônico.
- Valor proposto: Incorporar a afirmação AFR-005, preservando classificação, origem e escopo.
- Justificativa: Proposta inicial baseada nas evidências fornecidas e identidade confirmada.

### ALT-006

- Operação: adicionar
- Alvo: TEL-LOGIN / AFR-006
- Afirmações: AFR-006
- Valor anterior: Não aplicável; aplicação sem registro canônico.
- Valor proposto: Incorporar a afirmação AFR-006, preservando classificação, origem e escopo.
- Justificativa: Proposta inicial baseada nas evidências fornecidas e identidade confirmada.

### ALT-007

- Operação: adicionar
- Alvo: TEL-HOME / AFR-007
- Afirmações: AFR-007
- Valor anterior: Não aplicável; aplicação sem registro canônico.
- Valor proposto: Incorporar a afirmação AFR-007, preservando classificação, origem e escopo.
- Justificativa: Proposta inicial baseada nas evidências fornecidas e identidade confirmada.

## Relações

### REL-001

- Origem: TEL-LOGIN
- Tipo: acesso à tela após acionamento do botão com credenciais válidas
- Destino: TEL-HOME
- Evidências: EVD-003; EVD-004
- Classificação: Confirmada

## Conflitos e pendências

Sem conflitos ou pendências materiais no recorte. A descrição inicial de Enter foi esclarecida em EVD-004; a versão anterior da descrição permanece rastreável na conversa. Permissões de outros perfis, erros de autenticação e fluxos internos não fazem parte desta proposta.

## Histórico e vigência

- Conhecimento anterior: Aplicação ausente no registro canônico revisão 3 consultado.
- Estado anterior: Sem base canônica própria recuperável para o recorte.
- Nova vigência: Contexto fornecido nesta conversa; data de implantação não informada.
- Motivo: Inicialização proposta após confirmação humana de identidade.
- Evidências: EVD-001; EVD-002; EVD-003; EVD-004

## Resumo

- Evidências: 4
- Confirmadas: 7
- Inferidas: 0
- Pendentes: 0
- Conflitos: 0
- Alterações propostas: 7

## Validação

- Identificação: aprovado — Nome e Application ID confirmados explicitamente pelo usuário.
- Base de referência: aprovado — Registro revisão 3 consultado; aplicação nova, revisão esperada 0.
- Isolamento entre aplicações: aprovado — Somente evidências do Função; nenhuma regra de outra aplicação.
- Rastreabilidade: aprovado — Cada afirmação possui origem identificada nas imagens ou mensagens.
- Separação epistemológica: aprovado — Observação visual e especificação do usuário preservadas separadamente.
- Conflitos e pendências: aprovado — Esclarecimento de Enter incorporado; sem dúvida material restante no recorte.
- Histórico e vigência: aprovado — Ausência de base anterior explicitada; vigência limitada às fontes.
- Ausência de BDD e tags: aprovado — Proposta contém apenas conhecimento funcional.
- Prontidão para curadoria: aprovado — Proposta inicial revisável; aplicação depende de prévia e confirmação próprias.
- Resultado geral: aprovado
- Bloqueios: Não aplicável à proposta; escrita canônica exige fluxo de manutenção.
