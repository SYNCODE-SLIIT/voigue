import mongoose, { Schema } from "mongoose";

const ApplicationSchema = new Schema(
  {
    jobId: { type: Schema.Types.Mixed, required: true, index: true },
    name: { type: String, required: true },
    email: { type: String, required: true, index: true },
    phone: String,
    linkedin: String,
    portfolio: String,
    coverLetter: String,
    cvUrl: String,
    status: {
      type: String,
      enum: ["New", "Reviewing", "Shortlisted", "Interview", "Rejected", "Hired"],
      default: "New",
      index: true
    }
  },
  { timestamps: true }
);

export default mongoose.models.Application || mongoose.model("Application", ApplicationSchema);
