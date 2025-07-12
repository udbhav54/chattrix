import mongoose from "mongoose";
const { Schema, model, models } = mongoose;

const messageSchema = new Schema(
  {
    content: String,
    attachments: [
      {
        public_id: { type: String, required: true },
        url: { type: String, required: true },
      },
    ],
    sender: { type: Schema.Types.ObjectId, ref: "Chat", required: true },
  },
  { timestamps: true }
);

export const Message = models.Message || model("Message", messageSchema);
