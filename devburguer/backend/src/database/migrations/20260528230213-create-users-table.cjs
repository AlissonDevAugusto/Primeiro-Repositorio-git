'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      /* parametros que irao ter em nossa tabela de usuarios : */

      id: {
        /* configurando a coluna id : */
        primaryKey: true /* vai ser o primeiro chave das colunas , que e um id  */,
        allowNull: false /* obrigato ter , nao pode ser nulo */,
        type: Sequelize.UUID /* tipo UUID que vai ser criado nesse caso ex : 'd20f-d8f7-28dn-3idqd-qf3fkjw0c' */,
        defaultValue: Sequelize.UUIDV4 /* Sequelize vai defini o valor do id */,
      },
      name: {
        /* configurando a coluna name : */
        type: Sequelize.STRING /* do tipo texto  */,
        allowNull: false /* campo obrigatorio , nao pode ser nulo */,
      },
      email: {
        /* configurando a coluna email : */
        type: Sequelize.STRING /* do tipo texto */,
        allowNull: false /* campo obrigatorio , nao pode ser nulo */,
        unique: true /* nao pode criar email ja existente */,
      },
      password_hash: {
        /* configurando a coluna senha */
        type: Sequelize.STRING /* do tipo texto */,
        allowNull: false /* campo obrigatorio , nao pode ser nulo */,
      },
      admin: {
        /* configurando a coluna admin */
        type: Sequelize.BOOLEAN /* true ou false */,
        defaultValue: false /* apenas usuarios admin permiteremos com true , os demais terao como padrao false */,
      },
      created_at: {
        /* configurando a coluna de criaçao */
        type: Sequelize.DATE /* tipo de resgistro , data */,
        allowNull: false /* campo obrigatorio , nao pode ser nulo */,
      },
      updated_at: {
        /* configurando a coluna de atualizaçao */
        type: Sequelize.DATE /* tipo de resgistro , data */,
        allowNull: false /* campo obrigatorio , nao pode ser nulo */,
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('users');
  },
};

// UP -> subir , melhorar , configurar
// DOWN -> descer , baixo , desfazer , derrubar
