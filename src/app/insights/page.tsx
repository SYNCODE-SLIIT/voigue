import Link from "next/link";
import { getPosts } from "@/lib/query";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("Insights", "Voigue insights on managed staffing, BPO and global teams.", "/insights");

export default async function InsightsPage({ searchParams }: { searchParams: Promise<{ q?: string; category?: string }> }) {
  const params = await searchParams;
  const posts = await getPosts();
  const query = params.q?.toLowerCase() || "";
  const filtered = posts.filter((post) => !query || post.title.toLowerCase().includes(query) || post.excerpt?.toLowerCase().includes(query));

  return (
    <section className="bg-white pt-32">
      <div className="container-x py-16">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-teal">Insights</p>
        <h1 className="mt-4 max-w-4xl text-3xl font-semibold leading-tight sm:text-6xl">
          Ideas for building better managed global teams.
        </h1>
        <form className="mt-8 max-w-lg">
          <label className="sr-only" htmlFor="q">Search articles</label>
          <input id="q" name="q" placeholder="Search insights" defaultValue={params.q} className="focus-ring w-full rounded-md border border-line px-4 py-3" />
        </form>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {filtered.map((post) => (
            <Link href={`/insights/${post.slug}`} key={post.slug} className="rounded-md border border-line bg-paper p-6 hover:shadow-soft">
              <p className="text-sm font-semibold text-brand-teal">{post.category}</p>
              <h2 className="mt-4 text-2xl font-semibold">{post.title}</h2>
              <p className="mt-3 leading-7 text-muted">{post.excerpt}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
