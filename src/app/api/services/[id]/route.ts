import { NextResponse } from "next/server";
import { requireAdmin } from "@/lib/auth";
import { connectToDatabase } from "@/lib/mongodb";
import Service from "@/models/Service";

type Ctx = { params: Promise<{ id: string }> };

export async function PUT(request: Request, { params }: Ctx) {
  if (!(await requireAdmin())) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const { id } = await params;
  await connectToDatabase();
  return NextResponse.json(await Service.findByIdAndUpdate(id, await request.json(), { new: true }));
}

export async function DELETE(_: Request, { params }: Ctx) {
  if (!(await requireAdmin())) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const { id } = await params;
  await connectToDatabase();
  await Service.findByIdAndDelete(id);
  return NextResponse.json({ ok: true });
}
