// figma node: 39:67340 _Header Trailing Accessories (4 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "type=" + __venc(p.type);

export function HeaderTrailingAccessories(_p = {}) {
  const props = { ..._p, type: _p.type ?? "disclosure open" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 63,
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
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
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "rgba(60,60,67,0.6)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "Detail"}</span>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 590,
        fontSize: 19,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "var(--accents-blue)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text2 ?? "􀆊"}</span>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      justifyContent: "flex-end",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 15,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "20px",
        color: "var(--accents-blue)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "Action"}</span>
    </div>
  );
  const __body2 = () => (
    <div className={"fig-asset-7f12ea1300756f14 " + (props.className || '')} style={{
      width: 42,
      height: 42,
      borderRadius: 10,
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }} />
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 44,
      height: 44,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 44,
        height: 44,
        opacity: 0.05,
        borderRadius: "50%",
        backgroundColor: "var(--accents-blue)",
      }} />
      <span style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 44,
        height: 44,
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 17,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "20px",
        color: "var(--accents-blue)",
      }}>{props.text1 ?? "􀈎"}</span>
    </div>
  );
  const __impls = {
    // figma: Type=Disclosure Open
    "type=disclosure open": __body0,
    // figma: Type=Action
    "type=action": __body1,
    // figma: Type=Image
    "type=image": __body2,
    // figma: Type=Button
    "type=button": __body3,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default HeaderTrailingAccessories;
