// ====== APNI DETAILS YAHAN BADLO ======
const WHATSAPP_NUMBER = "917417963162";
const BRAND = "Mithilanchal";

// Products: title/price/photo yahan badlo. Photo ka naam images/ folder ke hisaab se.
const PRODUCTS = [
  { id: 1, cat: "saree",    title: "Radha-Krishna Mandala Hand-Painted Saree", img: "images/madhubani-radha-krishna-saree.png", fabric: "Silk", price: "Rs --" },
  { id: 2, cat: "dupatta",  title: "Machhli & Mor Hand-Painted Dupatta",       img: "images/madhubani-fish-peacock-dupatta.png", fabric: "Cotton", price: "Rs --" },
  { id: 3, cat: "topi",     title: "Hand-Painted Mithila Topi",                img: "images/madhubani-hand-painted-topi.png", fabric: "Cotton", price: "Rs --" },
  { id: 4, cat: "painting", title: "Vivah Kohbar Madhubani Painting",          img: "images/madhubani-vivah-kohbar-painting.png", fabric: "Cloth canvas", price: "Rs --" },
  { id: 5, cat: "painting", title: "Mandala Kohbar Wall Painting",             img: "images/madhubani-mandala-wall-painting.png", fabric: "Cloth canvas", price: "Rs --" }
];

const HERO_TEXT = [
  ["Mithila Kala", "Haath se bani Madhubani"],
  ["Shubh Vivah", "Kohbar aur wedding art"],
  ["Tyohaar Special", "Chhath, Diwali aur gifts"],
  ["Naya Collection", "Custom order bhi swikar"]
];
const CATS = [
  { label: "Sarees", filter: "saree", img: "images/madhubani-radha-krishna-saree.png" },
  { label: "Dupatte", filter: "dupatta", img: "images/madhubani-fish-peacock-dupatta.png" },
  { label: "Topi", filter: "topi", img: "images/madhubani-hand-painted-topi.png" },
  { label: "Wall Paintings", filter: "painting", img: "images/madhubani-vivah-kohbar-painting.png" }
];
// ======================================

const GAL = window.GALLERY_FILES || [];            // m1..m10 (js/gallery.js se)
const $ = (s) => document.querySelector(s);
const wa = (msg) => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
// Agar koi photo na mile to gallery ki photo dikha do
window.swap = (el, i) => { el.onerror = null; if (GAL.length) el.src = GAL[i % GAL.length]; else el.style.opacity = 0; };

// ---- Border (images/border.png): lambi patti => upar-niche, warna poore page ka frame ----
const bi = new Image();
bi.onload = () => {
  const root = document.documentElement, ratio = bi.naturalWidth / bi.naturalHeight;
  root.style.setProperty("--border-img", `url("${new URL("images/border.png", location.href).href}")`);
  root.classList.add(ratio >= 2.5 ? "custom-border" : "frame");
};
bi.src = "images/border.png";

// ---- Contact links ----
["waTop", "waFloat", "waFoot", "waStory"].forEach(id => {
  const el = document.getElementById(id);
  if (el) el.href = wa(`Namaste ${BRAND}, mujhe aapke Madhubani products ke baare mein jaanna hai.`);
});
$("#yr").textContent = new Date().getFullYear();

// ---- Hero slider ----
const heroImgs = GAL.length ? GAL.slice(0, 4) : PRODUCTS.slice(0, 4).map(p => p.img);
$("#slides").innerHTML = heroImgs.map((src, n) => `
  <div class="slide${n === 0 ? " active" : ""}" style="background-image:url('${src}')">
    <div class="slide-text">
      <h1>${HERO_TEXT[n % 4][0]}</h1><p>${HERO_TEXT[n % 4][1]}</p>
      <a href="#products" class="btn-white" data-filter="all">Shop Now</a>
    </div>
  </div>`).join("");
$("#dots").innerHTML = heroImgs.map((_, n) => `<i data-n="${n}" class="${n === 0 ? "on" : ""}"></i>`).join("");
const slides = document.querySelectorAll(".slide"), dots = document.querySelectorAll(".dots i");
let cur = 0, timer;
const show = n => {
  slides[cur].classList.remove("active"); dots[cur].classList.remove("on");
  cur = (n + slides.length) % slides.length;
  slides[cur].classList.add("active"); dots[cur].classList.add("on");
};
const auto = () => { clearInterval(timer); timer = setInterval(() => show(cur + 1), 6000); };
$(".next").onclick = () => { show(cur + 1); auto(); };
$(".prev").onclick = () => { show(cur - 1); auto(); };
dots.forEach(d => d.onclick = () => { show(+d.dataset.n); auto(); });
auto();

// ---- Header: scroll par solid ho jaata hai, search toggle ----
const siteTop = $("#siteTop");
const onScroll = () => siteTop.classList.toggle("scrolled", window.scrollY > 40);
onScroll(); window.addEventListener("scroll", onScroll, { passive: true });
$("#searchBtn").onclick = () => {
  const p = $("#searchPanel"); p.hidden = !p.hidden;
  siteTop.classList.toggle("solid", !p.hidden);
  if (!p.hidden) $("#search").focus();
};

// ---- Reveal animation ----
const io = new IntersectionObserver(es => es.forEach(e => {
  if (!e.isIntersecting) return;
  e.target.classList.add("in"); io.unobserve(e.target);
  setTimeout(() => e.target.classList.remove("reveal", "in"), 1000);
}), { threshold: 0.12 });
const reveal = (sel) => document.querySelectorAll(sel).forEach(el => { el.classList.add("reveal"); io.observe(el); });

// ---- Categories ----
$("#cats").innerHTML = CATS.map((c, i) =>
  `<a href="#products" class="cat" data-filter="${c.filter}"><img src="${c.img}" alt="${c.label}" loading="lazy" onerror="swap(this,${i})"><span>${c.label}</span></a>`).join("");

// ---- Products ----
const grid = $("#grid"), empty = $("#empty");
let filter = "all", query = "";
function render() {
  const q = query.toLowerCase();
  const list = PRODUCTS.filter(p => (filter === "all" || p.cat === filter) && p.title.toLowerCase().includes(q));
  grid.innerHTML = list.map((p, i) => `
    <article class="card">
      <img src="${p.img}" alt="${p.title}" loading="lazy" onerror="swap(this,${i})">
      <div class="card-body">
        <h3>${p.title}</h3>
        <div class="meta">Hand-painted &bull; ${p.fabric}</div>
        <div class="price">${p.price}</div>
        <a class="btn" target="_blank" rel="noopener" href="${wa(`Namaste, mujhe "${p.title}" order karna hai.`)}">WhatsApp pe order karein</a>
      </div>
    </article>`).join("");
  empty.hidden = list.length > 0;
  reveal(".card");
}
render();
document.addEventListener("click", e => {
  const a = e.target.closest("[data-filter]"); if (!a) return;
  filter = a.dataset.filter; render();
});
$("#search").addEventListener("input", e => { query = e.target.value; render(); });

// ---- Collection (m1..m10 + products) ----
const galleryImgs = [...GAL, ...PRODUCTS.map(p => p.img)];
$("#masonry").innerHTML = galleryImgs.map(src =>
  `<figure><img src="${src}" alt="Madhubani painting" loading="lazy" onerror="this.parentElement.remove()"></figure>`).join("");
$("#storyImg").src = GAL[4] || GAL[0] || PRODUCTS[4].img;
$("#storyImg").onerror = () => swap($("#storyImg"), 0);
reveal(".cat"); reveal(".masonry figure"); reveal(".why div");

// ---- 3D tilt on product cards ----
grid.addEventListener("mousemove", e => {
  const c = e.target.closest(".card"); if (!c) return;
  const r = c.getBoundingClientRect();
  const x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
  c.style.transform = `rotateY(${x * 14}deg) rotateX(${-y * 14}deg) translateY(-8px)`;
});
grid.addEventListener("mouseout", e => { const c = e.target.closest(".card"); if (c) c.style.transform = ""; });
