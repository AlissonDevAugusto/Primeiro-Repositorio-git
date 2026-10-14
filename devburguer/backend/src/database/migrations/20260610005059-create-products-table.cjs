'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('products', {
      /* parametros que irao ter em nossa tabela de produtos : */

      id: {
        /* configurando a coluna id : */
        primaryKey: true /* vai ser o primeiro chave das colunas , que e um id  */,
        allowNull: false /* obrigatorio ter, nao pode ser nulo */,
        type: Sequelize.INTEGER /* tipo do numero , nesse caso ex : 1,2,3... */,
        autoIncrement: true /* vai incrementa automaticamente a numeraçao de cada products */,
      },
      name: {
        /* configurando a coluna nome : */
        type: Sequelize.STRING /* tipo texto */,
        allowNull: false /* obrigatorio ter, nao pode ser nulo */,
      },
      price: {
        /* configurando a coluna preço : */
        type: Sequelize.INTEGER /* tipo numero */,
        allowNull: false /* obrigatorio ter, nao pode ser nulo */,
      },
      path: {
        /* configurando a coluna do endereço da imagem : */
        type: Sequelize.STRING() /* tipo texto por que e onde vai fica o endereço */,
        allowNull: false /* obrigatorio ter, nao pode ser nulo */,
      },
      category: {
        /* configurando a coluna da categoria : */
        type: Sequelize.STRING() /* tipo texto */,
        allowNull: false /* obrigatorio ter, nao pode ser nulo */,
      },
      created_at: {
        /* configurando a coluna de criaçao */
        type: Sequelize.DATE /* tipo registro */,
        allowNull: false /* obrigatorio ter, nao pode ser nulo */,
      },
      updated_at: {
        /* configurando a coluna de atualizaçao */
        type: Sequelize.DATE /* tipo resgitro */,
        allowNull: false /* obrigatorio ter, nao pode ser nulo */,
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('products');
  },
};
