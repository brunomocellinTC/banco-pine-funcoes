# Fluxos E2E no Sistema "Funções" (Legado)

Certos comandos devem ser executados via CMD na Máquina Virutal, outros podem ser executados em Tela diretamente no site.

---

Pré Condições

Conectar na VPN - SSL - BANCO PINE JK - SSO
Ter acesso ao "Sistema Funções" com permissões vastas
Playwright instalado

## Índice

- 🖥️ [Inicializar Taxas](#-inicializar-taxas)
- 📟 [Inicialização do Sistema](#-inicialização-do-sistema)
- 🖥️ [Abertura de Proposta](#️-abertura-de-proposta) 
- 🖥️ [Consultar Proposta](#️-consultar-proposta)
- 🖥️ [Dar Baixa em Proposta](#️-dar-baixa-em-proposta)
- 🖥️ [Consultar Baixa de uma Proposta](#️-consultar-baixa-de-uma-proposta)
- 🖥️ [Realizar Pré-Fechamento](#️-realizar-pré-fechamento)
- 🖥️ [Conferir Pré-Fechamento](#️-conferir-pré-fechamento)
- 🖥️ [Realizar Fechamento](#️-realizar-fechamento)
- 🖥️ [Conferir Fechamento](#️-conferir-fechamento)
- 🖥️ [Enviar Carga Bacen](#️-enviar-carga-bacen)
- 🖥️ [Obter Relatório 3040](#️-obter-relatório-3040)
- 🖥️ [Obter Relatório 3044](#️-obter-relatório-3044)
- 🖥️ [Obter Relatório 3050](#️-obter-relatório-3050)


🖥️ Web
👆 Click
📝 Form/Escrever
👀 Conferir
⚠️ Info
🚀 Abrir
⬇️ Dropdown
🌐 Página/Diretório
📦 Modal

### [↩️ Voltar](#índice)

---


📟 Terminal
🖥️ Web
👆 Click
📝 Form/Escrever
👀 Conferir
⚠️ Info
🚀 Abrir
⬇️ Dropdown
🌐 Página/Diretório
📦 Modal

---
## 🖥️ Inicializar Taxas

🌐 Home > 👆 Tabelas Corporativas
⬇️ Backoffice > 👆 Tabelas Web
⬇️ Operacional > 👆 Cotações > 👆 Incluir
🌐 Inclusão de Cotações:

- Cód. Indexador = 📝 11 (Nome Indexador = US$-V) > 👆 Confirmar

🌐 Cadastro de Cotações:

- 👀 Dt.Validade
- Taxa/Índice = 📝 [CotaçãoAtualDolarBacen] > 👆 Confirmar

⚠️ Inclusão realizada com sucesso! > 👆 Ok

Refazer até Conferir novamente:

- 👀 Dt.Validade [AgoraDataAtual]

> ⚠️ *Não necessarimente precisa ser cadastrada sempre. Se houver uma cadastrada para uma data futura, a mesma pode ser usada até a data descrita.*

### [↩️ Voltar](#índice)
---

# 📟 Inicialização do Sistema

Deve-se logar na máquina virtual **w19pnhhfcatc01**, com usuário e senha iguais de acesso ao Note do Banco Pine

Deve ser Dia Útil 

Os **IDs** dos Sistemas são os seguintes:
|    ID    | Nome CMD                            | Nome Web              |
|----------|-------------------------------------|---------------------- |
|**009**	 | ATIVOS	 	 	 	 	 	                   | Corporate Ativo       |
|**015**	 | ATIVOS REPASSES BNDES	 	 	 	 	 	   | Repasse BNDES Ativo   |
| **016**	 | PASSIVOS BNDES REPASSES	 	 	 	 	 	 | Repasse BNDES Passivo |
| **017**	 | RES.2770 Ativo	 	 	 	 	 	           | Repasse ME Ativo      |
| **018**	 | RES.2770 Passivo	 	 	 	 	 	         | Repasse ME Passivo   |
| **038** | FUNCAFE ATIVO  | Funcafé Ativo         |

🚀 Conexão de Área de Trabalho Remota:

- Computador =  **w19pnhhfcatc01**
- user =  **userBancoPine**
- pass =  **passBancoPine**

🌐 D:\Sistemas\Funcao\LinhasDeComando\FI.Atacado.CMD
🚀 CMD
```bash
DEL FIERRO.TXT
FI.Atacado.CMD.exe INICIA CODBACK=IDs DTINICIA=DD/MM/YYY
```

**DEL FIERRO.TXT = Delete File Error txt**
Deleta arquivo prévio de erro anterior para permitir inicio correto do fluxo. O arquivo exisitindo impede o inicio.

**FI.Atacado.CMD.exe INICIA CODBACK=IDs DTINICIA=DD/MM/YYY**
É o executável que inicia o "Sistema", escolhido via ID e com a data em DTINICIA.

> ⚠️ *Inicialização do Sistema não avança sem ter uma "Taxa Iniciada"*
### [↩️ Voltar](#índice)

---

# 🖥️ Abertura de Proposta 

Ao voltar para Web para os próximos Steps, é possível conferir a data do Sistema Iniciado no Header.

🌐 Home > 👆 Web Corporate Contabil IFRS
🌐 > ⬇️ Backoffice > 👆 [Escolher o Sistema]

![HeaderDTSistema](image.png)

Voltando para Home, agora o procedimento para Abertura de Proposta

🌐 Home > 👆 Proposta
🌐 > ⬇️ Proposta > 👆 Cadastro de Proposta
🌐 Cadastro de Proposta > ⬇️ Produtos: > 👆 50 - CAPITAL GIRO > 👆 Confirmar
🌐 Dados Básicos da Proposta:
- 👆 Código do Cliente > 📦 Pesquisa > 👆 Pesquisar > 👆 51 LEVIAN PARTICIPACOES E EMPREEND.LTD
- 📝 Valor da Operação = 1.000.000,00 
- 👆 Confirmar
🌐 Condições da Operação:
  - ⬇️ Porte da Empresa > 👆 Média
  - ⬇️ Tipo de Cálculo (Conforme Tabela de Cálculo) > 👆 51 - Principais iguais jrs s/parcela
  - 📝 Data Base = Data da Inicialização do Sistema (Pegar no Header)
  - 📝 Qtd. Parc. = 12
  - 📝 Prz. 1ºVcto. = 32
  - ⬇️ Index./Moeda > 👆 01 - PREF
  - 👆 Confirmar
  - ⚠️ Atualize o fluxo de parcelas. > 👆 Ok
  - 👆 Fluxo de Parcelas

🌐 Fluxo de Parcelas > 👆 Confirmar
🌐 Condições da Operação > 👆 Confirmar
🌐 Número da Operação > Número da Operação = Proposta > 👆 Confirmar
🌐 Forma de Recebimento das Parcelas > 👆 Confirmar
🌐 Cadastro de Eventos > 👆 Confirmar
🌐 Liberação de Crédito > ⬇️ Cód. Banco/Agência/Conta > 👆 [Última Opção] > 👆 Incluir > 👆 Confirmar
🌐 Análise de Crédito > 👆 Aprova
> ⚠️ 3 - Proposta com data base futura. > 👆 Ok
Data de Inicialização do Sistema deve ser maior que a Data da proposta

### [↩️ Voltar](#índice)

---

# 🖥️ Consultar Proposta

Consultar Proposta recém criada.

🌐 Home > 👆 Proposta
🌐 > ⬇️ Esteira > 👆 Aprovação/Consulta de Proposta
🌐 Aprovação / Consulta de Proposta
- Testar melhor os filtros aqui
- Testar continuação de Propostas em diferentes estágios


### [↩️ Voltar](#índice)

---

# 🖥️ Dar Baixa em Proposta

Ao ter uma Proposta Criada (pelo menos no Dia Anterior, por conta do Fechamento do dia), é possível dar baixa de diferentes formas (valores, parcelas, tipos de desconto, etc).

Tipos de Baixa: [TipoBaixa]
- Baixa Normal
- Baixa com desconto SEM diferença
- Baixa com desconto COM diferença
- Baixa antecipada com desconto de rap

🌐 Home > 👆 Backoffice
🌐 > ⬇️ Backoffice > 👆 Corporate Ativo
⬇️ Lançamentos > 👆 Baixa de Parcelas
🌐 Baixa de Parcelas - BackOffice: Corporate Ativo:
- ⬇️ Tipo da Baixa: > 👆 [TipoBaixa]
- 👆 Código Financeiro > 📦 Pesquisa > 📝 001 > 👆 Pesquisar > 👆 001
- 👆 Nro.Operação > 📦 Pesquisa > 📝 [MesmoDaProposta] > 👆 Pesquisar > 👆 [MesmoDaProposta]
- 📝 Parc. = [A Definir ou 001]
- 📝 Dt.Liquid: = [DataInicialização]
- 👆 Recebimento > 📦 Pesquisa > 📝 00001 > 👆 Pesquisar > 👆 00001
- 📝 Vlr.Pago: = 40.000,00
- 👆 Caclcular
- 👆 Confirmar
- ⚠️ Agendamento de Baixa concluído com Sucesso! > 👆 Ok

> ⚠️ Validar valores de descontos, Parcelas Atrasadas

### [↩️ Voltar](#índice)

---

# 🖥️ Consultar Baixa de uma Proposta

🌐 Home > 👆 Backoffice
🌐 > ⬇️ Backoffice > 👆 Corporate Ativo
⬇️ Consulta > 👆 Consulta de Cobrança 
🌐 Consulta de Cobrança:
- ⬇️ Tipo: > 👆 Número de Operação
- 📝 Conteúdo: = 👆[NroOperação]
- ⬇️ Módulo: = [escohlerProduto]
- ⬇️ Pesquisa de Contratos > 👆 [escolherOpção] > 👆 Buscar 
👆 [NroOperação]
  - 📦 Operação Selecionada:
  - 👆 Parcelas
  - 👀 Tipo. = Bx.Atr
  - 👀 Movimento = Data do Pagamento da Baixa
👆 [Número da Parcela]
📦 Dados da Parcela
👀 [ConferirDados]

### [↩️ Voltar](#índice)

---

# 🖥️ Realizar Pré-Fechamento

A "Data do Último Pré-Fechamento:" é sempre travada com a Data do Último Pré-Fechamento executado

A Ideia é sempre fechar o próximo dia, referente ao Último Dia, e referente D-1 a Data de Inicialização do Sistema.

Ex.:
Último             - 01
Data alterável     - 02
Data Inicialização - 03

Ao executar, deve ficar.

Último             - 02
Data alterável     - 03
Data Inicialização - 03

🌐 Home > 👆 Web Corporate Contabil IFRS
🌐 > ⬇️ Backoffice > 👆 [EscolherAtivo]
⬇️ Fechamento > 👆 Pré-Fechamento Contábil
📝 Data do Pré-Fechamento: = [D+1 referente a Última Data ou D-1 referente a Inicialização] > 👆 Confirmar
⚠️ *Texto a confirmar 👆 Ok

### [↩️ Voltar](#índice)

---

# 🖥️ Conferir Pré-Fechamento

A "Data do Último Pré-Fechamento:" Deve ser a memsa útilizada no Step anterior de "Realizar o Pré-Fechamento"

🌐 Home > 👆 Web Corporate Contabil IFRS
🌐 > ⬇️ Backoffice > 👆 [EscolherAtivo]
⬇️ Fechamento > 👆 Pré-Fechamento Contábil
👀 Data do Último Pré-Fechamento: = [aMesmaUsadaAcima]

🖥️ Web
👆 Click
📝 Form/Escrever
👀 Conferir
⚠️ Info
🚀 Abrir
⬇️ Dropdown
🌐 Página/Diretório
📦 Modal

### [↩️ Voltar](#índice)

---

# 🖥️ Realizar Fechamento

pega a data do Prefechamento
perceptivelmente mais lento

A "Data do Último Pré-Fechamento:" é sempre travada com a Data do Último Pré-Fechamento executado

A Ideia é sempre fechar o próximo dia, referente ao Último Dia, e referente D-1 a Data de Inicialização do Sistema.

Ex.:
Último             - 01
Data alterável     - 02
Data Inicialização - 03

Ao executar, deve ficar.

Último             - 02
Data alterável     - 03
Data Inicialização - 03

🌐 Home > 👆 Web Corporate Contabil IFRS
🌐 > ⬇️ Backoffice > 👆 [EscolherAtivo]
⬇️ Fechamento > 👆 Fechamento Contábil
📝 Data do Pré-Fechamento: = [D+1 referente a Última Data ou D-1 referente a Inicialização] > 👆 Confirmar
⚠️ *Texto a confirmar 👆 Ok

### [↩️ Voltar](#índice)

---

# 🖥️ Conferir Fechamento

A "Data do Último Pré-Fechamento:" Deve ser a memsa útilizada no Step anterior de "Realizar o Fechamento"

🌐 Home > 👆 Web Corporate Contabil IFRS
🌐 > ⬇️ Backoffice > 👆 [EscolherAtivo]
⬇️ Fechamento > 👆 Fechamento Contábil
👀 Data do Último Fechamento: = [aMesmaUsadaAcima]

### [↩️ Voltar](#índice)

---

# 🖥️ Enviar Carga Bacen

Data é o ultimo fechamento

🌐 Home > 👆 Web Bacen IFRS
🌐 > ⬇️ Processamento > 👆 Carga Bacen > 👆 Processar
🌐 Carga do Bacen:
- 📝 Data de Referência: = [dataDoÚltimoFechamento]
- 👆 Opções de Carga: > 👆 Mensal
- 👆 ATIVOS - ()
- 👆 ATIVOS REPASSES BNDES - ()
- 👆 FUNCAFE ATIVO - ()
- 👆 RES.2770 - () > 👆 Confirmar
⚠️ *Texto a confirmar 👆 Ok

### [↩️ Voltar](#índice)

---

# 🖥️ Obter Relatório 3040

Após o sistema ter sido Pré-Fechado, Fechado e Enviado a Carga Bacen, é possível realizar a emissão de Relatórios.

Gera a partir do Ultimo dia do Mês

🌐 Home > 👆 Web Bacen IFRS
🌐 > ⬇️ Integrações > ⬇️ Geração de Informações de Risco - 3040 > 👆 Gerar Informação
🌐 Geração do Documento de Risco de Crédito - 3040:
- 📝 Data de Referência: = [UltimoDiaMes]
- 👆 Empresa: > 📝 001 > 👆 Pesquisar > 👆 001
- 👆 Produto: > 📝 009 > 👆 Pesquisar > 👆 009
- 👆 Confirmar
- ⚠️ Requisição para geração do arquivo 3040 realizada com sucesso! > 👆 Ok
- 👀 Status agora é "Trabalhando" no rodapé
- Depois de um tempo, conferir Status novamente (erro)
- Tem como baixar o arquivo a partir da pagina da geração

> Testar sem fechar o mes, ver se da erro de Data Futura

### [↩️ Voltar](#índice)

---

# 🖥️ Obter Relatório 3044

Após o sistema ter sido Pré-Fechado, Fechado e Enviado a Carga Bacen, é possível realizar a emissão de Relatórios.

Gera da Semana Anterior, já da a Data Inicial em relação a Carga Bacen enviada.

O ultimo dia é da semana ou seja 1 - 5

🌐 Home > 👆 Web Bacen IFRS
🌐 > ⬇️ Integrações > ⬇️ Geração de Documento - 3044 > 👆 Gerar Informação
🌐 Geração do Documento 3044 - Dados de Eventos em Operações de Crédito:
- 📝 Data Final: = [+6 Dias em relação a Inicial]
- 👆 Empresa: > 📝 001 > 👆 Pesquisar > 👆 001
- 👆 Produto: > 📝 009 > 👆 Pesquisar > 👆 009
- 👆 Confirmar
- ⚠️ *Requisição para geração do arquivo 3044 realizada com sucesso! > 👆 Ok
- 👀 Status agora é "Trabalhando" no rodapé

> ⚠️ Não existe carga Bacen para as datas: (03/06/2026), (05/06/2026), (08/06/2026) - Produto: 009 e Empresa: 001.
Ao tentar uma data sem Carga Bacen
Entender pq puxa 01/06/26 na da ta inicial
Ver se tem a ver com a Data do servidor

### [↩️ Voltar](#índice)

---

# 🖥️ Obter Relatório 3050

Após o sistema ter sido Pré-Fechado, Fechado e Enviado a Carga Bacen, é possível realizar a emissão de Relatórios.

Gera da Semana. Apenas Dias Úteis

🌐 Home > 👆 Web Bacen IFRS
🌐 > ⬇️ Integrações > ⬇️ Geração de Documento 3050 - Estatísticas de Crédito e Arrendamento > 👆 Gerar Informação
🌐 Informe de Crédito e Arrendamento Mercantil Doc. 3050 ao BACEN:
- 📝 Dt. Início Referência: = [aDefinir]
- 📝 Dt. Fim Referência: = [aDefinir]
- 👆 Empresa: > 📝 001 > 👆 Pesquisar > 👆 001
- 👆 Produto: > 📝 009 > 👆 Pesquisar > 👆 009
- 👆 Confirmar
- ⚠️ RRequisição para processamento da Geração do Documento 3050 realizada com sucesso! > 👆 Ok
- 👀 Status agora é "Trabalhando" no rodapé

### [↩️ Voltar](#índice)

---