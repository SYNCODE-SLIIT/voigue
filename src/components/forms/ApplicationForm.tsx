"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ApplicationInput, applicationSchema } from "@/lib/validations/forms";
import { Button } from "@/components/ui/Button";

export function ApplicationForm({ jobId }: { jobId: string }) {
  const [status, setStatus] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<ApplicationInput>({
    resolver: zodResolver(applicationSchema),
    defaultValues: { jobId }
  });

  async function onSubmit(data: ApplicationInput) {
    setStatus(null);
    const response = await fetch("/api/applications", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });
    if (!response.ok) {
      setStatus("Application could not be submitted. Please check the CV URL and try again.");
      return;
    }
    reset({ jobId });
    setStatus("Application submitted. The recruitment team will review it.");
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 rounded-md border border-line bg-white p-5 shadow-soft">
      <input type="hidden" {...register("jobId")} />
      {[
        ["name", "Full Name"],
        ["email", "Email"],
        ["phone", "Phone"],
        ["linkedin", "LinkedIn URL"],
        ["portfolio", "Portfolio URL"],
        ["cvUrl", "CV URL"]
      ].map(([name, label]) => (
        <label className="grid gap-2 text-sm font-medium" key={name}>
          {label}
          <input className="focus-ring rounded-md border border-line px-4 py-3" {...register(name as keyof ApplicationInput)} />
          {errors[name as keyof ApplicationInput] ? <span className="text-sm text-red-700">Please check this field.</span> : null}
        </label>
      ))}
      <label className="grid gap-2 text-sm font-medium">
        Cover Letter
        <textarea className="focus-ring min-h-32 rounded-md border border-line px-4 py-3" {...register("coverLetter")} />
      </label>
      <p className="text-sm leading-6 text-muted">
        CV uploads should be stored in Cloudinary or another approved file store, then submitted as a secure URL.
      </p>
      <Button type="submit" className="w-full">{isSubmitting ? "Submitting..." : "Apply Now"}</Button>
      {status ? <p className="text-sm text-muted" role="status">{status}</p> : null}
    </form>
  );
}
