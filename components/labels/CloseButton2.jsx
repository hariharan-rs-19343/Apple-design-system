// figma node: 5591:28787 _Close Button (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "mode=" + __venc(p.mode);

export function CloseButton2(_p = {}) {
  const props = { ..._p, mode: _p.mode ?? "light" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 44,
      height: 44,
      borderRadius: 296,
      background: "rgb(247,247,247)",
      boxShadow: "0 8px 40px 0 rgba(0,0,0,0.12)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 510,
        fontSize: 17,
        lineHeight: "17px",
        textAlign: "center",
        color: "rgb(26,26,26)",
      }}>{props.text1 ?? "􀆄"}</span>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 44,
      height: 44,
      borderRadius: 296,
      background: "rgb(18,18,18)",
      boxShadow: "0 8px 40px 0 rgba(0,0,0,0.12)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 510,
        fontSize: 17,
        lineHeight: "17px",
        textAlign: "center",
        color: "rgb(245,245,245)",
      }}>{props.text1 ?? "􀆄"}</span>
    </div>
  );
  const __impls = {
    // figma: Mode=Light
    "mode=light": __body0,
    // figma: Mode=Dark
    "mode=dark": __body1,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default CloseButton2;
