import Sequelize, { Model } from 'sequelize';

class Products extends Model {
  /* model de produtos no banco */
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        price: Sequelize.INTEGER,
        path: Sequelize.STRING,
        offer: Sequelize.BOOLEAN,
        url: {
          type: Sequelize.VIRTUAL,
          get() {
            return `http://localhost:3001/product-file/${this.path}`;
          },
        },
      },
      {
        sequelize,
        tableName: 'products',
      },
    );

    return this;
  }

  static associate(models) { /* relacao entre os products e categories */
    this.belongsTo(models.Category, {
      foreignKey: 'category_id',
      as: 'category'
    })
  }

}

export default Products;
