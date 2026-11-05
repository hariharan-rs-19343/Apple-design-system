// figma node: 535:18312 _Keys - iPhone (6 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "mode=" + __venc(p.mode) + '|' + "state=" + __venc(p.state);

export function KeysIPhone2(_p = {}) {
  const props = { ..._p, mode: _p.mode ?? "light", state: _p.state ?? "normal" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 50,
      height: 50,
      backgroundColor: "var(--accents-blue)",
      position: "relative",
      ...props.style,
    }} />
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 50,
      height: 50,
      background: "linear-gradient(rgb(38,38,38),rgb(38,38,38)), linear-gradient(rgba(153,153,153,0.15),rgba(153,153,153,0.15))",
      position: "relative",
      ...props.style,
    }} />
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 50,
      height: 50,
      backgroundColor: "rgb(255,255,255)",
      position: "relative",
      ...props.style,
    }} />
  );
  const __impls = {
    // figma: Mode=Dark Elevated, State=Emphasized
    "mode=dark elevated|state=emphasized": __body0,
    // figma: Mode=Dark Elevated, State=Normal
    "mode=dark elevated|state=normal": __body1,
    // figma: Mode=Dark, State=Emphasized
    "mode=dark|state=emphasized": __body0,
    // figma: Mode=Dark, State=Normal
    "mode=dark|state=normal": __body1,
    // figma: Mode=Light, State=Emphasized
    "mode=light|state=emphasized": __body0,
    // figma: Mode=Light, State=Normal
    "mode=light|state=normal": __body2,
  };
  return (__impls[__vkey(props)] ?? __body2)();
}
export default KeysIPhone2;
