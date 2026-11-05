import { WatchBezels } from '../bezels/WatchBezels.jsx';
import { WatchNavigationBar } from '../navigation/WatchNavigationBar.jsx';
import { WatchToggle } from '../controls/WatchToggle.jsx';

// figma node: 6556:10825 Example/Toggles
export function WatchExampleToggles(_p = {}) {
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
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
      }}>
        <WatchNavigationBar
          style={{
            position: "relative",
            height: 46,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          type={"status bar"}
        />
        <WatchToggle
          style={{
            position: "relative",
            height: 57.5,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          state={"on"}
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
export default WatchExampleToggles;
