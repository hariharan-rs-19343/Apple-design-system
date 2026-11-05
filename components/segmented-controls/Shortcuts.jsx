// figma node: 5502:759 _Shortcuts (3 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "mode=" + __venc(p.mode);

export function Shortcuts(_p = {}) {
  const props = { ..._p, showControl: _p.showControl ?? true, mode: _p.mode ?? "light", letter: _p.letter ?? "A", showOption: _p.showOption ?? true, showCommand: _p.showCommand ?? true, showShift: _p.showShift ?? true };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 78,
      display: "flex",
      flexDirection: "row",
      gap: 1,
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
        fontWeight: 510,
        fontSize: 15,
        textAlign: "center",
        lineHeight: "20px",
        color: "var(--labels-vibrant-secondary)",
        flexShrink: 0,
        alignSelf: "stretch",
        whiteSpace: "nowrap",
      }}>{props.text1 ?? "􀆍"}</span>
      )}
      {props.showOption && (
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 510,
        fontSize: 15,
        textAlign: "center",
        lineHeight: "20px",
        color: "var(--labels-vibrant-secondary)",
        flexShrink: 0,
        alignSelf: "stretch",
        whiteSpace: "nowrap",
      }}>{props.text2 ?? "􀆕"}</span>
      )}
      {props.showShift && (
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 510,
        fontSize: 15,
        textAlign: "center",
        lineHeight: "20px",
        color: "var(--labels-vibrant-secondary)",
        flexShrink: 0,
        alignSelf: "stretch",
        whiteSpace: "nowrap",
      }}>{props.text3 ?? "􀆝"}</span>
      )}
      {props.showCommand && (
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 510,
        fontSize: 15,
        textAlign: "center",
        lineHeight: "20px",
        color: "var(--labels-vibrant-secondary)",
        flexShrink: 0,
        alignSelf: "stretch",
        whiteSpace: "nowrap",
      }}>{props.text4 ?? "􀆔"}</span>
      )}
      <span style={{
        position: "relative",
        width: 14,
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 510,
        fontSize: 15,
        textAlign: "center",
        lineHeight: "20px",
        color: "var(--labels-vibrant-secondary)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.letter}</span>
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
export default Shortcuts;
