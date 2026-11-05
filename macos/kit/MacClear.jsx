// figma node: 480:1042 _Clear (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "state=" + __venc(p.state);

export function MacClear(_p = {}) {
  const props = { ..._p, state: _p.state ?? "idle" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 16,
      height: 15,
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 16,
        height: 15,
        fontFamily: "\"SF Pro Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: "calc(var(--mac-fields-font-size-search-glyph) * 1px)",
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "15px",
        color: "var(--mac-labels-vibrant-use-plus-lighter-darker-primary)",
      }}>{props.text1 ?? "􀁡"}</span>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 16,
      height: 15,
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 16,
        height: 15,
        fontFamily: "\"SF Pro Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: "calc(var(--mac-fields-font-size-search-glyph) * 1px)",
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "15px",
        color: "var(--mac-labels-vibrant-use-plus-lighter-darker-secondary)",
      }}>{props.text1 ?? "􀁡"}</span>
    </div>
  );
  const __impls = {
    // figma: State=Clicked
    "state=clicked": __body0,
    // figma: State=Idle
    "state=idle": __body1,
  };
  return (__impls[__vkey(props)] ?? __body1)();
}
export default MacClear;
