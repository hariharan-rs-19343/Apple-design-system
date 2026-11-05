// figma node: 128:81134 _Keys - iPad - Command (4 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "mode=" + __venc(p.mode) + '|' + "align=" + __venc(p.align);

export function KeysIPadCommand(_p = {}) {
  const props = { ..._p, mode: _p.mode ?? "light", align: _p.align ?? "left", label: _p.label ?? "􀅂" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 105,
      height: 74,
      borderRadius: 8.5,
      backgroundColor: "rgba(237,237,237,0.17)",
      display: "flex",
      flexDirection: "row",
      padding: "12px 13px 12px 13px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 19.5,
        textAlign: "right",
        whiteSpace: "nowrap",
        lineHeight: "100%",
        letterSpacing: "-0.400px",
        color: "rgb(255,255,255)",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 105,
      height: 74,
      borderRadius: 8.5,
      backgroundColor: "rgba(237,237,237,0.17)",
      display: "flex",
      flexDirection: "row",
      padding: "12px 13px 12px 13px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 19.5,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        letterSpacing: "-0.400px",
        color: "rgb(255,255,255)",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 105,
      height: 74,
      borderRadius: 8.5,
      background: "linear-gradient(rgba(255,255,255,0.67),rgba(255,255,255,0.67)), linear-gradient(rgb(25,25,25),rgb(25,25,25))",
      display: "flex",
      flexDirection: "row",
      padding: "12px 13px 12px 13px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 19.5,
        textAlign: "right",
        whiteSpace: "nowrap",
        lineHeight: "100%",
        letterSpacing: "-0.400px",
        color: "var(--labels-primary)",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 105,
      height: 74,
      borderRadius: 8.5,
      background: "linear-gradient(rgba(255,255,255,0.67),rgba(255,255,255,0.67)), linear-gradient(rgb(25,25,25),rgb(25,25,25))",
      display: "flex",
      flexDirection: "row",
      padding: "12px 13px 12px 13px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 19.5,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        letterSpacing: "-0.400px",
        color: "var(--labels-primary)",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __impls = {
    // figma: Mode=Dark, Align=Right
    "mode=dark|align=right": __body0,
    // figma: Mode=Dark, Align=Left
    "mode=dark|align=left": __body1,
    // figma: Mode=Light, Align=Right
    "mode=light|align=right": __body2,
    // figma: Mode=Light, Align=Left
    "mode=light|align=left": __body3,
  };
  return (__impls[__vkey(props)] ?? __body3)();
}
export default KeysIPadCommand;
