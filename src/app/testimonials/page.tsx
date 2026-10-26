"use client";
import Image from "next/image";
import { MessageCircle, Quote } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import { productImages, whatsappUrl } from "@/data/site";

export default function TestimonialsPage() {
  const { t } = useLanguage();
  return <>
    <section className="page-hero"><div className="site-container"><span className="eyebrow">{t.storiesEyebrow}</span><h1>{t.stories}</h1><p>Real experiences matter. This page is ready for genuine feedback shared with permission by Sneha customers.</p></div></section>
    <section className="section"><div className="site-container grid items-center gap-12 lg:grid-cols-2">
      <div><span className="eyebrow">Real voices, shared responsibly</span><h2 className="mt-4 font-serif text-4xl font-bold text-[#4b2819]">Your experience can help others choose.</h2><p className="mt-5 leading-8 text-[#786b60]">{t.storiesBody}</p><a href={whatsappUrl("Hello Sneha Hair Oil, I would like to share feedback about the product.")} target="_blank" rel="noreferrer" className="btn btn-primary mt-7"><MessageCircle size={17}/>Share feedback</a></div>
      <div className="relative overflow-hidden rounded-[28px] bg-[#f4e5c8] p-3"><Image src={productImages[4].src} alt="Sneha Hair Oil customer information poster" width={1000} height={900} className="h-[430px] w-full rounded-[20px] object-cover"/></div>
    </div></section>
    <section className="bg-[#f7f1e5] py-16"><div className="site-container"><div className="mx-auto max-w-2xl rounded-3xl border border-[#e8dcc7] bg-white p-8 text-center sm:p-12"><Quote className="mx-auto mb-4 text-[#078b43]" size={34}/><h2 className="font-serif text-2xl font-bold text-[#4b2819]">Customer feedback coming soon</h2><p className="mt-3 leading-7 text-[#786b60]">Once verified customer reviews are available, this section can display their words, first name or approved attribution, and review date.</p><p className="mt-5 text-xs font-semibold uppercase tracking-wider text-[#9a8877]">Placeholder — not a customer testimonial</p></div></div></section>
  </>;
}

