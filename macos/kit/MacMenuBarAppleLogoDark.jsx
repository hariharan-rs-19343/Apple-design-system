// figma node: 552:10839 _Menu Bar/Apple Logo / Dark (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "property1=" + __venc(p.property1) + '|' + "property2=" + __venc(p.property2) + '|' + "property3=" + __venc(p.property3);

export function MacMenuBarAppleLogoDark(_p = {}) {
  const props = { ..._p, property1: _p.property1 ?? "apple logo", property2: _p.property2 ?? "off", property3: _p.property3 ?? "dark" };
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
        color: "rgba(255,255,255,0.08)",
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
        color: "rgb(255,255,255)",
        filter: "drop-shadow(0px 1px 6px rgb(204,204,204))",
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
        color: "rgb(255,255,255)",
        filter: "drop-shadow(0px 1px 6px rgb(204,204,204))",
      }}>{props.text1 ?? "􀣺"}</span>
    </div>
  );
  const __impls = {
    // figma: Property 1=Apple Logo, Property 2=On, Property 3=Dark
    "property1=apple logo|property2=on|property3=dark": __body0,
    // figma: Property 1=Apple Logo, Property 2=Off, Property 3=Dark
    "property1=apple logo|property2=off|property3=dark": __body1,
  };
  return (__impls[__vkey(props)] ?? __body1)();
}
export default MacMenuBarAppleLogoDark;
