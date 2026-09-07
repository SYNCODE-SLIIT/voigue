import Image from "next/image";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-brand-navy pt-28 text-white">
      <Image
        src="/images/hero_bg01.png"
        alt="Purple digital globe and global city skyline"
        fill
        priority
        className="object-cover object-[64%_center]"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_35%,rgba(160,97,201,0.22),transparent_32%),linear-gradient(90deg,rgba(8,8,38,0.96)_0%,rgba(16,11,54,0.9)_38%,rgba(21,12,69,0.48)_72%,rgba(8,8,38,0.2)_100%)]" />
      <div className="container-x relative grid min-h-[calc(100svh-7rem)] content-end pb-8 pt-8 lg:pb-10">
        <div className="grid gap-12">
          <div className="max-w-4xl animate-[fadeIn_700ms_ease-out]">
            <div className="mb-7 h-0.5 w-12 bg-brand-copper" />
            <p className="text-sm font-semibold uppercase tracking-[0.38em] text-[#c49adb]">
              Australian-led. Globally powered.
            </p>
            <h1 className="mt-7 text-4xl font-semibold leading-[1.08] tracking-normal text-white sm:text-5xl lg:text-6xl">
              Managed global teams for{" "}
              <span className="text-brand-copper">business, technology</span> and{" "}
              <span className="text-brand-copper">operational growth.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white">
              Voigue helps Australian businesses scale with certified professionals, managed delivery and a Sri Lanka operations centre built for reliable cross-border work.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Button href="/contact" className="min-w-64">Let&apos;s Work Together</Button>
              <Button href="/services" variant="secondary">Explore Services</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
