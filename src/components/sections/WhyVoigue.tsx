import { differentiators, values } from "@/lib/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MotionReveal } from "@/components/ui/MotionReveal";

export function WhyVoigue() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="container-x grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            eyebrow="Why Voigue"
            title="A fully managed model, not a hand-off."
            body="The difference is operating discipline: local leadership, global talent, delivery oversight and infrastructure under one relationship."
          />
        </div>
        <div className="grid gap-4">
          {differentiators.map((item, index) => (
            <MotionReveal key={item.title} delay={index * 0.05}>
              <article className="border-l-2 border-brand-teal bg-paper p-6">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 leading-7 text-muted">{item.body}</p>
              </article>
            </MotionReveal>
          ))}
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {values.map((value) => (
              <div key={value.title} className="rounded-md border border-line p-5">
                <value.icon className="text-brand-copper" size={24} />
                <h3 className="mt-4 font-semibold">{value.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{value.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
