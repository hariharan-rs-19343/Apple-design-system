// figma node: 2969:14757 iPhone 15 Pro (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "style2=" + __venc(p.style2);

export function IPhone15Pro(_p = {}) {
  const props = { ..._p, style2: _p.style2 ?? "bezel" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 393,
      height: 852,
      position: "relative",
      ...props.style,
    }}>
      <div className="fig-asset-8138780d63d5e2db-2d946849" style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 393,
        height: 852,
      }} />
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 393,
      height: 852,
      position: "relative",
      ...props.style,
    }}>
      <div className="fig-asset-6c3fa3d2a87e60f3" style={{
        position: "absolute",
        left: -40,
        top: -40,
        width: 473,
        height: 932,
      }} />
    </div>
  );
  const __impls = {
    // figma: Style=Display only
    "style2=display only": __body0,
    // figma: Style=Bezel
    "style2=bezel": __body1,
  };
  return (__impls[__vkey(props)] ?? __body1)();
}
export default IPhone15Pro;
