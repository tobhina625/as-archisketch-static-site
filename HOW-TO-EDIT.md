# How to edit this website

Everything you are most likely to change lives in ONE file:

    src/components/site/site-data.ts

Open it and replace anything inside [BRACKETS]:
- WhatsApp number (international format, digits only, e.g. 923001234567)
- Email address, location, working hours
- LinkedIn / Instagram / Behance links
- Stats, prices, services, process steps
- Testimonials (names, roles, cities)
- FAQ questions and answers

## Swap the portfolio pictures
Put your own images in `public/portfolio/` using the same names
(plan-1 ... plan-9). JPG or PNG is fine - if you change the file
extension, update the paths in `site-data.ts` too.

## Change the logo
`src/components/site/Logo.tsx`

## Change colours and fonts
`src/styles.css` (the colour values are at the top)

## Run it on your computer
1. Install Node.js (nodejs.org)
2. In this folder run:  npm install
3. Then run:            npm run dev
4. Open the address it prints (usually http://localhost:8080)

## Put it online
Run `npm run build` and upload the generated output to any host,
or simply keep using the Publish button inside Lovable.
