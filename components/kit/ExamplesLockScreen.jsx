import { IPhone17Pro } from '../kit/IPhone17Pro.jsx';
import { LockScreenIPhone } from '../home-screen/LockScreenIPhone.jsx';

// figma node: 754:64083 Examples/Lock Screen
export function ExamplesLockScreen(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 402,
      height: 874,
      borderRadius: 48,
      position: "relative",
      ...props.style,
    }}>
      <LockScreenIPhone style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 402,
          height: 874,
        }} />
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
export default ExamplesLockScreen;
