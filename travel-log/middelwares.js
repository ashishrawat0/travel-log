const notFound = (req, res, next) => {
    const error = new Error(`Not Found -${req.originalUrl}`);
    res.status(404);
    next(error);
  }

const errorHandler = (error, req, res, nex) => {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    res.json({
      message: error.message,
      stack: process.env.NODE_ENV === 'production' ? 'Some error' : error.stack,
    });
  }

  module.exports={
    notFound,
    errorHandler
  }