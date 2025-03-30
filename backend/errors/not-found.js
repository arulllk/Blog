const CustomAPIError = require('./custom-api');

class NotFoundError extends CustomAPIError {
  constructor(message,errors) {
    super(message,404,errors);     
  }
}

module.exports = NotFoundError;
