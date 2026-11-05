// figma node: 128:101749 _Button/Vertical Stack (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "selected=" + __venc(p.selected);

export function ButtonVerticalStack(_p = {}) {
  const props = { ..._p, selected: _p.selected ?? true, symbol: _p.symbol ?? "􀋃", label: _p.label ?? "Tab Name" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 48,
      height: 40,
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: -0.5,
        top: 28,
        width: 49,
        height: 12,
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 510,
        fontSize: 10,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--miscellaneous-tab-unselected)",
      }}>{props.label}</span>
      <span style={{
        position: "absolute",
        left: 9,
        top: 1,
        width: 30,
        height: 21,
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 510,
        fontSize: 18,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--miscellaneous-tab-unselected)",
      }}>{props.symbol}</span>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 48,
      height: 40,
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: -0.5,
        top: 28,
        width: 49,
        height: 12,
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 510,
        fontSize: 10,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--accents-blue)",
      }}>{props.label}</span>
      <span style={{
        position: "absolute",
        left: 9,
        top: 1,
        width: 30,
        height: 21,
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 510,
        fontSize: 18,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--accents-blue)",
      }}>{props.symbol}</span>
    </div>
  );
  const __impls = {
    // figma: Selected=False
    "selected=false": __body0,
    // figma: Selected=True
    "selected=true": __body1,
  };
  return (__impls[__vkey(props)] ?? __body1)();
}
export default ButtonVerticalStack;
