"use client";
import { useState } from "react";
import { MapPin, Phone, Mail, MessageCircle, Send, Instagram, Facebook } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import { business, whatsappUrl } from "@/data/site";

export default function ContactPage() {
  const { t } = useLanguage();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("Please share product details and pricing.");
  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const text = `Hello Sneha Hair Oil,%0AName: ${encodeURIComponent(name)}%0APhone: ${encodeURIComponent(phone)}%0AEnquiry: ${encodeURIComponent(message)}`;
    window.open(`https://wa.me/91${business.whatsapp}?text=${text}`, "_blank", "noopener,noreferrer");
  }
  return <>
    <section className="page-hero"><div className="site-container"><span className="eyebrow">We are here to help</span><h1>{t.contactTitle}</h1><p>{t.contactBody}</p></div></section>
    <section className="section"><div className="site-container grid gap-10 lg:grid-cols-[.85fr_1.15fr]">
      <div><h2 className="font-serif text-3xl font-bold text-[#4b2819]">Contact Sneha</h2><p className="mt-4 leading-7 text-[#786b60]">For product details, availability, pricing or wholesale enquiries, get in touch with our team.</p>
        <div className="mt-7 space-y-4">
          <a href={whatsappUrl("Hello Sneha Hair Oil, I would like to enquire about your products.")} target="_blank" rel="noreferrer" className="flex gap-4 rounded-2xl border border-[#e9dfcc] bg-white p-5 hover:border-[#078b43]"><span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#e7f4e7] text-[#078b43]"><MessageCircle size={21}/></span><span><strong className="block text-[#4b2819]">WhatsApp</strong><span className="mt-1 block text-sm text-[#786b60]">+91 {business.whatsapp}</span></span></a>
          <a href={`tel:${business.phone}`} className="flex gap-4 rounded-2xl border border-[#e9dfcc] bg-white p-5 hover:border-[#078b43]"><span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#f6eee0] text-[#62351f]"><Phone size={21}/></span><span><strong className="block text-[#4b2819]">Phone</strong><span className="mt-1 block text-sm text-[#786b60]">+91 {business.phone}</span></span></a>
          <a href={`mailto:${business.email}`} className="flex gap-4 rounded-2xl border border-[#e9dfcc] bg-white p-5 hover:border-[#078b43]"><span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#f6eee0] text-[#62351f]"><Mail size={21}/></span><span><strong className="block text-[#4b2819]">Email</strong><span className="mt-1 block break-all text-sm text-[#786b60]">{business.email}</span></span></a>
          <div className="flex gap-4 rounded-2xl border border-[#e9dfcc] bg-white p-5"><span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#f6eee0] text-[#62351f]"><MapPin size={21}/></span><span><strong className="block text-[#4b2819]">Address</strong><span className="mt-1 block text-sm leading-6 text-[#786b60]">{business.village}<br/>{business.headOffice}</span></span></div>
        </div>
      </div>
      <form onSubmit={submit} className="rounded-[28px] border border-[#e9dfcc] bg-white p-6 shadow-[0_18px_55px_rgba(66,42,20,.06)] sm:p-9">
        <h2 className="text-2xl font-bold text-[#4b2819]">Send a product enquiry</h2><p className="mt-2 text-sm leading-6 text-[#786b60]">Complete the form and continue to WhatsApp to send your message.</p>
        <label className="mt-6 block text-sm font-bold text-[#4b2819]">Your name<input required value={name} onChange={e=>setName(e.target.value)} className="mt-2 w-full rounded-xl border border-[#e4d9c8] bg-[#fffdf8] px-4 py-3 outline-none focus:border-[#078b43]" placeholder="Enter your name"/></label>
        <label className="mt-5 block text-sm font-bold text-[#4b2819]">Phone number<input required type="tel" value={phone} onChange={e=>setPhone(e.target.value)} className="mt-2 w-full rounded-xl border border-[#e4d9c8] bg-[#fffdf8] px-4 py-3 outline-none focus:border-[#078b43]" placeholder="Enter your phone number"/></label>
        <label className="mt-5 block text-sm font-bold text-[#4b2819]">Your enquiry<textarea required rows={5} value={message} onChange={e=>setMessage(e.target.value)} className="mt-2 w-full resize-y rounded-xl border border-[#e4d9c8] bg-[#fffdf8] px-4 py-3 outline-none focus:border-[#078b43]"/></label>
        <button type="submit" className="btn btn-primary mt-6 w-full"><Send size={17}/>{t.sendWhatsApp}</button>
        <p className="mt-3 text-xs leading-5 text-[#8b7b6b]">This form opens WhatsApp with your message; it does not store form submissions on this website.</p>
      </form>
    </div></section>
  </>;
}
