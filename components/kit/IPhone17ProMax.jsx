// figma node: 6316:14155 iPhone 17 Pro Max (3 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "color=" + __venc(p.color);

export function IPhone17ProMax(_p = {}) {
  const props = { ..._p, color: _p.color ?? "cosmic orange" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 440,
      height: 956,
      position: "relative",
      ...props.style,
    }}>
      <div className="fig-asset-9f797e83846c036e" style={{
        position: "absolute",
        left: -25,
        top: -22,
        width: 490,
        height: 1000,
      }} />
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 440,
      height: 956,
      position: "relative",
      ...props.style,
    }}>
      <div className="fig-asset-25a7c3f104374d1d" style={{
        position: "absolute",
        left: -25,
        top: -22,
        width: 490,
        height: 1000,
      }} />
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 440,
      height: 956,
      position: "relative",
      ...props.style,
    }}>
      <div className="fig-asset-a19f2debfb90196f" style={{
        position: "absolute",
        left: -25,
        top: -22,
        width: 490,
        height: 1000,
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
export default IPhone17ProMax;
