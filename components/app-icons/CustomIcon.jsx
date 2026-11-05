// figma node: 2402:976 _Custom Icon (3 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "mode=" + __venc(p.mode);

export function CustomIcon(_p = {}) {
  const props = { ..._p, mode: _p.mode ?? "default" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 66,
      height: 66,
      overflow: "hidden",
      position: "relative",
      ...props.style,
    }}>
      <div className="fig-asset-7c7f6ebb62636609" style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 66,
        height: 66,
      }} />
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 66,
      height: 66,
      overflow: "hidden",
      position: "relative",
      ...props.style,
    }}>
      <div className="fig-asset-0063a433efeb8b89" style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 66,
        height: 66,
      }} />
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 66,
      height: 66,
      overflow: "hidden",
      position: "relative",
      ...props.style,
    }}>
      <div className="fig-asset-9ee404c0ae57001e" style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 66,
        height: 66,
      }} />
    </div>
  );
  const __impls = {
    // figma: Mode=Clear Light
    "mode=clear light": __body0,
    // figma: Mode=Dark
    "mode=dark": __body1,
    // figma: Mode=Default
    "mode=default": __body2,
  };
  return (__impls[__vkey(props)] ?? __body2)();
}
export default CustomIcon;
