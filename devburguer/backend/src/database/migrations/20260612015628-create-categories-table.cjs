'use strict';

const { STRING } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('categories', {
      /* parametros que irao ter em nossa tabela de produtos : */

      id: {
        /* configurando a coluna id : */
        primaryKey: true /* vai ser o primeiro chave das colunas , que e um id  */,
        allowNull: false /* obrigatorio ter, nao pode ser nulo */,
        type: Sequelize.INTEGER /* tipo do numero , nesse caso ex : 1,2,3... */,
        autoIncrement: true /* vai incrementa automaticamente a numeraçao das categorias */,
      },
      name: {
        /* configurando a coluna nome : */
        type: Sequelize.STRING /* tipo texto */,
        allowNull: false /* obrigatorio ter, nao pode ser nulo */,
        unique: true /* nao pode ter duas categoria com o mesmo nome , deve ser unico */,
      },
      created_at: {
        /* configurando a coluna de criaçao */
        type: Sequelize.DATE() /* tipo registro */,
        allowNull: false /* obrigatorio ter, nao pode ser nulo */,
      },
      updated_at: {
        /* configurando a coluna de atualizaçao */
        type: Sequelize.DATE() /* tipo resgitro */,
        allowNull: false /* obrigatorio ter, nao pode ser nulo */,
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('categories');
  },
};
