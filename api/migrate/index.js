const ComputerModel = require('../models/ComputerModel');
const UserModel = require('../models/UserModel');

(function migrate() {
  ComputerModel.createTable();
  UserModel.createTable();
})();