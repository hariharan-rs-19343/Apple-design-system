// figma node: 50:63907 _Day (5 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "state=" + __venc(p.state);

export function Day(_p = {}) {
  const props = { ..._p, date: _p.date ?? "1", state: _p.state ?? "default" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 44,
      height: 44,
      borderRadius: 100,
      backgroundColor: "var(--accents-blue)",
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
        fontWeight: 510,
        fontSize: 24,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "25px",
        color: "var(--grays-white)",
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
        opacity: 0.12,
        borderRadius: "50%",
        backgroundColor: "var(--accents-blue)",
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
        color: "var(--accents-blue)",
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
        lineHeight: "100%",
        color: "var(--accents-blue)",
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
        lineHeight: "100%",
        color: "var(--labels-primary)",
      }}>{props.date}</span>
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: 40,
      height: 44,
      position: "relative",
      ...props.style,
    }} />
  );
  const __impls = {
    // figma: State=Current and Selected
    "state=current and selected": __body0,
    // figma: State=Selected
    "state=selected": __body1,
    // figma: State=Current
    "state=current": __body2,
    // figma: State=Default
    "state=default": __body3,
    // figma: State=Null
    "state=null": __body4,
  };
  return (__impls[__vkey(props)] ?? __body3)();
}
export default Day;
