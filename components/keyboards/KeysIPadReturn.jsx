// figma node: 204:69463 _Keys - iPad - Return (4 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "mode=" + __venc(p.mode) + '|' + "prominent=" + __venc(p.prominent);

export function KeysIPadReturn(_p = {}) {
  const props = { ..._p, label: _p.label ?? "􁂆", mode: _p.mode ?? "light", prominent: _p.prominent ?? false };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 105,
      height: 74,
      borderRadius: 8.5,
      backgroundColor: "rgb(0,145,255)",
      display: "flex",
      flexDirection: "row",
      padding: "0px 13px 10px 0px",
      justifyContent: "flex-end",
      alignItems: "flex-end",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"SF Compact\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 457,
        fontSize: 23,
        textAlign: "right",
        whiteSpace: "nowrap",
        lineHeight: "28px",
        letterSpacing: "-0.400px",
        color: "var(--grays-white)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 105,
      height: 74,
      borderRadius: 8.5,
      backgroundColor: "rgba(237,237,237,0.17)",
      display: "flex",
      flexDirection: "row",
      padding: "0px 13px 10px 0px",
      justifyContent: "flex-end",
      alignItems: "flex-end",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"SF Compact\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 457,
        fontSize: 23,
        textAlign: "right",
        whiteSpace: "nowrap",
        lineHeight: "28px",
        letterSpacing: "-0.400px",
        color: "rgb(255,255,255)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 105,
      height: 74,
      borderRadius: 8.5,
      backgroundColor: "var(--accents-blue)",
      display: "flex",
      flexDirection: "row",
      padding: "0px 13px 10px 0px",
      justifyContent: "flex-end",
      alignItems: "flex-end",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"SF Compact\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 457,
        fontSize: 23,
        textAlign: "right",
        whiteSpace: "nowrap",
        lineHeight: "28px",
        letterSpacing: "-0.400px",
        color: "rgb(0,0,0)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 105,
      height: 74,
      borderRadius: 8.5,
      background: "linear-gradient(rgba(255,255,255,0.67),rgba(255,255,255,0.67)), linear-gradient(rgb(25,25,25),rgb(25,25,25))",
      display: "flex",
      flexDirection: "row",
      padding: "0px 13px 10px 0px",
      justifyContent: "flex-end",
      alignItems: "flex-end",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"SF Compact\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 457,
        fontSize: 23,
        textAlign: "right",
        whiteSpace: "nowrap",
        lineHeight: "28px",
        letterSpacing: "-0.400px",
        color: "var(--labels-primary)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __impls = {
    // figma: Mode=Dark, Prominent=True
    "mode=dark|prominent=true": __body0,
    // figma: Mode=Dark, Prominent=False
    "mode=dark|prominent=false": __body1,
    // figma: Mode=Light, Prominent=True
    "mode=light|prominent=true": __body2,
    // figma: Mode=Light, Prominent=False
    "mode=light|prominent=false": __body3,
  };
  return (__impls[__vkey(props)] ?? __body3)();
}
export default KeysIPadReturn;
