// figma node: 47:60581 _Page Control (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "selected=" + __venc(p.selected);

export function PageControl2(_p = {}) {
  const props = { ..._p, selected: _p.selected ?? false };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 8,
      height: 8,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 8,
        height: 8,
        opacity: 0.3,
        borderRadius: "50%",
        backgroundColor: "rgb(217,217,217)",
      }} />
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 8,
      height: 8,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 8,
        height: 8,
        borderRadius: "50%",
        backgroundColor: "rgb(217,217,217)",
      }} />
    </div>
  );
  const __impls = {
    // figma: Selected=False
    "selected=false": __body0,
    // figma: Selected=True
    "selected=true": __body1,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default PageControl2;
