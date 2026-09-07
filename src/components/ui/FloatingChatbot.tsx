"use client";

import Image from "next/image";
import Link from "next/link";
import { MessageCircle, X } from "lucide-react";
import { useState } from "react";
import { site } from "@/lib/content";

export function FloatingChatbot() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3 sm:bottom-7 sm:right-7">
      {open ? (
        <div className="w-[min(calc(100vw-2.5rem),22rem)] overflow-hidden rounded-md border border-white/20 bg-white shadow-[0_22px_70px_hsl(278_63%_26%_/_0.22)]">
          <div className="flex items-center gap-3 bg-brand-navy px-4 py-4 text-white">
            <span className="relative flex h-11 w-11 shrink-0 overflow-hidden rounded-full bg-white">
              <Image
                src="/images/chatbot_logo.png"
                alt=""
                fill
                className="object-cover"
                sizes="44px"
              />
            </span>
            <span className="min-w-0">
              <span className="block font-semibold">Voigue Assistant</span>
              <span className="block text-xs text-white/68">Usually replies during business hours</span>
            </span>
            <button
              aria-label="Close chat"
              className="focus-ring ml-auto inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-white/70 transition hover:bg-white/10 hover:text-white"
              onClick={() => setOpen(false)}
              type="button"
            >
              <X size={18} />
            </button>
          </div>
          <div className="grid gap-4 p-4">
            <div className="rounded-md bg-paper p-4 text-sm leading-6 text-ink">
              Hi, welcome to Voigue. Tell us what team or service you need and we will get back to you.
            </div>
            <div className="grid gap-2">
              <Link
                className="focus-ring inline-flex items-center justify-center rounded-md bg-brand-blue px-4 py-3 text-sm font-semibold text-white transition hover:bg-brand-navy"
                href="/contact"
              >
                Start a Conversation
              </Link>
              <a
                className="focus-ring inline-flex items-center justify-center rounded-md border border-line px-4 py-3 text-sm font-semibold text-brand-blue transition hover:border-brand-blue"
                href={`mailto:${site.email}`}
              >
                Email {site.email}
              </a>
            </div>
          </div>
        </div>
      ) : null}

      <button
        aria-label={open ? "Close chat" : "Open chat"}
        className="focus-ring group relative inline-flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-[0_18px_46px_hsl(278_63%_26%_/_0.28)] transition hover:-translate-y-1 hover:shadow-[0_24px_62px_hsl(278_63%_26%_/_0.34)]"
        onClick={() => setOpen((value) => !value)}
        type="button"
      >
        <span className="absolute inset-0 rounded-full bg-brand-copper/35 motion-safe:animate-chatbot-pulse" />
        <span className="relative flex h-14 w-14 overflow-hidden rounded-full border-2 border-white bg-brand-navy">
          <Image
            src="/images/chatbot_logo.png"
            alt=""
            fill
            className="object-cover transition duration-300 group-hover:scale-105"
            sizes="56px"
          />
        </span>
        <span className="absolute -left-1 -top-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-brand-copper text-white shadow-md">
          <MessageCircle size={13} />
        </span>
      </button>
    </div>
  );
}
