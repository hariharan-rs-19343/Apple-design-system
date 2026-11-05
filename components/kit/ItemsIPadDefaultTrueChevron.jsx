// figma node: 5504:4191 _Items/iPad/Default/True/Chevron
export function ItemsIPadDefaultTrueChevron(_p = {}) {
  const props = { ..._p, label: _p.label ?? "Label", subtitle: _p.subtitle ?? "Subtitle", showSymbol: _p.showSymbol ?? true, showCheckmark: _p.showCheckmark ?? true, symbol: _p.symbol ?? "􀓔", showSubtitle: _p.showSubtitle ?? true, showTrailing: _p.showTrailing ?? true };
  return (
    <div className={props.className} style={{
      width: 240,
      display: "flex",
      flexDirection: "row",
      gap: 4,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.showSymbol && (
      <span style={{
        position: "relative",
        width: 28,
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 15,
        textAlign: "center",
        lineHeight: "20px",
        color: "var(--labels-vibrant-primary)",
        flexShrink: 0,
      }}>{props.symbol}</span>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 2,
        padding: "9px 4px 9px 4px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          width: 186,
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 15,
          lineHeight: "18px",
          letterSpacing: "0.200px",
          color: "var(--labels-vibrant-primary)",
          flexShrink: 0,
        }}>{props.label}</span>
        {props.showSubtitle && (
        <span style={{
          position: "relative",
          width: 186,
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 13,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: "16px",
          color: "var(--labels-vibrant-secondary)",
          flexShrink: 0,
        }}>{props.subtitle}</span>
        )}
      </div>
      {props.showTrailing && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 700,
          fontSize: 15,
          textAlign: "center",
          lineHeight: "20px",
          color: "var(--labels-vibrant-secondary)",
          flexShrink: 0,
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "􀆊"}</span>
      </div>
      )}
    </div>
  );
}
export default ItemsIPadDefaultTrueChevron;
