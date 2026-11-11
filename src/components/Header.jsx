import { useEffect, useRef, useState } from "react";
import { WA_HELLO, NAV } from "../config";

export default function Header({ setFilter, query, setQuery }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const input = useRef(null);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on(); window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  useEffect(() => { if (open) input.current?.focus(); }, [open]);

  return (
    <div className={`site-top${scrolled ? " scrolled" : ""}${open ? " solid" : ""}`} id="siteTop">
      <div className="announce">Har painting haath se bani &nbsp;&bull;&nbsp; Poore India mein shipping &nbsp;&bull;&nbsp; COD available</div>
      <header className="header">
        <div className="header-row">
          <a href="#" className="logo">MITHILANCHAL</a>
          <div className="icons">
            <button className="icon-btn" onClick={() => setOpen(o => !o)} aria-label="Search">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><circle cx="11" cy="11" r="7" /><path d="M20 20l-3.5-3.5" /></svg>
            </button>
            <a className="icon-btn" href={WA_HELLO} target="_blank" rel="noopener" aria-label="WhatsApp">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 3a9 9 0 0 0-7.8 13.5L3 21l4.6-1.2A9 9 0 1 0 12 3z" /><path d="M8.5 8.5c0 3.5 3 6.5 6.5 6.5l1.2-1.5-2-1-1 .8c-1-.4-2-1.4-2.4-2.4l.8-1-1-2z" fill="currentColor" stroke="none" /></svg>
            </a>
          </div>
        </div>
        <nav className="nav-row">
          {NAV.map(([label, f]) => <a key={f} href="#products" onClick={() => setFilter(f)}>{label}</a>)}
          <a href="#gallery">Collection</a>
          <a href="#story">Meri Kahani</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="search-panel" hidden={!open}>
          <input ref={input} type="search" value={query} onChange={e => setQuery(e.target.value)} placeholder="Search sarees, dupatta, paintings..." />
        </div>
      </header>
    </div>
  );
}