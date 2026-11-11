// ====== APNI DETAILS YAHAN BADLO ======
export const WHATSAPP_NUMBER = "917417963162";
export const BRAND = "Mithilanchal";

export const PRODUCTS = [
  { id: 1, cat: "saree",    title: "Radha-Krishna Mandala Hand-Painted Saree", img: "/images/madhubani-radha-krishna-saree.png", fabric: "Silk", price: "Rs --" },
  { id: 2, cat: "dupatta",  title: "Machhli & Mor Hand-Painted Dupatta",       img: "/images/madhubani-fish-peacock-dupatta.png", fabric: "Cotton", price: "Rs --" },
  { id: 3, cat: "topi",     title: "Hand-Painted Mithila Topi",                img: "/images/madhubani-hand-painted-topi.png", fabric: "Cotton", price: "Rs --" },
  { id: 4, cat: "painting", title: "Vivah Kohbar Madhubani Painting",          img: "/images/madhubani-vivah-kohbar-painting.png", fabric: "Cloth canvas", price: "Rs --" },
  { id: 5, cat: "painting", title: "Mandala Kohbar Wall Painting",             img: "/images/madhubani-mandala-wall-painting.png", fabric: "Cloth canvas", price: "Rs --" }
];

export const HERO_TEXT = [
  ["Mithila Kala", "Haath se bani Madhubani"],
  ["Shubh Vivah", "Kohbar aur wedding art"],
  ["Tyohaar Special", "Chhath, Diwali aur gifts"],
  ["Naya Collection", "Custom order bhi swikar"]
];

export const CATS = [
  { label: "Sarees", filter: "saree", img: "/images/madhubani-radha-krishna-saree.png" },
  { label: "Dupatte", filter: "dupatta", img: "/images/madhubani-fish-peacock-dupatta.png" },
  { label: "Topi", filter: "topi", img: "/images/madhubani-hand-painted-topi.png" },
  { label: "Wall Paintings", filter: "painting", img: "/images/madhubani-vivah-kohbar-painting.png" }
];

export const NAV = [
  ["Sab Kuch", "all"], ["Sarees", "saree"], ["Dupatte", "dupatta"],
  ["Topi", "topi"], ["Wall Paintings", "painting"]
];

export const GALLERY = [
  "m1.jpg", "m2.webp", "m3.jfif", "m4.jpg", "m5.webp",
  "m6.webp", "m7.jfif", "m8.jfif", "m9.jfif", "m10.jpg"
].map(f => `/images/gallery/${f}`);

export const wa = (msg) => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
export const WA_HELLO = wa(`Namaste ${BRAND}, mujhe aapke Madhubani products ke baare mein jaanna hai.`);