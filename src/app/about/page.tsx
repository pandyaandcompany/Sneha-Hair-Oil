"use client";
import Image from "next/image";
import { Heart, Leaf, Handshake } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import { productImages, whatsappUrl } from "@/data/site";

export default function AboutPage() {
  const { t } = useLanguage();
  return <>
    <section className="page-hero" style={{ paddingTop: "20px", paddingBottom: "0px" }}><div className="site-container"><span className="eyebrow">Our story</span><h1>{t.about}</h1><p>Get to know the people and values behind Sneha Ayurvedic Hair Oil.</p></div></section>
    <section style={{ paddingTop: "12px", paddingBottom: "48px" }}><div className="site-container grid items-center gap-8 lg:grid-cols-2">
      <div className="relative overflow-hidden rounded-[28px] bg-[#f4e5c8] p-3"><Image src={productImages[0].src} alt="Sneha Hair Oil original branded bottles" width={900} height={1100} className="h-auto w-full rounded-[20px] object-contain"/></div>
      <div><span className="eyebrow">{t.aboutEyebrow}</span><h2 className="mt-4 font-serif text-4xl font-bold leading-tight text-[#4b2819]">{t.aboutHeading}</h2><p className="mt-5 leading-8 text-[#786b60]">{t.aboutParagraph1}</p><p className="mt-4 leading-8 text-[#786b60]">{t.aboutParagraph2}</p><a href={whatsappUrl("Hello Sneha team, I would like to know more about your brand.")} target="_blank" rel="noreferrer" className="btn btn-primary mt-7">{t.contactUs}</a></div>
    </div></section>
    <section className="bg-[#f7f1e5] py-16"><div className="site-container grid gap-5 md:grid-cols-3">
      {[{icon:Leaf,title:"Herbal inspiration",text:"A brand identity inspired by traditional botanical hair-care practices."},{icon:Heart,title:"Everyday care",text:"Helping customers discover a product that fits their personal routine."},{icon:Handshake,title:"Personal service",text:"Direct conversations for product questions, pricing and availability."}].map((x)=><div key={x.title} className="rounded-2xl border border-[#e8dcc7] bg-white p-7"><x.icon className="mb-5 text-[#078b43]" size={28}/><h3 className="text-xl font-bold text-[#4b2819]">{x.title}</h3><p className="mt-3 leading-7 text-[#786b60]">{x.text}</p></div>)}
    </div></section>
  </>;
}



