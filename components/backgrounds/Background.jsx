// figma node: 5500:4348 _Background (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "mode=" + __venc(p.mode);

export function Background(_p = {}) {
  const props = { ..._p, mode: _p.mode ?? "light" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 100,
      height: 100,
      overflow: "hidden",
      borderRadius: 30,
      background: "linear-gradient(rgba(255,255,255,0.05),rgba(255,255,255,0.05)), linear-gradient(rgba(242,242,242,0.2),rgba(242,242,242,0.2)), linear-gradient(rgba(24,24,26,0.5),rgba(24,24,26,0.5))",
      boxShadow: "0px 0px 25px 0px rgba(0,0,0,0.15)",
      position: "relative",
      ...props.style,
    }} />
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 100,
      height: 100,
      overflow: "hidden",
      borderRadius: 30,
      background: "linear-gradient(rgba(0,0,0,0.05),rgba(0,0,0,0.05)), linear-gradient(rgba(51,51,51,0.2),rgba(51,51,51,0.2)), linear-gradient(rgba(255,255,255,0.45),rgba(255,255,255,0.45))",
      boxShadow: "0px 0px 25px 0px rgba(0,0,0,0.15)",
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
export default Background;
