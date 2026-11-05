// figma node: 515:64011 _Keys/iPhone - Lowercase/Dark
export function KeysIPhoneLowercaseDark(_p = {}) {
  const props = { ..._p, key: _p.key ?? "q" };
  return (
    <div className={props.className} style={{
      width: 32,
      height: 42,
      borderRadius: 4.599999904632568,
      backgroundColor: "rgba(255,255,255,0.3)",
      boxShadow: "0px 1px 0px 0px rgba(0,0,0,0.4)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 0,
        top: -6,
        width: 32,
        height: 48,
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 25,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "28px",
        color: "rgb(255,255,255)",
      }}>{props.key}</span>
    </div>
  );
}
export default KeysIPhoneLowercaseDark;
