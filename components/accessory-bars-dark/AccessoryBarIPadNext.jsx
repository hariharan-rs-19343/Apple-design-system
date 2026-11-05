// figma node: 209:58784 _Accessory Bar - iPad - Next (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "enabled=" + __venc(p.enabled);

export function AccessoryBarIPadNext(_p = {}) {
  const props = { ..._p, enabled: _p.enabled ?? true };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 24,
      height: 22,
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 1,
        top: -6.5,
        width: 22,
        height: 36,
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 17,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "36px",
        color: "rgba(60,60,67,0.3)",
      }}>{props.text1 ?? "􀆈"}</span>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 24,
      height: 22,
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 1,
        top: -6.5,
        width: 22,
        height: 36,
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 17,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "36px",
        color: "var(--labels-primary)",
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
export default AccessoryBarIPadNext;
