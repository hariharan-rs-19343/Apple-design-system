import { CustomIcon } from '../app-icons/CustomIcon.jsx';
import { LiquidGlassClearLight } from './LiquidGlassClearLight.jsx';
import { Time } from './Time.jsx';

// figma node: 135:67787 Notification - Collapsed (3 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "stack=" + __venc(p.stack);

export function NotificationCollapsed(_p = {}) {
  const props = { ..._p, title: _p.title ?? "Title", stack: _p.stack ?? "1", description: _p.description ?? "Description", showImage: _p.showImage ?? false };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 386,
      borderRadius: 24,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "12px 14px 27px 14px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 71,
        width: 386,
        height: 8,
        opacity: 0.8,
        overflow: "hidden",
        borderRadius: 24,
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: "0px 40px 0px 40px",
        justifyContent: "flex-end",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
      }}>
        <LiquidGlassClearLight style={{
            position: "relative",
            height: 64,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }} />
      </div>
      <div style={{
        position: "absolute",
        left: 0,
        top: 63,
        width: 386,
        height: 8,
        opacity: 0.9,
        overflow: "hidden",
        borderRadius: 24,
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: "0px 20px 0px 20px",
        justifyContent: "flex-end",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
      }}>
        <LiquidGlassClearLight style={{
            position: "relative",
            height: 64,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }} />
      </div>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 386,
          height: 63,
        }}>
        <LiquidGlassClearLight style={{ transform: "scale(2.413, 0.394)", transformOrigin: "0 0" }} />
      </div>
      <div style={{
          position: "relative",
          width: 38.333,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <CustomIcon mode={"default"} />}</div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            width: 235.667,
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 590,
            fontSize: 15,
            lineHeight: "17px",
            letterSpacing: "-0.230px",
            color: "var(--grays-white)",
            flexShrink: 0,
          }}>{props.title}</span>
          <span style={{
            position: "relative",
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 15,
            lineHeight: "18px",
            letterSpacing: "-0.230px",
            color: "var(--grays-white)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.description}</span>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 5.5,
          alignItems: "flex-end",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <div style={{
              position: "relative",
              width: 58,
              height: 17,
              flexShrink: 0,
            }}>{props.icon2 ?? <Time mode={"dark"} />}</div>
          {props.showImage && (
          <div style={{
            position: "relative",
            width: 32,
            height: 32,
            borderRadius: 6,
            backgroundColor: "rgb(255,0,0)",
            flexShrink: 0,
          }} />
          )}
        </div>
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 386,
      borderRadius: 24,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "12px 14px 21px 14px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 63,
        width: 386,
        height: 8,
        opacity: 0.9,
        overflow: "hidden",
        borderRadius: 24,
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: "0px 20px 0px 20px",
        justifyContent: "flex-end",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
      }}>
        <LiquidGlassClearLight style={{
            position: "relative",
            height: 64,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }} />
      </div>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 386,
          height: 63,
        }}>
        <LiquidGlassClearLight style={{ transform: "scale(2.413, 0.394)", transformOrigin: "0 0" }} />
      </div>
      <div style={{
          position: "relative",
          width: 38.333,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <CustomIcon mode={"default"} />}</div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            width: 235.667,
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 590,
            fontSize: 15,
            lineHeight: "17px",
            letterSpacing: "-0.230px",
            color: "var(--grays-white)",
            flexShrink: 0,
          }}>{props.title}</span>
          <span style={{
            position: "relative",
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 15,
            lineHeight: "18px",
            letterSpacing: "-0.230px",
            color: "var(--grays-white)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.description}</span>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 5.5,
          alignItems: "flex-end",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <div style={{
              position: "relative",
              height: 17,
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}>{props.icon2 ?? <Time mode={"dark"} />}</div>
          {props.showImage && (
          <div style={{
            position: "relative",
            width: 32,
            height: 32,
            borderRadius: 6,
            backgroundColor: "rgb(255,0,0)",
            flexShrink: 0,
          }} />
          )}
        </div>
      </div>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 386,
      minHeight: 64,
      borderRadius: 24,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "12px 14px 12px 14px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 386,
          height: 64,
        }}>
        <LiquidGlassClearLight style={{ transform: "scale(2.413, 0.400)", transformOrigin: "0 0" }} />
      </div>
      <div style={{
          position: "relative",
          width: 38.333,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <CustomIcon mode={"default"} />}</div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        justifyContent: "center",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexGrow: 1,
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 590,
            fontSize: 15,
            whiteSpace: "nowrap",
            lineHeight: "17px",
            letterSpacing: "-0.230px",
            color: "var(--grays-white)",
            flexShrink: 0,
          }}>{props.title}</span>
          <span style={{
            position: "relative",
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 15,
            whiteSpace: "nowrap",
            lineHeight: "18px",
            letterSpacing: "-0.230px",
            color: "var(--grays-white)",
            flexShrink: 0,
          }}>{props.description}</span>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 5.5,
          alignItems: "flex-end",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <div style={{
              position: "relative",
              width: 58,
              height: 17,
              flexShrink: 0,
            }}>{props.icon2 ?? <Time mode={"dark"} />}</div>
          {props.showImage && (
          <div style={{
            position: "relative",
            width: 32,
            height: 32,
            borderRadius: 6,
            backgroundColor: "rgb(255,0,0)",
            flexShrink: 0,
          }} />
          )}
        </div>
      </div>
    </div>
  );
  const __impls = {
    // figma: Stack=3
    "stack=3": __body0,
    // figma: Stack=2
    "stack=2": __body1,
    // figma: Stack=1
    "stack=1": __body2,
  };
  return (__impls[__vkey(props)] ?? __body2)();
}
export default NotificationCollapsed;
