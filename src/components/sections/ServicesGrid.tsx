import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { MotionReveal } from "@/components/ui/MotionReveal";
import { ServiceScrollStage } from "@/components/sections/ServiceScrollStage";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { PublicService } from "@/types/content";

export function ServicesGrid({ items }: { items: PublicService[] }) {
  return (
    <ServiceScrollStage>
      <div className="w-[min(84vw,430px)] shrink-0 pr-4 lg:w-[420px]">
        <SectionHeading
          eyebrow="Services"
          title="A managed partner across people, process and technology."
          body="Voigue combines staffing capability with operational oversight, helping businesses add capacity without losing management control."
        />
      </div>
      {items.map((service, index) => {
        const Icon = service.icon;
        return (
          <MotionReveal key={service.slug} delay={index * 0.06}>
            <Link
              href={`/services/${service.slug}`}
              className="group block h-[30rem] w-[min(84vw,390px)] shrink-0 overflow-hidden rounded-md border border-line bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-soft sm:w-[380px]"
            >
              <div className="relative h-48 overflow-hidden bg-brand-navy/8">
                {service.image ? (
                  <Image
                    src={service.image}
                    alt={`${service.title} service visual`}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                    sizes="390px"
                  />
                ) : null}
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.08),rgba(0,0,0,0.34))]" />
                <div className="absolute inset-x-0 top-0 flex items-start justify-between gap-5 p-6">
                  <span className="rounded-full bg-white/90 px-3 py-1 text-sm font-semibold text-brand-teal shadow-sm">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-ink shadow-sm transition group-hover:bg-brand-blue group-hover:text-white">
                    <ArrowUpRight size={20} />
                  </span>
                </div>
              </div>
              <div className="flex min-h-[18rem] flex-col p-7">
                <div className="flex items-center gap-4">
                  {Icon ? <Icon className="shrink-0 text-brand-blue" size={28} /> : null}
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-muted">{service.eyebrow}</p>
                </div>
                <h3 className="mt-5 text-2xl font-semibold">{service.title}</h3>
                <p className="mt-4 leading-7 text-muted">{service.excerpt}</p>
              </div>
            </Link>
          </MotionReveal>
        );
      })}
    </ServiceScrollStage>
  );
}
