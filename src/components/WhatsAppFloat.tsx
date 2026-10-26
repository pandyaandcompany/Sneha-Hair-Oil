import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/data/site";

export default function WhatsAppFloat() {
  return <a href={whatsappUrl("Hello Sneha Hair Oil, I would like to enquire about your product.")} target="_blank" rel="noreferrer" aria-label="Chat with Sneha Hair Oil on WhatsApp" className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#20b85a] text-white shadow-xl ring-4 ring-white/80 transition hover:-translate-y-1 hover:bg-[#169847]"><MessageCircle size={27}/></a>;
}
