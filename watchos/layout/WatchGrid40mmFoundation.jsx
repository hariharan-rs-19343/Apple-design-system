// figma node: 6432:4037 Grid/40mm/Foundation
export function WatchGrid40mmFoundation(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} data-watch-mode="40mm" style={{
      width: 162,
      height: 197,
      overflow: "hidden",
      mixBlendMode: "screen",
      borderRadius: 28,
      boxShadow: "inset 0 0 0 2px var(--watch-colors-red)",
      position: "relative",
      ...props.style,
    }}>
      <svg width={143} height={178} viewBox="0 0 143 178" fill="none" style={{
        position: "absolute",
        left: 9.5,
        top: 9.5,
        width: "calc(var(--watch-width-copy-safe-area) * 1px)",
        height: 178,
        color: "var(--watch-colors-green)",
      }}>
        <path d={"M 0 0 L 0 -0.5 L -0.5 -0.5 L -0.5 0 L 0 0 Z M 143 0 L 143.5 0 L 143.5 -0.5 L 143 -0.5 L 143 0 Z M 143 178 L 143 178.5 L 143.5 178.5 L 143.5 178 L 143 178 Z M 0 178 L -0.5 178 L -0.5 178.5 L 0 178.5 L 0 178 Z M 0 0 L 0 0.5 L 143 0.5 L 143 0 L 143 -0.5 L 0 -0.5 L 0 0 Z M 143 0 L 142.5 0 L 142.5 178 L 143 178 L 143.5 178 L 143.5 0 L 143 0 Z M 143 178 L 143 177.5 L 0 177.5 L 0 178 L 0 178.5 L 143 178.5 L 143 178 Z M 0 178 L 0.5 178 L 0.5 0 L 0 0 L -0.5 0 L -0.5 178 L 0 178 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 162,
        height: 197,
        borderRadius: 28,
        boxShadow: "inset 0 0 0 3px var(--watch-colors-green)",
      }} />
      <svg width={162} height={0.500} viewBox="0 -0.250 162 0.500" fill="none" style={{
        position: "absolute",
        left: 0,
        top: 48.25,
        width: "calc(var(--watch-screen-width) * 1px)",
        height: 0.5,
        opacity: 0.5,
        color: "var(--watch-colors-white-fff)",
      }}>
        <path d={"M 0 0.25 L 162 0.25 L 162 -0.25 L 0 -0.25 L 0 0.25 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
      <svg width={162} height={0.500} viewBox="0 -0.250 162 0.500" fill="none" style={{
        position: "absolute",
        left: 0,
        top: 98.5,
        width: "calc(var(--watch-screen-width) * 1px)",
        height: 0.5,
        color: "var(--watch-colors-green)",
      }}>
        <path d={"M 0 0 L 0 0.25 L 162 0.25 L 162 0 L 162 -0.25 L 0 -0.25 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
      <svg width={0.500} height={197} viewBox="-0.250 0 0.500 197" fill="none" style={{
        position: "absolute",
        left: 81,
        top: 0,
        width: 0.5,
        height: 197,
        color: "var(--watch-colors-green)",
      }}>
        <path d={"M 0 0 L -0.25 0 L -0.25 197 L 0 197 L 0.25 197 L 0.25 0 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
}
export default WatchGrid40mmFoundation;
