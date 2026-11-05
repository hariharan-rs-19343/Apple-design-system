// figma node: 58:57160 _Picker/Color/Swatches/Dot (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "state=" + __venc(p.state);

export function PickerColorSwatchesDot(_p = {}) {
  const props = { ..._p, state: _p.state ?? "unselected" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 30,
      height: 30,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor: "rgb(0,0,0)",
      }} />
      <div style={{
        position: "absolute",
        left: 4,
        top: 4,
        width: 22,
        height: 22,
        borderRadius: "50%",
        boxShadow: "inset 0 0 0 1px rgb(255,255,255), 0 0 0 1px rgb(255,255,255)",
      }} />
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 30,
      height: 30,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor: "rgb(0,0,0)",
      }} />
    </div>
  );
  const __impls = {
    // figma: State=Selected
    "state=selected": __body0,
    // figma: State=Unselected
    "state=unselected": __body1,
  };
  return (__impls[__vkey(props)] ?? __body1)();
}
export default PickerColorSwatchesDot;
