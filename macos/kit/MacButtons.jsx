// figma node: 121:11170 _Buttons (3 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "type=" + __venc(p.type);

export function MacButtons(_p = {}) {
  const props = { ..._p, type: _p.type ?? "primary", label: _p.label ?? "Label", popUpButtonLabel: _p.popUpButtonLabel ?? "Lorem ipsum dolor" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 228,
      height: 28,
      borderRadius: 100,
      backgroundColor: "rgba(255,56,60,0.23)",
      display: "flex",
      flexDirection: "row",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 510,
        fontSize: 13,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "16px",
        color: "var(--mac-accents-red)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 228,
      height: 28,
      borderRadius: 100,
      backgroundColor: "var(--mac-fills-vibrant-use-plus-lighter-darker-secondary)",
      display: "flex",
      flexDirection: "row",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 510,
        fontSize: 13,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "16px",
        color: "rgba(0,0,0,0.85)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 228,
      height: 28,
      borderRadius: 100,
      backgroundColor: "var(--mac-accents-blue)",
      display: "flex",
      flexDirection: "row",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 510,
        fontSize: 13,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "16px",
        color: "var(--mac-labels-white)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __impls = {
    // figma: Type=Destructive
    "type=destructive": __body0,
    // figma: Type=Secondary
    "type=secondary": __body1,
    // figma: Type=Primary
    "type=primary": __body2,
  };
  return (__impls[__vkey(props)] ?? __body2)();
}
export default MacButtons;
