"use strict";

module.exports.hello = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "This is a PR deploy preview!",
        input: event
      },
      null,
      2
    )
  };
};
