// figma node: 130:66474 _Button - Text (4 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "emphasized=" + __venc(p.emphasized) + '|' + "enabled=" + __venc(p.enabled);

export function ButtonText(_p = {}) {
  const props = { ..._p, label: _p.label ?? "Label", emphasized: _p.emphasized ?? false, enabled: _p.enabled ?? true };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      backgroundColor: "rgb(255,105,105)",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 590,
        fontSize: 17,
        textAlign: "right",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        letterSpacing: "-0.400px",
        color: "rgba(60,60,67,0.18)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      backgroundColor: "rgb(255,105,105)",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 17,
        textAlign: "right",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        letterSpacing: "-0.400px",
        color: "rgba(60,60,67,0.18)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      backgroundColor: "rgb(255,105,105)",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 590,
        fontSize: 17,
        textAlign: "right",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        letterSpacing: "-0.400px",
        color: "var(--accents-blue)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      backgroundColor: "rgb(255,105,105)",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 17,
        textAlign: "right",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        letterSpacing: "-0.400px",
        color: "var(--accents-blue)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __impls = {
    // figma: Emphasized=true,Enabled=false
    "emphasized=true|enabled=false": __body0,
    // figma: Emphasized=false,Enabled=false
    "emphasized=false|enabled=false": __body1,
    // figma: Emphasized=true,Enabled=true
    "emphasized=true|enabled=true": __body2,
    // figma: Emphasized=false,Enabled=true
    "emphasized=false|enabled=true": __body3,
  };
  return (__impls[__vkey(props)] ?? __body3)();
}
export default ButtonText;
