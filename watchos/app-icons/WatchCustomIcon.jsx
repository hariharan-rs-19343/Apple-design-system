// figma node: 2402:981 _Custom Icon
export function WatchCustomIcon(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 60,
      height: 60,
      overflow: "hidden",
      borderRadius: 1000,
      backgroundColor: "rgb(255,255,255)",
      position: "relative",
      color: "rgb(255,255,255)",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 60,
        height: 60,
        backgroundColor: "rgb(32,148,250)",
      }} />
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 60,
        height: 60,
        opacity: 0.5,
        overflow: "hidden",
        borderRadius: 512,
      }}>
        <svg width={60} height={1} viewBox="0 -0.500 60 1" fill="none" style={{
          position: "absolute",
          left: 0,
          top: 30,
          width: 60,
          height: 1,
        }}>
          <path d={"M 0 0.5 L 60 0.5 L 60 -0.5 L 0 -0.5 L 0 0.5 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
        <svg width={1} height={60} viewBox="-0.500 0 1 60" fill="none" style={{
          position: "absolute",
          left: 30,
          top: 0,
          width: 1,
          height: 60,
        }}>
          <path d={"M 0.5 60 L 0.5 0 L -0.5 0 L -0.5 60 L 0.5 60 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
        <div style={{
          position: "absolute",
          left: 7.5,
          top: 7.5,
          width: 45,
          height: 45,
          borderRadius: "50%",
          boxShadow: "inset 0 0 0 1px rgb(255,255,255)",
        }} />
        <div style={{
          position: "absolute",
          left: 14.063,
          top: 14.063,
          width: 31.875,
          height: 31.875,
          borderRadius: "50%",
          boxShadow: "inset 0 0 0 1px rgb(255,255,255)",
        }} />
        <div style={{
          position: "absolute",
          left: 22.5,
          top: 22.5,
          width: 15,
          height: 15,
          borderRadius: "50%",
          boxShadow: "inset 0 0 0 1px rgb(255,255,255)",
        }} />
      </div>
    </div>
  );
}
export default WatchCustomIcon;
