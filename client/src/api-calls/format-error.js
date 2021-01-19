const makeError = (err, options = {}) => {
  let error = err.message || 'Something went wrong';
  let message = error;
  let httpStatusCode = 500;
  let data;
  try {
    const res = err.response.data;
    error = res.error;
    message = res.message;
    httpStatusCode = res.httpStatusCode;
    data = res.data;
  } catch (e) {
    // take default values
  }

  // eslint-disable-next-line no-console
  if (process.env.NODE_ENV !== 'production') console.error(error);

  return {
    error,
    message,
    httpStatusCode,
    data,
  };
};

export default makeError;
