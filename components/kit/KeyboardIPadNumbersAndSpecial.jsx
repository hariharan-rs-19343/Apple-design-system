import { Autocorrection } from '../accessory-bars/Autocorrection.jsx';
import { KeyboardIPadLayouts } from '../keyboards/KeyboardIPadLayouts.jsx';

// figma node: 145:81994 Keyboard - iPad/Numbers and Special Characters/Light
export function KeyboardIPadNumbersAndSpecial(_p = {}) {
  const props = { ..._p, showBar: _p.showBar ?? true };
  return (
    <div className={props.className} style={{
      width: 1210,
      overflow: "hidden",
      borderRadius: 27,
      display: "flex",
      flexDirection: "column",
      gap: 16,
      padding: "6px 13.500px 30px 13.500px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <svg width={1210} height={428} viewBox="0 0 1210 428" fill="none" style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 1210,
        height: 428,
        borderRadius: 27,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
      }}>
        <path d={"M 0 54 C 0 28.544 0 15.816 7.908 7.908 C 15.816 0 28.544 0 54 0 L 146 0 C 171.456 0 184.184 0 192.092 7.908 C 200 15.816 200 28.544 200 54 L 200 146 C 200 171.456 200 184.184 192.092 192.092 C 184.184 200 171.456 200 146 200 L 54 200 C 28.544 200 15.816 200 7.908 192.092 C 0 184.184 0 171.456 0 146 L 0 54 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 146,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 84,
          display: "flex",
          flexDirection: "row",
          gap: 16,
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            width: 28,
            height: 28,
            flexShrink: 0,
          }}>
            <span style={{
              position: "absolute",
              left: -8,
              top: -8,
              width: 44,
              height: 44,
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 21,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "100%",
              color: "rgb(153,153,153)",
            }}>􀱍</span>
          </div>
          <div style={{
            position: "relative",
            width: 28,
            height: 28,
            flexShrink: 0,
          }}>
            <span style={{
              position: "absolute",
              left: -8,
              top: -8,
              width: 44,
              height: 44,
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 22,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "22px",
              color: "rgb(153,153,153)",
            }}>􀱓</span>
          </div>
          <div style={{
            position: "relative",
            width: 28,
            height: 28,
            flexShrink: 0,
          }}>
            <span style={{
              position: "absolute",
              left: -8,
              top: -8,
              width: 44,
              height: 44,
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 22,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "22px",
              color: "rgb(153,153,153)",
            }}>􀉃</span>
          </div>
        </div>
        {props.showBar && (
        <div style={{
          position: "relative",
          width: 644,
          height: 44,
          overflow: "hidden",
          display: "flex",
          flexDirection: "row",
          padding: "3px 0px 3px 0px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <Autocorrection
            style={{
              position: "relative",
              height: 28,
              flexGrow: 1,
              width: "auto",
            }}
            mode={"light"}
          />
        </div>
        )}
      </div>
      <KeyboardIPadLayouts
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        mode={"light"}
        type={"lowercase"}
      />
    </div>
  );
}
export default KeyboardIPadNumbersAndSpecial;
