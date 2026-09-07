"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ContactInput, contactSchema } from "@/lib/validations/forms";
import { Button } from "@/components/ui/Button";

export function ContactForm() {
  const [status, setStatus] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<ContactInput>({ resolver: zodResolver(contactSchema) });

  async function onSubmit(data: ContactInput) {
    setStatus(null);
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });
    if (!response.ok) {
      setStatus("We could not submit this enquiry. Please email hello@voigue.com.");
      return;
    }
    reset();
    setStatus("Thank you. Voigue will review your enquiry and respond shortly.");
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 rounded-md border border-line bg-white p-5 shadow-soft">
      {[
        ["name", "Name"],
        ["company", "Company"],
        ["email", "Email"],
        ["phone", "Phone"]
      ].map(([name, label]) => (
        <label className="grid gap-2 text-sm font-medium" key={name}>
          {label}
          <input className="focus-ring rounded-md border border-line px-4 py-3" {...register(name as keyof ContactInput)} />
          {errors[name as keyof ContactInput] ? <span className="text-sm text-red-700">Please check this field.</span> : null}
        </label>
      ))}
      <label className="grid gap-2 text-sm font-medium">
        Service
        <select className="focus-ring rounded-md border border-line px-4 py-3" {...register("service")}>
          <option value="">Select a service</option>
          <option>Managed Staffing</option>
          <option>BPO Solutions</option>
          <option>Technology Services</option>
          <option>Digital Marketing</option>
        </select>
      </label>
      <label className="grid gap-2 text-sm font-medium">
        Message
        <textarea className="focus-ring min-h-32 rounded-md border border-line px-4 py-3" {...register("message")} />
        {errors.message ? <span className="text-sm text-red-700">Message must be at least 10 characters.</span> : null}
      </label>
      <Button type="submit" className="w-full" variant="primary">
        {isSubmitting ? "Sending..." : "Submit Enquiry"}
      </Button>
      {status ? <p className="text-sm text-muted" role="status">{status}</p> : null}
    </form>
  );
}
