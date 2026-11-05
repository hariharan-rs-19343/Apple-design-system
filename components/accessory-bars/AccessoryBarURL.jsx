import { LiquidGlassRegularSmall } from '../buttons/LiquidGlassRegularSmall.jsx';

// figma node: 6334:12943 _Accessory Bar - URL (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "mode=" + __venc(p.mode);

export function AccessoryBarURL(_p = {}) {
  const props = { ..._p, value: _p.value ?? "https://www.", mode: _p.mode ?? "light" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 402,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 100,
        display: "flex",
        flexDirection: "row",
        gap: 6,
        padding: "0px 12px 0px 16px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 330,
            height: 48,
          }}>
          <LiquidGlassRegularSmall
            style={{ transform: "scale(6.875, 1)", transformOrigin: "0 0" }}
            mode={"dark"}
            state={"default"}
          />
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          flexWrap: "nowrap",
          flexGrow: 1,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 17,
            whiteSpace: "nowrap",
            lineHeight: "22px",
            color: "rgb(245,245,245)",
            flexShrink: 0,
          }}>{props.value}</span>
          <div style={{
            position: "relative",
            width: 2,
            height: 23,
            borderRadius: 2,
            backgroundColor: "var(--accents-blue)",
            flexShrink: 0,
          }} />
        </div>
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 17,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "22px",
          color: "var(--labels-vibrant-controls-primary)",
          flexShrink: 0,
        }}>{props.text1 ?? "􀁡"}</span>
      </div>
      <div style={{
        position: "relative",
        width: 48,
        borderRadius: 1000,
        display: "flex",
        flexDirection: "row",
        gap: 4,
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 48,
            height: 48,
          }}>{props.icon1 ?? <LiquidGlassRegularSmall mode={"dark"} state={"default"} />}</div>
        <div style={{
          position: "relative",
          width: 28,
          height: 22,
          flexShrink: 0,
        }}>
          <span style={{
            position: "absolute",
            left: 3,
            top: 0,
            width: 23,
            height: 22,
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 17,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "22px",
            color: "rgb(51,51,51)",
          }}>􀆄</span>
        </div>
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 402,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 100,
        display: "flex",
        flexDirection: "row",
        gap: 6,
        padding: "0px 12px 0px 16px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 330,
            height: 48,
          }}>
          <LiquidGlassRegularSmall
            style={{ transform: "scale(6.875, 1)", transformOrigin: "0 0" }}
            mode={"light"}
            state={"default"}
          />
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          flexWrap: "nowrap",
          flexGrow: 1,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 17,
            whiteSpace: "nowrap",
            lineHeight: "22px",
            color: "var(--labels-vibrant-primary)",
            flexShrink: 0,
          }}>{props.value}</span>
          <div style={{
            position: "relative",
            width: 2,
            height: 23,
            borderRadius: 2,
            backgroundColor: "var(--accents-blue)",
            flexShrink: 0,
          }} />
        </div>
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 17,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "22px",
          color: "var(--labels-vibrant-controls-primary)",
          flexShrink: 0,
        }}>{props.text1 ?? "􀁡"}</span>
      </div>
      <div style={{
        position: "relative",
        width: 48,
        borderRadius: 1000,
        display: "flex",
        flexDirection: "row",
        gap: 4,
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 48,
            height: 48,
          }}>{props.icon1 ?? <LiquidGlassRegularSmall mode={"light"} state={"default"} />}</div>
        <div style={{
          position: "relative",
          width: 28,
          height: 22,
          flexShrink: 0,
        }}>
          <span style={{
            position: "absolute",
            left: 3,
            top: 0,
            width: 23,
            height: 22,
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 17,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "22px",
            color: "rgb(64,64,64)",
          }}>􀆄</span>
        </div>
      </div>
    </div>
  );
  const __impls = {
    // figma: Mode=Dark
    "mode=dark": __body0,
    // figma: Mode=Light
    "mode=light": __body1,
  };
  return (__impls[__vkey(props)] ?? __body1)();
}
export default AccessoryBarURL;
