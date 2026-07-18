"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqContent } from "@/data/content";
import Reveal from "./Reveal";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-cream py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <Reveal>
          <p className="mb-3 text-center text-sm font-semibold tracking-[0.2em] text-tan-dark uppercase">
            {faqContent.eyebrow}
          </p>
          <h2 className="mb-10 text-center font-serif text-3xl text-burgundy sm:text-4xl">
            {faqContent.heading}
          </h2>
        </Reveal>

        <Reveal delayMs={100}>
          <div className="space-y-3">
            {faqContent.questions.map((item, index) => {
              const isOpen = openIndex === index;
              const panelId = `faq-panel-${index}`;
              const buttonId = `faq-button-${index}`;
              return (
                <div
                  key={item.question}
                  className="overflow-hidden rounded-xl border border-tan/20 bg-white shadow-sm"
                >
                  <h3>
                    <button
                      type="button"
                      id={buttonId}
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                    >
                      <span className="font-medium text-burgundy">
                        {item.question}
                      </span>
                      <ChevronDown
                        size={20}
                        className={`shrink-0 text-tan-dark transition-transform ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  </h3>
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className={`grid transition-all duration-300 ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-5 text-sm leading-relaxed text-[#6b5850]">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
