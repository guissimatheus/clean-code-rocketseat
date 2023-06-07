# *Clean Code*

Anotações a respeito do curso ***Clean Code*** da **[Rocketseat](https://www.rocketseat.com.br/ "Página oficial")** ministrado por **[Diego Fernandes](https://www.linkedin.com/in/diego-schell-fernandes/)** com foco em *clean code* prático.

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
  - Números mágicos
  - Desafio: Números mágicos
  - Evite *Syntatic Sugars*
  - Desafio: Evite *Syntatic Sugars*
- Código limpo no React
- Código limpo no Node.js

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

O [desafio](https://efficient-sloth-d85.notion.site/Desafio-Nomea-o-de-vari-veis-0a8484a8cdc743558d6677910590a874) consiste em aplicar os conhecimentos da aula anterior nas variáveis e atributos de objetos do arquivo [01-nomenclatura-de-variaveis](ignite-clean-code-desafios-main/desafios/01-nomenclatura-de-variaveis.ts).

### Código limpo em booleanos

- Sempre escrever em forma de pergunta, exemplo: `isLoading`, `isEnabled`, `isClosed`.
- Manter o mais semântico possível

Exemplos práticos no [arquivo](JavaScript/02_booleanos.js).

### Desafio: Código limpo em booleanos

O [desafio](https://efficient-sloth-d85.notion.site/Desafio-Booleanos-aaab19f8e0394d20ae135c30094a7a3c) consiste em aplicar os conhecimentos da aula anterior nas variáveis do arquivo [02-booleanos](ignite-clean-code-desafios-main/desafios/02-booleanos.ts).

### Causa vs. Efeito

- Definir nomes de variáveis baseado na causa e não no efeito.  
Exemplo: `isButtonDisabled` vs. `isFormSubmitting`, o formulário sendo enviado é a causa/motivo do botão estar desabilitado.

### Desafio: Causa vs. Efeito

O [desafio](https://efficient-sloth-d85.notion.site/Desafio-Causa-vs-Efeito-a664fd5596c8467f9d5d66f3043ac9c5) consiste em aplicar os conhecimentos da aula anterior nas variáveis do arquivo [03-causa-vs-efeito](ignite-clean-code-desafios-main/desafios/03-causa-vs-efeito.tsx).

### Código em inglês

É recomendado programar somente em inglês para manter o código acessível a todos, uma parcela dos desenvolvedores necessitam de leitores de tela para realizar seus trabalhos e esses programas ainda não capazes de interpretar 2 idiomas dentro do mesmo código, não é possível mudar os termos das linguagens de programação, bibliotecas, *frameworks*, etc., mas é possível mudar os termos de nossas variáveis e funções para inglês a fim de mantar o código legível a todos.

### Desafio: Código em inglês

O [desafio](https://efficient-sloth-d85.notion.site/Desafio-C-digo-em-ingl-s-ed988aa9dbf747a996d81b894327dfbd) consiste em aplicar os conhecimentos da aula anterior nas variáveis do arquivo [04-codigo-em-ingles](ignite-clean-code-desafios-main/desafios/04-codigo-em-ingles.tsx).

### Regras em condicionais

- Evite sempre que possível utilizar negações nas condições, pois pode atrapalhar o raciocínio quando envolve múltiplas condições
- Prefira um `early return` a um `else`
- Evite condicionais aninhadas, principalmente com operador ternário

Exemplos práticos no [arquivo](JavaScript/05_condicionais.js).

### Desafio: Regras em condicionais

O [desafio](https://efficient-sloth-d85.notion.site/Desafio-Regras-em-condicionais-d02ba76ad39e426f8f40bd49d25c0ebd) consiste em aplicar os conhecimentos da aula anterior nas variáveis do arquivo [05-regras-em-condicionais](ignite-clean-code-desafios-main/desafios/05-regras-em-condicionais.ts).

### Parâmetros e desestruturação

- Sempre que possível, enviar e receber parâmetros nomeados, utilizar a desestruturação
- Prefira enviar e receber nas funções um objeto à múltiplos parâmetros, isto facilita uma futura refatoração

Exemplos práticos no [arquivo](JavaScript/06_parametros_desestruturacao.js).

### Desafio: Parâmetros e desestruturação

O [desafio](https://efficient-sloth-d85.notion.site/Desafio-Par-metros-e-Desestrutura-o-e7b4ac605bf9467da7b032573bc8adb9) consiste em aplicar os conhecimentos da aula anterior nas variáveis do arquivo [06-parametros-e-desestruturacao](ignite-clean-code-desafios-main/desafios/06-parametros-e-desestruturacao.tsx).

## Código limpo no React

## Código limpo no Node.js
