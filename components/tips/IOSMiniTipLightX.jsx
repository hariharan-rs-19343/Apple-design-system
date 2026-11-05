// figma node: 0:877 iOS Mini Tip / Light / x / Content / Text Only
export function IOSMiniTipLightX(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 200,
      height: 74,
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 0,
        top: 22,
        width: 200,
        height: 60,
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 15,
        lineHeight: "20px",
        color: "rgba(60,60,67,0.6)",
      }}>{props.text1 ?? "Sed posuere consectetur est at lobortis. Nulla vitae elit."}</span>
      <span style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 175,
        height: 22,
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 590,
        fontSize: 17,
        lineHeight: "22px",
        color: "rgb(0,0,0)",
      }}>{props.text2 ?? "This Is The Title"}</span>
    </div>
  );
}
export default IOSMiniTipLightX;
