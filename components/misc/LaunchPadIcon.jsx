import { SystemIcons } from '../app-icons/SystemIcons.jsx';

// figma node: 5593:41203 _Launch Pad Icon
export function LaunchPadIcon(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 21,
      height: 21,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 21,
          height: 21,
        }}>{props.icon1 ?? <SystemIcons icon={"shortcuts"} mode={"default"} style={{ transform: "scale(0.318, 0.318)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
}
export default LaunchPadIcon;
