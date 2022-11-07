# Bolões da Copa - NLW Rocketseat

![Imagem de Capa do Projeto](./github/Capa.png)

## Descrição

### Finalidade
NLW Copa é uma aplicação para web e mobile afim de gamificar entre usuários, palpites de resultados dos jogos da copa.

Sendo possível criar Bolões referentes a jogos em que outros usuários logados e autenticados com suas contas Google, podem participar e dar seus palpites de pontuação.

### Como surgiu
Este projeto é um acompanhamento do evento NLW da [Rocketseat](https://rocketseat.com.br) que rolou durante a primeira semana de novembro de 2022.

Com o intuito de agregar conhecimento prático em cima de algumas das tecnologias mais atualizadas do mercado, o evento NLW Copa instruiu a Contrução de uma aplicação completa com backend e frontend, tanto web quanto mobile.

---

### Web
![Interface da aplicação web](./github/web.png)


### Mobile
![Interface de aplicativo móvel](./github/app-pages-w-bg.png)

---

## Principais Tecnologias Utilizadas

### Backend
 - [Node.JS](https://nodejs.org/en/)
 - [Fastify](https://www.fastify.io/)
 - [Typescript](https://www.typescriptlang.org/)
 - [Prisma](https://www.prisma.io/)

### Web
 - [ReactJS](https://reactjs.org/)
 - [Typescript](https://www.typescriptlang.org/)
 - [Next.JS](https://nextjs.org/)
 - [Tailwind](https://tailwindcss.com/)

### Mobile
 - [React Native](https://reactnative.dev/)
 - [Typescript](https://www.typescriptlang.org/)
 - [Expo](https://expo.dev/)
 - [Native Base](https://nativebase.io/)

 ---

 ## Clonar e Rodar Localmente

 ### Requisitos
 - [Git](https://git-scm.com/) instalado.
 - [Node.JS](https://nodejs.org/en/) **v18** ou superior instalado.

 ### Clone

```
$ git clone https://github.com/otiagosantos/nlw-copa.git

$ cd nlw-copa
```

### Configuração servidor node

Entrar na pasta e instalar pacotes do node:
```
$ cd server

$ npm install
```

Executar migrations e seeds do prisma:
```
$ npm run migrate:dev

$ npx prisma db seed
```

Através de um editor de código de sua preferência, siga os seguntes passos:

Renomeie o arquivo .env.example para .env e a URL de coneção do seu banco de dados relacional em `DATABASE_URL` caso tenha preferência por outro banco que não o SQLite.

Ainda no mesmo arquivo .env, na variável `JWT_SECRET` escolha uma chave secreta para a sua aplicação caso prefira, senão ainda é possível manter a chave padrão de exemplo.
