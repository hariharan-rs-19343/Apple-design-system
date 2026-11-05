// figma node: 5626:54577 _Controls - BG - iPhone (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "on=" + __venc(p.on);

export function ControlsBGIPhone(_p = {}) {
  const props = { ..._p, on: _p.on ?? true };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 66,
      height: 66,
      borderRadius: 296,
      position: "relative",
      ...props.style,
    }}>
      <svg width={66} height={66} viewBox="0 0 66 66" fill="none" style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 66,
        height: 66,
        overflow: "hidden",
        borderRadius: 296,
      }}>
        <path d={"M 0 33 C 0 14.775 14.775 0 33 0 L 33 0 C 51.225 0 66 14.775 66 33 L 66 33 C 66 51.225 51.225 66 33 66 L 33 66 C 14.775 66 0 51.225 0 33 L 0 33 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 66,
      height: 66,
      borderRadius: 296,
      position: "relative",
      ...props.style,
    }}>
      <svg width={66} height={66} viewBox="0 0 66 66" fill="none" style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 66,
        height: 66,
        overflow: "hidden",
        borderRadius: 1000,
        color: "rgb(36,36,36)",
      }}>
        <path d={"M 0 33 C 0 14.775 14.775 0 33 0 L 33 0 C 51.225 0 66 14.775 66 33 L 66 33 C 66 51.225 51.225 66 33 66 L 33 66 C 14.775 66 0 51.225 0 33 L 0 33 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
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
export default ControlsBGIPhone;
