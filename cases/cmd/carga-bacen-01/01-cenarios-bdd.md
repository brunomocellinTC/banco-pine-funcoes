# Cenários BDD

## Identificação

- **Aplicação:** Função (`app-pine-funcao`)
- **Escopo:** Cobertura Essencial de carga Bacen após o fechamento, com conclusão a confirmar por CMD para 009, 015, 016, 017 e 018. Acesso ao servidor como pré-requisito; sem execução de comandos nesta elaboração.
- **Formato:** TestingQA 0.7.1 · Architect 1.4.5

## Funcionalidade

```gherkin
# language: pt
Funcionalidade: Executar a carga Bacen diária por CMD
  O usuário executa a rotina do produto no ponto correto do ciclo operacional.
```

## Pré-condições

- **Pré-teste de acesso ao servidor:** usuário já conectado ao servidor correto do ambiente de teste, por acesso autorizado, com CMD disponível e permissão para os executáveis e diretórios necessários. Host, método de conexão e credenciais são definidos pelo ambiente e não foram fornecidos; não registrar segredos. O acesso é pré-requisito, não cenário de autenticação.
- Base de teste preparada e restaurável, com produto, data de inicialização, referência anterior, referência da carga limitada ao último fechamento contábil e evidências das movimentações identificadas. Confirmar o estado antes de escolher o processo a executar; a ordem dos arquivos não autoriza executá-los em sequência sem uso do sistema.

## Dados necessários

- **Usuário/perfil:** Operador de teste com acesso autorizado ao servidor, CMD e produto selecionado.
- **Ambiente:** Servidor Windows de teste, executáveis implantados nos diretórios fornecidos e diretório de saída C:\TEMP\ disponível. Versão dos executáveis não informada. Preservar os logs da execução anterior por procedimento do ambiente; o anexo contém comandos DEL concatenados, que não fazem parte destes cenários.
- **Massa de dados:** Produtos 009, 015, 016, 017 e 018, cada qual com datas e estado inicial preparados independentemente. FUNCAFE ATIVO 038 foi excluído expressamente; 039 e 800 não fazem parte do recorte. Não usar datas históricas fixas do anexo.
- **Observações de negócio:** Conforme o usuário, apenas a inicialização não está disponível pela interface; pré-fechamento, fechamento e carga também podem ser executados pela interface, mas aqui são documentados por CMD. O anexo é a fonte dos nomes de diretórios e executáveis; a inicialização dos cinco produtos utiliza o mesmo diretório FI.Atacado.CMD e distingue o produto por CODBACK. Os diretórios contábeis variam por produto. Substituir as datas DD/MM/AAAA e os marcadores entre chaves antes da execução manual. Os blocos são modelos de comandos documentados, não comandos executados nesta elaboração.

**Ciclo operacional obrigatório:** inicializar o produto na data preparada → utilizar o sistema e realizar as movimentações daquele dia → executar o pré-fechamento para a referência anterior preparada → executar o fechamento dessa referência → executar a carga Bacen para a referência preparada, no máximo até o último fechamento contábil do produto. Esses processos não formam um lote ininterrupto: entre inicialização e pré-fechamento existe o trabalho funcional no sistema. Não executar pré-fechamento logo após inicializar sem cumprir as movimentações previstas. A referência do pré-fechamento/fechamento é anterior à inicialização, sem restrição a dia útil; a data de referência da carga não pode ultrapassar a data do último fechamento contábil do produto. Exemplo ajustado: inicialização e movimentações em 21/10, pré-fechamento e fechamento em 20/10, carga Bacen com referência máxima de 20/10. A referência 21/10 somente poderá ser carregada após o fechamento contábil dessa data. As datas do exemplo não são massa fixa.

**Modelo da carga Bacen por CMD:** o anexo especifica TIPOCARGA=D e TIPOPROCESSAMENTO=3; preservar esses valores sem equipará-los à opção Mensal documentada para a interface. DATAREFERENCIA recebe a referência preparada, limitada à data do último fechamento contábil do produto; não utilizar uma data movimentada ainda não fechada. O significado detalhado de TIPOPROCESSAMENTO=3 não foi fornecido.

```cmd
cd /d D:\Sistemas\Funcao\LinhasDeComando\FI.BACEN.CMD_IFRS
bacen_cmd.exe BCRCSCNT DATAREFERENCIA=DD/MM/AAAA PRODUTO={codigo_produto} TIPOCARGA=D TIPOPROCESSAMENTO=3 DIRERRO=C:\TEMP\ ARQERRO=ERRO.TXT DIRLOG=C:\TEMP\ ARQLOG=LOG.TXT
```

## Tags utilizadas

| Tag | Significado |
|---|---|
| `@funcional` | Rotina funcional por linha de comando. |
| `@positivo` | Produto, datas e estado válidos para o percurso. |
| `@modulo_web_bacen_ifrs` | Agrupamento funcional da rotina. |
| `@funcionalidade_carga_bacen_cmd` | Agrupamento pelo processo em CMD. |
| `@alta` | Continuidade central do ciclo operacional. |
| `@automatizar` | Candidato à automação, sem implementação pronta. |
| `@condicional` | Conclusão da carga ainda não confirmada. |
| `@resultado_pendente` | Resultado observável não definido. |

## Cenários BDD

### BDD-CMD-BAC-001 — Executar a carga Bacen até a referência do último fechamento contábil

**Classificação:** Condicional · **Prioridade:** Alta · **Execução:** Candidata à automação
**Rastreabilidade:** EVD-CMD-001; EVD-CMD-002; EVD-CMD-003; EVD-CMD-004
**Justificativa das tags:** A rotina, os parâmetros e a referência foram fornecidos; o resultado da carga no CMD permanece desconhecido. Sem regressão ou smoke enquanto não houver oráculo de conclusão.
**Automação:** Repetir por produto com base e datas controladas. Capturar diretório, comando e retorno sem presumir código de saída de sucesso; preparar isolamento dos logs e restauração do estado. Não há automação implementada. O resultado da carga depende de PEN-CMD-BAC-001.
**Pendência:** PEN-CMD-BAC-001

```gherkin
@condicional @resultado_pendente @funcional @positivo @modulo_web_bacen_ifrs @funcionalidade_carga_bacen_cmd @alta @automatizar
Esquema do Cenário: BDD-CMD-BAC-001 — Executar a carga Bacen até a referência do último fechamento contábil
  Dado que o produto <produto> de código <codigo> teve as movimentações do dia realizadas
  E o pré-fechamento e o fechamento previstos para o ciclo foram realizados antes da carga
  E a data do último fechamento contábil do produto está identificada na massa
  E a referência preparada para a carga não ultrapassa essa data
  Quando o usuário acessa D:\Sistemas\Funcao\LinhasDeComando\FI.BACEN.CMD_IFRS no CMD do servidor
  E executa bacen_cmd.exe BCRCSCNT com PRODUTO=<codigo>, DATAREFERENCIA igual à referência preparada dentro do limite do fechamento, TIPOCARGA=D, TIPOPROCESSAMENTO=3, DIRERRO=C:\TEMP\, ARQERRO=ERRO.TXT, DIRLOG=C:\TEMP\ e ARQLOG=LOG.TXT
  Então deve ser confirmado se a carga foi concluída e qual mensagem, retorno ou evidência comprova esse resultado para o produto e a referência informados

  Exemplos:
    | codigo | produto |
    | 009 | ATIVOS |
    | 015 | ATIVOS REPASSES BNDES |
    | 016 | PASSIVOS BNDES REPASSES |
    | 017 | RES.2770 Ativo |
    | 018 | RES.2770 Passivo |
```

#### PEN-CMD-BAC-001 — Conclusão da carga Bacen no CMD

- **Pergunta original:** Na carga Bacen por CMD, há mensagem de conclusão ou o executável apenas encerra?
- **Resposta do usuário:** "ainda não sei"
- **Impacto:** Não permite afirmar mensagem, código de saída, atualização de tela ou sucesso a partir do simples encerramento. Datas da última carga e logs são possíveis evidências a investigar, sem regra confirmada para este comando.
- **Evidência necessária:** Execução acompanhada no ambiente de teste, com retorno do CMD e critério confirmado de conclusão para produto e referência, incluindo log ou consulta autorizada quando aplicável.
- **Cenários afetados:** BDD-CMD-BAC-001.
