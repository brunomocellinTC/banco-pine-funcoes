# Cenários BDD

## Identificação

- **Aplicação:** Função (`app-pine-funcao`)
- **Escopo:** Cobertura Essencial de inicialização e diagnóstico de contexto por CMD para 009, 015, 016, 017 e 018. Acesso ao servidor como pré-requisito; sem execução de comandos nesta elaboração.
- **Formato:** TestingQA 0.7.1 · Architect 1.4.5

## Funcionalidade

```gherkin
# language: pt
Funcionalidade: Inicializar os produtos por CMD
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

**Modelo de inicialização:** executar a partir de `D:\Sistemas\Funcao\LinhasDeComando\FI.Atacado.CMD`:

```cmd
cd /d D:\Sistemas\Funcao\LinhasDeComando\FI.Atacado.CMD
FI.Atacado.CMD.exe INICIA CODBACK={codigo_produto} DTINICIA=DD/MM/AAAA
```

## Tags utilizadas

| Tag | Significado |
|---|---|
| `@regressao` | Proteção de comportamento existente com resultado sustentado. |
| `@funcional` | Rotina funcional por linha de comando. |
| `@positivo` | Produto, datas e estado válidos para o percurso. |
| `@modulo_backoffice` | Agrupamento funcional da rotina. |
| `@funcionalidade_inicializacao_cmd` | Agrupamento pelo processo em CMD. |
| `@alta` | Continuidade central do ciclo operacional. |
| `@automatizar` | Candidato à automação, sem implementação pronta. |
| `@alternativo` | Recuperação ou diagnóstico distinto do fluxo diário principal. |
| `@negativo` | Condição adversa de data ou contexto incorreto. |

## Cenários BDD

### BDD-CMD-INI-001 — Inicializar o produto para o dia de movimentações

**Classificação:** Confirmado · **Prioridade:** Alta · **Execução:** Candidata à automação
**Rastreabilidade:** EVD-CMD-001; EVD-CMD-002; EVD-CMD-003
**Justificativa das tags:** Protege a inicialização que libera o produto para o trabalho do dia; a mensagem é verificada sem inventar texto literal.
**Automação:** Repetir por produto com base e datas controladas. Capturar diretório, comando e retorno sem presumir código de saída de sucesso; preparar isolamento dos logs e restauração do estado. Não há automação implementada. O término sem mensagem não comprova isoladamente os efeitos contábeis; esta verificação respeita o resultado observável descrito.

```gherkin
@regressao @funcional @positivo @modulo_backoffice @funcionalidade_inicializacao_cmd @alta @automatizar
Esquema do Cenário: BDD-CMD-INI-001 — Inicializar o produto para o dia de movimentações
  Dado que o produto <produto> de código <codigo> está preparado para inicialização na data definida na massa
  E o usuário já está conectado ao servidor de teste com CMD disponível
  Quando o usuário acessa D:\Sistemas\Funcao\LinhasDeComando\FI.Atacado.CMD no CMD
  E executa FI.Atacado.CMD.exe INICIA com CODBACK=<codigo> e DTINICIA igual à data de inicialização preparada
  E aguarda a execução terminar
  Então o CMD deve apresentar a breve mensagem referente ao produto inicializado
  E o produto deve estar disponível para o uso funcional e as movimentações do dia

  Exemplos:
    | codigo | produto |
    | 009 | ATIVOS |
    | 015 | ATIVOS REPASSES BNDES |
    | 016 | PASSIVOS BNDES REPASSES |
    | 017 | RES.2770 Ativo |
    | 018 | RES.2770 Passivo |
```

### BDD-CMD-INI-002 — Conferir o contexto após erro de data maior ou igual à data do sistema

**Classificação:** Confirmado · **Prioridade:** Alta · **Execução:** Candidata à automação
**Rastreabilidade:** EVD-CMD-001; EVD-CMD-002; EVD-CMD-003
**Justificativa das tags:** Diagnóstico alternativo diante da condição adversa descrita no anexo; não presume que todo erro de data tenha a mesma causa nem repete a rotina automaticamente.
**Automação:** Repetir por produto com base e datas controladas. Capturar diretório, comando e retorno sem presumir código de saída de sucesso; preparar isolamento dos logs e restauração do estado. Não há automação implementada. O término sem mensagem não comprova isoladamente os efeitos contábeis; esta verificação respeita o resultado observável descrito.

```gherkin
@regressao @funcional @negativo @alternativo @modulo_backoffice @funcionalidade_inicializacao_cmd @alta @automatizar
Esquema do Cenário: BDD-CMD-INI-002 — Conferir o contexto após erro de data maior ou igual à data do sistema
  Dado que uma execução para o produto <produto> de código <codigo> informou que a data é maior ou igual à data do sistema
  E o executável esperado do produto é <executavel>
  Quando o usuário confere a data do produto na interface do Função
  E compara o diretório em que executou a rotina com <diretorio_contabil> para uma rotina contábil ou com FI.Atacado.CMD para INICIA
  E confere o executável utilizado contra a rotina pretendida
  E confere o código <codigo> quando a rotina exige código do produto
  Então as divergências de diretório, executável ou produto devem ser identificadas para correção do contexto antes de repetir a execução

  Exemplos:
    | codigo | produto | diretorio_contabil | executavel |
    | 009 | ATIVOS | D:\Sistemas\Funcao\LinhasDeComando\FI_CONTABIL_CORPORATE_CMD_IFRS | FI.CONTABIL.CORPORATE.CMD.exe |
    | 015 | ATIVOS REPASSES BNDES | D:\Sistemas\Funcao\LinhasDeComando\FI.CONTABIL.REPASSE.ATIVO.CMD_IFRS | FI.CONTABIL.REPASSE.ATIVO.CMD.exe |
    | 016 | PASSIVOS BNDES REPASSES | D:\Sistemas\Funcao\LinhasDeComando\FI.CONTABIL.REPASSE.PASSIVO.CMD_IFRS | FI.CONTABIL.REPASSE.PASSIVO.CMD.exe |
    | 017 | RES.2770 Ativo | D:\Sistemas\Funcao\LinhasDeComando\FI.CONTABIL.CORPORATE.CMD.2770.ATIVO_IFRS | FI.CONTABIL.REPASSE.ME.ATIVO.CMD.exe |
    | 018 | RES.2770 Passivo | D:\Sistemas\Funcao\LinhasDeComando\FI.CONTABIL.CORPORATE.CMD.2770.PASSIVO_IFRS | FI.CONTABIL.REPASSE.ME.PASSIVO.CMD.exe |
```

