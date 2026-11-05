// figma node: 5735:65306 _Tab Bar Button - iPhone - Search (4 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "selected=" + __venc(p.selected) + '|' + "mode=" + __venc(p.mode);

export function TabBarButtonIPhoneSearch(_p = {}) {
  const props = { ..._p, selected: _p.selected ?? true, mode: _p.mode ?? "light", symbol: _p.symbol ?? "􀊫" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 54,
      height: 54,
      display: "flex",
      flexDirection: "column",
      gap: 1,
      padding: "6px 8px 7px 8px",
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
        height: 54,
        borderRadius: 100,
        backgroundColor: "var(--fills-vibrant-tertiary)",
      }} />
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 590,
        fontSize: 17,
        textAlign: "center",
        lineHeight: "28px",
        color: "var(--accents-blue)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.symbol}</span>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 54,
      height: 54,
      display: "flex",
      flexDirection: "column",
      gap: 1,
      padding: "6px 8px 7px 8px",
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
        lineHeight: "28px",
        color: "var(--labels-vibrant-controls-primary)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.symbol}</span>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 54,
      height: 54,
      display: "flex",
      flexDirection: "column",
      gap: 1,
      padding: "6px 8px 7px 8px",
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
        height: 54,
        borderRadius: 100,
        backgroundColor: "rgb(18,18,18)",
      }} />
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 590,
        fontSize: 17,
        textAlign: "center",
        lineHeight: "28px",
        color: "rgb(0,145,255)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.symbol}</span>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 54,
      height: 54,
      display: "flex",
      flexDirection: "column",
      gap: 1,
      padding: "6px 8px 7px 8px",
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
        lineHeight: "28px",
        color: "rgb(245,245,245)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.symbol}</span>
    </div>
  );
  const __impls = {
    // figma: Selected=True, Mode=Light
    "selected=true|mode=light": __body0,
    // figma: Selected=False, Mode=Light
    "selected=false|mode=light": __body1,
    // figma: Selected=True, Mode=Dark
    "selected=true|mode=dark": __body2,
    // figma: Selected=False, Mode=Dark
    "selected=false|mode=dark": __body3,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default TabBarButtonIPhoneSearch;
