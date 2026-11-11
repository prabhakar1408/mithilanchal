import { GALLERY } from "../config";

// Photo na mile to gallery ki photo dikha do
export default function SafeImg({ src, alt, i = 0, ...rest }) {
  const swap = (e) => {
    e.currentTarget.onerror = null;
    if (GALLERY.length) e.currentTarget.src = GALLERY[i % GALLERY.length];
    else e.currentTarget.style.opacity = 0;
  };
  return <img src={src} alt={alt} loading="lazy" onError={swap} {...rest} />;
}