"use client";
import Image from "next/image";
import { CheckCircle2, MessageCircle, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import { productImages, whatsappUrl } from "@/data/site";

export default function HowToUsePage() {
  const { t } = useLanguage();
  const steps = [
    { n: "01", title: "Read the label", text: "Check the directions and ingredient list on your own bottle before use." },
    { n: "02", title: "Use as directed", text: "Apply the amount and follow the timing recommended on the product packaging." },
    { n: "03", title: "Make it consistent", text: "Follow the product directions as part of a routine that suits your hair and scalp." }
  ];
  return <>
    <section className="page-hero"><div className="site-container"><span className="eyebrow">Your hair-care routine</span><h1>{t.howToUse}</h1><p>Simple reminders for using your product thoughtfully. Always follow the instructions supplied with your specific bottle.</p></div></section>
    <section className="section"><div className="site-container grid items-center gap-12 lg:grid-cols-2">
      <div className="relative overflow-hidden rounded-[28px] bg-[#f4e5c8] p-3"><Image src={productImages[3].src} alt="Sneha Hair Oil promotional information" width={1000} height={900} className="h-[420px] w-full rounded-[20px] object-cover"/></div>
      <div><span className="eyebrow">A considered routine</span><h2 className="mt-4 font-serif text-4xl font-bold text-[#4b2819]">{t.routineTitle}</h2><p className="mt-4 leading-8 text-[#786b60]">{t.routineBody}</p><div className="mt-7 space-y-5">{steps.map(s=><div key={s.n} className="flex gap-4"><span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#e7f1e2] text-sm font-black text-[#078b43]">{s.n}</span><div><h3 className="font-bold text-[#4b2819]">{s.title}</h3><p className="mt-1 text-sm leading-6 text-[#786b60]">{s.text}</p></div></div>)}</div></div>
    </div></section>
    <section className="bg-[#f7f1e5] py-16"><div className="site-container grid gap-5 md:grid-cols-2"><div className="rounded-2xl bg-white p-7"><ShieldCheck className="mb-4 text-[#078b43]" size={28}/><h3 className="text-xl font-bold text-[#4b2819]">Patch-test reminder</h3><p className="mt-3 leading-7 text-[#786b60]">If you have sensitive skin, review the ingredients and consider testing a small amount on a small area first. Stop using the product if irritation occurs.</p></div><div className="rounded-2xl bg-white p-7"><CheckCircle2 className="mb-4 text-[#078b43]" size={28}/><h3 className="text-xl font-bold text-[#4b2819]">Need help?</h3><p className="mt-3 leading-7 text-[#786b60]">Ask the Sneha team about the current label, storage, directions and product availability.</p><a href={whatsappUrl("Hello Sneha Hair Oil, please help me with the correct directions for using the product.")} target="_blank" rel="noreferrer" className="btn btn-primary mt-5"><MessageCircle size={17}/>{t.enquire}</a></div></div></section>
  </>;
}
