# Portfólio de Jean Luis

Portfólio pessoal desenvolvido com HTML, CSS e JavaScript puro. O site apresenta minha trajetória, competências, projetos e formas de contato.

## Como o projeto funciona

- **HTML:** organiza o conteúdo da página, como títulos, textos, imagens e links.
- **CSS:** altera a aparência dos elementos, como cores, tamanhos, espaços e alinhamentos.
- **JavaScript:** controla o botão **Topo**, que faz a página retornar suavemente ao início.

Não é necessário instalar biblioteca ou programa adicional para abrir o projeto.

## Organização dos arquivos

```text
Portfólio/
├── index.html                 Conteúdo completo da página
├── css/
│   ├── geral.css              Regras usadas em todas as seções
│   ├── cabecalho.css          Cabeçalho e menu de navegação
│   ├── inicio.css             Apresentação inicial
│   ├── sobre.css              Seção Sobre
│   ├── competencias.css       Competências, certificações e formação
│   ├── projetos.css           Cartões dos projetos
│   ├── contato.css            Contato e redes sociais
│   └── rodape.css             Rodapé e botão Topo
├── js/
│   └── botao-topo.js          Exibição e rolagem suave do botão Topo
└── assets/images/             Imagens exibidas na página
```

Cada parte visual possui seu próprio arquivo CSS. Assim, uma alteração na seção **Projetos**, por exemplo, deve ser procurada primeiro em `css/projetos.css`.

## Nomes usados no código

As classes foram escritas em português e descrevem o elemento ao qual pertencem. Alguns exemplos:

- `.menu-principal`: conjunto de links do cabeçalho;
- `.foto-perfil`: foto exibida na apresentação;
- `.cartao-projeto`: cartão clicável de um projeto;
- `.informacoes-projeto`: nome, descrição e visibilidade do projeto;
- `.botao-topo`: botão que retorna ao início da página.

Todas as linhas dos arquivos CSS possuem um comentário ao lado explicando o efeito visual da regra.

## Como abrir

1. Abra a pasta do projeto.
2. Clique duas vezes no arquivo `index.html`.
3. O portfólio será aberto no navegador padrão.

## Seções da página

- **Início:** foto e apresentação profissional.
- **Sobre:** resumo da trajetória e objetivos.
- **Competências:** conhecimentos, certificações e formação.
- **Projetos:** cinco projetos com descrição e link para o GitHub.
- **Contato:** links para LinkedIn e GitHub.
