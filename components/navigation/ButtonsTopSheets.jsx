// figma node: 5720:27703 _Buttons - Top - Sheets (4 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "mode=" + __venc(p.mode) + '|' + "state=" + __venc(p.state);

export function ButtonsTopSheets(_p = {}) {
  const props = { ..._p, mode: _p.mode ?? "light", state: _p.state ?? "preferred", symbol: _p.symbol ?? "􀓔" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 44,
      borderRadius: 296,
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "0px 4px 0px 4px",
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
        width: 44,
        height: 44,
        borderRadius: "50%",
        backgroundColor: "rgba(120,120,128,0.32)",
      }} />
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 510,
        fontSize: 17,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "rgb(138,138,138)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.symbol}</span>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 44,
      borderRadius: 296,
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "0px 4px 0px 4px",
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
        width: 44,
        height: 44,
        borderRadius: "50%",
        backgroundColor: "rgb(0,145,255)",
      }} />
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 510,
        fontSize: 17,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--grays-white)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.symbol}</span>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 44,
      borderRadius: 296,
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "0px 4px 0px 4px",
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
        width: 44,
        height: 44,
        borderRadius: "50%",
        backgroundColor: "rgba(120,120,128,0.16)",
      }} />
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 510,
        fontSize: 17,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--labels-vibrant-secondary)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.symbol}</span>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 44,
      borderRadius: 296,
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "0px 4px 0px 4px",
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
        width: 44,
        height: 44,
        borderRadius: "50%",
        backgroundColor: "var(--accents-blue)",
      }} />
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 510,
        fontSize: 17,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "rgb(255,255,255)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.symbol}</span>
    </div>
  );
  const __impls = {
    // figma: Mode=Dark, State=Default
    "mode=dark|state=default": __body0,
    // figma: Mode=Dark, State=Preferred
    "mode=dark|state=preferred": __body1,
    // figma: Mode=Light, State=Default
    "mode=light|state=default": __body2,
    // figma: Mode=Light, State=Preferred
    "mode=light|state=preferred": __body3,
  };
  return (__impls[__vkey(props)] ?? __body3)();
}
export default ButtonsTopSheets;
