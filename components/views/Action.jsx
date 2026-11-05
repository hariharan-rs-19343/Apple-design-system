// figma node: 5591:32475 _Action (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "mode=" + __venc(p.mode);

export function Action(_p = {}) {
  const props = { ..._p, action: _p.action ?? "Action", mode: _p.mode ?? "light", symbol: _p.symbol ?? "􀓔" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 78,
      display: "flex",
      flexDirection: "column",
      gap: 7,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 70,
        height: 70,
        borderRadius: 1000,
        backgroundColor: "rgb(18,18,18)",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 25,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "13px",
          letterSpacing: "0.060px",
          color: "rgb(245,245,245)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.symbol}</span>
      </div>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 13,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "15px",
        letterSpacing: "-0.100px",
        color: "rgb(245,245,245)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.action}</span>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 78,
      display: "flex",
      flexDirection: "column",
      gap: 7,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 70,
        height: 70,
        borderRadius: 1000,
        backgroundColor: "var(--fills-vibrant-tertiary)",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 25,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "13px",
          letterSpacing: "0.060px",
          color: "var(--labels-vibrant-primary)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.symbol}</span>
      </div>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 13,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "15px",
        letterSpacing: "-0.100px",
        color: "var(--labels-vibrant-primary)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.action}</span>
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
export default Action;
