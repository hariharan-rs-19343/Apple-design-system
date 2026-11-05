// figma node: 515:63800 _Keys/iPad - Lowercase/Dark (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "type=" + __venc(p.type);

export function KeysIPadLowercaseDark(_p = {}) {
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
        left: 0,
        top: 28,
        width: 84,
        height: 37,
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 31,
        textAlign: "center",
        lineHeight: "100%",
        color: "var(--labels-primary)",
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
        left: 37,
        top: 25,
        width: 11,
        height: 38,
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 32,
        textAlign: "center",
        lineHeight: "100%",
        color: "var(--labels-primary)",
      }}>{props.key}</span>
      <span style={{
        position: "absolute",
        left: 36.5,
        top: 6,
        width: 11,
        height: 36,
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 30,
        textAlign: "center",
        lineHeight: "100%",
        color: "var(--labels-primary)",
      }}>{props.alt}</span>
    </div>
  );
  const __impls = {
    // figma: Type=Default
    "type=default": __body0,
    // figma: Type=Space|comma|period
    "type=space%7Ccomma%7Cperiod": __body1,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default KeysIPadLowercaseDark;
