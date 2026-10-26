"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "./LanguageProvider";
import { business } from "@/data/site";

const links = [
  { href: "/", key: "home" },
  { href: "/about", key: "about" },
  { href: "/products", key: "products" },
  { href: "/ingredients", key: "ingredients" },
  { href: "/how-to-use", key: "howToUse" },
  { href: "/testimonials", key: "stories" },
  { href: "/contact", key: "contact" }
] as const;

export default function Header() {
  const pathname = usePathname();
  const { locale, setLocale, t } = useLanguage();
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header sticky top-0 z-50 border-b border-white/15 bg-[#2f1b14]/95 text-[#fffaf0] backdrop-blur-xl">
      <div className="site-container flex min-h-[78px] items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3" aria-label="Sneha Hair Oil home" onClick={() => setOpen(false)}>
          <span className="flex h-12 w-12 items-center justify-center rounded-full border-[3px] border-[#8fe3a5] bg-white text-xl font-black italic text-[#078b43] shadow-sm">S</span>
          <span className="leading-tight">
            <span className="block text-2xl font-black italic tracking-tight text-[#8fe3a5]">Sneha</span>
            <span className="block text-[10px] font-bold uppercase tracking-[.18em] text-[#b8d8b5]">Ayurvedic Hair Oil</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-5 xl:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className={`text-sm font-bold transition-colors ${pathname === link.href ? "text-[#8fe3a5]" : "text-[#fffaf0] hover:text-[#8fe3a5]"}`}>
              {t[link.key]}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <label className="relative">
            <span className="sr-only">Choose language</span>
            <select aria-label="Choose language" value={locale} onChange={(e) => setLocale(e.target.value as "en" | "hi" | "gu")} className="appearance-none rounded-full border border-[#8fe3a5] bg-[#3b241b] py-2 pl-3 pr-8 text-sm font-bold text-[#8fe3a5] outline-none focus:border-[#b8f0c3]">
              <option value="en">EN</option><option value="hi">हिंदी</option><option value="gu">ગુજરાતી</option>
            </select>
            <ChevronDown size={13} className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2" />
          </label>
        </div>
        <button className="rounded-full border border-[#eadfce] p-2 xl:hidden" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && <div className="border-t border-white/15 bg-[#2f1b14] px-5 pb-5 pt-3 text-[#fffaf0] xl:hidden">
        <div className="site-container flex flex-col gap-1">
          {links.map((link) => <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className={`rounded-xl px-3 py-3 font-semibold ${pathname === link.href ? "bg-[#eef6e9] text-[#078b43]" : "text-[#5f5146]"}`}>{t[link.key]}</Link>)}
          <div className="flex items-center justify-between py-3 text-[#fffaf0]">
            <span className="text-sm font-semibold">Language</span>
            <select value={locale} onChange={(e) => setLocale(e.target.value as "en" | "hi" | "gu")} className="rounded-full border border-[#8fe3a5] bg-[#3b241b] px-3 py-2 text-sm font-semibold text-[#8fe3a5]">
              <option value="en">English</option><option value="hi">हिंदी</option><option value="gu">ગુજરાતી</option>
            </select>
          </div>
        </div>
      </div>}
    </header>
  );
}



