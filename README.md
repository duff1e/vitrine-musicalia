# 🎶 Musicália - Um Projeto do Challenge Alura Geek 🎶

Bem-vindo ao **Musicália**, uma aplicação de vitrine musical onde os usuários podem visualizar e adicionar álbuns a uma lista personalizada! Este projeto foi desenvolvido como parte do Challenge Alura Geek do Programa Oracle Next Education e foi amplamente customizado.

## 📦 Funcionalidades

- **Listagem de Álbuns**: Os álbuns são carregados dinamicamente a partir de um arquivo `db.json`, permitindo que os usuários visualizem uma coleção variada de músicas.
  
- **Adicionar Álbuns**: Os usuários podem adicionar novos álbuns à lista informando o nome do álbum, artista, preço e a URL da imagem.

- **Excluir Álbuns**: É possível remover álbuns da lista com um simples clique no ícone de lixeira, atualizando automaticamente a lista exibida.

- **Interface Interativa**: A aplicação possui uma interface amigável e responsiva, que melhora a experiência do usuário.

## ⚙️ Tecnologias Utilizadas

- **HTML**: Estrutura básica da aplicação.
- **CSS**: Estilização e layout dos componentes.
- **JavaScript**: Lógica de interação, manipulação do DOM e integração com a API.
- **json-server**: Usado durante o desenvolvimento para simular uma API RESTful com o arquivo `db.json`.

## 🚀 Como Rodar o Projeto

1. Clone o repositório:
```bash
   git clone https://github.com/duff1e/vitrine-musicalia.git
   cd vitrine-musicalia
```
2. Instale o json-server (caso não esteja instalado, se estiver, pule para o próximo passo):

```bash
    npm install json-server
```

3. Inicie o json-server e marque para rodar o db.json:

```bash
    json-server --watch db.json
```

## 🤝 Contribuições

Sinta-se à vontade para contribuir com melhorias e correções. Se você encontrar algum problema ou tiver sugestões, não hesite em abrir uma issue!

## 🎉 Agradecimentos

Agradeço à Alura e ao Programa Oracle Next Education pela oportunidade de desenvolver este projeto!