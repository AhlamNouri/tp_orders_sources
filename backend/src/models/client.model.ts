import { Schema, Types } from "mongoose";

export const ClientSchema: Schema = new Schema(
  {
    id: { type: Types.ObjectId },
    name: { type: String, required: true },
    firstname: { type: String, required: true }
  },
  { versionKey: false }
);