const rwClient = require("./src/twitterClient.js");

const tweet = async () => {
  try {
    await rwClient.v1.tweet("Hello!");
  } catch (err) {
    console.log(err);
  }
};

tweet();
