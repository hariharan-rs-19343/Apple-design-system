// figma node: 515:64132 _Keys/Return/Dark (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "blueColor=" + __venc(p.blueColor);

export function KeysReturnDark(_p = {}) {
  const props = { ..._p, blueColor: _p.blueColor ?? "off", label: _p.label ?? "return" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 92,
      height: 42,
      borderRadius: 4.599999904632568,
      backgroundColor: "var(--accents-blue)",
      boxShadow: "0px 1px 0px 0px rgb(137,138,141)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 92,
        height: 42,
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "21px",
        letterSpacing: "-0.400px",
        color: "rgb(255,255,255)",
      }}>{props.label}</span>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 92,
      height: 42,
      borderRadius: 4.599999904632568,
      backgroundColor: "rgba(255,255,255,0.12)",
      boxShadow: "0px 1px 0px 0px rgba(0,0,0,0.4)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 92,
        height: 42,
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "21px",
        letterSpacing: "-0.400px",
        color: "var(--labels-primary)",
      }}>{props.label}</span>
    </div>
  );
  const __impls = {
    // figma: Blue Color=On
    "blueColor=on": __body0,
    // figma: Blue Color=Off
    "blueColor=off": __body1,
  };
  return (__impls[__vkey(props)] ?? __body1)();
}
export default KeysReturnDark;
