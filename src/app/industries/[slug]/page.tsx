import { notFound } from "next/navigation";
import { CtaBand } from "@/components/sections/CtaBand";
import { getIndustry } from "@/lib/query";
import { pageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const industry = await getIndustry(slug);
  return pageMetadata(industry?.title || "Industry", industry?.excerpt || "Voigue industry detail.", `/industries/${slug}`);
}

export default async function IndustryPage({ params }: Props) {
  const { slug } = await params;
  const industry = await getIndustry(slug);
  if (!industry) notFound();

  return (
    <>
      <section className="bg-white pt-32">
        <div className="container-x py-16">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-teal">Industry</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight sm:text-6xl">{industry.title}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">{industry.excerpt}</p>
        </div>
      </section>
      <section className="bg-paper py-20">
        <div className="container-x rounded-md border border-line bg-white p-8">
          <h2 className="text-3xl font-semibold">How Voigue supports {industry.title.toLowerCase()}</h2>
          <p className="mt-5 max-w-3xl leading-8 text-muted">
            This page is prepared for CMS-managed industry content. Add approved sector-specific proof points, operating requirements and service examples before publication campaigns.
          </p>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
