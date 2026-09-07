"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navItems } from "@/lib/content";
import { Button } from "@/components/ui/Button";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const solid = scrolled || open || pathname !== "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  return (
    <>
    <header
      className={`fixed inset-x-0 top-0 z-50 transition ${
        solid ? "border-b border-line bg-paper/95 shadow-sm backdrop-blur" : "bg-transparent"
      }`}
    >
      <nav className="container-x flex h-20 items-center justify-between" aria-label="Main navigation">
        <Link
          href="/"
          className="focus-ring relative flex h-12 w-40 items-center"
          aria-label="Voigue home"
        >
          <Image
            src={solid ? "/images/nav_logo_transparent.png" : "/images/nav_logo_light.png"}
            alt="Voigue"
            fill
            priority
            className="object-contain"
            sizes="160px"
          />
        </Link>
        <div className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              className={`focus-ring relative py-2 text-sm font-medium after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:origin-left after:scale-x-0 after:bg-current after:transition-transform hover:after:scale-x-100 ${
                solid ? "text-ink hover:text-brand-blue" : "text-white"
              }`}
              href={item.href}
            >
              {item.label}
            </Link>
          ))}
          <Button href="/contact">Let&apos;s Talk</Button>
        </div>
        <button
          className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-md border border-line bg-white text-ink shadow-sm transition hover:border-brand-teal/40 hover:text-brand-blue lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>
    </header>
    {open ? (
        <div className="fixed inset-0 z-40 overflow-hidden bg-paper pt-20 text-ink shadow-[0_30px_90px_hsl(278_63%_26%/0.18)] lg:hidden">
          <div className="absolute inset-x-0 top-20 h-px bg-line/80" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_14%_18%,hsl(var(--brand-teal)/0.18),transparent_28%),radial-gradient(circle_at_88%_8%,hsl(var(--brand-blue)/0.16),transparent_30%),linear-gradient(135deg,hsl(var(--paper)),white)]" />
          <div className="pointer-events-none absolute -right-16 top-8 h-48 w-48 rounded-full border border-brand-teal/22" />
          <div className="pointer-events-none absolute -bottom-28 -left-20 h-72 w-72 rounded-full bg-brand-blue/10" />
          <div className="pointer-events-none absolute bottom-20 right-6 h-28 w-28 rounded-full bg-brand-teal/12 blur-2xl" />
          <div className="container-x relative flex h-full flex-col justify-between py-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-blue">Navigation</p>
              <div className="mt-8 grid gap-2">
                {navItems.map((item, index) => {
                  const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
                  return (
                    <Link
                      key={item.href}
                      className={`focus-ring group flex min-h-16 items-center justify-between border-b border-line/80 py-4 transition ${
                        active ? "text-brand-blue" : "text-ink hover:text-brand-blue"
                      }`}
                      href={item.href}
                      onClick={() => setOpen(false)}
                    >
                      <span className="flex items-center gap-4">
                        <span className="w-7 text-xs font-semibold text-brand-teal">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="text-3xl font-semibold leading-none sm:text-5xl">{item.label}</span>
                      </span>
                      <span
                        className={`inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border transition ${
                          active
                            ? "border-brand-blue bg-brand-blue text-white"
                            : "border-line bg-white/70 text-brand-blue group-hover:translate-x-1 group-hover:border-brand-teal"
                        }`}
                      >
                        <ArrowRight size={18} />
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
            <div className="pb-3">
              <div className="mb-5 h-px bg-line" />
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="focus-ring flex min-h-14 items-center justify-between rounded-md bg-[linear-gradient(135deg,hsl(var(--brand-copper)),hsl(var(--brand-navy)))] px-5 py-4 text-base font-semibold text-white shadow-[0_18px_42px_hsl(278_63%_26%/0.3)] transition hover:brightness-110"
              >
                <span>Let&apos;s Talk</span>
                <ArrowRight size={19} />
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
