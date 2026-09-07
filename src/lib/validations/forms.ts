import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2).max(120),
  company: z.string().max(160).optional().or(z.literal("")),
  email: z.string().email(),
  phone: z.string().max(40).optional().or(z.literal("")),
  service: z.string().min(2).max(120),
  message: z.string().min(10).max(3000)
});

export const applicationSchema = z.object({
  jobId: z.string().min(1),
  name: z.string().min(2).max(120),
  email: z.string().email(),
  phone: z.string().min(6).max(40),
  linkedin: z.string().url().optional().or(z.literal("")),
  portfolio: z.string().url().optional().or(z.literal("")),
  coverLetter: z.string().max(4000).optional().or(z.literal("")),
  cvUrl: z.string().url("Upload CV to cloud storage and submit the file URL.")
});

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8)
});

export type ContactInput = z.infer<typeof contactSchema>;
export type ApplicationInput = z.infer<typeof applicationSchema>;
