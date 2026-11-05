// figma node: 495:51274 _Text Field/Dark (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "state=" + __venc(p.state);

export function TextFieldDark(_p = {}) {
  const props = { ..._p, state: _p.state ?? "focused", showCursor: _p.showCursor ?? true, text: _p.text ?? "Value" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 62,
      height: 26,
      borderRadius: 5,
      backgroundColor: "rgb(0,0,0)",
      boxShadow: "inset 0 0 0 0.250px rgba(235,235,245,0.3), 0 0 0 0.250px rgba(235,235,245,0.3)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        display: "flex",
        flexDirection: "row",
        gap: 1,
        padding: "2px 6px 2px 6px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 17,
          whiteSpace: "nowrap",
          lineHeight: "22px",
          letterSpacing: "-0.400px",
          color: "rgb(255,255,255)",
          flexShrink: 0,
        }}>{props.text}</span>
        {props.showCursor && (
        <div style={{
          position: "relative",
          width: 2,
          height: 21,
          borderRadius: 10,
          backgroundColor: "rgb(10,132,255)",
          flexShrink: 0,
        }} />
        )}
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 59,
      height: 26,
      borderRadius: 5,
      backgroundColor: "rgb(0,0,0)",
      boxShadow: "inset 0 0 0 0.250px rgba(235,235,245,0.3), 0 0 0 0.250px rgba(235,235,245,0.3)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 56,
        display: "flex",
        flexDirection: "row",
        gap: -2,
        padding: "2px 6px 2px 6px",
        alignItems: "center",
        flexWrap: "nowrap",
        isolation: "isolate",
        boxSizing: "border-box",
      }}>
        {props.showCursor && (
        <div style={{
          position: "relative",
          width: 2,
          height: 21,
          borderRadius: 10,
          backgroundColor: "rgb(10,132,255)",
          zIndex: 2,
          flexShrink: 0,
        }} />
        )}
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 17,
          whiteSpace: "nowrap",
          lineHeight: "22px",
          letterSpacing: "-0.400px",
          color: "rgba(235,235,245,0.3)",
          zIndex: 1,
          flexShrink: 0,
        }}>{props.text}</span>
      </div>
    </div>
  );
  const __impls = {
    // figma: State=Text Entered
    "state=text entered": __body0,
    // figma: State=Focused
    "state=focused": __body1,
  };
  return (__impls[__vkey(props)] ?? __body1)();
}
export default TextFieldDark;
