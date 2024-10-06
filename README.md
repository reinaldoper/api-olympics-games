# Sports API full-stack.

Este projeto é uma API REST desenvolvida com Node.js e Express que gerencia dados relacionados a esportes, atletas e usuários. Ele inclui autenticação JWT, rotas protegidas e integração com middleware de validação.
[apiCodante](https://apis-docs.codante.io/atletas-brasileiros)

## Tecnologias Utilizadas

- Node.js
- Express.js
- JWT (JSON Web Token)
- CORS
- Docker (para o banco de dados e outros serviços)
- NextJs

## Instalação

### Pré-requisitos

- Node.js (v16 ou superior)
- Docker (opcional, se desejar executar o projeto em contêineres)
- MySQL (ou outro banco de dados configurado)

### Passos

1. Clone o repositório:
  ```bash
   git clone <url-do-repositorio>
  ```

2. Instale as dependências:

  ```bash
  cd <url-do-repositorio> && cd backend &&
  npm install
  ```

3. Configure as variáveis de ambiente criando um arquivo .env no backend do projeto. O arquivo deve conter:

  ```bash
    MYSQL_DATABASE=<seus-dados-aqui-que-preferir>
    MYSQL_USER=<seus-dados-aqui-que-preferir>
    MYSQL_PASSWORD=<seus-dados-aqui-que-preferir>
    DB_HOST=localhost
    DB_DATABASE=<seus-dados-aqui-que-preferir>
    DB_PASSWORD=<seus-dados-aqui-que-preferir>
    DB_PORT=3306
    DB_USER=<seus-dados-aqui-que-preferir>
    PORT=3000
    JWT_SECRET=<seus-dados-aqui-que-preferir>
  ```

4. Execute o comando para rodar o docker compose e subir o banco de dados:
  ```bash
  cd <url-do-repositorio> && cd backend &&
  docker compose up -d
  ```

5. Execute o comando para rodar o servidor com nodemon:
  ```bash
  cd <url-do-repositorio> && cd backend &&
  npm start
  ```

6. Para resetar a base de dados e inserir dados de semente, use:

  ```bash
  cd <url-do-repositorio> && cd backend &&
  npm run dbreset
  ```

7. Rotas de Esporte
- GET /sport: Retorna todos os esportes (rota protegida).
- GET /sport/:id: Retorna um esporte por ID (rota protegida).
- POST /sport: Cria um novo esporte (rota protegida).
- PUT /sport/:id: Atualiza um esporte existente (rota protegida).
- DELETE /sport/:id: Deleta um esporte (rota protegida).
- GET /sport/:id/athlete: Retorna atletas associados ao esporte (rota protegida).

8. Rotas de Atleta
- GET /athlete: Retorna todos os atletas (rota protegida).
- GET /athlete/:id: Retorna um atleta por ID (rota protegida).
- POST /athlete: Cria um novo atleta (rota protegida).
- PUT /athlete/:id: Atualiza um atleta existente (rota protegida).
- DELETE /athlete/:id: Deleta um atleta (rota protegida).

9. Rotas de Usuário
- POST /user/login: Autenticação do usuário.
- POST /user/register: Registro de um novo usuário.
- GET /user/:id: Retorna um usuário por ID (rota protegida).
- DELETE /user/:id: Deleta um usuário por ID (rota protegida).


10. Frontend feito em NextJs.

11. Rode o servidor do frontend:

  ```bash
  cd <url-do-repositorio> &&  cd front-end &&
  npm install && npm run dev
  ```