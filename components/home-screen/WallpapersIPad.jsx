// figma node: 5707:11471 Wallpapers - iPad (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "mode=" + __venc(p.mode);

export function WallpapersIPad(_p = {}) {
  const props = { ..._p, mode: _p.mode ?? "dark" };
  const __body0 = () => (
    <div className={"fig-asset-37e814e0e37fff7e " + (props.className || '')} style={{
      width: 1210,
      height: 834,
      overflow: "hidden",
      position: "relative",
      ...props.style,
    }} />
  );
  const __body1 = () => (
    <div className={"fig-asset-8724019823d1ebf4 " + (props.className || '')} style={{
      width: 1210,
      height: 834,
      overflow: "hidden",
      position: "relative",
      ...props.style,
    }} />
  );
  const __impls = {
    // figma: Mode=Light
    "mode=light": __body0,
    // figma: Mode=Dark
    "mode=dark": __body1,
  };
  return (__impls[__vkey(props)] ?? __body1)();
}
export default WallpapersIPad;
