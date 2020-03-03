const createConnection = require('../config/db');

class ComputerModel {
  constructor() { }
}

ComputerModel.createTable = () => {
  createConnection().then(sql => {
    sql.query(`CREATE TABLE computers (id INT AUTO_INCREMENT PRIMARY KEY, type VARCHAR(255), name VARCHAR(255))`, (err, res) => {
      console.log('CreateComputersTable');
      sql.release();
    });
  }).catch(err => {
    console.log(err);
  });
};

ComputerModel.insertTable = (data) => {
  createConnection().then(sql => {
    sql.query(`INSERT INTO computers (type, name) VALUES (${data.type}, ${data.name})`, (err, res) => {
      console.log('insertTable');
      sql.release();
    });
  }).catch(err => {
    console.log(err);
  });
};

module.exports = ComputerModel;