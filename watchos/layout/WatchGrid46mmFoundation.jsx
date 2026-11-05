// figma node: 6432:4081 Grid/46mm/Foundation
export function WatchGrid46mmFoundation(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} data-watch-mode="46mm" style={{
      width: 208,
      height: 248,
      overflow: "hidden",
      mixBlendMode: "screen",
      borderRadius: 50.5,
      boxShadow: "inset 0 0 0 2px var(--watch-colors-red)",
      position: "relative",
      ...props.style,
    }}>
      <svg width={178} height={212} viewBox="0 0 178 212" fill="none" style={{
        position: "absolute",
        left: 15,
        top: 18,
        width: 178,
        height: 212,
        color: "var(--watch-colors-green)",
      }}>
        <path d={"M 0 0 L 0 -0.5 L -0.5 -0.5 L -0.5 0 L 0 0 Z M 178 0 L 178.5 0 L 178.5 -0.5 L 178 -0.5 L 178 0 Z M 178 212 L 178 212.5 L 178.5 212.5 L 178.5 212 L 178 212 Z M 0 212 L -0.5 212 L -0.5 212.5 L 0 212.5 L 0 212 Z M 0 0 L 0 0.5 L 178 0.5 L 178 0 L 178 -0.5 L 0 -0.5 L 0 0 Z M 178 0 L 177.5 0 L 177.5 212 L 178 212 L 178.5 212 L 178.5 0 L 178 0 Z M 178 212 L 178 211.5 L 0 211.5 L 0 212 L 0 212.5 L 178 212.5 L 178 212 Z M 0 212 L 0.5 212 L 0.5 0 L 0 0 L -0.5 0 L -0.5 212 L 0 212 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 208,
        height: 248,
        borderRadius: 50.5,
        boxShadow: "inset 0 0 0 3px var(--watch-colors-green)",
      }} />
      <svg width={208} height={0.500} viewBox="0 -0.250 208 0.500" fill="none" style={{
        position: "absolute",
        left: 0,
        top: 68,
        width: "calc(var(--watch-screen-width) * 1px)",
        height: 0.5,
        opacity: 0.5,
        color: "var(--watch-colors-white-fff)",
      }}>
        <path d={"M 0 0.25 L 208 0.25 L 208 -0.25 L 0 -0.25 L 0 0.25 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
      <svg width={208} height={0.500} viewBox="0 -0.250 208 0.500" fill="none" style={{
        position: "absolute",
        left: 0,
        top: 124.5,
        width: "calc(var(--watch-screen-width) * 1px)",
        height: 0.5,
        color: "var(--watch-colors-green)",
      }}>
        <path d={"M 0 0 L 0 0.25 L 208 0.25 L 208 0 L 208 -0.25 L 0 -0.25 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
      <svg width={0.500} height={248} viewBox="-0.250 0 0.500 248" fill="none" style={{
        position: "absolute",
        left: 104,
        top: 0,
        width: 0.5,
        height: 248,
        color: "var(--watch-colors-green)",
      }}>
        <path d={"M 0 0 L -0.25 0 L -0.25 248 L 0 248 L 0.25 248 L 0.25 0 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
}
export default WatchGrid46mmFoundation;
