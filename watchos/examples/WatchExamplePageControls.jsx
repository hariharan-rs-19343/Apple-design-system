import { WatchBezels } from '../bezels/WatchBezels.jsx';
import { WatchNavigationBar } from '../navigation/WatchNavigationBar.jsx';
import { WatchTabs } from '../scrollbars/WatchTabs.jsx';

// figma node: 6556:10247 Example/Page Controls
export function WatchExamplePageControls(_p = {}) {
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
        backgroundColor: "rgb(0,0,0)",
      }}>
        <WatchTabs
          style={{
            position: "absolute",
            left: 195,
            top: 0,
            height: 251,
          }}
          pages={"4"}
          position={"4"}
        />
        <WatchNavigationBar
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 205,
            height: 46,
          }}
          type={"status bar"}
        />
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
export default WatchExamplePageControls;
