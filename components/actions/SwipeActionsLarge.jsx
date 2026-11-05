// figma node: 27:68008 _Swipe Actions/Large
export function SwipeActionsLarge(_p = {}) {
  const props = { ..._p, symbol: _p.symbol ?? "􀓞" };
  return (
    <div className={props.className} style={{
      width: 52,
      height: 52,
      borderRadius: 100,
      backgroundColor: "var(--accents-orange)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 52,
        height: 52,
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 17,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "var(--grays-white)",
      }}>{props.symbol}</span>
    </div>
  );
}
export default SwipeActionsLarge;
