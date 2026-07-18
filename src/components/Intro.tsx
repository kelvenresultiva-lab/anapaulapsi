import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { introContent, siteConfig } from "@/data/content";
import Reveal from "./Reveal";

export default function Intro() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(155deg,#f6efe4_0%,#f0e2c7_45%,#e6d3ac_100%)] py-20 lg:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -left-32 h-[26rem] w-[26rem] rounded-full bg-[#c9a877]/35 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 bottom-0 h-[22rem] w-[22rem] rounded-full bg-[#8f7a5f]/25 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
          <Reveal className="relative mx-auto w-full max-w-lg lg:max-w-none">
            <div className="relative aspect-[6/5] w-full overflow-hidden rounded-2xl shadow-xl">
              <Image
                src={introContent.image.src}
                alt={introContent.image.alt}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 45vw, 90vw"
              />
            </div>
          </Reveal>

          <Reveal delayMs={100}>
            <h2 className="mb-5 font-serif text-3xl leading-snug text-burgundy sm:text-4xl">
              {introContent.heading}
            </h2>
            <p className="mb-6 leading-relaxed text-[#5a4038]">
              {introContent.paragraph}
            </p>

            <div className="mb-6 flex flex-wrap gap-2.5">
              {introContent.symptoms.map((symptom) => (
                <span
                  key={symptom}
                  className="rounded-full border border-tan/40 bg-white px-4 py-2 text-sm text-burgundy"
                >
                  {symptom}
                </span>
              ))}
            </div>

            <p className="mb-8 leading-relaxed text-[#5a4038]">
              {introContent.footnote}
            </p>

            <a
              href={`https://wa.me/${siteConfig.phoneWhatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 rounded-xl bg-tan px-8 py-4 text-sm font-semibold tracking-wider text-white uppercase shadow-[0_14px_30px_-10px_rgba(58,28,34,0.45)] transition-all hover:-translate-y-0.5 hover:bg-tan-dark hover:shadow-[0_18px_34px_-10px_rgba(58,28,34,0.55)]"
            >
              {introContent.ctaLabel}
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
