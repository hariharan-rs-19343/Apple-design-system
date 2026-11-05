import { AppIconIPhone } from '../app-icons/AppIconIPhone.jsx';
import { DockMaterial } from './DockMaterial.jsx';
import { LaunchPad } from '../labels/LaunchPad.jsx';
import { SystemIcons } from '../app-icons/SystemIcons.jsx';

// figma node: 558:50382 _Dock - iPad
export function DockIPad(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      padding: "18px 0px 20px 0px",
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
        gap: 17,
        padding: "18.500px 19px 18.500px 19px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 683,
            height: 101,
          }}>
          <DockMaterial style={{ transform: "scale(6.830, 1.010)", transformOrigin: "0 0" }} />
        </div>
        <div style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon1 ?? <AppIconIPhone showAppName={false} appName={"FaceTime"} icon1={<SystemIcons icon={"messages"} mode={"default"} style={{ transform: "scale(0.970, 0.970)", transformOrigin: "0 0" }} />} type={"system"} />}</div>
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
          }}>{props.icon3 ?? <AppIconIPhone showAppName={false} appName={"FaceTime"} icon1={<SystemIcons icon={"music"} mode={"default"} style={{ transform: "scale(0.970, 0.970)", transformOrigin: "0 0" }} />} type={"system"} />}</div>
        <div style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon4 ?? <AppIconIPhone showAppName={false} appName={"FaceTime"} icon1={<SystemIcons icon={"mail"} mode={"default"} style={{ transform: "scale(0.970, 0.970)", transformOrigin: "0 0" }} />} type={"system"} />}</div>
        <AppIconIPhone
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}
          showAppName={false}
          appName={"FaceTime"}
          icon1={<SystemIcons icon={"calendar"} mode={"default"} style={{ transform: "scale(0.970, 0.970)", transformOrigin: "0 0" }} />}
          type={"system"}
        />
        <AppIconIPhone
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}
          showAppName={false}
          appName={"FaceTime"}
          icon1={<SystemIcons icon={"photos"} mode={"default"} style={{ transform: "scale(0.970, 0.970)", transformOrigin: "0 0" }} />}
          type={"system"}
        />
        <AppIconIPhone
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}
          showAppName={false}
          appName={"FaceTime"}
          icon1={<SystemIcons icon={"notes"} mode={"default"} style={{ transform: "scale(0.970, 0.970)", transformOrigin: "0 0" }} />}
          type={"system"}
        />
        <div style={{
          position: "relative",
          width: 1,
          backgroundColor: "var(--fills-vibrant-secondary)",
          flexShrink: 0,
          alignSelf: "stretch",
        }} />
        <LaunchPad
          style={{ position: "relative", flexShrink: 0 }}
          mode={"light"}
        />
      </div>
    </div>
  );
}
export default DockIPad;
