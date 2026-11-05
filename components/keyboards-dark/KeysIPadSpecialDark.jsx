// figma node: 515:63647 _Keys/iPad - Special/Dark (1 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "align=" + __venc(p.align) + '|' + "type=" + __venc(p.type);

export function KeysIPadSpecialDark(_p = {}) {
  const props = { ..._p, align: _p.align ?? "left", type: _p.type ?? "text", label: _p.label ?? "label" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 156,
      height: 74,
      borderRadius: 8,
      backgroundColor: "rgba(255,255,255,0.12)",
      boxShadow: "0px 1px 0px 0px rgba(0,0,0,0.4)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "10px 7px 10px 7px",
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
        fontWeight: 274,
        fontSize: 24,
        textAlign: "right",
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--labels-primary)",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>{props.text1 ?? "􀓖"}</span>
    </div>
  );
  const __impls = {
    // figma: Align=Left, Type=Text
    "align=left|type=text": __body0,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default KeysIPadSpecialDark;
