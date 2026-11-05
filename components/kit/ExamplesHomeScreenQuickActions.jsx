import { HomeScreenQuickActionsIPhone } from '../kit/HomeScreenQuickActionsIPhone.jsx';
import { IPhone17Pro } from '../kit/IPhone17Pro.jsx';

// figma node: 754:62883 Examples/Home Screen Quick Actions
export function ExamplesHomeScreenQuickActions(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 402,
      height: 874,
      position: "relative",
      ...props.style,
    }}>
      <HomeScreenQuickActionsIPhone style={{
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
export default ExamplesHomeScreenQuickActions;
