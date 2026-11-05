import { MacWindowControlsUtility } from './MacWindowControlsUtility.jsx';
import { MacWindowTitleUtility } from './MacWindowTitleUtility.jsx';

// figma node: 585:3384 Utility Panel/Title Bar
export function MacUtilityPanelTitleBar(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 200,
      height: 22,
      position: "relative",
      ...props.style,
    }}>
      <div style={{ position: "absolute", left: 76, top: 4 }}>{props.icon1 ?? <MacWindowTitleUtility />}</div>
      <div style={{ position: "absolute", left: 5, top: 5 }}>{props.icon2 ?? <MacWindowControlsUtility active={true} />}</div>
    </div>
  );
}
export default MacUtilityPanelTitleBar;
