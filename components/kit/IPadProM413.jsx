// figma node: 6316:14232 iPad Pro M4 13" (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "color=" + __venc(p.color);

export function IPadProM413(_p = {}) {
  const props = { ..._p, color: _p.color ?? "silver" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 1376,
      height: 1034,
      position: "relative",
      ...props.style,
    }}>
      <div className="fig-asset-d1fbad7db28dc436" style={{
        position: "absolute",
        left: -62,
        top: -58,
        width: 1500,
        height: 1150,
      }} />
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 1376,
      height: 1034,
      position: "relative",
      ...props.style,
    }}>
      <div className="fig-asset-bf4989f4f63e0a23" style={{
        position: "absolute",
        left: -62,
        top: -58,
        width: 1500,
        height: 1150,
      }} />
    </div>
  );
  const __impls = {
    // figma: Color=Silver
    "color=silver": __body0,
    // figma: Color=Space Gray
    "color=space gray": __body1,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default IPadProM413;
