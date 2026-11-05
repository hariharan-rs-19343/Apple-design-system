import { ControlCenterIPad } from '../kit/ControlCenterIPad.jsx';
import { IPadProM411 } from '../examples-sidebar/IPadProM411.jsx';

// figma node: 2607:22514 Examples/Control Center
export function ExamplesControlCenter2(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 1210,
      height: 834,
      position: "relative",
      ...props.style,
    }}>
      <ControlCenterIPad style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 1210,
          height: 834,
        }} />
      <IPadProM411
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 1210,
          height: 834,
        }}
        color={"silver"}
      />
    </div>
  );
}
export default ExamplesControlCenter2;
