"use client";
import Image from "next/image";
import Link from "next/link";
import { Leaf, Info, MessageCircle } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import { productImages, whatsappUrl } from "@/data/site";

export default function IngredientsPage() {
  const { t } = useLanguage();
  return <>
    <section className="page-hero"><div className="site-container"><span className="eyebrow">Know what you use</span><h1>{t.ingredientsTitle}</h1><p>{t.ingredientsBody}</p></div></section>
    <section style={{ paddingTop: "12px", paddingBottom: "48px" }}><div className="site-container grid items-center gap-8 lg:grid-cols-[.9fr_1.1fr]">
      <div className="relative overflow-hidden rounded-[28px] bg-[#f4e5c8] p-3"><Image src={productImages[1].src} alt="Sneha Hair Oil ingredient poster supplied by the brand" width={1000} height={900} className="h-[430px] w-full rounded-[20px] object-cover"/></div>
      <div><span className="eyebrow">{t.transparencyEyebrow}</span><h2 className="mt-4 font-serif text-4xl font-bold text-[#4b2819]">{t.transparencyTitle}</h2><p className="mt-5 leading-8 text-[#786b60]">{t.transparencyBody}</p><div className="mt-6 rounded-2xl border border-[#e9dfcc] bg-[#fffaf0] p-5"><div className="flex gap-3"><Info className="mt-1 shrink-0 text-[#078b43]" size={21}/><p className="text-sm leading-7 text-[#6f5e50]">{t.transparencyNote}</p></div></div><a href={whatsappUrl("Hello Sneha Hair Oil, could you please share the current ingredient list and product label details?")} target="_blank" rel="noreferrer" className="btn btn-primary mt-7"><MessageCircle size={17}/>{t.enquire}</a></div>
    </div></section>
    <section className="bg-[#f7f1e5] py-16"><div className="site-container text-center"><Leaf className="mx-auto mb-4 text-[#078b43]" size={32}/><h2 className="font-serif text-3xl font-bold text-[#4b2819]">{t.confidenceTitle}</h2><p className="mx-auto mt-4 max-w-2xl leading-7 text-[#786b60]">{t.confidenceBody}</p><Link href="/how-to-use" className="btn btn-light mt-6">{t.howToUse}</Link></div></section>
  </>;
}


