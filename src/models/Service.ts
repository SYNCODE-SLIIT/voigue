import mongoose, { Schema } from "mongoose";

const ServiceSchema = new Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true, index: true },
    eyebrow: String,
    excerpt: String,
    overview: String,
    image: String,
    capabilities: [String],
    problems: [String],
    benefits: [String],
    industries: [String],
    process: [String],
    faqs: [{ question: String, answer: String }],
    order: { type: Number, default: 0 },
    published: { type: Boolean, default: true, index: true }
  },
  { timestamps: true }
);

export default mongoose.models.Service || mongoose.model("Service", ServiceSchema);
