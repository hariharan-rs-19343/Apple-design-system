// figma node: 330:58498 _Buttons (3 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "type=" + __venc(p.type);

export function Buttons(_p = {}) {
  const props = { ..._p, type: _p.type ?? "default", label: _p.label ?? "Action" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 80,
      height: 56,
      borderTop: "1px solid rgba(128,128,128,0.55)",
      borderRight: "1px solid rgba(128,128,128,0.55)",
      borderBottom: "0.333px solid rgba(128,128,128,0.55)",
      borderLeft: "1px solid rgba(128,128,128,0.55)",
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
        color: "var(--accents-red)",
      }}>{props.label}</span>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 80,
      height: 56,
      borderTop: "1px solid rgba(128,128,128,0.55)",
      borderRight: "1px solid rgba(128,128,128,0.55)",
      borderBottom: "0.333px solid rgba(128,128,128,0.55)",
      borderLeft: "1px solid rgba(128,128,128,0.55)",
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
        color: "var(--grays-gray-2)",
      }}>{props.label}</span>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 80,
      height: 56,
      borderTop: "1px solid rgba(128,128,128,0.55)",
      borderRight: "1px solid rgba(128,128,128,0.55)",
      borderBottom: "0.333px solid rgba(128,128,128,0.55)",
      borderLeft: "1px solid rgba(128,128,128,0.55)",
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
        color: "var(--accents-blue)",
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
export default Buttons;
