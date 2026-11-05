import { LiquidGlassRegularMedium } from '../alerts/LiquidGlassRegularMedium.jsx';

// figma node: 143:62847 Notification - Expanded
export function NotificationExpanded(_p = {}) {
  const props = { ..._p, showMenu: _p.showMenu ?? true };
  return (
    <div className={props.className} style={{
      width: 393,
      height: 443,
      display: "flex",
      flexDirection: "column",
      gap: 15,
      padding: "0px 8px 0px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      isolation: "isolate",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <svg viewBox="0 0 377 324" fill="none" style={{
        position: "relative",
        borderRadius: 32,
        zIndex: 2,
        flexGrow: 1,
        alignSelf: "stretch",
        color: "var(--backgrounds-primary-elevated-2)",
      }}>
        <path d={"M 0 51.2 C 0 33.278 0 24.317 3.488 17.472 C 6.556 11.451 11.451 6.556 17.472 3.488 C 24.317 0 33.278 0 51.2 0 L 325.8 0 C 343.722 0 352.683 0 359.528 3.488 C 365.549 6.556 370.444 11.451 373.512 17.472 C 377 24.317 377 33.278 377 51.2 L 377 272.8 C 377 290.722 377 299.683 373.512 306.528 C 370.444 312.549 365.549 317.444 359.528 320.512 C 352.683 324 343.722 324 325.8 324 L 51.2 324 C 33.278 324 24.317 324 17.472 320.512 C 11.451 317.444 6.556 312.549 3.488 306.528 C 0 299.683 0 290.722 0 272.8 L 0 51.2 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
      {props.showMenu && (
      <div style={{
        position: "relative",
        width: 250,
        display: "flex",
        flexDirection: "column",
        gap: 20,
        padding: "20px 26px 20px 26px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        zIndex: 1,
        flexShrink: 0,
      }}>
        <div style={{
            position: "absolute",
            left: 0.5,
            top: 0,
            width: 250,
            height: 104,
          }}>
          <LiquidGlassRegularMedium
            style={{ transform: "scale(1.563, 0.650)", transformOrigin: "0 0" }}
            mode={"light"}
          />
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 14,
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
            textAlign: "center",
            lineHeight: "22px",
            color: "var(--labels-primary)",
            flexShrink: 0,
            whiteSpace: "nowrap",
          }}>{props.text1 ?? "􀓔"}</span>
          <span style={{
            position: "relative",
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 17,
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            lineHeight: "22px",
            letterSpacing: "-0.430px",
            color: "var(--labels-primary)",
            flexGrow: 1,
          }}>{props.text2 ?? "Action"}</span>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 14,
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
            textAlign: "center",
            lineHeight: "22px",
            color: "var(--labels-primary)",
            flexShrink: 0,
            whiteSpace: "nowrap",
          }}>{props.text3 ?? "􀓔"}</span>
          <span style={{
            position: "relative",
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 17,
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            lineHeight: "22px",
            letterSpacing: "-0.430px",
            color: "var(--labels-primary)",
            flexGrow: 1,
          }}>{props.text4 ?? "Action"}</span>
        </div>
      </div>
      )}
    </div>
  );
}
export default NotificationExpanded;
