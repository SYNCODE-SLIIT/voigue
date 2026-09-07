"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export function FAQAccordion({ items }: { items: Array<{ question: string; answer: string }> }) {
  const [open, setOpen] = useState(0);

  return (
    <div className="divide-y divide-line rounded-md border border-line bg-white">
      {items.map((item, index) => (
        <div key={item.question}>
          <button
            className="focus-ring flex w-full items-center justify-between gap-6 px-5 py-5 text-left font-semibold"
            aria-expanded={open === index}
            onClick={() => setOpen(open === index ? -1 : index)}
          >
            {item.question}
            <ChevronDown
              size={18}
              className={open === index ? "rotate-180 transition" : "transition"}
              aria-hidden
            />
          </button>
          {open === index ? <p className="px-5 pb-5 leading-7 text-muted">{item.answer}</p> : null}
        </div>
      ))}
    </div>
  );
}
