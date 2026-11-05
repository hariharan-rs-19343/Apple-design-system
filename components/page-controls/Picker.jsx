import { DateAndTimeCompactCollapsed2 } from './DateAndTimeCompactCollapsed2.jsx';
import { Separator3 } from './Separator3.jsx';

// figma node: 51:60664 _Picker (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "position=" + __venc(p.position);

export function Picker(_p = {}) {
  const props = { ..._p, position: _p.position ?? "middle", aMPM: _p.aMPM ?? false };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 393,
      height: 44,
      overflow: "hidden",
      backgroundColor: "rgb(255,255,255)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 289,
        top: 0,
        height: 44,
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "0px 16px 0px 0px",
        justifyContent: "flex-end",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
      }}>
        <DateAndTimeCompactCollapsed2
          style={{ position: "relative", height: 34, flexShrink: 0 }}
          time={"8:00 AM"}
        />
        {props.aMPM && (
        <div style={{
          position: "relative",
          width: 100,
          overflow: "hidden",
          borderRadius: 9,
          backgroundColor: "rgba(118,118,128,0.12)",
          display: "flex",
          flexDirection: "row",
          padding: "2px 2px 2px 2px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            width: 56,
            borderRadius: 7,
            backgroundColor: "rgb(255,255,255)",
            boxShadow: "0 0 0 0.500px rgba(0,0,0,0.04), 0px 3px 8px 0px rgba(0,0,0,0.12), 0px 3px 1px 0px rgba(0,0,0,0.04)",
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "3px 10px 3px 10px",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <span style={{
              position: "relative",
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 590,
              fontSize: 13,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "18px",
              color: "rgb(0,0,0)",
              flexGrow: 1,
            }}>AM</span>
          </div>
          <div style={{
            position: "relative",
            width: 56,
            display: "flex",
            flexDirection: "row",
            gap: 4,
            padding: "3px 7px 3px 1px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <div style={{
              position: "relative",
              width: 1,
              height: 12,
              opacity: 0.3,
              borderRadius: 0.5,
              backgroundColor: "rgb(142,142,147)",
              flexShrink: 0,
            }} />
            <span style={{
              position: "relative",
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 13,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "18px",
              color: "rgb(0,0,0)",
              flexGrow: 1,
            }}>PM</span>
          </div>
        </div>
        )}
      </div>
      <span style={{
        position: "absolute",
        left: 16,
        top: 11,
        width: 34,
        height: 22,
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 17,
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "rgb(0,0,0)",
      }}>{props.text1 ?? "Title"}</span>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 393,
      height: 44,
      overflow: "hidden",
      backgroundColor: "rgb(255,255,255)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 16,
          top: 43.667,
          width: 377,
          height: 0.333,
        }}>
        <Separator3 style={{ transform: "scale(3.770, 0.999)", transformOrigin: "0 0" }} />
      </div>
      <div style={{
        position: "absolute",
        left: 289,
        top: 0,
        height: 44,
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "0px 16px 0px 0px",
        justifyContent: "flex-end",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
      }}>
        <DateAndTimeCompactCollapsed2
          style={{ position: "relative", height: 34, flexShrink: 0 }}
          time={"8:00 AM"}
        />
        {props.aMPM && (
        <div style={{
          position: "relative",
          width: 100,
          overflow: "hidden",
          borderRadius: 9,
          backgroundColor: "rgba(118,118,128,0.12)",
          display: "flex",
          flexDirection: "row",
          padding: "2px 2px 2px 2px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            width: 56,
            borderRadius: 7,
            backgroundColor: "rgb(255,255,255)",
            boxShadow: "0 0 0 0.500px rgba(0,0,0,0.04), 0px 3px 8px 0px rgba(0,0,0,0.12), 0px 3px 1px 0px rgba(0,0,0,0.04)",
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "3px 10px 3px 10px",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <span style={{
              position: "relative",
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 590,
              fontSize: 13,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "18px",
              color: "rgb(0,0,0)",
              flexGrow: 1,
            }}>AM</span>
          </div>
          <div style={{
            position: "relative",
            width: 56,
            display: "flex",
            flexDirection: "row",
            gap: 4,
            padding: "3px 7px 3px 1px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <div style={{
              position: "relative",
              width: 1,
              height: 12,
              opacity: 0.3,
              borderRadius: 0.5,
              backgroundColor: "rgb(142,142,147)",
              flexShrink: 0,
            }} />
            <span style={{
              position: "relative",
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 13,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "18px",
              color: "rgb(0,0,0)",
              flexGrow: 1,
            }}>PM</span>
          </div>
        </div>
        )}
      </div>
      <span style={{
        position: "absolute",
        left: 16,
        top: 11,
        width: 34,
        height: 22,
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 17,
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "rgb(0,0,0)",
      }}>{props.text1 ?? "Title"}</span>
    </div>
  );
  const __impls = {
    // figma: Position=Last
    "position=last": __body0,
    // figma: Position=Middle
    "position=middle": __body1,
  };
  return (__impls[__vkey(props)] ?? __body1)();
}
export default Picker;
