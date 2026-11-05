// figma node: 5735:64660 _Tab Bar Button - iPad - Text (4 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "selected=" + __venc(p.selected) + '|' + "mode=" + __venc(p.mode);

export function TabBarButtonIPadText(_p = {}) {
  const props = { ..._p, selected: _p.selected ?? true, mode: _p.mode ?? "dark", label: _p.label ?? "Label" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "8px 18px 8px 18px",
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
        fontWeight: 510,
        fontSize: 15,
        textAlign: "center",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "20px",
        letterSpacing: "-0.230px",
        color: "var(--labels-vibrant-controls-primary)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 100,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "8px 18px 8px 18px",
      justifyContent: "center",
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
        width: 77,
        height: 36,
        borderRadius: 100,
        backgroundColor: "var(--fills-vibrant-tertiary)",
      }} />
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 700,
        fontSize: 15,
        textAlign: "center",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "20px",
        letterSpacing: "-0.230px",
        color: "var(--miscellaneous-tab-bar-selection)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "8px 18px 8px 18px",
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
        fontWeight: 510,
        fontSize: 15,
        textAlign: "center",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "20px",
        letterSpacing: "-0.230px",
        color: "rgb(138,138,138)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 100,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "8px 18px 8px 18px",
      justifyContent: "center",
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
        width: 77,
        height: 36,
        borderRadius: 100,
        backgroundColor: "rgb(18,18,18)",
      }} />
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 700,
        fontSize: 15,
        textAlign: "center",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "20px",
        letterSpacing: "-0.230px",
        color: "rgb(255,255,255)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __impls = {
    // figma: Selected=False, Mode=Light
    "selected=false|mode=light": __body0,
    // figma: Selected=True, Mode=Light
    "selected=true|mode=light": __body1,
    // figma: Selected=False, Mode=Dark
    "selected=false|mode=dark": __body2,
    // figma: Selected=True, Mode=Dark
    "selected=true|mode=dark": __body3,
  };
  return (__impls[__vkey(props)] ?? __body3)();
}
export default TabBarButtonIPadText;
