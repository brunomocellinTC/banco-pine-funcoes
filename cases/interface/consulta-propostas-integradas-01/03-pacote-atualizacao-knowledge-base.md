# Pacote de Atualização da Knowledge Base

## Identificação

- Aplicação: Função
- Application ID: app-pine-funcao
- Package ID: PKG-2026-11-24-003
- Versão do contrato: 1
- Revisão esperada: 0
- Run de origem: interface/consulta-propostas-integradas-01
- Resultado: com_alteracoes
- Estado de curadoria inicial: proposto
- Base de referência: registry.yaml revisão 3; aplicação Função ausente. Pacotes pendentes e documentos históricos não utilizados como fonte canônica.
- Operação proposta: inicializacao
- Data ou contexto: 2026-11-24; identidade Função confirmada anteriormente pelo usuário.
- Versão e ambiente: Interface web do BackOffice 25.0430.106.6732 nas capturas; ambiente de execução não confirmado.
- Escopo: Consulta de propostas integradas no Corporate Ativo por Consulta de Cobrança.
- **Formato:** TestingQA 0.7.1 · Architect 1.4.5

## Evidências

### EVD-CPI-001

- Tipo: Captura de interface
- Natureza: observada
- Origem: Usuário nesta conversa sobre consulta de propostas integradas no BackOffice.
- Referência: Imagem 1.
- Data e versão: Contexto de novembro de 2026; BackOffice 25.0430.106.6732 nas capturas.
- Ambiente, perfil ou canal: Interface web; perfis das capturas não generalizados.
- Escopo: Entrada Backoffice na home.
- Limitações: Imagens de resultado e detalhe são de operações diferentes. Não sustentam fórmulas, prazo de integração, validações de entradas inválidas nem ausência de registros para todos os contratos. Transições sustentadas pelo passo a passo do usuário.

### EVD-CPI-002

- Tipo: Captura de interface
- Natureza: observada
- Origem: Usuário nesta conversa sobre consulta de propostas integradas no BackOffice.
- Referência: Imagens 2–4.
- Data e versão: Contexto de novembro de 2026; BackOffice 25.0430.106.6732 nas capturas.
- Ambiente, perfil ou canal: Interface web; perfis das capturas não generalizados.
- Escopo: Corporate Ativo e Consultas > Consulta de Cobrança.
- Limitações: Imagens de resultado e detalhe são de operações diferentes. Não sustentam fórmulas, prazo de integração, validações de entradas inválidas nem ausência de registros para todos os contratos. Transições sustentadas pelo passo a passo do usuário.

### EVD-CPI-003

- Tipo: Captura de interface
- Natureza: observada
- Origem: Usuário nesta conversa sobre consulta de propostas integradas no BackOffice.
- Referência: Imagem 5.
- Data e versão: Contexto de novembro de 2026; BackOffice 25.0430.106.6732 nas capturas.
- Ambiente, perfil ou canal: Interface web; perfis das capturas não generalizados.
- Escopo: Opções do seletor Tipo.
- Limitações: Imagens de resultado e detalhe são de operações diferentes. Não sustentam fórmulas, prazo de integração, validações de entradas inválidas nem ausência de registros para todos os contratos. Transições sustentadas pelo passo a passo do usuário.

### EVD-CPI-004

- Tipo: Captura de interface
- Natureza: observada
- Origem: Usuário nesta conversa sobre consulta de propostas integradas no BackOffice.
- Referência: Imagem 6.
- Data e versão: Contexto de novembro de 2026; BackOffice 25.0430.106.6732 nas capturas.
- Ambiente, perfil ou canal: Interface web; perfis das capturas não generalizados.
- Escopo: Busca por Número de Operação e resultado.
- Limitações: Imagens de resultado e detalhe são de operações diferentes. Não sustentam fórmulas, prazo de integração, validações de entradas inválidas nem ausência de registros para todos os contratos. Transições sustentadas pelo passo a passo do usuário.

### EVD-CPI-005

- Tipo: Captura de interface
- Natureza: observada
- Origem: Usuário nesta conversa sobre consulta de propostas integradas no BackOffice.
- Referência: Imagem 7.
- Data e versão: Contexto de novembro de 2026; BackOffice 25.0430.106.6732 nas capturas.
- Ambiente, perfil ou canal: Interface web; perfis das capturas não generalizados.
- Escopo: Operação Selecionada e seções detalhadas.
- Limitações: Imagens de resultado e detalhe são de operações diferentes. Não sustentam fórmulas, prazo de integração, validações de entradas inválidas nem ausência de registros para todos os contratos. Transições sustentadas pelo passo a passo do usuário.

### EVD-CPI-006

- Tipo: Descrição textual
- Natureza: especificada
- Origem: Usuário nesta conversa sobre consulta de propostas integradas no BackOffice.
- Referência: Passo a passo textual do usuário nesta solicitação.
- Data e versão: Contexto de novembro de 2026; BackOffice 25.0430.106.6732 nas capturas.
- Ambiente, perfil ou canal: Interface web; perfis das capturas não generalizados.
- Escopo: Disponibilidade no BackOffice após integrar, filtros e abertura dos dados.
- Limitações: Imagens de resultado e detalhe são de operações diferentes. Não sustentam fórmulas, prazo de integração, validações de entradas inválidas nem ausência de registros para todos os contratos. Transições sustentadas pelo passo a passo do usuário.

## Entidades afetadas

- Aplicação: app-pine-funcao — Função.
- Funcionalidade: FUN-CPI-001 — Consulta de propostas integradas no BackOffice.
- Tela: TEL-CPI-001 — Consulta de Cobrança.

## Afirmações

### AFR-CPI-001

- Conteúdo: As propostas integradas ficam disponíveis no BackOffice, conforme o procedimento informado.
- Entidade: FUN-CPI-001
- Classificação: Confirmada
- Natureza: especificada
- Evidências: EVD-CPI-006
- Escopo: Consulta de Cobrança em Corporate Ativo.
- Vigência: Contexto informado em novembro de 2026; sem generalização para outros BackOffices.
- Limitações: Sem execução da aplicação; integração prévia não comprova fluxo ou destino para outros produtos.
- Confirmação necessária: Não aplicável.

### AFR-CPI-002

- Conteúdo: O acesso ao módulo ocorre por Backoffice na home do Função.
- Entidade: FUN-CPI-001
- Classificação: Confirmada
- Natureza: especificada
- Evidências: EVD-CPI-001
- Escopo: Consulta de Cobrança em Corporate Ativo.
- Vigência: Contexto informado em novembro de 2026; sem generalização para outros BackOffices.
- Limitações: Sem execução da aplicação; integração prévia não comprova fluxo ou destino para outros produtos.
- Confirmação necessária: Não aplicável.

### AFR-CPI-003

- Conteúdo: Com Corporate Ativo selecionado no BackOffice, Consultas > Consulta de Cobrança abre a tela de consulta.
- Entidade: FUN-CPI-001
- Classificação: Confirmada
- Natureza: especificada
- Evidências: EVD-CPI-002
- Escopo: Consulta de Cobrança em Corporate Ativo.
- Vigência: Contexto informado em novembro de 2026; sem generalização para outros BackOffices.
- Limitações: Sem execução da aplicação; integração prévia não comprova fluxo ou destino para outros produtos.
- Confirmação necessária: Não aplicável.

### AFR-CPI-004

- Conteúdo: A consulta apresenta os campos Tipo, Conteúdo, Módulo e Pesquisa de Contratos e a ação Buscar.
- Entidade: FUN-CPI-001
- Classificação: Confirmada
- Natureza: observada
- Evidências: EVD-CPI-002
- Escopo: Consulta de Cobrança em Corporate Ativo.
- Vigência: Contexto informado em novembro de 2026; sem generalização para outros BackOffices.
- Limitações: Sem execução da aplicação; integração prévia não comprova fluxo ou destino para outros produtos.
- Confirmação necessária: Não aplicável.

### AFR-CPI-005

- Conteúdo: O seletor Tipo apresenta Nome, CPF, CNPJ, Número de Operação, Código do cliente e Número do lastro.
- Entidade: FUN-CPI-001
- Classificação: Confirmada
- Natureza: observada
- Evidências: EVD-CPI-003
- Escopo: Consulta de Cobrança em Corporate Ativo.
- Vigência: Contexto informado em novembro de 2026; sem generalização para outros BackOffices.
- Limitações: Sem execução da aplicação; integração prévia não comprova fluxo ou destino para outros produtos.
- Confirmação necessária: Não aplicável.

### AFR-CPI-006

- Conteúdo: A pesquisa por Número de Operação utiliza o número informado em Conteúdo, o módulo e o filtro de situação do contrato.
- Entidade: FUN-CPI-001
- Classificação: Confirmada
- Natureza: especificada
- Evidências: EVD-CPI-006
- Escopo: Consulta de Cobrança em Corporate Ativo.
- Vigência: Contexto informado em novembro de 2026; sem generalização para outros BackOffices.
- Limitações: Sem execução da aplicação; integração prévia não comprova fluxo ou destino para outros produtos.
- Confirmação necessária: Não aplicável.

### AFR-CPI-007

- Conteúdo: Pesquisa de Contratos permite filtrar Abertos, Liquidados ou Todos.
- Entidade: FUN-CPI-001
- Classificação: Confirmada
- Natureza: especificada
- Evidências: EVD-CPI-006
- Escopo: Consulta de Cobrança em Corporate Ativo.
- Vigência: Contexto informado em novembro de 2026; sem generalização para outros BackOffices.
- Limitações: Sem execução da aplicação; integração prévia não comprova fluxo ou destino para outros produtos.
- Confirmação necessária: Não aplicável.

### AFR-CPI-008

- Conteúdo: Buscar apresenta o contrato correspondente aos filtros informados; o exemplo demonstra a localização pelo número de operação em Corporate Ativo.
- Entidade: FUN-CPI-001
- Classificação: Confirmada
- Natureza: especificada
- Evidências: EVD-CPI-004
- Escopo: Consulta de Cobrança em Corporate Ativo.
- Vigência: Contexto informado em novembro de 2026; sem generalização para outros BackOffices.
- Limitações: Sem execução da aplicação; integração prévia não comprova fluxo ou destino para outros produtos.
- Confirmação necessária: Não aplicável.

### AFR-CPI-009

- Conteúdo: O resultado apresenta Operação, Cliente, CPF/CNPJ, Data Base, Data Liq. e Sistema.
- Entidade: FUN-CPI-001
- Classificação: Confirmada
- Natureza: observada
- Evidências: EVD-CPI-004
- Escopo: Consulta de Cobrança em Corporate Ativo.
- Vigência: Contexto informado em novembro de 2026; sem generalização para outros BackOffices.
- Limitações: Sem execução da aplicação; integração prévia não comprova fluxo ou destino para outros produtos.
- Confirmação necessária: Não aplicável.

### AFR-CPI-010

- Conteúdo: Clicar no número da operação encontrada abre os dados da operação selecionada.
- Entidade: FUN-CPI-001
- Classificação: Confirmada
- Natureza: especificada
- Evidências: EVD-CPI-006
- Escopo: Consulta de Cobrança em Corporate Ativo.
- Vigência: Contexto informado em novembro de 2026; sem generalização para outros BackOffices.
- Limitações: Sem execução da aplicação; integração prévia não comprova fluxo ou destino para outros produtos.
- Confirmação necessária: Não aplicável.

### AFR-CPI-011

- Conteúdo: Operação Selecionada apresenta identificação, cliente, datas, valor, quantidade de parcelas, sistema, produto, descrição e status do produto.
- Entidade: FUN-CPI-001
- Classificação: Confirmada
- Natureza: observada
- Evidências: EVD-CPI-005
- Escopo: Consulta de Cobrança em Corporate Ativo.
- Vigência: Contexto informado em novembro de 2026; sem generalização para outros BackOffices.
- Limitações: Sem execução da aplicação; integração prévia não comprova fluxo ou destino para outros produtos.
- Confirmação necessária: Não aplicável.

### AFR-CPI-012

- Conteúdo: O detalhe apresenta Dados da Operação, Dados do Cliente, Avalistas, Despesas/Tarifas, Dados da Liberação, Garantia(s), Cessão de Crédito, Histórico de Alteração, Taxas e Condições da Operação.
- Entidade: FUN-CPI-001
- Classificação: Confirmada
- Natureza: observada
- Evidências: EVD-CPI-005
- Escopo: Consulta de Cobrança em Corporate Ativo.
- Vigência: Contexto informado em novembro de 2026; sem generalização para outros BackOffices.
- Limitações: Sem execução da aplicação; integração prévia não comprova fluxo ou destino para outros produtos.
- Confirmação necessária: Não aplicável.

## Alterações propostas

### ALT-CPI-001

- Operação: adicionar
- Alvo: AFR-CPI-001
- Afirmações: AFR-CPI-001
- Valor anterior: Não aplicável; aplicação ausente no registro canônico consultado.
- Valor proposto: As propostas integradas ficam disponíveis no BackOffice, conforme o procedimento informado.
- Justificativa: Conhecimento delimitado pelas novas evidências do usuário.

### ALT-CPI-002

- Operação: adicionar
- Alvo: AFR-CPI-002
- Afirmações: AFR-CPI-002
- Valor anterior: Não aplicável; aplicação ausente no registro canônico consultado.
- Valor proposto: O acesso ao módulo ocorre por Backoffice na home do Função.
- Justificativa: Conhecimento delimitado pelas novas evidências do usuário.

### ALT-CPI-003

- Operação: adicionar
- Alvo: AFR-CPI-003
- Afirmações: AFR-CPI-003
- Valor anterior: Não aplicável; aplicação ausente no registro canônico consultado.
- Valor proposto: Com Corporate Ativo selecionado no BackOffice, Consultas > Consulta de Cobrança abre a tela de consulta.
- Justificativa: Conhecimento delimitado pelas novas evidências do usuário.

### ALT-CPI-004

- Operação: adicionar
- Alvo: AFR-CPI-004
- Afirmações: AFR-CPI-004
- Valor anterior: Não aplicável; aplicação ausente no registro canônico consultado.
- Valor proposto: A consulta apresenta os campos Tipo, Conteúdo, Módulo e Pesquisa de Contratos e a ação Buscar.
- Justificativa: Conhecimento delimitado pelas novas evidências do usuário.

### ALT-CPI-005

- Operação: adicionar
- Alvo: AFR-CPI-005
- Afirmações: AFR-CPI-005
- Valor anterior: Não aplicável; aplicação ausente no registro canônico consultado.
- Valor proposto: O seletor Tipo apresenta Nome, CPF, CNPJ, Número de Operação, Código do cliente e Número do lastro.
- Justificativa: Conhecimento delimitado pelas novas evidências do usuário.

### ALT-CPI-006

- Operação: adicionar
- Alvo: AFR-CPI-006
- Afirmações: AFR-CPI-006
- Valor anterior: Não aplicável; aplicação ausente no registro canônico consultado.
- Valor proposto: A pesquisa por Número de Operação utiliza o número informado em Conteúdo, o módulo e o filtro de situação do contrato.
- Justificativa: Conhecimento delimitado pelas novas evidências do usuário.

### ALT-CPI-007

- Operação: adicionar
- Alvo: AFR-CPI-007
- Afirmações: AFR-CPI-007
- Valor anterior: Não aplicável; aplicação ausente no registro canônico consultado.
- Valor proposto: Pesquisa de Contratos permite filtrar Abertos, Liquidados ou Todos.
- Justificativa: Conhecimento delimitado pelas novas evidências do usuário.

### ALT-CPI-008

- Operação: adicionar
- Alvo: AFR-CPI-008
- Afirmações: AFR-CPI-008
- Valor anterior: Não aplicável; aplicação ausente no registro canônico consultado.
- Valor proposto: Buscar apresenta o contrato correspondente aos filtros informados; o exemplo demonstra a localização pelo número de operação em Corporate Ativo.
- Justificativa: Conhecimento delimitado pelas novas evidências do usuário.

### ALT-CPI-009

- Operação: adicionar
- Alvo: AFR-CPI-009
- Afirmações: AFR-CPI-009
- Valor anterior: Não aplicável; aplicação ausente no registro canônico consultado.
- Valor proposto: O resultado apresenta Operação, Cliente, CPF/CNPJ, Data Base, Data Liq. e Sistema.
- Justificativa: Conhecimento delimitado pelas novas evidências do usuário.

### ALT-CPI-010

- Operação: adicionar
- Alvo: AFR-CPI-010
- Afirmações: AFR-CPI-010
- Valor anterior: Não aplicável; aplicação ausente no registro canônico consultado.
- Valor proposto: Clicar no número da operação encontrada abre os dados da operação selecionada.
- Justificativa: Conhecimento delimitado pelas novas evidências do usuário.

### ALT-CPI-011

- Operação: adicionar
- Alvo: AFR-CPI-011
- Afirmações: AFR-CPI-011
- Valor anterior: Não aplicável; aplicação ausente no registro canônico consultado.
- Valor proposto: Operação Selecionada apresenta identificação, cliente, datas, valor, quantidade de parcelas, sistema, produto, descrição e status do produto.
- Justificativa: Conhecimento delimitado pelas novas evidências do usuário.

### ALT-CPI-012

- Operação: adicionar
- Alvo: AFR-CPI-012
- Afirmações: AFR-CPI-012
- Valor anterior: Não aplicável; aplicação ausente no registro canônico consultado.
- Valor proposto: O detalhe apresenta Dados da Operação, Dados do Cliente, Avalistas, Despesas/Tarifas, Dados da Liberação, Garantia(s), Cessão de Crédito, Histórico de Alteração, Taxas e Condições da Operação.
- Justificativa: Conhecimento delimitado pelas novas evidências do usuário.

## Relações

### REL-CPI-001

- Origem: FUN-CPI-001
- Tipo: utiliza
- Destino: TEL-CPI-001
- Evidências: EVD-CPI-002; EVD-CPI-006
- Classificação: Confirmada

## Conflitos e pendências

Nenhum conflito ou pendência material identificado no recorte de consulta especificado. Não há definição de buscas inválidas nem de outros destinos de BackOffice; esses comportamentos estão fora do recorte.

## Histórico e vigência

- Conhecimento anterior: Função ausente do registry.yaml revisão 3; contexto canônico indisponível para a aplicação.
- Estado anterior: Não aplicável; propostas pendentes não são conhecimento aprovado.
- Nova vigência: Contexto de novembro de 2026, limitado ao Corporate Ativo.
- Motivo: Registrar acesso à consulta, filtros e visualização dos dados da operação integrada.
- Evidências: EVD-CPI-001; EVD-CPI-002; EVD-CPI-003; EVD-CPI-004; EVD-CPI-005; EVD-CPI-006

## Resumo

- Evidências: 6
- Confirmadas: 12
- Inferidas: 0
- Pendentes: 0
- Conflitos: 0
- Alterações propostas: 12

## Validação

- Identificação: aprovado — identidade confirmada na conversa.
- Base de referência: aprovado — vínculo consultado; ausência canônica registrada.
- Isolamento entre aplicações: aprovado — conteúdo restrito ao Função.
- Rastreabilidade: aprovado — afirmações vinculadas às novas evidências.
- Separação epistemológica: aprovado — apresentação observada e comportamento especificado distinguidos.
- Conflitos e pendências: aprovado — nenhuma lacuna material para este recorte.
- Histórico e vigência: aprovado — versão e limitação ao Corporate Ativo preservadas.
- Ausência de BDD e tags: aprovado — apenas conhecimento funcional proposto.
- Prontidão para curadoria: pendente — aplicação nova depende de prévia e confirmação próprias do Maintainer.
- Resultado geral: pendente
- Bloqueios: Sem bloqueio para enfileirar a proposta; aplicação canônica depende do Maintainer.
