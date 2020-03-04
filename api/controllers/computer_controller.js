const computerService = require('../services/computer_service.js');
const errorMessages = require('../utils/error-messages');
const { SUCCESS_STATUS } = require('../utils/constants');

/**
 * @param req authCode
 * @returns res (success : HttpStatusCode 200, error: HttpStatusCode, message: OK)
*/
exports.getDataComputer = async (req, res) => {
  try {
    let getComputer = await computerService.getDataComputer();
    res.send(getComputer);
  } catch (err) {
    // errorMessages(req, res);
  }
};

exports.setDataComputer = async (req, res) => {
  try {
    let { type, name} = req.body;
    let data = await computerService.setDataComputer({type: type, name: name});
    // res.sendStatus(SUCCESS_STATUS.UPDATED);
    res.send(data);
  } catch (err) {
    // errorMessages(req, res);
  }
};