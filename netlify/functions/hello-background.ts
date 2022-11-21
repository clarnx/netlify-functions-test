exports.handler = function (event, context) {
  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async function demo() {
    for (let i = 0; i < 60; i++) {
      let date = new Date();
      await sleep(1000);
      console.log("Background Function Is Run");
    }
    console.log("Done");
  }

  demo();
};
