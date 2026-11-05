import { Buttons2 } from './Buttons2.jsx';
import { LiquidGlassRegularMedium } from './LiquidGlassRegularMedium.jsx';

// figma node: 5446:10266 Action Sheet
export function ActionSheet(_p = {}) {
  const props = { ..._p, showDescription: _p.showDescription ?? true, title: _p.title ?? "A Short Title Is Best", description: _p.description ?? "A description should be a short, complete sentence." };
  return (
    <div className={props.className} style={{
      width: 300,
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "14px 14px 14px 14px",
      justifyContent: "center",
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
        }}>{props.title}</span>
        {props.showDescription && (
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
        }}>{props.description}</span>
        )}
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
  );
}
export default ActionSheet;
