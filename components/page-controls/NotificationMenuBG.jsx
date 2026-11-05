// figma node: 5551:17897 _Notification Menu BG (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "mode=" + __venc(p.mode);

export function NotificationMenuBG(_p = {}) {
  const props = { ..._p, mode: _p.mode ?? "light" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 100,
      height: 100,
      borderRadius: 24,
      background: "linear-gradient(rgba(15,15,15,0.2),rgba(15,15,15,0.2)), linear-gradient(rgba(0,0,0,0.35),rgba(0,0,0,0.35)), linear-gradient(rgba(255,255,255,0.25),rgba(255,255,255,0.25))",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 24,
        top: 9,
        width: 36,
        height: 70,
        backgroundColor: "rgb(204,0,0)",
      }} />
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 100,
      height: 100,
      borderRadius: 24,
      background: "linear-gradient(rgba(89,89,89,0.2),rgba(89,89,89,0.2)), linear-gradient(rgba(255,255,255,0.25),rgba(255,255,255,0.25)), linear-gradient(rgba(0,0,0,0.25),rgba(0,0,0,0.25))",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 27,
        top: 13,
        width: 23,
        height: 61,
        backgroundColor: "rgb(204,0,0)",
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
export default NotificationMenuBG;
