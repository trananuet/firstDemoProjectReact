const mysql = require('mysql');
const dotenv = require('dotenv').config();

// Set database connection with product
const CONFIG_PRO = {
  host: process.env.DB_HOST_PRO,
  user: process.env.DB_USER_PRO,
  password: process.env.DB_PASS_PRO,
  database: process.env.DB_NAME_PRO
};

// Set database connection with development
const CONFIG_DEV = {
  host: process.env.DB_HOST_DEV,
  user: process.env.DB_USER_DEV,
  password: process.env.DB_PASS_DEV,
  database: process.env.DB_NAME_DEV
};

// Set database connection with local
const CONFIG_LOCAL = {
  host: process.env.DB_HOST_LOCAL,
  user: process.env.DB_USER_LOCAL,
  password: process.env.DB_PASS_LOCAL,
  database: process.env.DB_NAME_LOCAL
};

// Create a MySQL connection
let arg = process.argv[2];

let configDb;

switch (arg) {
  case process.env.ENV_PRO:
    configDb = CONFIG_PRO;
    break;
  case process.env.ENV_DEV:
    configDb = CONFIG_DEV;
    break;
  case process.env.ENV_LOCAL:
    configDb = CONFIG_LOCAL;
    break;
  default:
    configDb = CONFIG_LOCAL;
};

const pool = mysql.createPool(configDb);

function createConnection() {
  return new Promise((resolve, reject) => {
    pool.getConnection((error, conn) => {
      if (error) {
        reject(error);
      } else {
        resolve(conn);
      }
    })
  })
};
// Export the connection
module.exports = createConnection;