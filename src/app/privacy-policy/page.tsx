import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("Privacy Policy", "Voigue privacy policy placeholder for client legal review.", "/privacy-policy");

export default function PrivacyPolicyPage() {
  return <LegalPage title="Privacy Policy" />;
}

function LegalPage({ title }: { title: string }) {
  return (
    <section className="bg-white pt-32">
      <div className="container-x max-w-3xl py-16">
        <h1 className="text-4xl font-semibold sm:text-5xl">{title}</h1>
        <p className="mt-6 leading-8 text-muted">
          This is professional placeholder legal content prepared for review by Voigue and qualified legal counsel. It should not be treated as legal advice or final policy language.
        </p>
        <h2 className="mt-10 text-2xl font-semibold">Information We Collect</h2>
        <p className="mt-4 leading-8 text-muted">Contact, enquiry and application information may be collected to respond to requests and manage recruitment or business conversations.</p>
      </div>
    </section>
  );
}
