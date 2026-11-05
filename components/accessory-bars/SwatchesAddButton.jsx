// figma node: 411:59308 _Swatches - Add Button (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "mode=" + __venc(p.mode);

export function SwatchesAddButton(_p = {}) {
  const props = { ..._p, mode: _p.mode ?? "dark" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 30,
      height: 30,
      position: "relative",
      color: "rgb(72,72,74)",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 30,
        height: 30,
        borderRadius: 14.857142448425293,
        backgroundColor: "rgba(120,120,128,0.2)",
      }} />
      <svg width={14.667} height={14.667} viewBox="0 0 14.667 14.667" fill="none" style={{
        position: "absolute",
        left: 7.668,
        top: 7.667,
        width: 14.667,
        height: 14.667,
      }}>
        <path d={"M 7.333 0 C 8.026 0 8.596 0.529 8.661 1.205 L 8.667 1.333 L 8.666 5.999 L 13.333 6 C 14.07 6 14.667 6.597 14.667 7.333 C 14.667 8.026 14.138 8.596 13.462 8.661 L 13.333 8.667 L 8.666 8.666 L 8.667 13.333 C 8.667 14.07 8.07 14.667 7.333 14.667 C 6.64 14.667 6.071 14.138 6.006 13.462 L 6 13.333 L 5.999 8.666 L 1.333 8.667 C 0.597 8.667 0 8.07 0 7.333 C 0 6.64 0.529 6.071 1.205 6.006 L 1.333 6 L 5.999 5.999 L 6 1.333 C 6 0.597 6.597 0 7.333 0 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
  const __impls = {
    // figma: Mode=Light
    "mode=light": __body0,
    // figma: Mode=Dark
    "mode=dark": __body0,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default SwatchesAddButton;
