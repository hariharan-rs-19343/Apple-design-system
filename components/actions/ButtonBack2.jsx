// figma node: 5431:813 _Button - Back (4 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "mode=" + __venc(p.mode) + '|' + "state=" + __venc(p.state);

export function ButtonBack2(_p = {}) {
  const props = { ..._p, mode: _p.mode ?? "light", state: _p.state ?? "default", showLabel: _p.showLabel ?? true, label: _p.label ?? "Label" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 80,
      height: 36,
      minWidth: 36,
      borderRadius: 100,
      display: "flex",
      flexDirection: "row",
      gap: 2,
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
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 510,
        fontSize: 17,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "rgb(64,64,64)",
        flexShrink: 0,
      }}>{props.text1 ?? "􀯶"}</span>
      {props.showLabel && (
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 510,
        fontSize: 17,
        textAlign: "center",
        lineHeight: "100%",
        color: "rgb(64,64,64)",
        flexGrow: 1,
      }}>{props.label}</span>
      )}
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 80,
      height: 36,
      minWidth: 36,
      borderRadius: 100,
      display: "flex",
      flexDirection: "row",
      gap: 2,
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
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 510,
        fontSize: 17,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "rgb(245,245,245)",
        flexShrink: 0,
      }}>{props.text1 ?? "􀯶"}</span>
      {props.showLabel && (
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 510,
        fontSize: 17,
        textAlign: "center",
        lineHeight: "100%",
        color: "rgb(245,245,245)",
        flexGrow: 1,
      }}>{props.label}</span>
      )}
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 78,
      height: 36,
      minWidth: 36,
      borderRadius: 100,
      display: "flex",
      flexDirection: "row",
      gap: 2,
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
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 510,
        fontSize: 17,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--labels-vibrant-controls-tertiary)",
        flexShrink: 0,
      }}>{props.text1 ?? "􀯶"}</span>
      {props.showLabel && (
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 510,
        fontSize: 17,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--labels-vibrant-controls-tertiary)",
        flexShrink: 0,
      }}>{props.label}</span>
      )}
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 78,
      height: 36,
      minWidth: 36,
      borderRadius: 100,
      display: "flex",
      flexDirection: "row",
      gap: 2,
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
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 510,
        fontSize: 17,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--labels-vibrant-controls-primary)",
        flexShrink: 0,
      }}>{props.text1 ?? "􀯶"}</span>
      {props.showLabel && (
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 510,
        fontSize: 17,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--labels-vibrant-controls-primary)",
        flexShrink: 0,
      }}>{props.label}</span>
      )}
    </div>
  );
  const __impls = {
    // figma: Mode=Dark,State=Disabled
    "mode=dark|state=disabled": __body0,
    // figma: Mode=Dark,State=Default
    "mode=dark|state=default": __body1,
    // figma: Mode=Light,State=Disabled
    "mode=light|state=disabled": __body2,
    // figma: Mode=Light,State=Default
    "mode=light|state=default": __body3,
  };
  return (__impls[__vkey(props)] ?? __body3)();
}
export default ButtonBack2;
