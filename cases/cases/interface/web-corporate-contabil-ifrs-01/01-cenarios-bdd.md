# Cenários BDD

## Identificação

- **Aplicação:** Função (`app-pine-funcao`)
- **Escopo:** Interface Web Corporate Contábil IFRS, acesso e operações de abertura, pré-fechamento e fechamento para 009, 015, 016, 017 e 018. Cobertura Essencial; inicialização por CMD e desbloqueio fora da execução desta rodada.
- **Formato:** TestingQA 0.7.1 · Architect 1.4.5

## Funcionalidade

```gherkin
# language: pt
Funcionalidade: Operar as referências contábeis dos produtos pela interface
  Selecionar o produto no BackOffice e realizar abertura, pré-fechamento e fechamento com indicadores de conclusão definidos.
```

## Dados necessários

- **Usuário/perfil:** Usuário autenticado com acesso ao módulo e aos cinco produtos, com credenciais de teste seguras.
- **Ambiente:** Base de teste restaurável; registrar estado anterior e preparar separadamente cada produto e cada caso. As imagens mostram módulo 26.0402.118.0763; a versão da home é distinta.
- **Massa de dados:** Para cada produto: data de inicialização e seu dia útil anterior, calendário operacional com feriados, referência elegível de abertura, histórico identificável e movimentações para comparação. Selecionar diretamente o nome exibido no BackOffice; executar cada linha dos Exemplos com preparação própria.
- **Observações de negócio:** D-1 significa o dia útil imediatamente anterior à data de inicialização do produto, conforme o calendário operacional; não usa a data do computador. Executar casos de processamento com intervalo de conclusão observado, sem inventar SLA. Para D-1, preparar uma referência com intervalo apenas de dias úteis e outra que atravesse fim de semana/feriado conforme calendário do ambiente. No fechamento com comparação, não interromper o processo para impor prazo arbitrário.

### Tabela de produtos para seleção no BackOffice

| Código | Nome nas demais funcionalidades | Rótulo no BackOffice |
|---|---|---|
| 009 | ATIVOS 009
| 015 | ATIVOS REPASSES BNDES 015
| 016 | PASSIVOS BNDES REPASSES 016
| 017 | RES.2770 Ativo 017
| 018 | RES.2770 Passivo 018

Os Exemplos usam diretamente o rótulo exibido no BackOffice; os códigos desta tabela servem apenas para relacionar as nomenclaturas do sistema. O 038 — Funcafé Ativo foi fornecido como gabarito, mas não pertence aos cinco produtos desta execução.

## Tags utilizadas

| Tag | Significado |
|---|---|
| `@smoke` | Disponibilidade inicial de acesso ao módulo. |
| `@regressao` | Proteção de comportamentos existentes contra mudanças. |
| `@funcional` | Verificação funcional sustentada pelas evidências. |
| `@positivo` | Condição válida de uso especificada. |
| `@alternativo` | Retorno sem confirmação ou fechamento com comparação, distintos do percurso de referência. |
| `@modulo_web_corporate_contabil_ifrs` | Agrupamento pelo módulo contábil IFRS. |
| `@funcionalidade_fechamento` | Abertura, pré-fechamento, fechamento e operações de apoio. |
| `@alta` | Acesso ou processamento central com impacto no estado contábil. |
| `@media` | Retorno ou exportação auxiliar. |
| `@automatizar` | Candidato à automação; não representa implementação pronta. |

## Cenários BDD

### BDD-WCC-IFRS-001 — Acessar Web Corporate Contábil IFRS pela home

**Classificação:** Confirmado · **Prioridade:** Alta · **Execução:** Candidata à automação
**Rastreabilidade:** EVD-WCC-001; EVD-WCC-007
**Justificativa das tags:** A entrada do módulo é necessária para prosseguir nos testes contábeis; smoke limitado ao acesso. A regressão protege a navegação existente.
**Automação:** Repetição por produto com resultado observável. Preparar seletores, calendário, histórico da execução atual e restauração da massa; validar disponibilidade do ambiente e controle de estado antes da implementação.

```gherkin
@smoke @regressao @funcional @positivo @modulo_web_corporate_contabil_ifrs @funcionalidade_fechamento @alta @automatizar
Cenário: BDD-WCC-IFRS-001 — Acessar Web Corporate Contábil IFRS pela home
  Dado que o usuário está autenticado na home do Função
  Quando o usuário clica em Web Corporate Contabil IFRS
  Então a tela principal do módulo deve apresentar o seletor BackOffice
```

### BDD-WCC-IFRS-002 — Selecionar o produto no BackOffice

**Classificação:** Confirmado · **Prioridade:** Alta · **Execução:** Candidata à automação
**Rastreabilidade:** EVD-WCC-002; EVD-WCC-007
**Justificativa das tags:** Verifica a seleção válida dos cinco produtos no BackOffice, protegendo o direcionamento das operações seguintes.
**Automação:** Repetição por produto com resultado observável. Preparar seletores, calendário, histórico da execução atual e restauração da massa; validar disponibilidade do ambiente e controle de estado antes da implementação.

```gherkin
@regressao @funcional @positivo @modulo_web_corporate_contabil_ifrs @funcionalidade_fechamento @alta @automatizar
Esquema do Cenário: BDD-WCC-IFRS-002 — Selecionar o produto no BackOffice
  Dado que a tela principal de Web Corporate Contábil IFRS está aberta
  Quando o usuário seleciona no BackOffice o produto <produto>
  Então o seletor BackOffice deve apresentar o nome do produto <produto> selecionado
  Exemplos:
    | produto |
    | Corporate Ativo |
    | Repasse BNDES Ativo |
    | Repasse BNDES Passivo |
    | Repasse ME Ativo |
    | Repasse ME Passivo |

```

### BDD-WCC-IFRS-003 — Realizar abertura contábil para a referência preparada

**Classificação:** Confirmado · **Prioridade:** Alta · **Execução:** Candidata à automação
**Rastreabilidade:** EVD-WCC-003; EVD-WCC-004; EVD-WCC-007; EVD-WCC-008
**Justificativa das tags:** Protege a abertura da referência do produto; os indicadores definidos pelo usuário distinguem a execução atual de histórico antigo.
**Automação:** Repetição por produto com resultado observável. Preparar seletores, calendário, histórico da execução atual e restauração da massa; validar disponibilidade do ambiente e controle de estado antes da implementação.

```gherkin
@regressao @funcional @positivo @modulo_web_corporate_contabil_ifrs @funcionalidade_fechamento @alta @automatizar
Esquema do Cenário: BDD-WCC-IFRS-003 — Realizar abertura contábil para a referência preparada
  Dado que a tela principal de Web Corporate Contábil IFRS está aberta para o produto <produto> selecionado no BackOffice
  E a referência de abertura foi preparada para esse produto
  Quando o usuário abre o menu Fechamento
  E seleciona Abertura Contábil
  E o usuário informa a referência no campo Abertura do dia
  E clica em Confirmar
  E aguarda a conclusão da abertura
  Então a tabela do modal Abertura de saldos contábeis deve apresentar os passos da abertura realizada para a referência informada
  E as linhas da execução atual devem apresentar a data e a mensagem do respectivo processo
  Exemplos:
    | produto |
    | Corporate Ativo |
    | Repasse BNDES Ativo |
    | Repasse BNDES Passivo |
    | Repasse ME Ativo |
    | Repasse ME Passivo |

```

### BDD-WCC-IFRS-004 — Realizar pré-fechamento no dia útil anterior à inicialização

**Classificação:** Confirmado · **Prioridade:** Alta · **Execução:** Candidata à automação
**Rastreabilidade:** EVD-WCC-003; EVD-WCC-005; EVD-WCC-007; EVD-WCC-008
**Justificativa das tags:** Verifica a regra D-1 útil e a conclusão observável, protegendo a referência contábil de cada produto.
**Automação:** Repetição por produto com resultado observável. Preparar seletores, calendário, histórico da execução atual e restauração da massa; validar disponibilidade do ambiente e controle de estado antes da implementação.

```gherkin
@regressao @funcional @positivo @modulo_web_corporate_contabil_ifrs @funcionalidade_fechamento @alta @automatizar
Esquema do Cenário: BDD-WCC-IFRS-004 — Realizar pré-fechamento no dia útil anterior à inicialização
  Dado que a tela principal de Web Corporate Contábil IFRS está aberta para o produto <produto> selecionado no BackOffice
  E o produto está inicializado
  Quando o usuário abre o menu Fechamento
  E seleciona Pré-Fechamento Contábil
  E o usuário preenche Data do Pré-Fechamento com D-1
  E clica em Confirmar
  E aguarda a conclusão do processamento
  Então o modal deve apresentar Sucesso para a execução atual
  E o campo Data do Último Pré-Fechamento deve apresentar a data informada
  Exemplos:
    | produto |
    | Corporate Ativo |
    | Repasse BNDES Ativo |
    | Repasse BNDES Passivo |
    | Repasse ME Ativo |
    | Repasse ME Passivo |

```

### BDD-WCC-IFRS-005 — Realizar fechamento sem comparação de saldos

**Classificação:** Confirmado · **Prioridade:** Alta · **Execução:** Candidata à automação
**Rastreabilidade:** EVD-WCC-003; EVD-WCC-006; EVD-WCC-007; EVD-WCC-008
**Justificativa das tags:** Protege a conclusão do fechamento na referência pré-fechada com comparação desmarcada; sem presumir rejeições para datas não especificadas.
**Automação:** Repetição por produto com resultado observável. Preparar seletores, calendário, histórico da execução atual e restauração da massa; validar disponibilidade do ambiente e controle de estado antes da implementação.

```gherkin
@regressao @funcional @positivo @modulo_web_corporate_contabil_ifrs @funcionalidade_fechamento @alta @automatizar
Esquema do Cenário: BDD-WCC-IFRS-005 — Realizar fechamento sem comparação de saldos
  Dado que a tela principal de Web Corporate Contábil IFRS está aberta para o produto <produto> selecionado no BackOffice
  E o produto está inicializado
  E o pré-fechamento foi concluído para D-1
  Quando o usuário abre o menu Fechamento
  E seleciona Fechamento Contábil
  E o usuário mantém desmarcado o checkbox Comparar saldos na Posição de saldos sintético/analítico
  E o usuário preenche Fechar até o dia com D-1
  E clica em Confirmar
  E aguarda a conclusão do processamento
  Então o modal deve apresentar Sucesso para a execução atual
  E o campo Data do Último Fechamento deve apresentar a data informada
  Exemplos:
    | produto |
    | Corporate Ativo |
    | Repasse BNDES Ativo |
    | Repasse BNDES Passivo |
    | Repasse ME Ativo |
    | Repasse ME Passivo |

```

### BDD-WCC-IFRS-006 — Fechar com comparação de saldos e baixar o arquivo gerado

**Classificação:** Confirmado · **Prioridade:** Alta · **Execução:** Candidata à automação
**Rastreabilidade:** EVD-WCC-003; EVD-WCC-006; EVD-WCC-007; EVD-WCC-008
**Justificativa das tags:** Percurso alternativo ao fechamento sem comparação, com geração de arquivo confirmada pelo usuário. Verifica disponibilização; conteúdo, extensão e duração máxima não são critérios definidos.
**Automação:** Repetição por produto com resultado observável. Preparar seletores, calendário, histórico da execução atual e restauração da massa; tratar espera longa e captura do download, sem impor formato desconhecido.

```gherkin
@regressao @funcional @positivo @alternativo @modulo_web_corporate_contabil_ifrs @funcionalidade_fechamento @alta @automatizar
Esquema do Cenário: BDD-WCC-IFRS-006 — Fechar com comparação de saldos e baixar o arquivo gerado
  Dado que a tela principal de Web Corporate Contábil IFRS está aberta para o produto <produto> selecionado no BackOffice
  E o produto está inicializado
  E o pré-fechamento foi concluído para D-1
  E a base contém movimentações preparadas para essa referência
  Quando o usuário abre o menu Fechamento
  E seleciona Fechamento Contábil
  E o usuário informa D-1 em Fechar até o dia
  E marca Comparar saldos na Posição de saldos sintético/analítico
  E clica em Confirmar
  E aguarda a conclusão do processamento
  E clica em Baixar Arquivo
  Então o arquivo gerado pela opção de comparação deve ser disponibilizado para download
  E o modal deve apresentar Sucesso para a execução atual
  E o campo Data do Último Fechamento deve apresentar a data informada
  Exemplos:
    | produto |
    | Corporate Ativo |
    | Repasse BNDES Ativo |
    | Repasse BNDES Passivo |
    | Repasse ME Ativo |
    | Repasse ME Passivo |

```

### BDD-WCC-IFRS-007 — Voltar de Abertura Contábil sem executar a rotina

**Classificação:** Confirmado · **Prioridade:** Média · **Execução:** Candidata à automação
**Rastreabilidade:** EVD-WCC-003; EVD-WCC-004; EVD-WCC-007
**Justificativa das tags:** Retorno alternativo à confirmação; protege contra execução indevida ao sair. Verificar estado após reabrir a rotina, sem presumir persistência do preenchimento.
**Automação:** Repetição por produto com resultado observável. Preparar seletores, calendário, histórico da execução atual e restauração da massa; validar disponibilidade do ambiente e controle de estado antes da implementação.

```gherkin
@regressao @funcional @positivo @alternativo @modulo_web_corporate_contabil_ifrs @funcionalidade_fechamento @media @automatizar
Esquema do Cenário: BDD-WCC-IFRS-007 — Voltar de Abertura Contábil sem executar a rotina
  Dado que a tela principal de Web Corporate Contábil IFRS está aberta para o produto <produto> selecionado no BackOffice
  E o estado contábil e o histórico anteriores do produto foram registrados
  Quando o usuário abre o menu Fechamento
  E seleciona Abertura Contábil
  E o usuário preenche o campo Abertura do dia com uma referência preparada
  E Confirmar ainda não foi acionado
  E o usuário clica em Voltar
  Então a tela principal de Web Corporate Contábil IFRS deve ser exibida
  E a rotina Abertura Contábil não deve ser executada para a referência preenchida
  Exemplos:
    | produto |
    | Corporate Ativo |
    | Repasse BNDES Ativo |
    | Repasse BNDES Passivo |
    | Repasse ME Ativo |
    | Repasse ME Passivo |

```

### BDD-WCC-IFRS-008 — Voltar de Pré-Fechamento Contábil sem executar a rotina

**Classificação:** Confirmado · **Prioridade:** Média · **Execução:** Candidata à automação
**Rastreabilidade:** EVD-WCC-003; EVD-WCC-005; EVD-WCC-007
**Justificativa das tags:** Retorno alternativo à confirmação; protege contra execução indevida ao sair. Verificar estado após reabrir a rotina, sem presumir persistência do preenchimento.
**Automação:** Repetição por produto com resultado observável. Preparar seletores, calendário, histórico da execução atual e restauração da massa; validar disponibilidade do ambiente e controle de estado antes da implementação.

```gherkin
@regressao @funcional @positivo @alternativo @modulo_web_corporate_contabil_ifrs @funcionalidade_fechamento @media @automatizar
Esquema do Cenário: BDD-WCC-IFRS-008 — Voltar de Pré-Fechamento Contábil sem executar a rotina
  Dado que a tela principal de Web Corporate Contábil IFRS está aberta para o produto <produto> selecionado no BackOffice
  E o estado contábil e o histórico anteriores do produto foram registrados
  Quando o usuário abre o menu Fechamento
  E seleciona Pré-Fechamento Contábil
  E o usuário preenche o campo Data do Pré-Fechamento com uma referência preparada
  E Confirmar ainda não foi acionado
  E o usuário clica em Voltar
  Então a tela principal de Web Corporate Contábil IFRS deve ser exibida
  E a rotina Pré-Fechamento Contábil não deve ser executada para a referência preenchida
  Exemplos:
    | produto |
    | Corporate Ativo |
    | Repasse BNDES Ativo |
    | Repasse BNDES Passivo |
    | Repasse ME Ativo |
    | Repasse ME Passivo |

```

### BDD-WCC-IFRS-009 — Voltar de Fechamento Contábil sem executar a rotina

**Classificação:** Confirmado · **Prioridade:** Média · **Execução:** Candidata à automação
**Rastreabilidade:** EVD-WCC-003; EVD-WCC-006; EVD-WCC-007
**Justificativa das tags:** Retorno alternativo à confirmação; protege contra execução indevida ao sair. Verificar estado após reabrir a rotina, sem presumir persistência do preenchimento.
**Automação:** Repetição por produto com resultado observável. Preparar seletores, calendário, histórico da execução atual e restauração da massa; validar disponibilidade do ambiente e controle de estado antes da implementação.

```gherkin
@regressao @funcional @positivo @alternativo @modulo_web_corporate_contabil_ifrs @funcionalidade_fechamento @media @automatizar
Esquema do Cenário: BDD-WCC-IFRS-009 — Voltar de Fechamento Contábil sem executar a rotina
  Dado que a tela principal de Web Corporate Contábil IFRS está aberta para o produto <produto> selecionado no BackOffice
  E o estado contábil e o histórico anteriores do produto foram registrados
  Quando o usuário abre o menu Fechamento
  E seleciona Fechamento Contábil
  E o usuário preenche o campo Fechar até o dia com uma referência preparada
  E Confirmar ainda não foi acionado
  E o usuário clica em Voltar
  Então a tela principal de Web Corporate Contábil IFRS deve ser exibida
  E a rotina Fechamento Contábil não deve ser executada para a referência preenchida
  Exemplos:
    | produto |
    | Corporate Ativo |
    | Repasse BNDES Ativo |
    | Repasse BNDES Passivo |
    | Repasse ME Ativo |
    | Repasse ME Passivo |

```

### BDD-WCC-IFRS-010 — Exportar o log de Abertura Contábil

**Classificação:** Confirmado · **Prioridade:** Média · **Execução:** Candidata à automação
**Rastreabilidade:** EVD-WCC-003; EVD-WCC-004; EVD-WCC-007
**Justificativa das tags:** Protege a exportação existente para diagnóstico, limitada aos registros identificados; sem impor extensão, layout ou nome de arquivo.
**Automação:** Repetição por produto com resultado observável. Preparar seletores, calendário, histórico da execução atual e restauração da massa; validar disponibilidade do ambiente e controle de estado antes da implementação.

```gherkin
@regressao @funcional @positivo @modulo_web_corporate_contabil_ifrs @funcionalidade_fechamento @media @automatizar
Esquema do Cenário: BDD-WCC-IFRS-010 — Exportar o log de Abertura Contábil
  Dado que a tela principal de Web Corporate Contábil IFRS está aberta para o produto <produto> selecionado no BackOffice
  E existe uma execução identificada da rotina realizada pela interface
  Quando o usuário abre o menu Fechamento
  E seleciona Abertura Contábil
  E localiza os registros dessa execução na tabela do modal
  E o usuário clica em Exportar Log
  Então deve ser exportado um log dos processos da rotina para o produto selecionado
  E o log deve conter os registros da execução identificada na tabela
  Exemplos:
    | produto |
    | Corporate Ativo |
    | Repasse BNDES Ativo |
    | Repasse BNDES Passivo |
    | Repasse ME Ativo |
    | Repasse ME Passivo |

```

### BDD-WCC-IFRS-011 — Exportar o log de Pré-Fechamento Contábil

**Classificação:** Confirmado · **Prioridade:** Média · **Execução:** Candidata à automação
**Rastreabilidade:** EVD-WCC-003; EVD-WCC-005; EVD-WCC-007
**Justificativa das tags:** Protege a exportação existente para diagnóstico, limitada aos registros identificados; sem impor extensão, layout ou nome de arquivo.
**Automação:** Repetição por produto com resultado observável. Preparar seletores, calendário, histórico da execução atual e restauração da massa; validar disponibilidade do ambiente e controle de estado antes da implementação.

```gherkin
@regressao @funcional @positivo @modulo_web_corporate_contabil_ifrs @funcionalidade_fechamento @media @automatizar
Esquema do Cenário: BDD-WCC-IFRS-011 — Exportar o log de Pré-Fechamento Contábil
  Dado que a tela principal de Web Corporate Contábil IFRS está aberta para o produto <produto> selecionado no BackOffice
  E existe uma execução identificada da rotina realizada pela interface
  Quando o usuário abre o menu Fechamento
  E seleciona Pré-Fechamento Contábil
  E localiza os registros dessa execução na tabela do modal
  E o usuário clica em Exportar Log
  Então deve ser exportado um log dos processos da rotina para o produto selecionado
  E o log deve conter os registros da execução identificada na tabela
  Exemplos:
    | produto |
    | Corporate Ativo |
    | Repasse BNDES Ativo |
    | Repasse BNDES Passivo |
    | Repasse ME Ativo |
    | Repasse ME Passivo |

```

### BDD-WCC-IFRS-012 — Exportar o log de Fechamento Contábil

**Classificação:** Confirmado · **Prioridade:** Média · **Execução:** Candidata à automação
**Rastreabilidade:** EVD-WCC-003; EVD-WCC-006; EVD-WCC-007
**Justificativa das tags:** Protege a exportação existente para diagnóstico, limitada aos registros identificados; sem impor extensão, layout ou nome de arquivo.
**Automação:** Repetição por produto com resultado observável. Preparar seletores, calendário, histórico da execução atual e restauração da massa; validar disponibilidade do ambiente e controle de estado antes da implementação.

```gherkin
@regressao @funcional @positivo @modulo_web_corporate_contabil_ifrs @funcionalidade_fechamento @media @automatizar
Esquema do Cenário: BDD-WCC-IFRS-012 — Exportar o log de Fechamento Contábil
  Dado que a tela principal de Web Corporate Contábil IFRS está aberta para o produto <produto> selecionado no BackOffice
  E existe uma execução identificada da rotina realizada pela interface
  Quando o usuário abre o menu Fechamento
  E seleciona Fechamento Contábil
  E localiza os registros dessa execução na tabela do modal
  E o usuário clica em Exportar Log
  Então deve ser exportado um log dos processos da rotina para o produto selecionado
  E o log deve conter os registros da execução identificada na tabela
  Exemplos:
    | produto |
    | Corporate Ativo |
    | Repasse BNDES Ativo |
    | Repasse BNDES Passivo |
    | Repasse ME Ativo |
    | Repasse ME Passivo |

```

### BDD-WCC-IFRS-013 — Manter a última data de pré-fechamento após nova inicialização

**Classificação:** Confirmado · **Prioridade:** Alta · **Execução:** Candidata à automação
**Rastreabilidade:** EVD-WCC-007; EVD-WCC-008
**Justificativa das tags:** Protege a referência que permanece após avançar a inicialização. Verifica a exibição da data, sem inventar o fluxo de registro de movimentações.
**Automação:** Repetição por produto com resultado observável. Preparar seletores, calendário, histórico da execução atual e restauração da massa; validar disponibilidade do ambiente e controle de estado antes da implementação.

```gherkin
@regressao @funcional @positivo @modulo_web_corporate_contabil_ifrs @funcionalidade_fechamento @alta @automatizar
Esquema do Cenário: BDD-WCC-IFRS-013 — Manter a última data de pré-fechamento após nova inicialização
  Dado que o produto <produto> possui pré-fechamento e fechamento concluídos para o dia útil anterior à sua inicialização anterior
  E o produto foi novamente inicializado no próximo dia útil por preparação externa a estes cenários
  E nenhum novo pré-fechamento foi executado após essa inicialização
  Quando o usuário seleciona o produto <produto> no BackOffice
  E abre o menu Fechamento
  E seleciona Pré-Fechamento Contábil
  Então o campo Data do Último Pré-Fechamento deve continuar apresentando a data do último pré-fechamento concluído
  E essa data deve corresponder a dois dias úteis anteriores à nova data de inicialização
  Exemplos:
    | produto |
    | Corporate Ativo |
    | Repasse BNDES Ativo |
    | Repasse BNDES Passivo |
    | Repasse ME Ativo |
    | Repasse ME Passivo |

```
