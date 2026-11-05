// figma node: 5564:42709 _Search Field Value - BG Context = Bright (3 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "state=" + __venc(p.state);

export function SearchFieldValueBGContext(_p = {}) {
  const props = { ..._p, state: _p.state ?? "placeholder", placeholder: _p.placeholder ?? "Placeholder" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      backgroundColor: "rgb(220,58,58)",
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
        fontWeight: 510,
        fontSize: 17,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--labels-controls-primary-xxxx)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "Label"}</span>
      <div style={{
        position: "relative",
        width: 2,
        borderRadius: 10,
        backgroundColor: "var(--accents-blue)",
        flexShrink: 0,
        alignSelf: "stretch",
      }} />
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 22,
      backgroundColor: "rgb(220,58,58)",
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
        fontWeight: 510,
        fontSize: 17,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--labels-controls-primary-xxxx)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "Label"}</span>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 22,
      backgroundColor: "rgb(220,58,58)",
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
        fontWeight: 510,
        fontSize: 17,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--labels-controls-tertiary-xxxx)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.placeholder}</span>
    </div>
  );
  const __impls = {
    // figma: State=Typing
    "state=typing": __body0,
    // figma: State=Value
    "state=value": __body1,
    // figma: State=Placeholder
    "state=placeholder": __body2,
  };
  return (__impls[__vkey(props)] ?? __body2)();
}
export default SearchFieldValueBGContext;
