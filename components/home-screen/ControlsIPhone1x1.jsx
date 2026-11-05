import { ControlsBGIPhone } from './ControlsBGIPhone.jsx';

// figma node: 2524:24525 _Controls - iPhone - 1x1 (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "on=" + __venc(p.on);

export function ControlsIPhone1x1(_p = {}) {
  const props = { ..._p, on: _p.on ?? true, symbol: _p.symbol ?? "􀑚" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 70,
      height: 70,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 70,
          height: 70,
        }}>{props.icon1 ?? <ControlsBGIPhone on={true} style={{ transform: "scale(1.061, 1.061)", transformOrigin: "0 0" }} />}</div>
      <span style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 70,
        height: 70,
        opacity: 0.9,
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 700,
        fontSize: 19,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "100%",
        letterSpacing: "-0.200px",
        color: "var(--accents-red)",
      }}>{props.symbol}</span>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 70,
      height: 70,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 70,
          height: 70,
        }}>{props.icon1 ?? <ControlsBGIPhone on={false} style={{ transform: "scale(1.061, 1.061)", transformOrigin: "0 0" }} />}</div>
      <span style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 70,
        height: 70,
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 700,
        fontSize: 19,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "100%",
        letterSpacing: "-0.200px",
        color: "var(--grays-white)",
      }}>{props.symbol}</span>
    </div>
  );
  const __impls = {
    // figma: On=True
    "on=true": __body0,
    // figma: On=False
    "on=false": __body1,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default ControlsIPhone1x1;
