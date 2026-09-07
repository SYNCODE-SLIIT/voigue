import mongoose, { Schema } from "mongoose";

const ContactSubmissionSchema = new Schema(
  {
    name: { type: String, required: true },
    company: String,
    email: { type: String, required: true, index: true },
    phone: String,
    service: String,
    message: String,
    status: { type: String, enum: ["New", "Open", "Resolved", "Archived"], default: "New", index: true }
  },
  { timestamps: true }
);

export default mongoose.models.ContactSubmission ||
  mongoose.model("ContactSubmission", ContactSubmissionSchema);
