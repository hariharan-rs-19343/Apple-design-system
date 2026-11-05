// figma node: 5707:9420 Wallpapers - iPhone (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "mode=" + __venc(p.mode);

export function WallpapersIPhone(_p = {}) {
  const props = { ..._p, mode: _p.mode ?? "dark" };
  const __body0 = () => (
    <div className={"fig-asset-f4e8b98baf01df25 " + (props.className || '')} style={{
      width: 402,
      height: 874,
      position: "relative",
      ...props.style,
    }} />
  );
  const __body1 = () => (
    <div className={"fig-asset-f94ac88aebf3c1f2 " + (props.className || '')} style={{
      width: 402,
      height: 874,
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
export default WallpapersIPhone;
