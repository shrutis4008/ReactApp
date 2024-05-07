import errorhandler from "../utils/errorHandler";

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal Server Error";

  // error to catch incorrect mongodb ID
  if (err.name === "CaseError") {
    const message = `Resource not found. Invalid : ${err.path}`;
    err = new errorhandler(message, 400);
  }

  // Error due to duplicate key
  if (err.code === 11000) {
    const message = `Duplicate ${Object.keys(err.keyValue)} Entered`;
    err = new errorhandler(message, 400);
  }

  // Incorrect JWT token error
  if (err.name === "JsonWebTokenError") {
    const message = `Json Web Token is invalid, try again`;
    err = new errorhandler(message, 400);
  }

  // JWT token expiration error
  if (err.name === "TokenExpiredError") {
    const message = `Json Web Token is expired, try again`;
    err = new errorhandler(message, 400);
  }

  res.status(err.statusCode).json({
    success: false,
    message: err.message,
  });
};
