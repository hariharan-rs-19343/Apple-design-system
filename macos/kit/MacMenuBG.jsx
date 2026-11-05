// figma node: 488:1821 _Menu BG — light menu material: tint rgba(245,245,245,0.67) over a backdrop blur.
export function MacMenuBG(_p = {}) {
  return (
    <div className={_p.className} style={{
      width: 160,
      height: 160,
      borderRadius: 13,
      background: "rgba(245,245,245,0.67)",
      backdropFilter: "blur(40px) saturate(1.8)",
      WebkitBackdropFilter: "blur(40px) saturate(1.8)",
      boxShadow: "0px 0px 2px 0px rgba(0,0,0,0.1), 0px 0px 25px 0px rgba(0,0,0,0.16)",
      position: "relative",
      ..._p.style,
    }} />
  );
}
export default MacMenuBG;
