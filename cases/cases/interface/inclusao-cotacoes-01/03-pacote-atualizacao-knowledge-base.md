# Pacote de Atualização da Knowledge Base

## Identificação

- Aplicação: Função
- Application ID: app-pine-funcao
- Package ID: PKG-2026-11-23-002
- Versão do contrato: 1
- Revisão esperada: 0
- Run de origem: interface/inclusao-cotacoes-01
- Resultado: com_alteracoes
- Estado de curadoria inicial: proposto
- Base de referência: registry.yaml revisão 3; Função ausente. Nenhum pacote pendente utilizado como fonte canônica.
- Operação proposta: inicializacao
- Data ou contexto: 2026-11-23; identidade confirmada anteriormente na conversa.
- Versão e ambiente: Capturas de Tabelas Corporativas 26.0824.123.5180; ambiente de execução não confirmado.
- Escopo: Inclusão de cotações pela interface Tabelas WEB.
- **Formato:** TestingQA 0.7.1 · Architect 1.4.5

## Evidências

### EVD-COT-001

- Tipo: Imagem 1
- Natureza: observada
- Origem: Material do usuário nesta conversa sobre inclusão de cotações.
- Referência: Home, destaque em Tabelas Corporativas
- Data e versão: Contexto de novembro de 2026; capturas históricas, versão do módulo 26.0824.123.5180.
- Ambiente, perfil ou canal: Interface web; perfil não generalizado.
- Escopo: Inclusão de cotação e controles associados.
- Limitações: Imagens sustentam apresentação; efeitos são especificados pelo usuário. Captura adicional anexada à fala de código inexistente mostra sucesso, não comprova Registro Inexistente.

### EVD-COT-002

- Tipo: Imagem 2
- Natureza: observada
- Origem: Material do usuário nesta conversa sobre inclusão de cotações.
- Referência: Seletor BackOffice com Tabelas WEB
- Data e versão: Contexto de novembro de 2026; capturas históricas, versão do módulo 26.0824.123.5180.
- Ambiente, perfil ou canal: Interface web; perfil não generalizado.
- Escopo: Inclusão de cotação e controles associados.
- Limitações: Imagens sustentam apresentação; efeitos são especificados pelo usuário. Captura adicional anexada à fala de código inexistente mostra sucesso, não comprova Registro Inexistente.

### EVD-COT-003

- Tipo: Imagem 3
- Natureza: observada
- Origem: Material do usuário nesta conversa sobre inclusão de cotações.
- Referência: Operacional → Cotações → Incluir
- Data e versão: Contexto de novembro de 2026; capturas históricas, versão do módulo 26.0824.123.5180.
- Ambiente, perfil ou canal: Interface web; perfil não generalizado.
- Escopo: Inclusão de cotação e controles associados.
- Limitações: Imagens sustentam apresentação; efeitos são especificados pelo usuário. Captura adicional anexada à fala de código inexistente mostra sucesso, não comprova Registro Inexistente.

### EVD-COT-004

- Tipo: Imagem 4
- Natureza: observada
- Origem: Material do usuário nesta conversa sobre inclusão de cotações.
- Referência: Inclusão de Cotações, código e comandos
- Data e versão: Contexto de novembro de 2026; capturas históricas, versão do módulo 26.0824.123.5180.
- Ambiente, perfil ou canal: Interface web; perfil não generalizado.
- Escopo: Inclusão de cotação e controles associados.
- Limitações: Imagens sustentam apresentação; efeitos são especificados pelo usuário. Captura adicional anexada à fala de código inexistente mostra sucesso, não comprova Registro Inexistente.

### EVD-COT-005

- Tipo: Imagem 5
- Natureza: observada
- Origem: Material do usuário nesta conversa sobre inclusão de cotações.
- Referência: Cadastro de Cotações; campos cinza e amarelos; exemplo 11, US$-V e reais
- Data e versão: Contexto de novembro de 2026; capturas históricas, versão do módulo 26.0824.123.5180.
- Ambiente, perfil ou canal: Interface web; perfil não generalizado.
- Escopo: Inclusão de cotação e controles associados.
- Limitações: Imagens sustentam apresentação; efeitos são especificados pelo usuário. Captura adicional anexada à fala de código inexistente mostra sucesso, não comprova Registro Inexistente.

### EVD-COT-006

- Tipo: Imagem 6
- Natureza: observada
- Origem: Material do usuário nesta conversa sobre inclusão de cotações.
- Referência: Alerta Inclusão realizada com sucesso!
- Data e versão: Contexto de novembro de 2026; capturas históricas, versão do módulo 26.0824.123.5180.
- Ambiente, perfil ou canal: Interface web; perfil não generalizado.
- Escopo: Inclusão de cotação e controles associados.
- Limitações: Imagens sustentam apresentação; efeitos são especificados pelo usuário. Captura adicional anexada à fala de código inexistente mostra sucesso, não comprova Registro Inexistente.

### EVD-COT-007

- Tipo: Descrição do fluxo pelo usuário
- Natureza: especificada
- Origem: Material do usuário nesta conversa sobre inclusão de cotações.
- Referência: Mensagem com seis imagens e descrição de inclusão, cancelamento e retorno
- Data e versão: Contexto de novembro de 2026; capturas históricas, versão do módulo 26.0824.123.5180.
- Ambiente, perfil ou canal: Interface web; perfil não generalizado.
- Escopo: Inclusão de cotação e controles associados.
- Limitações: Imagens sustentam apresentação; efeitos são especificados pelo usuário. Captura adicional anexada à fala de código inexistente mostra sucesso, não comprova Registro Inexistente.

### EVD-COT-008

- Tipo: Esclarecimentos do usuário
- Natureza: especificada
- Origem: Material do usuário nesta conversa sobre inclusão de cotações.
- Referência: Datas pela última inclusão; Cancelar limpa; Voltar do cadastro não salva; 98 gera Registro Inexistente
- Data e versão: Contexto de novembro de 2026; capturas históricas, versão do módulo 26.0824.123.5180.
- Ambiente, perfil ou canal: Interface web; perfil não generalizado.
- Escopo: Inclusão de cotação e controles associados.
- Limitações: Imagens sustentam apresentação; efeitos são especificados pelo usuário. Captura adicional anexada à fala de código inexistente mostra sucesso, não comprova Registro Inexistente.

## Entidades afetadas

- Módulo: MOD-TCORP — Tabelas Corporativas
- Funcionalidade: FUN-COT — Inclusão de cotações

## Afirmações

### AFR-COT-001

- Conteúdo: A inclusão é acessada por Tabelas Corporativas, seleção de Tabelas WEB no BackOffice e Operacional → Cotações → Incluir.
- Entidade: FUN-COT
- Classificação: Confirmada
- Natureza: especificada
- Evidências: EVD-COT-001; EVD-COT-002; EVD-COT-003; EVD-COT-007
- Escopo: Interface Tabelas WEB; exemplos delimitados ao indexador informado.
- Vigência: Contexto fornecido pelo usuário em novembro de 2026; implantação não datada.
- Limitações: Sem afirmar calendário de avanço das datas, limites numéricos, cálculo de Valor Acumulado ou inicialização concluída por CMD.
- Confirmação necessária: Não aplicável à afirmação delimitada.

### AFR-COT-002

- Conteúdo: Confirmar um código de indexador existente na Inclusão de Cotações abre Cadastro de Cotações para esse indexador.
- Entidade: FUN-COT
- Classificação: Confirmada
- Natureza: especificada
- Evidências: EVD-COT-004; EVD-COT-005; EVD-COT-007
- Escopo: Interface Tabelas WEB; exemplos delimitados ao indexador informado.
- Vigência: Contexto fornecido pelo usuário em novembro de 2026; implantação não datada.
- Limitações: Sem afirmar calendário de avanço das datas, limites numéricos, cálculo de Valor Acumulado ou inicialização concluída por CMD.
- Confirmação necessária: Não aplicável à afirmação delimitada.

### AFR-COT-003

- Conteúdo: No cadastro, somente Taxa/Índice e Tipo permitem edição pelo usuário; os demais campos são informativos.
- Entidade: FUN-COT
- Classificação: Confirmada
- Natureza: especificada
- Evidências: EVD-COT-005; EVD-COT-007
- Escopo: Interface Tabelas WEB; exemplos delimitados ao indexador informado.
- Vigência: Contexto fornecido pelo usuário em novembro de 2026; implantação não datada.
- Limitações: Sem afirmar calendário de avanço das datas, limites numéricos, cálculo de Valor Acumulado ou inicialização concluída por CMD.
- Confirmação necessária: Não aplicável à afirmação delimitada.

### AFR-COT-004

- Conteúdo: A referência temporal da inclusão é determinada com base na última inclusão daquele indexador; não é preenchida pelo usuário.
- Entidade: FUN-COT
- Classificação: Confirmada
- Natureza: especificada
- Evidências: EVD-COT-005; EVD-COT-008
- Escopo: Interface Tabelas WEB; exemplos delimitados ao indexador informado.
- Vigência: Contexto fornecido pelo usuário em novembro de 2026; implantação não datada.
- Limitações: Sem afirmar calendário de avanço das datas, limites numéricos, cálculo de Valor Acumulado ou inicialização concluída por CMD.
- Confirmação necessária: Não aplicável à afirmação delimitada.

### AFR-COT-005

- Conteúdo: Confirmar o cadastro com os dados da cotação apresenta Inclusão realizada com sucesso!.
- Entidade: FUN-COT
- Classificação: Confirmada
- Natureza: especificada
- Evidências: EVD-COT-005; EVD-COT-006; EVD-COT-007
- Escopo: Interface Tabelas WEB; exemplos delimitados ao indexador informado.
- Vigência: Contexto fornecido pelo usuário em novembro de 2026; implantação não datada.
- Limitações: Sem afirmar calendário de avanço das datas, limites numéricos, cálculo de Valor Acumulado ou inicialização concluída por CMD.
- Confirmação necessária: Não aplicável à afirmação delimitada.

### AFR-COT-006

- Conteúdo: Cancelar limpa os dados editados e mantém a tela aberta.
- Entidade: FUN-COT
- Classificação: Confirmada
- Natureza: especificada
- Evidências: EVD-COT-004; EVD-COT-005; EVD-COT-008
- Escopo: Interface Tabelas WEB; exemplos delimitados ao indexador informado.
- Vigência: Contexto fornecido pelo usuário em novembro de 2026; implantação não datada.
- Limitações: Sem afirmar calendário de avanço das datas, limites numéricos, cálculo de Valor Acumulado ou inicialização concluída por CMD.
- Confirmação necessária: Não aplicável à afirmação delimitada.

### AFR-COT-007

- Conteúdo: Voltar no cadastro retorna à seleção do indexador sem salvar a cotação.
- Entidade: FUN-COT
- Classificação: Confirmada
- Natureza: especificada
- Evidências: EVD-COT-005; EVD-COT-008
- Escopo: Interface Tabelas WEB; exemplos delimitados ao indexador informado.
- Vigência: Contexto fornecido pelo usuário em novembro de 2026; implantação não datada.
- Limitações: Sem afirmar calendário de avanço das datas, limites numéricos, cálculo de Valor Acumulado ou inicialização concluída por CMD.
- Confirmação necessária: Não aplicável à afirmação delimitada.

### AFR-COT-008

- Conteúdo: Voltar na seleção de indexador retorna à tela anterior.
- Entidade: FUN-COT
- Classificação: Confirmada
- Natureza: especificada
- Evidências: EVD-COT-004; EVD-COT-007; EVD-COT-008
- Escopo: Interface Tabelas WEB; exemplos delimitados ao indexador informado.
- Vigência: Contexto fornecido pelo usuário em novembro de 2026; implantação não datada.
- Limitações: Sem afirmar calendário de avanço das datas, limites numéricos, cálculo de Valor Acumulado ou inicialização concluída por CMD.
- Confirmação necessária: Não aplicável à afirmação delimitada.

### AFR-COT-009

- Conteúdo: Para o exemplo de código inexistente 98, o sistema informa Registro Inexistente.
- Entidade: FUN-COT
- Classificação: Confirmada
- Natureza: especificada
- Evidências: EVD-COT-008
- Escopo: Interface Tabelas WEB; exemplos delimitados ao indexador informado.
- Vigência: Contexto fornecido pelo usuário em novembro de 2026; implantação não datada.
- Limitações: Sem afirmar calendário de avanço das datas, limites numéricos, cálculo de Valor Acumulado ou inicialização concluída por CMD.
- Confirmação necessária: Não aplicável à afirmação delimitada.

### AFR-COT-010

- Conteúdo: Na captura de cadastro, o código 11 é exibido com indexador US$-V e Tipo reais; o usuário o identifica como dólar.
- Entidade: FUN-COT
- Classificação: Confirmada
- Natureza: especificada
- Evidências: EVD-COT-005; EVD-COT-007
- Escopo: Interface Tabelas WEB; exemplos delimitados ao indexador informado.
- Vigência: Contexto fornecido pelo usuário em novembro de 2026; implantação não datada.
- Limitações: Sem afirmar calendário de avanço das datas, limites numéricos, cálculo de Valor Acumulado ou inicialização concluída por CMD.
- Confirmação necessária: Não aplicável à afirmação delimitada.

## Alterações propostas

### ALT-COT-001

- Operação: adicionar
- Alvo: FUN-COT
- Afirmações: AFR-COT-001
- Valor anterior: Não aplicável; aplicação ausente no registro.
- Valor proposto: Incorporar AFR-COT-001 com origem e limites preservados.
- Justificativa: Descrição atual e esclarecimentos explícitos do usuário.

### ALT-COT-002

- Operação: adicionar
- Alvo: FUN-COT
- Afirmações: AFR-COT-002
- Valor anterior: Não aplicável; aplicação ausente no registro.
- Valor proposto: Incorporar AFR-COT-002 com origem e limites preservados.
- Justificativa: Descrição atual e esclarecimentos explícitos do usuário.

### ALT-COT-003

- Operação: adicionar
- Alvo: FUN-COT
- Afirmações: AFR-COT-003
- Valor anterior: Não aplicável; aplicação ausente no registro.
- Valor proposto: Incorporar AFR-COT-003 com origem e limites preservados.
- Justificativa: Descrição atual e esclarecimentos explícitos do usuário.

### ALT-COT-004

- Operação: adicionar
- Alvo: FUN-COT
- Afirmações: AFR-COT-004
- Valor anterior: Não aplicável; aplicação ausente no registro.
- Valor proposto: Incorporar AFR-COT-004 com origem e limites preservados.
- Justificativa: Descrição atual e esclarecimentos explícitos do usuário.

### ALT-COT-005

- Operação: adicionar
- Alvo: FUN-COT
- Afirmações: AFR-COT-005
- Valor anterior: Não aplicável; aplicação ausente no registro.
- Valor proposto: Incorporar AFR-COT-005 com origem e limites preservados.
- Justificativa: Descrição atual e esclarecimentos explícitos do usuário.

### ALT-COT-006

- Operação: adicionar
- Alvo: FUN-COT
- Afirmações: AFR-COT-006
- Valor anterior: Não aplicável; aplicação ausente no registro.
- Valor proposto: Incorporar AFR-COT-006 com origem e limites preservados.
- Justificativa: Descrição atual e esclarecimentos explícitos do usuário.

### ALT-COT-007

- Operação: adicionar
- Alvo: FUN-COT
- Afirmações: AFR-COT-007
- Valor anterior: Não aplicável; aplicação ausente no registro.
- Valor proposto: Incorporar AFR-COT-007 com origem e limites preservados.
- Justificativa: Descrição atual e esclarecimentos explícitos do usuário.

### ALT-COT-008

- Operação: adicionar
- Alvo: FUN-COT
- Afirmações: AFR-COT-008
- Valor anterior: Não aplicável; aplicação ausente no registro.
- Valor proposto: Incorporar AFR-COT-008 com origem e limites preservados.
- Justificativa: Descrição atual e esclarecimentos explícitos do usuário.

### ALT-COT-009

- Operação: adicionar
- Alvo: FUN-COT
- Afirmações: AFR-COT-009
- Valor anterior: Não aplicável; aplicação ausente no registro.
- Valor proposto: Incorporar AFR-COT-009 com origem e limites preservados.
- Justificativa: Descrição atual e esclarecimentos explícitos do usuário.

### ALT-COT-010

- Operação: adicionar
- Alvo: FUN-COT
- Afirmações: AFR-COT-010
- Valor anterior: Não aplicável; aplicação ausente no registro.
- Valor proposto: Incorporar AFR-COT-010 com origem e limites preservados.
- Justificativa: Descrição atual e esclarecimentos explícitos do usuário.

## Relações

### REL-COT-001

- Origem: MOD-TCORP
- Tipo: disponibiliza
- Destino: FUN-COT
- Evidências: EVD-COT-001; EVD-COT-003; EVD-COT-007
- Classificação: Confirmada

## Conflitos e pendências

Sem dúvida material restante para os efeitos delimitados. A captura adicional reenviada mostra sucesso; a mensagem de indexador inexistente é sustentada exclusivamente pela especificação textual EVD-COT-008, sem alegar observação visual. Regra de avanço de datas, formato/limites da taxa e restauração de estado não são definidos por esta proposta.

## Histórico e vigência

- Conhecimento anterior: Registro revisão 3 sem Função; propostas pendentes não equivalem a conhecimento consolidado.
- Estado anterior: Sem base canônica própria recuperável.
- Nova vigência: Contexto das evidências e esclarecimentos de novembro de 2026.
- Motivo: Proposta inicial do recorte inclusão de cotações.
- Evidências: EVD-COT-007; EVD-COT-008

## Resumo

- Evidências: 8
- Confirmadas: 10
- Inferidas: 0
- Pendentes: 0
- Conflitos: 0
- Alterações propostas: 10

## Validação

- Identificação: aprovado — Função/app-pine-funcao confirmados na conversa.
- Base de referência: aprovado — Registro revisão 3 consultado, aplicação ausente.
- Isolamento entre aplicações: aprovado — Somente inclusão no Função.
- Rastreabilidade: aprovado — Imagens e mensagens identificadas individualmente.
- Separação epistemológica: aprovado — Especificação textual diferenciada de observação visual.
- Conflitos e pendências: aprovado — Captura de sucesso não usada como comprovação da mensagem de erro.
- Histórico e vigência: aprovado — Contexto temporal delimitado, sem promover pacotes anteriores.
- Ausência de BDD e tags: aprovado — Somente conhecimento funcional nesta proposta.
- Prontidão para curadoria: aprovado — Proposta revisável; escrita requer fluxo próprio.
- Resultado geral: aprovado
- Bloqueios: Não aplicável à proposta delimitada.
