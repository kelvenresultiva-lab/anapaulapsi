import { Leaf, Star } from "lucide-react";
import { testimonialsContent } from "@/data/content";
import Reveal from "./Reveal";

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} de 5 estrelas`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={16}
          className={i < count ? "fill-tan text-tan" : "text-[#D9C9B4]"}
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const review = testimonialsContent.reviews[0];

  return (
    <section id="depoimentos" className="bg-cream pt-10 pb-20 lg:pt-14 lg:pb-28">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2 lg:px-8">
        <Reveal className="relative">
          <Leaf size={32} className="mb-6 text-tan-dark" />
          <h2 className="mb-4 font-serif text-3xl text-burgundy sm:text-4xl">
            {testimonialsContent.heading}
          </h2>
          <p className="max-w-md leading-relaxed text-[#6b5850]">
            {testimonialsContent.subtext}
          </p>
        </Reveal>

        <Reveal delayMs={150}>
          <div className="rounded-2xl bg-white p-8 shadow-sm">
            <p className="mb-5 font-serif text-lg text-burgundy">
              {testimonialsContent.cardHeading}
            </p>
            <Stars count={review.rating} />
            <p className="mt-4 leading-relaxed text-[#5a4038]">“{review.text}”</p>
            <div className="mt-5 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-cream text-sm font-semibold text-burgundy">
                {review.name.charAt(0)}
              </div>
              <div>
                <p className="font-medium text-burgundy">{review.name}</p>
                <p className="text-xs text-[#8a7268]">{review.timeAgo}</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
