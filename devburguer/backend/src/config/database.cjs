module.exports = {
  dialect: 'postgres' /* qual banco de dados vamos ultilizar */,
  host: 'localhost',
  port: 5432 /* se criou com a porta padrao(5432) nao precisava ser colocada */,
  username: 'admin' /* POSTGRES_USER */,
  password: '123456' /* POSTGRES_PASSWORD */,
  database: 'dev-burguer-db' /* POSTGRES-DB */,
  define: {
    timestamps: true /* cria o registro da data e atualizaçao de algum dado do banco de dados */,
    underscored: true,
    underscoredAll: true /* define um padrao de letras */,
  },
};
