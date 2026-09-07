import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { PublicIndustry } from "@/types/content";

const fallbackIndustryImage =
  "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80";

export function IndustriesGrid({ items }: { items: PublicIndustry[] }) {
  return (
    <section className="bg-paper py-20 lg:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="Industries"
          title="Built for service businesses that need dependable capacity."
          body="These industry categories reflect services and hiring content currently associated with Voigue. Additional sectors should be confirmed by the client."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {items.map((industry) => {
            const Icon = industry.icon;
            return (
              <Link
                href={`/industries/${industry.slug}`}
                key={industry.slug}
                className="group relative h-[23rem] overflow-hidden rounded-md border border-white/70 bg-brand-navy text-white shadow-sm transition duration-500 hover:-translate-y-1 hover:shadow-[0_28px_80px_hsl(278_63%_26%/0.28)]"
              >
                <Image
                  src={industry.image || fallbackIndustryImage}
                  alt={`${industry.title} industry visual`}
                  fill
                  className="object-cover transition duration-700 ease-out group-hover:-translate-y-8 group-hover:scale-105 group-hover:opacity-25"
                  sizes="(min-width: 1024px) 20vw, (min-width: 640px) 50vw, 100vw"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(21,10,45,0.04),rgba(21,10,45,0.78))] transition duration-500 group-hover:bg-[linear-gradient(180deg,rgba(21,10,45,0.42),rgba(21,10,45,0.9))]" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <div className="translate-y-16 transition duration-500 ease-out group-hover:translate-y-0">
                    <div className="mb-5 flex items-center justify-between">
                      <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/92 text-brand-blue shadow-sm">
                        {Icon ? <Icon size={23} /> : null}
                      </span>
                      <span className="inline-flex h-10 w-10 translate-y-2 items-center justify-center rounded-full bg-white/90 text-brand-blue opacity-0 shadow-sm transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                        <ArrowUpRight size={19} />
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold leading-tight">{industry.title}</h3>
                    <p className="mt-4 text-sm leading-6 text-white/82 opacity-0 transition duration-500 group-hover:opacity-100">
                      {industry.excerpt}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
