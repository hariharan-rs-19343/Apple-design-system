// figma node: 523:40824 Header/Dark (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "open=" + __venc(p.open);

export function HeaderDark(_p = {}) {
  const props = { ..._p, open: _p.open ?? true, sectionHeading: _p.sectionHeading ?? "Section Heading" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 320,
      height: 44,
      display: "flex",
      flexDirection: "column",
      padding: "0px 16px 0px 16px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        padding: "8px 8px 11px 8px",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          width: 252,
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 590,
          fontSize: 20,
          lineHeight: "25px",
          letterSpacing: "-0.400px",
          color: "rgb(255,255,255)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.sectionHeading}</span>
        <div style={{
          position: "relative",
          width: 14,
          display: "flex",
          flexDirection: "row",
          gap: 10,
          padding: "2px 0px 2px 0px",
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
            fontWeight: 590,
            fontSize: 17,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "22px",
            color: "rgb(10,132,255)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.text1 ?? "􀆈"}</span>
        </div>
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 320,
      height: 44,
      display: "flex",
      flexDirection: "column",
      padding: "0px 16px 0px 16px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderTop: "1px solid rgba(84,84,88,0.65)",
        borderRight: "1px solid rgba(84,84,88,0.65)",
        borderBottom: "0.333px solid rgba(84,84,88,0.65)",
        borderLeft: "1px solid rgba(84,84,88,0.65)",
        display: "flex",
        flexDirection: "row",
        padding: "8px 8px 11px 8px",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          width: 252,
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 590,
          fontSize: 20,
          lineHeight: "25px",
          letterSpacing: "-0.400px",
          color: "rgb(255,255,255)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.sectionHeading}</span>
        <div style={{
          position: "relative",
          width: 14,
          display: "flex",
          flexDirection: "row",
          gap: 10,
          padding: "2px 0px 2px 0px",
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
            fontWeight: 590,
            fontSize: 17,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "22px",
            color: "rgb(10,132,255)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.text1 ?? "􀆊"}</span>
        </div>
      </div>
    </div>
  );
  const __impls = {
    // figma: Open=True
    "open=true": __body0,
    // figma: Open=False
    "open=false": __body1,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default HeaderDark;
