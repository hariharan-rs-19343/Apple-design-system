import { AppIconIPhone } from '../app-icons/AppIconIPhone.jsx';
import { DockMaterial } from './DockMaterial.jsx';
import { SystemIcons } from '../app-icons/SystemIcons.jsx';

// figma node: 558:50551 _Dock - iPhone
export function DockIPhone(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 402,
      display: "flex",
      flexDirection: "row",
      padding: "20px 17px 17px 17px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        padding: "20px 19px 19px 19px",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 368,
            height: 103,
          }}>
          <DockMaterial style={{ transform: "scale(3.680, 1.030)", transformOrigin: "0 0" }} />
        </div>
        <div style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon1 ?? <AppIconIPhone showAppName={false} appName={"FaceTime"} icon1={<SystemIcons icon={"phone"} mode={"default"} style={{ transform: "scale(0.970, 0.970)", transformOrigin: "0 0" }} />} type={"system"} />}</div>
        <div style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon2 ?? <AppIconIPhone showAppName={false} appName={"FaceTime"} icon1={<SystemIcons icon={"safari"} mode={"default"} style={{ transform: "scale(0.970, 0.970)", transformOrigin: "0 0" }} />} type={"system"} />}</div>
        <div style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon3 ?? <AppIconIPhone showAppName={false} appName={"FaceTime"} icon1={<SystemIcons icon={"messages"} mode={"default"} style={{ transform: "scale(0.970, 0.970)", transformOrigin: "0 0" }} />} type={"system"} />}</div>
        <div style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon4 ?? <AppIconIPhone showAppName={false} appName={"FaceTime"} icon1={<SystemIcons icon={"music"} mode={"default"} style={{ transform: "scale(0.970, 0.970)", transformOrigin: "0 0" }} />} type={"system"} />}</div>
      </div>
    </div>
  );
}
export default DockIPhone;
