import { LiquidGlassRegularLarge } from './LiquidGlassRegularLarge.jsx';
import { SectionHeader2 } from './SectionHeader2.jsx';
import { SidebarRow } from '../sidebar-items/SidebarRow.jsx';
import { SidebarSearchField2 } from './SidebarSearchField2.jsx';
import { ToolbarButtonSymbol } from '../sidebar-items/ToolbarButtonSymbol.jsx';
import { ToolbarButtonText } from '../sidebar-items/ToolbarButtonText.jsx';
import { WindowControls } from './WindowControls.jsx';

// figma node: 131:70868 Sidebar
export function Sidebar(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 320,
      height: 802,
      display: "flex",
      flexDirection: "column",
      padding: "11px 16px 10px 16px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 320,
          height: 802,
        }}>
        <LiquidGlassRegularLarge
          style={{ transform: "scale(2, 5.013)", transformOrigin: "0 0" }}
          mode={"light"}
        />
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 2,
        padding: "0px 0px 20px 0px",
        justifyContent: "center",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
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
        }}>
          <WindowControls
            style={{ position: "relative", flexShrink: 0 }}
            state={"active"}
          />
          <ToolbarButtonText
            style={{ position: "relative", flexShrink: 0 }}
            mode={"light"}
          />
        </div>
        <div style={{
          position: "relative",
          height: 22,
          display: "flex",
          flexDirection: "row",
          gap: 24,
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <ToolbarButtonSymbol
            style={{
              position: "relative",
              flexShrink: 0,
              alignSelf: "stretch",
              height: "auto",
            }}
            mode={"light"}
          />
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
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 17,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "100%",
              color: "rgb(255,255,255)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>􀟈</span>
          </div>
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
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 17,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "100%",
              color: "rgb(255,255,255)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>􀏚</span>
          </div>
        </div>
      </div>
      <SidebarSearchField2 style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }} />
      <div style={{
        position: "relative",
        height: 196,
        display: "flex",
        flexDirection: "column",
        padding: "20px 0px 20px 0px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <SidebarRow
          style={{
            position: "relative",
            height: 44,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          state={"default"}
          indentLevel={"0"}
        />
        <SidebarRow
          style={{
            position: "relative",
            height: 44,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          state={"default"}
          indentLevel={"0"}
        />
        <SidebarRow
          style={{
            position: "relative",
            height: 44,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          state={"default"}
          indentLevel={"0"}
        />
        <SidebarRow
          style={{
            position: "relative",
            height: 44,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          state={"default"}
          indentLevel={"0"}
        />
      </div>
      <div style={{
        position: "relative",
        height: 196,
        display: "flex",
        flexDirection: "column",
        padding: "20px 0px 20px 0px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <SectionHeader2 style={{
            position: "relative",
            height: 44,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }} />
        <SidebarRow
          style={{
            position: "relative",
            height: 44,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          state={"default"}
          indentLevel={"0"}
        />
        <SidebarRow
          style={{
            position: "relative",
            height: 44,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          state={"selected"}
          indentLevel={"0"}
        />
        <SidebarRow
          style={{
            position: "relative",
            height: 44,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          state={"default"}
          indentLevel={"0"}
        />
      </div>
      <div style={{
        position: "relative",
        height: 64,
        display: "flex",
        flexDirection: "column",
        padding: "20px 0px 20px 0px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <SectionHeader2 style={{
            position: "relative",
            height: 44,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }} />
      </div>
      <div style={{
        position: "relative",
        height: 196,
        display: "flex",
        flexDirection: "column",
        padding: "20px 0px 20px 0px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <SectionHeader2 style={{
            position: "relative",
            height: 44,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }} />
        <SidebarRow
          style={{
            position: "relative",
            height: 44,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          state={"default"}
          indentLevel={"0"}
        />
        <SidebarRow
          style={{
            position: "relative",
            height: 44,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          state={"default"}
          indentLevel={"0"}
        />
        <SidebarRow
          style={{
            position: "relative",
            height: 44,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          state={"default"}
          indentLevel={"0"}
        />
      </div>
    </div>
  );
}
export default Sidebar;
