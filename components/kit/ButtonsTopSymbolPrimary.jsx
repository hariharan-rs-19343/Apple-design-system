import { LiquidGlassRegularSmall } from '../buttons/LiquidGlassRegularSmall.jsx';

// figma node: 5565:35484 _Buttons - Top/Symbol Primary
export function ButtonsTopSymbolPrimary(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: "fit-content",
      height: 44,
      borderRadius: 296,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "0px 4px 0px 4px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 44,
          height: 44,
        }}>{props.icon1 ?? <LiquidGlassRegularSmall mode={"dark"} state={"primary"} style={{ transform: "scale(0.917, 0.917)", transformOrigin: "0 0" }} />}</div>
      <div style={{
        position: "relative",
        width: 36,
        height: 36,
        borderRadius: 100,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
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
          flexGrow: 1,
          alignSelf: "stretch",
        }}>􀓔</span>
      </div>
    </div>
  );
}
export default ButtonsTopSymbolPrimary;
