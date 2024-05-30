import { Schema, Types, model } from "mongoose";

export interface iProps {
  title: string;
  desc: string;
  priority: string;
  dueDate: string;
  date: string;
  progress: boolean;
  done: boolean;
}

export interface iPropsData extends iProps, Document {}

const todoModel = new Schema<iPropsData>(
  {
    title: {
      type: String,
    },
    desc: {
      type: String,
    },
    priority: {
      type: String,
    },
    dueDate: {
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
export default model<iPropsData>("todo", todoModel);
