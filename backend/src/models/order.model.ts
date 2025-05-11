import mongoose, { Schema } from "mongoose";
import { ClientSchema } from "./client.model";

const OrderSchema: Schema = new Schema({
  number: { type: Number, required: true },
  date: { type: Date, default: Date.now },
  status: { type: String, enum: ["A traiter", "En cours", "Terminée"], default: "A traiter" },
  client: ClientSchema,
    items: [
    {
      name: { type: String },
      description: { type: String },
      price: { type: Number },
      quantity: { type: Number }
    }
  ]

});

export default mongoose.model("Order", OrderSchema);