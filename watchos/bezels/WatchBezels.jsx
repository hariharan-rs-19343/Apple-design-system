// figma node: 6508:4834 Bezels (5 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "bezelSize=" + __venc(p.bezelSize);

export function WatchBezels(_p = {}) {
  const props = { ..._p, bezelSize: _p.bezelSize ?? "44mm" };
  const __body0 = () => (
    <div className={props.className} data-watch-mode={props.bezelSize} style={{
      width: "calc(var(--watch-screen-width) * 1px)",
      height: "calc(var(--watch-screen-height) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div className="fig-asset-29acfcbd503ec3b7" style={{
        position: "absolute",
        left: -47.5,
        top: -109.5,
        width: 300,
        height: 470,
      }} />
    </div>
  );
  const __body1 = () => (
    <div className={props.className} data-watch-mode={props.bezelSize} style={{
      width: "calc(var(--watch-screen-width) * 1px)",
      height: "calc(var(--watch-screen-height) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div className="fig-asset-342112614b5795be" style={{
        position: "absolute",
        left: -36,
        top: -96,
        width: 280,
        height: 440,
      }} />
    </div>
  );
  const __body2 = () => (
    <div className={props.className} data-watch-mode={props.bezelSize} style={{
      width: "calc(var(--watch-screen-width) * 1px)",
      height: "calc(var(--watch-screen-height) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div className="fig-asset-b7266aee1b0e88ab" style={{
        position: "absolute",
        left: -53,
        top: -123,
        width: 290,
        height: 470,
      }} />
    </div>
  );
  const __body3 = () => (
    <div className={props.className} data-watch-mode={props.bezelSize} style={{
      width: "calc(var(--watch-screen-width) * 1px)",
      height: "calc(var(--watch-screen-height) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div className="fig-asset-ec8483f1929d829c" style={{
        position: "absolute",
        left: -37,
        top: -88,
        width: 260,
        height: 400,
      }} />
    </div>
  );
  const __body4 = () => (
    <div className={props.className} data-watch-mode={props.bezelSize} style={{
      width: "calc(var(--watch-screen-width) * 1px)",
      height: "calc(var(--watch-screen-height) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div className="fig-asset-ae1adef6f49c6d3a" style={{
        position: "absolute",
        left: -44,
        top: -101.5,
        width: 250,
        height: 400,
      }} />
    </div>
  );
  const __impls = {
    // figma: Bezel Size=49mm
    "bezelSize=49mm": __body0,
    // figma: Bezel Size=46mm
    "bezelSize=46mm": __body1,
    // figma: Bezel Size=44mm
    "bezelSize=44mm": __body2,
    // figma: Bezel Size=42mm
    "bezelSize=42mm": __body3,
    // figma: Bezel Size=40mm
    "bezelSize=40mm": __body4,
  };
  return (__impls[__vkey(props)] ?? __body2)();
}
export default WatchBezels;
