// figma node: 5622:50293 _HSQA - BG (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "mode=" + __venc(p.mode);

export function HSQABG(_p = {}) {
  const props = { ..._p, mode: _p.mode ?? "light" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 100,
      height: 100,
      borderRadius: 30,
      position: "relative",
      ...props.style,
    }}>
      <svg width={100} height={100} viewBox="0 0 100 100" fill="none" style={{
        position: "absolute",
        left: 0,
        top: -1,
        width: 100,
        height: 100,
        overflow: "hidden",
        borderRadius: 30,
      }}>
        <path d={"M 0 50 C 0 31.308 0 21.962 4.019 15 C 6.652 10.439 10.439 6.652 15 4.019 C 21.962 0 31.308 0 50 0 L 50 0 C 68.692 0 78.038 0 85 4.019 C 89.561 6.652 93.348 10.439 95.981 15 C 100 21.962 100 31.308 100 50 L 100 50 C 100 68.692 100 78.038 95.981 85 C 93.348 89.561 89.561 93.348 85 95.981 C 78.038 100 68.692 100 50 100 L 50 100 C 31.308 100 21.962 100 15 95.981 C 10.439 93.348 6.652 89.561 4.019 85 C 0 78.038 0 68.692 0 50 L 0 50 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
      <div style={{
        position: "absolute",
        left: 17,
        top: 2,
        width: 72,
        height: 93,
        backgroundColor: "rgb(255,0,0)",
      }} />
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 100,
      height: 100,
      overflow: "hidden",
      borderRadius: 30,
      position: "relative",
      ...props.style,
    }}>
      <svg width={100} height={100} viewBox="0 0 100 100" fill="none" style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 100,
        height: 100,
        overflow: "hidden",
        color: "rgb(255,0,0)",
      }}>
        <path d={"M 0 0 L 100 0 L 100 100 L 0 100 L 0 0 Z"} fill="rgba(255,178,178,0.3333)" fillRule="nonzero" />
        <path d={"M 0 0 L 0 -10 L -10 -10 L -10 0 L 0 0 Z M 100 0 L 110 0 L 110 -10 L 100 -10 L 100 0 Z M 100 100 L 100 110 L 110 110 L 110 100 L 100 100 Z M 0 100 L -10 100 L -10 110 L 0 110 L 0 100 Z M 0 0 L 0 10 L 100 10 L 100 0 L 100 -10 L 0 -10 L 0 0 Z M 100 0 L 90 0 L 90 100 L 100 100 L 110 100 L 110 0 L 100 0 Z M 100 100 L 100 90 L 0 90 L 0 100 L 0 110 L 100 110 L 100 100 Z M 0 100 L 10 100 L 10 0 L 0 0 L -10 0 L -10 100 L 0 100 Z"} fill="rgb(255,0,0)" fillRule="nonzero" />
      </svg>
      <div style={{
        position: "absolute",
        left: 17,
        top: 2,
        width: 72,
        height: 93,
        backgroundColor: "rgb(255,0,0)",
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
export default HSQABG;
