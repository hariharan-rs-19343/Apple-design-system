// figma node: 539:165760 _Emoji Search Field (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "mode=" + __venc(p.mode);

export function EmojiSearchField(_p = {}) {
  const props = { ..._p, mode: _p.mode ?? "dark" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 377,
      height: 37,
      borderRadius: 12,
      backgroundColor: "rgb(23,23,23)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 40.5,
        top: 8,
        width: 99,
        height: 22,
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 17,
        whiteSpace: "nowrap",
        lineHeight: "22px",
        letterSpacing: "-0.500px",
        color: "rgb(96,96,96)",
      }}>{props.text1 ?? "Search Emoji"}</span>
      <span style={{
        position: "absolute",
        left: 10,
        top: 8,
        width: 21,
        height: 22,
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 17,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "rgb(96,96,96)",
      }}>{props.text2 ?? "􀊫"}</span>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 377,
      height: 37,
      borderRadius: 12,
      backgroundColor: "rgba(31,31,31,0.4)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 40.5,
        top: 8,
        width: 99,
        height: 22,
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 17,
        whiteSpace: "nowrap",
        lineHeight: "22px",
        letterSpacing: "-0.500px",
        color: "rgba(96,96,96,0.6)",
      }}>{props.text1 ?? "Search Emoji"}</span>
      <span style={{
        position: "absolute",
        left: 10,
        top: 8,
        width: 21,
        height: 22,
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 17,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "rgba(96,96,96,0.6)",
      }}>{props.text2 ?? "􀊫"}</span>
    </div>
  );
  const __impls = {
    // figma: Mode=Dark
    "mode=dark": __body0,
    // figma: Mode=Light
    "mode=light": __body1,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default EmojiSearchField;
