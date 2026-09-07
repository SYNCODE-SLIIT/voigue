import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import { sendNotification } from "@/lib/email";
import { requireAdmin } from "@/lib/auth";
import { contactSchema } from "@/lib/validations/forms";
import ContactSubmission from "@/models/ContactSubmission";

export async function POST(request: Request) {
  const parsed = contactSchema.safeParse(await request.json());
  if (!parsed.success) return NextResponse.json({ error: "Invalid submission" }, { status: 400 });

  try {
    await connectToDatabase();
    const doc = await ContactSubmission.create(parsed.data);
    await sendNotification("New Voigue enquiry", `${parsed.data.name} from ${parsed.data.company || "Unknown company"}: ${parsed.data.message}`);
    return NextResponse.json({ id: doc._id }, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Contact storage is not configured" }, { status: 503 });
  }
}

export async function GET() {
  if (!(await requireAdmin())) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  try {
    await connectToDatabase();
    const docs = await ContactSubmission.find().sort({ createdAt: -1 }).limit(100).lean();
    return NextResponse.json(docs);
  } catch {
    return NextResponse.json([]);
  }
}
