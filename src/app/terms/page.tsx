import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("Terms", "Voigue terms placeholder for client legal review.", "/terms");

export default function TermsPage() {
  return (
    <section className="bg-white pt-32">
      <div className="container-x max-w-3xl py-16">
        <h1 className="text-4xl font-semibold sm:text-5xl">Terms & Conditions</h1>
        <p className="mt-6 leading-8 text-muted">Placeholder terms for client and legal review. Final terms should be supplied by Voigue&apos;s legal advisers before launch.</p>
      </div>
    </section>
  );
}
