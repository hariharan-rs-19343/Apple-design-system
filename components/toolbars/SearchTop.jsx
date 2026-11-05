import { LiquidGlassRegularSmall } from '../buttons/LiquidGlassRegularSmall.jsx';

// figma node: 5720:33677 _Search - Top (6 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "mode=" + __venc(p.mode) + '|' + "state=" + __venc(p.state);

export function SearchTop(_p = {}) {
  const props = { ..._p, value: _p.value ?? "Search Term", mode: _p.mode ?? "dark", state: _p.state ?? "placeholder", placeholder: _p.placeholder ?? "Placeholder" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 190,
      height: 44,
      borderRadius: 296,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "0px 10px 0px 11px",
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
          width: 190,
          height: 44,
        }}>
        <LiquidGlassRegularSmall
          style={{ transform: "scale(3.958, 0.917)", transformOrigin: "0 0" }}
          mode={"dark"}
          state={"default"}
        />
      </div>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 510,
        fontSize: 17,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "rgb(245,245,245)",
        flexShrink: 0,
      }}>{props.text1 ?? "􀊫"}</span>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: 17,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgb(245,245,245)",
          flexShrink: 0,
        }}>{props.value}</span>
      </div>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 510,
        fontSize: 17,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "rgb(138,138,138)",
        flexShrink: 0,
      }}>{props.text2 ?? "􀊰"}</span>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 190,
      height: 44,
      borderRadius: 296,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "0px 10px 0px 11px",
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
          width: 190,
          height: 44,
        }}>
        <LiquidGlassRegularSmall
          style={{ transform: "scale(3.958, 0.917)", transformOrigin: "0 0" }}
          mode={"dark"}
          state={"default"}
        />
      </div>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 510,
        fontSize: 17,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "rgb(245,245,245)",
        flexShrink: 0,
      }}>{props.text1 ?? "􀊫"}</span>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: 17,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgb(245,245,245)",
          flexShrink: 0,
        }}>{props.value}</span>
        <div style={{
          position: "relative",
          width: 2,
          height: 22,
          borderRadius: 10,
          backgroundColor: "rgb(0,145,255)",
          flexShrink: 0,
        }} />
      </div>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 510,
        fontSize: 17,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "rgb(138,138,138)",
        flexShrink: 0,
      }}>{props.text2 ?? "􀊰"}</span>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 190,
      height: 44,
      borderRadius: 296,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "0px 10px 0px 11px",
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
          width: 190,
          height: 44,
        }}>
        <LiquidGlassRegularSmall
          style={{ transform: "scale(3.958, 0.917)", transformOrigin: "0 0" }}
          mode={"dark"}
          state={"default"}
        />
      </div>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 510,
        fontSize: 17,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "rgb(245,245,245)",
        flexShrink: 0,
      }}>{props.text1 ?? "􀊫"}</span>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        padding: "10px 10px 10px 10px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          width: 98,
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: 17,
          textAlign: "center",
          lineHeight: "100%",
          color: "rgb(64,64,64)",
          flexShrink: 0,
        }}>{props.placeholder}</span>
      </div>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 510,
        fontSize: 17,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "rgb(138,138,138)",
        flexShrink: 0,
      }}>{props.text2 ?? "􀊰"}</span>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 190,
      height: 44,
      borderRadius: 296,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "0px 10px 0px 11px",
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
          width: 190,
          height: 44,
        }}>
        <LiquidGlassRegularSmall
          style={{ transform: "scale(3.958, 0.917)", transformOrigin: "0 0" }}
          mode={"light"}
          state={"default"}
        />
      </div>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 510,
        fontSize: 17,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--labels-vibrant-controls-primary)",
        flexShrink: 0,
      }}>{props.text1 ?? "􀊫"}</span>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: 17,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "var(--labels-vibrant-controls-primary)",
          flexShrink: 0,
        }}>{props.value}</span>
      </div>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 510,
        fontSize: 17,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--labels-vibrant-controls-secondary)",
        flexShrink: 0,
      }}>{props.text2 ?? "􀊰"}</span>
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: 190,
      height: 44,
      borderRadius: 296,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "0px 10px 0px 11px",
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
          width: 190,
          height: 44,
        }}>
        <LiquidGlassRegularSmall
          style={{ transform: "scale(3.958, 0.917)", transformOrigin: "0 0" }}
          mode={"light"}
          state={"default"}
        />
      </div>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 510,
        fontSize: 17,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--labels-vibrant-controls-primary)",
        flexShrink: 0,
      }}>{props.text1 ?? "􀊫"}</span>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: 17,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "var(--labels-vibrant-controls-primary)",
          flexShrink: 0,
        }}>{props.value}</span>
        <div style={{
          position: "relative",
          width: 2,
          height: 22,
          borderRadius: 10,
          backgroundColor: "var(--accents-blue)",
          flexShrink: 0,
        }} />
      </div>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 510,
        fontSize: 17,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--labels-vibrant-controls-secondary)",
        flexShrink: 0,
      }}>{props.text2 ?? "􀊰"}</span>
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: 190,
      height: 44,
      borderRadius: 296,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "0px 10px 0px 11px",
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
          width: 190,
          height: 44,
        }}>
        <LiquidGlassRegularSmall
          style={{ transform: "scale(3.958, 0.917)", transformOrigin: "0 0" }}
          mode={"light"}
          state={"default"}
        />
      </div>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 510,
        fontSize: 17,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--labels-vibrant-controls-primary)",
        flexShrink: 0,
      }}>{props.text1 ?? "􀊫"}</span>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: 17,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "var(--labels-vibrant-controls-tertiary)",
          flexShrink: 0,
        }}>{props.placeholder}</span>
      </div>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 510,
        fontSize: 17,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--labels-vibrant-controls-secondary)",
        flexShrink: 0,
      }}>{props.text2 ?? "􀊰"}</span>
    </div>
  );
  const __impls = {
    // figma: Mode=Dark, State=Value
    "mode=dark|state=value": __body0,
    // figma: Mode=Dark, State=Typing
    "mode=dark|state=typing": __body1,
    // figma: Mode=Dark, State=Placeholder
    "mode=dark|state=placeholder": __body2,
    // figma: Mode=Light, State=Value
    "mode=light|state=value": __body3,
    // figma: Mode=Light, State=Typing
    "mode=light|state=typing": __body4,
    // figma: Mode=Light, State=Placeholder
    "mode=light|state=placeholder": __body5,
  };
  return (__impls[__vkey(props)] ?? __body2)();
}
export default SearchTop;
