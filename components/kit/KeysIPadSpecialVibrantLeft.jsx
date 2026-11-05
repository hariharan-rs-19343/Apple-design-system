import { KeysLightVibrantSecondary } from './KeysLightVibrantSecondary.jsx';

// figma node: 515:63580 _Keys/iPad - Special/Vibrant/Left/Dictation
export function KeysIPadSpecialVibrantLeft(_p = {}) {
  const props = { ..._p, label: _p.label ?? "label" };
  return (
    <div className={props.className} style={{
      width: 156,
      height: 74,
      borderRadius: 8,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "6px 7px 6px 7px",
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
          width: 156,
          height: 74,
        }}>
        <KeysLightVibrantSecondary style={{ transform: "scale(3.120, 1.480)", transformOrigin: "0 0" }} />
      </div>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 274,
        fontSize: 24,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--labels-primary)",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>{props.text1 ?? "􀊰"}</span>
    </div>
  );
}
export default KeysIPadSpecialVibrantLeft;
