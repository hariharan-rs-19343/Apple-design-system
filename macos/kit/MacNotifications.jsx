import { MacLiquidGlassMedium } from './MacLiquidGlassMedium.jsx';
import { MacSystemAppIcon } from './MacSystemAppIcon.jsx';

// figma node: 121:11438 Notifications
export function MacNotifications(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 440,
      height: 170,
      borderRadius: 2,
      backgroundColor: "var(--mac-section-fill)",
      boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.4)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 50,
        top: 50,
        width: 344,
        display: "flex",
        flexDirection: "row",
        gap: 13,
        padding: "12px 9px 12px 13px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
      }}>
        <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 344,
            height: 72,
          }}>
          <MacLiquidGlassMedium
            style={{ width: 344, height: 72, borderRadius: 24 }}
            mode={"light"}
          />
        </div>
        <MacSystemAppIcon
          style={{
            position: "relative",
            width: 32,
            height: 32,
            flexShrink: 0,
          }}
          appIcon={"custom"}
          appIconMode={"default"}
        />
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexGrow: 1,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 700,
            fontSize: 13,
            whiteSpace: "nowrap",
            lineHeight: "16px",
            letterSpacing: "-0.020em",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>Elit Dapibus Ligula Sit</span>
          <span style={{
            position: "relative",
            fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 13,
            lineHeight: "16px",
            letterSpacing: "-0.008em",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>Maecenas faucibus mollis interdum. Morbi leo risus.</span>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 7,
          alignItems: "flex-end",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 11,
            textAlign: "right",
            whiteSpace: "nowrap",
            lineHeight: "14px",
            color: "var(--mac-labels-vibrant-use-plus-lighter-darker-tertiary)",
            flexShrink: 0,
          }}>now</span>
        </div>
      </div>
    </div>
  );
}
export default MacNotifications;
