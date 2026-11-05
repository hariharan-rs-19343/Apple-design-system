// figma node: 533:9607 _Additional Notifications (3 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "mode=" + __venc(p.mode);

export function AdditionalNotifications(_p = {}) {
  const props = { ..._p, mode: _p.mode ?? "light", text: _p.text ?? "+6 from Reminders, Notes, and Mail" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 174,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 510,
        fontSize: 10,
        textAlign: "right",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "100%",
        color: "rgba(127,127,127,0.5)",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>{props.text}</span>
    </div>
  );
  const __impls = {
    // figma: Mode=Dark Elevated
    "mode=dark elevated": __body0,
    // figma: Mode=Dark
    "mode=dark": __body0,
    // figma: Mode=Light
    "mode=light": __body0,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default AdditionalNotifications;
