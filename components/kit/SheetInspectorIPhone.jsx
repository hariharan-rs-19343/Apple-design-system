import { LiquidGlassRegularMedium } from '../alerts/LiquidGlassRegularMedium.jsx';
import { ToolbarTopSheet } from '../navigation/ToolbarTopSheet.jsx';

// figma node: 5551:41121 Sheet - Inspector - iPhone
export function SheetInspectorIPhone(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 402,
      height: 387,
      display: "flex",
      flexDirection: "column",
      padding: "0px 6px 6px 6px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 6,
          top: 0,
          width: 390,
          height: 381,
        }}>
        <LiquidGlassRegularMedium
          style={{ transform: "scale(2.438, 2.381)", transformOrigin: "0 0" }}
          mode={"light"}
        />
      </div>
      <ToolbarTopSheet
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        mode={"light"}
        style2={"default"}
      />
    </div>
  );
}
export default SheetInspectorIPhone;
