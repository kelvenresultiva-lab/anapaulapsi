"use client";

import { useState } from "react";
import { Menu, X, CalendarDays } from "lucide-react";
import { navLinks, siteConfig, headerCta } from "@/data/content";
import Logo from "./Logo";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      id="topo"
      className="sticky top-0 z-50 bg-cream/95 shadow-sm backdrop-blur-sm"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 lg:px-8">
        <a href="#topo" className="flex shrink-0 items-center gap-3">
          <Logo size={38} />
          <span className="hidden flex-col leading-tight sm:flex">
            <span className="font-serif text-sm tracking-[0.15em] text-burgundy uppercase">
              {siteConfig.professionalName}
            </span>
            <span className="text-[10px] tracking-[0.2em] text-burgundy/60 uppercase">
              {siteConfig.title}
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-burgundy transition-colors hover:text-tan-dark"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={headerCta.href}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden items-center gap-2 rounded-full bg-tan px-6 py-2.5 text-xs font-semibold tracking-wider text-white uppercase transition-colors hover:bg-tan-dark lg:inline-flex"
        >
          {headerCta.label}
          <CalendarDays size={15} />
        </a>

        <button
          type="button"
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
          className="text-burgundy transition-colors lg:hidden"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 top-[60px] z-40 flex flex-col items-center gap-8 overflow-y-auto bg-cream px-6 pt-12 pb-12 lg:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium text-burgundy hover:text-tan-dark"
            >
              {link.label}
            </a>
          ))}
          <a
            href={headerCta.href}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="inline-flex items-center gap-2 rounded-full bg-tan px-8 py-3 text-sm font-semibold tracking-wider text-white uppercase hover:bg-tan-dark"
          >
            {headerCta.label}
            <CalendarDays size={16} />
          </a>
        </div>
      )}
    </header>
  );
}
