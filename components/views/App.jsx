import { Mail } from './Mail.jsx';

// figma node: 127:58348 _App
export function App(_p = {}) {
  const props = { ..._p, appName: _p.appName ?? "Mail" };
  return (
    <div className={props.className} style={{
      width: 60,
      height: 80,
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: -8,
        top: 67,
        width: 76,
        height: 13,
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 11,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "13px",
        color: "rgb(0,0,0)",
      }}>{props.appName}</span>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 60,
        height: 60,
        overflow: "hidden",
        borderRadius: 15,
      }}>
        <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 60,
            height: 60,
          }}>{props.instance ?? <Mail />}</div>
      </div>
    </div>
  );
}
export default App;
