import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("Cookie Policy", "Voigue cookie policy placeholder for client legal review.", "/cookie-policy");

export default function CookiePolicyPage() {
  return (
    <section className="bg-white pt-32">
      <div className="container-x max-w-3xl py-16">
        <h1 className="text-4xl font-semibold sm:text-5xl">Cookie Policy</h1>
        <p className="mt-6 leading-8 text-muted">Placeholder cookie policy for client and legal review. Add analytics and marketing cookie details once the production stack is confirmed.</p>
      </div>
    </section>
  );
}
