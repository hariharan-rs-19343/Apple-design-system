// figma node: 5518:11235 _Background - iPad (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "mode=" + __venc(p.mode);

export function BackgroundIPad(_p = {}) {
  const props = { ..._p, mode: _p.mode ?? "light" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 200,
      height: 200,
      borderRadius: 27,
      background: "linear-gradient(rgba(38,38,38,0.9),rgba(38,38,38,0.9)), linear-gradient(rgb(13,13,13),rgb(13,13,13)), linear-gradient(rgb(204,204,204),rgb(204,204,204)), linear-gradient(rgba(0,0,0,0.25),rgba(0,0,0,0.25))",
      position: "relative",
      ...props.style,
    }} />
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 200,
      height: 200,
      borderRadius: 27,
      background: "linear-gradient(rgb(230,233,237),rgb(230,233,237)), linear-gradient(rgb(27,27,27),rgb(27,27,27)), linear-gradient(rgba(212,212,212,0.74),rgba(212,212,212,0.74))",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }} />
  );
  const __impls = {
    // figma: Mode=Dark
    "mode=dark": __body0,
    // figma: Mode=Light
    "mode=light": __body1,
  };
  return (__impls[__vkey(props)] ?? __body1)();
}
export default BackgroundIPad;
