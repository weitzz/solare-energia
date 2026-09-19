# Relatório de Desenvolvimento — Solare Energia

## Site [Acesse a página Solare Energia](solare-energia.vercel.app/)

## 1. Introdução

O projeto **Solare Energia** consiste em uma página institucional fictícia para uma empresa de energia solar. Seu objetivo é apresentar os serviços oferecidos, destacar os benefícios da energia fotovoltaica, exibir exemplos de projetos e facilitar o pedido de orçamento por meio de um formulário de contato.

A atividade permitiu aplicar os fundamentos estudados na Fase 1, especialmente a criação de uma estrutura organizada com HTML5 e a estilização de interfaces com CSS3. A página reúne cabeçalho com navegação, seção de destaque, cartões de soluções, etapas do processo de contratação, projetos, benefícios, depoimento, chamada para ação, formulário e rodapé. Também foram incluídas interações em JavaScript, como menu para telas menores, alternância de tema, validação do formulário e botão de retorno ao topo.

O propósito geral do site é comunicar uma proposta de energia limpa de forma clara, profissional e convidativa, conduzindo a pessoa usuária até o contato com a empresa.

## 2. Estrutura da Página Web

O documento foi iniciado com a configuração do idioma `pt-BR`, da codificação UTF-8 e da _meta tag_ `viewport`, que prepara a página para diferentes tamanhos de tela. A estrutura principal utiliza elementos semânticos do HTML5:

- `header` para o cabeçalho fixo, a marca, a navegação e as ações principais;
- `nav` e listas para organizar os links de navegação principal e do rodapé;
- `main` para delimitar o conteúdo central da página;
- `section` para separar os blocos de hero, soluções, processo, projetos, benefícios, depoimento e contato;
- `article` para conteúdos independentes, como cartões de soluções, projetos e benefícios;
- `aside` para a informação complementar de análise solar na área de destaque;
- `form`, `label`, `input`, `select` e `textarea` para o formulário de contato;
- `address` para os canais de contato e `footer` para as informações finais do site.

Os títulos seguem uma hierarquia com um `h1` na apresentação principal e `h2` e `h3` nas seções e cartões. As seções possuem identificadores, o que permite que os links do menu levem diretamente ao conteúdo correspondente. As imagens incluem textos alternativos descritivos, permitindo que leitores de tela transmitam seu significado.

Para reforçar a acessibilidade, foram usados atributos como `aria-label` em controles e navegações, `aria-labelledby` para associar seções aos seus títulos, `aria-controls` e `aria-expanded` no menu móvel, e `aria-pressed` no seletor de tema. O formulário relaciona cada campo ao seu rótulo e às mensagens de erro por meio de `for`, `id` e `aria-describedby`. As mensagens são anunciadas com `role="alert"` e `aria-live`.

## 3. Estilização com CSS3

O CSS utiliza variáveis personalizadas para concentrar as cores, bordas, sombras, largura máxima do conteúdo e raios de arredondamento. A paleta prioriza tons de verde, associados à sustentabilidade, e amarelo, associado à luz solar e aos destaques. Essas variáveis também permitem alterar o tema claro para o modo escuro de maneira consistente.

A tipografia utiliza a família Arial/Helvetica, com tamanhos adaptáveis por meio de `clamp()`. Foram aplicados pesos, espaçamentos, cores de texto e contraste para estabelecer uma hierarquia visual clara entre títulos, textos informativos, botões e dados de destaque. Gradientes, sombras suaves, bordas arredondadas e efeitos de elevação nos cartões ajudam a criar profundidade sem comprometer a legibilidade.

O layout combina Flexbox e CSS Grid. O Flexbox foi usado no cabeçalho, nos botões, na chamada para ação e em componentes alinhados horizontalmente. O Grid organiza a área principal em duas colunas, os cartões de soluções, as etapas do processo, os projetos, os benefícios, o formulário de contato e o rodapé. A classe `.container` limita a largura do conteúdo e mantém margens laterais adequadas em diferentes telas.

Também foram definidos estados de interação, como alterações de cor e leve deslocamento em `:hover`, além de indicadores de foco visíveis. A navegação possui rolagem suave e o cabeçalho permanece visível durante o deslocamento da página.

## 4. Acessibilidade e Responsividade

A acessibilidade foi considerada desde a estrutura HTML até os comportamentos interativos. Há um link “Pular para o conteúdo” que se torna visível ao receber foco, facilitando a navegação por teclado. Todos os elementos focáveis contam com um contorno destacado em `:focus-visible`, e os botões possuem rótulos acessíveis mesmo quando utilizam apenas ícones.

As imagens possuem atributo `alt`, enquanto ícones apenas decorativos recebem `aria-hidden="true"`. O formulário indica campos obrigatórios, valida nome, e-mail e mensagem, destaca os campos inválidos com `aria-invalid` e move o foco para o primeiro erro. As mensagens de validação e confirmação são disponibilizadas de forma que tecnologias assistivas possam anunciá-las.

A responsividade é implementada com _media queries_ em três faixas principais: até 980 px, 800 px e 600 px. Em telas médias, os layouts de duas ou mais colunas passam a uma única coluna quando necessário. Em telas pequenas, os cartões, projetos, benefícios e rodapé são empilhados; os botões da área inicial ocupam toda a largura disponível; e o menu de navegação é substituído por um botão de abertura. A página também respeita a preferência do sistema por redução de movimento com `prefers-reduced-motion`.

## 5. Desafios e Soluções

Um dos desafios foi manter a organização visual de uma página com muitas seções sem criar excesso de informação. Para isso, foram usados espaçamentos consistentes, uma largura máxima para o conteúdo, títulos bem destacados e cartões com estrutura repetível.

Outro desafio foi adaptar os grids para telas menores. A solução foi definir grades flexíveis com `minmax()` e criar pontos de quebra que reduzem progressivamente a quantidade de colunas. O menu também foi adaptado para o formato móvel, com um botão que informa seu estado aberto ou fechado por atributos ARIA.

O contraste e o foco dos elementos interativos exigiram atenção, principalmente porque a interface possui modo claro e escuro. O uso de variáveis CSS permitiu atualizar cores do fundo, textos, superfícies e bordas de forma centralizada. Por fim, a validação do formulário foi implementada em JavaScript para oferecer retornos objetivos, visíveis e acessíveis antes da simulação de envio.

## 6. Conclusão

O desenvolvimento da página Solare Energia consolidou o uso de HTML5 semântico e CSS3 na construção de uma interface completa. Foi possível praticar a organização de conteúdo, a criação de layouts com Grid e Flexbox, o uso de variáveis CSS, estados de interação, responsividade e boas práticas de acessibilidade.

A atividade demonstrou que uma página bem estruturada não depende apenas da aparência: semântica, navegação por teclado, textos alternativos, contraste e adaptação a diferentes dispositivos são partes essenciais da experiência. Em projetos futuros, esses conhecimentos poderão ser aplicados na criação de páginas mais escaláveis, integradas a serviços reais de envio de formulários e com componentes reutilizáveis.
