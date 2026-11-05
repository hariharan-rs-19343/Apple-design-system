import { MacTracks } from './MacTracks.jsx';

// figma node: 512:3070 _Track Unfilled (3 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "state=" + __venc(p.state);

export function MacTrackUnfilled(_p = {}) {
  const props = { ..._p, state: _p.state ?? "idle", showTicks: _p.showTicks ?? true };
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
        transform: "matrix(1,0,0,-1,-3,6)",
        transformOrigin: "0 0",
        width: 56,
        height: 6,
        display: "flex",
        flexDirection: "column",
        padding: "1px 1px 1px 1px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--mac-slider-track-inset-horizontal) * 1px)",
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
          }}>{props.icon1 ?? <MacTracks active={true} on={false} state={"idle"} context={"content area"} />}</div>
      </div>
      {props.showTicks && (
      <div style={{
        position: "absolute",
        left: -3,
        top: 7,
        width: 56,
        height: 6,
        opacity: 0.1,
        display: "flex",
        flexDirection: "row",
        padding: "0px 2px 0px 2px",
        justifyContent: "space-between",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
      }}>
        <div style={{
          position: "relative",
          width: 2,
          height: 2,
          borderRadius: 10,
          backgroundColor: "rgb(0,0,0)",
          flexShrink: 0,
        }} />
        <div style={{
          position: "relative",
          width: 2,
          height: 2,
          borderRadius: 10,
          backgroundColor: "rgb(0,0,0)",
          flexShrink: 0,
        }} />
        <div style={{
          position: "relative",
          width: 2,
          height: 2,
          borderRadius: 10,
          backgroundColor: "rgb(0,0,0)",
          flexShrink: 0,
        }} />
        <div style={{
          position: "relative",
          width: 2,
          height: 2,
          borderRadius: 10,
          backgroundColor: "rgb(0,0,0)",
          flexShrink: 0,
        }} />
        <div style={{
          position: "relative",
          width: 2,
          height: 2,
          borderRadius: 10,
          backgroundColor: "rgb(0,0,0)",
          flexShrink: 0,
        }} />
        <div style={{
          position: "relative",
          width: 2,
          height: 2,
          borderRadius: 10,
          backgroundColor: "rgb(0,0,0)",
          flexShrink: 0,
        }} />
        <div style={{
          position: "relative",
          width: 2,
          height: 2,
          borderRadius: 10,
          backgroundColor: "rgb(0,0,0)",
          flexShrink: 0,
        }} />
        <div style={{
          position: "relative",
          width: 2,
          height: 2,
          borderRadius: 10,
          backgroundColor: "rgb(0,0,0)",
          flexShrink: 0,
        }} />
        <div style={{
          position: "relative",
          width: 2,
          height: 2,
          borderRadius: 10,
          backgroundColor: "rgb(0,0,0)",
          flexShrink: 0,
        }} />
        <div style={{
          position: "relative",
          width: 2,
          height: 2,
          borderRadius: 10,
          backgroundColor: "rgb(0,0,0)",
          flexShrink: 0,
        }} />
        <div style={{
          position: "relative",
          width: 2,
          height: 2,
          borderRadius: 10,
          backgroundColor: "rgb(0,0,0)",
          flexShrink: 0,
        }} />
      </div>
      )}
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
        transform: "matrix(1,0,0,-1,-3,6)",
        transformOrigin: "0 0",
        width: 56,
        height: 6,
        display: "flex",
        flexDirection: "column",
        padding: "1px 1px 1px 1px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--mac-slider-track-inset-horizontal) * 1px)",
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
          }}>{props.icon1 ?? <MacTracks active={true} on={false} state={"idle"} context={"content area"} />}</div>
      </div>
      {props.showTicks && (
      <div style={{
        position: "absolute",
        left: -3,
        top: 7,
        width: 56,
        height: 6,
        opacity: 0.25,
        display: "flex",
        flexDirection: "row",
        padding: "0px 2px 0px 2px",
        justifyContent: "space-between",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
      }}>
        <div style={{
          position: "relative",
          width: 2,
          height: 2,
          borderRadius: 10,
          backgroundColor: "rgb(0,0,0)",
          flexShrink: 0,
        }} />
        <div style={{
          position: "relative",
          width: 2,
          height: 2,
          borderRadius: 10,
          backgroundColor: "rgb(0,0,0)",
          flexShrink: 0,
        }} />
        <div style={{
          position: "relative",
          width: 2,
          height: 2,
          borderRadius: 10,
          backgroundColor: "rgb(0,0,0)",
          flexShrink: 0,
        }} />
        <div style={{
          position: "relative",
          width: 2,
          height: 2,
          borderRadius: 10,
          backgroundColor: "rgb(0,0,0)",
          flexShrink: 0,
        }} />
        <div style={{
          position: "relative",
          width: 2,
          height: 2,
          borderRadius: 10,
          backgroundColor: "rgb(0,0,0)",
          flexShrink: 0,
        }} />
        <div style={{
          position: "relative",
          width: 2,
          height: 2,
          borderRadius: 10,
          backgroundColor: "rgb(0,0,0)",
          flexShrink: 0,
        }} />
        <div style={{
          position: "relative",
          width: 2,
          height: 2,
          borderRadius: 10,
          backgroundColor: "rgb(0,0,0)",
          flexShrink: 0,
        }} />
        <div style={{
          position: "relative",
          width: 2,
          height: 2,
          borderRadius: 10,
          backgroundColor: "rgb(0,0,0)",
          flexShrink: 0,
        }} />
        <div style={{
          position: "relative",
          width: 2,
          height: 2,
          borderRadius: 10,
          backgroundColor: "rgb(0,0,0)",
          flexShrink: 0,
        }} />
        <div style={{
          position: "relative",
          width: 2,
          height: 2,
          borderRadius: 10,
          backgroundColor: "rgb(0,0,0)",
          flexShrink: 0,
        }} />
        <div style={{
          position: "relative",
          width: 2,
          height: 2,
          borderRadius: 10,
          backgroundColor: "rgb(0,0,0)",
          flexShrink: 0,
        }} />
      </div>
      )}
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
      {props.showTicks && (
      <div style={{
        position: "absolute",
        left: -3,
        top: 7,
        width: 56,
        height: 6,
        opacity: 0.25,
        display: "flex",
        flexDirection: "row",
        padding: "0px 2px 0px 2px",
        justifyContent: "space-between",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
      }}>
        <div style={{
          position: "relative",
          width: 2,
          height: 2,
          borderRadius: 10,
          backgroundColor: "rgb(0,0,0)",
          flexShrink: 0,
        }} />
        <div style={{
          position: "relative",
          width: 2,
          height: 2,
          borderRadius: 10,
          backgroundColor: "rgb(0,0,0)",
          flexShrink: 0,
        }} />
        <div style={{
          position: "relative",
          width: 2,
          height: 2,
          borderRadius: 10,
          backgroundColor: "rgb(0,0,0)",
          flexShrink: 0,
        }} />
        <div style={{
          position: "relative",
          width: 2,
          height: 2,
          borderRadius: 10,
          backgroundColor: "rgb(0,0,0)",
          flexShrink: 0,
        }} />
        <div style={{
          position: "relative",
          width: 2,
          height: 2,
          borderRadius: 10,
          backgroundColor: "rgb(0,0,0)",
          flexShrink: 0,
        }} />
        <div style={{
          position: "relative",
          width: 2,
          height: 2,
          borderRadius: 10,
          backgroundColor: "rgb(0,0,0)",
          flexShrink: 0,
        }} />
        <div style={{
          position: "relative",
          width: 2,
          height: 2,
          borderRadius: 10,
          backgroundColor: "rgb(0,0,0)",
          flexShrink: 0,
        }} />
        <div style={{
          position: "relative",
          width: 2,
          height: 2,
          borderRadius: 10,
          backgroundColor: "rgb(0,0,0)",
          flexShrink: 0,
        }} />
        <div style={{
          position: "relative",
          width: 2,
          height: 2,
          borderRadius: 10,
          backgroundColor: "rgb(0,0,0)",
          flexShrink: 0,
        }} />
        <div style={{
          position: "relative",
          width: 2,
          height: 2,
          borderRadius: 10,
          backgroundColor: "rgb(0,0,0)",
          flexShrink: 0,
        }} />
        <div style={{
          position: "relative",
          width: 2,
          height: 2,
          borderRadius: 10,
          backgroundColor: "rgb(0,0,0)",
          flexShrink: 0,
        }} />
      </div>
      )}
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        transform: "matrix(1,0,0,-1,-3,6)",
        transformOrigin: "0 0",
        width: 56,
        height: 6,
        display: "flex",
        flexDirection: "column",
        padding: "1px 1px 1px 1px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--mac-slider-track-inset-horizontal) * 1px)",
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
          }}>{props.icon1 ?? <MacTracks active={true} on={false} state={"idle"} context={"content area"} />}</div>
      </div>
    </div>
  );
  const __impls = {
    // figma: State=Disabled
    "state=disabled": __body0,
    // figma: State=Clicked
    "state=clicked": __body1,
    // figma: State=Idle
    "state=idle": __body2,
  };
  return (__impls[__vkey(props)] ?? __body2)();
}
export default MacTrackUnfilled;
