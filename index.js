const rwClient = require("./src/twitterClient.js");
const cronJob = require("cron").CronJob;

const tweet = async () => {
  try {
    await rwClient.v1.tweet("Hello!");
  } catch (err) {
    console.log(err);
  }
};

// App runs every day at 12 o'clock
const job = new cronJob("1 * * * *", () => {
  tweet();
});

job.start();
