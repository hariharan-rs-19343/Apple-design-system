// figma node: 164:9698 _Menu Bar / Menu Item / Dark (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "selected=" + __venc(p.selected);

export function MacMenuBarMenuItemDark(_p = {}) {
  const props = { ..._p, menuItem: _p.menuItem ?? "Item", selected: _p.selected ?? false };
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
      <svg width={59} height={25} viewBox="0 0 59 25" fill="none" style={{
        position: "absolute",
        left: -4,
        top: -1,
        width: 59,
        height: 25,
        overflow: "hidden",
        borderRadius: 100,
        backdropFilter: "blur(60px)",
        color: "rgba(255,255,255,0.08)",
      }}>
        <path d={"M 0 12.5 C 0 5.596 5.596 0 12.5 0 L 46.5 0 C 53.404 0 59 5.596 59 12.5 L 59 12.5 C 59 19.404 53.404 25 46.5 25 L 12.5 25 C 5.596 25 0 19.404 0 12.5 L 0 12.5 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
      <span style={{
        position: "relative",
        fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 590,
        fontSize: 13,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "16px",
        color: "rgb(255,255,255)",
        flexShrink: 0,
        alignSelf: "stretch",
        filter: "drop-shadow(0px 1px 6px rgb(204,204,204))",
      }}>{props.menuItem}</span>
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
        fontWeight: 590,
        fontSize: 13,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "16px",
        color: "rgb(255,255,255)",
        flexShrink: 0,
        alignSelf: "stretch",
        filter: "drop-shadow(0px 1px 6px rgb(204,204,204))",
      }}>{props.menuItem}</span>
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
export default MacMenuBarMenuItemDark;
