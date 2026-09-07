import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import { sendNotification } from "@/lib/email";
import { requireAdmin } from "@/lib/auth";
import { applicationSchema } from "@/lib/validations/forms";
import Application from "@/models/Application";

export async function POST(request: Request) {
  const parsed = applicationSchema.safeParse(await request.json());
  if (!parsed.success) return NextResponse.json({ error: "Invalid application" }, { status: 400 });

  try {
    await connectToDatabase();
    const doc = await Application.create(parsed.data);
    await sendNotification("New Voigue job application", `${parsed.data.name} applied for ${parsed.data.jobId}`);
    return NextResponse.json({ id: doc._id }, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Application storage is not configured" }, { status: 503 });
  }
}

export async function GET() {
  if (!(await requireAdmin())) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  try {
    await connectToDatabase();
    const docs = await Application.find().sort({ createdAt: -1 }).limit(100).lean();
    return NextResponse.json(docs);
  } catch {
    return NextResponse.json([]);
  }
}
