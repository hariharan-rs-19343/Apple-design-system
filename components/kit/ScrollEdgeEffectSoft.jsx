// figma node: 5661:26943 Scroll Edge Effect - Soft (4 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "edge=" + __venc(p.edge);

export function ScrollEdgeEffectSoft(_p = {}) {
  const props = { ..._p, edge: _p.edge ?? "bottom" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 200,
      height: 200,
      backdropFilter: "blur(10px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 200,
        height: 200,
        clipPath: "inset(0px 0px 0px 0px)",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 200,
          height: 200,
          opacity: 0.9,
          backgroundColor: "rgb(0,0,0)",
          backdropFilter: "blur(60px)",
        }} />
      </div>
    </div>
  );
  const __impls = {
    // figma: Edge=Leading
    "edge=leading": __body0,
    // figma: Edge=Trailing
    "edge=trailing": __body0,
    // figma: Edge=Bottom
    "edge=bottom": __body0,
    // figma: Edge=Top
    "edge=top": __body0,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default ScrollEdgeEffectSoft;
