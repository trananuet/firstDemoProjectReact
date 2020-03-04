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
  const inserData = {
    type: data.type,
    name: data.name
  };
  createConnection().then(sql => {
    sql.query('INSERT INTO computers SET ?', inserData, (err, res) => {
      sql.release();
    });
  }).catch(err => {
    console.log(err);
  });
};

ComputerModel.selectDataTable = (handler) => {
  createConnection().then(sql => {
    sql.query(`SELECT * FROM computers`, (err, res) => {
      if (err) {
        handler(err, null);
      } else {
        handler(null, res);
      }
      sql.release();
    });
  }).catch(err => {
    handler(err);
  });
};

module.exports = ComputerModel;