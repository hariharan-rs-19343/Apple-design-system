// figma node: 5549:5660 _Notification Banner BG (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "mode=" + __venc(p.mode);

export function NotificationBannerBG(_p = {}) {
  const props = { ..._p, mode: _p.mode ?? "light" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 100,
      height: 100,
      borderRadius: 24,
      background: "linear-gradient(rgba(26,26,26,0.2),rgba(26,26,26,0.2)), linear-gradient(rgba(255,255,255,0.25),rgba(255,255,255,0.25))",
      display: "flex",
      flexDirection: "column",
      padding: "14px 14px 14px 14px",
      justifyContent: "space-between",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 41,
        height: 42,
        backgroundColor: "rgb(204,0,0)",
        flexShrink: 0,
      }} />
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 100,
      height: 100,
      borderRadius: 24,
      background: "linear-gradient(rgba(26,26,26,0.2),rgba(26,26,26,0.2)), linear-gradient(rgba(255,255,255,0.25),rgba(255,255,255,0.25))",
      display: "flex",
      flexDirection: "column",
      padding: "14px 14px 14px 14px",
      justifyContent: "space-between",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        height: 32,
        backgroundColor: "rgb(221,221,0)",
        flexShrink: 0,
        alignSelf: "stretch",
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
export default NotificationBannerBG;
