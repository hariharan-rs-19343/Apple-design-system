import { WatchBezels } from '../bezels/WatchBezels.jsx';
import { WatchSmartStack } from '../widgets/WatchSmartStack.jsx';

// figma node: 6556:11990 Example/Smart Stack (Widgets)
export function WatchExampleSmartStackWidgets(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: "calc(var(--watch-screen-width) * 1px)",
      height: "calc(var(--watch-screen-height) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <WatchSmartStack
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 205,
          height: 251,
        }}
        size={"49mm"}
      />
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
export default WatchExampleSmartStackWidgets;
