import Image from "next/image";
import { notFound } from "next/navigation";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { CtaBand } from "@/components/sections/CtaBand";
import { getService } from "@/lib/query";
import { pageMetadata } from "@/lib/seo";
import { faqs } from "@/lib/content";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const service = await getService(slug);
  return pageMetadata(service?.title || "Service", service?.excerpt || "Voigue service detail.", `/services/${slug}`);
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = await getService(slug);
  if (!service) notFound();

  return (
    <>
      <section className="bg-white pt-32">
        <div className="container-x grid gap-12 py-16 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-teal">{service.eyebrow}</p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight sm:text-6xl">{service.title}</h1>
          </div>
          <p className="text-lg leading-8 text-muted">{service.excerpt}</p>
        </div>
        {"image" in service && service.image ? (
          <div className="container-x relative aspect-[16/7] overflow-hidden rounded-md">
            <Image src={service.image} alt={`${service.title} service visual`} fill className="object-cover" sizes="100vw" />
          </div>
        ) : null}
      </section>
      <section className="bg-paper py-20">
        <div className="container-x grid gap-6 lg:grid-cols-3">
          {[
            ["Problems we solve", service.problems || []],
            ["Key capabilities", service.capabilities || []],
            ["Benefits", service.benefits || []]
          ].map(([title, items]) => (
            <article key={title as string} className="rounded-md border border-line bg-white p-6">
              <h2 className="text-2xl font-semibold">{title as string}</h2>
              <ul className="mt-5 grid gap-3 text-muted">
                {(items as string[]).map((item) => <li key={item}>- {item}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </section>
      <section className="bg-white py-20">
        <div className="container-x grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <h2 className="text-4xl font-semibold">Our approach</h2>
          <div className="grid gap-5 text-lg leading-8 text-muted">
            <p>
              Voigue&apos;s service model is designed around accountable delivery: understand the workflow, assign suitable talent, manage quality, and keep communication aligned with Australian business expectations.
            </p>
            <FAQAccordion items={faqs} />
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
