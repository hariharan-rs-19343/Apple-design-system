// figma node: 63:4098 iOS/_Tip Background/Annotation (27 variants)
// Resizable: the bubble fills its box (default 80×80, the Figma master); the arrow sits outside it.
const NUB = "M 41.478 0.002 C 40.75 0.003 40.022 0.005 39.294 0.013 C 37.656 0.031 35.821 0.058 34.226 0.658 C 32.504 1.308 31.365 2.445 30.215 3.782 C 29.388 4.744 27.765 6.797 26.976 7.788 C 26.329 8.6 25.063 10.207 24.371 10.983 C 23.502 11.96 22.427 12.999 20.933 12.999 C 19.439 12.999 18.363 11.96 17.493 10.982 C 16.801 10.205 15.535 8.599 14.888 7.786 C 14.098 6.795 12.475 4.743 11.649 3.781 C 10.501 2.444 9.36 1.307 7.637 0.657 C 6.042 0.056 4.208 0.03 2.569 0.012 C 1.713 0.002 0.856 0 0 0 L 41.478 0.002 Z";

export function tipArrowStyle(arrow) {
  const a = String(arrow || "none");
  if (a === "none") return null;
  const s = { position: "absolute", width: 41.478, height: 13, display: "block", overflow: "visible" };
  const h = a.includes("leading") ? { left: 20 } : a.includes("trailing") ? { right: 20 } : { left: "calc(50% - 20.739px)" };
  if (a.startsWith("up")) return { ...s, ...h, top: -13, transform: "scaleY(-1)" };
  if (a.startsWith("down")) return { ...s, ...h, bottom: -13 };
  if (a === "leading") return { ...s, left: -27.239, top: "calc(50% - 6.5px)", transform: "rotate(90deg)" };
  return { ...s, right: -27.239, top: "calc(50% - 6.5px)", transform: "rotate(-90deg)" };
}

export function renderTipArrow(arrow, color) {
  const st = tipArrowStyle(arrow);
  if (!st) return null;
  return (
    <svg viewBox="0 0 41.478 13" fill="none" style={st}>
      <path d={NUB} fill={color} />
    </svg>
  );
}

export function IOSTipBackgroundAnnotation(_p = {}) {
  const props = { ..._p, arrow: _p.arrow ?? "up - leading", mode: _p.mode ?? "light" };
  const fill = props.mode === "light" ? "rgba(120,120,128,0.16)" : "rgba(120,120,128,0.32)";
  return (
    <div className={props.className} style={{
      width: 80,
      height: 80,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        inset: 0,
        borderRadius: 20,
        backgroundColor: fill,
        backdropFilter: "blur(20px)",
      }} />
      {renderTipArrow(props.arrow, fill)}
    </div>
  );
}
export default IOSTipBackgroundAnnotation;
