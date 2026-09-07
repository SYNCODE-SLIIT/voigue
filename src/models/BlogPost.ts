import mongoose, { Schema } from "mongoose";

const BlogPostSchema = new Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true, index: true },
    excerpt: String,
    content: String,
    coverImage: String,
    category: { type: String, index: true },
    author: String,
    published: { type: Boolean, default: false, index: true },
    publishedAt: Date,
    tags: [String],
    seoTitle: String,
    seoDescription: String
  },
  { timestamps: true }
);

export default mongoose.models.BlogPost || mongoose.model("BlogPost", BlogPostSchema);
