// figma node: 5657:8189 Sidebar Search Field (6 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "mode=" + __venc(p.mode) + '|' + "state=" + __venc(p.state);

export function SidebarSearchField(_p = {}) {
  const props = { ..._p, mode: _p.mode ?? "dark", state: _p.state ?? "placeholder", searchTerm: _p.searchTerm ?? "Search" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 200,
      borderRadius: 100,
      backgroundColor: "rgba(120,120,128,0.32)",
      display: "flex",
      flexDirection: "row",
      padding: "11px 11px 11px 11px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 17,
          whiteSpace: "nowrap",
          lineHeight: "22px",
          letterSpacing: "-0.080px",
          color: "rgb(138,138,138)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "􀊫"}</span>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 17,
            whiteSpace: "nowrap",
            lineHeight: "22px",
            letterSpacing: "-0.080px",
            color: "rgb(245,245,245)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.searchTerm}</span>
          <div style={{
            position: "relative",
            width: 2,
            borderRadius: 10,
            backgroundColor: "rgb(0,145,255)",
            flexShrink: 0,
            alignSelf: "stretch",
          }} />
        </div>
      </div>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 17,
        whiteSpace: "nowrap",
        lineHeight: "22px",
        letterSpacing: "-0.080px",
        color: "rgb(138,138,138)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text2 ?? "􀊱"}</span>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 200,
      borderRadius: 100,
      backgroundColor: "rgba(120,120,128,0.32)",
      display: "flex",
      flexDirection: "row",
      padding: "11px 11px 11px 11px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 17,
          whiteSpace: "nowrap",
          lineHeight: "22px",
          letterSpacing: "-0.080px",
          color: "rgb(138,138,138)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "􀊫"}</span>
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 17,
          whiteSpace: "nowrap",
          lineHeight: "22px",
          letterSpacing: "-0.080px",
          color: "rgb(245,245,245)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.searchTerm}</span>
      </div>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 17,
        whiteSpace: "nowrap",
        lineHeight: "22px",
        letterSpacing: "-0.080px",
        color: "rgb(138,138,138)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text2 ?? "􀊱"}</span>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 200,
      borderRadius: 100,
      backgroundColor: "rgba(120,120,128,0.32)",
      display: "flex",
      flexDirection: "row",
      padding: "11px 11px 11px 11px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 17,
          whiteSpace: "nowrap",
          lineHeight: "22px",
          letterSpacing: "-0.080px",
          color: "rgb(138,138,138)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "􀊫"}</span>
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 17,
          whiteSpace: "nowrap",
          lineHeight: "22px",
          letterSpacing: "-0.080px",
          color: "rgb(138,138,138)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.searchTerm}</span>
      </div>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 17,
        whiteSpace: "nowrap",
        lineHeight: "22px",
        letterSpacing: "-0.080px",
        color: "rgb(138,138,138)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text2 ?? "􀊱"}</span>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 200,
      borderRadius: 100,
      backgroundColor: "rgba(120,120,128,0.16)",
      display: "flex",
      flexDirection: "row",
      padding: "11px 11px 11px 11px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 17,
          whiteSpace: "nowrap",
          lineHeight: "22px",
          letterSpacing: "-0.080px",
          color: "var(--labels-vibrant-secondary)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "􀊫"}</span>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 17,
            whiteSpace: "nowrap",
            lineHeight: "22px",
            letterSpacing: "-0.080px",
            color: "var(--labels-vibrant-primary)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.searchTerm}</span>
          <div style={{
            position: "relative",
            width: 2,
            borderRadius: 10,
            backgroundColor: "var(--accents-blue)",
            flexShrink: 0,
            alignSelf: "stretch",
          }} />
        </div>
      </div>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 17,
        whiteSpace: "nowrap",
        lineHeight: "22px",
        letterSpacing: "-0.080px",
        color: "var(--labels-vibrant-secondary)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text2 ?? "􀊱"}</span>
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: 200,
      borderRadius: 100,
      backgroundColor: "rgba(120,120,128,0.16)",
      display: "flex",
      flexDirection: "row",
      padding: "11px 11px 11px 11px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 17,
          whiteSpace: "nowrap",
          lineHeight: "22px",
          letterSpacing: "-0.080px",
          color: "var(--labels-vibrant-secondary)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "􀊫"}</span>
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 17,
          whiteSpace: "nowrap",
          lineHeight: "22px",
          letterSpacing: "-0.080px",
          color: "var(--labels-vibrant-primary)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.searchTerm}</span>
      </div>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 17,
        whiteSpace: "nowrap",
        lineHeight: "22px",
        letterSpacing: "-0.080px",
        color: "var(--labels-vibrant-secondary)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text2 ?? "􀊱"}</span>
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: 200,
      borderRadius: 100,
      backgroundColor: "rgba(120,120,128,0.16)",
      display: "flex",
      flexDirection: "row",
      padding: "11px 11px 11px 11px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 17,
          whiteSpace: "nowrap",
          lineHeight: "22px",
          letterSpacing: "-0.080px",
          color: "var(--labels-vibrant-secondary)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "􀊫"}</span>
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 17,
          whiteSpace: "nowrap",
          lineHeight: "22px",
          letterSpacing: "-0.080px",
          color: "var(--labels-vibrant-secondary)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.searchTerm}</span>
      </div>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 17,
        whiteSpace: "nowrap",
        lineHeight: "22px",
        letterSpacing: "-0.080px",
        color: "var(--labels-vibrant-secondary)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text2 ?? "􀊱"}</span>
    </div>
  );
  const __impls = {
    // figma: Mode=Dark, State=Typing
    "mode=dark|state=typing": __body0,
    // figma: Mode=Dark, State=Value
    "mode=dark|state=value": __body1,
    // figma: Mode=Dark, State=Placeholder
    "mode=dark|state=placeholder": __body2,
    // figma: Mode=Light, State=Typing
    "mode=light|state=typing": __body3,
    // figma: Mode=Light, State=Value
    "mode=light|state=value": __body4,
    // figma: Mode=Light, State=Placeholder
    "mode=light|state=placeholder": __body5,
  };
  return (__impls[__vkey(props)] ?? __body2)();
}
export default SidebarSearchField;
