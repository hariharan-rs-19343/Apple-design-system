// figma node: 128:102112 _Button/Horizontal Stack (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "selected=" + __venc(p.selected);

export function ButtonHorizontalStack(_p = {}) {
  const props = { ..._p, selected: _p.selected ?? true, symbol: _p.symbol ?? "􀋃", label: _p.label ?? "Text Label" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 103,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "12px 0px 12px 0px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 590,
        fontSize: 17,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--miscellaneous-tab-unselected)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.symbol}</span>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 510,
        fontSize: 13,
        whiteSpace: "nowrap",
        lineHeight: "12px",
        color: "var(--miscellaneous-tab-unselected)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 103,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "12px 0px 12px 0px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 590,
        fontSize: 17,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--accents-blue)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.symbol}</span>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 510,
        fontSize: 13,
        whiteSpace: "nowrap",
        lineHeight: "12px",
        color: "var(--accents-blue)",
        flexShrink: 0,
      }}>{props.label}</span>
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
export default ButtonHorizontalStack;
