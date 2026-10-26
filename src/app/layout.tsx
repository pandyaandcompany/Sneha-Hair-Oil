import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/components/LanguageProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Sneha Ayurvedic Hair Oil | All in One Hair Oil",
  description: "Discover Sneha Ayurvedic Hair Oil. Explore the product, learn about hair-care routines and contact the Sneha team for product enquiries.",
  keywords: ["Sneha Hair Oil", "Ayurvedic Hair Oil", "Herbal Hair Care", "Sneha Ayurvedic Hair Oil"],
  openGraph: {
    title: "Sneha Ayurvedic Hair Oil",
    description: "A thoughtful approach to everyday hair care.",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>
    <LanguageProvider>
      <Header />
      <main>{children}</main>
      <Footer />
      <WhatsAppFloat />
    </LanguageProvider>
  </body></html>;
}
