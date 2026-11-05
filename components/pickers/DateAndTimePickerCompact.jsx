// figma node: 533:15597 Date and Time Picker - Compact -Collapsed (3 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "mode=" + __venc(p.mode) + '|' + "type=" + __venc(p.type);

export function DateAndTimePickerCompact(_p = {}) {
  const props = { ..._p, mode: _p.mode ?? "light", type: _p.type ?? "date", month: _p.month ?? "Jun 20,", year: _p.year ?? "2023", time: _p.time ?? "9:41 AM" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 6,
      backgroundColor: "rgba(118,118,128,0.12)",
      display: "flex",
      flexDirection: "row",
      padding: "6px 11px 6px 11px",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 17,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "rgb(0,122,255)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.time}</span>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 6,
      backgroundColor: "rgba(118,118,128,0.12)",
      display: "flex",
      flexDirection: "row",
      gap: 5,
      padding: "6px 11px 6px 11px",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 17,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "rgb(0,122,255)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.month}</span>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 17,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "rgb(0,122,255)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.year}</span>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 6,
      display: "flex",
      flexDirection: "row",
      gap: 6,
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 6,
        backgroundColor: "rgba(118,118,128,0.12)",
        display: "flex",
        flexDirection: "row",
        gap: 5,
        padding: "6px 11px 6px 11px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 17,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "22px",
          color: "rgb(0,122,255)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.month}</span>
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 17,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "22px",
          color: "rgb(0,122,255)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.year}</span>
      </div>
      <div style={{
        position: "relative",
        borderRadius: 6,
        backgroundColor: "rgba(118,118,128,0.12)",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "6px 11px 6px 11px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 17,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "22px",
          color: "rgb(0,122,255)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.time}</span>
      </div>
    </div>
  );
  const __impls = {
    // figma: Mode=Light, Type=Time
    "mode=light|type=time": __body0,
    // figma: Mode=Light, Type=Date
    "mode=light|type=date": __body1,
    // figma: Mode=Light, Type=Date and Time
    "mode=light|type=date and time": __body2,
  };
  return (__impls[__vkey(props)] ?? __body1)();
}
export default DateAndTimePickerCompact;
