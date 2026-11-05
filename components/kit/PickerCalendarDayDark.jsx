// figma node: 495:48907 _Picker/Calendar/Day/Dark (5 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "state=" + __venc(p.state);

export function PickerCalendarDayDark(_p = {}) {
  const props = { ..._p, state: _p.state ?? "default", date: _p.date ?? "1" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 44,
      height: 44,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 44,
        height: 44,
        opacity: 0.24,
        borderRadius: "50%",
        backgroundColor: "rgb(10,132,255)",
      }} />
      <span style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 44,
        height: 44,
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 510,
        fontSize: 24,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "25px",
        color: "rgb(10,132,255)",
      }}>{props.date}</span>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 44,
      height: 44,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 44,
        height: 44,
        borderRadius: "50%",
        backgroundColor: "rgb(0,122,255)",
      }} />
      <span style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 44,
        height: 44,
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 510,
        fontSize: 24,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "25px",
        color: "rgb(255,255,255)",
      }}>{props.date}</span>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 44,
      height: 44,
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 44,
        height: 44,
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 20,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "25px",
        letterSpacing: "-0.400px",
        color: "rgb(0,122,255)",
      }}>{props.date}</span>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 44,
      height: 44,
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 44,
        height: 44,
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 20,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "25px",
        letterSpacing: "-0.400px",
        color: "rgb(0,0,0)",
      }}>{props.date}</span>
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: 44,
      height: 44,
      position: "relative",
      ...props.style,
    }} />
  );
  const __impls = {
    // figma: State=Selected
    "state=selected": __body0,
    // figma: State=Current and Selected
    "state=current and selected": __body1,
    // figma: State=Current
    "state=current": __body2,
    // figma: State=Default
    "state=default": __body3,
    // figma: State=Null
    "state=null": __body4,
  };
  return (__impls[__vkey(props)] ?? __body3)();
}
export default PickerCalendarDayDark;
