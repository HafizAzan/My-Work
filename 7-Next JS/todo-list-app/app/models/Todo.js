import mongoose, { Schema } from "mongoose";

const TodoSchema = new Schema(
  {
    item: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["approve", "unapprove"],
      default: "approve",
      required: true,
    },
  },
  { timestamps: true }
);

const Todo = mongoose.models.Todo || mongoose.model("Todo", TodoSchema);

export default Todo;
