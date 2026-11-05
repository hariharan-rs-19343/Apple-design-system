// figma node: 6445:1772 _Wheels (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "state=" + __venc(p.state);

export function WatchWheels(_p = {}) {
  const props = { ..._p, before: _p.before ?? "1", state: _p.state ?? "default", current: _p.current ?? "2", next: _p.next ?? "3" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 100,
      height: 100,
      overflow: "hidden",
      borderRadius: 13,
      boxShadow: "inset 0 0 0 1px rgb(128,128,128)",
      display: "flex",
      flexDirection: "column",
      padding: "0px 5px 0px 5px",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 100,
        height: 100,
        borderRadius: 13,
        background: "linear-gradient(180deg, rgba(0,0,0,0) 0.00%, rgb(0,0,0) 33.00%, rgb(0,0,0) 67.00%, rgba(0,0,0,0) 100.00%)",
      }} />
      <span style={{
        position: "relative",
        fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: "calc(var(--watch-picker-font-size-wheel) * 1px)",
        whiteSpace: "nowrap",
        lineHeight: "15px",
        color: "var(--watch-colors-white-fff)",
        flexShrink: 0,
      }}>{props.before}</span>
      <span style={{
        position: "relative",
        fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: "calc(var(--watch-picker-font-size-wheel) * 1px)",
        whiteSpace: "nowrap",
        lineHeight: "15px",
        color: "var(--watch-colors-white-fff)",
        flexShrink: 0,
      }}>{props.current}</span>
      <span style={{
        position: "relative",
        fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: "calc(var(--watch-picker-font-size-wheel) * 1px)",
        whiteSpace: "nowrap",
        lineHeight: "15px",
        color: "var(--watch-colors-white-fff)",
        flexShrink: 0,
      }}>{props.next}</span>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 100,
      height: 100,
      borderRadius: 13,
      boxShadow: "inset 0 0 0 1.500px var(--watch-colors-green)",
      display: "flex",
      flexDirection: "column",
      padding: "0px 5px 0px 5px",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 100,
        height: 100,
        borderRadius: 13,
        background: "linear-gradient(180deg, rgba(0,0,0,0) 0.00%, rgb(0,0,0) 33.00%, rgb(0,0,0) 67.00%, rgba(0,0,0,0) 100.00%)",
      }} />
      <span style={{
        position: "relative",
        fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: "calc(var(--watch-picker-font-size-wheel) * 1px)",
        whiteSpace: "nowrap",
        lineHeight: "15px",
        color: "var(--watch-colors-white-fff)",
        flexShrink: 0,
      }}>{props.before}</span>
      <span style={{
        position: "relative",
        fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: "calc(var(--watch-picker-font-size-wheel) * 1px)",
        whiteSpace: "nowrap",
        lineHeight: "15px",
        color: "var(--watch-colors-white-fff)",
        flexShrink: 0,
      }}>{props.current}</span>
      <span style={{
        position: "relative",
        fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: "calc(var(--watch-picker-font-size-wheel) * 1px)",
        whiteSpace: "nowrap",
        lineHeight: "15px",
        color: "var(--watch-colors-white-fff)",
        flexShrink: 0,
      }}>{props.next}</span>
    </div>
  );
  const __impls = {
    // figma: State=Default
    "state=default": __body0,
    // figma: State=Focused
    "state=focused": __body1,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default WatchWheels;
