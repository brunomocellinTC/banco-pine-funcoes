# Cenários BDD

## Identificação

- **Aplicação:** Função (`app-pine-funcao`)
- **Escopo:** Cobertura Essencial do login até a exibição da home com os 11 módulos, sem navegação interna.
- **Formato:** TestingQA 0.7.1 · Architect 1.4.5

## Funcionalidade

```gherkin
# language: pt
Funcionalidade: Acessar o Função e visualizar os módulos da home
  O usuário informa suas credenciais e aciona o botão de login por mouse ou teclado para acessar a home com os módulos apresentados.
```

## Dados necessários

- **Usuário/perfil:** Usuário de teste válido; para BDD-005, acesso equivalente ao perfil SUPERVISOR mostrado na imagem 2. Não generalizar a lista para outros perfis.
- **Ambiente:** Instância autorizada do Função com tela de login e home disponíveis; as capturas mostram a versão 16.1226.2.61875 e a home identificada como Produção. Não pressupor ambiente disponível nem executar em produção.
- **Massa de dados:** Credenciais de teste obtidas por canal seguro, sem reproduzi-las no documento ou nas evidências de execução.

## Tags utilizadas

| Tag | Significado |
|---|---|
| `@funcional` | Verifica capacidade funcional especificada. |
| `@positivo` | Condição de uso válida sustentada pelas evidências. |
| `@alternativo` | Percurso de teclado alternativo ao clique no botão. |
| `@alta` | Verificação antecipada por impacto no acesso, exposição de credencial ou entrada dos módulos. |
| `@media` | Impacto restrito à interação por teclado, com contorno por mouse. |
| `@smoke` | Verificação inicial representativa do acesso e da exibição dos módulos; não indica versão aprovada. |
| `@regressao` | Comportamento existente a proteger contra mudanças. |
| `@automatizar` | Candidato à automação, com implementação e preparo técnico ainda necessários. |

## Cenários BDD

### BDD-001 — Acessar a home pelo botão de login

**Classificação:** Confirmado · **Prioridade:** Alta · **Execução:** Candidata à automação
**Rastreabilidade:** EVD-001; EVD-003; AFR-002
**Justificativa das tags:** O acesso por clique com credenciais válidas é a entrada central do recorte e condição para os testes seguintes; compõe smoke com BDD-005. A regressão protege esse acesso existente contra mudanças; o resultado visível e a repetição justificam candidatura à automação.
**Automação:** Repetir o login e verificar a home pode automatizar uma checagem frequente de entrada. Preparar credenciais seguras e estado sem sessão; seletores, ambiente e política de sessões ainda precisam de avaliação técnica.

```gherkin
@smoke @regressao @funcional @positivo @alta @automatizar
Cenário: BDD-001 — Acessar a home pelo botão de login
  Dado que a tela de login está aberta
  E o campo Usuário está preenchido com o usuário de teste válido
  E o campo Senha está preenchido com a senha correspondente
  Quando o usuário clica no botão de login
  Então a home do Função deve ser exibida
```

### BDD-002 — Mover o foco da senha para o botão de login

**Classificação:** Confirmado · **Prioridade:** Média · **Execução:** Candidata à automação
**Rastreabilidade:** EVD-003; EVD-004; AFR-003; AFR-004
**Justificativa das tags:** Enter e Tab exercitam percursos válidos alternativos ao mouse, com contorno conhecido; preserva-se prioridade Média. A regressão protege a transferência de foco descrita pelo usuário; a repetição das duas teclas e o foco verificável justificam automação.
**Automação:** Executar Enter e Tab a partir do campo Senha e conferir o elemento focado permite repetição das duas variações. Preparar foco e campos a cada execução; estratégia de identificação do botão e controle do navegador ainda precisam de avaliação.

```gherkin
@regressao @funcional @positivo @alternativo @media @automatizar
Esquema do Cenário: BDD-002 — Mover o foco da senha para o botão de login
  Dado que o campo Senha está com o foco
  E o campo Usuário está preenchido com o usuário de teste válido
  E o campo Senha está preenchido com a senha correspondente
  Quando o usuário pressiona a tecla <tecla>
  Então o botão de login deve receber o foco

  Exemplos:
    | tecla |
    | Enter |
    | Tab   |
```

### BDD-003 — Acessar a home com Enter no botão de login

**Classificação:** Confirmado · **Prioridade:** Média · **Execução:** Candidata à automação
**Rastreabilidade:** EVD-003; EVD-004; AFR-005
**Justificativa das tags:** Enter no botão focado é alternativa válida ao clique, com contorno por mouse e prioridade Média. A regressão protege a ativação por teclado existente; o destino visível e a repetição justificam candidatura à automação.
**Automação:** A ativação por Enter e a exibição da home permitem checagem repetível do percurso de teclado. Preparar foco no botão, credenciais seguras e sessão inicial; ferramenta e seletores ainda não definidos.

```gherkin
@regressao @funcional @positivo @alternativo @media @automatizar
Cenário: BDD-003 — Acessar a home com Enter no botão de login
  Dado que o botão de login está com o foco
  E o campo Usuário está preenchido com o usuário de teste válido
  E o campo Senha está preenchido com a senha correspondente
  Quando o usuário pressiona Enter
  Então a home do Função deve ser exibida
```

### BDD-004 — Exibir a senha preenchida com caracteres mascarados

**Classificação:** Confirmado · **Prioridade:** Alta · **Execução:** Candidata à automação
**Rastreabilidade:** EVD-001; AFR-006
**Justificativa das tags:** A captura sustenta a máscara da credencial; a prioridade Alta considera a exposição visual caso essa proteção regrida. A regressão protege a apresentação existente e a observação repetível da máscara justifica automação; não há afirmação de criptografia.
**Automação:** Verificar a apresentação mascarada com senha sintética é repetível. Definir a técnica de observação da máscara, sem registrar o segredo nem presumir tipo técnico do campo; ferramenta e seletores ainda precisam de avaliação.

```gherkin
@regressao @positivo @alta @automatizar
Cenário: BDD-004 — Exibir a senha preenchida com caracteres mascarados
  Dado que a tela de login está aberta
  Quando o usuário preenche o campo Senha com a senha de teste
  Então o conteúdo do campo Senha deve ser exibido com caracteres mascarados
```

### BDD-005 — Exibir os 11 módulos na home

**Classificação:** Confirmado · **Prioridade:** Alta · **Execução:** Candidata à automação
**Rastreabilidade:** EVD-002; EVD-003; AFR-007
**Justificativa das tags:** Os 11 módulos da home de referência sustentam a verificação funcional no perfil equivalente ao SUPERVISOR. Compõe smoke com BDD-001 e protege regressivamente a composição visual da home; a comparação repetível da lista justifica automação, sem testar os destinos dos módulos.
**Automação:** Comparar os rótulos dos 11 módulos permite checagem repetível da home. Preparar perfil equivalente ao SUPERVISOR; definir seletores e tratamento de variantes por ambiente/versão antes da implementação.

```gherkin
@smoke @regressao @funcional @positivo @alta @automatizar
Cenário: BDD-005 — Exibir os 11 módulos na home
  Dado que o usuário de teste possui o contexto de acesso equivalente à home de referência
  E a tela de login está aberta com as credenciais válidas preenchidas
  Quando o usuário aciona o botão de login
  Então a home deve exibir os 11 módulos principais:
    | Módulo |
    | Proposta |
    | Relatórios |
    | Acesso |
    | BackOffice |
    | Tabelas Corporativas |
    | Cessao de Credito - C3 |
    | Duplo Controle |
    | Tabelas Corporativo IFRS |
    | Tabelas IFRS |
    | Web Corporate Contabil IFRS |
    | Web Bacen IFRS |
```
