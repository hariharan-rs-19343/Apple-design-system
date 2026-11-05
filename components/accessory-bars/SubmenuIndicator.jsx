// figma node: 5712:42065 _Submenu Indicator (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "open=" + __venc(p.open);

export function SubmenuIndicator(_p = {}) {
  const props = { ..._p, open: _p.open ?? true };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 14,
      height: 20,
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: -2.8,
        top: 0,
        width: 19.6,
        height: 20,
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 700,
        fontSize: 15,
        textAlign: "center",
        lineHeight: "20px",
        color: "var(--labels-vibrant-primary)",
      }}>{props.text1 ?? "􀆈"}</span>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 14,
      height: 20,
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 14,
        height: 20,
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 700,
        fontSize: 15,
        textAlign: "center",
        lineHeight: "20px",
        color: "var(--labels-vibrant-primary)",
      }}>{props.text1 ?? "􀆊"}</span>
    </div>
  );
  const __impls = {
    // figma: Open=True
    "open=true": __body0,
    // figma: Open=False
    "open=false": __body1,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default SubmenuIndicator;
