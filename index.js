const axios = require("axios");
const rwClient = require("./src/twitterClient.js");
const cronJob = require("cron").CronJob;

const date = new Date();
const currentDate = `${date.getFullYear()}-${
  date.getMonth() <= 9 ? `0${date.getMonth()}` : date.getMonth()
}-${date.getDate()}`;

axios.get("https://api.github.com/users/Biplo12/events").then((res) => {
  try {
    const currentRes = res.data?.map((d) => d.created_at);
    const dailyCommitsList = currentRes.filter((n) =>
      n.includes(currentDate) ? n : ""
    );
    dailyCommitsNumber = Object.keys(dailyCommitsList).length;
  } catch (err) {
    console.log(err);
  }
}),
  {
    headers: {
      Authorization: `token ${process.env.GITHUB_PERSONAL_TOKEN}`,
    },
  };

const tweet = async () => {
  try {
    await rwClient.v1.tweet(
      `On ${date.toLocaleString("en-US", {
        month: "long",
      })} ${date.getDate()} I commited ${dailyCommitsNumber} times.as${
        dailyCommitsNumber === 0 ? " :(" : "!"
      }`
    );
  } catch (err) {
    console.log(err.code);
  }
};

// App runs every day at 12 o'clock
const job = new cronJob("00 12 * * *", () => {
  tweet();
});

job.start();
