import { Disclosure } from '../controls/Disclosure.jsx';

// figma node: 553:22765 Grouped Table Header (3 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "type=" + __venc(p.type);

export function GroupedTableHeader(_p = {}) {
  const props = { ..._p, type: _p.type ?? "default", text: _p.text ?? "Header text", showDescription: _p.showDescription ?? false, description: _p.description ?? "Optional description", showDisclosure: _p.showDisclosure ?? true };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 393,
      display: "flex",
      flexDirection: "row",
      padding: "0px 19px 0px 19px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 3,
        padding: "0px 0px 5px 0px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          width: 306,
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 590,
          fontSize: 20,
          lineHeight: "25px",
          letterSpacing: "-0.450px",
          color: "var(--labels-primary)",
          flexShrink: 0,
        }}>{props.text}</span>
        {props.showDescription && (
        <span style={{
          position: "relative",
          width: 306,
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 15,
          lineHeight: "20px",
          letterSpacing: "-0.230px",
          color: "rgba(60,60,67,0.6)",
          flexShrink: 0,
        }}>{props.description}</span>
        )}
      </div>
      {props.showDisclosure && (
      <div style={{
          position: "relative",
          width: 29,
          height: 25,
          flexShrink: 0,
        }}>{props.icon1 ?? <Disclosure tableOpen={false} />}</div>
      )}
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 393,
      display: "flex",
      flexDirection: "column",
      padding: "0px 16px 7px 16px",
      alignItems: "flex-end",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 590,
        fontSize: 15,
        lineHeight: "20px",
        letterSpacing: "-0.230px",
        color: "rgba(60,60,67,0.6)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text}</span>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 393,
      display: "flex",
      flexDirection: "column",
      padding: "0px 16px 0px 16px",
      alignItems: "flex-end",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          padding: "0px 0px 7px 0px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexGrow: 1,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 13,
            lineHeight: "16px",
            color: "rgba(60,60,67,0.6)",
            textTransform: "uppercase",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.text}</span>
        </div>
      </div>
    </div>
  );
  const __impls = {
    // figma: Type=Prominent
    "type=prominent": __body0,
    // figma: Type=Plain
    "type=plain": __body1,
    // figma: Type=Default
    "type=default": __body2,
  };
  return (__impls[__vkey(props)] ?? __body2)();
}
export default GroupedTableHeader;
