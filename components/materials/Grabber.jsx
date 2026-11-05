// figma node: 5551:24791 _Grabber (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "mode=" + __venc(p.mode);

export function Grabber(_p = {}) {
  const props = { ..._p, mode: _p.mode ?? "light" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 36,
      height: 5,
      borderRadius: 100,
      backgroundColor: "rgb(207,207,207)",
      position: "relative",
      ...props.style,
    }} />
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 36,
      height: 5,
      borderRadius: 100,
      backgroundColor: "rgb(51,51,51)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 36,
        height: 5,
        borderRadius: 100,
        backgroundColor: "rgb(51,51,51)",
      }} />
    </div>
  );
  const __impls = {
    // figma: Mode=Light
    "mode=light": __body0,
    // figma: Mode=Dark
    "mode=dark": __body1,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default Grabber;
