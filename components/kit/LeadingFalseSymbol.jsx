// figma node: 131:66452 _Leading/False/Symbol
export function LeadingFalseSymbol(_p = {}) {
  const props = { ..._p, showSubtitle: _p.showSubtitle ?? true, symbol: _p.symbol ?? "􀓔", title: _p.title ?? "Title", subtitle: _p.subtitle ?? "Subtitle" };
  return (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 17,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "var(--accents-blue)",
        flexShrink: 0,
      }}>{props.symbol}</span>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 17,
        whiteSpace: "nowrap",
        lineHeight: "19px",
        letterSpacing: "-0.400px",
        color: "var(--labels-primary)",
        flexShrink: 0,
      }}>{props.text1 ?? "Title"}</span>
    </div>
  );
}
export default LeadingFalseSymbol;
