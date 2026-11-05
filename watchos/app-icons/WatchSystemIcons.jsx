// figma node: 2402:669 _System Icons (1 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "icon=" + __venc(p.icon);

export function WatchSystemIcons(_p = {}) {
  const props = { ..._p, icon: _p.icon ?? "app store" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 60,
      height: 60,
      overflow: "hidden",
      borderRadius: 1000,
      backgroundColor: "rgb(255,255,255)",
      position: "relative",
      ...props.style,
    }}>
      <div className="fig-asset-2af3a30b7d0f7c59" style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 60,
        height: 60,
      }} />
    </div>
  );
  const __impls = {
    // figma: Icon=App Store
    "icon=app store": __body0,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default WatchSystemIcons;
