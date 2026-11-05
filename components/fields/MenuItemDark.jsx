// figma node: 492:51559 _Menu Item/Dark (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "type=" + __venc(p.type);

export function MenuItemDark(_p = {}) {
  const props = { ..._p, label: _p.label ?? "Label", showSymbol: _p.showSymbol ?? true, symbol: _p.symbol ?? "􀓔", type: _p.type ?? "default" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 250,
      height: 44,
      display: "flex",
      flexDirection: "row",
      padding: "0px 16px 0px 16px",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 17,
        whiteSpace: "nowrap",
        lineHeight: "22px",
        letterSpacing: "-0.400px",
        color: "var(--accents-red)",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>{props.label}</span>
      {props.showSymbol && (
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 17,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "var(--accents-red)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.symbol}</span>
      )}
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 250,
      height: 44,
      display: "flex",
      flexDirection: "row",
      padding: "0px 16px 0px 16px",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 17,
        whiteSpace: "nowrap",
        lineHeight: "22px",
        letterSpacing: "-0.400px",
        color: "var(--labels-primary)",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>{props.label}</span>
      {props.showSymbol && (
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 17,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "var(--labels-primary)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.symbol}</span>
      )}
    </div>
  );
  const __impls = {
    // figma: Type=Destructive
    "type=destructive": __body0,
    // figma: Type=Default
    "type=default": __body1,
  };
  return (__impls[__vkey(props)] ?? __body1)();
}
export default MenuItemDark;
