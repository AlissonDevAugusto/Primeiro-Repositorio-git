import { Sequelize } from 'sequelize'; /* ORM do PostegreSQL */
import databaseConfig from '../config/database.cjs';
import mongoose from 'mongoose'; /* ORM do MongoDB(noSQL) */

import User from '../app/models/User.js';
import Products from '../app/models/Products.js';
import Category from '../app/models/Category.js';

const models = [User, Products, Category];

class Database {
  constructor() {
    this.init();
    this.mongo();
  }

  init() {
    this.connection = new Sequelize(
      databaseConfig,
    ); /* conexao com a config do banco */
    models
      .map((model) => model.init(this.connection))
      .map(
        (model) => model.associate && model.associate(this.connection.models),
      ); /* conexao 'Category and Products' */
  }

  mongo() {
    this.mongooseConnection = mongoose.connect(
      'mongodb://localhost:27017/devburguer',
    );
  }

}

export default new Database(); /* exporta ja estanciada para uso */
