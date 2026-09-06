import { useEffect, useState } from "react";

export default function OpeningCurtain({ onDone, durationMs = 6000, delayMs = 150 }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setOpen(true), 30);

    const total = delayMs + durationMs + 200;
    const t2 = setTimeout(() => onDone?.(), total);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [onDone, durationMs, delayMs]);

  return (
  <div
    className={`curtain ${open ? "curtain--open" : ""}`}
    style={{
      "--curtain-duration": `${durationMs}ms`,
      "--curtain-delay": `${delayMs}ms`,
    }}
    aria-hidden="true"
  >
    <div className="curtain__rope curtain__rope--left" />
    <div className="curtain__rope curtain__rope--right" />

    <div className="curtain__panel curtain__panel--left" />
    <div className="curtain__panel curtain__panel--right" />
    <div className="curtain__seam" />
  </div>
);

}
