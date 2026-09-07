import { Button } from "@/components/ui/Button";

export function CtaBand() {
  return (
    <section className="bg-white py-20">
      <div className="container-x rounded-md bg-[linear-gradient(135deg,hsl(var(--brand-blue)),hsl(var(--brand-teal)))] px-6 py-14 text-white md:px-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/72">Start the conversation</p>
            <h2 className="mt-4 max-w-3xl text-3xl font-semibold sm:text-4xl">
              Build a managed global team with the standards your business expects.
            </h2>
          </div>
          <Button href="/contact" variant="secondary">Let&apos;s Talk</Button>
        </div>
      </div>
    </section>
  );
}
