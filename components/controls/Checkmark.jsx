// figma node: 5509:8731 _Checkmark (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "state=" + __venc(p.state) + '|' + "mode=" + __venc(p.mode);

export function Checkmark(_p = {}) {
  const props = { ..._p, state: _p.state ?? "default", mode: _p.mode ?? "light", showCheckmark: _p.showCheckmark ?? true };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 24,
      height: 22,
      position: "relative",
      ...props.style,
    }}>
      {props.showCheckmark && (
      <span style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 24,
        height: 22,
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 590,
        fontSize: 17,
        textAlign: "center",
        lineHeight: "22px",
        color: "var(--labels-vibrant-tertiary)",
      }}>{props.text1 ?? "􀆅"}</span>
      )}
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 24,
      height: 22,
      position: "relative",
      ...props.style,
    }}>
      {props.showCheckmark && (
      <span style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 24,
        height: 22,
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 590,
        fontSize: 17,
        textAlign: "center",
        lineHeight: "22px",
        color: "var(--labels-vibrant-primary)",
      }}>{props.text1 ?? "􀆅"}</span>
      )}
    </div>
  );
  const __impls = {
    // figma: State=Disabled, Mode=Light
    "state=disabled|mode=light": __body0,
    // figma: State=Default, Mode=Light
    "state=default|mode=light": __body1,
  };
  return (__impls[__vkey(props)] ?? __body1)();
}
export default Checkmark;
