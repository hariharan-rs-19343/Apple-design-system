// figma node: 515:63813 _Keys/iPad - Uppercase/Dark (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "type=" + __venc(p.type);

export function KeysIPadUppercaseDark(_p = {}) {
  const props = { ..._p, type: _p.type ?? "default", alt: _p.alt ?? "1", key: _p.key ?? "q" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 84,
      height: 74,
      borderRadius: 8,
      backgroundColor: "rgba(255,255,255,0.3)",
      boxShadow: "0px 1px 0px 0px rgba(0,0,0,0.4)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 37,
        top: 17,
        width: 11,
        height: 38,
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 32,
        textAlign: "center",
        lineHeight: "100%",
        color: "var(--labels-primary)",
      }}>{props.key}</span>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 84,
      height: 74,
      borderRadius: 8,
      backgroundColor: "rgba(255,255,255,0.3)",
      boxShadow: "0px 1px 0px 0px rgba(0,0,0,0.4)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 0,
        top: 33.5,
        width: 84,
        height: 33,
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 27.5,
        textAlign: "center",
        lineHeight: "100%",
        color: "var(--labels-primary)",
        textTransform: "uppercase",
      }}>{props.key}</span>
      <span style={{
        position: "absolute",
        left: 19,
        top: 8,
        width: 44,
        height: 22,
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 17,
        textAlign: "center",
        lineHeight: "22px",
        color: "rgba(60,60,67,0.3)",
      }}>{props.alt}</span>
    </div>
  );
  const __impls = {
    // figma: Type=Punctuation
    "type=punctuation": __body0,
    // figma: Type=Default
    "type=default": __body1,
  };
  return (__impls[__vkey(props)] ?? __body1)();
}
export default KeysIPadUppercaseDark;
