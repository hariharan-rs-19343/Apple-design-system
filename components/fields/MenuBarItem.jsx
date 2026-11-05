// figma node: 5413:10045 _Menu bar item (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "state=" + __venc(p.state);

export function MenuBarItem(_p = {}) {
  const props = { ..._p, state: _p.state ?? "deselected", menuName: _p.menuName ?? "Menu" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "6px 0px 6px 0px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 100,
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "2px 11px 1px 11px",
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
          fontWeight: 510,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "var(--labels-primary)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.menuName}</span>
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "6px 0px 6px 0px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 100,
        backgroundColor: "rgba(118,118,128,0.12)",
        boxShadow: "0px 2px 16px 0px rgba(0,0,0,0.08)",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "2px 11px 1px 11px",
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
          fontWeight: 510,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgb(0,0,0)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.menuName}</span>
      </div>
    </div>
  );
  const __impls = {
    // figma: State=Deselected
    "state=deselected": __body0,
    // figma: State=Selected
    "state=selected": __body1,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default MenuBarItem;
