import mongoose, { Schema } from "mongoose";

const TestimonialSchema = new Schema(
  {
    name: String,
    role: String,
    company: String,
    quote: String,
    image: String,
    featured: { type: Boolean, default: false },
    published: { type: Boolean, default: false, index: true }
  },
  { timestamps: true }
);

export default mongoose.models.Testimonial || mongoose.model("Testimonial", TestimonialSchema);
