
### Produtos
O sistema "Função" possui 8 produtos, cada um deles tem um código de identificação:

--**COD. Produtos**--	 	 	 	 	 	 
**009**	ATIVOS	 	 	 	 	 	 
**015**	ATIVOS REPASSES BNDES	 	 	 	 	 	 
**016**	PASSIVOS BNDES REPASSES	 	 	 	 	 	 
**017**	RES.2770 Ativo	 	 	 	 	 	 
**018**	RES.2770 Passivo	 	 	 	 	 	 
**038**	FUNCAFE ATIVO	 	 	 	 	 	 
**039**	FUNCAFE PASSIVO - Não necessário 	 
**800**	Antecipação de Recebíveis	- Não necessário

### Inicialização

A inicialização dos produtos é executada por linha de comando, onde cada produto tem o seu comando. Cada comando é executado à partir do diretório do produto, e cada produto tem o seu diretório. O comando de inicialização é utilizado da seguinte forma:

Conectado no servidor, o usuário localiza o diretório do produto que quer iniciar 
(produto "Ativos" no exemplo):

**cd D:\Sistemas\Funcao\LinhasDeComando\FI.Atacado.CMD**

E no cmd executa o seguinte comando: 

"**FI.Atacado.CMD.exe INICIA CODBACK=009 DTINICIA=21/10/2026**"

**FI.Atacado.CMD.exe** = executável da inicialização, localizado no diretório do respectivo produto, no servidor
**INICIA** = parâmetro de identificação de rotina de **inicialização** para o executável
**CODBACK=009** = parâmetro do comando que traz o código do produto à ser inicializado
**DTINICIA=DD/MM/AAAA** = parâmetro do comando que define a data de inicialização do produto

### Pré-fechamento

Depois da inicialização, o produto estará ativo para que as funcionalidades do sistema possam ser utilizadas. O próximo comando a ser executado é o de "**pré-fechamento**", este comando ainda permitirá que o usuário registre movimentações no sistema, porém irá travar o registro para uma única data, definida por **D-1** em relação à data de inicialização.

É um comando executado à partir de outro diretório do servidor, direcionado às execuções de contábil. Assim como os comandos de inicialização, os de pré-fechamento também possuem um diretório para cada produto

(pré-fechamento do produto ativos)
**cd D:\Sistemas\Funcao\LinhasDeComando\FI_CONTABIL_CORPORATE_CMD_IFRS** 

e no cmd executa o seguinte comando:

**FI.CONTABIL.CORPORATE.CMD.exe MTPFCONT DTREF=21/10/2026 DIRERRO=C:\TEMP\ ARQERRO=ERRO.TXT DIRLOG=C:\TEMP\ ARQLOG=LOG.TXT**

**FI.CONTABIL.CORPORATE.CMD.exe** = executável do módulo contábil, localizado no diretório do respectivo produto, no servidor
**MTPFCONT** = parâmetro de identificação de rotina de **pré-fechamento**
**DTREF=DD/MM/AAAA** = data de referência para pré-fechamento, sendo sempre um dia antes em relação à inicialização
**DIRERRO=C:\TEMP**  = diretório dos arquivos gerados caso a execução de erro 
**ARQERRO=ERRO.TXT** = nome e extensão do arquivo de erro
**DIRLOG=C:\TEMP** = diretório dos arquivos de logs gerados 
**ARQLOG=LOG.TXT** = nome e extensão do arquivo de log

### Fechamento

Depois do pré-fechamento, é executado o comando de **fechamento**, sua preparação segue o mesmo formato das execuções anteriores, o usuário conectado no servidor acessa o diretório do respectivo produto a ser fechado.

(diretório para fechamento é o mesmo de pré-fechamento)
**cd D:\Sistemas\Funcao\LinhasDeComando\FI_CONTABIL_CORPORATE_CMD_IFRS**

e no cmd executa o seguinte comando:

**FI.CONTABIL.CORPORATE.CMD.exe MTFECONT DTREF=21/10/2026 COMPSN=N DIRTSA=C:\TEMP\ DIRERRO=C:\TEMP\ ARQERRO=ERRO.TXT DIRLOG=C:\TEMP\ ARQLOG=LOG.TXT**

**FI.CONTABIL.CORPORATE.CMD.exe** = executável do módulo contábil, localizado no diretório do respectivo produto, no servidor (mesmo executável do pré-fechamento)
**MTFECONT** = parâmetro de identificação de rotina de **fechamento** para o executável
**DTREF=DD/MM/AAAA** = data de referência para fechamento, sendo sempre um dia antes em relação à inicialização
**COMPSN=N** = Não realizar a comparação de "Sintético x Recálculo"
**DIRTSA=C:\TEMP** = diretório do arquivo de comparativo de "Sintético e Recálculo"
**DIRERRO=C:\TEMP**  = diretório dos arquivos gerados caso a execução de erro 
**ARQERRO=ERRO.TXT** = nome e extensão do arquivo de erro
**DIRLOG=C:\TEMP** = diretório dos arquivos de logs gerados 
**ARQLOG=LOG.TXT** = nome e extensão do arquivo de log


### Exceções

#### Data Pendente
	Caso ao tentar realizar um fechamento, e o sistema informar que não foi possível pois existe uma data anterior pendente, o usuário deve **realizar uma abertura** na data informada, e então, executar a fila de comandos: inicialização, pré-fechamento e fechamento, todos os comandos com a data que o sistema informou erro. 
	Neste caso específico não se aplica a regra de D-1 para pré-fechamento e fechamento, pois todos os comandos devem ser executados para a data que o sistema relatou erro.

#### Data maior ou igual à data do sistema
	caso o sistema informe que a data é maior ou igual à data informada no sistema (verificável na interface do Função), verifique se o diretório que você está executando o comando é realmente o diretório do produto. Verifique também se o comando executado é o comando para o produto esperado.




### Demonstração dos comandos em uma rotina

Processos executados conectando ao servidor do sistema Função.

### COD. Produtos

**009**  ATIVOS - processo demorado                
**015**  ATIVOS REPASSES BNDES                   
**016**  PASSIVOS BNDES REPASSES                   
**017**  RES.2770 Ativo                   
**018**  RES.2770 Passivo                   
**038**  FUNCAFE ATIVO  

### 009  ATIVOS - processo demorado

### Inicialização

```
cd D:\Sistemas\Funcao\LinhasDeComando\FI.Atacado.CMDDEL FIERRO.TXTFI.Atacado.CMD.exe INICIA CODBACK=009 DTINICIA=21/10/2026
```

### Pré-fechamento

```
cd D:\Sistemas\Funcao\LinhasDeComando\FI_CONTABIL_CORPORATE_CMD_IFRSDEL C:\TEMP ERRO.TXTFI.CONTABIL.CORPORATE.CMD.exe MTPFCONT DTREF=20/10/2026 DIRERRO=C:\TEMP ARQERRO=ERRO.TXT DIRLOG=C:\TEMP\ ARQLOG=LOG.TXT
```

### Fechamento

```
cd D:\Sistemas\Funcao\LinhasDeComando\FI_CONTABIL_CORPORATE_CMD_IFRSDEL C:\TEMP ERRO.TXTFI.CONTABIL.CORPORATE.CMD.exe MTFECONT DTREF=20/10/2026 COMPSN=N DIRTSA=C:\TEMP\ DIRERRO=C:\TEMP\ ARQERRO=ERRO.TXT DIRLOG=C:\TEMP\ ARQLOG=LOG.TXT 
```

### Carga bacen

```
CD D:\Sistemas\Funcao\LinhasDeComando\FI.BACEN.CMD_IFRSDEL c:\temp\FIERRO.TXTbacen_cmd.exe BCRCSCNT DATAREFERENCIA=21/10/2026 PRODUTO=009 TIPOCARGA=D TIPOPROCESSAMENTO=3 DIRERRO=C:\TEMP\ ARQERRO=ERRO.TXT DIRLOG=C:\TEMP\ ARQLOG=LOG.TXT    
```

### 015  ATIVOS REPASSES BNDES

### Inicialização (realizado 20/10)

```
cd D:\Sistemas\Funcao\LinhasDeComando\FI.Atacado.CMDDEL FIERRO.TXTFI.Atacado.CMD.exe INICIA CODBACK=015 DTINICIA=20/10/2026
```

### Pré-fechamento

```
CD D:\Sistemas\Funcao\LinhasDeComando\FI.CONTABIL.REPASSE.ATIVO.CMD_IFRSDEL c:\temp\ERRO.TXTFI.CONTABIL.REPASSE.ATIVO.CMD.exe MTPFCONT DTREF=19/10/2026 DIRERRO=C:\TEMP\ ARQERRO=ERRO.TXT DIRLOG=C:\TEMP\ ARQLOG=LOG.TXT
```

### fechamento

```
FI.CONTABIL.REPASSE.ATIVO.CMD.exe MTFECONT DTREF=19/10/2026 COMPSN=N DIRTSA=C:\TEMP\ DIRERRO=C:\TEMP\ ARQERRO=ERRO.TXT DIRLOG=C:\TEMP\ ARQLOG=LOG.TXT
```

### Carga bacen

```
CD D:\Sistemas\Funcao\LinhasDeComando\FI.BACEN.CMD_IFRSDEL c:\temp\FIERRO.TXTbacen_cmd.exe BCRCSCNT DATAREFERENCIA=20/10/2026 PRODUTO=015 TIPOCARGA=D TIPOPROCESSAMENTO=3 DIRERRO=C:\TEMP\ ARQERRO=ERRO.TXT DIRLOG=C:\TEMP\ ARQLOG=LOG.TXT          
```

### 016  PASSIVOS BNDES REPASSES

### Inicialização

```
cd D:\Sistemas\Funcao\LinhasDeComando\FI.Atacado.CMDDEL FIERRO.TXTFI.Atacado.CMD.exe INICIA CODBACK=016 DTINICIA=21/10/2026
```

### Pré-fechamento

```
CD D:\Sistemas\Funcao\LinhasDeComando\FI.CONTABIL.REPASSE.PASSIVO.CMD_IFRSDEL c:\temp\ERRO.TXTFI.CONTABIL.REPASSE.PASSIVO.CMD.exe MTPFCONT DTREF=20/10/2026 DIRERRO=C:\TEMP\ ARQERRO=ERRO.TXT DIRLOG=C:\TEMP\ ARQLOG=LOG.TXT
```

### Fechamento

```
FI.CONTABIL.REPASSE.PASSIVO.CMD.exe MTFECONT DTREF=20/10/2026 COMPSN=N DIRTSA=C:\TEMP\ DIRERRO=C:\TEMP\ ARQERRO=ERRO.TXT DIRLOG=C:\TEMP\ ARQLOG=LOG.TXT
```

### Carga bacen

```
CD D:\Sistemas\Funcao\LinhasDeComando\FI.BACEN.CMD_IFRSDEL c:\temp\FIERRO.TXTbacen_cmd.exe BCRCSCNT DATAREFERENCIA=21/10/2026 PRODUTO=016 TIPOCARGA=D TIPOPROCESSAMENTO=3 DIRERRO=C:\TEMP\ ARQERRO=ERRO.TXT DIRLOG=C:\TEMP\ ARQLOG=LOG.TXT             
```

### 017  RES.2770 Ativo

### Inicialização

```
cd D:\Sistemas\Funcao\LinhasDeComando\FI.Atacado.CMDDEL FIERRO.TXTFI.Atacado.CMD.exe INICIA CODBACK=017 DTINICIA=21/10/2026
```

### Pré-fechamento

```
cd D:\Sistemas\Funcao\LinhasDeComando\FI.CONTABIL.CORPORATE.CMD.2770.ATIVO_IFRSDEL c:\temp\ERRO.TXTFI.CONTABIL.REPASSE.ME.ATIVO.CMD.exe MTPFCONT DTREF=20/10/2026 DIRERRO=C:\TEMP\ ARQERRO=ERRO.TXT DIRLOG=C:\TEMP\ ARQLOG=LOG.TXT
```

### Fechamento

```
FI.CONTABIL.REPASSE.ME.ATIVO.CMD.exe MTFECONT DTREF=20/10/2026 COMPSN=N DIRTSA=C:\TEMP\ DIRERRO=C:\TEMP\ ARQERRO=ERRO.TXT DIRLOG=C:\TEMP\ ARQLOG=LOG.TXT
```

### Carga bacen

```
CD D:\Sistemas\Funcao\LinhasDeComando\FI.BACEN.CMD_IFRSDEL c:\temp\FIERRO.TXTbacen_cmd.exe BCRCSCNT DATAREFERENCIA=21/10/2026 PRODUTO=017 TIPOCARGA=D TIPOPROCESSAMENTO=3 DIRERRO=C:\TEMP\ ARQERRO=ERRO.TXT DIRLOG=C:\TEMP\ ARQLOG=LOG.TXT             
```

### 018  RES.2770 Passivo

### Inicialização

```
cd D:\Sistemas\Funcao\LinhasDeComando\FI.Atacado.CMDDEL FIERRO.TXTFI.Atacado.CMD.exe INICIA CODBACK=018 DTINICIA=22/10/2026
```

### Pré-fechamento

```
CD D:\Sistemas\Funcao\LinhasDeComando\FI.CONTABIL.CORPORATE.CMD.2770.PASSIVO_IFRSDEL c:\temp\ERRO.TXTFI.CONTABIL.REPASSE.ME.PASSIVO.CMD.exe MTPFCONT DTREF=21/10/2026 DIRERRO=C:\TEMP\ ARQERRO=ERRO.TXT DIRLOG=C:\TEMP\ ARQLOG=LOG.TXT
```

### Fechamento

```
FI.CONTABIL.REPASSE.ME.PASSIVO.CMD.exe MTFECONT DTREF=21/10/2026 COMPSN=N DIRTSA=C:\TEMP\ DIRERRO=C:\TEMP\ ARQERRO=ERRO.TXT DIRLOG=C:\TEMP\ ARQLOG=LOG.TXT
```

### Carga bacen

```
CD D:\Sistemas\Funcao\LinhasDeComando\FI.BACEN.CMD_IFRSDEL c:\temp\FIERRO.TXTbacen_cmd.exe BCRCSCNT DATAREFERENCIA=22/10/2026 PRODUTO=018 TIPOCARGA=D TIPOPROCESSAMENTO=3 DIRERRO=C:\TEMP\ ARQERRO=ERRO.TXT DIRLOG=C:\TEMP\ ARQLOG=LOG.TXT                
```

### 038  FUNCAFE ATIVO

### Inicialização

```
cd D:\Sistemas\Funcao\LinhasDeComando\FI.Atacado.CMDDEL FIERRO.TXTFI.Atacado.CMD.exe INICIA CODBACK=038 DTINICIA=21/10/2026
```

### Pré-fechamento

### Fechamento

### Carga bacen

```
CD D:\Sistemas\Funcao\LinhasDeComando\FI.BACEN.CMD_IFRSDEL c:\temp\FIERRO.TXTbacen_cmd.exe BCRCSCNT DATAREFERENCIA=21/10/2026 PRODUTO=038 TIPOCARGA=D TIPOPROCESSAMENTO=3 DIRERRO=C:\TEMP\ ARQERRO=ERRO.TXT DIRLOG=C:\TEMP\ ARQLOG=LOG.TXT
```