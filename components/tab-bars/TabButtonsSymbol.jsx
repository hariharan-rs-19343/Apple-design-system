// figma node: 2524:953 _Tab Buttons/Symbol (6 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "mode=" + __venc(p.mode) + '|' + "state=" + __venc(p.state);

export function TabButtonsSymbol(_p = {}) {
  const props = { ..._p, mode: _p.mode ?? "dark", state: _p.state ?? "selected", symbol: _p.symbol ?? "􀊫" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 56,
      height: 32.5,
      borderRadius: 100,
      backgroundColor: "color-mix(in srgb, var(--miscellaneous-floating-tab-pill-fill) 7%, transparent)",
      boxShadow: "0px 2px 16px 0px rgba(0,0,0,0)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 56,
        height: 32.5,
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 700,
        fontSize: 17,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "20px",
        letterSpacing: "-0.230px",
        color: "rgb(255,255,255)",
      }}>{props.symbol}</span>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 56,
      height: 32.5,
      borderRadius: 100,
      backgroundColor: "var(--miscellaneous-floating-tab-pill-fill)",
      boxShadow: "0px 2px 16px 0px rgba(0,0,0,0.08)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 56,
        height: 32.5,
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 700,
        fontSize: 17,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "20px",
        letterSpacing: "-0.230px",
        color: "var(--miscellaneous-floating-tab-text-selected)",
      }}>{props.symbol}</span>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 56,
      height: 32.5,
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 56,
        height: 32.5,
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 510,
        fontSize: 15,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "20px",
        letterSpacing: "-0.230px",
        color: "rgba(255,255,255,0.4)",
      }}>{props.symbol}</span>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 56,
      height: 32.5,
      borderRadius: 100,
      backgroundColor: "var(--miscellaneous-floating-tab-pill-fill)",
      boxShadow: "0px 2px 16px 0px rgba(0,0,0,0.08)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 56,
        height: 32.5,
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 700,
        fontSize: 15,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "20px",
        letterSpacing: "-0.230px",
        color: "var(--accents-blue)",
      }}>{props.symbol}</span>
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: 56,
      height: 32.5,
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 56,
        height: 32.5,
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 510,
        fontSize: 15,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "20px",
        letterSpacing: "-0.230px",
        color: "rgba(0,0,0,0.9)",
      }}>{props.symbol}</span>
    </div>
  );
  const __impls = {
    // figma: Mode=Dark, State=Selected
    "mode=dark|state=selected": __body0,
    // figma: Mode=Dark Elevated, State=Selected
    "mode=dark elevated|state=selected": __body1,
    // figma: Mode=Dark, State=Unselected
    "mode=dark|state=unselected": __body2,
    // figma: Mode=Dark Elevated, State=Unselected
    "mode=dark elevated|state=unselected": __body2,
    // figma: Mode=Light, State=Selected
    "mode=light|state=selected": __body3,
    // figma: Mode=Light, State=Unselected
    "mode=light|state=unselected": __body4,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default TabButtonsSymbol;
