import { NextResponse } from "next/server";
import { requireAdmin } from "@/lib/auth";
import { fallbackPosts } from "@/lib/content";
import { connectToDatabase } from "@/lib/mongodb";
import BlogPost from "@/models/BlogPost";

export async function GET() {
  try {
    await connectToDatabase();
    const docs = await BlogPost.find({ published: true }).sort({ publishedAt: -1 }).lean();
    return NextResponse.json(docs.length ? docs : fallbackPosts);
  } catch {
    return NextResponse.json(fallbackPosts);
  }
}

export async function POST(request: Request) {
  if (!(await requireAdmin())) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  await connectToDatabase();
  const doc = await BlogPost.create(await request.json());
  return NextResponse.json(doc, { status: 201 });
}
