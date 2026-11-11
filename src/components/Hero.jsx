import { useEffect, useState } from "react";
import { GALLERY, PRODUCTS, HERO_TEXT } from "../config";

const imgs = GALLERY.length ? GALLERY.slice(0, 4) : PRODUCTS.slice(0, 4).map(p => p.img);

export default function Hero({ setFilter }) {
  const [cur, setCur] = useState(0);
  const go = (n) => setCur((n + imgs.length) % imgs.length);

  // timer cur par depend karta hai, isliye click ke baad 6s phir se shuru
  useEffect(() => {
    const t = setInterval(() => setCur(c => (c + 1) % imgs.length), 6000);
    return () => clearInterval(t);
  }, [cur]);

  return (
    <section className="hero" id="hero">
      <div id="slides">
        {imgs.map((src, n) => (
          <div key={n} className={`slide${n === cur ? " active" : ""}`} style={{ backgroundImage: `url('${src}')` }}>
            <div className="slide-text">
              <h1>{HERO_TEXT[n % 4][0]}</h1><p>{HERO_TEXT[n % 4][1]}</p>
              <a href="#products" className="btn-white" onClick={() => setFilter("all")}>Shop Now</a>
            </div>
          </div>
        ))}
      </div>
      <button className="arrow prev" aria-label="Previous" onClick={() => go(cur - 1)}>&#10094;</button>
      <button className="arrow next" aria-label="Next" onClick={() => go(cur + 1)}>&#10095;</button>
      <div className="dots">
        {imgs.map((_, n) => <i key={n} className={n === cur ? "on" : ""} onClick={() => go(n)} />)}
      </div>
    </section>
  );
}