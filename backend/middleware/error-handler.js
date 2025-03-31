const { CustomAPIError } = require('../errors')

const errorHandlerMiddleware = (err, req, res, next) => {
    
    // if (err instanceof CustomAPIError) {
    //     return res.status(err.statusCode).json({ msg: err.message });
    // }

    let customError = {
        // setting default        
        statusCode : err.statusCode || 500,
        msg : err.message || 'Something went wrong'
    }

    if(err.name === 'ValidationError') {
        customError.statusCode = 400;
        const tempError = Object.keys(err.errors).reduce((acc,key) => {
            acc[key] = err.errors[key].message
            return acc;
        },{});
        customError.msg = "Validation Error";
        customError.error = tempError;

    }
    
    //return res.status(500).json({ err });
    return res.status(customError.statusCode).json({status:"Error", message:customError.msg, error:customError.error })
};

module.exports = errorHandlerMiddleware;