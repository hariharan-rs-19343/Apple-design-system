// figma node: 533:17698 _Resize Indicator (3 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "mode=" + __venc(p.mode);

export function ResizeIndicator(_p = {}) {
  const props = { ..._p, mode: _p.mode ?? "dark" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 36,
      height: 5,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 36,
        height: 5,
        borderRadius: 2.5,
        background: "linear-gradient(rgba(194,194,194,0.5),rgba(194,194,194,0.5)), linear-gradient(rgba(127,127,127,0.4),rgba(127,127,127,0.4))",
      }} />
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 36,
      height: 5,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 36,
        height: 5,
        borderRadius: 2.5,
        background: "linear-gradient(rgba(61,61,61,0.5),rgba(61,61,61,0.5)), linear-gradient(rgba(127,127,127,0.4),rgba(127,127,127,0.4))",
      }} />
    </div>
  );
  const __impls = {
    // figma: Mode=Dark Elevated
    "mode=dark elevated": __body0,
    // figma: Mode=Dark
    "mode=dark": __body1,
    // figma: Mode=Light
    "mode=light": __body1,
  };
  return (__impls[__vkey(props)] ?? __body1)();
}
export default ResizeIndicator;
