// figma node: 5713:49111 _Edit Menu Item (4 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "mode=" + __venc(p.mode) + '|' + "state=" + __venc(p.state);

export function EditMenuItem(_p = {}) {
  const props = { ..._p, mode: _p.mode ?? "light", state: _p.state ?? "default", item: _p.item ?? "Item" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      padding: "0px 16px 0px 0px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 1,
        backgroundColor: "var(--fills-vibrant-primary)",
        flexShrink: 0,
        alignSelf: "stretch",
      }} />
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 15,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        letterSpacing: "-0.600px",
        color: "var(--accents-red)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.item}</span>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      padding: "0px 16px 0px 0px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 1,
        backgroundColor: "rgb(51,51,51)",
        flexShrink: 0,
        alignSelf: "stretch",
      }} />
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 15,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        letterSpacing: "-0.600px",
        color: "rgb(255,66,69)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.item}</span>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      padding: "0px 16px 0px 0px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 1,
        backgroundColor: "var(--fills-vibrant-primary)",
        flexShrink: 0,
        alignSelf: "stretch",
      }} />
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 15,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        letterSpacing: "-0.600px",
        color: "var(--labels-vibrant-primary)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.item}</span>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      padding: "0px 16px 0px 0px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 1,
        backgroundColor: "rgb(51,51,51)",
        flexShrink: 0,
        alignSelf: "stretch",
      }} />
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 15,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        letterSpacing: "-0.600px",
        color: "rgb(245,245,245)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.item}</span>
    </div>
  );
  const __impls = {
    // figma: Mode=Light, State=Destructive
    "mode=light|state=destructive": __body0,
    // figma: Mode=Dark, State=Destructive
    "mode=dark|state=destructive": __body1,
    // figma: Mode=Light, State=Default
    "mode=light|state=default": __body2,
    // figma: Mode=Dark, State=Default
    "mode=dark|state=default": __body3,
  };
  return (__impls[__vkey(props)] ?? __body2)();
}
export default EditMenuItem;
