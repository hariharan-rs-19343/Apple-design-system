// figma node: 5502:9756 _Selection (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "mode=" + __venc(p.mode);

export function Selection(_p = {}) {
  const props = { ..._p, mode: _p.mode ?? "light" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 100,
      height: 100,
      overflow: "hidden",
      borderRadius: 20,
      backgroundColor: "var(--fills-vibrant-tertiary)",
      position: "relative",
      ...props.style,
    }} />
  );
  const __impls = {
    // figma: Mode=Dark
    "mode=dark": __body0,
    // figma: Mode=Light
    "mode=light": __body0,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default Selection;
