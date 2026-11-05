import { HeaderTrailingAccessories } from '../labels/HeaderTrailingAccessories.jsx';

// figma node: 533:14469 Header/Light (6 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "width=" + __venc(p.width) + '|' + "type=" + __venc(p.type);

export function HeaderLight(_p = {}) {
  const props = { ..._p, width: _p.width ?? "full", type: _p.type ?? "default", text: _p.text ?? "Header text", showDescription: _p.showDescription ?? false, description: _p.description ?? "Optional description", showDisclosure: _p.showDisclosure ?? true };
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
      <div style={{ position: "relative", width: 63, flexShrink: 0 }}>{props.icon1 ?? <HeaderTrailingAccessories type={"disclosure open"} />}</div>
      )}
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 393,
      display: "flex",
      flexDirection: "column",
      padding: "0px 32px 7px 32px",
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
  const __body3 = () => (
    <div className={props.className} style={{
      width: 393,
      display: "flex",
      flexDirection: "column",
      padding: "0px 32px 0px 32px",
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
  const __body4 = () => (
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
    // figma: Width=Inset, Type=Prominent
    "width=inset|type=prominent": __body0,
    // figma: Width=Full, Type=Prominent
    "width=full|type=prominent": __body0,
    // figma: Width=Inset, Type=Plain
    "width=inset|type=plain": __body1,
    // figma: Width=Full, Type=Plain
    "width=full|type=plain": __body2,
    // figma: Width=Inset, Type=Default
    "width=inset|type=default": __body3,
    // figma: Width=Full, Type=Default
    "width=full|type=default": __body4,
  };
  return (__impls[__vkey(props)] ?? __body4)();
}
export default HeaderLight;
