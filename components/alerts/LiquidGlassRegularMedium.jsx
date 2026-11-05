// figma node: 5584:32503 Liquid Glass - Regular - Medium (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "mode=" + __venc(p.mode);

export function LiquidGlassRegularMedium(_p = {}) {
  const props = { ..._p, mode: _p.mode ?? "light" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 160,
      height: 160,
      position: "relative",
      ...props.style,
    }}>
      <svg width={160} height={160} viewBox="0 0 160 160" fill="none" style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 160,
        height: 160,
        opacity: 0.67,
        borderRadius: 34,
        filter: "drop-shadow(0px 8px 40px rgba(0,0,0,0.12))",
        color: "rgb(64,64,64)",
      }}>
        <path d={"M 0 54.4 C 0 35.358 0 25.837 3.706 18.564 C 6.965 12.167 12.167 6.965 18.564 3.706 C 25.837 0 35.358 0 54.4 0 L 105.6 0 C 124.642 0 134.163 0 141.436 3.706 C 147.833 6.965 153.035 12.167 156.294 18.564 C 160 25.837 160 35.358 160 54.4 L 160 105.6 C 160 124.642 160 134.163 156.294 141.436 C 153.035 147.833 147.833 153.035 141.436 156.294 C 134.163 160 124.642 160 105.6 160 L 54.4 160 C 35.358 160 25.837 160 18.564 156.294 C 12.167 153.035 6.965 147.833 3.706 141.436 C 0 134.163 0 124.642 0 105.6 L 0 54.4 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 160,
      height: 160,
      position: "relative",
      ...props.style,
    }}>
      <svg width={160} height={160} viewBox="0 0 160 160" fill="none" style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 160,
        height: 160,
        borderRadius: 34,
        filter: "drop-shadow(0px 8px 40px rgba(0,0,0,0.12))",
        color: "rgb(247,247,247)",
      }}>
        <path d={"M 0 54.4 C 0 35.358 0 25.837 3.706 18.564 C 6.965 12.167 12.167 6.965 18.564 3.706 C 25.837 0 35.358 0 54.4 0 L 105.6 0 C 124.642 0 134.163 0 141.436 3.706 C 147.833 6.965 153.035 12.167 156.294 18.564 C 160 25.837 160 35.358 160 54.4 L 160 105.6 C 160 124.642 160 134.163 156.294 141.436 C 153.035 147.833 147.833 153.035 141.436 156.294 C 134.163 160 124.642 160 105.6 160 L 54.4 160 C 35.358 160 25.837 160 18.564 156.294 C 12.167 153.035 6.965 147.833 3.706 141.436 C 0 134.163 0 124.642 0 105.6 L 0 54.4 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
  const __impls = {
    // figma: Mode=Dark
    "mode=dark": __body0,
    // figma: Mode=Light
    "mode=light": __body1,
  };
  return (__impls[__vkey(props)] ?? __body1)();
}
export default LiquidGlassRegularMedium;
