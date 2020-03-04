const { getDataComputer, setDataComputer } = require('../controllers/computer_controller');

exports.routerConfig = app => {
  app.get('/api/get-data-computer', getDataComputer);
  app.post('/api/create-data-computer', [setDataComputer]);
};