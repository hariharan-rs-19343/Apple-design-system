// figma node: 510:78330 _Materials/Mode Options (20 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "mode=" + __venc(p.mode) + '|' + "style2=" + __venc(p.style2);

export function MaterialsModeOptions(_p = {}) {
  const props = { ..._p, mode: _p.mode ?? "light", style2: _p.style2 ?? "ultrathin" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 100,
      height: 100,
      background: "linear-gradient(rgb(124,124,124),rgb(124,124,124)), linear-gradient(rgba(28,28,28,0.9),rgba(28,28,28,0.9))",
      backdropFilter: "blur(100px)",
      position: "relative",
      ...props.style,
    }} />
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 100,
      height: 100,
      backgroundColor: "rgba(0,0,0,0.6)",
      backdropFilter: "blur(100px)",
      position: "relative",
      ...props.style,
    }} />
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 100,
      height: 100,
      backgroundColor: "rgba(0,0,0,0.41)",
      backdropFilter: "blur(100px)",
      position: "relative",
      ...props.style,
    }} />
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 100,
      height: 100,
      backgroundColor: "rgba(0,0,0,0.26)",
      backdropFilter: "blur(100px)",
      position: "relative",
      ...props.style,
    }} />
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: 100,
      height: 100,
      backgroundColor: "rgba(0,0,0,0.02)",
      backdropFilter: "blur(100px)",
      position: "relative",
      ...props.style,
    }} />
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: 100,
      height: 100,
      backgroundColor: "rgba(255,255,255,0.75)",
      backdropFilter: "blur(50px)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }} />
  );
  const __body6 = () => (
    <div className={props.className} style={{
      width: 100,
      height: 100,
      background: "linear-gradient(rgba(255,255,255,0.84),rgba(255,255,255,0.84)), linear-gradient(rgba(255,255,255,0.34),rgba(255,255,255,0.34))",
      backdropFilter: "blur(100px)",
      position: "relative",
      ...props.style,
    }} />
  );
  const __body7 = () => (
    <div className={props.className} style={{
      width: 100,
      height: 100,
      background: "linear-gradient(rgba(255,255,255,0.6),rgba(255,255,255,0.6)), linear-gradient(rgba(255,255,255,0.25),rgba(255,255,255,0.25))",
      backdropFilter: "blur(100px)",
      position: "relative",
      ...props.style,
    }} />
  );
  const __body8 = () => (
    <div className={props.className} style={{
      width: 100,
      height: 100,
      background: "linear-gradient(rgba(255,255,255,0.4),rgba(255,255,255,0.4)), linear-gradient(rgba(255,255,255,0.05),rgba(255,255,255,0.05))",
      backdropFilter: "blur(100px)",
      position: "relative",
      ...props.style,
    }} />
  );
  const __body9 = () => (
    <div className={props.className} style={{
      width: 100,
      height: 100,
      background: "linear-gradient(rgba(255,255,255,0.03),rgba(255,255,255,0.03)), linear-gradient(rgba(255,255,255,0.07),rgba(255,255,255,0.07))",
      backdropFilter: "blur(100px)",
      position: "relative",
      ...props.style,
    }} />
  );
  const __impls = {
    // figma: Mode=Dark, Style=Chrome
    "mode=dark|style2=chrome": __body0,
    // figma: Mode=IC - Dark, Style=Chrome
    "mode=ic - dark|style2=chrome": __body0,
    // figma: Mode=Dark, Style=Thick
    "mode=dark|style2=thick": __body1,
    // figma: Mode=IC - Dark, Style=Thick
    "mode=ic - dark|style2=thick": __body1,
    // figma: Mode=Dark, Style=Regular
    "mode=dark|style2=regular": __body2,
    // figma: Mode=IC - Dark, Style=Regular
    "mode=ic - dark|style2=regular": __body2,
    // figma: Mode=Dark, Style=Thin
    "mode=dark|style2=thin": __body3,
    // figma: Mode=IC - Dark, Style=Thin
    "mode=ic - dark|style2=thin": __body3,
    // figma: Mode=Dark, Style=Ultrathin
    "mode=dark|style2=ultrathin": __body4,
    // figma: Mode=IC - Dark, Style=Ultrathin
    "mode=ic - dark|style2=ultrathin": __body4,
    // figma: Mode=Light, Style=Chrome
    "mode=light|style2=chrome": __body5,
    // figma: Mode=IC - Light, Style=Chrome
    "mode=ic - light|style2=chrome": __body5,
    // figma: Mode=Light, Style=Thick
    "mode=light|style2=thick": __body6,
    // figma: Mode=IC - Light, Style=Thick
    "mode=ic - light|style2=thick": __body6,
    // figma: Mode=Light, Style=Regular
    "mode=light|style2=regular": __body7,
    // figma: Mode=IC - Light, Style=Regular
    "mode=ic - light|style2=regular": __body7,
    // figma: Mode=Light, Style=Thin
    "mode=light|style2=thin": __body8,
    // figma: Mode=IC - Light, Style=Thin
    "mode=ic - light|style2=thin": __body8,
    // figma: Mode=Light, Style=Ultrathin
    "mode=light|style2=ultrathin": __body9,
    // figma: Mode=IC - Light, Style=Ultrathin
    "mode=ic - light|style2=ultrathin": __body9,
  };
  return (__impls[__vkey(props)] ?? __body9)();
}
export default MaterialsModeOptions;
