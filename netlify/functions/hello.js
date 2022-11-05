exports.handler = async function (event, context) {
  console.log(process.version)
  return {
    statusCode: 200,
    body: JSON.stringify({ message: process.version }),
  };
};
