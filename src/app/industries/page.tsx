import { CtaBand } from "@/components/sections/CtaBand";
import { IndustriesGrid } from "@/components/sections/IndustriesGrid";
import { getIndustries } from "@/lib/query";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("Industries", "Industries supported by Voigue managed staffing and BPO capability.", "/industries");

export default async function IndustriesPage() {
  const items = await getIndustries();
  return (
    <>
      <section className="bg-white pt-32">
        <div className="container-x py-16">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-teal">Industries</p>
          <h1 className="mt-4 max-w-4xl text-3xl font-semibold leading-tight sm:text-6xl">
            Support models for modern service operations.
          </h1>
        </div>
      </section>
      <IndustriesGrid items={items} />
      <CtaBand />
    </>
  );
}
