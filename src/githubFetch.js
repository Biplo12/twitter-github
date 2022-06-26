import axios from "axios";

const res = axios.get("https://api.github.com/users/Biplo12/events", () => {
  try {
    console.log(res);
  } catch (err) {
    console.log(err);
  }
});
