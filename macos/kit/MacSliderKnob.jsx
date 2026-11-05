// figma node: 510:9967 _Knob (6 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "style2=" + __venc(p.style2) + '|' + "state=" + __venc(p.state);

export function MacSliderKnob(_p = {}) {
  const props = { ..._p, style2: _p.style2 ?? "default", state: _p.state ?? "idle" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 20,
      height: 20,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        height: "calc(var(--mac-slider-knob-height-ticks) * 1px)",
        opacity: 0.5,
        borderRadius: 100,
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <svg width={20} height={16} viewBox="0 0 20 16" fill="none" style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 20,
          height: 16,
          overflow: "hidden",
          borderRadius: 100,
          color: "rgb(0,0,0)",
        }}>
          <path d={"M 0 8 C 0 3.582 3.582 0 8 0 L 12 0 C 16.418 0 20 3.582 20 8 L 20 8 C 20 12.418 16.418 16 12 16 L 8 16 C 3.582 16 0 12.418 0 8 L 0 8 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
        <svg width={20} height={16} viewBox="0 0 20 16" fill="none" style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 20,
          height: 16,
          overflow: "hidden",
          borderRadius: 100,
          filter: "drop-shadow(0px 0px 1px rgba(0,0,0,0.05)) drop-shadow(0px 0px 4px rgba(0,0,0,0.05)) drop-shadow(0px 0px 44px rgba(0,0,0,0.1))",
        }}>
          <path d={"M 0 8 C 0 3.582 3.582 0 8 0 L 12 0 C 16.418 0 20 3.582 20 8 L 20 8 C 20 12.418 16.418 16 12 16 L 8 16 C 3.582 16 0 12.418 0 8 L 0 8 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 20,
      height: 20,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <svg height={16} viewBox="0 0 20 16" fill="none" style={{
        position: "relative",
        height: "calc(var(--mac-slider-knob-height-ticks-clicked) * 1px)",
        borderRadius: 100,
        flexShrink: 0,
        alignSelf: "stretch",
        filter: "drop-shadow(0px 0px 1px rgba(0,0,0,0.05)) drop-shadow(0px 0px 4px rgba(0,0,0,0.05)) drop-shadow(0px 0px 44px rgba(0,0,0,0.1))",
        color: "rgb(0,0,0)",
      }}>
        <path d={"M 0 8 C 0 3.582 3.582 0 8 0 L 12 0 C 16.418 0 20 3.582 20 8 L 20 8 C 20 12.418 16.418 16 12 16 L 8 16 C 3.582 16 0 12.418 0 8 L 0 8 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 20,
      height: 20,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        height: "calc(var(--mac-slider-knob-height-ticks) * 1px)",
        borderRadius: 100,
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <svg width={20} height={16} viewBox="0 0 20 16" fill="none" style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 20,
          height: 16,
          overflow: "hidden",
          borderRadius: 100,
          color: "rgb(0,0,0)",
        }}>
          <path d={"M 0 8 C 0 3.582 3.582 0 8 0 L 12 0 C 16.418 0 20 3.582 20 8 L 20 8 C 20 12.418 16.418 16 12 16 L 8 16 C 3.582 16 0 12.418 0 8 L 0 8 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
        <svg width={20} height={16} viewBox="0 0 20 16" fill="none" style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 20,
          height: 16,
          overflow: "hidden",
          borderRadius: 100,
          filter: "drop-shadow(0px 0px 1px rgba(0,0,0,0.05)) drop-shadow(0px 0px 4px rgba(0,0,0,0.05)) drop-shadow(0px 0px 44px rgba(0,0,0,0.1))",
        }}>
          <path d={"M 0 8 C 0 3.582 3.582 0 8 0 L 12 0 C 16.418 0 20 3.582 20 8 L 20 8 C 20 12.418 16.418 16 12 16 L 8 16 C 3.582 16 0 12.418 0 8 L 0 8 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 20,
      height: 20,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        height: "calc(var(--mac-slider-knob-height) * 1px)",
        opacity: 0.5,
        borderRadius: 100,
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <svg width={20} height={16} viewBox="0 0 20 16" fill="none" style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 20,
          height: 16,
          overflow: "hidden",
          borderRadius: 100,
          color: "rgb(0,0,0)",
        }}>
          <path d={"M 0 8 C 0 3.582 3.582 0 8 0 L 12 0 C 16.418 0 20 3.582 20 8 L 20 8 C 20 12.418 16.418 16 12 16 L 8 16 C 3.582 16 0 12.418 0 8 L 0 8 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
        <svg width={20} height={16} viewBox="0 0 20 16" fill="none" style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 20,
          height: 16,
          overflow: "hidden",
          borderRadius: 100,
          filter: "drop-shadow(0px 0px 1px rgba(0,0,0,0.05)) drop-shadow(0px 0px 4px rgba(0,0,0,0.05)) drop-shadow(0px 0px 44px rgba(0,0,0,0.1))",
        }}>
          <path d={"M 0 8 C 0 3.582 3.582 0 8 0 L 12 0 C 16.418 0 20 3.582 20 8 L 20 8 C 20 12.418 16.418 16 12 16 L 8 16 C 3.582 16 0 12.418 0 8 L 0 8 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: 20,
      height: 20,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <svg height={16} viewBox="0 0 20 16" fill="none" style={{
        position: "relative",
        height: "calc(var(--mac-slider-knob-height) * 1px)",
        borderRadius: 100,
        flexShrink: 0,
        alignSelf: "stretch",
        filter: "drop-shadow(0px 0px 1px rgba(0,0,0,0.05)) drop-shadow(0px 0px 4px rgba(0,0,0,0.05)) drop-shadow(0px 0px 44px rgba(0,0,0,0.1))",
        color: "rgb(0,0,0)",
      }}>
        <path d={"M 0 8 C 0 3.582 3.582 0 8 0 L 12 0 C 16.418 0 20 3.582 20 8 L 20 8 C 20 12.418 16.418 16 12 16 L 8 16 C 3.582 16 0 12.418 0 8 L 0 8 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: 20,
      height: 20,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        height: "calc(var(--mac-slider-knob-height) * 1px)",
        borderRadius: 100,
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <svg width={20} height={16} viewBox="0 0 20 16" fill="none" style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 20,
          height: 16,
          overflow: "hidden",
          borderRadius: 100,
          color: "rgb(0,0,0)",
        }}>
          <path d={"M 0 8 C 0 3.582 3.582 0 8 0 L 12 0 C 16.418 0 20 3.582 20 8 L 20 8 C 20 12.418 16.418 16 12 16 L 8 16 C 3.582 16 0 12.418 0 8 L 0 8 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
        <svg width={20} height={16} viewBox="0 0 20 16" fill="none" style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 20,
          height: 16,
          overflow: "hidden",
          borderRadius: 100,
          filter: "drop-shadow(0px 0px 1px rgba(0,0,0,0.05)) drop-shadow(0px 0px 4px rgba(0,0,0,0.05)) drop-shadow(0px 0px 44px rgba(0,0,0,0.1))",
        }}>
          <path d={"M 0 8 C 0 3.582 3.582 0 8 0 L 12 0 C 16.418 0 20 3.582 20 8 L 20 8 C 20 12.418 16.418 16 12 16 L 8 16 C 3.582 16 0 12.418 0 8 L 0 8 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
    </div>
  );
  const __impls = {
    // figma: Style=Ticked, State=Disabled
    "style2=ticked|state=disabled": __body0,
    // figma: Style=Ticked, State=Clicked
    "style2=ticked|state=clicked": __body1,
    // figma: Style=Ticked, State=Idle
    "style2=ticked|state=idle": __body2,
    // figma: Style=Default, State=Disabled
    "style2=default|state=disabled": __body3,
    // figma: Style=Default, State=Clicked
    "style2=default|state=clicked": __body4,
    // figma: Style=Default, State=Idle
    "style2=default|state=idle": __body5,
  };
  return (__impls[__vkey(props)] ?? __body5)();
}
export default MacSliderKnob;
