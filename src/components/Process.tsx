import Image from "next/image";
import { HandHeart, Users, ClipboardCheck, Sprout, type LucideIcon } from "lucide-react";
import { processContent } from "@/data/content";
import Reveal from "./Reveal";

const processIconMap: Record<string, LucideIcon> = {
  "hand-heart": HandHeart,
  users: Users,
  "clipboard-check": ClipboardCheck,
  sprout: Sprout,
};

// Posições em % medidas diretamente no mockup de referência da cliente
// (a foto de fundo tem a mesma proporção 1672x941, então as % batem 1:1).
const CARD_POSITIONS = {
  topLeft: { top: "31%", minHeight: "27%", left: "9.5%", width: "24%" },
  topRight: { top: "31%", minHeight: "27%", right: "9.5%", width: "24%" },
  bottomLeft: { top: "62%", minHeight: "30%", left: "9.5%", width: "24%" },
  bottomRight: { top: "62%", minHeight: "30%", right: "9.5%", width: "24%" },
} as const;

function ProcessCard({
  item,
  style,
}: {
  item: (typeof processContent.items)[number];
  style: React.CSSProperties;
}) {
  const Icon = processIconMap[item.icon];
  return (
    <div
      style={style}
      className="absolute flex items-start gap-4 rounded-xl bg-cream/95 p-6 shadow-[0_18px_40px_-15px_rgba(58,28,34,0.35)] backdrop-blur-sm"
    >
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-tan/15">
        <Icon size={22} strokeWidth={1.5} className="text-tan-dark" />
      </div>
      <div>
        <h3 className="mb-2 font-serif text-lg text-burgundy">{item.title}</h3>
        <span className="mb-3 block h-px w-8 bg-tan" />
        <p className="text-sm leading-relaxed text-[#6b5850]">{item.description}</p>
      </div>
    </div>
  );
}

export default function Process() {
  const [first, second, third, fourth] = processContent.items;

  return (
    <section id="abordagem" className="bg-cream-soft">
      {/* Mobile / tablet / notebooks estreitos: título em cima, foto
          contida, cards empilhados. */}
      <div className="mx-auto max-w-3xl px-6 pt-20 pb-10 text-center xl:hidden">
        <Reveal>
          <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-tan-dark uppercase">
            {processContent.eyebrow}
          </p>
          <h2 className="mb-4 font-serif text-3xl text-burgundy sm:text-4xl">
            {processContent.heading}
          </h2>
          <p className="text-[#6b5850]">{processContent.subtext}</p>
        </Reveal>
      </div>
      <div className="pb-14 xl:hidden">
        <Reveal className="relative aspect-[5/4] w-full">
          <Image
            src={processContent.image.src}
            alt={processContent.image.alt}
            fill
            className="object-cover object-top"
            sizes="100vw"
          />
        </Reveal>
        <div className="mx-auto max-w-md space-y-5 px-6 pt-8">
          {processContent.items.map((item, i) => {
            const Icon = processIconMap[item.icon];
            return (
              <Reveal key={item.title} delayMs={i * 100}>
                <div className="flex items-start gap-5 rounded-2xl bg-cream/95 p-6 shadow-sm">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-tan/15">
                    <Icon size={26} strokeWidth={1.5} className="text-tan-dark" />
                  </div>
                  <div>
                    <h3 className="mb-2 font-serif text-lg text-burgundy">
                      {item.title}
                    </h3>
                    <span className="mb-3 block h-px w-8 bg-tan" />
                    <p className="text-sm leading-relaxed text-[#6b5850]">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>

      {/* Desktop (1280px+): réplica fiel do mockup — título sobreposto
          direto na foto de fundo (que tem espaço vazio de sobra acima da
          cabeça dela) e os 4 cards apoiados nos cantos, sobre o corpo. */}
      <div className="hidden xl:block">
        <Reveal className="relative w-full xl:aspect-[1672/941]">
          <Image
            src={processContent.image.src}
            alt={processContent.image.alt}
            fill
            className="object-cover"
            sizes="100vw"
          />

          <div className="absolute inset-x-0 top-[4%] px-6 text-center">
            <p className="mb-3 text-sm font-semibold tracking-[0.2em] text-tan-dark uppercase">
              {processContent.eyebrow}
            </p>
            <h2 className="mb-4 font-serif text-4xl text-burgundy xl:text-5xl">
              {processContent.heading}
            </h2>
            <p className="mx-auto max-w-xl text-[#6b5850]">
              {processContent.subtext}
            </p>
          </div>

          <ProcessCard item={first} style={CARD_POSITIONS.topLeft} />
          <ProcessCard item={second} style={CARD_POSITIONS.topRight} />
          <ProcessCard item={third} style={CARD_POSITIONS.bottomLeft} />
          <ProcessCard item={fourth} style={CARD_POSITIONS.bottomRight} />
        </Reveal>
      </div>
    </section>
  );
}
