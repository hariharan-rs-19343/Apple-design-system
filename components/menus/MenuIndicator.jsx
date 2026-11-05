// figma node: 5831:53946 _Menu Indicator (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "mode=" + __venc(p.mode);

export function MenuIndicator(_p = {}) {
  const props = { ..._p, mode: _p.mode ?? "light" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 36,
      height: 36,
      overflow: "hidden",
      borderRadius: 100,
      backgroundColor: "rgb(18,18,18)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 0,
        top: 9,
        width: 36,
        height: 18,
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 590,
        fontSize: 15,
        textAlign: "center",
        lineHeight: "100%",
        letterSpacing: "-0.600px",
        color: "rgb(245,245,245)",
      }}>{props.text1 ?? "􀆊"}</span>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 36,
      height: 36,
      overflow: "hidden",
      borderRadius: 100,
      backgroundColor: "var(--fills-vibrant-tertiary)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 0,
        top: 9,
        width: 36,
        height: 18,
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 590,
        fontSize: 15,
        textAlign: "center",
        lineHeight: "100%",
        letterSpacing: "-0.600px",
        color: "var(--labels-vibrant-primary)",
      }}>{props.text1 ?? "􀆊"}</span>
    </div>
  );
  const __impls = {
    // figma: Mode=Dark
    "mode=dark": __body0,
    // figma: Mode=Light
    "mode=light": __body1,
  };
  return (__impls[__vkey(props)] ?? __body1)();
}
export default MenuIndicator;
