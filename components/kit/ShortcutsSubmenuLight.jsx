// figma node: 5502:760 _Shortcuts/Submenu/Light
export function ShortcutsSubmenuLight(_p = {}) {
  const props = { ..._p, showControl: _p.showControl ?? true, letter: _p.letter ?? "A", showOption: _p.showOption ?? true, showCommand: _p.showCommand ?? true, showShift: _p.showShift ?? true };
  return (
    <div className={props.className} style={{
      width: 14,
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.showControl && (
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 700,
        fontSize: 15,
        textAlign: "center",
        lineHeight: "20px",
        color: "var(--labels-vibrant-secondary)",
        flexShrink: 0,
        alignSelf: "stretch",
        whiteSpace: "nowrap",
      }}>{props.text1 ?? "􀆊"}</span>
      )}
    </div>
  );
}
export default ShortcutsSubmenuLight;
