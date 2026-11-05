import { HomeScreenIPad } from '../home-screen/HomeScreenIPad.jsx';
import { IPadProM411 } from '../examples-sidebar/IPadProM411.jsx';

// figma node: 754:62918 Examples/Home Screen
export function ExamplesHomeScreen2(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 1210,
      height: 834,
      position: "relative",
      ...props.style,
    }}>
      <HomeScreenIPad
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 1210,
          height: 834,
        }}
        widgets={"none"}
      />
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
export default ExamplesHomeScreen2;
