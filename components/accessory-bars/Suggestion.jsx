// figma node: 6334:14398 _Suggestion (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "mode=" + __venc(p.mode);

export function Suggestion(_p = {}) {
  const props = { ..._p, mode: _p.mode ?? "light", email: _p.email ?? "Smith.Trev@icloud.com" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 402,
      height: 52,
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "0px 16px 0px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: -2.5,
        padding: "0px 0px 1px 0px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          textAlign: "center",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: "20px",
          letterSpacing: "-0.150px",
          color: "rgb(245,245,245)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "password for this website — Passwords"}</span>
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 16,
          textAlign: "center",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: "20px",
          letterSpacing: "-0.320px",
          color: "rgb(245,245,245)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.email}</span>
      </div>
      <div style={{
        position: "relative",
        width: 1,
        height: 24,
        borderRadius: 10,
        backgroundColor: "rgb(51,51,51)",
        flexShrink: 0,
      }} />
      <span style={{
        position: "relative",
        opacity: 0.65,
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 590,
        fontSize: 19,
        textAlign: "center",
        lineHeight: "100%",
        letterSpacing: "-0.320px",
        color: "rgb(245,245,245)",
        flexShrink: 0,
        whiteSpace: "nowrap",
      }}>{props.text2 ?? "􀟖"}</span>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 402,
      height: 52,
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "0px 16px 0px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: -2.5,
        padding: "0px 0px 1px 0px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          textAlign: "center",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: "20px",
          letterSpacing: "-0.150px",
          color: "var(--labels-vibrant-primary)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "password for this website — Passwords"}</span>
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 16,
          textAlign: "center",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: "20px",
          letterSpacing: "-0.320px",
          color: "var(--labels-vibrant-primary)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.email}</span>
      </div>
      <div style={{
        position: "relative",
        width: 1,
        height: 24,
        borderRadius: 10,
        backgroundColor: "var(--fills-vibrant-primary)",
        flexShrink: 0,
      }} />
      <span style={{
        position: "relative",
        opacity: 0.65,
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 590,
        fontSize: 19,
        textAlign: "center",
        lineHeight: "100%",
        letterSpacing: "-0.320px",
        color: "var(--labels-vibrant-primary)",
        flexShrink: 0,
        whiteSpace: "nowrap",
      }}>{props.text2 ?? "􀟖"}</span>
    </div>
  );
  const __impls = {
    // figma: Mode=Dark
    "mode=dark": __body0,
    // figma: Mode=Light
    "mode=light": __body1,
  };
  return (__impls[__vkey(props)] ?? __body1)();
}
export default Suggestion;
