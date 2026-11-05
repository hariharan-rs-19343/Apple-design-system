// figma node: 508:72772 _Edit Buttons/Dark (4 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "state=" + __venc(p.state);

export function EditButtonsDark(_p = {}) {
  const props = { ..._p, state: _p.state ?? "selected" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 24,
      height: 22,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 1,
        top: 0,
        width: 22,
        height: 22,
        borderRadius: "50%",
        backgroundColor: "var(--accents-red)",
      }} />
      <span style={{
        position: "absolute",
        left: 1,
        top: 0,
        width: 22,
        height: 22,
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 590,
        fontSize: 14.5,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "rgb(255,255,255)",
      }}>{props.text1 ?? "􀅽"}</span>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 24,
      height: 22,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 1,
        top: 0,
        width: 22,
        height: 22,
        borderRadius: "50%",
        backgroundColor: "var(--accents-green)",
      }} />
      <span style={{
        position: "absolute",
        left: 1,
        top: 0,
        width: 22,
        height: 22,
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 590,
        fontSize: 14.5,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "rgb(255,255,255)",
      }}>{props.text1 ?? "􀅼"}</span>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 24,
      height: 22,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 1,
        top: 0,
        width: 22,
        height: 22,
        borderRadius: "50%",
        backgroundColor: "var(--accents-blue)",
      }} />
      <span style={{
        position: "absolute",
        left: 1,
        top: 0,
        width: 22,
        height: 22,
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 590,
        fontSize: 14.5,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "rgb(255,255,255)",
      }}>{props.text1 ?? "􀆅"}</span>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 24,
      height: 22,
      position: "relative",
      color: "var(--grays-gray-3)",
      ...props.style,
    }}>
      <svg width={22} height={22} viewBox="0 0 22 22" fill="none" style={{
        position: "absolute",
        left: 1,
        top: 0,
        width: 22,
        height: 22,
      }}>
        <path d={"M 11 0 C 17.075 0 22 4.925 22 11 C 22 17.075 17.075 22 11 22 C 4.925 22 0 17.075 0 11 C 0 4.925 4.925 0 11 0 Z M 11 1.5 C 5.753 1.5 1.5 5.753 1.5 11 C 1.5 16.247 5.753 20.5 11 20.5 C 16.247 20.5 20.5 16.247 20.5 11 C 20.5 5.753 16.247 1.5 11 1.5 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
  const __impls = {
    // figma: State=Remove
    "state=remove": __body0,
    // figma: State=Add
    "state=add": __body1,
    // figma: State=Selected
    "state=selected": __body2,
    // figma: State=Unselected
    "state=unselected": __body3,
  };
  return (__impls[__vkey(props)] ?? __body2)();
}
export default EditButtonsDark;
