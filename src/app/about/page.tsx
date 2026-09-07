import Image from "next/image";
import { GlobalPresence } from "@/components/sections/GlobalPresence";
import { CtaBand } from "@/components/sections/CtaBand";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { metrics, site } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "About",
  "Learn about Voigue's Australian-led managed staffing model and Sri Lanka operations centre.",
  "/about"
);

export default function AboutPage() {
  return (
    <>
      <section className="bg-white pt-32">
        <div className="container-x grid gap-12 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-teal">About Voigue</p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight sm:text-6xl">
              Australian standards, globally delivered.
            </h1>
          </div>
          <p className="text-lg leading-8 text-muted">
            Founded in 2017 according to current Voigue content, the company was built to connect Australian businesses with certified global talent managed to Australian expectations.
          </p>
        </div>
        <div className="container-x relative aspect-[16/7] overflow-hidden rounded-md">
          <Image
            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1800&q=80"
            alt="Modern office team discussing business operations"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
      </section>
      <section className="bg-paper py-20">
        <div className="container-x grid gap-4 md:grid-cols-4">
          {metrics.map((metric) => (
            <div key={metric.label} className="rounded-md border border-line bg-white p-6">
              <p className="text-3xl font-semibold text-brand-navy">{metric.value}</p>
              <p className="mt-2 text-sm leading-6 text-muted">{metric.label}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-white py-20 lg:py-28">
        <div className="container-x grid gap-12 lg:grid-cols-3">
          <SectionHeading eyebrow="Mission" title="Make global teams work with local accountability." />
          <div className="lg:col-span-2">
            <p className="text-xl leading-9 text-muted">
              Voigue&apos;s public positioning emphasizes managed staffing, technology, digital and BPO support. Leadership, awards, certifications and detailed company timeline should be added through CMS once client-approved source material is supplied.
            </p>
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {site.locations.map((location) => (
                <div key={location.city} className="border-l-2 border-brand-teal pl-5">
                  <h3 className="text-xl font-semibold">{location.city}</h3>
                  <p className="mt-2 leading-7 text-muted">{location.address}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <GlobalPresence />
      <CtaBand />
    </>
  );
}
