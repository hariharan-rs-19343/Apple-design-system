// figma node: 5522:11873 _Label - Symbol - Default (4 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "mode=" + __venc(p.mode) + '|' + "state=" + __venc(p.state);

export function LabelSymbolDefault(_p = {}) {
  const props = { ..._p, mode: _p.mode ?? "light", state: _p.state ?? "default", label: _p.label ?? "􀆅" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 36,
      borderRadius: 100,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 590,
        fontSize: 19,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "rgb(64,64,64)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 36,
      borderRadius: 100,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 590,
        fontSize: 19,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "rgb(245,245,245)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 36,
      borderRadius: 100,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 590,
        fontSize: 19,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "var(--labels-vibrant-controls-tertiary)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 36,
      borderRadius: 100,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 590,
        fontSize: 19,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "var(--labels-vibrant-controls-primary)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __impls = {
    // figma: Mode=Dark,State=Disabled
    "mode=dark|state=disabled": __body0,
    // figma: Mode=Dark,State=Default
    "mode=dark|state=default": __body1,
    // figma: Mode=Light,State=Disabled
    "mode=light|state=disabled": __body2,
    // figma: Mode=Light,State=Default
    "mode=light|state=default": __body3,
  };
  return (__impls[__vkey(props)] ?? __body3)();
}
export default LabelSymbolDefault;
