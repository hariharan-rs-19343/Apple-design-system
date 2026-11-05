import { KeysIPhone2 } from './KeysIPhone2.jsx';

// figma node: 515:63754 _Keys/iPad - Lowercase/Space|comma|period/Vibrant
export function KeysIPadLowercaseSpaceComma(_p = {}) {
  const props = { ..._p, alt: _p.alt ?? "1", key: _p.key ?? "q" };
  return (
    <div className={props.className} style={{
      width: 84,
      height: 74,
      borderRadius: 8,
      display: "flex",
      flexDirection: "column",
      gap: -17,
      padding: "6px 36px 6px 36px",
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
          width: 84,
          height: 74,
        }}>
        <KeysIPhone2
          style={{ transform: "scale(1.680, 1.480)", transformOrigin: "0 0" }}
          mode={"light"}
          state={"normal"}
        />
      </div>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 30,
        textAlign: "center",
        lineHeight: "100%",
        color: "var(--labels-primary)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.alt}</span>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 32,
        textAlign: "center",
        lineHeight: "100%",
        color: "var(--labels-primary)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.key}</span>
    </div>
  );
}
export default KeysIPadLowercaseSpaceComma;
