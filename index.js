const axios = require("axios");
const rwClient = require("./src/twitterClient.js");
const cronJob = require("cron").CronJob;

const instance = axios.create({
  baseURL: "https://api.github.com/users/Biplo12/events",
  headers: {
    client_id: process.env.GITHUB_CLIENT_ID,
    client_secret: process.env.GITHUB_CLIENT_SECRET,
  },
});
const date = new Date();
const currentDate = `${date.getFullYear()}-${
  date.getMonth() <= 9 ? `0${date.getMonth()}` : date.getMonth()
}-${date.getDate()}`;

instance.get("https://api.github.com/users/Biplo12/events").then((res) => {
  try {
    const currentRes = res.data?.map((d) => d.created_at);
    console.log(currentRes.filter((n) => n === currentDate));
  } catch (err) {
    console.log(err);
  }
  //   const commits = res.data?.map((i) =>
  //     i.payload.commits?.map((c) => c.message)
  //   );
  //   console.log(commits);
});

// let counter = 1;
// const tweet = async (message) => {
//   try {
//     await rwClient.v1.tweet(message);
//   } catch (err) {
//     if (err.code === 403) {
//       console.log(err.code);
//       counter += 1;
//     }
//   }
// };

// App runs every day at 12 o'clock
// const job = new cronJob("* * * * *", () => {
//   tweet(`Tweeted ${counter}`);
//   console.log("Tweeted successfully");
// });

// job.start();
