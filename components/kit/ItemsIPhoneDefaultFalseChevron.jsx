// figma node: 5509:8036 _Items/iPhone/Default/False/Chevron
export function ItemsIPhoneDefaultFalseChevron(_p = {}) {
  const props = { ..._p, label: _p.label ?? "Label", showSymbol: _p.showSymbol ?? true, showCheckmark: _p.showCheckmark ?? true, showSubtitle: _p.showSubtitle ?? true, subtitle: _p.subtitle ?? "Subtitle", symbol: _p.symbol ?? "􀓔", showTrailing: _p.showTrailing ?? true };
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
        fontSize: 17,
        textAlign: "center",
        lineHeight: "22px",
        color: "var(--labels-vibrant-primary)",
        flexShrink: 0,
      }}>{props.symbol}</span>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 2,
        padding: "10px 4px 10px 4px",
        justifyContent: "center",
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
          fontSize: 17,
          lineHeight: "20px",
          letterSpacing: "-0.430px",
          color: "var(--accents-red)",
          flexShrink: 0,
        }}>{props.label}</span>
        {props.showSubtitle && (
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 13,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: "18px",
          color: "var(--labels-vibrant-secondary)",
          flexShrink: 0,
          alignSelf: "stretch",
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
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--labels-vibrant-secondary)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "􀆊"}</span>
      </div>
      )}
    </div>
  );
}
export default ItemsIPhoneDefaultFalseChevron;
