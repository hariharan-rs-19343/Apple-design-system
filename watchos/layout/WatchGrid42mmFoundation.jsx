// figma node: 6432:4078 Grid/42mm/Foundation
export function WatchGrid42mmFoundation(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} data-watch-mode="42mm" style={{
      width: 187,
      height: 223,
      overflow: "hidden",
      mixBlendMode: "screen",
      borderRadius: 44,
      boxShadow: "inset 0 0 0 2px var(--watch-colors-red)",
      position: "relative",
      ...props.style,
    }}>
      <svg width={161} height={191} viewBox="0 0 161 191" fill="none" style={{
        position: "absolute",
        left: 13,
        top: 16,
        width: 161,
        height: 191,
        color: "var(--watch-colors-green)",
      }}>
        <path d={"M 0 0 L 0 -0.5 L -0.5 -0.5 L -0.5 0 L 0 0 Z M 161 0 L 161.5 0 L 161.5 -0.5 L 161 -0.5 L 161 0 Z M 161 191 L 161 191.5 L 161.5 191.5 L 161.5 191 L 161 191 Z M 0 191 L -0.5 191 L -0.5 191.5 L 0 191.5 L 0 191 Z M 0 0 L 0 0.5 L 161 0.5 L 161 0 L 161 -0.5 L 0 -0.5 L 0 0 Z M 161 0 L 160.5 0 L 160.5 191 L 161 191 L 161.5 191 L 161.5 0 L 161 0 Z M 161 191 L 161 190.5 L 0 190.5 L 0 191 L 0 191.5 L 161 191.5 L 161 191 Z M 0 191 L 0.5 191 L 0.5 0 L 0 0 L -0.5 0 L -0.5 191 L 0 191 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 187,
        height: 223,
        borderRadius: 44,
        boxShadow: "inset 0 0 0 3px var(--watch-colors-green)",
      }} />
      <svg width={187} height={0.500} viewBox="0 -0.250 187 0.500" fill="none" style={{
        position: "absolute",
        left: 0,
        top: 61.25,
        width: "calc(var(--watch-screen-width) * 1px)",
        height: 0.5,
        opacity: 0.5,
        color: "var(--watch-colors-white-fff)",
      }}>
        <path d={"M 0 0.25 L 187 0.25 L 187 -0.25 L 0 -0.25 L 0 0.25 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
      <svg width={187} height={0.500} viewBox="0 -0.250 187 0.500" fill="none" style={{
        position: "absolute",
        left: 0,
        top: 111.5,
        width: "calc(var(--watch-screen-width) * 1px)",
        height: 0.5,
        color: "var(--watch-colors-green)",
      }}>
        <path d={"M 0 0 L 0 0.25 L 187 0.25 L 187 0 L 187 -0.25 L 0 -0.25 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
      <svg width={0.500} height={223} viewBox="-0.250 0 0.500 223" fill="none" style={{
        position: "absolute",
        left: 93.5,
        top: 0,
        width: 0.5,
        height: 223,
        color: "var(--watch-colors-green)",
      }}>
        <path d={"M 0 0 L -0.25 0 L -0.25 223 L 0 223 L 0.25 223 L 0.25 0 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
}
export default WatchGrid42mmFoundation;
