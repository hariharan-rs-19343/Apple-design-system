// figma node: 6503:7328 Background (3 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "style2=" + __venc(p.style2);

export function WatchBackground(_p = {}) {
  const props = { ..._p, style2: _p.style2 ?? "over dark background" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 152,
      height: 69.5,
      borderRadius: 12.5,
      backgroundColor: "rgba(255,255,255,0.1)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "13px 6px 13px 6px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingTop: "calc(var(--watch-button-margin-t) * 1px)",
      paddingBottom: "calc(var(--watch-button-margin-b) * 1px)",
      position: "relative",
      ...props.style,
    }} />
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 152,
      height: 69.5,
      borderRadius: 12.5,
      boxShadow: "0px 10px 10px 0px rgba(0,0,0,0.25)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 152,
        height: 69.5,
        borderRadius: 12.5,
        backgroundColor: "rgb(87,87,87)",
      }} />
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 152,
      height: 69.5,
      borderRadius: 12.5,
      background: "linear-gradient(180deg, rgb(62,126,188) 0.00%, rgb(83,165,217) 100.00%)",
      boxShadow: "inset 0 0 0 2px rgba(255,255,255,0.03), 0px 10px 10px 0px rgba(0,0,0,0.25)",
      position: "relative",
      ...props.style,
    }} />
  );
  const __impls = {
    // figma: Style=Over Dark Background
    "style2=over dark background": __body0,
    // figma: Style=Solid Color
    "style2=solid color": __body1,
    // figma: Style=Gradient
    "style2=gradient": __body2,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default WatchBackground;
