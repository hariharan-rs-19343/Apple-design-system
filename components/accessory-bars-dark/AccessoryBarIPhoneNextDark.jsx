// figma node: 515:62728 _Accessory Bar/iPhone/Next/Dark (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "enabled=" + __venc(p.enabled);

export function AccessoryBarIPhoneNextDark(_p = {}) {
  const props = { ..._p, enabled: _p.enabled ?? true };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 22,
      height: 36,
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 22,
        height: 36,
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 17,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "36px",
        letterSpacing: "-0.400px",
        color: "rgba(235,235,245,0.3)",
      }}>{props.text1 ?? "􀆈"}</span>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 22,
      height: 36,
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 22,
        height: 36,
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 17,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "36px",
        letterSpacing: "-0.400px",
        color: "rgb(255,255,255)",
      }}>{props.text1 ?? "􀆈"}</span>
    </div>
  );
  const __impls = {
    // figma: Enabled=False
    "enabled=false": __body0,
    // figma: Enabled=True
    "enabled=true": __body1,
  };
  return (__impls[__vkey(props)] ?? __body1)();
}
export default AccessoryBarIPhoneNextDark;
