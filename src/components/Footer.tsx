import { footerContent, siteConfig } from "@/data/content";
import InstagramIcon from "./InstagramIcon";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-burgundy py-14 text-cream/70">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
          <div className="flex items-center gap-4">
            <Logo size={48} light />
            <div>
              <p className="font-serif text-xl text-cream">
                {siteConfig.professionalName}
              </p>
              <p className="text-sm">
                {siteConfig.title} — {siteConfig.crp}
              </p>
              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center gap-1.5 text-sm hover:text-cream"
              >
                <InstagramIcon size={16} />
                {siteConfig.instagramHandle}
              </a>
            </div>
          </div>

          <div>
            <p className="mb-4 text-sm font-semibold tracking-wider text-cream uppercase">
              Links Rápidos
            </p>
            <ul className="space-y-2">
              {footerContent.quickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm hover:text-cream">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 text-sm font-semibold tracking-wider text-cream uppercase">
              {footerContent.schedule.heading}
            </p>
            {footerContent.schedule.lines.map((line) => (
              <p key={line} className="text-sm">
                {line}
              </p>
            ))}
            <p className="mt-2 text-xs text-cream/50">
              {footerContent.schedule.note}
            </p>
            <a
              href={`https://wa.me/${siteConfig.phoneWhatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-block rounded-xl bg-tan px-6 py-3 text-xs font-semibold tracking-wider text-white uppercase shadow-[0_14px_30px_-10px_rgba(0,0,0,0.6)] transition-all hover:-translate-y-0.5 hover:bg-tan-dark"
            >
              {footerContent.ctaLabel}
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-cream/10 pt-6 text-xs text-cream/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.professionalName}. Todos os
            direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
