const twitterAPI = require("twitter-api-v2").default;
const dotenv = require("dotenv").config();

const client = new twitterAPI({
  appKey: process.env.TWITTER_API_KEY,
  appSecret: process.env.TWITTER_SECRET_KEY,
  accessToken: process.env.TWITTER_ACCESS_TOKEN,
  accessSecret: process.env.TWITTER_ACCESS_SECRET_TOKEN,
});

const rwClient = client.readWrite;

module.exports = rwClient;
