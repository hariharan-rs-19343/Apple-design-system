import { Buttons2 } from '../alerts/Buttons2.jsx';
import { LiquidGlassRegularMedium } from '../alerts/LiquidGlassRegularMedium.jsx';

// figma node: 544:190523 
export function Screen(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 390,
      height: 640,
      borderRadius: 22,
      backgroundColor: "var(--section-fill)",
      boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.4)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 40,
        top: 50,
        width: 300,
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: "14px 14px 14px 14px",
        justifyContent: "center",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
      }}>
        <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 300,
            height: 542,
          }}>
          <LiquidGlassRegularMedium
            style={{ transform: "scale(1.875, 3.388)", transformOrigin: "0 0" }}
            mode={"light"}
          />
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 10,
          padding: "8px 8px 24px 8px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 590,
            fontSize: 17,
            lineHeight: "22px",
            letterSpacing: "-0.430px",
            color: "var(--labels-primary)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>A Short Title Is Best</span>
          <span style={{
            position: "relative",
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 17,
            lineHeight: "22px",
            letterSpacing: "-0.430px",
            color: "var(--labels-primary)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>A description should be a short, complete sentence.</span>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 10,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <Buttons2
            style={{
              position: "relative",
              height: 48,
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}
            text={"Action 1"}
            mode={"light"}
            type={"destructive"}
          />
          <Buttons2
            style={{
              position: "relative",
              height: 48,
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}
            text={"Action 2"}
            mode={"light"}
            type={"secondary"}
          />
          <Buttons2
            style={{
              position: "relative",
              height: 48,
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}
            text={"Action 3"}
            mode={"light"}
            type={"secondary"}
          />
          <Buttons2
            style={{
              position: "relative",
              height: 48,
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}
            text={"Action 4"}
            mode={"light"}
            type={"secondary"}
          />
          <Buttons2
            style={{
              position: "relative",
              height: 48,
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}
            text={"Action 5"}
            mode={"light"}
            type={"secondary"}
          />
          <Buttons2
            style={{
              position: "relative",
              height: 48,
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}
            text={"Action 6"}
            mode={"light"}
            type={"secondary"}
          />
          <Buttons2
            style={{
              position: "relative",
              height: 48,
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}
            text={"Action 7"}
            mode={"light"}
            type={"secondary"}
          />
        </div>
      </div>
    </div>
  );
}
export default Screen;
