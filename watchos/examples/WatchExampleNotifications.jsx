import { WatchBezels } from '../bezels/WatchBezels.jsx';
import { WatchButtonCircular } from '../buttons/WatchButtonCircular.jsx';
import { WatchItemSourceList } from '../lists/WatchItemSourceList.jsx';
import { WatchNavigationBar } from '../navigation/WatchNavigationBar.jsx';
import { WatchNotificationsBanner } from '../notifications/WatchNotificationsBanner.jsx';
import { WatchNotificationsLongLook } from '../notifications/WatchNotificationsLongLook.jsx';
import { WatchNotificationsShortLook } from '../notifications/WatchNotificationsShortLook.jsx';
import { WatchFaces } from '../bezels/WatchFaces.jsx';

// figma node: 6556:7412 Example/Notifications (3 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "type=" + __venc(p.type);

export function WatchExampleNotifications(_p = {}) {
  const props = { ..._p, type: _p.type ?? "banner" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "calc(var(--watch-screen-width) * 1px)",
      height: "calc(var(--watch-screen-height) * 1px)",
      borderRadius: 20,
      backgroundColor: "rgb(0,0,0)",
      position: "relative",
      ...props.style,
    }}>
      <WatchFaces
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 205,
          height: 251,
        }}
        face={"activity analog"}
        size={"49mm"}
      />
      <WatchNotificationsLongLook style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 205,
          height: 251,
        }} />
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
      borderRadius: 20,
      backgroundColor: "rgb(0,0,0)",
      position: "relative",
      ...props.style,
    }}>
      <WatchFaces
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 205,
          height: 251,
        }}
        face={"activity analog"}
        size={"49mm"}
      />
      <WatchNotificationsShortLook style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 205,
          height: 251,
        }} />
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
      borderRadius: 20,
      backgroundColor: "rgb(0,0,0)",
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
        borderRadius: 20,
        display: "flex",
        flexDirection: "column",
        gap: 4,
        padding: "0px 0px 10px 0px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
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
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 4,
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <WatchItemSourceList
            style={{
              position: "relative",
              height: 92.5,
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}
            showSubtitle={true}
            scrollState={"full view"}
          />
          <div style={{
            position: "relative",
            height: 90.5,
            display: "flex",
            flexDirection: "row",
            padding: "4px 9.500px 4.500px 9.500px",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "absolute",
              left: 2,
              top: 0,
              width: 201,
              height: 91,
              borderRadius: 8.5,
              background: "linear-gradient(180deg, rgb(38,59,131) 0.00%, rgb(118,91,177) 46.50%, rgb(187,132,157) 100.00%)",
            }} />
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexGrow: 1,
            }}>
              <div style={{
                position: "relative",
                display: "flex",
                flexDirection: "row",
                gap: 2,
                alignItems: "flex-start",
                flexWrap: "nowrap",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>
                <span style={{
                  position: "relative",
                  fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 510,
                  fontSize: "calc(var(--watch-list-font-size) * 1px)",
                  lineHeight: "18px",
                  color: "var(--watch-text-colors-primary)",
                  flexGrow: 1,
                }}>Label</span>
              </div>
              <span style={{
                position: "relative",
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 274,
                fontSize: "calc(var(--watch-list-font-size-source-list-large) * 1px)",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                lineHeight: "32px",
                color: "var(--watch-text-colors-primary)",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>67º</span>
              <div style={{
                position: "relative",
                height: 16,
                flexShrink: 0,
                alignSelf: "stretch",
              }}>
                <span style={{
                  position: "absolute",
                  left: 0,
                  top: -2,
                  width: 144,
                  height: 19,
                  fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 510,
                  fontSize: "calc(var(--watch-list-font-size) * 1px)",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  lineHeight: "18px",
                  color: "rgba(188,188,188,0.6)",
                }}>Subtitle</span>
              </div>
            </div>
          </div>
          <div style={{
            position: "relative",
            height: 90.5,
            display: "flex",
            flexDirection: "row",
            padding: "4px 9.500px 4.500px 9.500px",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "absolute",
              left: 2,
              top: 0,
              width: 201,
              height: 91,
              borderRadius: 8.5,
              background: "linear-gradient(180deg, rgb(85,93,116) 0.00%, rgb(128,135,144) 100.00%)",
            }} />
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexGrow: 1,
            }}>
              <div style={{
                position: "relative",
                display: "flex",
                flexDirection: "row",
                gap: 2,
                alignItems: "flex-start",
                flexWrap: "nowrap",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>
                <span style={{
                  position: "relative",
                  fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 510,
                  fontSize: "calc(var(--watch-list-font-size) * 1px)",
                  lineHeight: "18px",
                  color: "var(--watch-text-colors-primary)",
                  flexGrow: 1,
                }}>Label</span>
              </div>
              <span style={{
                position: "relative",
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 274,
                fontSize: "calc(var(--watch-list-font-size-source-list-large) * 1px)",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                lineHeight: "32px",
                color: "var(--watch-text-colors-primary)",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>67º</span>
              <div style={{
                position: "relative",
                height: 16,
                flexShrink: 0,
                alignSelf: "stretch",
              }}>
                <span style={{
                  position: "absolute",
                  left: 0,
                  top: -2,
                  width: 144,
                  height: 19,
                  fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 510,
                  fontSize: "calc(var(--watch-list-font-size) * 1px)",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  lineHeight: "18px",
                  color: "rgba(188,188,188,0.6)",
                }}>Secondary Text</span>
              </div>
            </div>
          </div>
          <div style={{
            position: "relative",
            height: 0,
            flexShrink: 0,
            alignSelf: "stretch",
          }} />
          <div style={{
              position: "relative",
              width: 47,
              height: 47,
              flexShrink: 0,
            }}>{props.icon1 ?? <WatchButtonCircular label={"􀅼"} type={"default"} />}</div>
        </div>
      </div>
      <WatchNotificationsBanner style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 205,
          height: 55,
        }} />
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
    // figma: Type=Long Look
    "type=long look": __body0,
    // figma: Type=Short Look
    "type=short look": __body1,
    // figma: Type=Banner
    "type=banner": __body2,
  };
  return (__impls[__vkey(props)] ?? __body2)();
}
export default WatchExampleNotifications;
