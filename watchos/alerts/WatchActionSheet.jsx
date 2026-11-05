import { WatchButtonCorner } from '../buttons/WatchButtonCorner.jsx';
import { WatchButtonPill } from '../buttons/WatchButtonPill.jsx';

// figma node: 6479:2670 Action Sheet
export function WatchActionSheet(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: "calc(var(--watch-screen-width) * 1px)",
      height: "calc(var(--watch-screen-height) * 1px)",
      overflow: "hidden",
      background: "rgba(28,28,30,0.6)",
      backdropFilter: "blur(32px) saturate(180%)", WebkitBackdropFilter: "blur(32px) saturate(180%)",
      display: "flex",
      flexDirection: "column",
      gap: 5,
      padding: "0px 0px 9.500px 0px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingBottom: "calc(var(--watch-margin-lr-copy-safe-area) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        height: "calc(var(--watch-nav-bar-height) * 1px)",
        background: "linear-gradient(180deg, rgb(0,0,0) 0.00%, rgba(0,0,0,0) 100.00%)",
        display: "flex",
        flexDirection: "row",
        gap: 6,
        padding: "6px 9.500px 6px 9.500px",
        justifyContent: "center",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--watch-margin-lr-copy-safe-area) * 1px)",
        paddingTop: "calc(var(--watch-nav-bar-margin-top) * 1px)",
        paddingRight: "calc(var(--watch-margin-lr-copy-safe-area) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 10,
          padding: "4px 0px 4px 0px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          paddingTop: "calc(var(--watch-nav-bar-button-top-offset) * 1px)",
          paddingBottom: "calc(var(--watch-nav-bar-button-top-offset) * 1px)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <WatchButtonCorner
            style={{
              position: "relative",
              width: 30,
              flexShrink: 0,
              alignSelf: "stretch",
              height: "auto",
            }}
            label={"􀆄"}
          />
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: "calc(var(--watch-nav-bar-gap) * 1px)",
          alignItems: "flex-end",
          flexWrap: "nowrap",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"SF Compact\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 556,
            fontSize: "calc(var(--watch-nav-bar-font-size) * 1px)",
            textAlign: "right",
            lineHeight: "18.500px",
            color: "var(--watch-colors-white-fff)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>10:09</span>
          <span style={{
            position: "relative",
            fontFamily: "\"SF Compact\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 556,
            fontSize: "calc(var(--watch-status-bar-time-font-size) * 1px)",
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "18.500px",
            color: "var(--watch-colors-blue)",
            flexShrink: 0,
          }}> </span>
        </div>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 0.5,
        padding: "0px 9.500px 0px 9.500px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--watch-margin-tb-safe-area) * 1px)",
        paddingRight: "calc(var(--watch-margin-tb-safe-area) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"SF Compact\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 656,
          fontSize: "calc(var(--watch-list-font-size) * 1px)",
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "18.500px",
          color: "rgb(255,255,255)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "Title"}</span>
        <span style={{
          position: "relative",
          fontFamily: "\"SF Compact\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 457,
          fontSize: "calc(var(--watch-list-font-size) * 1px)",
          textAlign: "center",
          lineHeight: "18.500px",
          color: "rgb(255,255,255)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text2 ?? "The content of the notification goes here. "}</span>
      </div>
      <div style={{
        position: "relative",
        height: 100,
        display: "flex",
        flexDirection: "column",
        gap: 4,
        padding: "8px 0px 8px 0px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <WatchButtonPill
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          type={"default"}
        />
        <WatchButtonPill
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          type={"default"}
        />
      </div>
    </div>
  );
}
export default WatchActionSheet;
