import { SystemIcons } from '../app-icons/SystemIcons.jsx';

// figma node: 5593:38567 _Launch Pad (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "mode=" + __venc(p.mode);

export function LaunchPad(_p = {}) {
  const props = { ..._p, mode: _p.mode ?? "dark" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 12,
      display: "flex",
      flexDirection: "column",
      gap: 3.5,
      padding: "7.500px 7.500px 7.500px 7px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: -8,
        top: 0,
        width: 68,
        height: 61,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 8,
          width: 60,
          height: 45,
          borderRadius: 12,
          background: "linear-gradient(rgba(255,255,255,0.08),rgba(255,255,255,0.08)), linear-gradient(rgb(15,15,15),rgb(15,15,15))",
          backdropFilter: "blur(80px)",
        }} />
        <div style={{
          position: "absolute",
          left: 4,
          top: 4,
          width: 52,
          height: 53,
          opacity: 0.75,
          borderRadius: 12,
          background: "linear-gradient(rgba(255,255,255,0.08),rgba(255,255,255,0.08)), linear-gradient(rgb(35,35,35),rgb(35,35,35))",
          backdropFilter: "blur(80px)",
        }} />
        <div style={{
          position: "absolute",
          left: 8,
          top: 0,
          width: 60,
          height: 61,
          borderRadius: 12,
          background: "linear-gradient(rgba(255,255,255,0.45),rgba(255,255,255,0.45)), linear-gradient(rgb(37,37,37),rgb(37,37,37))",
          backdropFilter: "blur(80px)",
        }} />
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 3.5,
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 21,
            height: 21,
            flexShrink: 0,
          }}>{props.icon1 ?? <SystemIcons icon={"calendar"} mode={"default"} style={{ transform: "scale(0.318, 0.318)", transformOrigin: "0 0" }} />}</div>
        <div style={{
            position: "relative",
            width: 21,
            height: 21,
            flexShrink: 0,
          }}>{props.icon2 ?? <SystemIcons icon={"shortcuts"} mode={"default"} style={{ transform: "scale(0.318, 0.318)", transformOrigin: "0 0" }} />}</div>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 3.5,
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 21,
            height: 21,
            flexShrink: 0,
          }}>{props.icon3 ?? <SystemIcons icon={"mail"} mode={"default"} style={{ transform: "scale(0.318, 0.318)", transformOrigin: "0 0" }} />}</div>
        <div style={{
            position: "relative",
            width: 21,
            height: 21,
            flexShrink: 0,
          }}>{props.icon4 ?? <SystemIcons icon={"news"} mode={"default"} style={{ transform: "scale(0.318, 0.318)", transformOrigin: "0 0" }} />}</div>
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 12,
      display: "flex",
      flexDirection: "column",
      gap: 3.5,
      padding: "7.500px 7.500px 7.500px 7px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: -8,
        top: 0,
        width: 68,
        height: 61,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 8,
          width: 60,
          height: 45,
          borderRadius: 12,
          background: "linear-gradient(rgba(255,255,255,0.45),rgba(255,255,255,0.45)), linear-gradient(rgb(15,15,15),rgb(15,15,15))",
          backdropFilter: "blur(80px)",
        }} />
        <div style={{
          position: "absolute",
          left: 4,
          top: 4,
          width: 52,
          height: 53,
          opacity: 0.75,
          borderRadius: 12,
          background: "linear-gradient(rgba(255,255,255,0.45),rgba(255,255,255,0.45)), linear-gradient(rgb(35,35,35),rgb(35,35,35))",
          backdropFilter: "blur(80px)",
        }} />
        <div style={{
          position: "absolute",
          left: 8,
          top: 0,
          width: 60,
          height: 61,
          borderRadius: 12,
          background: "linear-gradient(rgba(255,255,255,0.45),rgba(255,255,255,0.45)), linear-gradient(rgb(37,37,37),rgb(37,37,37))",
          backdropFilter: "blur(80px)",
        }} />
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 3.5,
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 21,
            height: 21,
            flexShrink: 0,
          }}>{props.icon1 ?? <SystemIcons icon={"calendar"} mode={"default"} style={{ transform: "scale(0.318, 0.318)", transformOrigin: "0 0" }} />}</div>
        <div style={{
            position: "relative",
            width: 21,
            height: 21,
            flexShrink: 0,
          }}>{props.icon2 ?? <SystemIcons icon={"shortcuts"} mode={"default"} style={{ transform: "scale(0.318, 0.318)", transformOrigin: "0 0" }} />}</div>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 3.5,
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 21,
            height: 21,
            flexShrink: 0,
          }}>{props.icon3 ?? <SystemIcons icon={"mail"} mode={"default"} style={{ transform: "scale(0.318, 0.318)", transformOrigin: "0 0" }} />}</div>
        <div style={{
            position: "relative",
            width: 21,
            height: 21,
            flexShrink: 0,
          }}>{props.icon4 ?? <SystemIcons icon={"news"} mode={"default"} style={{ transform: "scale(0.318, 0.318)", transformOrigin: "0 0" }} />}</div>
      </div>
    </div>
  );
  const __impls = {
    // figma: Mode=Dark
    "mode=dark": __body0,
    // figma: Mode=Light
    "mode=light": __body1,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default LaunchPad;
