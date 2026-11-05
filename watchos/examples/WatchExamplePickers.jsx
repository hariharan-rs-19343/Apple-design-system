import { WatchBezels } from '../bezels/WatchBezels.jsx';
import { WatchButtonPill } from '../buttons/WatchButtonPill.jsx';
import { WatchNavigationBar } from '../navigation/WatchNavigationBar.jsx';
import { WatchPicker } from '../pickers/WatchPicker.jsx';

// figma node: 6556:12385 Example/Pickers (4 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "wheels=" + __venc(p.wheels);

export function WatchExamplePickers(_p = {}) {
  const props = { ..._p, wheels: _p.wheels ?? "1" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "calc(var(--watch-screen-width) * 1px)",
      height: "calc(var(--watch-screen-height) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: "calc(var(--watch-screen-width) * 1px)",
        height: "calc(var(--watch-screen-height) * 1px)",
        overflow: "hidden",
        borderRadius: 14,
        backgroundColor: "rgb(0,0,0)",
        display: "flex",
        flexDirection: "column",
        gap: 5,
        alignItems: "center",
        flexWrap: "nowrap",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <WatchNavigationBar
            style={{
              position: "relative",
              height: 64,
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}
            type={"status + title"}
          />
          <WatchPicker
            style={{
              position: "relative",
              width: 201,
              height: 112,
              flexShrink: 0,
            }}
            values={"3 (mixed widths)"}
            selected={"1"}
          />
        </div>
        <WatchButtonPill
          style={{
            position: "relative",
            height: 54,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          type={"primary floating"}
        />
      </div>
      <WatchBezels
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 205,
          height: 251,
        }}
        bezelSize={"49mm"}
      />
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "calc(var(--watch-screen-width) * 1px)",
      height: "calc(var(--watch-screen-height) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: "calc(var(--watch-screen-width) * 1px)",
        height: "calc(var(--watch-screen-height) * 1px)",
        overflow: "hidden",
        borderRadius: 14,
        backgroundColor: "rgb(0,0,0)",
        display: "flex",
        flexDirection: "column",
        gap: 5,
        alignItems: "center",
        flexWrap: "nowrap",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <WatchNavigationBar
            style={{
              position: "relative",
              height: 64,
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}
            type={"status + title"}
          />
          <WatchPicker
            style={{
              position: "relative",
              width: 201,
              height: 112,
              flexShrink: 0,
            }}
            values={"3"}
            selected={"1"}
          />
        </div>
        <WatchButtonPill
          style={{
            position: "relative",
            height: 54,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          type={"primary floating"}
        />
      </div>
      <WatchBezels
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 205,
          height: 251,
        }}
        bezelSize={"49mm"}
      />
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: "calc(var(--watch-screen-width) * 1px)",
      height: "calc(var(--watch-screen-height) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: "calc(var(--watch-screen-width) * 1px)",
        height: "calc(var(--watch-screen-height) * 1px)",
        overflow: "hidden",
        borderRadius: 14,
        backgroundColor: "rgb(0,0,0)",
        display: "flex",
        flexDirection: "column",
        gap: 5,
        alignItems: "center",
        flexWrap: "nowrap",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <WatchNavigationBar
            style={{
              position: "relative",
              height: 64,
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}
            type={"status + title"}
          />
          <WatchPicker
            style={{
              position: "relative",
              width: 174,
              height: 112,
              flexShrink: 0,
            }}
            values={"2"}
            selected={"1"}
          />
        </div>
        <WatchButtonPill
          style={{
            position: "relative",
            height: 54,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          type={"primary floating"}
        />
      </div>
      <WatchBezels
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 205,
          height: 251,
        }}
        bezelSize={"49mm"}
      />
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: "calc(var(--watch-screen-width) * 1px)",
      height: "calc(var(--watch-screen-height) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: "calc(var(--watch-screen-width) * 1px)",
        height: "calc(var(--watch-screen-height) * 1px)",
        overflow: "hidden",
        borderRadius: 14,
        backgroundColor: "rgb(0,0,0)",
        display: "flex",
        flexDirection: "column",
        gap: 5,
        alignItems: "center",
        flexWrap: "nowrap",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <WatchNavigationBar
            style={{
              position: "relative",
              height: 64,
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}
            type={"status + title"}
          />
          <WatchPicker
            style={{
              position: "relative",
              width: 174,
              height: 112,
              flexShrink: 0,
            }}
            values={"1"}
            selected={"1"}
          />
        </div>
        <WatchButtonPill
          style={{
            position: "relative",
            height: 54,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          type={"primary floating"}
        />
      </div>
      <WatchBezels
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 205,
          height: 251,
        }}
        bezelSize={"49mm"}
      />
    </div>
  );
  const __impls = {
    // figma: Wheels=3 (Mixed Widths)
    "wheels=3 (mixed widths)": __body0,
    // figma: Wheels=3
    "wheels=3": __body1,
    // figma: Wheels=2
    "wheels=2": __body2,
    // figma: Wheels=1
    "wheels=1": __body3,
  };
  return (__impls[__vkey(props)] ?? __body3)();
}
export default WatchExamplePickers;
