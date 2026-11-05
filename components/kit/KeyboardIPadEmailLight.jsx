import { HomeIndicator } from '../bezels/HomeIndicator.jsx';
import { KeyboardIPadLayouts } from '../keyboards/KeyboardIPadLayouts.jsx';

// figma node: 145:83402 Keyboard - iPad/Email/Light
export function KeyboardIPadEmailLight(_p = {}) {
  const props = { ..._p, showBar: _p.showBar ?? true, showReplace: _p.showReplace ?? true, email2: _p.email2 ?? "name@email.com", email1: _p.email1 ?? "name@email.com" };
  return (
    <div className={props.className} style={{
      width: 1210,
      height: 428,
      overflow: "hidden",
      borderRadius: 27,
      position: "relative",
      ...props.style,
    }}>
      <svg width={1210} height={428} viewBox="0 0 1210 428" fill="none" style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 1210,
        height: 428,
        overflow: "hidden",
        borderRadius: 27,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
      }}>
        <path d={"M 0 43.2 C 0 28.079 0 20.518 2.943 14.742 C 5.531 9.662 9.662 5.531 14.742 2.943 C 20.518 0 28.079 0 43.2 0 L 156.8 0 C 171.921 0 179.482 0 185.258 2.943 C 190.338 5.531 194.469 9.662 197.057 14.742 C 200 20.518 200 28.079 200 43.2 L 200 156.8 C 200 171.921 200 179.482 197.057 185.258 C 194.469 190.338 190.338 194.469 185.258 197.057 C 179.482 200 171.921 200 156.8 200 L 43.2 200 C 28.079 200 20.518 200 14.742 197.057 C 9.662 194.469 5.531 190.338 2.943 185.258 C 0 179.482 0 171.921 0 156.8 L 0 43.2 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
      <div style={{
          position: "absolute",
          left: 0,
          top: 409,
          width: 1210,
          height: 19,
        }}>
        <HomeIndicator
          style={{ transform: "scale(3.025, 0.974)", transformOrigin: "0 0" }}
          device={"iPad"}
          orientation={"landscape"}
        />
      </div>
      <KeyboardIPadLayouts
        style={{
          position: "absolute",
          left: 0,
          top: 66,
          width: 1210,
        }}
        mode={"light"}
        type={"lowercase"}
      />
      {props.showBar && (
      <div style={{
        position: "absolute",
        left: 227,
        top: 6,
        width: 740,
        display: "flex",
        flexDirection: "row",
        gap: 6,
        alignItems: "center",
        flexWrap: "nowrap",
      }}>
        <div style={{
          position: "relative",
          height: 44,
          display: "flex",
          flexDirection: "column",
          gap: -3,
          padding: "11.500px 10px 11.500px 10px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexGrow: 1,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 16,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "21px",
            color: "var(--labels-primary)",
            flexShrink: 0,
          }}>{props.text1 ?? "for this website"}</span>
          <span style={{
            position: "relative",
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "20px",
            letterSpacing: "-0.200px",
            color: "var(--labels-primary)",
            flexShrink: 0,
          }}>{props.email1}</span>
        </div>
        <div style={{
          position: "relative",
          width: 1,
          height: 35,
          backgroundColor: "rgba(120,120,120,0.2)",
          flexShrink: 0,
        }} />
        <div style={{
          position: "relative",
          height: 44,
          display: "flex",
          flexDirection: "column",
          gap: -3,
          padding: "11.500px 10px 11.500px 10px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexGrow: 1,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 12,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "16px",
            color: "var(--labels-primary)",
            flexShrink: 0,
          }}>{props.text2 ?? "for this website"}</span>
          <span style={{
            position: "relative",
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "20px",
            letterSpacing: "-0.200px",
            color: "var(--labels-primary)",
            flexShrink: 0,
          }}>{props.email2}</span>
        </div>
        <div style={{
          position: "relative",
          width: 1,
          height: 35,
          backgroundColor: "rgba(120,120,120,0.2)",
          flexShrink: 0,
        }} />
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          padding: "0px 12px 0px 12px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 19,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "21px",
            color: "var(--labels-primary)",
            flexShrink: 0,
          }}>{props.text3 ?? "􀟖"}</span>
        </div>
      </div>
      )}
      <div style={{
        position: "absolute",
        left: 21,
        top: 14,
        width: 84,
        display: "flex",
        flexDirection: "row",
        gap: 16,
        justifyContent: "center",
        alignItems: "flex-start",
        flexWrap: "nowrap",
      }}>
        <div style={{
          position: "relative",
          width: 28,
          height: 28,
          flexShrink: 0,
        }}>
          <span style={{
            position: "absolute",
            left: -8,
            top: -8,
            width: 44,
            height: 44,
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 21,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "rgb(153,153,153)",
          }}>􀱍</span>
        </div>
        <div style={{
          position: "relative",
          width: 28,
          height: 28,
          flexShrink: 0,
        }}>
          <span style={{
            position: "absolute",
            left: -8,
            top: -8,
            width: 44,
            height: 44,
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 22,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "22px",
            color: "rgb(153,153,153)",
          }}>􀱓</span>
        </div>
        <div style={{
          position: "relative",
          width: 28,
          height: 28,
          flexShrink: 0,
        }}>
          <span style={{
            position: "absolute",
            left: -8,
            top: -8,
            width: 44,
            height: 44,
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 22,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "22px",
            color: "rgb(153,153,153)",
          }}>􀉃</span>
        </div>
      </div>
    </div>
  );
}
export default KeyboardIPadEmailLight;
