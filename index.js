const rwClient = require("./src/twitterClient.js");
const cronJob = require("cron").CronJob;

let counter = 1;
const tweet = async (message) => {
  try {
    await rwClient.v1.tweet(message);
  } catch (err) {
    if (err.code === 403) {
      console.log(err.code);
      counter += 1;
    }
  }
};

// App runs every day at 12 o'clock
const job = new cronJob("* * * * *", () => {
  tweet(`Tweeted ${counter}`);
  console.log("Tweeted successfully");
});

job.start();
