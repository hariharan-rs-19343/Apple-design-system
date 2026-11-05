// figma node: 47:61030 _Page Control / Platter - Light
export function PageControlPlatterLight(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 50,
      height: 24,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 50,
        height: 24,
        borderRadius: 100,
        backgroundColor: "rgb(217,217,217)",
        backdropFilter: "blur(30px)",
      }} />
    </div>
  );
}
export default PageControlPlatterLight;
