// figma node: 2939:3986 _Button - Symbol (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "enabled=" + __venc(p.enabled);

export function ButtonSymbol(_p = {}) {
  const props = { ..._p, enabled: _p.enabled ?? false, symbol: _p.symbol ?? "􀓔" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      backgroundColor: "rgb(255,105,105)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 17,
        textAlign: "right",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "rgba(60,60,67,0.18)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.symbol}</span>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      backgroundColor: "rgb(255,105,105)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 17,
        textAlign: "right",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "var(--accents-blue)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.symbol}</span>
    </div>
  );
  const __impls = {
    // figma: Enabled=False
    "enabled=false": __body0,
    // figma: Enabled=True
    "enabled=true": __body1,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default ButtonSymbol;
