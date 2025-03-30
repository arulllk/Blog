const CustomAPIError = require('./custom-api');

class UnauthenticatedError extends CustomAPIError {
  constructor(message,errors) {
    super(message,401,errors);        
  }
}

module.exports = UnauthenticatedError;
