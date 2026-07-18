import { Clock, FileCheck, HandHeart, ShieldCheck, type LucideIcon } from "lucide-react";
import { reasonsContent } from "@/data/content";
import Reveal from "./Reveal";

const iconMap: Record<string, LucideIcon> = {
  clock: Clock,
  "file-check": FileCheck,
  "hand-heart": HandHeart,
  "shield-check": ShieldCheck,
};

export default function Reasons() {
  return (
    <section className="relative overflow-hidden bg-cream-soft py-20 lg:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-20 -left-20 h-72 w-72 rounded-full bg-tan/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 -bottom-20 h-72 w-72 rounded-full bg-burgundy/5 blur-3xl"
      />

      <div className="relative mx-auto max-w-3xl px-6 text-center lg:px-8">
        <Reveal>
          <p className="mb-3 text-sm font-semibold tracking-[0.2em] text-tan-dark uppercase">
            {reasonsContent.eyebrow}
          </p>
          <h2 className="mb-4 font-serif text-3xl text-burgundy sm:text-4xl">
            {reasonsContent.heading}
          </h2>
          <p className="text-[#6b5850]">{reasonsContent.subtext}</p>
        </Reveal>
      </div>

      <div className="relative mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-6 px-6 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        {reasonsContent.items.map((item, index) => {
          const Icon = iconMap[item.icon];
          return (
            <Reveal key={item.title} delayMs={index * 100}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-tan/15 bg-white p-7 shadow-[0_10px_30px_-18px_rgba(58,28,34,0.35)] transition-all hover:-translate-y-1 hover:border-tan/30 hover:shadow-[0_20px_40px_-18px_rgba(58,28,34,0.45)]">
                <span className="pointer-events-none absolute -top-3 right-4 font-serif text-6xl text-tan/10 transition-colors group-hover:text-tan/20">
                  {item.number}
                </span>

                <div className="relative mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-tan/10 text-tan-dark">
                  <Icon size={24} strokeWidth={1.75} />
                </div>

                <h3 className="relative mb-2 font-serif text-lg text-burgundy">
                  {item.title}
                </h3>
                <span className="relative mb-3 block h-px w-8 bg-tan" />
                <p className="relative text-sm leading-relaxed text-[#6b5850]">
                  {item.description}
                </p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
