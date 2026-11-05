import { WatchBezels } from '../bezels/WatchBezels.jsx';
import { WatchNavigationBar } from '../navigation/WatchNavigationBar.jsx';
import { WatchProgressIndicator } from '../controls/WatchProgressIndicator.jsx';

// figma node: 6556:11779 Example/Progress Indicators (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "type=" + __venc(p.type);

export function WatchExampleProgressIndicators(_p = {}) {
  const props = { ..._p, type: _p.type ?? "inline table row" };
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
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: "calc(var(--watch-screen-width) * 1px)",
          height: "calc(var(--watch-screen-height) * 1px)",
          display: "flex",
          flexDirection: "column",
          gap: 3.5,
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
        }}>
          <div style={{
              position: "relative",
              width: 34,
              height: 34,
              flexShrink: 0,
            }}>{props.icon1 ?? <WatchProgressIndicator size={"large (content area)"} />}</div>
          <span style={{
            position: "relative",
            fontFamily: "\"SF Compact\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 457,
            fontSize: "calc(var(--watch-button-font-size) * 1px)",
            textAlign: "right",
            whiteSpace: "nowrap",
            lineHeight: "18.500px",
            color: "rgb(255,255,255)",
            flexShrink: 0,
          }}>{props.text1 ?? "Loading message"}</span>
        </div>
        <WatchNavigationBar
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 205,
            height: 46,
          }}
          type={"status bar"}
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
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 46,
          width: "calc(var(--watch-screen-width) * 1px)",
          minHeight: 57.5,
          display: "flex",
          flexDirection: "row",
          gap: 6,
          padding: "10px 15.500px 10.500px 15.500px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          paddingLeft: "calc(var(--watch-margin-lr-copy-safe-area) * 1px)",
          paddingTop: "calc(var(--watch-list-margin-top) * 1px)",
          paddingRight: "calc(var(--watch-margin-lr-copy-safe-area) * 1px)",
          paddingBottom: "calc(var(--watch-list-margin-bottom) * 1px)",
        }}>
          <div style={{
            position: "absolute",
            left: 2,
            top: 0,
            width: 201,
            height: 58,
            borderRadius: 8.5,
            background: "rgba(242,244,252,0.16)", backdropFilter: "blur(16px) saturate(180%)", WebkitBackdropFilter: "blur(16px) saturate(180%)", boxShadow: "inset 0 1px 0.5px rgba(255,255,255,0.24), inset 0 -0.5px 0.5px rgba(255,255,255,0.08), inset 0 0 0 0.5px rgba(255,255,255,0.1)",
            backdropFilter: "blur(25px)",
            paddingLeft: "calc(var(--watch-margin-lr-copy-minus-full-width) * 1px)",
            paddingTop: "calc(var(--watch-list-margin-top) * 1px)",
            paddingRight: "calc(var(--watch-margin-lr-copy-minus-full-width) * 1px)",
            paddingBottom: "calc(var(--watch-list-margin-bottom) * 1px)",
          }} />
          <span style={{
            position: "relative",
            fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 510,
            fontSize: 16,
            lineHeight: "18px",
            color: "rgb(255,255,255)",
            flexGrow: 1,
            whiteSpace: "nowrap",
          }}>{props.text1 ?? "Inline progress "}</span>
          <div style={{
              position: "relative",
              width: 18,
              height: 18,
              flexShrink: 0,
            }}>{props.icon1 ?? <WatchProgressIndicator size={"medium (table row)"} />}</div>
        </div>
        <WatchNavigationBar
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 205,
            height: 46,
          }}
          type={"status bar"}
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
    // figma: Type=Content Area
    "type=content area": __body0,
    // figma: Type=Inline Table Row
    "type=inline table row": __body1,
  };
  return (__impls[__vkey(props)] ?? __body1)();
}
export default WatchExampleProgressIndicators;
