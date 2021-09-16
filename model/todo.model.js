import mongoose, { Schema } from "mongoose";

const TodoSchema = new Schema(
  {
    name: { type: String },
    is_checked: { type: Boolean },
    createdAt: { type: Date },
    updatedAt: { type: Date },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("todo_list", TodoSchema);
