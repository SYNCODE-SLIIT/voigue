import { notFound } from "next/navigation";
import { ApplicationForm } from "@/components/forms/ApplicationForm";
import { getJob } from "@/lib/query";
import { pageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const job = await getJob(slug);
  return pageMetadata(job?.title || "Career", job?.description || "Voigue career detail.", `/careers/${slug}`);
}

export default async function JobPage({ params }: Props) {
  const { slug } = await params;
  const job = await getJob(slug);
  if (!job) notFound();

  return (
    <section className="bg-white pt-32">
      <div className="container-x grid gap-12 py-16 lg:grid-cols-[1fr_0.75fr]">
        <article>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-teal">{job.department}</p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight sm:text-6xl">{job.title}</h1>
          <p className="mt-5 text-lg leading-8 text-muted">{job.location} - {job.employmentType}</p>
          <p className="mt-8 text-lg leading-8 text-muted">{job.description}</p>
          {[
            ["Responsibilities", job.responsibilities],
            ["Requirements", job.requirements],
            ["Benefits", job.benefits]
          ].map(([title, items]) => (
            <section key={title as string} className="mt-10">
              <h2 className="text-2xl font-semibold">{title as string}</h2>
              <ul className="mt-4 grid gap-3 leading-7 text-muted">
                {(items as string[]).map((item) => <li key={item}>- {item}</li>)}
              </ul>
            </section>
          ))}
        </article>
        <aside className="lg:sticky lg:top-28 lg:self-start">
          <ApplicationForm jobId={job.slug} />
        </aside>
      </div>
    </section>
  );
}
