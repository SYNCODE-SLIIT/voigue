import mongoose, { Schema } from "mongoose";

const FAQSchema = new Schema(
  {
    question: { type: String, required: true },
    answer: { type: String, required: true },
    category: { type: String, index: true },
    order: { type: Number, default: 0 },
    published: { type: Boolean, default: true, index: true }
  },
  { timestamps: true }
);

export default mongoose.models.FAQ || mongoose.model("FAQ", FAQSchema);
