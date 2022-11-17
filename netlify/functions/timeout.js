exports.handler = async function (event, context) {
 
 function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
 
 await sleep(300000);

 return {
    statusCode: 200,
    body: JSON.stringify({ message: "Function was returned after 5 minutes" }),
  };
  
};
