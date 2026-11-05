import { WatchBezels } from '../bezels/WatchBezels.jsx';
import { WatchNavigationBar } from '../navigation/WatchNavigationBar.jsx';
import { WatchSlider } from '../sliders/WatchSlider.jsx';

// figma node: 6556:10827 Example/Sliders
export function WatchExampleSliders(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: "calc(var(--watch-screen-width) * 1px)",
      height: "calc(var(--watch-screen-height) * 1px)",
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
        <WatchSlider
          style={{
            position: "absolute",
            left: 0,
            top: 46,
            width: 205,
            height: 57.5,
          }}
          type={"segmented"}
          stops={"3"}
          value={"1"}
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
export default WatchExampleSliders;
