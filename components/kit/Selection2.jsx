// figma node: 5853:4742 _Selection (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "mode=" + __venc(p.mode);

export function Selection2(_p = {}) {
  const props = { ..._p, mode: _p.mode ?? "light" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 40,
      height: 28,
      opacity: 0.25,
      mixBlendMode: "screen",
      borderRadius: 1,
      backgroundColor: "var(--accents-blue)",
      position: "relative",
      ...props.style,
    }} />
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 40,
      height: 28,
      opacity: 0.25,
      mixBlendMode: "multiply",
      borderRadius: 1,
      backgroundColor: "var(--accents-blue)",
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
export default Selection2;
