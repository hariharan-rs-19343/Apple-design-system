import { TrailingDisclosure } from './TrailingDisclosure.jsx';

// figma node: 5840:30052 _Section Header (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "mode=" + __venc(p.mode);

export function SectionHeader(_p = {}) {
  const props = { ..._p, showDisclosure: _p.showDisclosure ?? true, mode: _p.mode ?? "light", showDetail: _p.showDetail ?? true };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 260,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "nowrap",
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
        color: "rgba(235,235,245,0.7)",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>{props.text1 ?? "Section Heading"}</span>
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
        {props.showDetail && (
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 17,
          textAlign: "right",
          whiteSpace: "nowrap",
          lineHeight: "22px",
          letterSpacing: "-0.430px",
          color: "rgba(235,235,245,0.7)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text2 ?? "Detail"}</span>
        )}
        {props.showDisclosure && (
        <div style={{
            position: "relative",
            width: 18,
            height: 18,
            flexShrink: 0,
          }}>{props.icon1 ?? <TrailingDisclosure open={true} />}</div>
        )}
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 260,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "nowrap",
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
      }}>{props.text1 ?? "Section Heading"}</span>
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
        {props.showDetail && (
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
        }}>{props.text2 ?? "Detail"}</span>
        )}
        {props.showDisclosure && (
        <div style={{
            position: "relative",
            width: 18,
            height: 18,
            flexShrink: 0,
          }}>{props.icon1 ?? <TrailingDisclosure open={true} />}</div>
        )}
      </div>
    </div>
  );
  const __impls = {
    // figma: Mode=Dark
    "mode=dark": __body0,
    // figma: Mode=Light
    "mode=light": __body1,
  };
  return (__impls[__vkey(props)] ?? __body1)();
}
export default SectionHeader;
