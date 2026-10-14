import Sequelize, { Model } from 'sequelize';

class User extends Model {
  /* model de usuarios no banco*/
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        password_hash: Sequelize.STRING,
        admin: Sequelize.BOOLEAN,
      },
      { sequelize, tableName: 'users' },
    );
    
    return this;
  }
}

export default User;
