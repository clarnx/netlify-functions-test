// exports.handler = async function (event, context) {
//   console.log(process.version)
//   return {
//     statusCode: 200,
//     body: JSON.stringify({ message: process.version }),
//   };
// };


import fetch from "node-fetch";

const API_ENDPOINT = "http://colormind.io/api/";

exports.handler = async (event, context) => {
  return fetch(API_ENDPOINT, { headers: { Accept: "application/json" } })
    .then((response) => response.json())
    .then((data) => ({
      statusCode: 200,
      body: data,
    }))
    .catch((error) => ({ statusCode: 422, body: String(error) }));
};
