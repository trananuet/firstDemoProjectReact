const ComputerModel = require('../models/ComputerModel');
const createConnection = require('../config/db');

exports.getDataComputer = () => new Promise((resolve, reject) => {
  ComputerModel.selectDataTable((err, result) => {
    if (err) {
      reject(err);
      return;
    }
    resolve(result);
  });
});

exports.setDataComputer = async (data) => new Promise(async (resolve, reject) => {
  let conn;
  try {
    conn = await createConnection();
    await new Promise((resolve, reject) => conn.beginTransaction((error) => {
      error ? reject(error) : resolve();
    }));

    const result = await ComputerModel.insertTable(data);

    conn.commit((error) => {
      conn.release()
      if (error) {
        conn.rollback(_ => reject(error));
        return;
      }
      resolve(result);
    });
  } catch (error) {
    if (conn) {
      conn.rollback(_ => reject(error));
      conn.release();
    }
  }
});