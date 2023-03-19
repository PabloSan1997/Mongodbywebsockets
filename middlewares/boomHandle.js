const boom = require('@hapi/boom');
function boomHandleError(error, req, res, next){
    if(error.isBoom){
       const info= error.output.payload;
       res.status(info.statusCode).json(info);
    }
    
    next(error);
}   
function validatorHandler(schema, property) {
    return (req, res, next) => {
      const data = req[property];
      const { error } = schema.validate(data, { abortEarly: false });
      if (error) {
        next(boom.badRequest(error));
      }
      next();
    }
  }
module.exports={boomHandleError, validatorHandler}