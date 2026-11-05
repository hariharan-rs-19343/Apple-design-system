// figma node: 5831:55472 _Leading - iPhone (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "mode=" + __venc(p.mode) + '|' + "state=" + __venc(p.state);

export function LeadingIPhone(_p = {}) {
  const props = { ..._p, showSymbol: _p.showSymbol ?? true, mode: _p.mode ?? "light", state: _p.state ?? "disabled", showSubtitle: _p.showSubtitle ?? false };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 100,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 28,
        height: 22,
        flexShrink: 0,
      }}>
        {props.showSymbol && (
        <span style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 28,
          height: 22,
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 17,
          textAlign: "center",
          lineHeight: "22px",
          color: "var(--accents-red)",
        }}>{props.text1 ?? "􀓔"}</span>
        )}
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 2,
        padding: "10px 0px 10px 0px",
        justifyContent: "center",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 17,
          lineHeight: "20px",
          letterSpacing: "-0.430px",
          color: "var(--accents-red)",
          flexShrink: 0,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
        }}>{props.text2 ?? "Label"}</span>
        {props.showSubtitle && (
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 13,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: "18px",
          color: "var(--labels-vibrant-secondary)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text3 ?? "Subtitle"}</span>
        )}
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 100,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 28,
        height: 22,
        flexShrink: 0,
      }}>
        {props.showSymbol && (
        <span style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 28,
          height: 22,
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 17,
          textAlign: "center",
          lineHeight: "22px",
          color: "var(--labels-vibrant-tertiary)",
        }}>{props.text1 ?? "􀓔"}</span>
        )}
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 2,
        padding: "10px 0px 10px 0px",
        justifyContent: "center",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 17,
          lineHeight: "20px",
          letterSpacing: "-0.430px",
          color: "var(--labels-vibrant-tertiary)",
          flexShrink: 0,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
        }}>{props.text2 ?? "Label"}</span>
        {props.showSubtitle && (
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 13,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: "18px",
          color: "var(--labels-vibrant-quaternary)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text3 ?? "Subtitle"}</span>
        )}
      </div>
    </div>
  );
  const __impls = {
    // figma: Mode=Light, State=Destructive
    "mode=light|state=destructive": __body0,
    // figma: Mode=Light, State=Disabled
    "mode=light|state=disabled": __body1,
  };
  return (__impls[__vkey(props)] ?? __body1)();
}
export default LeadingIPhone;
