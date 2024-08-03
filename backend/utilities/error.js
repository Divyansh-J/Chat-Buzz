export const errorHandler = (statusCode, message) => {
  return {
    status: statusCode,
    message,
  };
};