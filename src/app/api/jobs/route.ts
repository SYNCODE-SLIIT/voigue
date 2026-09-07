import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import { requireAdmin } from "@/lib/auth";
import { fallbackJobs } from "@/lib/content";
import Job from "@/models/Job";

export async function GET() {
  try {
    await connectToDatabase();
    const docs = await Job.find({ status: "Active" }).sort({ featured: -1, createdAt: -1 }).lean();
    return NextResponse.json(docs.length ? docs : fallbackJobs);
  } catch {
    return NextResponse.json(fallbackJobs);
  }
}

export async function POST(request: Request) {
  if (!(await requireAdmin())) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  try {
    await connectToDatabase();
    const doc = await Job.create(await request.json());
    return NextResponse.json(doc, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Could not create job" }, { status: 400 });
  }
}
