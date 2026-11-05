// figma node: 2412:17638 _Tab Buttons/Text (6 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "mode=" + __venc(p.mode) + '|' + "state=" + __venc(p.state);

export function TabButtonsText(_p = {}) {
  const props = { ..._p, mode: _p.mode ?? "light", state: _p.state ?? "unselected", label: _p.label ?? "Label" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 77,
      height: 32.5,
      borderRadius: 100,
      backgroundColor: "color-mix(in srgb, var(--miscellaneous-floating-tab-pill-fill) 7%, transparent)",
      boxShadow: "0px 2px 16px 0px rgba(0,0,0,0)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 14,
        top: 0,
        width: 48,
        height: 32.5,
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 700,
        fontSize: 17,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "20px",
        letterSpacing: "-0.230px",
        color: "rgb(255,255,255)",
      }}>{props.label}</span>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 77,
      height: 32.5,
      borderRadius: 100,
      backgroundColor: "var(--miscellaneous-floating-tab-pill-fill)",
      boxShadow: "0px 2px 16px 0px rgba(0,0,0,0.08)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 14,
        top: 0,
        width: 48,
        height: 32.5,
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 700,
        fontSize: 17,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "20px",
        letterSpacing: "-0.230px",
        color: "var(--miscellaneous-floating-tab-text-selected)",
      }}>{props.label}</span>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 77,
      height: 32.5,
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 14,
        top: 0,
        width: 48,
        height: 32.5,
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 510,
        fontSize: 15,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "20px",
        letterSpacing: "-0.230px",
        color: "rgba(255,255,255,0.4)",
      }}>{props.label}</span>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 77,
      height: 32.5,
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 14,
        top: 0,
        width: 48,
        height: 32.5,
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 510,
        fontSize: 15,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "20px",
        letterSpacing: "-0.230px",
        color: "var(--miscellaneous-floating-tab-text-unselected)",
      }}>{props.label}</span>
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
    "mode=light|state=selected": __body1,
    // figma: Mode=Light, State=Unselected
    "mode=light|state=unselected": __body3,
  };
  return (__impls[__vkey(props)] ?? __body3)();
}
export default TabButtonsText;
