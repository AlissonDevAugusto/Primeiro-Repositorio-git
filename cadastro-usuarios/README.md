# Cadastro de Usuários

Este projeto contém duas aplicações independentes:

- `frontend`: interface React/Vite para cadastrar e consultar usuários.
- `backend`: API Express com Prisma e MongoDB.

## Como executar

Em dois terminais diferentes:

```powershell
cd frontend
npm install
npm run dev
```

```powershell
cd backend
npm install
npm run dev
```

O frontend usa a API em `http://localhost:3000`.

## Banco de dados

A variável `DATABASE_URL` fica em `backend/.env` e não deve ser enviada ao Git.
