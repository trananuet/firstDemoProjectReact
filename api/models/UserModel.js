const createConnection = require('../config/db');

class UserModel {
  constructor() { }
}

UserModel.createTable = () => {
  createConnection().then(sql => {
    sql.query(`CREATE TABLE users (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), address VARCHAR(255)) `, (err, res) => {
      console.log('CreateUsersTable');
      sql.release();
    });
  }).catch(err => {
    console.log(err);
  });
};

module.exports = UserModel;