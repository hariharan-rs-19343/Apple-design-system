// figma node: 522:2657 _Separators (3 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "mode=" + __venc(p.mode);

export function Separators(_p = {}) {
  const props = { ..._p, mode: _p.mode ?? "light" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 0.5,
      height: 20,
      background: "linear-gradient(rgba(194,194,194,0.5),rgba(194,194,194,0.5)), linear-gradient(rgba(127,127,127,0.4),rgba(127,127,127,0.4))",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }} />
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 0.5,
      height: 20,
      background: "linear-gradient(rgb(61,61,61),rgb(61,61,61)), linear-gradient(rgba(127,127,127,0.5),rgba(127,127,127,0.5))",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }} />
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 0.5,
      height: 20,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }} />
  );
  const __impls = {
    // figma: Mode=Dark Elevated
    "mode=dark elevated": __body0,
    // figma: Mode=Dark
    "mode=dark": __body1,
    // figma: Mode=Light
    "mode=light": __body2,
  };
  return (__impls[__vkey(props)] ?? __body2)();
}
export default Separators;
