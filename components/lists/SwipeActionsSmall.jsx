// figma node: 27:68007 _Swipe Actions/Small
export function SwipeActionsSmall(_p = {}) {
  const props = { ..._p, label: _p.label ?? "Delete", symbol: _p.symbol ?? "􀓞" };
  return (
    <div className={props.className} style={{
      width: 50,
      height: 68,
      borderRadius: 100,
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 0,
        top: 53,
        width: 49,
        height: 20,
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 510,
        fontSize: 15,
        textAlign: "center",
        lineHeight: "20px",
        color: "rgba(60,60,67,0.6)",
      }}>{props.label}</span>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 50,
        height: 50,
        borderRadius: 100,
        backgroundColor: "var(--accents-orange)",
      }}>
        <span style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 50,
          height: 50,
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 17,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "22px",
          color: "var(--grays-white)",
        }}>{props.symbol}</span>
      </div>
    </div>
  );
}
export default SwipeActionsSmall;
