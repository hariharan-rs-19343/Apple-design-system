// figma node: 5426:2071 _Button - Symbol/BG Context = Bright/Default/Dim
export function ButtonSymbolBGContextBright(_p = {}) {
  const props = { ..._p, symbol: _p.symbol ?? "􀓔" };
  return (
    <div className={props.className} style={{
      width: 36,
      height: 36,
      borderRadius: 100,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 510,
        fontSize: 17,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--labels-controls-primary-xxxx)",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>{props.symbol}</span>
    </div>
  );
}
export default ButtonSymbolBGContextBright;
