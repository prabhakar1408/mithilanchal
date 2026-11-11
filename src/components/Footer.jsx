import { WA_HELLO } from "../config";

export default function Footer() {
  return (
    <>
      <footer className="footer" id="contact">
        <div className="container foot-row">
          <div><h3>Mithilanchal</h3><p>Hand-painted Madhubani art from Bihar. Har piece mein Mithila ki parampara.</p></div>
          <div><h3>Contact</h3><p>WhatsApp: <a href={WA_HELLO} target="_blank" rel="noopener">Message karein</a></p><p>Email: prabhakarjha1408@gmail.com</p></div>
          <div><h3>Follow</h3><p><a href="#">Instagram</a> &nbsp; <a href="#">Facebook</a></p></div>
        </div>
        <div className="copy">&copy; {new Date().getFullYear()} Mithilanchal. All rights reserved.</div>
        <div className="foot-strip"></div>
      </footer>
      <a className="float-wa" href={WA_HELLO} target="_blank" rel="noopener" aria-label="WhatsApp">
        <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8"><path d="M12 3a9 9 0 0 0-7.8 13.5L3 21l4.6-1.2A9 9 0 1 0 12 3z" /><path d="M8.5 8.5c0 3.5 3 6.5 6.5 6.5l1.2-1.5-2-1-1 .8c-1-.4-2-1.4-2.4-2.4l.8-1-1-2z" fill="#fff" stroke="none" /></svg>
      </a>
    </>
  );
}