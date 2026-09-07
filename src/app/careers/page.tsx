import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CtaBand } from "@/components/sections/CtaBand";
import { getJobs } from "@/lib/query";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("Careers", "Explore career opportunities and life at Voigue.", "/careers");

export default async function CareersPage() {
  const jobs = await getJobs();
  return (
    <>
      <section className="bg-white pt-32">
        <div className="container-x grid gap-10 py-16 lg:grid-cols-[0.9fr_1.1fr]">
          <h1 className="text-3xl font-semibold leading-tight sm:text-6xl">Build your future with Voigue.</h1>
          <p className="text-lg leading-8 text-muted">
            Work with Australian clients, build practical global experience and grow in a managed professional environment.
          </p>
        </div>
      </section>
      <section className="bg-paper py-20">
        <div className="container-x grid gap-4 lg:grid-cols-3">
          {["International exposure", "Learning and development", "Supportive delivery culture"].map((item) => (
            <article key={item} className="rounded-md border border-line bg-white p-6">
              <h2 className="text-xl font-semibold">{item}</h2>
              <p className="mt-3 leading-7 text-muted">Client-approved details, benefits and employee stories can be expanded through the CMS.</p>
            </article>
          ))}
        </div>
      </section>
      <section className="bg-white py-20">
        <div className="container-x">
          <h2 className="text-3xl font-semibold">Current Vacancies</h2>
          <div className="mt-8 grid gap-4">
            {jobs.map((job) => (
              <Link key={job.slug} href={`/careers/${job.slug}`} className="grid gap-4 rounded-md border border-line p-5 hover:border-brand-blue md:grid-cols-[1fr_auto] md:items-center">
                <span>
                  <span className="block text-xl font-semibold">{job.title}</span>
                  <span className="mt-1 block text-sm text-muted">{job.department} - {job.location} - {job.employmentType}</span>
                </span>
                <span className="inline-flex items-center gap-2 font-semibold text-brand-blue">View Role <ArrowRight size={18} /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
