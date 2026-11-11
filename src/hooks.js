import { useEffect } from "react";

// Scroll reveal: elements fade in once visible
export function useReveal(ref, selector, deps = []) {
  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver((es) => es.forEach((e) => {
      if (!e.isIntersecting) return;
      e.target.classList.add("in"); io.unobserve(e.target);
      setTimeout(() => e.target.classList.remove("reveal", "in"), 1000);
    }), { threshold: 0.12 });
    ref.current.querySelectorAll(selector).forEach((el) => { el.classList.add("reveal"); io.observe(el); });
    return () => io.disconnect();
  }, deps); // eslint-disable-line
}