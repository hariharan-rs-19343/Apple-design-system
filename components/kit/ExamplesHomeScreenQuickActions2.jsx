import { HomeScreenQuickActionsIPad } from '../kit/HomeScreenQuickActionsIPad.jsx';
import { IPadProM411 } from '../examples-sidebar/IPadProM411.jsx';

// figma node: 754:62926 Examples/Home Screen Quick Actions
export function ExamplesHomeScreenQuickActions2(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 1210,
      height: 834,
      position: "relative",
      ...props.style,
    }}>
      <HomeScreenQuickActionsIPad style={{
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
export default ExamplesHomeScreenQuickActions2;
