import { ToolbarButtonSymbol } from '../sidebar-items/ToolbarButtonSymbol.jsx';
import { ToolbarButtonText } from '../sidebar-items/ToolbarButtonText.jsx';
import { WindowControls } from '../surfaces/WindowControls.jsx';

// figma node: 148:63293 Sidebar Toolbar
export function SidebarToolbar(_p = {}) {
  const props = { ..._p, showSidebarButton: _p.showSidebarButton ?? true, showButton2: _p.showButton2 ?? true, showEdit: _p.showEdit ?? true, showButton1: _p.showButton1 ?? true };
  return (
    <div className={props.className} style={{
      width: 260,
      display: "flex",
      flexDirection: "row",
      gap: 2,
      padding: "0px 0px 20px 0px",
      justifyContent: "center",
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
        gap: 12,
        padding: "1px 0px 1px 0px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon1 ?? <WindowControls state={"active"} />}</div>
        {props.showEdit && (
        <div style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon2 ?? <ToolbarButtonText mode={"light"} />}</div>
        )}
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 24,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.showButton1 && (
        <div style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon3 ?? <ToolbarButtonSymbol mode={"light"} />}</div>
        )}
        {props.showButton2 && (
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 510,
            fontSize: 17,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "var(--labels-vibrant-primary, rgb(26,26,26))",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>􀟈</span>
        </div>
        )}
        {props.showSidebarButton && (
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 510,
            fontSize: 17,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "var(--labels-vibrant-primary, rgb(26,26,26))",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>􀏚</span>
        </div>
        )}
      </div>
    </div>
  );
}
export default SidebarToolbar;
