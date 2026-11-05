import { WatchBezels } from '../bezels/WatchBezels.jsx';
import { WatchNavigationBar } from '../navigation/WatchNavigationBar.jsx';

// figma node: 6512:5819 Example/Navigation Bars
export function WatchExampleNavigationBars(_p = {}) {
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
        <WatchNavigationBar
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 205,
            height: 58,
          }}
          type={"status + large title"}
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
export default WatchExampleNavigationBars;
