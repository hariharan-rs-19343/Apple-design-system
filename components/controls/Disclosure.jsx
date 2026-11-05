// figma node: 553:22777 _Disclosure (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "tableOpen=" + __venc(p.tableOpen);

export function Disclosure(_p = {}) {
  const props = { ..._p, tableOpen: _p.tableOpen ?? true };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 29,
      height: 25,
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 4.667,
        top: 0,
        width: 11,
        height: 25,
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 590,
        fontSize: 17,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "25px",
        color: "var(--accents-blue)",
      }}>{props.text1 ?? "􀆊"}</span>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 29,
      height: 25,
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 1.667,
        top: 0,
        width: 16,
        height: 25,
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 590,
        fontSize: 17,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "25px",
        color: "var(--accents-blue)",
      }}>{props.text1 ?? "􀆈"}</span>
    </div>
  );
  const __impls = {
    // figma: Table Open=False
    "tableOpen=false": __body0,
    // figma: Table Open=True
    "tableOpen=true": __body1,
  };
  return (__impls[__vkey(props)] ?? __body1)();
}
export default Disclosure;
