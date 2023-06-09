# *Clean Code*

Anotações a respeito do [curso](https://lp.rocketseat.com.br/programas-rocketseat) ***Clean Code*** da **[Rocketseat](https://www.rocketseat.com.br/ "Página Oficial")**, com foco em **clean code** prático e duração total das videoaulas de aproximadamente 3h30, ministrado por **[Diego Fernandes](https://www.linkedin.com/in/diego-schell-fernandes/ "Perfil no LinkedIn")**.

[Repositório](https://github.com/rocketseat-education/ignite-clean-code-desafios) dos desafios.

<details>
<summary><b>Índice de conteúdo do curso</b></summary>

- [Fundamentos de *Clean Code*](#fundamentos-de-clean-code)
  - [O que é ou não é *Clean Code*](#o-que-é-ou-não-é-clean-code)
  - [Princípios do código limpo](#princípios-do-código-limpo)
- [Código limpo com JavaScript](#código-limpo-com-javascript)
  - [Nomenclatura de variáveis](#nomenclatura-de-variáveis)
  - [Desafio: Nomeação de variáveis](#desafio-nomeação-de-variáveis)
  - [Código limpo em booleanos](#código-limpo-em-booleanos)
  - [Desafio: Booleanos](#desafio-código-limpo-em-booleanos)
  - [Causa vs. Efeito](#causa-vs-efeito)
  - [Desafio: Causa vs. Efeito](#desafio-causa-vs-efeito)
  - [Código em inglês](#código-em-inglês)
  - [Desafio: Código em inglês](#desafio-código-em-inglês)
  - [Regras em condicionais](#regras-em-condicionais)
  - [Desafio: Regras em condicionais](#desafio-regras-em-condicionais)
  - [Parâmetros e desestruturação](#parâmetros-e-desestruturação)
  - [Desafio: Parâmetros e desestruturação](#desafio-parâmetros-e-desestruturação)
  - [Números mágicos](#números-mágicos)
  - [Desafio: Números mágicos](#desafio-números-mágicos)
  - [Comentários vs Documentação](#comentários-vs-documentação)
  - [Desafio: Comentários vs Documentação](#desafio-comentários-vs-documentação)
  - [Evite *Syntatic Sugars*](#evite-syntatic-sugars)
  - [Desafio: Evite *Syntatic Sugars*](#desafio-evite-syntatic-sugars)
- [Código limpo no React](#código-limpo-no-react)
  - [Desacoplando componentes](#desacoplando-componentes)
  - [Componentes puros](#componentes-puros)
  - [Funções e eventos no React](#funções-e-eventos-no-react)
  - [Composição vs. Customização](#composição-vs-customização)
  - [Condicionais no *render*](#condicionais-no-render)
- [Código limpo no Node.js](#código-limpo-no-nodejs)
  - [*Clean code* no *back-end*](#clean-code-no-back-end)
  - [Princípios de SOLID](#princípios-de-solid)
  - [Exemplos práticos de SOLID](#exemplo-prático-de-solid)
  - [Princípios de DDD](#princípios-de-ddd)
  - [Exemplo prático de DDD](#exemplo-prático-de-ddd)
  - Unindo DDD ao SOLID

</details>

## Fundamentos de *Clean Code*

### O que é ou não é *Clean Code*

Características de código limpo:

- Fácil leitura
- Fácil manutenção
- Previsibilidade
- Confiança

O que o código limpo **não** é:

- Um manual
- Organização e estrutura de pastas/arquivos
- Quantidade pequena de linhas
- Arquitetura do sistema (*Clean Architecture*)
- Performance mais rápida

Exemplo: um projeto com várias pastas, arquivos de 100 linhas e performance excelente pode não ser código limpo, enquanto outro projeto com uma úncia pasta e arquivos de 1000 linhas é considerado código limpo por ter as características listadas acima.

### Princípios do código limpo

- Testes automatizados para auxiliar à fácil manutenção
- Revisões de código a cada *feature* nova
- Refatoração de código
- Simplicidade - *KISS: **K**eep **I**t **S**imple and **S**tupid*, não pense em soluções para problemas que ainda não existam
- Iterações curtas para facilitar testes e revisões de alterações

## Código limpo com JavaScript

### Nomenclatura de variáveis

- Evite diminutivos
- Prefira nomes longos que explicitam o significado/uso da variável
- Evite nomes genéricos

Exemplos práticos no [arquivo](JavaScript/01_nomeclatura_variaveis.js).

### Desafio: Nomeação de variáveis

O [desafio](https://efficient-sloth-d85.notion.site/Desafio-Nomea-o-de-vari-veis-0a8484a8cdc743558d6677910590a874) consiste em aplicar os conhecimentos da aula anterior nas variáveis e atributos de objetos do [arquivo](ignite-clean-code-desafios-main/desafios/01-nomenclatura-de-variaveis.ts).

### Código limpo em booleanos

- Sempre escrever em forma de pergunta, exemplo: `isLoading`, `isEnabled`, `isClosed`.
- Manter o mais semântico possível

Exemplos práticos no [arquivo](JavaScript/02_booleanos.js).

### Desafio: Código limpo em booleanos

O [desafio](https://efficient-sloth-d85.notion.site/Desafio-Booleanos-aaab19f8e0394d20ae135c30094a7a3c) consiste em aplicar os conhecimentos da aula anterior nas variáveis do [arquivo](ignite-clean-code-desafios-main/desafios/02-booleanos.ts).

### Causa vs. Efeito

- Definir nomes de variáveis baseado na causa e não no efeito.  
Exemplo: `isButtonDisabled` vs. `isFormSubmitting`, o formulário sendo enviado é a causa/motivo do botão estar desabilitado.

### Desafio: Causa vs. Efeito

O [desafio](https://efficient-sloth-d85.notion.site/Desafio-Causa-vs-Efeito-a664fd5596c8467f9d5d66f3043ac9c5) consiste em aplicar os conhecimentos da aula anterior nas variáveis do [arquivo](ignite-clean-code-desafios-main/desafios/03-causa-vs-efeito.tsx).

### Código em inglês

É recomendado programar somente em inglês para manter o código acessível a todos, uma parcela dos desenvolvedores necessitam de leitores de tela para realizar seus trabalhos e esses programas ainda não capazes de interpretar 2 idiomas dentro do mesmo código, não é possível mudar os termos das linguagens de programação, bibliotecas, *frameworks*, etc., mas é possível mudar os termos de nossas variáveis e funções para inglês a fim de mantar o código legível a todos.

### Desafio: Código em inglês

O [desafio](https://efficient-sloth-d85.notion.site/Desafio-C-digo-em-ingl-s-ed988aa9dbf747a996d81b894327dfbd) consiste em aplicar os conhecimentos da aula anterior nas variáveis do [arquivo](ignite-clean-code-desafios-main/desafios/04-codigo-em-ingles.tsx).

### Regras em condicionais

- Evite sempre que possível utilizar negações nas condições, pois pode atrapalhar o raciocínio quando envolve múltiplas condições
- Prefira um `early return` a um `else`
- Evite condicionais aninhadas, principalmente com operador ternário

Exemplos práticos no [arquivo](JavaScript/05_condicionais.js).

### Desafio: Regras em condicionais

O [desafio](https://efficient-sloth-d85.notion.site/Desafio-Regras-em-condicionais-d02ba76ad39e426f8f40bd49d25c0ebd) consiste em aplicar os conhecimentos da aula anterior nas variáveis do [arquivo](ignite-clean-code-desafios-main/desafios/05-regras-em-condicionais.ts).

### Parâmetros e desestruturação

- Sempre que possível, enviar e receber parâmetros nomeados, utilizar a desestruturação
- Prefira enviar e receber nas funções um objeto à múltiplos parâmetros, isto facilita uma futura refatoração

Exemplos práticos no [arquivo](JavaScript/06_parametros_desestruturacao.js).

### Desafio: Parâmetros e desestruturação

O [desafio](https://efficient-sloth-d85.notion.site/Desafio-Par-metros-e-Desestrutura-o-e7b4ac605bf9467da7b032573bc8adb9) consiste em aplicar os conhecimentos da aula anterior nas variáveis do [arquivo](ignite-clean-code-desafios-main/desafios/06-parametros-e-desestruturacao.tsx).

### Números mágicos

Números mágicos são cálculos colocados no código que não deixam claro seu significado à primeira vista, por exemplo, cálculo de tempo, datas, intervalos.

Sugestões:
- Explicitar os cálculos
- Incluir um comentário "traduzindo" o valor para um dado do mundo real
- Armazenar esse valor em uma variável cujo nome explique seu significado

Exemplos práticos no [arquivo](JavaScript/07_numeros_magicos.js).

### Desafio: Números mágicos

O [desafio](https://efficient-sloth-d85.notion.site/Desafio-N-meros-M-gicos-ca206dedc5e3436cb09b86658002de00) consiste em aplicar os conhecimentos da aula anterior nas variáveis do [arquivo](ignite-clean-code-desafios-main/desafios/07-numeros-magicos.js).

### Comentários vs. Documentação

O comentário não serve para explicar o funcionamento de algo, isto é responsabilidade da Documentação.

O comentário serve como um aviso ao próximo desenvolvedor do motivo daquele código ter sido escrito daquela forma, seja por alguma limitação/problema de biblioteca ou para avisar de uma padrão diferente de escrita.

Exemplos práticos no [arquivo](JavaScript/08_comentarios_documentacao.js).

### Desafio: Comentários vs. Documentação

O [desafio](https://efficient-sloth-d85.notion.site/Desafio-Coment-rios-vs-Documenta-o-6660d7d60c884b91b0f76de6c6b8ecde) consiste em aplicar os conhecimentos da aula anterior nas variáveis do [arquivo](ignite-clean-code-desafios-main/desafios/08-comentarios-vs-documentacao.js).

### Evite Syntatic Sugars

*Syntatic Sugars* são estruturas/funcionalidades que geralmente são muito específicas à determinada linguagem, por exemplo, a desestruturação e o *spread operator* (...) do JavaScript, ou métodos de conversão de tipo de variáveis.

O recomendado é utilizar soluções "genéricas" quando possível, desde que não aumente a complexidade do código e nem diminua sua produtividade, porque dessa forma o próximo programador não necessitaria de um alto grau de conhecimento da linguagem para entender e fazer a manutenção do código.

Exemplos práticos no [arquivo](JavaScript/09_syntatic_sugars).

### Desafio: Evite Syntatic Sugars

O [desafio](https://efficient-sloth-d85.notion.site/Desafio-Syntatic-Sugars-7400d576da8e4d98968e1523ad7efcef) consiste em aplicar os conhecimentos da aula anterior nas variáveis do [arquivo](ignite-clean-code-desafios-main/desafios/09-syntatic-sugars.ts).

## Código limpo no React

Criei um projeto simples, com auxílio do [Vite](https://vitejs.dev/guide/ "Documentação") na pasta **[example](React/example/)** para servir de exemplo às anotações, contendo comentários em seus arquivos e componentes explicando os motivos da refatoração.

### Desacoplando componentes

Como identificar que um componente precisa de uma refatoração?  
Quando a sua camada de JavaScript estiver muito grande e complexa. 

Quando separar um componente em componentes menores?
1. **Quando se tem algo repetitivo:**  
Analisar necessidade de separação, muitas vezes não é necessário quando a estrutura se repete, mas não tem nenhuma lógica envolvida, essa análise evita o excesso de componentização em um projeto.

2. **Quando é possível isolar algo do seu contexto, sem prejudicar o comportamento original:**  
Quando existe alguma variável, função, `useEffect`, etc. que está totalmente associado à uma parte específica da interface. 

### Componentes puros

Quando se separa um componente em outros menores, é muito comum que se leve toda a lógica do *script* para o componente novo e às vezes essa lógica depende de comunicação com API/*back-end*, `useEffect()` em variáveis do componente pai, entre outros, nesses casos o componente criado não é um componente puro e sim um componente separado em dois arquivos.

Componente puro é um tipo de componente cuja existência não depende do contexto em que está, ele tem autonomia de funcionamento sem precisar de informações externas, desde que respeitadas suas propriedades.

Exemplo: o **Header** de uma aplicação contém um botão com uma função que adiciona uma nota em uma lista de notas, para ele se tornar um componente puro o correto seria criar uma *interface* que recebe justamente esta função a ser utilizada, assim o **Header** pode exister em qualquer outro contexto da aplicação desde que seja passado alguma função para ser executada no botão.

### Funções e eventos no React

Recomendação de prefixos para nomes de funções: `handle` e `on`.

Quando o componente está expondo algum evento a outro componente, prefira utilzar o prefixo **`on`**, semelhante aos efeitos do HTML `onClick`, `onFocus`, exemplos: `onSubmitForm()`, `onCreateNewUser()`.

Quando o objetivo da função é responder o disparo de um algum evento do usuário, prefira utilzar o prefixo **`handle`**, exemplos: `handleSubmitForm()`, `handleCreateNewUser()`.

Exemplo prático e mais claro com as funções: `handleCreateNewNote` e `onCreateNewNote` nos arquivos [App.tsx](React/example/src/App.tsx) e [Header.tsx](React/example/src/components/Header.tsx) respectivamente.

### Composição vs. Customização

É muito comum durante a criação de componentes de Input que se definam configurações deste componente, como *label*, tipo, mensagem de erro, classe CSS, etc., essas propriedades podem ser obrigatórias ou opcionais e são recebidas pelo componente através de uma interface.

O problema em se fazer isso é que a estrutura do HTML acaba ficando engessada e de difícil expansão, por exemplo, caso no futuro eu precise customizar ainda mais esse *input*, adicionar um ícone ou que a mensagem de erro venha acima da *label* ou trocar o ícone de lado, o componente vai precisar receber ainda mais propriedades e criar casos condicionais de renderização, tornando um processo complexo.

A solução encontrada para isso é utilizar o *pattern* de composição, onde o componente-pai engloba os componentes-filhos, então o componente Input poderia ser divido em Label, Icon, InputField, etc., a disposição deles no HTML pode ser feita de forma mais fluída de acordo com a chamada dos respectivos componentes dentro do componente-pai.

Exemplo prático e mais claro ao analisar os arquivos [Input.old.tsx](React/example/src/components/Input.old.tsx) e [Input.tsx](React/example/src/components/Input.tsx) e as chamadas de seus componentes no arquivo [App.tsx](React/example/src/App.tsx).

### Condicionais no *render*

Evite condicionais na camada HTML de seu código, prefira criar variáveis com o condicional na camada JavaScript.

Exemplo: variável `isNoteListEmpty` no arquivo [App.tsx](React/example/src/App.tsx).

## Código limpo no Node.js

### *Clean code* no *back-end*

*Clean code* no *back-end* não depende se a aplicação foi desenvolvida com *Clean Architeure*, DDD (*Domain Driven Design*), SOLID ou *frameworks*, etc. 

O objetivo é ter uma aplicação muito bem estruturada, definida e principalmente com diversos testes automatizados que auxliam no desenvolvimento do sistema para garantir que a aplicação continue funcionando corretamente mesmo com novas *features* e refatorações sendo feitas.

Foco principal:
- Manter os testes simples
- Testes que cubram quase toda a aplicação

### Princípios de SOLID

- **S**RP - ***S**ingle Responsability Principle*
- **O**CP - ***O**pen/Close Principle*
- **L**SP - ***L**iskov Substitution Principle*
- **I**SP - ***I**nterface Segregation Principle*
- **D**IP - ***D**ependency Inversion Principle*

Na prática é quase impossível separar totalmente um princípio do outro.

**SRP:** cada classe, entidade, serviço, método, caso de uso, em suma, cada parte da aplicação deve ser responsável por uma única ação.  
Exemplo que fere o princípio: um método que cria um usuário **E** envia um *e-mail* para este usuário, o correto seriam funções separadas.

**OCP:** as classes/entidades devem estar sempre "abertas" a extensão/inclusão de novos métodos, mas nunca permitir a modificação de um já existente.  
Exemplo que fere o princípio: uma classe com uma função que calcula valor de frete de forma diferente de acordo com as transportadoras, caso a empresa faça um contrato com uma nova transportadora, será preciso **alterar** a classe e adicionar mais um condicional, o correto seria estendar a classe para permitir esta nova transportadora.

**LSP:** deve ser possível substituir uma dependência de uma classe por outra desde que elas possuam o mesmo formato.
Exemplo que respeita o princípio: uma função que envia os dados de criação de um usuário para um repositório do banco PostgreSQL deve continuar funcionando caso troque o repositório para um do MySQL, a função não é responsável por mandar um formato específico de dados para cada banco.

**ISP:** instrui a separação de interfaces de classes.  
Exemplo que fere o princípio: uma classe Impressora com uma interface com os métodos de imprimir e escanear, pode ocorrer de uma impressora mais simples não possuir a função de escanear, então não seria possível utilizar essa interface, o correto seria separar cada método em uma interface e aí sim a classe Impressa implementar as duas interfaces.

**DIP:** as dependências de uma classe devem ser injetadas de maneira inversa ao modelo tradicional, ou seja, a função deve receber como parâmetros as suas depêndencias.
Exemplo que fere o princípio: em um arquivo, temos um `import` de um repositório, uma função `createUser()` utiliza o objeto desse repositório para executar a função `createUserInDatabase()`, o correto é declarar a função `createUser()` para receber uma função como parâmetro e depois passar a função `createUserInDatabase()` para ela.

### Exemplo prático de SOLID

Exemplo prático nos arquivos **[solid.old.ts](/Back-end/solid.old.ts)** e **[solid.ts](/Back-end/solid.ts)**, o arquivo **solid.old.ts** contém uma versão inicial das classes/funções enquanto o o arquivo **solid.ts** contém a versão refatorada se baseando nos princípios SOLID.

Contextualização: obter desconto de um pedido de acordo com o modo de pagamento.

### Princípios de DDD

DDD (*Domain-Driven Design*) é uma prática de pensar/desenhar como será o *software*, quais entidades serão necessárias, possíveis casos de usos, etc.

*Domain* é o ambiente/contexto do problema de negócio que está sendo resolvido e ele pode ser composto por múltiplos sub-domínios, a partir da definição dos sub-domínios é possível encontrar as entidades e consequentemente os casos de uso do sistema.

*Domain Experts* são pessoas especialistas naquele domínio onde está situado o problema. O engenheiro de *software* vai conversar com esses especialistas e a partir disto irá identificar quais são as possíveis entidades, atores, de cada sub-domínio.

Uma possível entidade pode ser identificada em múltiplos sub-domínios diferentes, porém a nível de código/desenvolvimento ela pode, sem nenhum problema, assumir nomes diferentes e ser considerada como entidades diferentes para evitar o uso de um nome genêrico que não deixa claro a finalidade daquela entidade em um longo fluxo de código.

**Exemplo - Criação de um *e-commerce***

- Domínio: *e-commerce*
- Subdomínios:
  - Logística
  - Faturamento
  - Pagamento
  - Estoque
  - outros...

Possível conversa com um *domain expert* em Faturamento:
- Pergunta: como é o dia de trabalho?
- Resposta: a gente ***lista*** as ***ordens de pedido*** e ***emite*** as ***notas fiscais***.

A partir dessa fala, é possível identificar rapidamente:
- Prováveis entidades:
  - Ordem de Pedido
  - Nota Fiscal
- Prováveis casos de uso:
  - Listar ordens de pedido
  - Emitir notas fiscais

Uma possível entidade Usuário do *e-commerce* pode assumir nomes/estruturas diferentes dependendo do subdomínio no qual está inserido, no subdomínio Faturamento o usuário passa a ser definido como "Comprador", já na parte de Logística ele é considerado como "Destinatário".

### Exemplo prático de DDD

Utilizando o contexto citado acima de *e-commerce*, a pasta [ddd](/Back-end/ddd/) foi criada para servir como um exemplo prático.

Na teoria, o processo de desenvolvimento de uma aplicação deveria ser pensado totalmente desconectado de um banco de dados, o sistema deveria ser capaz de validar as regras de negócios e executar os testes automatizados com sucesso sem a necessidade de um banco de dados e de nenhuma dependência externa.

As classes/entidades *Customer* e *Recipient* poderiam ser armazenadas numa mesma tabela dentro do banco de dados, já que suas informações são relativas a mesma pessoa.

### Unindo DDD ao SOLID

O exemplo anterior criado na pasta [ddd](/Back-end/ddd/) foi expandido levando em consideração os princípios SOLID e o desenvolvimento da camada de infraestrutura de como aplicação vai se comunicar com o mundo externo: *frameworks*, banco de dados, APIs, etc.

Analisando a classe [**SubmitOrder**](Back-end/ddd/use-cases/submit-order.ts) é possível perceber que o sistema consegue fazer toda a validação de regras de negócios com os dados recebidos antes que seja feita a persistência dos dados em algum banco de dados. A classe foi desenvolvida respeitando o princípio DIP do SOLID, onde o construtor da classe recebe a depêndencia necessária para executação de seus métodos.

A interface [**OrdersRepository**](Back-end/ddd/repositories/orders-repository.ts) foi criada levando em consideração o princípio OCP do SOLID, caso o sistema utilize um banco diferente ao MySQL e Postgres, basta criar uma classe que implemente essa interface, não é necessário modificá-la.

No arquivo [**server.ts**](Back-end/ddd/server.ts) é possível notar que devido a classe **SubmitOrder** e a interface **OrdersRepository** terem sido desenvolvidas com base nos princípios SOLID, as classes **MySqlOrdersRepository** e **PostgresOrdersRepository** podem ser usadas como dependência da classe **SubmitOrder** sem distinção alguma, respeitando assim o princípio LSP.

Na vídeo-aula não teve nenhuma implementação prática de testes automatizados, mas seria possível garantir o funcionamento do sistema por meio deles e sem um banco de dados desde que se crie uma classe/função para testes que implemente a interface **OrdersRepository** e seus métodos simulando essa conexão com o banco e retornando as respostas de sucesso/falha em cada caso de teste.