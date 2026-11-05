// figma node: 5661:26978 Scroll Edge Effect - Hard (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "edge=" + __venc(p.edge);

export function ScrollEdgeEffectHard(_p = {}) {
  const props = { ..._p, edge: _p.edge ?? "bottom" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 200,
      height: 200,
      backgroundColor: "rgb(255,255,255)",
      borderTop: "1px solid rgba(0,0,0,0.12)",
      borderRight: "1px solid rgba(0,0,0,0.12)",
      borderBottom: "1px solid rgba(0,0,0,0.12)",
      borderLeft: "1px solid rgba(0,0,0,0.12)",
      backdropFilter: "blur(60px)",
      position: "relative",
      ...props.style,
    }} />
  );
  const __impls = {
    // figma: Edge=Bottom
    "edge=bottom": __body0,
    // figma: Edge=Top
    "edge=top": __body0,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default ScrollEdgeEffectHard;
