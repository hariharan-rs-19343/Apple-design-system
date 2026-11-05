// figma node: 533:9612 _Description (3 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "mode=" + __venc(p.mode);

export function Description(_p = {}) {
  const props = { ..._p, mode: _p.mode ?? "light", description2: _p.description2 ?? "Description 2" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 81,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 13,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "18px",
        letterSpacing: "-0.080px",
        color: "rgba(127,127,127,0.5)",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>{props.text1 ?? "Description 2"}</span>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 81,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 13,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "18px",
        letterSpacing: "-0.080px",
        color: "var(--labels-primary)",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>{props.text1 ?? "Description 2"}</span>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 81,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 13,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "18px",
        letterSpacing: "-0.080px",
        color: "var(--labels-primary)",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>{props.description2}</span>
    </div>
  );
  const __impls = {
    // figma: Mode=Dark Elevated
    "mode=dark elevated": __body0,
    // figma: Mode=Dark
    "mode=dark": __body1,
    // figma: Mode=Light
    "mode=light": __body2,
  };
  return (__impls[__vkey(props)] ?? __body2)();
}
export default Description;
