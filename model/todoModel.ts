import { Schema, Types, model } from "mongoose";

export interface iProps {
  title: string;
  date: string;
  progress: boolean;
  done: boolean;
}

interface iData {
  todo: iProps[];
  progress: iProps[];
  done: iProps[];
}

export interface iPropsData extends iProps, Document {}

const todoModel = new Schema<iPropsData>(
  {
    title: {
      type: String,
    },
    progress: {
      type: Boolean,
      default: false,
    },

    done: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);
// const todoModel = new Schema(
//   {
//     todo: {
//       type: [],
//     },
//     progress: {
//       type: [],
//     },

//     done: {
//       type: [],
//     },
//   },
//   { timestamps: true }
// );

export default model<iPropsData>("todo", todoModel);
