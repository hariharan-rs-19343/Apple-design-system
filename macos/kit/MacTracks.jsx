// figma node: 474:225 _Tracks (24 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "active=" + __venc(p.active) + '|' + "on=" + __venc(p.on) + '|' + "state=" + __venc(p.state) + '|' + "context=" + __venc(p.context);

export function MacTracks(_p = {}) {
  const props = { ..._p, active: _p.active ?? true, on: _p.on ?? false, state: _p.state ?? "idle", context: _p.context ?? "content area" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 20,
      height: 20,
      opacity: 0.5,
      overflow: "hidden",
      position: "relative",
      ...props.style,
    }}>
      <svg width={20} height={20} viewBox="0 0 20 20" fill="none" style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 20,
        height: 20,
        opacity: 0.05,
        overflow: "hidden",
        color: "rgb(0,0,0)",
      }}>
        <path d={"M 0 0 L 20 0 L 20 20 L 0 20 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 20,
      height: 20,
      overflow: "hidden",
      position: "relative",
      ...props.style,
    }}>
      <svg width={20} height={20} viewBox="0 0 20 20" fill="none" style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 20,
        height: 20,
        opacity: 0.13,
        overflow: "hidden",
        color: "rgb(0,0,0)",
      }}>
        <path d={"M 0 0 L 20 0 L 20 20 L 0 20 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 20,
      height: 20,
      overflow: "hidden",
      position: "relative",
      ...props.style,
    }}>
      <svg width={20} height={20} viewBox="0 0 20 20" fill="none" style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 20,
        height: 20,
        opacity: 0.05,
        overflow: "hidden",
        color: "rgb(0,0,0)",
      }}>
        <path d={"M 0 0 L 20 0 L 20 20 L 0 20 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 20,
      height: 20,
      opacity: 0.5,
      overflow: "hidden",
      position: "relative",
      ...props.style,
    }}>
      <svg width={20} height={20} viewBox="0 0 20 20" fill="none" style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 20,
        height: 20,
        opacity: 0.25,
        overflow: "hidden",
        color: "var(--mac-controls-tint)",
      }}>
        <path d={"M 0 0 L 20 0 L 20 20 L 0 20 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: 20,
      height: 20,
      overflow: "hidden",
      position: "relative",
      ...props.style,
    }}>
      <svg width={20} height={20} viewBox="0 0 20 20" fill="none" style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 20,
        height: 20,
        overflow: "hidden",
        color: "var(--mac-controls-tint)",
      }}>
        <path d={"M 0 0 L 20 0 L 20 20 L 0 20 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
      <svg width={20} height={20} viewBox="0 0 20 20" fill="none" style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 20,
        height: 20,
        opacity: 0.15,
        overflow: "hidden",
        color: "rgb(0,0,0)",
      }}>
        <path d={"M 0 0 L 20 0 L 20 20 L 0 20 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: 20,
      height: 20,
      overflow: "hidden",
      position: "relative",
      ...props.style,
    }}>
      <svg width={20} height={20} viewBox="0 0 20 20" fill="none" style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 20,
        height: 20,
        overflow: "hidden",
        color: "var(--mac-controls-tint)",
      }}>
        <path d={"M 0 0 L 20 0 L 20 20 L 0 20 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
  const __impls = {
    // figma: Active=False, On=True, State=Disabled, Context=Over-glass
    "active=false|on=true|state=disabled|context=over-glass": __body0,
    // figma: Active=False, On=True, State=Clicked, Context=Over-glass
    "active=false|on=true|state=clicked|context=over-glass": __body1,
    // figma: Active=False, On=True, State=Idle, Context=Over-glass
    "active=false|on=true|state=idle|context=over-glass": __body2,
    // figma: Active=False, On=False, State=Disabled, Context=Over-glass
    "active=false|on=false|state=disabled|context=over-glass": __body0,
    // figma: Active=False, On=False, State=Clicked, Context=Over-glass
    "active=false|on=false|state=clicked|context=over-glass": __body1,
    // figma: Active=False, On=False, State=Idle, Context=Over-glass
    "active=false|on=false|state=idle|context=over-glass": __body2,
    // figma: Active=True, On=True, State=Disabled, Context=Over-glass
    "active=true|on=true|state=disabled|context=over-glass": __body3,
    // figma: Active=True, On=True, State=Clicked, Context=Over-glass
    "active=true|on=true|state=clicked|context=over-glass": __body4,
    // figma: Active=True, On=True, State=Idle, Context=Over-glass
    "active=true|on=true|state=idle|context=over-glass": __body5,
    // figma: Active=True, On=False, State=Disabled, Context=Over-glass
    "active=true|on=false|state=disabled|context=over-glass": __body0,
    // figma: Active=True, On=False, State=Clicked, Context=Over-glass
    "active=true|on=false|state=clicked|context=over-glass": __body1,
    // figma: Active=True, On=False, State=Idle, Context=Over-glass
    "active=true|on=false|state=idle|context=over-glass": __body2,
    // figma: Active=False, On=True, State=Disabled, Context=Content Area
    "active=false|on=true|state=disabled|context=content area": __body0,
    // figma: Active=False, On=True, State=Clicked, Context=Content Area
    "active=false|on=true|state=clicked|context=content area": __body1,
    // figma: Active=False, On=True, State=Idle, Context=Content Area
    "active=false|on=true|state=idle|context=content area": __body2,
    // figma: Active=False, On=False, State=Disabled, Context=Content Area
    "active=false|on=false|state=disabled|context=content area": __body0,
    // figma: Active=False, On=False, State=Clicked, Context=Content Area
    "active=false|on=false|state=clicked|context=content area": __body1,
    // figma: Active=False, On=False, State=Idle, Context=Content Area
    "active=false|on=false|state=idle|context=content area": __body2,
    // figma: Active=True, On=True, State=Disabled, Context=Content Area
    "active=true|on=true|state=disabled|context=content area": __body3,
    // figma: Active=True, On=True, State=Idle, Context=Content Area
    "active=true|on=true|state=idle|context=content area": __body5,
    // figma: Active=True, On=True, State=Clicked, Context=Content Area
    "active=true|on=true|state=clicked|context=content area": __body4,
    // figma: Active=True, On=False, State=Disabled, Context=Content Area
    "active=true|on=false|state=disabled|context=content area": __body0,
    // figma: Active=True, On=False, State=Clicked, Context=Content Area
    "active=true|on=false|state=clicked|context=content area": __body1,
    // figma: Active=True, On=False, State=Idle, Context=Content Area
    "active=true|on=false|state=idle|context=content area": __body2,
  };
  return (__impls[__vkey(props)] ?? __body2)();
}
export default MacTracks;
