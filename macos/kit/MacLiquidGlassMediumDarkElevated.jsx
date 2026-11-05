// figma node: 483:9213 Liquid Glass - Medium/Dark Elevated
// Liquid Glass rendered as a translucent, blurred fill with the kit's 80px backdrop blur.
export function MacLiquidGlassMediumDarkElevated(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 160,
      height: 160,
      borderRadius: 34,
      position: "relative",
      background: "rgba(40,40,40,0.55)",
      backdropFilter: "blur(80px) saturate(180%)",
      WebkitBackdropFilter: "blur(80px) saturate(180%)",
      boxShadow: "0 5px 26px rgba(0,0,0,0.1), 0 8px 40px rgba(0,0,0,0.12), inset 0 1px 1px rgba(255,255,255,0.22), inset 0 -1px 1px rgba(255,255,255,0.06), inset 0 0 0 0.5px rgba(255,255,255,0.12)",
      ...props.style,
    }}>{props.children}</div>
  );
}
export default MacLiquidGlassMediumDarkElevated;
