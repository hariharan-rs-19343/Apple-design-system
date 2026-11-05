// figma node: 515:63537 _Keys/iPad - Enter/Dark - Vibrant (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "color=" + __venc(p.color);

export function KeysIPadEnterDarkVibrant(_p = {}) {
  const props = { ..._p, label: _p.label ?? "label", color: _p.color ?? "default" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 156,
      height: 74,
      borderRadius: 8,
      backgroundColor: "var(--accents-blue)",
      boxShadow: "0px 1px 0px 0px rgba(0,0,0,0.4)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 104,
        top: 43,
        width: 42,
        height: 23,
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 19.5,
        textAlign: "right",
        whiteSpace: "nowrap",
        lineHeight: "100%",
        letterSpacing: "-0.400px",
        color: "rgb(255,255,255)",
      }}>{props.label}</span>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 156,
      height: 74,
      borderRadius: 8,
      backgroundColor: "rgba(255,255,255,0.12)",
      boxShadow: "0px 1px 0px 0px rgba(0,0,0,0.4)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 104,
        top: 43,
        width: 42,
        height: 23,
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 19.5,
        textAlign: "right",
        whiteSpace: "nowrap",
        lineHeight: "100%",
        letterSpacing: "-0.400px",
        color: "var(--labels-primary)",
      }}>{props.label}</span>
    </div>
  );
  const __impls = {
    // figma: Color=Blue
    "color=blue": __body0,
    // figma: Color=Default
    "color=default": __body1,
  };
  return (__impls[__vkey(props)] ?? __body1)();
}
export default KeysIPadEnterDarkVibrant;
