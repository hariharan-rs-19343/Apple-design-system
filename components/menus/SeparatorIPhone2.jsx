// figma node: 5855:5763 Separator - iPhone (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "mode=" + __venc(p.mode);

export function SeparatorIPhone2(_p = {}) {
  const props = { ..._p, mode: _p.mode ?? "light" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 160,
      height: 21,
      display: "flex",
      flexDirection: "column",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <svg height={1} viewBox="0 0 144 1" fill="none" style={{
        position: "relative",
        height: 1,
        flexShrink: 0,
        alignSelf: "stretch",
        color: "var(--separators-vibrant)",
      }}>
        <path d={"M 0 0 L 144 0 L 144 1 L 0 1 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
  const __impls = {
    // figma: Mode=Dark
    "mode=dark": __body0,
    // figma: Mode=Light
    "mode=light": __body0,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default SeparatorIPhone2;
