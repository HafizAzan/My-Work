import mongoose, { Schema } from "mongoose";

const TodoSchema = new Schema({
  items: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["approve", "unapprove"],
    required: true,
    default: "approve",
  },
  id: {
    type: Number,
    required: true,
    unique: true,
  },
});

TodoSchema.index({ id: 1 }, { unique: true });

export default mongoose.models.Todo || mongoose.model("Todo", TodoSchema);
