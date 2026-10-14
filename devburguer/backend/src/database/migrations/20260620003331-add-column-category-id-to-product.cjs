'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('products', 'category_id', { /* adicionar coluna 'category_id' na tabela 'products' */
      type: Sequelize.INTEGER,
      references: { /* um id da tabela categories */
        model: 'categories',
        key: 'id',
      },
      onUpdate: 'CASCADE', /* quando a tabela atualizar , atualiza a relaçao */
      onDelete: 'SET NULL', /* passa o category_id para nulo caso seja deletado */
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('products', 'category_id'); /* caso precise reverter, deleta a coluna  */
  },
};
