class CustomError extends Error {
    constructor(message, errorCode){
        super(message);  // places the message in Error
        this.code = errorCode;
    }

}

module.exports = CustomError;