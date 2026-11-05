// figma node: 528:65290 _Lollipops (3 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "mode=" + __venc(p.mode);

export function Lollipops(_p = {}) {
  const props = { ..._p, mode: _p.mode ?? "light" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 35,
      height: 24,
      backgroundColor: "rgba(0,89,178,0.3)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 26,
        top: 0,
        width: 18,
        height: 42,
      }}>
        <div style={{
          position: "absolute",
          left: 8,
          top: 0,
          width: 2,
          height: 33,
          borderRadius: 2,
          backgroundColor: "rgb(20,111,225)",
        }} />
        <div style={{
          position: "absolute",
          left: 0,
          top: 24,
          width: 18,
          height: 18,
          borderRadius: "50%",
          backgroundColor: "rgb(20,111,225)",
          boxShadow: "0px 3px 14px 6px rgba(0,0,0,0.12)",
        }} />
      </div>
      <div style={{
        position: "absolute",
        left: -9,
        top: -18,
        width: 18,
        height: 42,
      }}>
        <div style={{
          position: "absolute",
          left: 8,
          top: 9,
          width: 2,
          height: 33,
          borderRadius: 2,
          backgroundColor: "rgb(20,111,225)",
        }} />
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 18,
          height: 18,
          borderRadius: "50%",
          backgroundColor: "rgb(20,111,225)",
          boxShadow: "0px 3px 14px 6px rgba(0,0,0,0.12)",
        }} />
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 35,
      height: 24,
      backgroundColor: "rgba(0,89,178,0.2)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 26,
        top: 0,
        width: 18,
        height: 42,
      }}>
        <div style={{
          position: "absolute",
          left: 8,
          top: 0,
          width: 2,
          height: 33,
          borderRadius: 2,
          backgroundColor: "rgb(20,111,225)",
        }} />
        <div style={{
          position: "absolute",
          left: 0,
          top: 24,
          width: 18,
          height: 18,
          borderRadius: "50%",
          backgroundColor: "rgb(20,111,225)",
          boxShadow: "0px 3px 14px 6px rgba(0,0,0,0.12)",
        }} />
      </div>
      <div style={{
        position: "absolute",
        left: -9,
        top: -18,
        width: 18,
        height: 42,
      }}>
        <div style={{
          position: "absolute",
          left: 8,
          top: 9,
          width: 2,
          height: 33,
          borderRadius: 2,
          backgroundColor: "rgb(20,111,225)",
        }} />
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 18,
          height: 18,
          borderRadius: "50%",
          backgroundColor: "rgb(20,111,225)",
          boxShadow: "0px 3px 14px 6px rgba(0,0,0,0.12)",
        }} />
      </div>
    </div>
  );
  const __impls = {
    // figma: Mode=Dark Elevated
    "mode=dark elevated": __body0,
    // figma: Mode=Dark
    "mode=dark": __body0,
    // figma: Mode=Light
    "mode=light": __body1,
  };
  return (__impls[__vkey(props)] ?? __body1)();
}
export default Lollipops;
