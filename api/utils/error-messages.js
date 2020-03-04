/**
 * ©2017-2018 LECRE Inc. All rights reserved
 */

const { ERROR_CODE, ERROR_STATUS, ERROR_ID } = require('../utils/constants');

/**
 * Create login info
 * @param {Object} req express request for using i18next
 * @param {Object} res express response
 * @param {Object} err contains statusCode, errorCode, messageId
*/
module.exports = (req, res, err = {}) => {
  res.setHeader('Content-Type', 'text/plain');
  if (err.statusCode) {
    res.statusCode = err.statusCode;
    res.send({
      errorCode: err.errorCode,
      message: req.t(err.messageId),
    });
  } else {
    res.statusCode = ERROR_STATUS.INTERNAL_ERROR;
    res.send({
      errorCode: ERROR_CODE.INTERNAL_ERROR,
      message: req.t(ERROR_ID.INTERNAL_ERROR),
    });
  }
};