// figma node: 6316:14198 iPhone 17 (5 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "color=" + __venc(p.color);

export function IPhone17(_p = {}) {
  const props = { ..._p, color: _p.color ?? "lavendar" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 402,
      height: 874,
      position: "relative",
      ...props.style,
    }}>
      <div className="fig-asset-a1529de8920008b7" style={{
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
      <div className="fig-asset-b56386ec42828ee4" style={{
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
      <div className="fig-asset-170813849b0ec03e" style={{
        position: "absolute",
        left: -24,
        top: -23,
        width: 450,
        height: 920,
      }} />
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 402,
      height: 874,
      position: "relative",
      ...props.style,
    }}>
      <div className="fig-asset-f5913ac0b916e914" style={{
        position: "absolute",
        left: -24,
        top: -23,
        width: 450,
        height: 920,
      }} />
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: 402,
      height: 874,
      position: "relative",
      ...props.style,
    }}>
      <div className="fig-asset-d8e7ee444eb3b3f9" style={{
        position: "absolute",
        left: -24,
        top: -23,
        width: 450,
        height: 920,
      }} />
    </div>
  );
  const __impls = {
    // figma: Color=Black
    "color=black": __body0,
    // figma: Color=Lavendar
    "color=lavendar": __body1,
    // figma: Color=Mist Blue
    "color=mist blue": __body2,
    // figma: Color=Sage
    "color=sage": __body3,
    // figma: Color=White
    "color=white": __body4,
  };
  return (__impls[__vkey(props)] ?? __body1)();
}
export default IPhone17;
