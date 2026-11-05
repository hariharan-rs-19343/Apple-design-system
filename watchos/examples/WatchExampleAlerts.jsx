import { WatchAlert } from '../alerts/WatchAlert.jsx';
import { WatchBezels } from '../bezels/WatchBezels.jsx';
import { WatchFaces } from '../bezels/WatchFaces.jsx';

// figma node: 6504:3319 Example/Alerts
export function WatchExampleAlerts(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: "calc(var(--watch-screen-width) * 1px)",
      height: "calc(var(--watch-screen-height) * 1px)",
      borderRadius: 20,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: "calc(var(--watch-screen-width) * 1px)",
        height: "calc(var(--watch-screen-height) * 1px)",
        overflow: "hidden",
        borderRadius: 14,
      }}>
        <WatchFaces
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 205,
            height: 251,
          }}
          face={"modular"}
          size={"49mm"}
        />
        <WatchAlert style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 205,
            height: 251,
          }} />
      </div>
      <WatchBezels
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 205,
          height: 251,
        }}
        bezelSize={"49mm"}
      />
    </div>
  );
}
export default WatchExampleAlerts;
