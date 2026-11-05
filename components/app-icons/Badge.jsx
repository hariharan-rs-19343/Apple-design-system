// figma node: 5592:39416 _Badge
export function Badge(_p = {}) {
  const props = { ..._p, count: _p.count ?? "67" };
  return (
    <div className={props.className} style={{
      width: 34,
      minWidth: 24,
      borderRadius: 100,
      backgroundColor: "var(--accents-red)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "2.500px 7px 2.500px 7px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        textAlign: "center",
        lineHeight: "19px",
        color: "rgb(255,255,255)",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>{props.count}</span>
    </div>
  );
}
export default Badge;
