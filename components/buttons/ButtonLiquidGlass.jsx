import { LiquidGlassRegularSmall } from './LiquidGlassRegularSmall.jsx';

// figma node: 5591:67812 _Button - Liquid Glass (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "mode=" + __venc(p.mode);

export function ButtonLiquidGlass(_p = {}) {
  const props = { ..._p, showSymbol: _p.showSymbol ?? true, label: _p.label ?? "Label", symbol: _p.symbol ?? "􀉬", mode: _p.mode ?? "light" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 34,
      borderRadius: 1000,
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "6px 10px 6px 14px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{ position: "absolute", inset: 0, borderRadius: 1000, background: "rgb(18,18,18)", boxShadow: "0 8px 40px 0 rgba(0,0,0,0.12), inset 0 1px 1px rgba(255,255,255,0.08)" }} />
      {props.showSymbol && (
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 510,
        fontSize: 15,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "18px",
        color: "rgb(245,245,245)",
        flexShrink: 0,
      }}>{props.symbol}</span>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 510,
        fontSize: 15,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "18px",
        color: "rgb(245,245,245)",
        flexShrink: 0,
      }}>{props.label}</span>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 590,
        fontSize: 15,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "18px",
        color: "rgb(138,138,138)",
        flexShrink: 0,
      }}>{props.text1 ?? "􀆊"}</span>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 34,
      borderRadius: 1000,
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "6px 10px 6px 14px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{ position: "absolute", inset: 0, borderRadius: 1000, background: "rgb(247,247,247)", boxShadow: "0 8px 40px 0 rgba(0,0,0,0.12), inset 0 1px 1px rgba(255,255,255,0.9)" }} />
      {props.showSymbol && (
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 510,
        fontSize: 15,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "18px",
        color: "var(--labels-vibrant-controls-primary)",
        flexShrink: 0,
      }}>{props.symbol}</span>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 510,
        fontSize: 15,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "18px",
        color: "var(--labels-vibrant-controls-primary)",
        flexShrink: 0,
      }}>{props.label}</span>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 590,
        fontSize: 15,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "18px",
        color: "var(--labels-vibrant-controls-secondary)",
        flexShrink: 0,
      }}>{props.text1 ?? "􀆊"}</span>
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
export default ButtonLiquidGlass;
