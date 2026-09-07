import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CtaBand } from "@/components/sections/CtaBand";
import { Awards } from "@/components/sections/Awards";
import { GlobalPresence } from "@/components/sections/GlobalPresence";
import { Hero } from "@/components/sections/Hero";
import { IndustriesGrid } from "@/components/sections/IndustriesGrid";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { WhyVoigue } from "@/components/sections/WhyVoigue";
import { Button } from "@/components/ui/Button";
import { MotionReveal } from "@/components/ui/MotionReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getIndustries, getJobs, getPosts, getServices } from "@/lib/query";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Voigue | Australian-Led Managed Staffing, BPO & Technology",
  "Build managed global teams with Australian-led accountability, Sri Lanka operations and certified professionals."
);

export default async function Home() {
  const [serviceItems, industryItems, jobs, posts] = await Promise.all([
    getServices(),
    getIndustries(),
    getJobs(),
    getPosts()
  ]);

  return (
    <>
      <Hero />
      <section className="relative overflow-hidden bg-white pb-32 pt-24 lg:pb-40 lg:pt-32">
        <Image
          src="/images/about-bg.png"
          alt=""
          fill
          className="object-cover object-center opacity-90"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.9)_0%,rgba(255,255,255,0.72)_42%,rgba(255,255,255,0.32)_100%)]" />
        <div className="container-x relative grid gap-14 lg:grid-cols-[0.92fr_1fr] lg:items-start lg:gap-24">
          <MotionReveal direction="left">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-brand-teal">About Voigue</p>
              <h2 className="mt-7 max-w-xl text-4xl font-semibold leading-[1.08] tracking-normal text-ink sm:text-5xl">
                Managed teams built for confident growth.
              </h2>
            </div>
          </MotionReveal>
          <MotionReveal direction="left" delay={0.14}>
            <div className="pt-2 lg:pt-14">
              <p className="max-w-2xl text-lg leading-9 text-muted sm:text-xl">
                Voigue is positioned as an Australian BPO and managed staffing company with a Sri Lanka operations hub. The company supports Australian businesses across technology, digital marketing and business operations with supervised global talent.
              </p>
              <Button href="/about" variant="ghost" className="mt-9 px-0 text-brand-navy">Discover Voigue</Button>
            </div>
          </MotionReveal>
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 overflow-hidden">
          <svg
            aria-hidden="true"
            className="absolute bottom-0 left-1/2 h-full w-[140%] -translate-x-1/2 text-white"
            preserveAspectRatio="none"
            viewBox="0 0 1440 160"
          >
            <path
              d="M0 112C180 152 350 152 510 112C690 67 812 20 1008 48C1170 71 1270 128 1440 91V160H0V112Z"
              fill="currentColor"
            />
            <path
              d="M0 104C180 144 350 144 510 104C690 59 812 12 1008 40C1170 63 1270 120 1440 83"
              fill="none"
              stroke="hsl(var(--brand-teal) / 0.28)"
              strokeWidth="2"
            />
          </svg>
        </div>
      </section>
      <Awards />
      <ServicesGrid items={serviceItems} />
      <WhyVoigue />
      <GlobalPresence />
      <IndustriesGrid items={industryItems} />
      <section className="bg-white py-20 lg:py-28">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div className="relative aspect-[4/3] overflow-hidden rounded-md">
            <Image
              src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&w=1400&q=80"
              alt="Professional team member working with a laptop in a collaborative office"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
          <div>
            <SectionHeading
              eyebrow="Life at Voigue"
              title="Build your future with international exposure."
              body="Voigue's employer brand centers on talented professionals in Sri Lanka working directly with Australian clients, supported by learning, collaboration and practical career growth."
            />
            <div className="mt-8 grid gap-3">
              {jobs.slice(0, 2).map((job) => (
                <Link key={job.slug} href={`/careers/${job.slug}`} className="flex items-center justify-between rounded-md border border-line p-4 hover:border-brand-blue">
                  <span>
                    <span className="block font-semibold">{job.title}</span>
                    <span className="text-sm text-muted">{job.department} - {job.location}</span>
                  </span>
                  <ArrowRight size={18} />
                </Link>
              ))}
            </div>
            <Button href="/careers" className="mt-7">Explore Careers</Button>
          </div>
        </div>
      </section>
      <section className="bg-paper py-20 lg:py-28">
        <div className="container-x">
          <SectionHeading eyebrow="Insights" title="Practical thinking for managed global teams." />
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {posts.slice(0, 2).map((post) => (
              <Link key={post.slug} href={`/insights/${post.slug}`} className="rounded-md border border-line bg-white p-6 hover:shadow-soft">
                <p className="text-sm font-semibold text-brand-teal">{post.category}</p>
                <h3 className="mt-4 text-2xl font-semibold">{post.title}</h3>
                <p className="mt-3 leading-7 text-muted">{post.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
