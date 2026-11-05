// figma node: 6432:4080 Grid/49mm/Foundation
export function WatchGrid49mmFoundation(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} data-watch-mode="49mm" style={{
      width: 205,
      height: 251,
      overflow: "hidden",
      mixBlendMode: "screen",
      borderRadius: 54,
      boxShadow: "inset 0 0 0 2px var(--watch-colors-red)",
      position: "relative",
      ...props.style,
    }}>
      <svg width={174} height={213} viewBox="0 0 174 213" fill="none" style={{
        position: "absolute",
        left: 15.5,
        top: 19,
        width: 174,
        height: 213,
        color: "var(--watch-colors-green)",
      }}>
        <path d={"M 0 0 L 0 -0.5 L -0.5 -0.5 L -0.5 0 L 0 0 Z M 174 0 L 174.5 0 L 174.5 -0.5 L 174 -0.5 L 174 0 Z M 174 213 L 174 213.5 L 174.5 213.5 L 174.5 213 L 174 213 Z M 0 213 L -0.5 213 L -0.5 213.5 L 0 213.5 L 0 213 Z M 0 0 L 0 0.5 L 174 0.5 L 174 0 L 174 -0.5 L 0 -0.5 L 0 0 Z M 174 0 L 173.5 0 L 173.5 213 L 174 213 L 174.5 213 L 174.5 0 L 174 0 Z M 174 213 L 174 212.5 L 0 212.5 L 0 213 L 0 213.5 L 174 213.5 L 174 213 Z M 0 213 L 0.5 213 L 0.5 0 L 0 0 L -0.5 0 L -0.5 213 L 0 213 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 205,
        height: 251,
        borderRadius: 54,
        boxShadow: "inset 0 0 0 3px var(--watch-colors-green)",
      }} />
      <svg width={205} height={0.500} viewBox="0 -0.250 205 0.500" fill="none" style={{
        position: "absolute",
        left: 0,
        top: 84.5,
        width: "calc(var(--watch-screen-width) * 1px)",
        height: 0.5,
        opacity: 0.5,
        color: "var(--watch-colors-white-fff)",
      }}>
        <path d={"M 0 0.25 L 205 0.25 L 205 -0.25 L 0 -0.25 L 0 0.25 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
      <svg width={205} height={0.500} viewBox="0 -0.250 205 0.500" fill="none" style={{
        position: "absolute",
        left: 0,
        top: 125.5,
        width: "calc(var(--watch-screen-width) * 1px)",
        height: 0.5,
        color: "var(--watch-colors-green)",
      }}>
        <path d={"M 0 0 L 0 0.25 L 205 0.25 L 205 0 L 205 -0.25 L 0 -0.25 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
      <svg width={0.500} height={251} viewBox="-0.250 0 0.500 251" fill="none" style={{
        position: "absolute",
        left: 102.5,
        top: 0,
        width: 0.5,
        height: 251,
        color: "var(--watch-colors-green)",
      }}>
        <path d={"M 0 0 L -0.25 0 L -0.25 251 L 0 251 L 0.25 251 L 0.25 0 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
}
export default WatchGrid49mmFoundation;
