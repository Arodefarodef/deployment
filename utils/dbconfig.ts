import env from "dotenv";
import { connect } from "mongoose";

env.config();

export const dbConfig = async () => {
  try {
    return await connect(process.env.MONGODB_CONNECTION!)
      .then(() => {
        console.log("connected");
      })
      .catch(() => {
        console.error();
      });
  } catch (error) {
    return error;
  }
};
