// figma node: 515:64015 _Keys/iPhone - Uppercase/Dark (3 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "style2=" + __venc(p.style2);

export function KeysIPhoneUppercaseDark(_p = {}) {
  const props = { ..._p, style2: _p.style2 ?? "default", key: _p.key ?? "Q" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 32,
      height: 42,
      borderRadius: 4.599999904632568,
      backgroundColor: "rgba(255,255,255,0.3)",
      boxShadow: "0px 1px 0px 0px rgba(0,0,0,0.4)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 9,
        top: 7,
        width: 15,
        height: 28,
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 19,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "28px",
        color: "var(--labels-primary)",
      }}>{props.key}</span>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 32,
      height: 42,
      borderRadius: 4.599999904632568,
      backgroundColor: "rgba(255,255,255,0.3)",
      boxShadow: "0px 1px 0px 0px rgba(0,0,0,0.4)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 8,
        top: 5,
        width: 17,
        height: 28,
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 22,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "28px",
        letterSpacing: "-0.400px",
        color: "var(--labels-primary)",
      }}>{props.key}</span>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 32,
      height: 42,
      borderRadius: 4.599999904632568,
      backgroundColor: "rgba(255,255,255,0.3)",
      boxShadow: "0px 1px 0px 0px rgba(0,0,0,0.4)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 8,
        top: 7,
        width: 17,
        height: 28,
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 22,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "28px",
        letterSpacing: "-0.400px",
        color: "var(--labels-primary)",
      }}>{props.key}</span>
    </div>
  );
  const __impls = {
    // figma: Style=Default (Currencies)
    "style2=default (currencies)": __body0,
    // figma: Style=Default (Baseline Adjusted)
    "style2=default (baseline adjusted)": __body1,
    // figma: Style=Default
    "style2=default": __body2,
  };
  return (__impls[__vkey(props)] ?? __body2)();
}
export default KeysIPhoneUppercaseDark;
