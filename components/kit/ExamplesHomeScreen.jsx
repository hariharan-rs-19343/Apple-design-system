import { HomeScreenIPhone } from './HomeScreenIPhone.jsx';
import { IPhone17Pro } from '../kit/IPhone17Pro.jsx';

// figma node: 754:62878 Examples/Home Screen
export function ExamplesHomeScreen(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 402,
      height: 874,
      position: "relative",
      ...props.style,
    }}>
      <HomeScreenIPhone
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 402,
          height: 874,
        }}
        widgets={"none"}
      />
      <IPhone17Pro
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 402,
          height: 874,
        }}
        color={"silver"}
      />
    </div>
  );
}
export default ExamplesHomeScreen;
