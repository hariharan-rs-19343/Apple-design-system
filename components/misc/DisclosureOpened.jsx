// figma node: 5848:30625 _Disclosure - Opened
export function DisclosureOpened(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 14,
      height: 20,
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 14,
        height: 20,
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 700,
        fontSize: 15,
        textAlign: "center",
        lineHeight: "20px",
        color: "var(--labels-vibrant-primary)",
      }}>{props.text1 ?? "􀆈"}</span>
    </div>
  );
}
export default DisclosureOpened;
