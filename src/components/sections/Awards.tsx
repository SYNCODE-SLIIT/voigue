import Image from "next/image";
import { MotionReveal } from "@/components/ui/MotionReveal";

const awards = [
  {
    title: "ISO Certification",
    description: "ISO9001 Certification Accredited",
    image: "/images/awards/iso-9001-ukas.jpg",
    alt: "NQA ISO 9001 and UKAS quality management certification logos"
  },
  {
    title: "Australian Service Excellence Awards",
    description: "Australian Service Excellence Awards (ASEA) Finalist 2024",
    image: "/images/awards/asea-finalist-2024.png",
    alt: "Australian Service Excellence Awards 2024 finalist badge"
  },
  {
    title: "Best Work Place for Women",
    description: "Certified Best Work Place for Women Sri Lanka 2022",
    image: "/images/awards/best-workplace-women-2022.png",
    alt: "Great Place To Work Best Workplaces for Women Sri Lanka 2022 badge"
  },
  {
    title: "Great Place To Work",
    description: "Certified Great Place to Work May 2022 - May 2023",
    image: "/images/awards/great-place-to-work-2022.jpeg",
    alt: "Great Place To Work certified May 2022 to May 2023 badge"
  },
  {
    title: "Asia Awards",
    description: "Asia's Outstanding Company Award for Outsourcing Services of the Year 2020/2021",
    image: "/images/awards/asia-award.png",
    alt: "Asia Awards gold badge"
  },
  {
    title: "Asia Awards",
    description: "Asia's Quality Proven Outsourcing Brand Award of the year 2020/2021",
    image: "/images/awards/asia-award.png",
    alt: "Asia Awards gold badge"
  }
];

export function Awards() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div>
        <MotionReveal>
          <h2 className="text-center text-4xl font-semibold tracking-normal text-ink sm:text-5xl">Our Awards</h2>
        </MotionReveal>
        <MotionReveal delay={0.08}>
          <div className="mt-14 overflow-hidden">
            <div className="flex w-max animate-awards-marquee gap-6">
              {[...awards, ...awards].map((award, index) => (
                <article
                  key={`${award.title}-${index}`}
                  className="flex w-56 shrink-0 flex-col items-center text-center sm:w-60"
                  aria-hidden={index >= awards.length ? "true" : undefined}
                >
                  <div className="relative flex h-36 w-full items-center justify-center">
                    <Image
                      src={award.image}
                      alt={index >= awards.length ? "" : award.alt}
                      fill
                      className="object-contain"
                      sizes="240px"
                    />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold leading-tight text-ink">{award.title}</h3>
                  <p className="mt-3 text-base leading-7 text-muted">{award.description}</p>
                </article>
              ))}
            </div>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}
