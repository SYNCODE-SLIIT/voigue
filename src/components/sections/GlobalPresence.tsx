import Image from "next/image";
import { Building2, Globe2, MapPin, Target, UsersRound } from "lucide-react";
import { site } from "@/lib/content";

const mapUrls: Record<string, string> = {
  Melbourne: "https://www.google.com/maps?q=470%20St%20Kilda%20Road%2C%20Melbourne%2C%20VIC%203004%2C%20Australia&output=embed",
  Colombo: "https://www.google.com/maps?q=Orion%20City%20IT%20Park%2C%20Colombo%2C%20Sri%20Lanka&output=embed"
};

const presencePoints = [
  { label: "Same team", icon: UsersRound },
  { label: "Same goal", icon: Target },
  { label: "Worldwide impact", icon: Globe2 }
];

export function GlobalPresence() {
  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-28">
      <Image
        src="/images/global-presence-bg.png"
        alt=""
        fill
        className="pointer-events-none object-cover object-center"
        sizes="100vw"
      />
      <div className="pointer-events-none absolute inset-0 bg-white/20" />
      <div className="container-x relative grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full bg-brand-teal/12 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-brand-blue">
            <MapPin size={16} className="fill-brand-teal text-brand-teal" />
            Global Presence
          </p>
          <h2 className="mt-7 max-w-xl text-5xl font-semibold leading-[0.98] tracking-normal text-ink sm:text-6xl">
            Two countries. <span className="text-brand-teal">One seamless</span> operation.
          </h2>
          <p className="mt-7 max-w-md text-lg leading-8 text-muted">
            Our operations connect Melbourne client leadership with a managed operations centre in Colombo.
          </p>
          <div className="mt-8 flex gap-2">
            <span className="h-1 w-12 rounded-full bg-brand-blue" />
            <span className="h-1 w-5 rounded-full bg-brand-teal/55" />
            <span className="h-1 w-5 rounded-full bg-brand-teal/28" />
          </div>
          <div className="mt-10 grid max-w-lg grid-cols-3 gap-4">
            {presencePoints.map((point, index) => (
              <div key={point.label} className={index === 0 ? "pr-4" : "border-l border-line pl-4"}>
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-brand-teal/12 text-brand-blue">
                  <point.icon size={21} />
                </span>
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-muted">{point.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {site.locations.map((location) => (
            <article
              key={location.city}
              className="overflow-hidden rounded-md border border-brand-teal/28 bg-white text-ink shadow-[0_24px_80px_hsl(278_63%_26%/0.16)]"
            >
              <div className="relative h-56 overflow-hidden bg-paper">
                <iframe
                  title={`${location.city} map`}
                  src={mapUrls[location.city]}
                  className="h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
                <svg
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-0 h-16 w-full text-white"
                  preserveAspectRatio="none"
                  viewBox="0 0 420 72"
                >
                  <path d="M0 38C58 62 128 66 210 42C296 17 356 15 420 34V72H0V38Z" fill="currentColor" />
                </svg>
              </div>
              <div className="relative p-7 pt-10">
                <span className="absolute -top-9 left-7 inline-flex h-16 w-16 items-center justify-center rounded-full bg-[linear-gradient(135deg,hsl(var(--brand-teal)),hsl(var(--brand-blue)))] text-white shadow-soft">
                  <MapPin size={34} className="fill-white" />
                </span>
                <h3 className="text-3xl font-semibold">{location.city}</h3>
                <p className="mt-4 flex items-start gap-3 leading-7 text-muted">
                  <MapPin size={18} className="mt-1 shrink-0 text-brand-teal" />
                  <span>{location.address}</span>
                </p>
                <div className="mt-5 border-t border-line pt-5">
                  <p className="flex items-start gap-3 text-sm font-medium leading-6 text-brand-blue">
                    <Building2 size={19} className="mt-0.5 shrink-0" />
                    <span>{location.note}</span>
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
