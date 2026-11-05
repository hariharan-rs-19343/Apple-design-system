// figma node: 5659:15001 _Sidebar - Edit Button (6 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "mode=" + __venc(p.mode) + '|' + "type=" + __venc(p.type);

export function SidebarEditButton(_p = {}) {
  const props = { ..._p, mode: _p.mode ?? "light", type: _p.type ?? "delete" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 21,
      height: 21,
      overflow: "hidden",
      borderRadius: 100,
      boxShadow: "inset 0 0 0 1.500px rgb(64,64,64)",
      position: "relative",
      ...props.style,
    }} />
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 21,
      height: 21,
      overflow: "hidden",
      borderRadius: 100,
      backgroundColor: "rgb(0,145,255)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 0,
        top: -0.5,
        width: 21,
        height: 22,
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 510,
        fontSize: 17,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "rgb(255,255,255)",
      }}>{props.text1 ?? "􀆅"}</span>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 21,
      height: 21,
      overflow: "hidden",
      borderRadius: 100,
      backgroundColor: "rgb(255,66,69)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 0,
        top: -0.5,
        width: 21,
        height: 22,
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 510,
        fontSize: 17,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "rgb(255,255,255)",
      }}>{props.text1 ?? "􀅽"}</span>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 21,
      height: 21,
      overflow: "hidden",
      borderRadius: 100,
      boxShadow: "inset 0 0 0 1.500px var(--labels-vibrant-tertiary)",
      position: "relative",
      ...props.style,
    }} />
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: 21,
      height: 21,
      overflow: "hidden",
      borderRadius: 100,
      backgroundColor: "var(--accents-blue)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 0,
        top: -0.5,
        width: 21,
        height: 22,
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 510,
        fontSize: 17,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "rgb(255,255,255)",
      }}>{props.text1 ?? "􀆅"}</span>
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: 21,
      height: 21,
      overflow: "hidden",
      borderRadius: 100,
      backgroundColor: "var(--accents-red)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 0,
        top: -0.5,
        width: 21,
        height: 22,
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 510,
        fontSize: 17,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "rgb(255,255,255)",
      }}>{props.text1 ?? "􀅽"}</span>
    </div>
  );
  const __impls = {
    // figma: Mode=Dark, Type=Selectable
    "mode=dark|type=selectable": __body0,
    // figma: Mode=Dark, Type=Selected
    "mode=dark|type=selected": __body1,
    // figma: Mode=Dark, Type=Delete
    "mode=dark|type=delete": __body2,
    // figma: Mode=Light, Type=Selectable
    "mode=light|type=selectable": __body3,
    // figma: Mode=Light, Type=Selected
    "mode=light|type=selected": __body4,
    // figma: Mode=Light, Type=Delete
    "mode=light|type=delete": __body5,
  };
  return (__impls[__vkey(props)] ?? __body5)();
}
export default SidebarEditButton;
