// figma node: 5811:30646 _Page Dots (4 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "mode=" + __venc(p.mode) + '|' + "selected=" + __venc(p.selected);

export function PageDots(_p = {}) {
  const props = { ..._p, mode: _p.mode ?? "light", selected: _p.selected ?? false };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 8,
      height: 8,
      borderRadius: 50,
      backgroundColor: "var(--labels-vibrant-controls-tertiary)",
      position: "relative",
      ...props.style,
    }} />
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 8,
      height: 8,
      borderRadius: 50,
      backgroundColor: "var(--labels-vibrant-controls-primary)",
      position: "relative",
      ...props.style,
    }} />
  );
  const __impls = {
    // figma: Mode=Dark,Selected=False
    "mode=dark|selected=false": __body0,
    // figma: Mode=Dark,Selected=True
    "mode=dark|selected=true": __body1,
    // figma: Mode=Light,Selected=False
    "mode=light|selected=false": __body0,
    // figma: Mode=Light,Selected=True
    "mode=light|selected=true": __body1,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default PageDots;
