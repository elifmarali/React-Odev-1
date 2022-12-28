import axios from "axios";
import { log } from "console";
async function getUser(user_id) {
  const { data: user } = await axios(
    `https://jsonplaceholder.typicode.com/users/${user_id}`
  );
  const { data: post } = await axios(
    `https://jsonplaceholder.typicode.com/posts/${user_id}`
  );
  try {
    console.log(user, post);
  } catch (err) {
    console.log(err);
  }
}

export default getUser;
