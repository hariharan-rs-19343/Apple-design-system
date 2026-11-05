// figma node: 6316:14229 iPad Pro M4 11" (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "color=" + __venc(p.color);

export function IPadProM411(_p = {}) {
  const props = { ..._p, color: _p.color ?? "silver" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 1210,
      height: 834,
      position: "relative",
      ...props.style,
    }}>
      <div className="fig-asset-113f6c88d43c35ec" style={{
        position: "absolute",
        left: -55,
        top: -53,
        width: 1320,
        height: 940,
      }} />
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 1210,
      height: 834,
      position: "relative",
      ...props.style,
    }}>
      <div className="fig-asset-d9b52fdabe8a080f" style={{
        position: "absolute",
        left: -55,
        top: -53,
        width: 1320,
        height: 940,
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
export default IPadProM411;
