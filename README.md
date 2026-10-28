# API REST com JavaScript

API de estudo para gerenciamento de alunos, usuários e fotos, desenvolvida com Node.js e Express. O projeto utiliza Sequelize com MariaDB, autenticação por token JWT e upload de imagens com Multer.

## Tecnologias

- Node.js e Express
- Sequelize e MariaDB
- JSON Web Token (JWT), bcryptjs e Multer
- Sucrase e Sequelize CLI

## Rotas

| Método | Rota | Descrição | Autenticação |
| --- | --- | --- | --- |
| POST | `/tokens/` | Gera token a partir de e-mail e senha | Não |
| GET | `/students/` | Lista alunos | Não |
| GET | `/students/:id` | Consulta um aluno | Não |
| POST | `/students/` | Cria um aluno | Sim |
| PUT | `/students/:id` | Atualiza um aluno | Sim |
| DELETE | `/students/:id` | Exclui um aluno | Sim |
| POST | `/users/` | Cria um usuário | Sim |
| PUT | `/users/` | Atualiza o usuário autenticado | Sim |
| DELETE | `/users/` | Exclui o usuário autenticado | Sim |
| POST | `/photos/` | Envia foto associada a um aluno | Sim |

Nas rotas protegidas, envie o cabeçalho `Authorization: Bearer <token>`. Para fotos, use `multipart/form-data` com o arquivo no campo `photo` e o identificador no campo `student_id`.

**Observação:** a criação de usuários também exige autenticação. É necessário provisionar um usuário inicial no banco para obter o primeiro token.

## Configuração

Instale as dependências com `npm install`, crie um banco MariaDB e configure um arquivo `.env` na raiz com as variáveis usadas pelo código:

```env
APP_PORT=3000
APP_URL=http://localhost:3000
DATABASE_HOST=localhost
DATABASE_PORT=3306
DATABASE_USERNAME=seu_usuario
DATABASE_PASSWORD=sua_senha
DATABASE=nome_do_banco
TOKEN_SECRET=uma_chave_secreta
TOKEN_EXPIRATION=1d
```

Execute as migrações com `npx sequelize-cli db:migrate`. Para gerar e iniciar a versão compilada:

```bash
npm run build
npm start
```

O script `npm run dev` aponta para `server.js` na raiz, enquanto o arquivo disponível está em `src/server.js`; ajuste o comando localmente caso queira utilizá-lo. O script de testes é apenas um marcador e não executa uma suíte de testes.
