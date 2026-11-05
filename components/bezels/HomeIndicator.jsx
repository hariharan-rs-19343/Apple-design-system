// figma node: 106:60033 Home Indicator (4 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "device=" + __venc(p.device) + '|' + "orientation=" + __venc(p.orientation);

export function HomeIndicator(_p = {}) {
  const props = { ..._p, showHomeIndicator: _p.showHomeIndicator ?? true, device: _p.device ?? "iPad", orientation: _p.orientation ?? "portrait" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 400,
      height: 34,
      position: "relative",
      ...props.style,
    }}>
      {props.showHomeIndicator && (
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        transform: "matrix(-1,0,0,1,272,21)",
        transformOrigin: "0 0",
        width: 144,
        height: 5,
        borderRadius: 100,
        backgroundColor: "var(--labels-primary)",
      }} />
      )}
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 400,
      height: 21,
      position: "relative",
      ...props.style,
    }}>
      {props.showHomeIndicator && (
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        transform: "matrix(-1,0,0,1,313,8)",
        transformOrigin: "0 0",
        width: 226,
        height: 5,
        borderRadius: 100,
        backgroundColor: "var(--labels-primary)",
      }} />
      )}
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 400,
      height: 19.5,
      position: "relative",
      ...props.style,
    }}>
      {props.showHomeIndicator && (
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        transform: "matrix(-1,0,0,1,336,7)",
        transformOrigin: "0 0",
        width: 273,
        height: 5.5,
        borderRadius: 100,
        backgroundColor: "var(--labels-primary)",
      }} />
      )}
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 400,
      height: 19.5,
      position: "relative",
      ...props.style,
    }}>
      {props.showHomeIndicator && (
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        transform: "matrix(-1,0,0,1,358,7)",
        transformOrigin: "0 0",
        width: 315,
        height: 5.5,
        borderRadius: 100,
        backgroundColor: "var(--labels-primary)",
      }} />
      )}
    </div>
  );
  const __impls = {
    // figma: Device=iPhone, Orientation=Portrait
    "device=iPhone|orientation=portrait": __body0,
    // figma: Device=iPhone, Orientation=Landscape
    "device=iPhone|orientation=landscape": __body1,
    // figma: Device=iPad, Orientation=Portrait
    "device=iPad|orientation=portrait": __body2,
    // figma: Device=iPad, Orientation=Landscape
    "device=iPad|orientation=landscape": __body3,
  };
  return (__impls[__vkey(props)] ?? __body2)();
}
export default HomeIndicator;
