const errorHandler = (statusCode, message) => {
  return {
    status: statusCode,
    message,
  };
};

export default errorHandler;