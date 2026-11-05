// figma node: 8512:8309 _Swatch (4 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "type=" + __venc(p.type) + '|' + "mode=" + __venc(p.mode);

export function WatchSwatch(_p = {}) {
  const props = { ..._p, color: _p.color ?? "Color", type: _p.type ?? "label", mode: _p.mode ?? "light" };
  const __body0 = () => (
    <div className={"fig-asset-7f796ce21f42e90f-4c236e23 " + (props.className || '')} style={{
      width: 100,
      height: 100,
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style,
    }}>
      <svg width={53.047} height={56.367} viewBox="0 0 53.047 56.367" fill="none" style={{
        position: "absolute",
        left: 23,
        top: 22,
        width: 53.047,
        height: 56.367,
      }}>
        <path d={"M 40.508 56.367 L 36.211 42.695 L 16.406 42.695 L 12.109 56.367 L 0 56.367 L 19.57 0 L 33.438 0 L 53.047 56.367 L 40.508 56.367 Z M 26.172 10.781 L 18.945 33.867 L 33.672 33.867 L 26.445 10.781 L 26.172 10.781 Z"} fill="currentColor" fillRule="evenodd" />
      </svg>
      <span style={{
        position: "absolute",
        left: 0,
        top: -30,
        width: 33,
        height: 18,
        fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 13,
        whiteSpace: "nowrap",
        lineHeight: "18px",
        letterSpacing: "-0.080px",
        color: "rgb(255,255,255)",
      }}>{props.color}</span>
    </div>
  );
  const __body1 = () => (
    <div className={"fig-asset-7f796ce21f42e90f-4c236e23 " + (props.className || '')} style={{
      width: 100,
      height: 100,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 10,
        top: 10,
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: "rgb(255,56,60)",
      }} />
      <span style={{
        position: "absolute",
        left: 0,
        top: -30,
        width: 33,
        height: 18,
        fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 13,
        whiteSpace: "nowrap",
        lineHeight: "18px",
        letterSpacing: "-0.080px",
        color: "rgb(255,255,255)",
      }}>{props.color}</span>
    </div>
  );
  const __body2 = () => (
    <div className={"fig-asset-7f796ce21f42e90f-61c27bbc " + (props.className || '')} style={{
      width: 100,
      height: 100,
      position: "relative",
      color: "var(--watch-labels-primary)",
      ...props.style,
    }}>
      <svg width={53.047} height={56.367} viewBox="0 0 53.047 56.367" fill="none" style={{
        position: "absolute",
        left: 23,
        top: 22,
        width: 53.047,
        height: 56.367,
      }}>
        <path d={"M 40.508 56.367 L 36.211 42.695 L 16.406 42.695 L 12.109 56.367 L 0 56.367 L 19.57 0 L 33.438 0 L 53.047 56.367 L 40.508 56.367 Z M 26.172 10.781 L 18.945 33.867 L 33.672 33.867 L 26.445 10.781 L 26.172 10.781 Z"} fill="currentColor" fillRule="evenodd" />
      </svg>
      <span style={{
        position: "absolute",
        left: 0,
        top: -30,
        width: 33,
        height: 18,
        fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 13,
        whiteSpace: "nowrap",
        lineHeight: "18px",
        letterSpacing: "-0.080px",
        color: "rgb(255,255,255)",
      }}>{props.color}</span>
    </div>
  );
  const __body3 = () => (
    <div className={"fig-asset-7f796ce21f42e90f-61c27bbc " + (props.className || '')} style={{
      width: 100,
      height: 100,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 10,
        top: 10,
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: "var(--watch-accents-red)",
      }} />
      <span style={{
        position: "absolute",
        left: 0,
        top: -30,
        width: 33,
        height: 18,
        fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 13,
        whiteSpace: "nowrap",
        lineHeight: "18px",
        letterSpacing: "-0.080px",
        color: "rgb(255,255,255)",
      }}>{props.color}</span>
    </div>
  );
  const __impls = {
    // figma: Type=Label, Mode=Light
    "type=label|mode=light": __body0,
    // figma: Type=Color, Mode=Light
    "type=color|mode=light": __body1,
    // figma: Type=Label, Mode=Dark
    "type=label|mode=dark": __body2,
    // figma: Type=Color, Mode=Dark
    "type=color|mode=dark": __body3,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default WatchSwatch;
