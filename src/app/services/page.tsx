import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { CtaBand } from "@/components/sections/CtaBand";
import { getServices } from "@/lib/query";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Services",
  "Explore Voigue managed staffing, BPO, technology and digital marketing services.",
  "/services"
);

export default async function ServicesPage() {
  const items = await getServices();
  return (
    <>
      <section className="bg-white pt-32">
        <div className="container-x py-16">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-teal">Services</p>
          <h1 className="mt-4 max-w-4xl text-3xl font-semibold leading-tight sm:text-6xl">
            Managed capability across staffing, operations, technology and digital delivery.
          </h1>
        </div>
      </section>
      <ServicesGrid items={items} />
      <CtaBand />
    </>
  );
}
