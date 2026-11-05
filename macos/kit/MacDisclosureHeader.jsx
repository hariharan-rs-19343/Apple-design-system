// figma node: 656:2231 _Disclosure - Header (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "expanded=" + __venc(p.expanded);

export function MacDisclosureHeader(_p = {}) {
  const props = { ..._p, expanded: _p.expanded ?? false };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 24,
      height: 14,
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 24,
        height: 14,
        fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 700,
        fontSize: 11,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "14px",
        color: "rgba(0,0,0,0.25)",
      }}>{props.text1 ?? "􀆊"}</span>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 24,
      height: 14,
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 24,
        height: 14,
        fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 700,
        fontSize: 11,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "14px",
        color: "rgba(0,0,0,0.25)",
      }}>{props.text1 ?? "􀆈"}</span>
    </div>
  );
  const __impls = {
    // figma: Expanded=False
    "expanded=false": __body0,
    // figma: Expanded=True
    "expanded=true": __body1,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default MacDisclosureHeader;
