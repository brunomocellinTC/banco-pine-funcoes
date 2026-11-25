# Pacote de Atualização da Knowledge Base

## Identificação

- Aplicação: Função
- Application ID: app-pine-funcao
- Package ID: PKG-2026-11-24-002
- Versão do contrato: 1
- Revisão esperada: 0
- Run de origem: interface/cadastro-proposta-01
- Resultado: com_alteracoes
- Estado de curadoria inicial: proposto
- Base de referência: registry.yaml revisão 3; Função ausente do registro canônico. Pacotes pendentes não foram usados como fonte.
- Operação proposta: inicializacao
- Data ou contexto: 2026-11-24; identidade Função confirmada anteriormente pelo usuário.
- Versão e ambiente: Capturas históricas da interface web 26.0413.118.3876; ambiente de execução não confirmado.
- Escopo: Cadastro de Proposta, do acesso ao módulo ao retorno à página inicial após liberação; sem consulta, revisão, aprovação ou integração.
- **Formato:** TestingQA 0.7.1 · Architect 1.4.5

## Evidências

### EVD-PROP-001

- Tipo: Imagens e passo a passo
- Natureza: especificada
- Origem: Usuário nesta conversa sobre Cadastro de Proposta.
- Referência: Imagens 1–4 e descrição correspondente.
- Data e versão: Contexto de novembro de 2026; interface 26.0413.118.3876 nas capturas principais.
- Ambiente, perfil ou canal: Interface web; permissões não generalizadas.
- Escopo: Entrada no módulo e seleção do produto.
- Limitações: Capturas são exemplos de momentos e configurações diferentes; não constituem uma única execução nem comprovam fórmulas. Imagens de aprovação e integração estão fora do recorte atual. Comportamentos de transição são especificados pelo usuário.

### EVD-PROP-002

- Tipo: Imagens e passo a passo
- Natureza: especificada
- Origem: Usuário nesta conversa sobre Cadastro de Proposta.
- Referência: Imagens 5–8 e descrição correspondente.
- Data e versão: Contexto de novembro de 2026; interface 26.0413.118.3876 nas capturas principais.
- Ambiente, perfil ou canal: Interface web; permissões não generalizadas.
- Escopo: Pesquisa, cliente e dados básicos.
- Limitações: Capturas são exemplos de momentos e configurações diferentes; não constituem uma única execução nem comprovam fórmulas. Imagens de aprovação e integração estão fora do recorte atual. Comportamentos de transição são especificados pelo usuário.

### EVD-PROP-003

- Tipo: Imagens e passo a passo
- Natureza: especificada
- Origem: Usuário nesta conversa sobre Cadastro de Proposta.
- Referência: Imagens 9–16 e descrição correspondente.
- Data e versão: Contexto de novembro de 2026; interface 26.0413.118.3876 nas capturas principais.
- Ambiente, perfil ou canal: Interface web; permissões não generalizadas.
- Escopo: Condições e fluxo de parcelas.
- Limitações: Capturas são exemplos de momentos e configurações diferentes; não constituem uma única execução nem comprovam fórmulas. Imagens de aprovação e integração estão fora do recorte atual. Comportamentos de transição são especificados pelo usuário.

### EVD-PROP-004

- Tipo: Imagens e passo a passo
- Natureza: especificada
- Origem: Usuário nesta conversa sobre Cadastro de Proposta.
- Referência: Imagens 17–19 e descrição correspondente.
- Data e versão: Contexto de novembro de 2026; interface 26.0413.118.3876 nas capturas principais.
- Ambiente, perfil ou canal: Interface web; permissões não generalizadas.
- Escopo: Número, recebimento e eventos.
- Limitações: Capturas são exemplos de momentos e configurações diferentes; não constituem uma única execução nem comprovam fórmulas. Imagens de aprovação e integração estão fora do recorte atual. Comportamentos de transição são especificados pelo usuário.

### EVD-PROP-005

- Tipo: Imagens e passo a passo
- Natureza: especificada
- Origem: Usuário nesta conversa sobre Cadastro de Proposta.
- Referência: Imagens 20–22 e descrição correspondente.
- Data e versão: Contexto de novembro de 2026; interface 26.0413.118.3876 nas capturas principais.
- Ambiente, perfil ou canal: Interface web; permissões não generalizadas.
- Escopo: Liberação de crédito.
- Limitações: Capturas são exemplos de momentos e configurações diferentes; não constituem uma única execução nem comprovam fórmulas. Imagens de aprovação e integração estão fora do recorte atual. Comportamentos de transição são especificados pelo usuário.

### EVD-PROP-006

- Tipo: Esclarecimento textual e imagens
- Natureza: especificada
- Origem: Usuário nesta conversa sobre Cadastro de Proposta.
- Referência: Respostas do usuário nesta retomada e duas capturas de tipos de cálculo.
- Data e versão: Contexto de novembro de 2026; interface 26.0413.118.3876 nas capturas principais.
- Ambiente, perfil ou canal: Interface web; permissões não generalizadas.
- Escopo: Cálculo 51, relação N:N, Voltar após validar, mensagem pendente, Incluir conta e limite do cadastro.
- Limitações: Capturas são exemplos de momentos e configurações diferentes; não constituem uma única execução nem comprovam fórmulas. Imagens de aprovação e integração estão fora do recorte atual. Comportamentos de transição são especificados pelo usuário.

### EVD-PROP-007

- Tipo: Correção textual e captura adicional do alerta.
- Natureza: especificada
- Origem: Usuário nesta conversa, após revisão das tags do Cadastro de Proposta.
- Referência: Correção para Validar Fluxo de Parcelas > Confirmar > Condições da Operação; captura com "Atualize o fluxo de parcelas.".
- Data e versão: Contexto de novembro de 2026; versão não visível no alerta adicional.
- Ambiente, perfil ou canal: Interface web, alerta do navegador.
- Escopo: Confirmação do fluxo validado e bloqueio sem validação.
- Limitações: Correção explícita substitui a orientação anterior de retorno por Voltar neste percurso; não define correspondência entre cálculo e BackOffice.

## Entidades afetadas

- Aplicação: app-pine-funcao — Função.
- Funcionalidade: FUN-PROP-001 — Cadastro de Proposta.
- Jornada: JOR-PROP-001 — Cadastro até o retorno à página inicial de Proposta.

## Afirmações

### AFR-PROP-001

- Conteúdo: O acesso ao cadastro ocorre por Proposta na home e Proposta > Cadastro de Proposta no módulo.
- Entidade: FUN-PROP-001
- Classificação: Confirmada
- Natureza: especificada
- Evidências: EVD-PROP-001
- Escopo: Cadastro de Proposta, produto 50 - CAPITAL GIRO no percurso informado.
- Vigência: Contexto informado pelo usuário em novembro de 2026, sem generalização para outros produtos.
- Limitações: Sem execução pela Skill; sem inferência de fórmulas, status final, integração ou destino específico de BackOffice.
- Confirmação necessária: Não aplicável.

### AFR-PROP-002

- Conteúdo: Selecionar um produto e confirmar abre Dados Básicos da Proposta; o produto utilizado neste recorte é 50 - CAPITAL GIRO.
- Entidade: FUN-PROP-001
- Classificação: Confirmada
- Natureza: especificada
- Evidências: EVD-PROP-001
- Escopo: Cadastro de Proposta, produto 50 - CAPITAL GIRO no percurso informado.
- Vigência: Contexto informado pelo usuário em novembro de 2026, sem generalização para outros produtos.
- Limitações: Sem execução pela Skill; sem inferência de fórmulas, status final, integração ou destino específico de BackOffice.
- Confirmação necessária: Não aplicável.

### AFR-PROP-003

- Conteúdo: O link Código do Cliente abre Pesquisa, que permite pesquisar por Código do Cliente e selecionar um registro da lista.
- Entidade: FUN-PROP-001
- Classificação: Confirmada
- Natureza: especificada
- Evidências: EVD-PROP-002
- Escopo: Cadastro de Proposta, produto 50 - CAPITAL GIRO no percurso informado.
- Vigência: Contexto informado pelo usuário em novembro de 2026, sem generalização para outros produtos.
- Limitações: Sem execução pela Skill; sem inferência de fórmulas, status final, integração ou destino específico de BackOffice.
- Confirmação necessária: Não aplicável.

### AFR-PROP-004

- Conteúdo: A seleção do cliente retorna aos dados básicos com seus dados e origens preenchidos.
- Entidade: FUN-PROP-001
- Classificação: Confirmada
- Natureza: especificada
- Evidências: EVD-PROP-002
- Escopo: Cadastro de Proposta, produto 50 - CAPITAL GIRO no percurso informado.
- Vigência: Contexto informado pelo usuário em novembro de 2026, sem generalização para outros produtos.
- Limitações: Sem execução pela Skill; sem inferência de fórmulas, status final, integração ou destino específico de BackOffice.
- Confirmação necessária: Não aplicável.

### AFR-PROP-005

- Conteúdo: Informar o valor da operação e confirmar permite avançar às condições sem incluir avalista neste percurso.
- Entidade: FUN-PROP-001
- Classificação: Confirmada
- Natureza: especificada
- Evidências: EVD-PROP-002
- Escopo: Cadastro de Proposta, produto 50 - CAPITAL GIRO no percurso informado.
- Vigência: Contexto informado pelo usuário em novembro de 2026, sem generalização para outros produtos.
- Limitações: Sem execução pela Skill; sem inferência de fórmulas, status final, integração ou destino específico de BackOffice.
- Confirmação necessária: Não aplicável.

### AFR-PROP-006

- Conteúdo: O percurso informado utiliza Porte da Empresa Média e Regime de Tributação Completo.
- Entidade: FUN-PROP-001
- Classificação: Confirmada
- Natureza: especificada
- Evidências: EVD-PROP-003
- Escopo: Cadastro de Proposta, produto 50 - CAPITAL GIRO no percurso informado.
- Vigência: Contexto informado pelo usuário em novembro de 2026, sem generalização para outros produtos.
- Limitações: Sem execução pela Skill; sem inferência de fórmulas, status final, integração ou destino específico de BackOffice.
- Confirmação necessária: Não aplicável.

### AFR-PROP-007

- Conteúdo: Selecionar o tipo de cálculo preenche os Dados da Operação e libera Qtd. Parc., 1ª Amortização, Prz. 1ºVcto. e 1º Vcto. para edição.
- Entidade: FUN-PROP-001
- Classificação: Confirmada
- Natureza: especificada
- Evidências: EVD-PROP-003
- Escopo: Cadastro de Proposta, produto 50 - CAPITAL GIRO no percurso informado.
- Vigência: Contexto informado pelo usuário em novembro de 2026, sem generalização para outros produtos.
- Limitações: Sem execução pela Skill; sem inferência de fórmulas, status final, integração ou destino específico de BackOffice.
- Confirmação necessária: Não aplicável.

### AFR-PROP-008

- Conteúdo: Vcto. Final é recalculado automaticamente a partir dos parâmetros de parcelamento.
- Entidade: FUN-PROP-001
- Classificação: Confirmada
- Natureza: especificada
- Evidências: EVD-PROP-003
- Escopo: Cadastro de Proposta, produto 50 - CAPITAL GIRO no percurso informado.
- Vigência: Contexto informado pelo usuário em novembro de 2026, sem generalização para outros produtos.
- Limitações: Sem execução pela Skill; sem inferência de fórmulas, status final, integração ou destino específico de BackOffice.
- Confirmação necessária: Não aplicável.

### AFR-PROP-009

- Conteúdo: Index./Moeda permite seleção e os padrões dos demais campos são suficientes ao cadastro sem alterar Mora neste percurso.
- Entidade: FUN-PROP-001
- Classificação: Confirmada
- Natureza: especificada
- Evidências: EVD-PROP-003
- Escopo: Cadastro de Proposta, produto 50 - CAPITAL GIRO no percurso informado.
- Vigência: Contexto informado pelo usuário em novembro de 2026, sem generalização para outros produtos.
- Limitações: Sem execução pela Skill; sem inferência de fórmulas, status final, integração ou destino específico de BackOffice.
- Confirmação necessária: Não aplicável.

### AFR-PROP-010

- Conteúdo: Validar Fluxo de Parcelas é obrigatório e apresenta uma tabela de resumo do fluxo validado.
- Entidade: FUN-PROP-001
- Classificação: Confirmada
- Natureza: especificada
- Evidências: EVD-PROP-003
- Escopo: Cadastro de Proposta, produto 50 - CAPITAL GIRO no percurso informado.
- Vigência: Contexto informado pelo usuário em novembro de 2026, sem generalização para outros produtos.
- Limitações: Sem execução pela Skill; sem inferência de fórmulas, status final, integração ou destino específico de BackOffice.
- Confirmação necessária: Não aplicável.

### AFR-PROP-011

- Conteúdo: Após clicar em Validar Fluxo de Parcelas, o usuário clica em Confirmar para retornar às condições, com o fluxo atualizado e as seções Custo Efetivo Total e Valor da Operação preenchidas.
- Entidade: FUN-PROP-001
- Classificação: Confirmada
- Natureza: especificada
- Evidências: EVD-PROP-007
- Escopo: Cadastro de Proposta, produto 50 - CAPITAL GIRO no percurso informado.
- Vigência: Contexto informado pelo usuário em novembro de 2026, sem generalização para outros produtos.
- Limitações: Sem execução pela Skill; sem inferência de fórmulas, status final, integração ou destino específico de BackOffice.
- Confirmação necessária: Não aplicável.

### AFR-PROP-012

- Conteúdo: Confirmar condições sem validar o fluxo impede o avanço e apresenta uma mensagem solicitando a confirmação do fluxo.
- Entidade: FUN-PROP-001
- Classificação: Confirmada
- Natureza: especificada
- Evidências: EVD-PROP-006
- Escopo: Cadastro de Proposta, produto 50 - CAPITAL GIRO no percurso informado.
- Vigência: Contexto informado pelo usuário em novembro de 2026, sem generalização para outros produtos.
- Limitações: Sem execução pela Skill; sem inferência de fórmulas, status final, integração ou destino específico de BackOffice.
- Confirmação necessária: Não aplicável.

### AFR-PROP-013

- Conteúdo: Ao confirmar Condições da Operação sem validar o fluxo, o navegador apresenta a mensagem "Atualize o fluxo de parcelas.".
- Entidade: FUN-PROP-001
- Classificação: Confirmada
- Natureza: especificada
- Evidências: EVD-PROP-007
- Escopo: Cadastro de Proposta, produto 50 - CAPITAL GIRO no percurso informado.
- Vigência: Contexto informado pelo usuário em novembro de 2026, sem generalização para outros produtos.
- Limitações: Sem execução pela Skill; sem inferência de fórmulas, status final, integração ou destino específico de BackOffice.
- Confirmação necessária: Não aplicável; mensagem confirmada pela captura adicional.

### AFR-PROP-014

- Conteúdo: Após confirmar as condições validadas, o usuário informa um número livre para a operação; usar o número da proposta é uma prática do percurso, não uma obrigação geral.
- Entidade: FUN-PROP-001
- Classificação: Confirmada
- Natureza: especificada
- Evidências: EVD-PROP-004
- Escopo: Cadastro de Proposta, produto 50 - CAPITAL GIRO no percurso informado.
- Vigência: Contexto informado pelo usuário em novembro de 2026, sem generalização para outros produtos.
- Limitações: Sem execução pela Skill; sem inferência de fórmulas, status final, integração ou destino específico de BackOffice.
- Confirmação necessária: Não aplicável.

### AFR-PROP-015

- Conteúdo: O percurso mantém Outros na forma de recebimento e avança por Cadastro de Eventos sem inclusões até Liberação de Crédito.
- Entidade: FUN-PROP-001
- Classificação: Confirmada
- Natureza: especificada
- Evidências: EVD-PROP-004
- Escopo: Cadastro de Proposta, produto 50 - CAPITAL GIRO no percurso informado.
- Vigência: Contexto informado pelo usuário em novembro de 2026, sem generalização para outros produtos.
- Limitações: Sem execução pela Skill; sem inferência de fórmulas, status final, integração ou destino específico de BackOffice.
- Confirmação necessária: Não aplicável.

### AFR-PROP-016

- Conteúdo: Na liberação, o usuário seleciona a última conta disponível, indicada como a mais atual no procedimento informado.
- Entidade: FUN-PROP-001
- Classificação: Confirmada
- Natureza: especificada
- Evidências: EVD-PROP-005
- Escopo: Cadastro de Proposta, produto 50 - CAPITAL GIRO no percurso informado.
- Vigência: Contexto informado pelo usuário em novembro de 2026, sem generalização para outros produtos.
- Limitações: Sem execução pela Skill; sem inferência de fórmulas, status final, integração ou destino específico de BackOffice.
- Confirmação necessária: Não aplicável.

### AFR-PROP-017

- Conteúdo: Após selecionar a conta, Incluir gera o registro de liberação na tabela à direita; em seguida o usuário confirma.
- Entidade: FUN-PROP-001
- Classificação: Confirmada
- Natureza: especificada
- Evidências: EVD-PROP-006
- Escopo: Cadastro de Proposta, produto 50 - CAPITAL GIRO no percurso informado.
- Vigência: Contexto informado pelo usuário em novembro de 2026, sem generalização para outros produtos.
- Limitações: Sem execução pela Skill; sem inferência de fórmulas, status final, integração ou destino específico de BackOffice.
- Confirmação necessária: Não aplicável.

### AFR-PROP-018

- Conteúdo: O recorte solicitado termina com o retorno à página inicial de Proposta após o cadastro; consulta, revisão e aprovação são acessadas pela Esteira e pertencem a etapa posterior.
- Entidade: FUN-PROP-001
- Classificação: Confirmada
- Natureza: especificada
- Evidências: EVD-PROP-006
- Escopo: Cadastro de Proposta, produto 50 - CAPITAL GIRO no percurso informado.
- Vigência: Contexto informado pelo usuário em novembro de 2026, sem generalização para outros produtos.
- Limitações: Sem execução pela Skill; sem inferência de fórmulas, status final, integração ou destino específico de BackOffice.
- Confirmação necessária: Não aplicável.

### AFR-PROP-019

- Conteúdo: O usuário informou relação N:N entre tipos de cálculo e produtos de BackOffice e utilização do cálculo 51 no teste, sem definir a correspondência exata.
- Entidade: FUN-PROP-001
- Classificação: Confirmada
- Natureza: especificada
- Evidências: EVD-PROP-006
- Escopo: Cadastro de Proposta, produto 50 - CAPITAL GIRO no percurso informado.
- Vigência: Contexto informado pelo usuário em novembro de 2026, sem generalização para outros produtos.
- Limitações: Sem execução pela Skill; sem inferência de fórmulas, status final, integração ou destino específico de BackOffice.
- Confirmação necessária: Não aplicável.

### AFR-PROP-020

- Conteúdo: A correspondência exata entre os tipos de cálculo e os produtos de BackOffice não está definida nas evidências fornecidas.
- Entidade: FUN-PROP-001
- Classificação: Pendente
- Natureza: especificada
- Evidências: EVD-PROP-006
- Escopo: Cadastro de Proposta, produto 50 - CAPITAL GIRO no percurso informado.
- Vigência: Contexto informado pelo usuário em novembro de 2026, sem generalização para outros produtos.
- Limitações: Sem execução pela Skill; sem inferência de fórmulas, status final, integração ou destino específico de BackOffice.
- Confirmação necessária: Resolver PEN-PROP-002.

## Alterações propostas

### ALT-PROP-001

- Operação: adicionar
- Alvo: AFR-PROP-001
- Afirmações: AFR-PROP-001
- Valor anterior: Não aplicável; aplicação ausente no registro consultado.
- Valor proposto: O acesso ao cadastro ocorre por Proposta na home e Proposta > Cadastro de Proposta no módulo.
- Justificativa: Evidência específica do cadastro fornecida pelo usuário; preservar classificação e limites.

### ALT-PROP-002

- Operação: adicionar
- Alvo: AFR-PROP-002
- Afirmações: AFR-PROP-002
- Valor anterior: Não aplicável; aplicação ausente no registro consultado.
- Valor proposto: Selecionar um produto e confirmar abre Dados Básicos da Proposta; o produto utilizado neste recorte é 50 - CAPITAL GIRO.
- Justificativa: Evidência específica do cadastro fornecida pelo usuário; preservar classificação e limites.

### ALT-PROP-003

- Operação: adicionar
- Alvo: AFR-PROP-003
- Afirmações: AFR-PROP-003
- Valor anterior: Não aplicável; aplicação ausente no registro consultado.
- Valor proposto: O link Código do Cliente abre Pesquisa, que permite pesquisar por Código do Cliente e selecionar um registro da lista.
- Justificativa: Evidência específica do cadastro fornecida pelo usuário; preservar classificação e limites.

### ALT-PROP-004

- Operação: adicionar
- Alvo: AFR-PROP-004
- Afirmações: AFR-PROP-004
- Valor anterior: Não aplicável; aplicação ausente no registro consultado.
- Valor proposto: A seleção do cliente retorna aos dados básicos com seus dados e origens preenchidos.
- Justificativa: Evidência específica do cadastro fornecida pelo usuário; preservar classificação e limites.

### ALT-PROP-005

- Operação: adicionar
- Alvo: AFR-PROP-005
- Afirmações: AFR-PROP-005
- Valor anterior: Não aplicável; aplicação ausente no registro consultado.
- Valor proposto: Informar o valor da operação e confirmar permite avançar às condições sem incluir avalista neste percurso.
- Justificativa: Evidência específica do cadastro fornecida pelo usuário; preservar classificação e limites.

### ALT-PROP-006

- Operação: adicionar
- Alvo: AFR-PROP-006
- Afirmações: AFR-PROP-006
- Valor anterior: Não aplicável; aplicação ausente no registro consultado.
- Valor proposto: O percurso informado utiliza Porte da Empresa Média e Regime de Tributação Completo.
- Justificativa: Evidência específica do cadastro fornecida pelo usuário; preservar classificação e limites.

### ALT-PROP-007

- Operação: adicionar
- Alvo: AFR-PROP-007
- Afirmações: AFR-PROP-007
- Valor anterior: Não aplicável; aplicação ausente no registro consultado.
- Valor proposto: Selecionar o tipo de cálculo preenche os Dados da Operação e libera Qtd. Parc., 1ª Amortização, Prz. 1ºVcto. e 1º Vcto. para edição.
- Justificativa: Evidência específica do cadastro fornecida pelo usuário; preservar classificação e limites.

### ALT-PROP-008

- Operação: adicionar
- Alvo: AFR-PROP-008
- Afirmações: AFR-PROP-008
- Valor anterior: Não aplicável; aplicação ausente no registro consultado.
- Valor proposto: Vcto. Final é recalculado automaticamente a partir dos parâmetros de parcelamento.
- Justificativa: Evidência específica do cadastro fornecida pelo usuário; preservar classificação e limites.

### ALT-PROP-009

- Operação: adicionar
- Alvo: AFR-PROP-009
- Afirmações: AFR-PROP-009
- Valor anterior: Não aplicável; aplicação ausente no registro consultado.
- Valor proposto: Index./Moeda permite seleção e os padrões dos demais campos são suficientes ao cadastro sem alterar Mora neste percurso.
- Justificativa: Evidência específica do cadastro fornecida pelo usuário; preservar classificação e limites.

### ALT-PROP-010

- Operação: adicionar
- Alvo: AFR-PROP-010
- Afirmações: AFR-PROP-010
- Valor anterior: Não aplicável; aplicação ausente no registro consultado.
- Valor proposto: Validar Fluxo de Parcelas é obrigatório e apresenta uma tabela de resumo do fluxo validado.
- Justificativa: Evidência específica do cadastro fornecida pelo usuário; preservar classificação e limites.

### ALT-PROP-011

- Operação: adicionar
- Alvo: AFR-PROP-011
- Afirmações: AFR-PROP-011
- Valor anterior: Não aplicável; aplicação ausente no registro consultado.
- Valor proposto: Após clicar em Validar Fluxo de Parcelas, o usuário clica em Confirmar para retornar às condições, com o fluxo atualizado e as seções Custo Efetivo Total e Valor da Operação preenchidas.
- Justificativa: Evidência específica do cadastro fornecida pelo usuário; preservar classificação e limites.

### ALT-PROP-012

- Operação: adicionar
- Alvo: AFR-PROP-012
- Afirmações: AFR-PROP-012
- Valor anterior: Não aplicável; aplicação ausente no registro consultado.
- Valor proposto: Confirmar condições sem validar o fluxo impede o avanço e apresenta uma mensagem solicitando a confirmação do fluxo.
- Justificativa: Evidência específica do cadastro fornecida pelo usuário; preservar classificação e limites.

### ALT-PROP-013

- Operação: adicionar
- Alvo: AFR-PROP-013
- Afirmações: AFR-PROP-013
- Valor anterior: Não aplicável; aplicação ausente no registro consultado.
- Valor proposto: Ao confirmar Condições da Operação sem validar o fluxo, o navegador apresenta a mensagem "Atualize o fluxo de parcelas.".
- Justificativa: Evidência específica do cadastro fornecida pelo usuário; preservar classificação e limites.

### ALT-PROP-014

- Operação: adicionar
- Alvo: AFR-PROP-014
- Afirmações: AFR-PROP-014
- Valor anterior: Não aplicável; aplicação ausente no registro consultado.
- Valor proposto: Após confirmar as condições validadas, o usuário informa um número livre para a operação; usar o número da proposta é uma prática do percurso, não uma obrigação geral.
- Justificativa: Evidência específica do cadastro fornecida pelo usuário; preservar classificação e limites.

### ALT-PROP-015

- Operação: adicionar
- Alvo: AFR-PROP-015
- Afirmações: AFR-PROP-015
- Valor anterior: Não aplicável; aplicação ausente no registro consultado.
- Valor proposto: O percurso mantém Outros na forma de recebimento e avança por Cadastro de Eventos sem inclusões até Liberação de Crédito.
- Justificativa: Evidência específica do cadastro fornecida pelo usuário; preservar classificação e limites.

### ALT-PROP-016

- Operação: adicionar
- Alvo: AFR-PROP-016
- Afirmações: AFR-PROP-016
- Valor anterior: Não aplicável; aplicação ausente no registro consultado.
- Valor proposto: Na liberação, o usuário seleciona a última conta disponível, indicada como a mais atual no procedimento informado.
- Justificativa: Evidência específica do cadastro fornecida pelo usuário; preservar classificação e limites.

### ALT-PROP-017

- Operação: adicionar
- Alvo: AFR-PROP-017
- Afirmações: AFR-PROP-017
- Valor anterior: Não aplicável; aplicação ausente no registro consultado.
- Valor proposto: Após selecionar a conta, Incluir gera o registro de liberação na tabela à direita; em seguida o usuário confirma.
- Justificativa: Evidência específica do cadastro fornecida pelo usuário; preservar classificação e limites.

### ALT-PROP-018

- Operação: adicionar
- Alvo: AFR-PROP-018
- Afirmações: AFR-PROP-018
- Valor anterior: Não aplicável; aplicação ausente no registro consultado.
- Valor proposto: O recorte solicitado termina com o retorno à página inicial de Proposta após o cadastro; consulta, revisão e aprovação são acessadas pela Esteira e pertencem a etapa posterior.
- Justificativa: Evidência específica do cadastro fornecida pelo usuário; preservar classificação e limites.

### ALT-PROP-019

- Operação: adicionar
- Alvo: AFR-PROP-019
- Afirmações: AFR-PROP-019
- Valor anterior: Não aplicável; aplicação ausente no registro consultado.
- Valor proposto: O usuário informou relação N:N entre tipos de cálculo e produtos de BackOffice e utilização do cálculo 51 no teste, sem definir a correspondência exata.
- Justificativa: Evidência específica do cadastro fornecida pelo usuário; preservar classificação e limites.

### ALT-PROP-020

- Operação: registrar_pendencia
- Alvo: AFR-PROP-020
- Afirmações: AFR-PROP-020
- Valor anterior: Não aplicável; aplicação ausente no registro consultado.
- Valor proposto: A correspondência exata entre os tipos de cálculo e os produtos de BackOffice não está definida nas evidências fornecidas.
- Justificativa: Evidência específica do cadastro fornecida pelo usuário; preservar classificação e limites.

## Relações

### REL-PROP-001

- Origem: JOR-PROP-001
- Tipo: utiliza
- Destino: FUN-PROP-001
- Evidências: EVD-PROP-001; EVD-PROP-006
- Classificação: Confirmada

## Conflitos e pendências

### PEN-PROP-002

- Elemento afetado: AFR-PROP-020
- Informação ausente: Correspondência exata dos tipos de cálculo aos produtos de BackOffice.
- Evidências relacionadas: EVD-PROP-006
- Pergunta objetiva: Quais combinações de cálculo e produto determinam cada destino de BackOffice?
- Impacto: O usuário respondeu que não sabe ao certo, informou relação N:N e cálculo 51 utilizado; não permite afirmar um destino para esse cálculo.
- Condição de desbloqueio: Configuração ou tabela de correspondência confirmada para o ambiente.

## Histórico e vigência

- Conhecimento anterior: Aplicação ausente do registry.yaml revisão 3; sem contexto canônico disponível.
- Estado anterior: Não aplicável; propostas pendentes não constituem base aprovada.
- Nova vigência: Contexto de novembro de 2026, condicionado ao ambiente e ao produto informados.
- Motivo: Revisar a proposta PKG-2026-11-24-001 com a correção explícita do retorno e a mensagem confirmada; preservar somente a lacuna de correspondência ao BackOffice. A proposta anterior permanece histórica e deve ser reconciliada com esta antes da aplicação.
- Evidências: EVD-PROP-001; EVD-PROP-002; EVD-PROP-003; EVD-PROP-004; EVD-PROP-005; EVD-PROP-006

## Resumo

- Evidências: 7
- Confirmadas: 19
- Inferidas: 0
- Pendentes: 1
- Conflitos: 0
- Alterações propostas: 20

## Validação

- Identificação: aprovado — identidade explicitamente confirmada na conversa.
- Base de referência: aprovado — vínculo local validado; ausência de Função registrada.
- Isolamento entre aplicações: aprovado — proposta restrita a app-pine-funcao.
- Rastreabilidade: aprovado — afirmações vinculadas às evidências do usuário.
- Separação epistemológica: aprovado — desconhecidos mantidos como Pendentes.
- Conflitos e pendências: aprovado — mensagem confirmada em EVD-PROP-007; somente o mapeamento ao BackOffice permanece pendente.
- Histórico e vigência: aprovado — contexto e limites preservados.
- Ausência de BDD e tags: aprovado — pacote contém somente conhecimento funcional proposto.
- Prontidão para curadoria: pendente — aplicação nova requer prévia e confirmação próprias do Maintainer; lacunas preservadas.
- Resultado geral: pendente
- Bloqueios: Sem bloqueio para enfileirar a proposta; não aplicar sem o fluxo do Maintainer.
