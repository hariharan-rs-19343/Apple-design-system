import { TrailingDisclosure } from '../sidebar-items/TrailingDisclosure.jsx';

// figma node: 131:65557 Header/Dark
export function HeaderDark2(_p = {}) {
  const props = { ..._p, sectionHeading: _p.sectionHeading ?? "Section Heading" };
  return (
    <div className={props.className} style={{
      width: 260,
      display: "flex",
      flexDirection: "row",
      padding: "22px 12px 10px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 17,
        whiteSpace: "nowrap",
        lineHeight: "22px",
        letterSpacing: "-0.430px",
        color: "rgba(60,60,67,0.6)",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>{props.sectionHeading}</span>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 17,
          textAlign: "right",
          whiteSpace: "nowrap",
          lineHeight: "22px",
          letterSpacing: "-0.430px",
          color: "rgba(60,60,67,0.6)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "Detail"}</span>
        <div style={{
            position: "relative",
            width: 18,
            height: 18,
            flexShrink: 0,
          }}>{props.icon1 ?? <TrailingDisclosure open={true} />}</div>
      </div>
    </div>
  );
}
export default HeaderDark2;
