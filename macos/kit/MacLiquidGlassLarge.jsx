// figma node: 483:9237 Liquid Glass - Large (2 variants)
// Liquid Glass rendered as a translucent, blurred fill (the kit's flat SVG fills paint black outside Figma).
const MAC_GLASS = {
  light: { background: "rgba(255,255,255,0.5)", boxShadow: "0 8px 40px rgba(0,0,0,0.12), inset 0 1px 1px rgba(255,255,255,0.9), inset 0 -1px 1px rgba(255,255,255,0.35), inset 0 0 0 0.5px rgba(0,0,0,0.08)" },
  dark: { background: "rgba(40,40,40,0.5)", boxShadow: "0 8px 40px rgba(0,0,0,0.12), inset 0 1px 1px rgba(255,255,255,0.22), inset 0 -1px 1px rgba(255,255,255,0.06), inset 0 0 0 0.5px rgba(255,255,255,0.12)" },
  primary: { background: "var(--mac-accents-blue, rgb(0,136,255))", boxShadow: "0 8px 40px rgba(0,0,0,0.12), inset 0 1px 1px rgba(255,255,255,0.45), inset 0 0 0 0.5px rgba(0,0,0,0.08)" },
};
export function MacLiquidGlassLarge(_p = {}) {
  const props = { ..._p, mode: _p.mode ?? "light" };
  const look = (MAC_GLASS[props.mode] ?? MAC_GLASS.light);
  return (
    <div className={props.className} style={{
      width: 160,
      height: 160,
      borderRadius: 34,
      position: "relative",
      backdropFilter: "blur(24px) saturate(180%)",
      WebkitBackdropFilter: "blur(24px) saturate(180%)",
      ...look,
      ...props.style,
    }}>{props.children}</div>
  );
}
export default MacLiquidGlassLarge;
