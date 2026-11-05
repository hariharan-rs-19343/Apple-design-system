// figma node: 6432:4079 Grid/44mm/Foundation
export function WatchGrid44mmFoundation(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} data-watch-mode="44mm" style={{
      width: 184,
      height: 224,
      overflow: "hidden",
      mixBlendMode: "screen",
      borderRadius: 34.5,
      boxShadow: "inset 0 0 0 2px var(--watch-colors-red)",
      position: "relative",
      ...props.style,
    }}>
      <svg width={163} height={199} viewBox="0 0 163 199" fill="none" style={{
        position: "absolute",
        left: 10.5,
        top: 12.5,
        width: 163,
        height: 199,
        color: "var(--watch-colors-green)",
      }}>
        <path d={"M 0 0 L 0 -0.5 L -0.5 -0.5 L -0.5 0 L 0 0 Z M 163 0 L 163.5 0 L 163.5 -0.5 L 163 -0.5 L 163 0 Z M 163 199 L 163 199.5 L 163.5 199.5 L 163.5 199 L 163 199 Z M 0 199 L -0.5 199 L -0.5 199.5 L 0 199.5 L 0 199 Z M 0 0 L 0 0.5 L 163 0.5 L 163 0 L 163 -0.5 L 0 -0.5 L 0 0 Z M 163 0 L 162.5 0 L 162.5 199 L 163 199 L 163.5 199 L 163.5 0 L 163 0 Z M 163 199 L 163 198.5 L 0 198.5 L 0 199 L 0 199.5 L 163 199.5 L 163 199 Z M 0 199 L 0.5 199 L 0.5 0 L 0 0 L -0.5 0 L -0.5 199 L 0 199 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 184,
        height: 224,
        borderRadius: 34.5,
        boxShadow: "inset 0 0 0 3px var(--watch-colors-green)",
      }} />
      <svg width={184} height={0.500} viewBox="0 -0.250 184 0.500" fill="none" style={{
        position: "absolute",
        left: 0,
        top: 51.5,
        width: "calc(var(--watch-screen-width) * 1px)",
        height: 0.5,
        opacity: 0.5,
        color: "var(--watch-colors-white-fff)",
      }}>
        <path d={"M 0 0.25 L 184 0.25 L 184 -0.25 L 0 -0.25 L 0 0.25 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
      <svg width={184} height={0.500} viewBox="0 -0.250 184 0.500" fill="none" style={{
        position: "absolute",
        left: 0,
        top: 112,
        width: "calc(var(--watch-screen-width) * 1px)",
        height: 0.5,
        color: "var(--watch-colors-green)",
      }}>
        <path d={"M 0 0 L 0 0.25 L 184 0.25 L 184 0 L 184 -0.25 L 0 -0.25 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
      <svg width={0.500} height={224} viewBox="-0.250 0 0.500 224" fill="none" style={{
        position: "absolute",
        left: 92,
        top: 0,
        width: 0.5,
        height: 224,
        color: "var(--watch-colors-green)",
      }}>
        <path d={"M 0 0 L -0.25 0 L -0.25 224 L 0 224 L 0.25 224 L 0.25 0 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
}
export default WatchGrid44mmFoundation;
