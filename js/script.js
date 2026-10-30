// ====== APNI DETAILS YAHAN BADLO ======
const WHATSAPP_NUMBER = "917417963162"; // country code ke saath, bina + ke
const BRAND = "Mithilanchal";

const PRODUCTS = [
  { id: 1, cat: "saree",    title: "Radha-Krishna Mandala Hand-Painted Saree", img: "images/madhubani-radha-krishna-saree.png", fabric: "Silk", price: "Rs --" },
  { id: 2, cat: "dupatta",  title: "Machhli & Mor Hand-Painted Dupatta",       img: "images/madhubani-fish-peacock-dupatta.png", fabric: "Cotton", price: "Rs --" },
  { id: 3, cat: "topi",     title: "Hand-Painted Mithila Topi",                img: "images/madhubani-hand-painted-topi.png", fabric: "Cotton", price: "Rs --" },
  { id: 4, cat: "painting", title: "Vivah Kohbar Madhubani Painting",          img: "images/madhubani-vivah-kohbar-painting.png", fabric: "Cloth canvas", price: "Rs --" },
  { id: 5, cat: "painting", title: "Mandala Kohbar Wall Painting",             img: "images/madhubani-mandala-wall-painting.png", fabric: "Cloth canvas", price: "Rs --" }
];
// ======================================

const wa = (msg) => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
["waTop", "waFloat", "waFoot", "waStory"].forEach(id => {
  const el = document.getElementById(id);
  if (el) el.href = wa(`Namaste ${BRAND}, mujhe aapke Madhubani products ke baare mein jaanna hai.`);
});
document.getElementById("yr").textContent = new Date().getFullYear();

const grid = document.getElementById("grid");
const empty = document.getElementById("empty");
let filter = "all", query = "";

function render() {
  const q = query.toLowerCase();
  const list = PRODUCTS.filter(p => (filter === "all" || p.cat === filter) && p.title.toLowerCase().includes(q));
  grid.innerHTML = list.map(p => `
    <article class="card">
      <img src="${p.img}" alt="${p.title}" loading="lazy">
      <div class="card-body">
        <h3>${p.title}</h3>
        <div class="meta">Hand-painted &bull; ${p.fabric}</div>
        <div class="price">${p.price}</div>
        <a class="btn" target="_blank" rel="noopener" href="${wa(`Namaste, mujhe "${p.title}" order karna hai.`)}">WhatsApp pe order karein</a>
      </div>
    </article>`).join("");
  empty.hidden = list.length > 0;
}
render();

document.querySelectorAll("[data-filter]").forEach(a =>
  a.addEventListener("click", () => { filter = a.dataset.filter; render(); }));
document.getElementById("search").addEventListener("input", e => { query = e.target.value; render(); });

const slides = document.querySelectorAll(".slide");
let i = 0;
const show = n => { slides[i].classList.remove("active"); i = (n + slides.length) % slides.length; slides[i].classList.add("active"); };
document.querySelector(".next").onclick = () => show(i + 1);
document.querySelector(".prev").onclick = () => show(i - 1);
setInterval(() => show(i + 1), 5000);
