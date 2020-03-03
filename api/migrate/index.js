const ComputerModel = require('../model/ComputerModel');
const UserModel = require('../model/UserModel');

(function migrate() {
    ComputerModel.createTable();
    UserModel.createTable();
})();