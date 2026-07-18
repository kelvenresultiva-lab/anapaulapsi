import { Wind, CloudRain, Gauge, Puzzle, Baby, type LucideIcon } from "lucide-react";
import { specialtiesContent, siteConfig } from "@/data/content";
import Reveal from "./Reveal";

const iconMap: Record<string, LucideIcon> = {
  wind: Wind,
  "cloud-rain": CloudRain,
  gauge: Gauge,
  puzzle: Puzzle,
  baby: Baby,
};

export default function Specialties() {
  return (
    <section id="especialidades" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
        <Reveal>
          <h2 className="mb-4 font-serif text-3xl text-burgundy sm:text-4xl">
            {specialtiesContent.heading}
          </h2>
          <p className="text-[#6b5850]">{specialtiesContent.subtext}</p>
        </Reveal>
      </div>

      <div className="mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-6 px-6 sm:grid-cols-3 lg:px-8">
        {specialtiesContent.items.map((item, index) => {
          const Icon = iconMap[item.icon];
          return (
            <Reveal key={item.title} delayMs={index * 120}>
              <div className="h-full rounded-2xl border border-tan/15 bg-white p-7 shadow-[0_10px_30px_-18px_rgba(58,28,34,0.25)]">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-tan/15 text-tan-dark">
                  <Icon size={22} strokeWidth={1.75} />
                </div>
                <p className="mb-2 text-xs font-semibold tracking-[0.15em] text-tan-dark uppercase">
                  {item.tag}
                </p>
                <h3 className="mb-3 font-serif text-xl text-burgundy">{item.title}</h3>
                <p className="text-sm leading-relaxed text-[#6b5850]">
                  {item.description}
                </p>
              </div>
            </Reveal>
          );
        })}
      </div>

      <Reveal delayMs={250} className="mt-12 flex justify-center px-6">
        <a
          href={`https://wa.me/${siteConfig.phoneWhatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-tan px-8 py-4 text-sm font-semibold tracking-wider text-white uppercase shadow-[0_14px_30px_-10px_rgba(0,0,0,0.6)] transition-all hover:-translate-y-0.5 hover:bg-tan-dark hover:shadow-[0_18px_34px_-10px_rgba(0,0,0,0.7)]"
        >
          {specialtiesContent.ctaLabel}
        </a>
      </Reveal>
    </section>
  );
}
