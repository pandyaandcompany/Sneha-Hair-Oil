"use client";

import Link from "next/link";
import { Instagram, Facebook, MapPin, Mail, Phone, MessageCircle } from "lucide-react";
import { business, whatsappUrl } from "@/data/site";
import { useLanguage } from "./LanguageProvider";

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="bg-[#4b2819] text-white">
      <div className="site-container grid gap-10 py-14 md:grid-cols-[1.2fr_.8fr_1fr]">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-xl font-black italic text-[#078b43]">S</span>
            <div><div className="text-2xl font-black italic text-[#7de09e]">Sneha</div><div className="text-[10px] font-bold uppercase tracking-[.18em]">Ayurvedic Hair Oil</div></div>
          </div>
          <p className="max-w-sm leading-7 text-white/70">{t.footerLine}</p>
          <div className="mt-5 flex gap-3">
            <a aria-label="Instagram" href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="rounded-full bg-white/10 p-3 hover:bg-white/20"><Instagram size={18}/></a>
            <a aria-label="Facebook" href="https://www.facebook.com/" target="_blank" rel="noreferrer" className="rounded-full bg-white/10 p-3 hover:bg-white/20"><Facebook size={18}/></a>
          </div>
        </div>
        <div>
          <h3 className="mb-4 text-lg font-bold">Explore</h3>
          <div className="flex flex-col gap-3 text-sm text-white/70">
            <Link href="/about" className="hover:text-white">{t.about}</Link>
            <Link href="/products" className="hover:text-white">{t.products}</Link>
            <Link href="/ingredients" className="hover:text-white">{t.ingredients}</Link>
            <Link href="/how-to-use" className="hover:text-white">{t.howToUse}</Link>
            <Link href="/testimonials" className="hover:text-white">{t.stories}</Link>
            <Link href="/contact" className="hover:text-white">{t.contact}</Link>
          </div>
        </div>
        <div>
          <h3 className="mb-4 text-lg font-bold">Get in touch</h3>
          <div className="flex flex-col gap-4 text-sm leading-6 text-white/75">
            <p className="flex gap-3"><MapPin className="mt-1 shrink-0 text-[#d6b878]" size={18}/>{business.village}</p>
            <a className="flex gap-3 hover:text-white" href={`tel:${business.phone}`}><Phone className="shrink-0 text-[#d6b878]" size={18}/>{business.phone}</a>
            <a className="flex gap-3 hover:text-white" href={`mailto:${business.email}`}><Mail className="shrink-0 text-[#d6b878]" size={18}/>{business.email}</a>
            <a href={whatsappUrl("Hello Sneha Hair Oil, please share product details.")} target="_blank" rel="noreferrer" className="btn btn-primary w-fit !text-sm"><MessageCircle size={16}/>WhatsApp</a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="site-container flex flex-col justify-between gap-2 py-5 text-xs text-white/55 sm:flex-row">
          <p>© {new Date().getFullYear()} Sneha Hair Oil. {t.allRights}</p>
          <p>Designed for a more thoughtful hair-care routine.</p>
        </div>
      </div>
    </footer>
  );
}
