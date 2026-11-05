// figma node: 128:86044 _Accessory Bar - iPad - Buttons/Light (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "enabled=" + __venc(p.enabled);

export function AccessoryBarIPadButtonsLight(_p = {}) {
  const props = { ..._p, enabled: _p.enabled ?? true, symbol: _p.symbol ?? "􀄼" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 28,
      height: 28,
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: -8,
        top: -8,
        width: 44,
        height: 44,
        opacity: 0.35,
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 21,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "44px",
        color: "var(--labels-vibrant-tertiary)",
      }}>{props.text1 ?? "􀄼"}</span>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 28,
      height: 28,
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: -8,
        top: -8,
        width: 44,
        height: 44,
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 21,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "44px",
        color: "var(--labels-vibrant-secondary)",
      }}>{props.symbol}</span>
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
export default AccessoryBarIPadButtonsLight;
