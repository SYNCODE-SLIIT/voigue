import { connectToDatabase } from "@/lib/mongodb";
import { fallbackJobs, fallbackPosts, industries, services } from "@/lib/content";
import Job from "@/models/Job";
import BlogPost from "@/models/BlogPost";
import Service from "@/models/Service";
import Industry from "@/models/Industry";
import type { PublicIndustry, PublicJob, PublicPost, PublicService } from "@/types/content";

export async function getServices() {
  try {
    await connectToDatabase();
    const docs = await Service.find({ published: true }).sort({ order: 1, title: 1 }).lean<PublicService[]>();
    return docs.length ? docs : services;
  } catch {
    return services;
  }
}

export async function getService(slug: string) {
  try {
    await connectToDatabase();
    const doc = await Service.findOne({ slug, published: true }).lean<PublicService>();
    return doc || services.find((service) => service.slug === slug) || null;
  } catch {
    return services.find((service) => service.slug === slug) || null;
  }
}

export async function getIndustries() {
  try {
    await connectToDatabase();
    const docs = await Industry.find({ published: true }).sort({ title: 1 }).lean<PublicIndustry[]>();
    return docs.length ? docs : industries;
  } catch {
    return industries;
  }
}

export async function getIndustry(slug: string) {
  try {
    await connectToDatabase();
    const doc = await Industry.findOne({ slug, published: true }).lean<PublicIndustry>();
    return doc || industries.find((industry) => industry.slug === slug) || null;
  } catch {
    return industries.find((industry) => industry.slug === slug) || null;
  }
}

export async function getJobs() {
  try {
    await connectToDatabase();
    const docs = await Job.find({ status: "Active" }).sort({ featured: -1, createdAt: -1 }).lean<PublicJob[]>();
    return docs.length ? docs : fallbackJobs;
  } catch {
    return fallbackJobs;
  }
}

export async function getJob(slug: string) {
  try {
    await connectToDatabase();
    const doc = await Job.findOne({ slug, status: "Active" }).lean<PublicJob>();
    return doc || fallbackJobs.find((job) => job.slug === slug) || null;
  } catch {
    return fallbackJobs.find((job) => job.slug === slug) || null;
  }
}

export async function getPosts() {
  try {
    await connectToDatabase();
    const docs = await BlogPost.find({ published: true }).sort({ publishedAt: -1 }).lean<PublicPost[]>();
    return docs.length ? docs : fallbackPosts;
  } catch {
    return fallbackPosts;
  }
}

export async function getPost(slug: string) {
  try {
    await connectToDatabase();
    const doc = await BlogPost.findOne({ slug, published: true }).lean<PublicPost>();
    return doc || fallbackPosts.find((post) => post.slug === slug) || null;
  } catch {
    return fallbackPosts.find((post) => post.slug === slug) || null;
  }
}
