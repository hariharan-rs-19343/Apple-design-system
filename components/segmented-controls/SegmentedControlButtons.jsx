// figma node: 6:57037 _Segmented Control / Buttons (4 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "state=" + __venc(p.state) + '|' + "mode=" + __venc(p.mode);

export function SegmentedControlButtons(_p = {}) {
  const props = { ..._p, state: _p.state ?? "selected", mode: _p.mode ?? "dark", label: _p.label ?? "Label", showSeparator: _p.showSeparator ?? true };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 7,
      backgroundColor: "rgb(99,99,102)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "3px 10.500px 3px 10.500px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 590,
        fontSize: 13,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "18px",
        color: "rgb(0,0,0)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 56,
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "3px 7px 3px 1px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showSeparator && (
      <div style={{
        position: "relative",
        width: 1,
        height: 12,
        opacity: 0.3,
        borderRadius: 0.5,
        backgroundColor: "rgb(142,142,147)",
        flexShrink: 0,
      }} />
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 13,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "18px",
        color: "rgb(255,255,255)",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 56,
      borderRadius: 7,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "0 0 0 0.500px rgba(0,0,0,0.04), 0px 3px 8px 0px rgba(0,0,0,0.12), 0px 3px 1px 0px rgba(0,0,0,0.04)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "3px 10px 3px 10px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 590,
        fontSize: 13,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "18px",
        color: "rgb(0,0,0)",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 56,
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "3px 7px 3px 1px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showSeparator && (
      <div style={{
        position: "relative",
        width: 1,
        height: 12,
        opacity: 0.3,
        borderRadius: 0.5,
        backgroundColor: "rgb(142,142,147)",
        flexShrink: 0,
      }} />
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 13,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "18px",
        color: "rgb(0,0,0)",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __impls = {
    // figma: State=Selected, Mode=Dark
    "state=selected|mode=dark": __body0,
    // figma: State=Default, Mode=Dark
    "state=default|mode=dark": __body1,
    // figma: State=Selected, Mode=Light
    "state=selected|mode=light": __body2,
    // figma: State=Default, Mode=Light
    "state=default|mode=light": __body3,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default SegmentedControlButtons;
