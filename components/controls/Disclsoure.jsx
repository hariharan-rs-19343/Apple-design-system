// figma node: 131:70155 _Disclsoure (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "open=" + __venc(p.open);

export function Disclsoure(_p = {}) {
  const props = { ..._p, open: _p.open ?? true };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 14,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "2px 0px 2px 0px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 590,
        fontSize: 17,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "rgba(60,60,67,0.3)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "􀆊"}</span>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 14,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "2px 0px 2px 0px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 590,
        fontSize: 17,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "rgba(60,60,67,0.3)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "􀆈"}</span>
    </div>
  );
  const __impls = {
    // figma: Open=False
    "open=false": __body0,
    // figma: Open=True
    "open=true": __body1,
  };
  return (__impls[__vkey(props)] ?? __body1)();
}
export default Disclsoure;
