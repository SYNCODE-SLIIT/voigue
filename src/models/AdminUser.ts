import mongoose, { Schema } from "mongoose";

const AdminUserSchema = new Schema(
  {
    email: { type: String, required: true, unique: true, index: true },
    passwordHash: { type: String, required: true },
    name: String,
    role: { type: String, enum: ["Owner", "Admin", "Editor"], default: "Admin" },
    active: { type: Boolean, default: true }
  },
  { timestamps: true }
);

export default mongoose.models.AdminUser || mongoose.model("AdminUser", AdminUserSchema);
