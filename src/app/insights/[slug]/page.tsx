import { notFound } from "next/navigation";
import { getPost } from "@/lib/query";
import { pageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = await getPost(slug);
  return pageMetadata(post?.title || "Insight", post?.excerpt || "Voigue insight.", `/insights/${slug}`);
}

export default async function InsightPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  return (
    <article className="bg-white pt-32">
      <div className="container-x max-w-3xl py-16">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-teal">{post.category}</p>
        <h1 className="mt-4 text-4xl font-semibold leading-tight sm:text-6xl">{post.title}</h1>
        <p className="mt-5 text-lg leading-8 text-muted">{post.excerpt}</p>
        <div className="mt-12 space-y-6 text-lg leading-8 text-muted">
          <p>{post.content}</p>
          <p>This article is CMS-ready placeholder content and should be replaced with client-approved copy before launch.</p>
        </div>
      </div>
    </article>
  );
}
