import Image from "next/image";
import { GraduationCap, HeartHandshake } from "lucide-react";
import { aboutContent } from "@/data/content";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="sobre" className="bg-cream py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 lg:grid-cols-2 lg:items-center lg:px-8">
        <Reveal className="relative mx-auto w-full max-w-md">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl shadow-lg">
            <Image
              src={aboutContent.image.src}
              alt={aboutContent.image.alt}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 28rem, 90vw"
            />
          </div>
        </Reveal>

        <Reveal delayMs={150}>
          <p className="mb-3 text-sm font-semibold tracking-[0.2em] text-tan-dark uppercase">
            {aboutContent.eyebrow}
          </p>
          <h2 className="mb-6 font-serif text-3xl text-burgundy sm:text-4xl">
            {aboutContent.heading}
          </h2>
          <div className="space-y-4">
            {aboutContent.paragraphs.map((paragraph) => (
              <p key={paragraph} className="leading-relaxed text-[#5a4038]">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 rounded-2xl bg-white p-6 shadow-sm sm:grid-cols-2">
            <div>
              <div className="mb-3 flex items-center gap-2 text-burgundy">
                <GraduationCap size={18} className="text-tan-dark" />
                <p className="font-serif text-base">{aboutContent.formationHeading}</p>
              </div>
              <ul className="space-y-1.5">
                {aboutContent.formation.map((line) => (
                  <li key={line} className="text-sm leading-snug text-[#6b5850]">
                    {line}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="mb-3 flex items-center gap-2 text-burgundy">
                <HeartHandshake size={18} className="text-tan-dark" />
                <p className="font-serif text-base">{aboutContent.actingHeading}</p>
              </div>
              <ul className="space-y-1.5">
                {aboutContent.acting.map((line) => (
                  <li key={line} className="text-sm leading-snug text-[#6b5850]">
                    {line}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
