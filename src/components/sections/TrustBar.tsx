import { metrics } from "@/lib/content";

export function TrustBar() {
  return (
    <section className="border-b border-line bg-white">
      <div className="container-x grid gap-6 py-8 sm:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric) => (
          <div key={metric.label}>
            <p className="text-3xl font-semibold text-brand-navy">{metric.value}</p>
            <p className="mt-2 text-sm leading-6 text-muted">{metric.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
