// figma node: 6415:919 Toggle (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "state=" + __venc(p.state);

export function WatchToggle(_p = {}) {
  const props = { ..._p, state: _p.state ?? "on", label: _p.label ?? "Label" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "calc(var(--watch-screen-width) * 1px)",
      display: "flex",
      flexDirection: "row",
      padding: "0px 3px 0px 3px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--watch-margin-lr-safe-area) * 1px)",
      paddingRight: "calc(var(--watch-margin-lr-safe-area) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        minHeight: 43.5,
        borderRadius: 8.5,
        background: "rgba(242,244,252,0.16)", backdropFilter: "blur(16px) saturate(180%)", WebkitBackdropFilter: "blur(16px) saturate(180%)", boxShadow: "inset 0 1px 0.5px rgba(255,255,255,0.24), inset 0 -0.5px 0.5px rgba(255,255,255,0.08), inset 0 0 0 0.5px rgba(255,255,255,0.1)",
        backdropFilter: "blur(25px)",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "4px 7.500px 4.500px 7px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--watch-list-l-r-inset) * 1px)",
        paddingTop: "calc(var(--watch-list-margin-top) * 1px)",
        paddingRight: "calc(var(--watch-toggle-margin-r) * 1px)",
        paddingBottom: "calc(var(--watch-list-margin-bottom) * 1px)",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: "calc(var(--watch-list-font-size) * 1px)",
          lineHeight: "18px",
          color: "var(--watch-text-colors-primary)",
          flexGrow: 1,
        }}>{props.label}</span>
        <div style={{
          position: "relative",
          width: 36,
          height: 22,
          borderRadius: 100,
          backgroundColor: "rgba(242,244,252,0.56)",
          display: "flex",
          flexDirection: "row",
          padding: "1px 1px 1px 1px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <svg width={20} viewBox="0 0 20 20" fill="none" style={{
            position: "relative",
            width: 20,
            borderRadius: 100,
            flexShrink: 0,
            alignSelf: "stretch",
            color: "rgb(255,255,255)",
          }}>
            <path d={"M 0 10 C 0 4.477 4.477 0 10 0 L 10 0 C 15.523 0 20 4.477 20 10 L 20 10 C 20 15.523 15.523 20 10 20 L 10 20 C 4.477 20 0 15.523 0 10 L 0 10 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "calc(var(--watch-screen-width) * 1px)",
      display: "flex",
      flexDirection: "row",
      padding: "0px 3px 0px 3px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--watch-margin-lr-safe-area) * 1px)",
      paddingRight: "calc(var(--watch-margin-lr-safe-area) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        minHeight: 43.5,
        borderRadius: 8.5,
        background: "rgba(242,244,252,0.16)", backdropFilter: "blur(16px) saturate(180%)", WebkitBackdropFilter: "blur(16px) saturate(180%)", boxShadow: "inset 0 1px 0.5px rgba(255,255,255,0.24), inset 0 -0.5px 0.5px rgba(255,255,255,0.08), inset 0 0 0 0.5px rgba(255,255,255,0.1)",
        backdropFilter: "blur(25px)",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "4px 7.500px 4.500px 7px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--watch-list-l-r-inset) * 1px)",
        paddingTop: "calc(var(--watch-list-margin-top) * 1px)",
        paddingRight: "calc(var(--watch-toggle-margin-r) * 1px)",
        paddingBottom: "calc(var(--watch-list-margin-bottom) * 1px)",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: "calc(var(--watch-list-font-size) * 1px)",
          lineHeight: "18px",
          color: "var(--watch-text-colors-primary)",
          flexGrow: 1,
        }}>{props.label}</span>
        <div style={{
          position: "relative",
          width: 36,
          height: 22,
          borderRadius: 100,
          backgroundColor: "var(--watch-colors-green)",
          display: "flex",
          flexDirection: "row",
          padding: "1px 1px 1px 1px",
          justifyContent: "flex-end",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <svg width={20} viewBox="0 0 20 20" fill="none" style={{
            position: "relative",
            width: 20,
            borderRadius: 100,
            flexShrink: 0,
            alignSelf: "stretch",
            color: "rgb(255,255,255)",
          }}>
            <path d={"M 0 10 C 0 4.477 4.477 0 10 0 L 10 0 C 15.523 0 20 4.477 20 10 L 20 10 C 20 15.523 15.523 20 10 20 L 10 20 C 4.477 20 0 15.523 0 10 L 0 10 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
    </div>
  );
  const __impls = {
    // figma: State=Off
    "state=off": __body0,
    // figma: State=On
    "state=on": __body1,
  };
  return (__impls[__vkey(props)] ?? __body1)();
}
export default WatchToggle;
