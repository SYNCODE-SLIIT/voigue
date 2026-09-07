import mongoose, { Schema } from "mongoose";

const IndustrySchema = new Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true, index: true },
    excerpt: String,
    content: String,
    image: String,
    published: { type: Boolean, default: true, index: true }
  },
  { timestamps: true }
);

export default mongoose.models.Industry || mongoose.model("Industry", IndustrySchema);
