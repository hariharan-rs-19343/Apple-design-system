// figma node: 533:16901 _Gradient (4 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "mode=" + __venc(p.mode) + '|' + "position=" + __venc(p.position);

export function Gradient(_p = {}) {
  const props = { ..._p, mode: _p.mode ?? "dark", position: _p.position ?? "top" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 100,
      height: 100,
      background: "linear-gradient(180deg, rgb(77,77,77) 0.00%, rgba(77,77,77,0.3) 100.00%)",
      position: "relative",
      ...props.style,
    }} />
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 100,
      height: 100,
      background: "linear-gradient(180deg, rgba(77,77,77,0.3) 0.00%, rgb(77,77,77) 100.00%)",
      position: "relative",
      ...props.style,
    }} />
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 100,
      height: 100,
      background: "linear-gradient(180deg, rgba(178,178,178,0.3) 0.00%, rgb(178,178,178) 100.00%)",
      position: "relative",
      ...props.style,
    }} />
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 100,
      height: 100,
      background: "linear-gradient(180deg, rgb(178,178,178) 0.00%, rgba(178,178,178,0.3) 100.00%)",
      position: "relative",
      ...props.style,
    }} />
  );
  const __impls = {
    // figma: Mode=Dark, Position=Top
    "mode=dark|position=top": __body0,
    // figma: Mode=Dark, Position=Bottom
    "mode=dark|position=bottom": __body1,
    // figma: Mode=Light, Position=Top
    "mode=light|position=top": __body2,
    // figma: Mode=Light, Position=Bottom
    "mode=light|position=bottom": __body3,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default Gradient;
