// figma node: 6316:14140 iPhone 17 Pro (3 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "color=" + __venc(p.color);

export function IPhone17Pro(_p = {}) {
  const props = { ..._p, color: _p.color ?? "cosmic orange" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 402,
      height: 874,
      position: "relative",
      ...props.style,
    }}>
      <div className="fig-asset-32b4cdce7680181e" style={{
        position: "absolute",
        left: -24,
        top: -23,
        width: 450,
        height: 920,
      }} />
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 402,
      height: 874,
      position: "relative",
      ...props.style,
    }}>
      <div className="fig-asset-9e265e8f1770dccf" style={{
        position: "absolute",
        left: -24,
        top: -23,
        width: 450,
        height: 920,
      }} />
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 402,
      height: 874,
      position: "relative",
      ...props.style,
    }}>
      <div className="fig-asset-9623cefb7d598a87" style={{
        position: "absolute",
        left: -24,
        top: -23,
        width: 450,
        height: 920,
      }} />
    </div>
  );
  const __impls = {
    // figma: Color=Cosmic Orange
    "color=cosmic orange": __body0,
    // figma: Color=Deep Blue
    "color=deep blue": __body1,
    // figma: Color=Silver
    "color=silver": __body2,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default IPhone17Pro;
