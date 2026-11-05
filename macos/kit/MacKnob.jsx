// figma node: 475:191 _Knob (3 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "active=" + __venc(p.active) + '|' + "on=" + __venc(p.on) + '|' + "state=" + __venc(p.state);

export function MacKnob(_p = {}) {
  const props = { ..._p, active: _p.active ?? "true", on: _p.on ?? "false", state: _p.state ?? "idle" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 20,
      height: 20,
      overflow: "hidden",
      borderRadius: 100,
      background: "rgba(0,0,0,0.48)",
      boxShadow: "inset 1.750px 1.750px 1px -1px rgba(255,255,255,0.9), inset -1.750px -1.750px 2px -1px rgba(255,255,255,0.9), inset 0px 0px 1px 0.250px rgba(255,255,255,0.1), 0px 0px 1px 0px rgba(0,0,0,0.05), 0px 0px 4px 0px rgba(0,0,0,0.05), 0px 0px 44px 0px rgba(0,0,0,0.1)",
      position: "relative",
      ...props.style,
    }} />
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 20,
      height: 20,
      overflow: "hidden",
      borderRadius: 100,
      background: "rgba(255,255,255,0.12)",
      backdropFilter: "blur(2px) saturate(160%)",
      WebkitBackdropFilter: "blur(2px) saturate(160%)",
      boxShadow: "inset 1.750px 1.750px 1px -1px rgba(255,255,255,0.9), inset -1.750px -1.750px 2px -1px rgba(255,255,255,0.9), inset 0px 0px 1px 0.250px rgba(255,255,255,0.1), 0px 0px 1px 0px rgba(0,0,0,0.05), 0px 0px 4px 0px rgba(0,0,0,0.05), 0px 0px 44px 0px rgba(0,0,0,0.1)",
      position: "relative",
      ...props.style,
    }} />
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 20,
      height: 20,
      overflow: "hidden",
      borderRadius: 1000,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "0px 0px 1px 0px rgba(0,0,0,0.05), 0px 0px 4px 0px rgba(0,0,0,0.05), 0px 0px 44px 0px rgba(0,0,0,0.1)",
      position: "relative",
      ...props.style,
    }} />
  );
  const __impls = {
    // figma: Active=True, On=False, State=Disabled
    "active=true|on=false|state=disabled": __body0,
    // figma: Active=True, On=False, State=Clicked
    "active=true|on=false|state=clicked": __body1,
    // figma: Active=True, On=False, State=Idle
    "active=true|on=false|state=idle": __body2,
  };
  return (__impls[__vkey(props)] ?? __body2)();
}
export default MacKnob;
