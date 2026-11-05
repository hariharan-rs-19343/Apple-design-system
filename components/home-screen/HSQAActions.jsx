// figma node: 5622:50172 _HSQA - Actions (4 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "mode=" + __venc(p.mode) + '|' + "state=" + __venc(p.state);

export function HSQAActions(_p = {}) {
  const props = { ..._p, mode: _p.mode ?? "light", state: _p.state ?? "destructive", symbol: _p.symbol ?? "􀓔", label: _p.label ?? "Action" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 200,
      height: 42,
      display: "flex",
      flexDirection: "row",
      gap: 14,
      padding: "2px 26px 2px 26px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        width: 20,
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 17,
        textAlign: "center",
        lineHeight: "22px",
        color: "rgb(255,66,69)",
        flexShrink: 0,
      }}>{props.symbol}</span>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 17,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "22px",
        letterSpacing: "-0.430px",
        color: "rgb(255,66,69)",
        flexGrow: 1,
      }}>{props.label}</span>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 200,
      height: 42,
      display: "flex",
      flexDirection: "row",
      gap: 14,
      padding: "2px 26px 2px 26px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        width: 20,
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 17,
        textAlign: "center",
        lineHeight: "22px",
        color: "rgb(245,245,245)",
        flexShrink: 0,
      }}>{props.symbol}</span>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 17,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "22px",
        letterSpacing: "-0.430px",
        color: "rgb(245,245,245)",
        flexGrow: 1,
      }}>{props.label}</span>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 200,
      height: 42,
      display: "flex",
      flexDirection: "row",
      gap: 14,
      padding: "2px 26px 2px 26px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        width: 20,
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 17,
        textAlign: "center",
        lineHeight: "22px",
        color: "var(--accents-red)",
        flexShrink: 0,
      }}>{props.symbol}</span>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 17,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "22px",
        letterSpacing: "-0.430px",
        color: "var(--accents-red)",
        flexGrow: 1,
      }}>{props.label}</span>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 200,
      height: 42,
      display: "flex",
      flexDirection: "row",
      gap: 14,
      padding: "2px 26px 2px 26px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        width: 20,
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 17,
        textAlign: "center",
        lineHeight: "22px",
        color: "var(--labels-vibrant-primary)",
        flexShrink: 0,
      }}>{props.symbol}</span>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 17,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "22px",
        letterSpacing: "-0.430px",
        color: "var(--labels-vibrant-primary)",
        flexGrow: 1,
      }}>{props.label}</span>
    </div>
  );
  const __impls = {
    // figma: Mode=Dark, State=Destructive
    "mode=dark|state=destructive": __body0,
    // figma: Mode=Dark, State=Default
    "mode=dark|state=default": __body1,
    // figma: Mode=Light, State=Destructive
    "mode=light|state=destructive": __body2,
    // figma: Mode=Light, State=Default
    "mode=light|state=default": __body3,
  };
  return (__impls[__vkey(props)] ?? __body2)();
}
export default HSQAActions;
