// figma node: 5573:24524 _Segmented Control Button (4 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "mode=" + __venc(p.mode) + '|' + "selected=" + __venc(p.selected);

export function SegmentedControlButton(_p = {}) {
  const props = { ..._p, mode: _p.mode ?? "light", selected: _p.selected ?? true };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 126,
      height: 36,
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 22.909,
        top: 0,
        width: 78.545,
        height: 36,
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 510,
        fontSize: 15,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "20px",
        letterSpacing: "-0.230px",
        color: "var(--labels-vibrant-controls-secondary)",
      }}>{props.text1 ?? "Label"}</span>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 126,
      height: 36,
      borderRadius: 100,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: -4,
        top: 0,
        width: 134,
        height: 36,
        borderRadius: 100,
        backgroundColor: "rgba(118,118,128,0.12)",
      }} />
      <span style={{
        position: "absolute",
        left: 22.909,
        top: 0,
        width: 78.545,
        height: 36,
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 510,
        fontSize: 15,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "20px",
        letterSpacing: "-0.230px",
        color: "var(--labels-vibrant-controls-primary)",
      }}>{props.text1 ?? "Label"}</span>
    </div>
  );
  const __impls = {
    // figma: Mode=Dark,Selected=False
    "mode=dark|selected=false": __body0,
    // figma: Mode=Dark,Selected=True
    "mode=dark|selected=true": __body1,
    // figma: Mode=Light, Selected=False
    "mode=light|selected=false": __body0,
    // figma: Mode=Light, Selected=True
    "mode=light|selected=true": __body1,
  };
  return (__impls[__vkey(props)] ?? __body1)();
}
export default SegmentedControlButton;
