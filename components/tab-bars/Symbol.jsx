// figma node: 5509:8728 _Symbol (6 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "state=" + __venc(p.state) + '|' + "mode=" + __venc(p.mode);

export function Symbol(_p = {}) {
  const props = { ..._p, state: _p.state ?? "default", mode: _p.mode ?? "light", symbol: _p.symbol ?? "􀓔" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 28,
      height: 22,
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 28,
        height: 22,
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 17,
        textAlign: "center",
        lineHeight: "22px",
        color: "var(--labels-vibrant-primary)",
      }}>{props.symbol}</span>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 28,
      height: 22,
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 28,
        height: 22,
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 17,
        textAlign: "center",
        lineHeight: "22px",
        color: "var(--labels-vibrant-tertiary)",
      }}>{props.symbol}</span>
    </div>
  );
  const __impls = {
    // figma: State=Default, Mode=Dark Elevated
    "state=default|mode=dark elevated": __body0,
    // figma: State=Disabled, Mode=Dark Elevated
    "state=disabled|mode=dark elevated": __body1,
    // figma: State=Default, Mode=Dark
    "state=default|mode=dark": __body0,
    // figma: State=Disabled, Mode=Dark
    "state=disabled|mode=dark": __body1,
    // figma: State=Default, Mode=Light
    "state=default|mode=light": __body0,
    // figma: State=Disabled, Mode=Light
    "state=disabled|mode=light": __body1,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default Symbol;
