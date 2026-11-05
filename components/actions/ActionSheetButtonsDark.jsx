// figma node: 330:58781 _Action Sheet/Buttons/Dark (3 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "type=" + __venc(p.type);

export function ActionSheetButtonsDark(_p = {}) {
  const props = { ..._p, label: _p.label ?? "Action", type: _p.type ?? "default" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 80,
      height: 56,
      borderTop: "0.333px solid rgba(60,60,67,0.36)",
      borderRight: "1px solid rgba(60,60,67,0.36)",
      borderBottom: "1px solid rgba(60,60,67,0.36)",
      borderLeft: "1px solid rgba(60,60,67,0.36)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 15,
        top: 17,
        width: 49,
        height: 22,
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 17,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        letterSpacing: "-0.400px",
        color: "rgb(255,69,58)",
      }}>{props.label}</span>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 80,
      height: 56,
      borderTop: "0.333px solid rgba(60,60,67,0.36)",
      borderRight: "1px solid rgba(60,60,67,0.36)",
      borderBottom: "1px solid rgba(60,60,67,0.36)",
      borderLeft: "1px solid rgba(60,60,67,0.36)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 15,
        top: 17,
        width: 49,
        height: 22,
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 17,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        letterSpacing: "-0.400px",
        color: "rgb(99,99,102)",
      }}>{props.label}</span>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 80,
      height: 56,
      borderTop: "0.333px solid rgba(60,60,67,0.36)",
      borderRight: "1px solid rgba(60,60,67,0.36)",
      borderBottom: "1px solid rgba(60,60,67,0.36)",
      borderLeft: "1px solid rgba(60,60,67,0.36)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 15,
        top: 17,
        width: 49,
        height: 22,
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 17,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        letterSpacing: "-0.400px",
        color: "rgb(10,132,255)",
      }}>{props.label}</span>
    </div>
  );
  const __impls = {
    // figma: Type=Destructive
    "type=destructive": __body0,
    // figma: Type=Disabled
    "type=disabled": __body1,
    // figma: Type=Default
    "type=default": __body2,
  };
  return (__impls[__vkey(props)] ?? __body2)();
}
export default ActionSheetButtonsDark;
