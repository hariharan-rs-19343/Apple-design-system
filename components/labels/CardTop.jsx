// figma node: 540:175416 _Card Top (3 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "mode=" + __venc(p.mode);

export function CardTop(_p = {}) {
  const props = { ..._p, mode: _p.mode ?? "light" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 361,
      height: 10,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 361,
        height: 10,
        borderRadius: "10px 10px 0px 0px",
        backgroundColor: "rgba(0,0,0,0.3)",
      }} />
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 361,
      height: 10,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 361,
        height: 10,
        borderRadius: "10px 10px 0px 0px",
        backgroundColor: "rgba(0,0,0,0.12)",
      }} />
    </div>
  );
  const __impls = {
    // figma: Mode=Dark Elevated
    "mode=dark elevated": __body0,
    // figma: Mode=Dark
    "mode=dark": __body0,
    // figma: Mode=Light
    "mode=light": __body1,
  };
  return (__impls[__vkey(props)] ?? __body1)();
}
export default CardTop;
