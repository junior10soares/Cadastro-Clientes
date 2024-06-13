## Descrição do Projeto
Criei um projeto de cadastro de clientes com o objetivo de aplicar e aprimorar minhas habilidades em desenvolvimento web, utilizando uma stack moderna e robusta. Este projeto permite o cadastro, listagem e exclusão de clientes, proporcionando uma interface amigável e responsiva.

## Tecnologias Utilizadas
MongoDB: Utilizado como banco de dados NoSQL para armazenar as informações dos clientes.
API: Desenvolvimento de uma API utilizando Fastify para gerenciar as requisições HTTP.
Axios: Utilizado para fazer as requisições HTTP do frontend para a API.
TypeScript: Adicionado ao projeto para proporcionar tipagem estática e melhorar a manutenção do código.
Prisma: ORM utilizado para facilitar as operações com o banco de dados MongoDB.
Banco de Dados: MongoDB Atlas foi utilizado como a instância de banco de dados em nuvem.
Insomnia: Utilizado para testar as rotas da API e garantir que todas as funcionalidades estão funcionando corretamente.
TailwindCSS: Biblioteca de CSS utilitária utilizada para estilização e garantir a responsividade do projeto.

## Funcionalidades Implementadas
Cadastro de Clientes: Permite adicionar novos clientes através de um formulário simples e intuitivo.
Listagem de Clientes: Exibe uma lista de todos os clientes cadastrados, com nome e email.
Exclusão de Clientes: Permite a exclusão de clientes da lista com um simples clique.
Responsividade: A interface é responsiva, garantindo uma boa experiência de usuário tanto em dispositivos móveis quanto em desktops.

## Estrutura do Projeto
Backend: Desenvolvido com Fastify, Prisma e MongoDB, fornecendo uma API robusta e eficiente.
Frontend: Desenvolvido com React, TypeScript e TailwindCSS, garantindo uma interface de usuário moderna e responsiva.

## Como Utilizar o Projeto
Clonar o Repositório:
git clone https://github.com/seu-usuario/nome-do-repositorio.git

## Instalar as Dependências:
npm install

## Configurar as Variáveis de Ambiente:
DATABASE_URL="mongodb+srv://seu-usuario:senha@cluster.mongodb.net/nome-do-banco?retryWrites=true&w=majority"

## Executar as Migrações do Prisma:
npx prisma generate

## Iniciar o Servidor:
npm run dev

## Testes da API
Utilize o Insomnia ou outra ferramenta similar para testar as rotas da API. As principais rotas são:
GET /customers: Lista todos os clientes.
POST /customer: Adiciona um novo cliente.
DELETE /customer/:id: Exclui um cliente.
