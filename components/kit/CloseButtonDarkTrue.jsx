// figma node: 61:67579 _Close Button/Dark/True
export function CloseButtonDarkTrue(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 30,
      height: 30,
      borderRadius: 1000,
      background: "linear-gradient(rgba(194,194,194,0.5),rgba(194,194,194,0.5)), linear-gradient(rgba(127,127,127,0.2),rgba(127,127,127,0.2))",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 590,
        fontSize: 16,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "21px",
        color: "rgb(51,51,51)",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>{props.text1 ?? "􀅾"}</span>
    </div>
  );
}
export default CloseButtonDarkTrue;
