# DevBurguer — Plataforma de Pedidos

O projeto está organizado em duas aplicações:

- `frontend`: interface React/Vite, disponível durante o desenvolvimento em `http://localhost:5173`.
- `backend`: API Express, disponível em `http://localhost:3001`.

## Executar o projeto

Em terminais separados, instale as dependências e inicie cada aplicação:

```powershell
cd frontend
yarn install
yarn dev
```

```powershell
cd backend
pnpm install
pnpm dev
```

## Variáveis de ambiente

Crie e preencha `backend/.env` antes de iniciar a API. Esse arquivo não é versionado; ele deve conter ao menos a chave `STRIPE_SECRET_KEY` usada nos pagamentos.

As imagens já cadastradas pela aplicação ficam em `backend/uploads`.
