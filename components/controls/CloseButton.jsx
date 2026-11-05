// figma node: 533:17695 _Close Button (3 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "mode=" + __venc(p.mode);

export function CloseButton(_p = {}) {
  const props = { ..._p, mode: _p.mode ?? "light" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 30,
      height: 30,
      borderRadius: 1000,
      background: "linear-gradient(rgba(194,194,194,0.5),rgba(194,194,194,0.5)), linear-gradient(rgba(127,127,127,0.2),rgba(127,127,127,0.2))",
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
        fontSize: 16,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "30px",
        color: "rgba(235,235,245,0.6)",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>{props.text1 ?? "􀅾"}</span>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 30,
      height: 30,
      borderRadius: 1000,
      background: "linear-gradient(rgba(61,61,61,0.5),rgba(61,61,61,0.5)), linear-gradient(rgba(127,127,127,0.2),rgba(127,127,127,0.2))",
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
        fontSize: 16,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "30px",
        color: "rgba(235,235,245,0.6)",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>{props.text1 ?? "􀅾"}</span>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 30,
      height: 30,
      borderRadius: 1000,
      background: "rgba(120,120,128,0.16)",
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
        fontSize: 16,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "30px",
        color: "rgba(60,60,67,0.6)",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>{props.text1 ?? "􀅾"}</span>
    </div>
  );
  // Figma uses plus-darker/plus-lighter blend modes here; these flat values approximate them.
  const __impls = {
    // figma: Mode=Dark Elevated
    "mode=dark elevated": __body0,
    // figma: Mode=Dark
    "mode=dark": __body1,
    // figma: Mode=Light
    "mode=light": __body2,
  };
  return (__impls[__vkey(props)] ?? __body2)();
}
export default CloseButton;
