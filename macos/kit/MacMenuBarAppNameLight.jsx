// figma node: 121:13178 _Menu Bar / App Name / Light (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "selected=" + __venc(p.selected);

export function MacMenuBarAppNameLight(_p = {}) {
  const props = { ..._p, appName: _p.appName ?? "App Name", selected: _p.selected ?? false };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 4,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "4px 11px 4px 11px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <svg width={98} height={25} viewBox="0 0 98 25" fill="none" style={{
        position: "absolute",
        left: -4,
        top: -1,
        width: 98,
        height: 25,
        overflow: "hidden",
        borderRadius: 100,
        backdropFilter: "blur(60px)",
        color: "rgba(0,0,0,0.08)",
      }}>
        <path d={"M 0 12.5 C 0 5.596 5.596 0 12.5 0 L 85.5 0 C 92.404 0 98 5.596 98 12.5 L 98 12.5 C 98 19.404 92.404 25 85.5 25 L 12.5 25 C 5.596 25 0 19.404 0 12.5 L 0 12.5 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
      <span style={{
        position: "relative",
        fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 700,
        fontSize: 13,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "16px",
        color: "rgb(0,0,0)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.appName}</span>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 4,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "4px 11px 4px 11px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 700,
        fontSize: 13,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "16px",
        color: "rgb(0,0,0)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.appName}</span>
    </div>
  );
  const __impls = {
    // figma: Selected=True
    "selected=true": __body0,
    // figma: Selected=False
    "selected=false": __body1,
  };
  return (__impls[__vkey(props)] ?? __body1)();
}
export default MacMenuBarAppNameLight;
