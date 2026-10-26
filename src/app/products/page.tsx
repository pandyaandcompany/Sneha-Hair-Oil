"use client";

import Image from "next/image";
import { MessageCircle, ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import { products, whatsappUrl } from "@/data/site";


function productCopy(id: string, t: ReturnType<typeof useLanguage>["t"]) {
  const copy = {
    "coconut-oil": {
      name: t.coconutOil,
      description: t.coconutDescription,
      size: t.availableSizes,
      tag: t.coconutOil
    },
    "castor-oil": {
      name: t.castorOil,
      description: t.castorDescription,
      size: t.availableSizes,
      tag: t.castorOil
    },
    "cottonseed-oil": {
      name: t.cottonseedOil,
      description: t.cottonseedDescription,
      size: t.availableSizes,
      tag: t.cottonseedOil
    },
    "sesame-seed-oil": {
      name: t.sesameOil,
      description: t.sesameDescription,
      size: t.availableSizes,
      tag: t.sesameOil
    }
  };

  return copy[id as keyof typeof copy];
}
export default function ProductsPage() {
  const { t } = useLanguage();

  return (
    <>
      <section className="page-hero" style={{ paddingTop: "20px", paddingBottom: "0px" }}>
        <div className="site-container">
          <span className="eyebrow">The product collection</span>
          <h1>{t.products}</h1>
          <p>
            Explore Sneha Hair Oil and contact our team for current bottle
            sizes, ingredients, pricing and availability.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="site-container grid gap-7 sm:grid-cols-2 xl:grid-cols-4">
          {products.map((p) => (
            <article className="card group overflow-hidden" key={p.id}>
              <div className="bg-[#f5ead5] p-3">
                {/* Product name sits above the image, never over the logo */}
                <div className="mb-3">
                  <span className="inline-flex rounded-full bg-white px-4 py-2 text-sm font-extrabold text-[#078b43] shadow-sm">
                    {productCopy(p.id, t).tag}
                  </span>
                </div>

                {/* The complete image remains visible */}
                <div className="relative h-[285px] w-full overflow-hidden rounded-xl">
                  <Image
                    src={p.image}
                    alt={productCopy(p.id, t).name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
                    className="object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </div>
              </div>

              <div className="p-6">
                <h2 className="text-xl font-bold text-[#4b2819]">
                  {productCopy(p.id, t).name}
                </h2>

                <p className="mt-3 leading-7 text-[#786b60]">
                  {productCopy(p.id, t).description}
                </p>

                <p className="mt-4 text-sm font-semibold text-[#8b7b6b]">
                  {productCopy(p.id, t).size}
                </p>

                <a
                  href={whatsappUrl(
                    `Hello Sneha Hair Oil, please share the current price, available sizes and product details for ${productCopy(p.id, t).name}.`
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary mt-6 flex w-full items-center justify-center gap-2"
                >
                  <MessageCircle size={17} />
                  {t.enquire}
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </article>
          ))}
        </div>

        <p className="site-container mt-8 text-sm leading-6 text-[#786b60]">
          Product information and bottle sizes are subject to confirmation.
          Please contact us for current product details and availability.
        </p>
      </section>
    </>
  );
}



