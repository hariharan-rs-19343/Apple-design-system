// figma node: 6316:14172 iPhone Air (4 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "color=" + __venc(p.color);

export function IPhoneAir(_p = {}) {
  const props = { ..._p, color: _p.color ?? "sky blue" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 420,
      height: 912,
      position: "relative",
      ...props.style,
    }}>
      <div className="fig-asset-19c21ae61d1e3382" style={{
        position: "absolute",
        left: -20,
        top: -24,
        width: 460,
        height: 960,
      }} />
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 420,
      height: 912,
      position: "relative",
      ...props.style,
    }}>
      <div className="fig-asset-dc3c38fe69417283" style={{
        position: "absolute",
        left: -20,
        top: -24,
        width: 460,
        height: 960,
      }} />
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 420,
      height: 912,
      position: "relative",
      ...props.style,
    }}>
      <div className="fig-asset-1caf09bb51732902" style={{
        position: "absolute",
        left: -20,
        top: -24,
        width: 460,
        height: 960,
      }} />
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 420,
      height: 912,
      position: "relative",
      ...props.style,
    }}>
      <div className="fig-asset-998bdd65bd28ec3a" style={{
        position: "absolute",
        left: -20,
        top: -24,
        width: 460,
        height: 960,
      }} />
    </div>
  );
  const __impls = {
    // figma: Color=Cloud White
    "color=cloud white": __body0,
    // figma: Color=Light Gold
    "color=light gold": __body1,
    // figma: Color=Sky Blue
    "color=sky blue": __body2,
    // figma: Color=Space Black
    "color=space black": __body3,
  };
  return (__impls[__vkey(props)] ?? __body2)();
}
export default IPhoneAir;
