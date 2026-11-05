import { AppIconIPad } from '../app-icons/AppIconIPad.jsx';
import { AppIconIPhone } from '../app-icons/AppIconIPhone.jsx';
import { DockIPad } from './DockIPad.jsx';
import { DockMaterial } from './DockMaterial.jsx';
import { HomeScreenWidgetIPad } from './HomeScreenWidgetIPad.jsx';
import { LaunchPad } from '../labels/LaunchPad.jsx';
import { StatusBarAndMenuBar } from './StatusBarAndMenuBar.jsx';
import { SystemIcons } from '../app-icons/SystemIcons.jsx';
import { WallpapersIPad } from './WallpapersIPad.jsx';

// figma node: 595:43249 Home Screen - iPad (5 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "widgets=" + __venc(p.widgets);

export function HomeScreenIPad(_p = {}) {
  const props = { ..._p, widgets: _p.widgets ?? "none", showStatusBar: _p.showStatusBar ?? true };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 1210,
      height: 834,
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <WallpapersIPad
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 1210,
          height: 834,
        }}
        mode={"light"}
      />
      {props.showStatusBar && (
      <StatusBarAndMenuBar
        style={{
          position: "relative",
          height: 32,
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        type={"status bar only"}
      />
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        padding: "50px 124px 50px 124px",
        justifyContent: "space-between",
        alignItems: "flex-start",
        flexWrap: "wrap",
        gap: "76px 94px",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 146,
          height: 79,
          display: "flex",
          flexDirection: "column",
          gap: 6,
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
        }} />
        <AppIconIPad
          style={{ position: "relative", width: 146, flexShrink: 0 }}
          appName={"FaceTime"}
          icon1={<SystemIcons icon={"facetime"} mode={"default"} style={{ transform: "scale(1.030, 1.030)", transformOrigin: "0 0" }} />}
          type={"system"}
        />
        <AppIconIPad
          style={{ position: "relative", width: 146, flexShrink: 0 }}
          appName={"Files"}
          icon1={<SystemIcons icon={"files"} mode={"default"} style={{ transform: "scale(1.030, 1.030)", transformOrigin: "0 0" }} />}
          type={"system"}
        />
        <AppIconIPad
          style={{ position: "relative", width: 146, flexShrink: 0 }}
          appName={"Preview"}
          icon1={<SystemIcons icon={"preview"} mode={"default"} style={{ transform: "scale(1.030, 1.030)", transformOrigin: "0 0" }} />}
          type={"system"}
        />
        <AppIconIPad
          style={{ position: "relative", width: 146, flexShrink: 0 }}
          appName={"Maps"}
          icon1={<SystemIcons icon={"maps"} mode={"default"} style={{ transform: "scale(1.030, 1.030)", transformOrigin: "0 0" }} />}
          type={"system"}
        />
        <AppIconIPad
          style={{ position: "relative", width: 146, flexShrink: 0 }}
          appName={"Home"}
          icon1={<SystemIcons icon={"home"} mode={"default"} style={{ transform: "scale(1.030, 1.030)", transformOrigin: "0 0" }} />}
          type={"system"}
        />
        <AppIconIPad
          style={{ position: "relative", width: 146, flexShrink: 0 }}
          appName={"Camera"}
          icon1={<SystemIcons icon={"camera"} mode={"default"} style={{ transform: "scale(1.030, 1.030)", transformOrigin: "0 0" }} />}
          type={"system"}
        />
        <AppIconIPad
          style={{ position: "relative", width: 146, flexShrink: 0 }}
          appName={"App Store"}
          type={"system"}
        />
        <AppIconIPad
          style={{ position: "relative", width: 146, flexShrink: 0 }}
          appName={"Books"}
          icon1={<SystemIcons icon={"books"} mode={"default"} style={{ transform: "scale(1.030, 1.030)", transformOrigin: "0 0" }} />}
          type={"system"}
        />
        <AppIconIPad
          style={{ position: "relative", width: 146, flexShrink: 0 }}
          appName={"Games"}
          icon1={<SystemIcons icon={"games"} mode={"default"} style={{ transform: "scale(1.030, 1.030)", transformOrigin: "0 0" }} />}
          type={"system"}
        />
        <AppIconIPad
          style={{ position: "relative", width: 146, flexShrink: 0 }}
          appName={"TV"}
          icon1={<SystemIcons icon={"tv"} mode={"default"} style={{ transform: "scale(1.030, 1.030)", transformOrigin: "0 0" }} />}
          type={"system"}
        />
        <AppIconIPad
          style={{ position: "relative", width: 146, flexShrink: 0 }}
          appName={"News"}
          icon1={<SystemIcons icon={"news"} mode={"default"} style={{ transform: "scale(1.030, 1.030)", transformOrigin: "0 0" }} />}
          type={"system"}
        />
        <AppIconIPad
          style={{ position: "relative", width: 146, flexShrink: 0 }}
          appName={"Settings"}
          icon1={<SystemIcons icon={"settings"} mode={"default"} style={{ transform: "scale(1.030, 1.030)", transformOrigin: "0 0" }} />}
          type={"system"}
        />
        <AppIconIPad
          style={{ position: "relative", width: 146, flexShrink: 0 }}
          appName={"Clock"}
          icon1={<SystemIcons icon={"clock"} mode={"default"} style={{ transform: "scale(1.030, 1.030)", transformOrigin: "0 0" }} />}
          type={"system"}
        />
        <AppIconIPad
          style={{ position: "relative", width: 146, flexShrink: 0 }}
          appName={"Weather"}
          icon1={<SystemIcons icon={"weather"} mode={"default"} style={{ transform: "scale(1.030, 1.030)", transformOrigin: "0 0" }} />}
          type={"system"}
        />
        <AppIconIPad
          style={{ position: "relative", width: 146, flexShrink: 0 }}
          appName={"Stocks"}
          icon1={<SystemIcons icon={"stocks"} mode={"default"} style={{ transform: "scale(1.030, 1.030)", transformOrigin: "0 0" }} />}
          type={"system"}
        />
        <AppIconIPad
          style={{ position: "relative", width: 146, flexShrink: 0 }}
          appName={"Find My"}
          icon1={<SystemIcons icon={"find my"} mode={"default"} style={{ transform: "scale(1.030, 1.030)", transformOrigin: "0 0" }} />}
          type={"system"}
        />
        <AppIconIPad
          style={{ position: "relative", width: 146, flexShrink: 0 }}
          appName={"Contacts"}
          icon1={<SystemIcons icon={"contacts"} mode={"default"} style={{ transform: "scale(1.030, 1.030)", transformOrigin: "0 0" }} />}
          type={"system"}
        />
        <AppIconIPad
          style={{ position: "relative", width: 146, flexShrink: 0 }}
          appName={"Translate"}
          icon1={<SystemIcons icon={"translate"} mode={"default"} style={{ transform: "scale(1.030, 1.030)", transformOrigin: "0 0" }} />}
          type={"system"}
        />
        <AppIconIPad
          style={{ position: "relative", width: 146, flexShrink: 0 }}
          appName={"Your App"}
          type={"custom"}
        />
        <div style={{
          position: "relative",
          width: 146,
          height: 79,
          display: "flex",
          flexDirection: "column",
          gap: 6,
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
        }} />
        <div style={{
          position: "relative",
          width: 146,
          height: 79,
          display: "flex",
          flexDirection: "column",
          gap: 6,
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
        }} />
        <div style={{
          position: "relative",
          width: 146,
          height: 79,
          display: "flex",
          flexDirection: "column",
          gap: 6,
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
        }} />
        <div style={{
          position: "relative",
          width: 146,
          height: 79,
          display: "flex",
          flexDirection: "column",
          gap: 6,
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
        }} />
      </div>
      <div style={{
        position: "relative",
        borderRadius: 50,
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 12px 0px 12px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
      }}>
        <svg width={7} height={7} viewBox="0 0 7 7" fill="none" style={{
          position: "relative",
          width: 7,
          height: 7,
          borderRadius: 50,
          flexShrink: 0,
          color: "var(--grays-white)",
        }}>
          <path d={"M 0 3.5 C 0 1.567 1.567 0 3.5 0 L 3.5 0 C 5.433 0 7 1.567 7 3.5 L 7 3.5 C 7 5.433 5.433 7 3.5 7 L 3.5 7 C 1.567 7 0 5.433 0 3.5 L 0 3.5 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
        <svg width={7} height={7} viewBox="0 0 7 7" fill="none" style={{
          position: "relative",
          width: 7,
          height: 7,
          opacity: 0.3,
          borderRadius: 50,
          flexShrink: 0,
          color: "var(--grays-white)",
        }}>
          <path d={"M 0 3.5 C 0 1.567 1.567 0 3.5 0 L 3.5 0 C 5.433 0 7 1.567 7 3.5 L 7 3.5 C 7 5.433 5.433 7 3.5 7 L 3.5 7 C 1.567 7 0 5.433 0 3.5 L 0 3.5 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
      <DockIPad style={{ position: "relative", flexShrink: 0 }} />
      <div style={{
          position: "absolute",
          left: 125,
          top: 46,
          width: 138,
          height: 138,
        }}>
        <HomeScreenWidgetIPad
          style={{ transform: "scale(1.015, 1.015)", transformOrigin: "0 0" }}
          size={"sm"}
        />
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 1210,
      height: 834,
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <WallpapersIPad
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 1210,
          height: 834,
        }}
        mode={"light"}
      />
      {props.showStatusBar && (
      <StatusBarAndMenuBar
        style={{
          position: "relative",
          height: 32,
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        type={"status bar only"}
      />
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        padding: "50px 124px 50px 124px",
        justifyContent: "space-between",
        alignItems: "flex-start",
        flexWrap: "wrap",
        gap: "76px 12px",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 142,
          height: 79,
          display: "flex",
          flexDirection: "column",
          gap: 6,
          padding: "0px 6px 0px 6px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }} />
        <div style={{
          position: "relative",
          width: 142,
          height: 79,
          display: "flex",
          flexDirection: "column",
          gap: 6,
          padding: "0px 6px 0px 6px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }} />
        <AppIconIPad
          style={{ position: "relative", width: 142, flexShrink: 0 }}
          appName={"FaceTime"}
          icon1={<SystemIcons icon={"facetime"} mode={"default"} style={{ transform: "scale(1.030, 1.030)", transformOrigin: "0 0" }} />}
          type={"system"}
        />
        <AppIconIPad
          style={{ position: "relative", width: 142, flexShrink: 0 }}
          appName={"Files"}
          icon1={<SystemIcons icon={"files"} mode={"default"} style={{ transform: "scale(1.030, 1.030)", transformOrigin: "0 0" }} />}
          type={"system"}
        />
        <AppIconIPad
          style={{ position: "relative", width: 142, flexShrink: 0 }}
          appName={"Preview"}
          icon1={<SystemIcons icon={"preview"} mode={"default"} style={{ transform: "scale(1.030, 1.030)", transformOrigin: "0 0" }} />}
          type={"system"}
        />
        <AppIconIPad
          style={{ position: "relative", width: 142, flexShrink: 0 }}
          appName={"Maps"}
          icon1={<SystemIcons icon={"maps"} mode={"default"} style={{ transform: "scale(1.030, 1.030)", transformOrigin: "0 0" }} />}
          type={"system"}
        />
        <AppIconIPad
          style={{ position: "relative", width: 142, flexShrink: 0 }}
          appName={"Home"}
          icon1={<SystemIcons icon={"home"} mode={"default"} style={{ transform: "scale(1.030, 1.030)", transformOrigin: "0 0" }} />}
          type={"system"}
        />
        <AppIconIPad
          style={{ position: "relative", width: 142, flexShrink: 0 }}
          appName={"Camera"}
          icon1={<SystemIcons icon={"camera"} mode={"default"} style={{ transform: "scale(1.030, 1.030)", transformOrigin: "0 0" }} />}
          type={"system"}
        />
        <AppIconIPad
          style={{ position: "relative", width: 142, flexShrink: 0 }}
          appName={"App Store"}
          type={"system"}
        />
        <AppIconIPad
          style={{ position: "relative", width: 142, flexShrink: 0 }}
          appName={"Books"}
          icon1={<SystemIcons icon={"books"} mode={"default"} style={{ transform: "scale(1.030, 1.030)", transformOrigin: "0 0" }} />}
          type={"system"}
        />
        <AppIconIPad
          style={{ position: "relative", width: 142, flexShrink: 0 }}
          appName={"Games"}
          icon1={<SystemIcons icon={"games"} mode={"default"} style={{ transform: "scale(1.030, 1.030)", transformOrigin: "0 0" }} />}
          type={"system"}
        />
        <AppIconIPad
          style={{ position: "relative", width: 142, flexShrink: 0 }}
          appName={"TV"}
          icon1={<SystemIcons icon={"tv"} mode={"default"} style={{ transform: "scale(1.030, 1.030)", transformOrigin: "0 0" }} />}
          type={"system"}
        />
        <AppIconIPad
          style={{ position: "relative", width: 142, flexShrink: 0 }}
          appName={"News"}
          icon1={<SystemIcons icon={"news"} mode={"default"} style={{ transform: "scale(1.030, 1.030)", transformOrigin: "0 0" }} />}
          type={"system"}
        />
        <AppIconIPad
          style={{ position: "relative", width: 142, flexShrink: 0 }}
          appName={"Settings"}
          icon1={<SystemIcons icon={"settings"} mode={"default"} style={{ transform: "scale(1.030, 1.030)", transformOrigin: "0 0" }} />}
          type={"system"}
        />
        <AppIconIPad
          style={{ position: "relative", width: 142, flexShrink: 0 }}
          appName={"Clock"}
          icon1={<SystemIcons icon={"clock"} mode={"default"} style={{ transform: "scale(1.030, 1.030)", transformOrigin: "0 0" }} />}
          type={"system"}
        />
        <AppIconIPad
          style={{ position: "relative", width: 142, flexShrink: 0 }}
          appName={"Weather"}
          icon1={<SystemIcons icon={"weather"} mode={"default"} style={{ transform: "scale(1.030, 1.030)", transformOrigin: "0 0" }} />}
          type={"system"}
        />
        <AppIconIPad
          style={{ position: "relative", width: 142, flexShrink: 0 }}
          appName={"Stocks"}
          icon1={<SystemIcons icon={"stocks"} mode={"default"} style={{ transform: "scale(1.030, 1.030)", transformOrigin: "0 0" }} />}
          type={"system"}
        />
        <AppIconIPad
          style={{ position: "relative", width: 142, flexShrink: 0 }}
          appName={"Find My"}
          icon1={<SystemIcons icon={"find my"} mode={"default"} style={{ transform: "scale(1.030, 1.030)", transformOrigin: "0 0" }} />}
          type={"system"}
        />
        <AppIconIPad
          style={{ position: "relative", width: 142, flexShrink: 0 }}
          appName={"Contacts"}
          icon1={<SystemIcons icon={"contacts"} mode={"default"} style={{ transform: "scale(1.030, 1.030)", transformOrigin: "0 0" }} />}
          type={"system"}
        />
        <AppIconIPad
          style={{ position: "relative", width: 142, flexShrink: 0 }}
          appName={"Translate"}
          icon1={<SystemIcons icon={"translate"} mode={"default"} style={{ transform: "scale(1.030, 1.030)", transformOrigin: "0 0" }} />}
          type={"system"}
        />
        <AppIconIPad
          style={{ position: "relative", width: 142, flexShrink: 0 }}
          appName={"Your App"}
          type={"custom"}
        />
        <div style={{
          position: "relative",
          width: 142,
          height: 79,
          display: "flex",
          flexDirection: "column",
          gap: 6,
          padding: "0px 6px 0px 6px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }} />
        <div style={{
          position: "relative",
          width: 142,
          height: 79,
          display: "flex",
          flexDirection: "column",
          gap: 6,
          padding: "0px 6px 0px 6px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }} />
        <div style={{
          position: "relative",
          width: 142,
          height: 79,
          display: "flex",
          flexDirection: "column",
          gap: 6,
          padding: "0px 6px 0px 6px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }} />
      </div>
      <div style={{
        position: "relative",
        borderRadius: 50,
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 12px 0px 12px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
      }}>
        <svg width={7} height={7} viewBox="0 0 7 7" fill="none" style={{
          position: "relative",
          width: 7,
          height: 7,
          borderRadius: 50,
          flexShrink: 0,
          color: "var(--grays-white)",
        }}>
          <path d={"M 0 3.5 C 0 1.567 1.567 0 3.5 0 L 3.5 0 C 5.433 0 7 1.567 7 3.5 L 7 3.5 C 7 5.433 5.433 7 3.5 7 L 3.5 7 C 1.567 7 0 5.433 0 3.5 L 0 3.5 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
        <svg width={7} height={7} viewBox="0 0 7 7" fill="none" style={{
          position: "relative",
          width: 7,
          height: 7,
          opacity: 0.3,
          borderRadius: 50,
          flexShrink: 0,
          color: "var(--grays-white)",
        }}>
          <path d={"M 0 3.5 C 0 1.567 1.567 0 3.5 0 L 3.5 0 C 5.433 0 7 1.567 7 3.5 L 7 3.5 C 7 5.433 5.433 7 3.5 7 L 3.5 7 C 1.567 7 0 5.433 0 3.5 L 0 3.5 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
      <DockIPad style={{ position: "relative", flexShrink: 0 }} />
      <HomeScreenWidgetIPad
        style={{
          position: "absolute",
          left: 125,
          top: 46,
          width: 300,
          height: 136,
        }}
        size={"md"}
      />
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 1210,
      height: 834,
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <WallpapersIPad
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 1210,
          height: 834,
        }}
        mode={"light"}
      />
      {props.showStatusBar && (
      <StatusBarAndMenuBar
        style={{
          position: "relative",
          height: 32,
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        type={"status bar only"}
      />
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        padding: "50px 124px 50px 124px",
        justifyContent: "space-between",
        alignItems: "flex-start",
        flexWrap: "wrap",
        gap: "76px 12px",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 142,
          height: 79,
          display: "flex",
          flexDirection: "column",
          gap: 6,
          padding: "0px 6px 0px 6px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }} />
        <div style={{
          position: "relative",
          width: 142,
          height: 79,
          display: "flex",
          flexDirection: "column",
          gap: 6,
          padding: "0px 6px 0px 6px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }} />
        <AppIconIPad
          style={{ position: "relative", width: 142, flexShrink: 0 }}
          appName={"FaceTime"}
          icon1={<SystemIcons icon={"facetime"} mode={"default"} style={{ transform: "scale(1.030, 1.030)", transformOrigin: "0 0" }} />}
          type={"system"}
        />
        <AppIconIPad
          style={{ position: "relative", width: 142, flexShrink: 0 }}
          appName={"Files"}
          icon1={<SystemIcons icon={"files"} mode={"default"} style={{ transform: "scale(1.030, 1.030)", transformOrigin: "0 0" }} />}
          type={"system"}
        />
        <AppIconIPad
          style={{ position: "relative", width: 142, flexShrink: 0 }}
          appName={"Preview"}
          icon1={<SystemIcons icon={"preview"} mode={"default"} style={{ transform: "scale(1.030, 1.030)", transformOrigin: "0 0" }} />}
          type={"system"}
        />
        <AppIconIPad
          style={{ position: "relative", width: 142, flexShrink: 0 }}
          appName={"Maps"}
          icon1={<SystemIcons icon={"maps"} mode={"default"} style={{ transform: "scale(1.030, 1.030)", transformOrigin: "0 0" }} />}
          type={"system"}
        />
        <div style={{
          position: "relative",
          width: 142,
          height: 79,
          display: "flex",
          flexDirection: "column",
          gap: 6,
          padding: "0px 6px 0px 6px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }} />
        <div style={{
          position: "relative",
          width: 142,
          height: 79,
          display: "flex",
          flexDirection: "column",
          gap: 6,
          padding: "0px 6px 0px 6px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }} />
        <AppIconIPad
          style={{ position: "relative", width: 142, flexShrink: 0 }}
          appName={"Home"}
          icon1={<SystemIcons icon={"home"} mode={"default"} style={{ transform: "scale(1.030, 1.030)", transformOrigin: "0 0" }} />}
          type={"system"}
        />
        <AppIconIPad
          style={{ position: "relative", width: 142, flexShrink: 0 }}
          appName={"Camera"}
          icon1={<SystemIcons icon={"camera"} mode={"default"} style={{ transform: "scale(1.030, 1.030)", transformOrigin: "0 0" }} />}
          type={"system"}
        />
        <AppIconIPad
          style={{ position: "relative", width: 142, flexShrink: 0 }}
          appName={"App Store"}
          type={"system"}
        />
        <AppIconIPad
          style={{ position: "relative", width: 142, flexShrink: 0 }}
          appName={"Books"}
          icon1={<SystemIcons icon={"books"} mode={"default"} style={{ transform: "scale(1.030, 1.030)", transformOrigin: "0 0" }} />}
          type={"system"}
        />
        <AppIconIPad
          style={{ position: "relative", width: 142, flexShrink: 0 }}
          appName={"Games"}
          icon1={<SystemIcons icon={"games"} mode={"default"} style={{ transform: "scale(1.030, 1.030)", transformOrigin: "0 0" }} />}
          type={"system"}
        />
        <AppIconIPad
          style={{ position: "relative", width: 142, flexShrink: 0 }}
          appName={"TV"}
          icon1={<SystemIcons icon={"tv"} mode={"default"} style={{ transform: "scale(1.030, 1.030)", transformOrigin: "0 0" }} />}
          type={"system"}
        />
        <AppIconIPad
          style={{ position: "relative", width: 142, flexShrink: 0 }}
          appName={"News"}
          icon1={<SystemIcons icon={"news"} mode={"default"} style={{ transform: "scale(1.030, 1.030)", transformOrigin: "0 0" }} />}
          type={"system"}
        />
        <AppIconIPad
          style={{ position: "relative", width: 142, flexShrink: 0 }}
          appName={"Settings"}
          icon1={<SystemIcons icon={"settings"} mode={"default"} style={{ transform: "scale(1.030, 1.030)", transformOrigin: "0 0" }} />}
          type={"system"}
        />
        <AppIconIPad
          style={{ position: "relative", width: 142, flexShrink: 0 }}
          appName={"Clock"}
          icon1={<SystemIcons icon={"clock"} mode={"default"} style={{ transform: "scale(1.030, 1.030)", transformOrigin: "0 0" }} />}
          type={"system"}
        />
        <AppIconIPad
          style={{ position: "relative", width: 142, flexShrink: 0 }}
          appName={"Weather"}
          icon1={<SystemIcons icon={"weather"} mode={"default"} style={{ transform: "scale(1.030, 1.030)", transformOrigin: "0 0" }} />}
          type={"system"}
        />
        <AppIconIPad
          style={{ position: "relative", width: 142, flexShrink: 0 }}
          appName={"Stocks"}
          icon1={<SystemIcons icon={"stocks"} mode={"default"} style={{ transform: "scale(1.030, 1.030)", transformOrigin: "0 0" }} />}
          type={"system"}
        />
        <AppIconIPad
          style={{ position: "relative", width: 142, flexShrink: 0 }}
          appName={"Find My"}
          icon1={<SystemIcons icon={"find my"} mode={"default"} style={{ transform: "scale(1.030, 1.030)", transformOrigin: "0 0" }} />}
          type={"system"}
        />
        <AppIconIPad
          style={{ position: "relative", width: 142, flexShrink: 0 }}
          appName={"Contacts"}
          icon1={<SystemIcons icon={"contacts"} mode={"default"} style={{ transform: "scale(1.030, 1.030)", transformOrigin: "0 0" }} />}
          type={"system"}
        />
        <AppIconIPad
          style={{ position: "relative", width: 142, flexShrink: 0 }}
          appName={"Translate"}
          icon1={<SystemIcons icon={"translate"} mode={"default"} style={{ transform: "scale(1.030, 1.030)", transformOrigin: "0 0" }} />}
          type={"system"}
        />
        <AppIconIPad
          style={{ position: "relative", width: 142, flexShrink: 0 }}
          appName={"Your App"}
          type={"custom"}
        />
        <div style={{
          position: "relative",
          width: 142,
          height: 79,
          display: "flex",
          flexDirection: "column",
          gap: 6,
          padding: "0px 6px 0px 6px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }} />
      </div>
      <div style={{
        position: "relative",
        borderRadius: 50,
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 12px 0px 12px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
      }}>
        <svg width={7} height={7} viewBox="0 0 7 7" fill="none" style={{
          position: "relative",
          width: 7,
          height: 7,
          borderRadius: 50,
          flexShrink: 0,
          color: "var(--grays-white)",
        }}>
          <path d={"M 0 3.5 C 0 1.567 1.567 0 3.5 0 L 3.5 0 C 5.433 0 7 1.567 7 3.5 L 7 3.5 C 7 5.433 5.433 7 3.5 7 L 3.5 7 C 1.567 7 0 5.433 0 3.5 L 0 3.5 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
        <svg width={7} height={7} viewBox="0 0 7 7" fill="none" style={{
          position: "relative",
          width: 7,
          height: 7,
          opacity: 0.3,
          borderRadius: 50,
          flexShrink: 0,
          color: "var(--grays-white)",
        }}>
          <path d={"M 0 3.5 C 0 1.567 1.567 0 3.5 0 L 3.5 0 C 5.433 0 7 1.567 7 3.5 L 7 3.5 C 7 5.433 5.433 7 3.5 7 L 3.5 7 C 1.567 7 0 5.433 0 3.5 L 0 3.5 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
      <DockIPad style={{ position: "relative", flexShrink: 0 }} />
      <HomeScreenWidgetIPad
        style={{
          position: "absolute",
          left: 125,
          top: 46,
          width: 300,
          height: 300,
        }}
        size={"lg"}
      />
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 1210,
      height: 834,
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <WallpapersIPad
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 1210,
          height: 834,
        }}
        mode={"light"}
      />
      {props.showStatusBar && (
      <StatusBarAndMenuBar
        style={{
          position: "relative",
          height: 32,
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        type={"status bar only"}
      />
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        padding: "50px 124px 50px 124px",
        justifyContent: "space-between",
        alignItems: "flex-start",
        flexWrap: "wrap",
        gap: "76px 12px",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 142,
          height: 79,
          display: "flex",
          flexDirection: "column",
          gap: 6,
          padding: "0px 6px 0px 6px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }} />
        <div style={{
          position: "relative",
          width: 142,
          height: 79,
          display: "flex",
          flexDirection: "column",
          gap: 6,
          padding: "0px 6px 0px 6px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }} />
        <div style={{
          position: "relative",
          width: 142,
          height: 79,
          display: "flex",
          flexDirection: "column",
          gap: 6,
          padding: "0px 6px 0px 6px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }} />
        <div style={{
          position: "relative",
          width: 142,
          height: 79,
          display: "flex",
          flexDirection: "column",
          gap: 6,
          padding: "0px 6px 0px 6px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }} />
        <AppIconIPad
          style={{ position: "relative", width: 142, flexShrink: 0 }}
          appName={"FaceTime"}
          icon1={<SystemIcons icon={"facetime"} mode={"default"} style={{ transform: "scale(1.030, 1.030)", transformOrigin: "0 0" }} />}
          type={"system"}
        />
        <AppIconIPad
          style={{ position: "relative", width: 142, flexShrink: 0 }}
          appName={"Files"}
          icon1={<SystemIcons icon={"files"} mode={"default"} style={{ transform: "scale(1.030, 1.030)", transformOrigin: "0 0" }} />}
          type={"system"}
        />
        <div style={{
          position: "relative",
          width: 142,
          height: 79,
          display: "flex",
          flexDirection: "column",
          gap: 6,
          padding: "0px 6px 0px 6px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }} />
        <div style={{
          position: "relative",
          width: 142,
          height: 79,
          display: "flex",
          flexDirection: "column",
          gap: 6,
          padding: "0px 6px 0px 6px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }} />
        <div style={{
          position: "relative",
          width: 142,
          height: 79,
          display: "flex",
          flexDirection: "column",
          gap: 6,
          padding: "0px 6px 0px 6px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }} />
        <div style={{
          position: "relative",
          width: 142,
          height: 79,
          display: "flex",
          flexDirection: "column",
          gap: 6,
          padding: "0px 6px 0px 6px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }} />
        <AppIconIPad
          style={{ position: "relative", width: 142, flexShrink: 0 }}
          appName={"Preview"}
          icon1={<SystemIcons icon={"preview"} mode={"default"} style={{ transform: "scale(1.030, 1.030)", transformOrigin: "0 0" }} />}
          type={"system"}
        />
        <AppIconIPad
          style={{ position: "relative", width: 142, flexShrink: 0 }}
          appName={"Maps"}
          icon1={<SystemIcons icon={"maps"} mode={"default"} style={{ transform: "scale(1.030, 1.030)", transformOrigin: "0 0" }} />}
          type={"system"}
        />
        <AppIconIPad
          style={{ position: "relative", width: 142, flexShrink: 0 }}
          appName={"Home"}
          icon1={<SystemIcons icon={"home"} mode={"default"} style={{ transform: "scale(1.030, 1.030)", transformOrigin: "0 0" }} />}
          type={"system"}
        />
        <AppIconIPad
          style={{ position: "relative", width: 142, flexShrink: 0 }}
          appName={"Camera"}
          icon1={<SystemIcons icon={"camera"} mode={"default"} style={{ transform: "scale(1.030, 1.030)", transformOrigin: "0 0" }} />}
          type={"system"}
        />
        <AppIconIPad
          style={{ position: "relative", width: 142, flexShrink: 0 }}
          appName={"App Store"}
          type={"system"}
        />
        <AppIconIPad
          style={{ position: "relative", width: 142, flexShrink: 0 }}
          appName={"Books"}
          icon1={<SystemIcons icon={"books"} mode={"default"} style={{ transform: "scale(1.030, 1.030)", transformOrigin: "0 0" }} />}
          type={"system"}
        />
        <AppIconIPad
          style={{ position: "relative", width: 142, flexShrink: 0 }}
          appName={"Games"}
          icon1={<SystemIcons icon={"games"} mode={"default"} style={{ transform: "scale(1.030, 1.030)", transformOrigin: "0 0" }} />}
          type={"system"}
        />
        <AppIconIPad
          style={{ position: "relative", width: 142, flexShrink: 0 }}
          appName={"TV"}
          icon1={<SystemIcons icon={"tv"} mode={"default"} style={{ transform: "scale(1.030, 1.030)", transformOrigin: "0 0" }} />}
          type={"system"}
        />
        <AppIconIPad
          style={{ position: "relative", width: 142, flexShrink: 0 }}
          appName={"News"}
          icon1={<SystemIcons icon={"news"} mode={"default"} style={{ transform: "scale(1.030, 1.030)", transformOrigin: "0 0" }} />}
          type={"system"}
        />
        <AppIconIPad
          style={{ position: "relative", width: 142, flexShrink: 0 }}
          appName={"Settings"}
          icon1={<SystemIcons icon={"settings"} mode={"default"} style={{ transform: "scale(1.030, 1.030)", transformOrigin: "0 0" }} />}
          type={"system"}
        />
        <AppIconIPad
          style={{ position: "relative", width: 142, flexShrink: 0 }}
          appName={"Clock"}
          icon1={<SystemIcons icon={"clock"} mode={"default"} style={{ transform: "scale(1.030, 1.030)", transformOrigin: "0 0" }} />}
          type={"system"}
        />
        <AppIconIPad
          style={{ position: "relative", width: 142, flexShrink: 0 }}
          appName={"Weather"}
          icon1={<SystemIcons icon={"weather"} mode={"default"} style={{ transform: "scale(1.030, 1.030)", transformOrigin: "0 0" }} />}
          type={"system"}
        />
        <AppIconIPad
          style={{ position: "relative", width: 142, flexShrink: 0 }}
          appName={"Stocks"}
          icon1={<SystemIcons icon={"stocks"} mode={"default"} style={{ transform: "scale(1.030, 1.030)", transformOrigin: "0 0" }} />}
          type={"system"}
        />
        <AppIconIPad
          style={{ position: "relative", width: 142, flexShrink: 0 }}
          appName={"Find My"}
          icon1={<SystemIcons icon={"find my"} mode={"default"} style={{ transform: "scale(1.030, 1.030)", transformOrigin: "0 0" }} />}
          type={"system"}
        />
      </div>
      <div style={{
        position: "relative",
        borderRadius: 50,
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 12px 0px 12px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
      }}>
        <svg width={7} height={7} viewBox="0 0 7 7" fill="none" style={{
          position: "relative",
          width: 7,
          height: 7,
          borderRadius: 50,
          flexShrink: 0,
          color: "var(--grays-white)",
        }}>
          <path d={"M 0 3.5 C 0 1.567 1.567 0 3.5 0 L 3.5 0 C 5.433 0 7 1.567 7 3.5 L 7 3.5 C 7 5.433 5.433 7 3.5 7 L 3.5 7 C 1.567 7 0 5.433 0 3.5 L 0 3.5 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
        <svg width={7} height={7} viewBox="0 0 7 7" fill="none" style={{
          position: "relative",
          width: 7,
          height: 7,
          opacity: 0.3,
          borderRadius: 50,
          flexShrink: 0,
          color: "var(--grays-white)",
        }}>
          <path d={"M 0 3.5 C 0 1.567 1.567 0 3.5 0 L 3.5 0 C 5.433 0 7 1.567 7 3.5 L 7 3.5 C 7 5.433 5.433 7 3.5 7 L 3.5 7 C 1.567 7 0 5.433 0 3.5 L 0 3.5 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
      <DockIPad style={{ position: "relative", flexShrink: 0 }} />
      <HomeScreenWidgetIPad
        style={{
          position: "absolute",
          left: 125,
          top: 46,
          width: 628,
          height: 300,
        }}
        size={"extra large"}
      />
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: 1210,
      height: 834,
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <WallpapersIPad
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 1210,
          height: 834,
        }}
        mode={"light"}
      />
      {props.showStatusBar && (
      <StatusBarAndMenuBar
        style={{
          position: "relative",
          height: 32,
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        type={"status bar only"}
      />
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        padding: "52px 124px 52px 124px",
        justifyContent: "space-between",
        alignItems: "flex-start",
        flexWrap: "wrap",
        gap: "38px 12px",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <AppIconIPad
          style={{ position: "relative", width: 142, flexShrink: 0 }}
          appName={"FaceTime"}
          icon1={<SystemIcons icon={"facetime"} mode={"default"} style={{ transform: "scale(1.030, 1.030)", transformOrigin: "0 0" }} />}
          type={"system"}
        />
        <AppIconIPad
          style={{ position: "relative", width: 142, flexShrink: 0 }}
          appName={"Files"}
          icon1={<SystemIcons icon={"files"} mode={"default"} style={{ transform: "scale(1.030, 1.030)", transformOrigin: "0 0" }} />}
          type={"system"}
        />
        <AppIconIPad
          style={{ position: "relative", width: 142, flexShrink: 0 }}
          appName={"Preview"}
          icon1={<SystemIcons icon={"preview"} mode={"default"} style={{ transform: "scale(1.030, 1.030)", transformOrigin: "0 0" }} />}
          type={"system"}
        />
        <AppIconIPad
          style={{ position: "relative", width: 142, flexShrink: 0 }}
          appName={"Maps"}
          icon1={<SystemIcons icon={"maps"} mode={"default"} style={{ transform: "scale(1.030, 1.030)", transformOrigin: "0 0" }} />}
          type={"system"}
        />
        <AppIconIPad
          style={{ position: "relative", width: 142, flexShrink: 0 }}
          appName={"Home"}
          icon1={<SystemIcons icon={"home"} mode={"default"} style={{ transform: "scale(1.030, 1.030)", transformOrigin: "0 0" }} />}
          type={"system"}
        />
        <AppIconIPad
          style={{ position: "relative", width: 142, flexShrink: 0 }}
          appName={"Camera"}
          icon1={<SystemIcons icon={"camera"} mode={"default"} style={{ transform: "scale(1.030, 1.030)", transformOrigin: "0 0" }} />}
          type={"system"}
        />
        <AppIconIPad
          style={{ position: "relative", width: 142, flexShrink: 0 }}
          appName={"App Store"}
          type={"system"}
        />
        <AppIconIPad
          style={{ position: "relative", width: 142, flexShrink: 0 }}
          appName={"Books"}
          icon1={<SystemIcons icon={"books"} mode={"default"} style={{ transform: "scale(1.030, 1.030)", transformOrigin: "0 0" }} />}
          type={"system"}
        />
        <AppIconIPad
          style={{ position: "relative", width: 142, flexShrink: 0 }}
          appName={"Games"}
          icon1={<SystemIcons icon={"games"} mode={"default"} style={{ transform: "scale(1.030, 1.030)", transformOrigin: "0 0" }} />}
          type={"system"}
        />
        <AppIconIPad
          style={{ position: "relative", width: 142, flexShrink: 0 }}
          appName={"TV"}
          icon1={<SystemIcons icon={"tv"} mode={"default"} style={{ transform: "scale(1.030, 1.030)", transformOrigin: "0 0" }} />}
          type={"system"}
        />
        <AppIconIPad
          style={{ position: "relative", width: 142, flexShrink: 0 }}
          appName={"News"}
          icon1={<SystemIcons icon={"news"} mode={"default"} style={{ transform: "scale(1.030, 1.030)", transformOrigin: "0 0" }} />}
          type={"system"}
        />
        <AppIconIPad
          style={{ position: "relative", width: 142, flexShrink: 0 }}
          appName={"Settings"}
          icon1={<SystemIcons icon={"settings"} mode={"default"} style={{ transform: "scale(1.030, 1.030)", transformOrigin: "0 0" }} />}
          type={"system"}
        />
        <AppIconIPad
          style={{ position: "relative", width: 142, flexShrink: 0 }}
          appName={"Clock"}
          icon1={<SystemIcons icon={"clock"} mode={"default"} style={{ transform: "scale(1.030, 1.030)", transformOrigin: "0 0" }} />}
          type={"system"}
        />
        <AppIconIPad
          style={{ position: "relative", width: 142, flexShrink: 0 }}
          appName={"Weather"}
          icon1={<SystemIcons icon={"weather"} mode={"default"} style={{ transform: "scale(1.030, 1.030)", transformOrigin: "0 0" }} />}
          type={"system"}
        />
        <AppIconIPad
          style={{ position: "relative", width: 142, flexShrink: 0 }}
          appName={"Stocks"}
          icon1={<SystemIcons icon={"stocks"} mode={"default"} style={{ transform: "scale(1.030, 1.030)", transformOrigin: "0 0" }} />}
          type={"system"}
        />
        <AppIconIPad
          style={{ position: "relative", width: 142, flexShrink: 0 }}
          appName={"Find My"}
          icon1={<SystemIcons icon={"find my"} mode={"default"} style={{ transform: "scale(1.030, 1.030)", transformOrigin: "0 0" }} />}
          type={"system"}
        />
        <AppIconIPad
          style={{ position: "relative", width: 142, flexShrink: 0 }}
          appName={"Contacts"}
          icon1={<SystemIcons icon={"contacts"} mode={"default"} style={{ transform: "scale(1.030, 1.030)", transformOrigin: "0 0" }} />}
          type={"system"}
        />
        <AppIconIPad
          style={{ position: "relative", width: 142, flexShrink: 0 }}
          appName={"Translate"}
          icon1={<SystemIcons icon={"translate"} mode={"default"} style={{ transform: "scale(1.030, 1.030)", transformOrigin: "0 0" }} />}
          type={"system"}
        />
        <AppIconIPad
          style={{ position: "relative", width: 142, flexShrink: 0 }}
          appName={"Your App"}
          type={"custom"}
        />
      </div>
      <div style={{
        position: "relative",
        borderRadius: 50,
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 12px 0px 12px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
      }}>
        <svg width={7} height={7} viewBox="0 0 7 7" fill="none" style={{
          position: "relative",
          width: 7,
          height: 7,
          borderRadius: 50,
          flexShrink: 0,
          color: "var(--grays-white)",
        }}>
          <path d={"M 0 3.5 C 0 1.567 1.567 0 3.5 0 L 3.5 0 C 5.433 0 7 1.567 7 3.5 L 7 3.5 C 7 5.433 5.433 7 3.5 7 L 3.5 7 C 1.567 7 0 5.433 0 3.5 L 0 3.5 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
        <svg width={7} height={7} viewBox="0 0 7 7" fill="none" style={{
          position: "relative",
          width: 7,
          height: 7,
          opacity: 0.3,
          borderRadius: 50,
          flexShrink: 0,
          color: "var(--grays-white)",
        }}>
          <path d={"M 0 3.5 C 0 1.567 1.567 0 3.5 0 L 3.5 0 C 5.433 0 7 1.567 7 3.5 L 7 3.5 C 7 5.433 5.433 7 3.5 7 L 3.5 7 C 1.567 7 0 5.433 0 3.5 L 0 3.5 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        padding: "18px 0px 20px 0px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
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
          <AppIconIPhone
            style={{ position: "relative", height: 64, flexShrink: 0 }}
            showAppName={false}
            appName={"FaceTime"}
            icon1={<SystemIcons icon={"messages"} mode={"default"} style={{ transform: "scale(0.970, 0.970)", transformOrigin: "0 0" }} />}
            type={"system"}
          />
          <AppIconIPhone
            style={{ position: "relative", height: 64, flexShrink: 0 }}
            showAppName={false}
            appName={"FaceTime"}
            icon1={<SystemIcons icon={"safari"} mode={"default"} style={{ transform: "scale(0.970, 0.970)", transformOrigin: "0 0" }} />}
            type={"system"}
          />
          <AppIconIPhone
            style={{ position: "relative", height: 64, flexShrink: 0 }}
            showAppName={false}
            appName={"FaceTime"}
            icon1={<SystemIcons icon={"music"} mode={"default"} style={{ transform: "scale(0.970, 0.970)", transformOrigin: "0 0" }} />}
            type={"system"}
          />
          <AppIconIPhone
            style={{ position: "relative", height: 64, flexShrink: 0 }}
            showAppName={false}
            appName={"FaceTime"}
            icon1={<SystemIcons icon={"mail"} mode={"default"} style={{ transform: "scale(0.970, 0.970)", transformOrigin: "0 0" }} />}
            type={"system"}
          />
          <AppIconIPhone
            style={{ position: "relative", height: 64, flexShrink: 0 }}
            showAppName={false}
            appName={"FaceTime"}
            icon1={<SystemIcons icon={"calendar"} mode={"default"} style={{ transform: "scale(0.970, 0.970)", transformOrigin: "0 0" }} />}
            type={"system"}
          />
          <AppIconIPhone
            style={{ position: "relative", height: 64, flexShrink: 0 }}
            showAppName={false}
            appName={"FaceTime"}
            icon1={<SystemIcons icon={"photos"} mode={"default"} style={{ transform: "scale(0.970, 0.970)", transformOrigin: "0 0" }} />}
            type={"system"}
          />
          <AppIconIPhone
            style={{ position: "relative", height: 64, flexShrink: 0 }}
            showAppName={false}
            appName={"FaceTime"}
            icon1={<SystemIcons icon={"notes"} mode={"default"} style={{ transform: "scale(0.970, 0.970)", transformOrigin: "0 0" }} />}
            type={"system"}
          />
          <div style={{
            position: "relative",
            width: 1,
            height: 62,
            borderRadius: 100,
            backgroundColor: "var(--fills-vibrant-secondary)",
            flexShrink: 0,
          }} />
          <LaunchPad
            style={{ position: "relative", flexShrink: 0 }}
            mode={"light"}
          />
        </div>
      </div>
    </div>
  );
  const __impls = {
    // figma: Widgets=Small
    "widgets=sm": __body0,
    // figma: Widgets=Medium
    "widgets=md": __body1,
    // figma: Widgets=Large
    "widgets=lg": __body2,
    // figma: Widgets=Extra Large
    "widgets=extra large": __body3,
    // figma: Widgets=None
    "widgets=none": __body4,
  };
  return (__impls[__vkey(props)] ?? __body4)();
}
export default HomeScreenIPad;
