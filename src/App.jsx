import { useEffect, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import { Categories, Products, Gallery, Story, Why } from "./components/Sections";

export default function App() {
  const [filter, setFilter] = useState("all");
  const [query, setQuery] = useState("");

  // images/border.png: lambi patti => upar-niche, warna poore page ka frame
  useEffect(() => {
    const bi = new Image();
    bi.onload = () => {
      const root = document.documentElement, ratio = bi.naturalWidth / bi.naturalHeight;
      root.style.setProperty("--border-img", `url("${bi.src}")`);
      root.classList.add(ratio >= 2.5 ? "custom-border" : "frame");
    };
    bi.src = "/images/border.png";
  }, []);

  return (
    <>
      <Header setFilter={setFilter} query={query} setQuery={setQuery} />
      <Hero setFilter={setFilter} />
      <Categories setFilter={setFilter} />
      <Products filter={filter} query={query} />
      <Gallery />
      <Story />
      <Why />
      <Footer />
    </>
  );
}