import { MacTracks } from './MacTracks.jsx';

// figma node: 532:19504 _Track Filled (6 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "state=" + __venc(p.state) + '|' + "active=" + __venc(p.active);

export function MacTrackFilled2(_p = {}) {
  const props = { ..._p, state: _p.state ?? "idle", active: _p.active ?? true };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 50,
      height: 6,
      paddingLeft: "calc(var(--mac-slider-track-inset-vertical) * 1px)",
      paddingTop: "calc(var(--mac-slider-track-inset-vertical) * 1px)",
      paddingRight: "calc(var(--mac-slider-track-inset-vertical) * 1px)",
      paddingBottom: "calc(var(--mac-slider-track-inset-vertical) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        transform: "matrix(1,0,0,-1,-1,6)",
        transformOrigin: "0 0",
        width: 53,
        height: 6,
        display: "flex",
        flexDirection: "column",
        padding: "1px 0px 1px 0px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingTop: "calc(var(--mac-slider-track-inset-vertical) * 1px)",
        paddingBottom: "calc(var(--mac-slider-track-inset-vertical) * 1px)",
      }}>
        <div style={{
            position: "relative",
            flexGrow: 1,
            alignSelf: "stretch",
            height: "auto",
            width: "auto",
          }}>{props.icon1 ?? <MacTracks active={false} on={true} state={"disabled"} context={"content area"} />}</div>
      </div>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        transform: "matrix(1,0,0,-1,-1,6)",
        transformOrigin: "0 0",
        width: 53,
        height: 6,
        display: "flex",
        flexDirection: "row",
        padding: "1px 0px 1px 0px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingTop: "calc(var(--mac-slider-track-inset-vertical) * 1px)",
        paddingBottom: "calc(var(--mac-slider-track-inset-vertical) * 1px)",
      }}>
        <svg width={2} viewBox="0 0 2 4" fill="none" style={{
          position: "relative",
          transform: "matrix(1,0,0,-1,0,0)",
          width: 2,
          overflow: "hidden",
          flexShrink: 0,
          alignSelf: "stretch",
          color: "var(--mac-labels-vibrant-use-plus-lighter-darker-tertiary)",
        }}>
          <path d={"M 0 0 L 2 0 L 2 4 L 0 4 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 50,
      height: 6,
      paddingLeft: "calc(var(--mac-slider-track-inset-vertical) * 1px)",
      paddingTop: "calc(var(--mac-slider-track-inset-vertical) * 1px)",
      paddingRight: "calc(var(--mac-slider-track-inset-vertical) * 1px)",
      paddingBottom: "calc(var(--mac-slider-track-inset-vertical) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        transform: "matrix(1,0,0,-1,-1,6)",
        transformOrigin: "0 0",
        width: 53,
        height: 6,
        display: "flex",
        flexDirection: "column",
        padding: "1px 0px 1px 0px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingTop: "calc(var(--mac-slider-track-inset-vertical) * 1px)",
        paddingBottom: "calc(var(--mac-slider-track-inset-vertical) * 1px)",
      }}>
        <div style={{
            position: "relative",
            flexGrow: 1,
            alignSelf: "stretch",
            height: "auto",
            width: "auto",
          }}>{props.icon1 ?? <MacTracks active={false} on={true} state={"clicked"} context={"content area"} />}</div>
      </div>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        transform: "matrix(1,0,0,-1,-1,6)",
        transformOrigin: "0 0",
        width: 53,
        height: 6,
        display: "flex",
        flexDirection: "row",
        padding: "1px 0px 1px 0px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingTop: "calc(var(--mac-slider-track-inset-vertical) * 1px)",
        paddingBottom: "calc(var(--mac-slider-track-inset-vertical) * 1px)",
      }}>
        <svg width={2} viewBox="0 0 2 4" fill="none" style={{
          position: "relative",
          transform: "matrix(1,0,0,-1,0,0)",
          width: 2,
          overflow: "hidden",
          flexShrink: 0,
          alignSelf: "stretch",
          color: "var(--mac-labels-vibrant-use-plus-lighter-darker-tertiary)",
        }}>
          <path d={"M 0 0 L 2 0 L 2 4 L 0 4 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 50,
      height: 6,
      paddingLeft: "calc(var(--mac-slider-track-inset-vertical) * 1px)",
      paddingTop: "calc(var(--mac-slider-track-inset-vertical) * 1px)",
      paddingRight: "calc(var(--mac-slider-track-inset-vertical) * 1px)",
      paddingBottom: "calc(var(--mac-slider-track-inset-vertical) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        transform: "matrix(1,0,0,-1,-1,6)",
        transformOrigin: "0 0",
        width: 54,
        height: 6,
        display: "flex",
        flexDirection: "column",
        padding: "1px 1px 1px 0px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingTop: "calc(var(--mac-slider-track-inset-vertical) * 1px)",
        paddingRight: "calc(var(--mac-slider-track-inset-horizontal) * 1px)",
        paddingBottom: "calc(var(--mac-slider-track-inset-vertical) * 1px)",
      }}>
        <div style={{
            position: "relative",
            flexGrow: 1,
            alignSelf: "stretch",
            height: "auto",
            width: "auto",
          }}>{props.icon1 ?? <MacTracks active={false} on={true} state={"idle"} context={"content area"} />}</div>
      </div>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        transform: "matrix(1,0,0,-1,-1,6)",
        transformOrigin: "0 0",
        width: 54,
        height: 6,
        display: "flex",
        flexDirection: "row",
        padding: "1px 1px 1px 0px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingTop: "calc(var(--mac-slider-track-inset-vertical) * 1px)",
        paddingRight: "calc(var(--mac-slider-track-inset-horizontal) * 1px)",
        paddingBottom: "calc(var(--mac-slider-track-inset-vertical) * 1px)",
      }}>
        <svg width={2} viewBox="0 0 2 4" fill="none" style={{
          position: "relative",
          transform: "matrix(1,0,0,-1,0,0)",
          width: 2,
          overflow: "hidden",
          flexShrink: 0,
          alignSelf: "stretch",
          color: "var(--mac-labels-vibrant-use-plus-lighter-darker-tertiary)",
        }}>
          <path d={"M 0 0 L 2 0 L 2 4 L 0 4 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 50,
      height: 6,
      paddingLeft: "calc(var(--mac-slider-track-inset-vertical) * 1px)",
      paddingTop: "calc(var(--mac-slider-track-inset-vertical) * 1px)",
      paddingRight: "calc(var(--mac-slider-track-inset-vertical) * 1px)",
      paddingBottom: "calc(var(--mac-slider-track-inset-vertical) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        transform: "matrix(1,0,0,-1,-1,6)",
        transformOrigin: "0 0",
        width: 53,
        height: 6,
        display: "flex",
        flexDirection: "column",
        padding: "1px 0px 1px 0px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingTop: "calc(var(--mac-slider-track-inset-vertical) * 1px)",
        paddingBottom: "calc(var(--mac-slider-track-inset-vertical) * 1px)",
      }}>
        <div style={{
            position: "relative",
            flexGrow: 1,
            alignSelf: "stretch",
            height: "auto",
            width: "auto",
          }}>{props.icon1 ?? <MacTracks active={true} on={true} state={"disabled"} context={"content area"} />}</div>
      </div>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        transform: "matrix(1,0,0,-1,-1,6)",
        transformOrigin: "0 0",
        width: 53,
        height: 6,
        display: "flex",
        flexDirection: "row",
        padding: "1px 0px 1px 0px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingTop: "calc(var(--mac-slider-track-inset-vertical) * 1px)",
        paddingBottom: "calc(var(--mac-slider-track-inset-vertical) * 1px)",
      }}>
        <svg width={2} viewBox="0 0 2 4" fill="none" style={{
          position: "relative",
          transform: "matrix(1,0,0,-1,0,0)",
          width: 2,
          overflow: "hidden",
          flexShrink: 0,
          alignSelf: "stretch",
          color: "var(--mac-labels-vibrant-use-plus-lighter-darker-tertiary)",
        }}>
          <path d={"M 0 0 L 2 0 L 2 4 L 0 4 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: 50,
      height: 6,
      paddingLeft: "calc(var(--mac-slider-track-inset-vertical) * 1px)",
      paddingTop: "calc(var(--mac-slider-track-inset-vertical) * 1px)",
      paddingRight: "calc(var(--mac-slider-track-inset-vertical) * 1px)",
      paddingBottom: "calc(var(--mac-slider-track-inset-vertical) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        transform: "matrix(1,0,0,-1,-1,6)",
        transformOrigin: "0 0",
        width: 53,
        height: 6,
        display: "flex",
        flexDirection: "column",
        padding: "1px 0px 1px 0px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingTop: "calc(var(--mac-slider-track-inset-vertical) * 1px)",
        paddingBottom: "calc(var(--mac-slider-track-inset-vertical) * 1px)",
      }}>
        <div style={{
            position: "relative",
            flexGrow: 1,
            alignSelf: "stretch",
            height: "auto",
            width: "auto",
          }}>{props.icon1 ?? <MacTracks active={true} on={true} state={"clicked"} context={"content area"} />}</div>
      </div>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        transform: "matrix(1,0,0,-1,-1,6)",
        transformOrigin: "0 0",
        width: 53,
        height: 6,
        display: "flex",
        flexDirection: "row",
        padding: "1px 0px 1px 0px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingTop: "calc(var(--mac-slider-track-inset-vertical) * 1px)",
        paddingBottom: "calc(var(--mac-slider-track-inset-vertical) * 1px)",
      }}>
        <svg width={2} viewBox="0 0 2 4" fill="none" style={{
          position: "relative",
          transform: "matrix(1,0,0,-1,0,0)",
          width: 2,
          overflow: "hidden",
          flexShrink: 0,
          alignSelf: "stretch",
          color: "var(--mac-labels-vibrant-use-plus-lighter-darker-tertiary)",
        }}>
          <path d={"M 0 0 L 2 0 L 2 4 L 0 4 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: 50,
      height: 6,
      paddingLeft: "calc(var(--mac-slider-track-inset-vertical) * 1px)",
      paddingTop: "calc(var(--mac-slider-track-inset-vertical) * 1px)",
      paddingRight: "calc(var(--mac-slider-track-inset-vertical) * 1px)",
      paddingBottom: "calc(var(--mac-slider-track-inset-vertical) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        transform: "matrix(1,0,0,-1,-1,6)",
        transformOrigin: "0 0",
        width: 54,
        height: 6,
        display: "flex",
        flexDirection: "column",
        padding: "1px 1px 1px 0px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingTop: "calc(var(--mac-slider-track-inset-vertical) * 1px)",
        paddingRight: "calc(var(--mac-slider-track-inset-horizontal) * 1px)",
        paddingBottom: "calc(var(--mac-slider-track-inset-vertical) * 1px)",
      }}>
        <div style={{
            position: "relative",
            flexGrow: 1,
            alignSelf: "stretch",
            height: "auto",
            width: "auto",
          }}>{props.icon1 ?? <MacTracks active={true} on={true} state={"idle"} context={"content area"} />}</div>
      </div>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        transform: "matrix(1,0,0,-1,-1,6)",
        transformOrigin: "0 0",
        width: 54,
        height: 6,
        display: "flex",
        flexDirection: "row",
        padding: "1px 1px 1px 0px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingTop: "calc(var(--mac-slider-track-inset-vertical) * 1px)",
        paddingRight: "calc(var(--mac-slider-track-inset-horizontal) * 1px)",
        paddingBottom: "calc(var(--mac-slider-track-inset-vertical) * 1px)",
      }}>
        <svg width={2} viewBox="0 0 2 4" fill="none" style={{
          position: "relative",
          transform: "matrix(1,0,0,-1,0,0)",
          width: 2,
          overflow: "hidden",
          flexShrink: 0,
          alignSelf: "stretch",
          color: "var(--mac-labels-vibrant-use-plus-lighter-darker-tertiary)",
        }}>
          <path d={"M 0 0 L 2 0 L 2 4 L 0 4 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
    </div>
  );
  const __impls = {
    // figma: State=Disabled, Active=False
    "state=disabled|active=false": __body0,
    // figma: State=Clicked, Active=False
    "state=clicked|active=false": __body1,
    // figma: State=Idle, Active=False
    "state=idle|active=false": __body2,
    // figma: State=Disabled, Active=True
    "state=disabled|active=true": __body3,
    // figma: State=Clicked, Active=True
    "state=clicked|active=true": __body4,
    // figma: Active=True, State=Idle
    "state=idle|active=true": __body5,
  };
  return (__impls[__vkey(props)] ?? __body5)();
}
export default MacTrackFilled2;
