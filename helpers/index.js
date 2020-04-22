const crypto = require("crypto");

module.exports = {
  response: (response, status, message, result) => {
    var data = {};

    data.status = status || 200;

    if (message.length > 0) {
      data.message = message;
    }

    if (result) {
      data.data = result;
    }

    return response.status(data.status).json(data);
  },
  customErrorResponse: (response, status, message) => {
    const result = {};

    result.status = status || 400;
    result.message = message;

    return response.status(result.status).json(result);
  },
};
