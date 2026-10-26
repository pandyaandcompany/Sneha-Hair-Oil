export const business = {
  brand: "Sneha",
  productName: "Sneha Ayurvedic Hair Oil",
  tagline: "All in One Hair Oil",
  whatsapp: "9624139539",
  phone: "9724783077",
  contactName: "Vaidh Pankaj Prajapati",
  email: "vaidhpankaj1986@gmail.com",
  village: "Village Tarasara, Ta. Talaja, Dist. Bhavnagar, Gujarat",
  headOffice: "Satkar Medical Hall, Tilak Chowk, Talaja",
  instagram: "sneha ayurvedic hair oil",
  facebook: "sneha hair oil",
  gstin: "24CCOPR9653L1ZO"
};

export const productImages = [
  { src: "/products/sneha-product-main.jpeg", alt: "Sneha Ayurvedic Hair Oil bottles" },
  { src: "/products/sneha-poster-ingredients.jpeg", alt: "Sneha Hair Oil ingredients poster" },
  { src: "/products/sneha-poster-benefits.jpeg", alt: "Sneha Hair Oil product benefits poster" },
  { src: "/products/sneha-poster-routine.jpeg", alt: "Sneha Hair Oil usage and routine poster" },
  { src: "/products/sneha-poster-21-days.jpeg", alt: "Sneha Hair Oil promotional poster" }
];

export const products = [
  {
    id: "coconut-oil",
    name: "Coconut Oil",
    description: "Explore Sneha Coconut Oil. Contact our team for product details, pricing and availability.",
    image: productImages[0].src,
    size: "Contact us for available sizes",
    tag: "Coconut Oil"
  },
  {
    id: "castor-oil",
    name: "Castor Oil",
    description: "Enquire about Sneha Castor Oil and confirm current packaging, pricing and availability.",
    image: productImages[0].src,
    size: "Contact us for available sizes",
    tag: "Castor Oil"
  },
  {
    id: "cottonseed-oil",
    name: "Cottonseed Oil",
    description: "Ask our team for Sneha Cottonseed Oil product information and availability.",
    image: productImages[0].src,
    size: "Contact us for available sizes",
    tag: "Cottonseed Oil"
  },
  {
    id: "sesame-seed-oil",
    name: "Sesame Seed Oil",
    description: "Contact Sneha for Sesame Seed Oil details, available sizes and current pricing.",
    image: productImages[0].src,
    size: "Contact us for available sizes",
    tag: "Sesame Seed Oil"
  }
];

export function whatsappUrl(message: string) {
  return `https://wa.me/91${business.whatsapp}?text=${encodeURIComponent(message)}`;
}

