// figma node: 5643:20203 _Trailing - Disclosure (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "open=" + __venc(p.open);

export function TrailingDisclosure(_p = {}) {
  const props = { ..._p, open: _p.open ?? false };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 18,
      height: 18,
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 0,
        top: 2,
        width: 18,
        height: 18,
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 590,
        fontSize: 17,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "var(--labels-vibrant-primary)",
      }}>{props.text1 ?? "􀆈"}</span>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 18,
      height: 18,
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 18,
        height: 18,
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 590,
        fontSize: 17,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "22px",
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
  return (__impls[__vkey(props)] ?? __body1)();
}
export default TrailingDisclosure;
