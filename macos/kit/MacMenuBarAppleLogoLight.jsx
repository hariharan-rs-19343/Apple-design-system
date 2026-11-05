// figma node: 121:13169 _Menu Bar/Apple Logo / Light (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "selected=" + __venc(p.selected) + '|' + "mode=" + __venc(p.mode);

export function MacMenuBarAppleLogoLight(_p = {}) {
  const props = { ..._p, selected: _p.selected ?? "on", mode: _p.mode ?? "light" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 33,
      height: 24,
      borderRadius: 4,
      position: "relative",
      ...props.style,
    }}>
      <svg width={41} height={25} viewBox="0 0 41 25" fill="none" style={{
        position: "absolute",
        left: -4,
        top: -1,
        width: 41,
        height: 25,
        overflow: "hidden",
        borderRadius: 100,
        backdropFilter: "blur(60px)",
        color: "rgba(0,0,0,0.08)",
      }}>
        <path d={"M 0 12.5 C 0 5.596 5.596 0 12.5 0 L 28.5 0 C 35.404 0 41 5.596 41 12.5 L 41 12.5 C 41 19.404 35.404 25 28.5 25 L 12.5 25 C 5.596 25 0 19.404 0 12.5 L 0 12.5 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
      <span style={{
        position: "absolute",
        left: 9,
        top: 0.5,
        width: 15,
        height: 20,
        fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16.299999237060547,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "20px",
        color: "rgb(0,0,0)",
      }}>{props.text1 ?? "􀣺"}</span>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 33,
      height: 24,
      borderRadius: 4,
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 9,
        top: 0.5,
        width: 15,
        height: 20,
        fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16.299999237060547,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "20px",
        color: "rgb(0,0,0)",
      }}>{props.text1 ?? "􀣺"}</span>
    </div>
  );
  const __impls = {
    // figma: Selected=On, Mode=Light
    "selected=on|mode=light": __body0,
    // figma: Selected=Off, Mode=Light
    "selected=off|mode=light": __body1,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default MacMenuBarAppleLogoLight;
