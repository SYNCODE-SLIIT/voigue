import { NextResponse } from "next/server";
import { requireAdmin } from "@/lib/auth";
import { connectToDatabase } from "@/lib/mongodb";
import Job from "@/models/Job";

type Ctx = { params: Promise<{ id: string }> };

export async function GET(_: Request, { params }: Ctx) {
  const { id } = await params;
  await connectToDatabase();
  const doc = await Job.findById(id).lean();
  return doc ? NextResponse.json(doc) : NextResponse.json({ error: "Not found" }, { status: 404 });
}

export async function PUT(request: Request, { params }: Ctx) {
  if (!(await requireAdmin())) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const { id } = await params;
  await connectToDatabase();
  const doc = await Job.findByIdAndUpdate(id, await request.json(), { new: true });
  return NextResponse.json(doc);
}

export async function DELETE(_: Request, { params }: Ctx) {
  if (!(await requireAdmin())) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const { id } = await params;
  await connectToDatabase();
  await Job.findByIdAndDelete(id);
  return NextResponse.json({ ok: true });
}
