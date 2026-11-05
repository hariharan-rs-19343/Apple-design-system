import { MacUtilityPanelTabs } from './MacUtilityPanelTabs.jsx';
import { MacUtilityPanelTitleBar } from './MacUtilityPanelTitleBar.jsx';

// figma node: 585:3375 Utility Panel
export function MacUtilityPanel(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 300,
      height: 300,
      overflow: "hidden",
      borderRadius: 15,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "0px 5px 20px 0px rgba(0,0,0,0.3)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 300,
        borderTop: "1px solid rgba(0,0,0,0.1)",
        borderRight: "1px solid rgba(0,0,0,0.1)",
        borderBottom: "1px solid rgba(0,0,0,0.1)",
        borderLeft: "1px solid rgba(0,0,0,0.1)",
        display: "flex",
        flexDirection: "column",
        padding: "0px 0px 3px 0px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
      }}>
        <MacUtilityPanelTitleBar style={{
            position: "relative",
            height: 24,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }} />
        <MacUtilityPanelTabs
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          tabs={"6"}
          selected={"1"}
        />
      </div>
    </div>
  );
}
export default MacUtilityPanel;
