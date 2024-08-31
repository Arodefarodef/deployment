import { Schema } from "mongoose";
import { iPropsData } from "../interface";
import { model } from "mongoose";

const todoModel = new Schema<iPropsData>(
  {
    title: {
      type: String,
    },
    projectname: {
      type: String,
    },
    description: {
      type: String,
    },
  },
  { timestamps: true }
);

export default model<iPropsData>("todos", todoModel);
