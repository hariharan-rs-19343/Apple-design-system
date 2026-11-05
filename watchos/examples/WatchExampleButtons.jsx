import { WatchBezels } from '../bezels/WatchBezels.jsx';
import { WatchButtonCircular } from '../buttons/WatchButtonCircular.jsx';
import { WatchButtonPetite } from '../buttons/WatchButtonPetite.jsx';
import { WatchButtonPill } from '../buttons/WatchButtonPill.jsx';
import { WatchNavigationBar } from '../navigation/WatchNavigationBar.jsx';

// figma node: 6511:3286 Example/Buttons
export function WatchExampleButtons(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: "calc(var(--watch-screen-width) * 1px)",
      height: "calc(var(--watch-screen-height) * 1px)",
      borderRadius: 20,
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
          top: 47,
          width: "calc(var(--watch-screen-width) * 1px)",
          display: "flex",
          flexDirection: "column",
          gap: 10,
          alignItems: "center",
          flexWrap: "nowrap",
        }}>
          <WatchButtonPill
            style={{
              position: "relative",
              height: 54,
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}
            type={"default"}
          />
          <WatchButtonPill
            style={{
              position: "relative",
              height: 54,
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}
            type={"primary"}
          />
          <WatchButtonPill
            style={{
              position: "relative",
              height: 54,
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}
            type={"secondary"}
          />
          <WatchButtonPill
            style={{
              position: "relative",
              height: 54,
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}
            type={"tertiary"}
          />
          <WatchButtonPill
            style={{
              position: "relative",
              height: 54,
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}
            type={"destructive"}
          />
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            padding: "0px 15.500px 0px 15.500px",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            paddingLeft: "calc(var(--watch-margin-lr-copy-safe-area) * 1px)",
            paddingRight: "calc(var(--watch-margin-lr-copy-safe-area) * 1px)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
                position: "relative",
                width: 47,
                height: 47,
                flexShrink: 0,
              }}>{props.icon1 ?? <WatchButtonCircular type={"primary"} />}</div>
            <div style={{
                position: "relative",
                width: 47,
                height: 47,
                flexShrink: 0,
              }}>{props.icon2 ?? <WatchButtonCircular type={"default"} />}</div>
          </div>
          <WatchButtonPetite style={{
              position: "relative",
              height: 27.5,
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }} />
        </div>
        <WatchNavigationBar
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 205,
            height: 37,
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
}
export default WatchExampleButtons;
