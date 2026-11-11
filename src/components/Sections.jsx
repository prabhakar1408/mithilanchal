import { useRef, useState } from "react";
import { CATS, PRODUCTS, GALLERY, wa, WA_HELLO } from "../config";
import { useReveal } from "../hooks";
import SafeImg from "./SafeImg";

export function Categories({ setFilter }) {
  const ref = useRef(null);
  useReveal(ref, ".cat");
  return (
    <section className="container section" ref={ref}>
      <h2 className="title">Categories</h2>
      <div className="cats">
        {CATS.map((c, i) => (
          <a key={c.filter} href="#products" className="cat" onClick={() => setFilter(c.filter)}>
            <SafeImg src={c.img} alt={c.label} i={i} /><span>{c.label}</span>
          </a>
        ))}
      </div>
    </section>
  );
}

function Card({ p, i }) {
  const tilt = (e) => {
    const c = e.currentTarget, r = c.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
    c.style.transform = `rotateY(${x * 14}deg) rotateX(${-y * 14}deg) translateY(-8px)`;
  };
  return (
    <article className="card" onMouseMove={tilt} onMouseLeave={e => (e.currentTarget.style.transform = "")}>
      <SafeImg src={p.img} alt={p.title} i={i} />
      <div className="card-body">
        <h3>{p.title}</h3>
        <div className="meta">Hand-painted &bull; {p.fabric}</div>
        <div className="price">{p.price}</div>
        <a className="btn" target="_blank" rel="noopener" href={wa(`Namaste, mujhe "${p.title}" order karna hai.`)}>WhatsApp pe order karein</a>
      </div>
    </article>
  );
}

export function Products({ filter, query }) {
  const ref = useRef(null);
  const q = query.toLowerCase();
  const list = PRODUCTS.filter(p => (filter === "all" || p.cat === filter) && p.title.toLowerCase().includes(q));
  useReveal(ref, ".card", [filter, query]);
  return (
    <section className="container section" id="products" ref={ref}>
      <h2 className="title">Hamare Products</h2>
      <div className="grid">{list.map((p, i) => <Card key={p.id} p={p} i={i} />)}</div>
      <p className="empty" hidden={list.length > 0}>Koi product nahi mila.</p>
    </section>
  );
}

function GalleryItem({ src }) {
  const [gone, setGone] = useState(false);
  if (gone) return null;
  return <figure><img src={src} alt="Madhubani painting" loading="lazy" onError={() => setGone(true)} /></figure>;
}

export function Gallery() {
  const ref = useRef(null);
  useReveal(ref, "figure");
  const all = [...GALLERY, ...PRODUCTS.map(p => p.img)];
  return (
    <section className="container section" id="gallery" ref={ref}>
      <h2 className="title">Mithila Collection</h2>
      <div className="masonry">{all.map((s, i) => <GalleryItem key={i} src={s} />)}</div>
    </section>
  );
}

export function Story() {
  return (
    <section className="story" id="story">
      <div className="container story-row">
        <div className="story-img"><SafeImg src={GALLERY[4] || GALLERY[0] || PRODUCTS[4].img} alt="Madhubani painting" i={0} loading="eager" /></div>
        <div>
          <h2 className="title left">Meri Kahani</h2>
          <p>Yahan apni kahani likho: aap kaun ho, Mithilanchal ke kis gaon se ho, kitne saal se Madhubani painting bana rahe ho, aur ye kala aapko kaise mili.</p>
          <p>Har piece haath se banta hai, natural rang aur pen-brush ke kaam se. Ek saree ya painting mein kai din lagte hain.</p>
          <a className="btn" href={WA_HELLO} target="_blank" rel="noopener">Mujhse seedha baat karein</a>
        </div>
      </div>
    </section>
  );
}

export function Why() {
  const ref = useRef(null);
  useReveal(ref, "div");
  return (
    <section className="container section why" ref={ref}>
      <div><b>100% Hand-Painted</b><p>Print nahi, asli haath ka kaam</p></div>
      <div><b>Pan-India Shipping</b><p>Safe packing ke saath</p></div>
      <div><b>Custom Orders</b><p>Apni pasand ka design banwayein</p></div>
      <div><b>Easy Payment</b><p>UPI, Card aur COD</p></div>
    </section>
  );
}