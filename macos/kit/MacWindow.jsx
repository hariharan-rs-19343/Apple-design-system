// figma node: 683:16442 Window (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "type=" + __venc(p.type);

export function MacWindow(_p = {}) {
  const props = { ..._p, type: _p.type ?? "default" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 500,
      height: 300,
      overflow: "hidden",
      borderRadius: 16,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "0px 0px 0px 1px rgba(0,0,0,0.23), 0px 16px 48px 0px rgba(0,0,0,0.35)",
      position: "relative",
      ...props.style,
    }} />
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 500,
      height: 300,
      overflow: "hidden",
      borderRadius: 26,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "0px 0px 0px 1px rgba(0,0,0,0.23), 0px 16px 48px 0px rgba(0,0,0,0.35)",
      position: "relative",
      ...props.style,
    }} />
  );
  const __impls = {
    // figma: Type=Titlebar
    "type=titlebar": __body0,
    // figma: Type=Default
    "type=default": __body1,
  };
  return (__impls[__vkey(props)] ?? __body1)();
}
export default MacWindow;
