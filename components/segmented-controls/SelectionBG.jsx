// figma node: 5840:25291 _Selection BG (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "mode=" + __venc(p.mode);

export function SelectionBG(_p = {}) {
  const props = { ..._p, mode: _p.mode ?? "light" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 100,
      height: 44,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 100,
        height: 44,
        borderRadius: 100,
        backgroundColor: "var(--fills-vibrant-secondary)",
      }} />
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 100,
      height: 44,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 100,
        height: 44,
        borderRadius: 100,
        backgroundColor: "var(--fills-vibrant-tertiary)",
      }} />
    </div>
  );
  const __impls = {
    // figma: Mode=Dark
    "mode=dark": __body0,
    // figma: Mode=Light
    "mode=light": __body1,
  };
  return (__impls[__vkey(props)] ?? __body1)();
}
export default SelectionBG;
