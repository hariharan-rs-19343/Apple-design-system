// Page dots with two transition styles: "default" (iOS opacity swap) and "stretch" (indicator stretches to the target dot, then shrinks into it).
const DOT = 8, GAP = 8, STEP = DOT + GAP, PAD = 8, H = 24;

export function PageDotsAnimated(_p = {}) {
  const p = { count: 4, animation: "default", mode: "light", tint: "neutral", platter: false, duration: 360, ..._p };
  const count = Math.max(1, p.count | 0);
  const controlled = p.current != null;
  const [inner, setInner] = React.useState(p.defaultCurrent ?? 0);
  const cur = Math.min(count - 1, Math.max(0, controlled ? p.current : inner));
  const [bar, setBar] = React.useState({ left: cur * STEP, width: DOT });
  const prev = React.useRef(cur);
  const timer = React.useRef(0);

  React.useEffect(() => {
    const from = prev.current, to = cur;
    prev.current = cur;
    clearTimeout(timer.current);
    if (from === to) { setBar({ left: to * STEP, width: DOT }); return; }
    const lo = Math.min(from, to), hi = Math.max(from, to);
    setBar({ left: lo * STEP, width: (hi - lo) * STEP + DOT });
    timer.current = setTimeout(() => setBar({ left: to * STEP, width: DOT }), p.duration / 2);
    return () => clearTimeout(timer.current);
  }, [cur]);

  const go = (i) => { if (!controlled) setInner(i); p.onChange && p.onChange(i); };
  const dark = p.mode === "dark";
  const brand = p.tint === "brand";
  const on = brand ? "var(--zh-primary, #226DB4)" : dark ? "rgb(255,255,255)" : "rgb(0,0,0)";
  const offOpacity = brand ? 0.25 : dark ? 0.4 : 0.3;
  const stretch = p.animation === "stretch";
  const half = p.duration / 2;
  const ease = "cubic-bezier(0.4,0,0.2,1)";

  return (
    <div className={p.className} role="tablist" aria-label={p["aria-label"] ?? "Pages"} style={{
      position: "relative", display: "inline-flex", alignItems: "center", gap: GAP,
      height: H, padding: `0 ${PAD}px`, borderRadius: 100, boxSizing: "border-box",
      background: p.platter ? (dark ? "rgba(0,0,0,0.2)" : "rgba(118,118,128,0.12)") : "transparent",
      backdropFilter: p.platter ? "blur(12px)" : undefined, WebkitBackdropFilter: p.platter ? "blur(12px)" : undefined,
      ...p.style,
    }}>
      {Array.from({ length: count }, (_, i) => (
        <button key={i} type="button" role="tab" aria-selected={i === cur} aria-label={`Page ${i + 1} of ${count}`}
          onClick={() => go(i)}
          style={{
            position: "relative", width: !stretch && i === cur ? DOT * 2 : DOT, height: DOT, padding: 0, margin: 0, border: 0, flexShrink: 0,
            borderRadius: DOT / 2, cursor: "pointer", background: on,
            opacity: !stretch && i === cur ? 1 : offOpacity,
            transition: `opacity ${p.duration * 0.6}ms ${ease}, width ${p.duration * 0.6}ms ${ease}`,
          }}>
          <span style={{ position: "absolute", left: -GAP / 2, right: -GAP / 2, top: -(H - DOT) / 2, bottom: -(H - DOT) / 2 }} />
        </button>
      ))}
      {stretch && (
        <span aria-hidden="true" style={{
          position: "absolute", top: (H - DOT) / 2, left: PAD + bar.left, width: bar.width, height: DOT,
          borderRadius: DOT / 2, background: on, pointerEvents: "none",
          transition: `left ${half}ms ${ease}, width ${half}ms ${ease}`,
        }} />
      )}
    </div>
  );
}
export default PageDotsAnimated;
