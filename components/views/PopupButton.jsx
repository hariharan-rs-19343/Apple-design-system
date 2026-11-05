// figma node: 410:50387 Popup Button (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "state=" + __venc(p.state);

export function PopupButton(_p = {}) {
  const props = { ..._p, state: _p.state ?? "enabled", label: _p.label ?? "Label" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 3,
      padding: "13px 0px 13px 0px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 590,
        fontSize: 18,
        whiteSpace: "nowrap",
        lineHeight: "18px",
        color: "var(--accents-blue)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 590,
        fontSize: 18,
        whiteSpace: "nowrap",
        lineHeight: "18px",
        color: "var(--accents-blue)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "􀆏"}</span>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 3,
      padding: "13px 0px 13px 0px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 590,
        fontSize: 18,
        whiteSpace: "nowrap",
        lineHeight: "18px",
        color: "rgba(60,60,67,0.3)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 590,
        fontSize: 18,
        whiteSpace: "nowrap",
        lineHeight: "18px",
        color: "rgba(60,60,67,0.3)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "􀆏"}</span>
    </div>
  );
  const __impls = {
    // figma: State=Enabled
    "state=enabled": __body0,
    // figma: State=Disabled
    "state=disabled": __body1,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default PopupButton;
