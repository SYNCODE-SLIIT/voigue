import { ContactForm } from "@/components/forms/ContactForm";
import { site } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("Contact", "Contact Voigue to discuss managed staffing, BPO and technology services.", "/contact");

export default function ContactPage() {
  return (
    <section className="bg-white pt-32">
      <div className="container-x grid gap-12 py-16 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-teal">Contact</p>
          <h1 className="mt-4 text-3xl font-semibold leading-tight sm:text-6xl">Start a conversation with Voigue.</h1>
          <p className="mt-6 text-lg leading-8 text-muted">Tell us what capacity, capability or operational support your business needs.</p>
          <div className="mt-8 grid gap-5">
            <a className="font-semibold text-brand-blue" href={`mailto:${site.email}`}>{site.email}</a>
            <a className="font-semibold text-brand-blue" href={`tel:${site.phone.replace(/\s/g, "")}`}>{site.phone}</a>
            {site.locations.map((location) => (
              <div key={location.city}>
                <p className="font-semibold">{location.city}</p>
                <p className="text-muted">{location.address}</p>
              </div>
            ))}
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
