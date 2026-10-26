# Sneha Hair Oil — Next.js Website

A 7-page, responsive product showcase for Sneha Ayurvedic Hair Oil with English, Hindi and Gujarati language switching and WhatsApp enquiries.

## Requirements
- Node.js 20.9 or newer
- npm

## Run locally
```powershell
npm install
npm run dev
```
Open http://localhost:3000

## Production build
```powershell
npm run build
npm run start
```

## Pages
- `/` Home
- `/about` About Sneha
- `/products` Our Products
- `/ingredients` Ingredients & Benefits
- `/how-to-use` How to Use
- `/testimonials` Customer Stories
- `/contact` Contact Us

## Replace the placeholder assets
The `public/products` folder contains the supplied Sneha promotional images. Replace them with clean product photography as you get it, keeping the same filenames or updating `src/data/site.ts`.

## WhatsApp and business details
The WhatsApp link is configured to `9624139539` based on the supplied poster. Confirm this number is the preferred WhatsApp number before publishing. Other business details are maintained in `src/data/site.ts`.

## Language content
The language selector switches between English, Hindi and Gujarati. Edit `src/data/translations.ts` to update wording. The initial translation set covers shared navigation and page content; expand each locale before publishing if you add new sections.

## Important content note
Do not publish unverified therapeutic claims or fabricated customer testimonials. Replace demo story cards with genuine, permissioned customer feedback. Confirm ingredient list, bottle sizes, prices, manufacturing details, and all product claims with the brand owner.
