// figma node: 5735:64661 _Tab Bar Button - iPad - Symbol (4 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "selected=" + __venc(p.selected) + '|' + "mode=" + __venc(p.mode);

export function TabBarButtonIPadSymbol(_p = {}) {
  const props = { ..._p, selected: _p.selected ?? true, mode: _p.mode ?? "dark", symbol: _p.symbol ?? "􀰱" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      padding: "8px 16px 8px 16px",
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
        fontWeight: 510,
        fontSize: 15,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "20px",
        letterSpacing: "-0.230px",
        color: "var(--labels-vibrant-controls-primary)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.symbol}</span>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 100,
      display: "flex",
      flexDirection: "column",
      padding: "8px 16px 8px 16px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 54,
        height: 36,
        borderRadius: 100,
        backgroundColor: "var(--fills-vibrant-tertiary)",
      }} />
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 700,
        fontSize: 15,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "20px",
        letterSpacing: "-0.230px",
        color: "var(--miscellaneous-tab-bar-selection)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.symbol}</span>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      padding: "8px 16px 8px 16px",
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
        fontWeight: 510,
        fontSize: 15,
        textAlign: "center",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "20px",
        letterSpacing: "-0.230px",
        color: "rgb(138,138,138)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.symbol}</span>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 100,
      display: "flex",
      flexDirection: "row",
      padding: "8px 16px 8px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 54,
        height: 36,
        borderRadius: 100,
        backgroundColor: "rgb(18,18,18)",
      }} />
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 700,
        fontSize: 15,
        textAlign: "center",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "20px",
        letterSpacing: "-0.230px",
        color: "rgb(255,255,255)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.symbol}</span>
    </div>
  );
  const __impls = {
    // figma: Selected=False, Mode=Light
    "selected=false|mode=light": __body0,
    // figma: Selected=True, Mode=Light
    "selected=true|mode=light": __body1,
    // figma: Mode=Dark,Selected=False
    "selected=false|mode=dark": __body2,
    // figma: Mode=Dark,Selected=True
    "selected=true|mode=dark": __body3,
  };
  return (__impls[__vkey(props)] ?? __body3)();
}
export default TabBarButtonIPadSymbol;
