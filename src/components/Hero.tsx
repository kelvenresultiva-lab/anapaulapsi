import Image from "next/image";
import { CheckCircle2, ArrowUpRight, Leaf } from "lucide-react";
import { heroContent } from "@/data/content";
import Reveal from "./Reveal";
import HeroBadge from "./HeroBadge";
import WhatsappIcon from "./WhatsappIcon";

export default function Hero() {
  return (
    <>
      {/* Mobile: foto dela em pé (com o fade para o creme já embutido na
          própria imagem) e o texto centralizado logo abaixo, sobre a
          área já esmaecida. */}
      <section className="relative bg-cream lg:hidden">
        <div className="relative aspect-[941/1672] w-full">
          <Image
            src={heroContent.mobileImage.src}
            alt={heroContent.mobileImage.alt}
            fill
            priority
            className="object-cover object-top"
            sizes="100vw"
          />
          <div className="absolute inset-x-0 bottom-0 top-[56%] flex flex-col items-center justify-center px-6 pb-8 text-center">
            <Reveal>
              <p className="mb-3 text-sm font-medium tracking-[0.25em] text-burgundy uppercase">
                {heroContent.eyebrow}
              </p>

              <h1 className="mb-4 font-serif text-5xl leading-[1.05] text-burgundy">
                {heroContent.displayName}
              </h1>

              <div className="mx-auto mb-4 flex items-center gap-3">
                <span className="h-px w-12 bg-tan/50" />
                <Leaf size={14} className="text-tan" />
                <span className="h-px w-12 bg-tan/50" />
              </div>

              <p className="mx-auto mb-7 max-w-xs text-sm font-medium tracking-wide text-burgundy/80 uppercase">
                {heroContent.mobileTagline}
              </p>

              <a
                href={heroContent.mobileCta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full max-w-xs items-center justify-center gap-2 rounded-xl bg-tan px-7 py-4 text-sm font-semibold tracking-wider text-white uppercase shadow-[0_14px_30px_-10px_rgba(58,28,34,0.35)] transition-all hover:-translate-y-0.5 hover:bg-tan-dark"
              >
                {heroContent.mobileCta.label}
                <WhatsappIcon size={16} />
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Desktop: foto em tela cheia como fundo, texto sobreposto à
          esquerda. */}
      <section className="relative hidden overflow-hidden bg-cream lg:block lg:aspect-[1672/941]">
        <Image
          src={heroContent.image.src}
          alt={heroContent.image.alt}
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />

        <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-center px-16 xl:px-20">
          <Reveal>
            <div className="flex max-w-xl flex-col">
              <HeroBadge size={100} />

              <p className="mt-6 mb-3 text-sm font-medium tracking-[0.25em] text-tan-dark uppercase">
                {heroContent.eyebrow}
              </p>

              <h1 className="mb-6 font-serif text-7xl leading-[1.05] text-burgundy xl:text-8xl">
                {heroContent.displayName}
              </h1>

              <div className="mb-8 flex items-center gap-3">
                <span className="h-px w-14 bg-tan/50" />
                <Leaf size={16} className="text-tan" />
                <span className="h-px w-14 bg-tan/50" />
              </div>

              <ul className="mb-10 space-y-3">
                {heroContent.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3">
                    <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-tan" />
                    <span className="text-lg leading-relaxed text-burgundy/80">
                      {bullet}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={heroContent.secondaryCta.href}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-burgundy/20 bg-cream px-7 py-4 text-sm font-semibold tracking-wider text-burgundy uppercase transition-colors hover:bg-burgundy/5"
                >
                  {heroContent.secondaryCta.label}
                  <ArrowUpRight size={16} />
                </a>
                <a
                  href={heroContent.primaryCta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-tan px-7 py-4 text-sm font-semibold tracking-wider text-white uppercase shadow-[0_14px_30px_-10px_rgba(58,28,34,0.35)] transition-all hover:-translate-y-0.5 hover:bg-tan-dark hover:shadow-[0_18px_34px_-10px_rgba(58,28,34,0.45)]"
                >
                  {heroContent.primaryCta.label}
                  <WhatsappIcon size={16} />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
