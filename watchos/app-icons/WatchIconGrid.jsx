// figma node: 2402:653 _Icon Grid
export function WatchIconGrid(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 1024,
      height: 1024,
      position: "relative",
      color: "rgb(0,122,255)",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 1024,
        height: 1024,
        opacity: 0.5,
        overflow: "hidden",
        borderRadius: 512,
        boxShadow: "inset 0 0 0 1px rgb(255,59,48)",
      }}>
        <svg width={1024} height={1} viewBox="0 -0.500 1024 1" fill="none" style={{
          position: "absolute",
          left: 0,
          top: 512,
          width: 1024,
          height: 1,
        }}>
          <path d={"M 0 0.5 L 1024 0.5 L 1024 -0.5 L 0 -0.5 L 0 0.5 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
        <svg width={1} height={1024} viewBox="-0.500 0 1 1024" fill="none" style={{
          position: "absolute",
          left: 512,
          top: 0,
          width: 1,
          height: 1024,
        }}>
          <path d={"M 0.5 1024 L 0.5 0 L -0.5 0 L -0.5 1024 L 0.5 1024 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
        <div style={{
          position: "absolute",
          left: 128,
          top: 128,
          width: 768,
          height: 768,
          borderRadius: "50%",
          boxShadow: "inset 0 0 0 1px rgb(0,122,255)",
        }} />
        <div style={{
          position: "absolute",
          left: 240,
          top: 240,
          width: 544,
          height: 544,
          borderRadius: "50%",
          boxShadow: "inset 0 0 0 1px rgb(0,122,255)",
        }} />
        <div style={{
          position: "absolute",
          left: 384,
          top: 384,
          width: 256,
          height: 256,
          borderRadius: "50%",
          boxShadow: "inset 0 0 0 1px rgb(0,122,255)",
        }} />
      </div>
    </div>
  );
}
export default WatchIconGrid;
