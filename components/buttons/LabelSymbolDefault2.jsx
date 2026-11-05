// figma node: 5522:11915 _Label - Symbol - Default (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "state=" + __venc(p.state) + '|' + "bGContext=" + __venc(p.bGContext);

export function LabelSymbolDefault2(_p = {}) {
  const props = { ..._p, state: _p.state ?? "default", bGContext: _p.bGContext ?? "bright", label: _p.label ?? "􀆅" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 36,
      borderRadius: 100,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 590,
        fontSize: 19,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "rgb(194,194,194)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 36,
      borderRadius: 100,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 590,
        fontSize: 19,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "rgb(77,77,77)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __impls = {
    // figma: State=Default, BG Context=Dim
    "state=default|bGContext=dim": __body0,
    // figma: State=Default, BG Context=Bright
    "state=default|bGContext=bright": __body1,
  };
  return (__impls[__vkey(props)] ?? __body1)();
}
export default LabelSymbolDefault2;
