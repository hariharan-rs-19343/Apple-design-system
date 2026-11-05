import { WatchSystemIcons } from './WatchSystemIcons.jsx';

// figma node: 2402:17543 App Icon (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "type=" + __venc(p.type);

export function WatchAppIcon(_p = {}) {
  const props = { ..._p, type: _p.type ?? "system" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 60,
      height: 60,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 60,
        height: 60,
        overflow: "hidden",
        borderRadius: 1000,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 60,
          height: 60,
          backgroundColor: "rgb(32,148,250)",
        }} />
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 60,
          height: 60,
          opacity: 0.5,
          overflow: "hidden",
          borderRadius: 512,
        }}>
          <svg width={60} height={1} viewBox="0 -0.500 60 1" fill="none" style={{
            position: "absolute",
            left: 0,
            top: 30,
            width: 60,
            height: 1,
            color: "rgb(255,255,255)",
          }}>
            <path d={"M 0 0.5 L 60 0.5 L 60 -0.5 L 0 -0.5 L 0 0.5 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <svg width={1} height={60} viewBox="-0.500 0 1 60" fill="none" style={{
            position: "absolute",
            left: 30,
            top: 0,
            width: 1,
            height: 60,
            color: "rgb(255,255,255)",
          }}>
            <path d={"M 0.5 60 L 0.5 0 L -0.5 0 L -0.5 60 L 0.5 60 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <div style={{
            position: "absolute",
            left: 7.5,
            top: 7.5,
            width: 45,
            height: 45,
            borderRadius: "50%",
            boxShadow: "inset 0 0 0 1px rgb(255,255,255)",
          }} />
          <div style={{
            position: "absolute",
            left: 14.063,
            top: 14.063,
            width: 31.875,
            height: 31.875,
            borderRadius: "50%",
            boxShadow: "inset 0 0 0 1px rgb(255,255,255)",
          }} />
          <div style={{
            position: "absolute",
            left: 22.5,
            top: 22.5,
            width: 15,
            height: 15,
            borderRadius: "50%",
            boxShadow: "inset 0 0 0 1px rgb(255,255,255)",
          }} />
        </div>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 60,
          height: 60,
        }}>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 60,
            height: 60,
            opacity: 0.5,
            overflow: "hidden",
            borderRadius: 512,
            boxShadow: "inset 0 0 0 1px rgb(255,59,48)",
          }}>
            <svg width={60} height={1} viewBox="0 -0.500 60 1" fill="none" style={{
              position: "absolute",
              left: 0,
              top: 30,
              width: 60,
              height: 1,
              color: "rgb(0,122,255)",
            }}>
              <path d={"M 0 0.5 L 60 0.5 L 60 -0.5 L 0 -0.5 L 0 0.5 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
            <svg width={1} height={60} viewBox="-0.500 0 1 60" fill="none" style={{
              position: "absolute",
              left: 30,
              top: 0,
              width: 1,
              height: 60,
              color: "rgb(0,122,255)",
            }}>
              <path d={"M 0.5 60 L 0.5 0 L -0.5 0 L -0.5 60 L 0.5 60 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
            <div style={{
              position: "absolute",
              left: 7.5,
              top: 7.5,
              width: 45,
              height: 45,
              borderRadius: "50%",
              boxShadow: "inset 0 0 0 1px rgb(0,122,255)",
            }} />
            <div style={{
              position: "absolute",
              left: 14.063,
              top: 14.063,
              width: 31.875,
              height: 31.875,
              borderRadius: "50%",
              boxShadow: "inset 0 0 0 1px rgb(0,122,255)",
            }} />
            <div style={{
              position: "absolute",
              left: 22.5,
              top: 22.5,
              width: 15,
              height: 15,
              borderRadius: "50%",
              boxShadow: "inset 0 0 0 1px rgb(0,122,255)",
            }} />
          </div>
        </div>
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 60,
      height: 60,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 60,
          height: 60,
        }}>{props.icon1 ?? <WatchSystemIcons icon={"app store"} />}</div>
    </div>
  );
  const __impls = {
    // figma: Type=Custom
    "type=custom": __body0,
    // figma: Type=System
    "type=system": __body1,
  };
  return (__impls[__vkey(props)] ?? __body1)();
}
export default WatchAppIcon;
