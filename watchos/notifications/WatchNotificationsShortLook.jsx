import { WatchAppIcon } from '../app-icons/WatchAppIcon.jsx';

// figma node: 4415:14540 Notifications - Short Look
export function WatchNotificationsShortLook(_p = {}) {
  const props = { ..._p, title: _p.title ?? "Title", preview: _p.preview ?? "Preview of Notification Content. Max 2 lines." };
  return (
    <div className={props.className} style={{
      width: "calc(var(--watch-screen-width) * 1px)",
      height: "calc(var(--watch-screen-height) * 1px)",
      backgroundColor: "rgba(0,0,0,0.45)",
      backdropFilter: "blur(32px)",
      display: "flex",
      flexDirection: "column",
      padding: "23px 9.500px 23px 9.500px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--watch-margin-lr-copy-safe-area) * 1px)",
      paddingTop: "calc(var(--watch-notification-short-look-margin-top) * 1px)",
      paddingRight: "calc(var(--watch-margin-lr-copy-safe-area) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 98,
          height: 98,
          flexShrink: 0,
        }}>
        <WatchAppIcon
          style={{ transform: "scale(1.633, 1.633)", transformOrigin: "0 0" }}
          type={"custom"}
        />
      </div>
      <div style={{
        position: "relative",
        height: 63.5,
        display: "flex",
        flexDirection: "column",
        gap: 2,
        padding: "8.500px 0px 8.500px 0px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingTop: "calc(var(--watch-notification-short-look-gap-icon-to-text) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"SF Compact\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 656,
          fontSize: "calc(var(--watch-notification-short-look-font-size-title) * 1px)",
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "21.500px",
          color: "rgb(255,255,255)",
          flexShrink: 0,
        }}>{props.title}</span>
        <span style={{
          position: "relative",
          width: 167,
          fontFamily: "\"SF Compact\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 457,
          fontSize: "calc(var(--watch-notification-short-look-font-size-preview) * 1px)",
          textAlign: "center",
          lineHeight: "15.500px",
          color: "rgb(255,255,255)",
          flexShrink: 0,
        }}>{props.preview}</span>
      </div>
    </div>
  );
}
export default WatchNotificationsShortLook;
