import { ControlsTrailing } from '../fields/ControlsTrailing.jsx';
import { SidebarControl } from '../accessory-bars/SidebarControl.jsx';

// figma node: 131:70771 Sidebar - Toolbar - Top/Top (Large Title)
export function SidebarToolbarTopTopLarge(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 320,
      display: "flex",
      flexDirection: "column",
      gap: 5,
      padding: "27px 16px 1px 16px",
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
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 44,
            height: 44,
            flexShrink: 0,
          }}>{props.icon1 ?? <SidebarControl toggle={"tab bar"} />}</div>
        <div style={{ position: "relative", flexShrink: 0 }}>{props.icon2 ?? <ControlsTrailing config={"symbols - 1"} />}</div>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        padding: "4px 8px 4px 8px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 700,
          fontSize: 34,
          whiteSpace: "nowrap",
          lineHeight: "41px",
          color: "var(--labels-primary)",
          flexShrink: 0,
        }}>{props.text1 ?? "Title"}</span>
      </div>
    </div>
  );
}
export default SidebarToolbarTopTopLarge;
