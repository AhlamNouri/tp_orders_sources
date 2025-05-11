import mongoose, { Schema } from "mongoose";

export const ItemSchema: Schema = new Schema({
  name: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true }
});

export default mongoose.model("Item", ItemSchema);