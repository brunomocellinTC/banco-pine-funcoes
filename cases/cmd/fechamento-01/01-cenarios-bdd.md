# Cenários BDD

## Identificação

- **Aplicação:** Função (`app-pine-funcao`)
- **Escopo:** Cobertura Essencial de fechamento e recuperação de data anterior pendente por CMD para 009, 015, 016, 017 e 018. Acesso ao servidor como pré-requisito; sem execução de comandos nesta elaboração.
- **Formato:** TestingQA 0.7.1 · Architect 1.4.5

## Funcionalidade

```gherkin
# language: pt
Funcionalidade: Executar o fechamento e recuperar data pendente por CMD
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

**Modelos contábeis:** usar o diretório e o executável da linha do produto nos Exemplos. No fluxo diário, DTREF recebe a mesma referência anterior usada no pré-fechamento. COMPSN=N não realiza comparação de Sintético x Recálculo; DIRTSA identifica o diretório do comparativo, sem exigir arquivo comparativo com a comparação desativada.

```cmd
cd /d {diretorio_contabil}
{executavel} MTFECONT DTREF=DD/MM/AAAA COMPSN=N DIRTSA=C:\TEMP\ DIRERRO=C:\TEMP\ ARQERRO=ERRO.TXT DIRLOG=C:\TEMP\ ARQLOG=LOG.TXT
```

**Recuperação excepcional:** registrar a data de inicialização original antes de abrir a data antiga. Executar a abertura abaixo no diretório contábil do produto; em seguida INICIA no diretório FI.Atacado.CMD e MTPFCONT/MTFECONT no diretório contábil, todos para a data antiga informada no erro. Depois retornar a INICIA com a data de inicialização original. A referência igual entre essas três rotinas é exceção e não substitui a regra diária de referência anterior.

```cmd
{executavel} MTABCONT DTREF=DD/MM/AAAA
```

**Modelos complementares para a recuperação:** manter os mesmos parâmetros de log e erro do processo diário. No INICIA, substituir a data pela antiga durante a recuperação e pela data original ao restaurar o ciclo.

```cmd
cd /d D:\Sistemas\Funcao\LinhasDeComando\FI.Atacado.CMD
FI.Atacado.CMD.exe INICIA CODBACK={codigo_produto} DTINICIA=DD/MM/AAAA
cd /d {diretorio_contabil}
{executavel} MTPFCONT DTREF=DD/MM/AAAA DIRERRO=C:\TEMP\ ARQERRO=ERRO.TXT DIRLOG=C:\TEMP\ ARQLOG=LOG.TXT
```

## Tags utilizadas

| Tag | Significado |
|---|---|
| `@regressao` | Proteção de comportamento existente com resultado sustentado. |
| `@funcional` | Rotina funcional por linha de comando. |
| `@positivo` | Produto, datas e estado válidos para o percurso. |
| `@modulo_backoffice` | Agrupamento funcional da rotina. |
| `@funcionalidade_fechamento_cmd` | Agrupamento pelo processo em CMD. |
| `@alta` | Continuidade central do ciclo operacional. |
| `@automatizar` | Candidato à automação, sem implementação pronta. |
| `@alternativo` | Recuperação ou diagnóstico distinto do fluxo diário principal. |

## Cenários BDD

### BDD-CMD-FEC-001 — Executar o fechamento após o pré-fechamento

**Classificação:** Confirmado · **Prioridade:** Alta · **Execução:** Candidata à automação
**Rastreabilidade:** EVD-CMD-001; EVD-CMD-002; EVD-CMD-003
**Justificativa das tags:** Protege o fechamento após o pré-fechamento na mesma referência. Encerramento sem mensagem é o resultado informado; não representa confirmação independente do resultado contábil nem gera comparação com COMPSN=N.
**Automação:** Repetir por produto com base e datas controladas. Capturar diretório, comando e retorno sem presumir código de saída de sucesso; preparar isolamento dos logs e restauração do estado. Não há automação implementada. O término sem mensagem não comprova isoladamente os efeitos contábeis; esta verificação respeita o resultado observável descrito.

```gherkin
@regressao @funcional @positivo @modulo_backoffice @funcionalidade_fechamento_cmd @alta @automatizar
Esquema do Cenário: BDD-CMD-FEC-001 — Executar o fechamento após o pré-fechamento
  Dado que o produto <produto> de código <codigo> teve as movimentações do dia realizadas
  E o pré-fechamento foi executado para a referência anterior preparada
  E a data de fechamento preparada é a mesma usada no pré-fechamento
  E o executável contábil do produto é <executavel>
  Quando o usuário acessa <diretorio_contabil> no CMD do servidor
  E executa o modelo MTFECONT com o executável do produto, DTREF igual à referência preparada, COMPSN=N, DIRTSA=C:\TEMP\, DIRERRO=C:\TEMP\, ARQERRO=ERRO.TXT, DIRLOG=C:\TEMP\ e ARQLOG=LOG.TXT
  E aguarda a execução terminar
  Então o comando deve encerrar sem apresentar mensagem de conclusão no CMD

  Exemplos:
    | codigo | produto | diretorio_contabil | executavel |
    | 009 | ATIVOS | D:\Sistemas\Funcao\LinhasDeComando\FI_CONTABIL_CORPORATE_CMD_IFRS | FI.CONTABIL.CORPORATE.CMD.exe |
    | 015 | ATIVOS REPASSES BNDES | D:\Sistemas\Funcao\LinhasDeComando\FI.CONTABIL.REPASSE.ATIVO.CMD_IFRS | FI.CONTABIL.REPASSE.ATIVO.CMD.exe |
    | 016 | PASSIVOS BNDES REPASSES | D:\Sistemas\Funcao\LinhasDeComando\FI.CONTABIL.REPASSE.PASSIVO.CMD_IFRS | FI.CONTABIL.REPASSE.PASSIVO.CMD.exe |
    | 017 | RES.2770 Ativo | D:\Sistemas\Funcao\LinhasDeComando\FI.CONTABIL.CORPORATE.CMD.2770.ATIVO_IFRS | FI.CONTABIL.REPASSE.ME.ATIVO.CMD.exe |
    | 018 | RES.2770 Passivo | D:\Sistemas\Funcao\LinhasDeComando\FI.CONTABIL.CORPORATE.CMD.2770.PASSIVO_IFRS | FI.CONTABIL.REPASSE.ME.PASSIVO.CMD.exe |
```

### BDD-CMD-FEC-002 — Reprocessar a data pendente e restaurar a inicialização original

**Classificação:** Confirmado · **Prioridade:** Alta · **Execução:** Candidata à automação
**Rastreabilidade:** EVD-CMD-001; EVD-CMD-002; EVD-CMD-003
**Justificativa das tags:** Recuperação alternativa ao fechamento diário, explicitamente confirmada: processa a data antiga e restaura a inicialização original. Não afirma mensagem da abertura, eliminação de erro ou sucesso contábil por retorno silencioso.
**Automação:** Repetir por produto com base e datas controladas. Capturar diretório, comando e retorno sem presumir código de saída de sucesso; preparar isolamento dos logs e restauração do estado. Não há automação implementada. O término sem mensagem não comprova isoladamente os efeitos contábeis; esta verificação respeita o resultado observável descrito.

```gherkin
@regressao @funcional @positivo @alternativo @modulo_backoffice @funcionalidade_fechamento_cmd @alta @automatizar
Esquema do Cenário: BDD-CMD-FEC-002 — Reprocessar a data pendente e restaurar a inicialização original
  Dado que o fechamento do produto <produto> de código <codigo> foi impedido por uma data anterior pendente informada pelo sistema
  E a data de inicialização em uso antes da recuperação foi registrada
  E o executável contábil do produto é <executavel>
  Quando o usuário acessa <diretorio_contabil>
  E executa o modelo MTABCONT com DTREF igual à data antiga informada
  E aguarda o término da abertura
  E acessa D:\Sistemas\Funcao\LinhasDeComando\FI.Atacado.CMD
  E executa FI.Atacado.CMD.exe INICIA com CODBACK=<codigo> e DTINICIA igual à data antiga informada
  E aguarda o término da inicialização
  E retorna ao diretório contábil do produto
  E executa o modelo MTPFCONT com DTREF igual à data antiga informada
  E aguarda o término do pré-fechamento
  E executa o modelo MTFECONT com DTREF igual à data antiga informada e COMPSN=N
  E aguarda o término do fechamento
  E retorna a D:\Sistemas\Funcao\LinhasDeComando\FI.Atacado.CMD
  E executa FI.Atacado.CMD.exe INICIA com CODBACK=<codigo> e DTINICIA igual à data de inicialização original registrada
  E aguarda o término da inicialização original
  Então o CMD deve apresentar a breve mensagem referente ao produto inicializado novamente na data original
  E o produto deve estar disponível para retomar o uso do sistema nessa data

  Exemplos:
    | codigo | produto | diretorio_contabil | executavel |
    | 009 | ATIVOS | D:\Sistemas\Funcao\LinhasDeComando\FI_CONTABIL_CORPORATE_CMD_IFRS | FI.CONTABIL.CORPORATE.CMD.exe |
    | 015 | ATIVOS REPASSES BNDES | D:\Sistemas\Funcao\LinhasDeComando\FI.CONTABIL.REPASSE.ATIVO.CMD_IFRS | FI.CONTABIL.REPASSE.ATIVO.CMD.exe |
    | 016 | PASSIVOS BNDES REPASSES | D:\Sistemas\Funcao\LinhasDeComando\FI.CONTABIL.REPASSE.PASSIVO.CMD_IFRS | FI.CONTABIL.REPASSE.PASSIVO.CMD.exe |
    | 017 | RES.2770 Ativo | D:\Sistemas\Funcao\LinhasDeComando\FI.CONTABIL.CORPORATE.CMD.2770.ATIVO_IFRS | FI.CONTABIL.REPASSE.ME.ATIVO.CMD.exe |
    | 018 | RES.2770 Passivo | D:\Sistemas\Funcao\LinhasDeComando\FI.CONTABIL.CORPORATE.CMD.2770.PASSIVO_IFRS | FI.CONTABIL.REPASSE.ME.PASSIVO.CMD.exe |
```

