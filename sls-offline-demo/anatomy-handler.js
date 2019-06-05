'use strict';

module.exports.anatomy = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      input: event,
    }),
  };
};
