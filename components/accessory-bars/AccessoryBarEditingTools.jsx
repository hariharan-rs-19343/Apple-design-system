import { Toolbar } from './Toolbar.jsx';

// figma node: 119:55784 _Accessory Bar - Editing Tools
export function AccessoryBarEditingTools(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 393,
      display: "flex",
      flexDirection: "row",
      padding: "3px 18px 10px 18px",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 32,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <Toolbar symbol={"􀅒"} state={"default"} />}</div>
      <div style={{
          position: "relative",
          width: 32,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon2 ?? <Toolbar symbol={"􀏫"} state={"default"} />}</div>
      <div style={{
          position: "relative",
          width: 32,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon3 ?? <Toolbar symbol={"􀌞"} state={"default"} />}</div>
      <div style={{
        position: "relative",
        width: 32,
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "absolute",
          left: 3,
          top: 5,
          width: 27,
          height: 22,
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 22,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "22px",
          color: "var(--labels-primary)",
        }}>􀎾</span>
      </div>
      <div style={{
        position: "relative",
        width: 32,
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "absolute",
          left: 3,
          top: 5,
          width: 27,
          height: 22,
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 22,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "22px",
          color: "var(--labels-primary)",
        }}>􀹃</span>
      </div>
      <div style={{
        position: "relative",
        width: 32,
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "absolute",
          left: 4,
          top: 5,
          width: 24,
          height: 22,
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 22,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "22px",
          color: "var(--labels-primary)",
        }}>􀈷</span>
      </div>
    </div>
  );
}
export default AccessoryBarEditingTools;
