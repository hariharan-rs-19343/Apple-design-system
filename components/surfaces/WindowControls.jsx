// figma node: 5565:22697 _Window Controls (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "state=" + __venc(p.state);

export function WindowControls(_p = {}) {
  const props = { ..._p, state: _p.state ?? "active" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 100,
      backgroundColor: "rgba(0,0,0,0.05)",
      display: "flex",
      flexDirection: "row",
      gap: 3,
      padding: "8px 10px 8px 10px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 6,
        height: 6,
        borderRadius: "50%",
        backgroundColor: "rgba(60,60,67,0.6)",
        flexShrink: 0,
      }} />
      <div style={{
        position: "relative",
        width: 6,
        height: 6,
        borderRadius: "50%",
        backgroundColor: "rgba(60,60,67,0.6)",
        flexShrink: 0,
      }} />
      <div style={{
        position: "relative",
        width: 6,
        height: 6,
        borderRadius: "50%",
        backgroundColor: "rgba(60,60,67,0.6)",
        flexShrink: 0,
      }} />
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 100,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "0px 2px 8px 0px rgba(0,0,0,0.08)",
      display: "flex",
      flexDirection: "row",
      gap: 3,
      padding: "8px 10px 8px 10px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 44,
          height: 22,
        }}>{props.icon1 ?? null}</div>
      <div style={{
        position: "relative",
        width: 6,
        height: 6,
        borderRadius: "50%",
        backgroundColor: "rgb(255,95,87)",
        flexShrink: 0,
      }} />
      <div style={{
        position: "relative",
        width: 6,
        height: 6,
        borderRadius: "50%",
        backgroundColor: "rgb(254,188,47)",
        flexShrink: 0,
      }} />
      <div style={{
        position: "relative",
        width: 6,
        height: 6,
        borderRadius: "50%",
        backgroundColor: "rgb(39,200,64)",
        flexShrink: 0,
      }} />
    </div>
  );
  const __impls = {
    // figma: State=Inactive
    "state=inactive": __body0,
    // figma: State=Active
    "state=active": __body1,
  };
  return (__impls[__vkey(props)] ?? __body1)();
}
export default WindowControls;
