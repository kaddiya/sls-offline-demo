"use strict";
let Squarer = require("./services/squarer.js");
module.exports.squarer = async event => {
  let numbers = JSON.parse(event.body);
  if (numbers == null || !Array.isArray(numbers)) {
    return constructResponse(400, "400 - Bad Request.The request body is empty or not an array");
  }
  let response = Squarer.getSquares(numbers);

  return constructResponse(200, "requested squares are", response);
};

function constructResponse(statusCode, message, data) {
  return {
    statusCode: statusCode,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": false
    },
    body: JSON.stringify({
      message: message,
      response: JSON.stringify(data)
    })
  };
}
