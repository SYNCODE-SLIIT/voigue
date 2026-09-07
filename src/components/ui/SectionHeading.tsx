export function SectionHeading({
  eyebrow,
  title,
  body,
  tone = "light"
}: {
  eyebrow?: string;
  title: string;
  body?: string;
  tone?: "light" | "dark";
}) {
  return (
    <div className="max-w-3xl">
      {eyebrow ? (
        <p className={tone === "dark" ? "mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-white/70" : "mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-brand-teal"}>{eyebrow}</p>
      ) : null}
      <h2 className={tone === "dark" ? "text-3xl font-semibold tracking-normal text-white sm:text-4xl lg:text-5xl" : "text-3xl font-semibold tracking-normal text-ink sm:text-4xl lg:text-5xl"}>{title}</h2>
      {body ? <p className={tone === "dark" ? "mt-5 text-lg leading-8 text-white/72" : "mt-5 text-lg leading-8 text-muted"}>{body}</p> : null}
    </div>
  );
}
