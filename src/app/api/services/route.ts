import { NextResponse } from "next/server";
import { requireAdmin } from "@/lib/auth";
import { services } from "@/lib/content";
import { connectToDatabase } from "@/lib/mongodb";
import Service from "@/models/Service";

export async function GET() {
  try {
    await connectToDatabase();
    const docs = await Service.find({ published: true }).sort({ order: 1 }).lean();
    return NextResponse.json(docs.length ? docs : services);
  } catch {
    return NextResponse.json(services);
  }
}

export async function POST(request: Request) {
  if (!(await requireAdmin())) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  await connectToDatabase();
  const doc = await Service.create(await request.json());
  return NextResponse.json(doc, { status: 201 });
}
