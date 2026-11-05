import { LiquidGlassRegularSmall } from '../buttons/LiquidGlassRegularSmall.jsx';
import { LiquidGlassRegularSmall3 } from './LiquidGlassRegularSmall3.jsx';

// figma node: 6334:13068 _Accessory Bar - Web Form (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "mode=" + __venc(p.mode);

export function AccessoryBarWebForm(_p = {}) {
  const props = { ..._p, value: _p.value ?? "Form Field Value", mode: _p.mode ?? "light" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 402,
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "0px 11px 0px 11px",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 96,
        height: 32,
        borderRadius: 296,
        backgroundColor: "rgb(255,255,255)",
        display: "flex",
        flexDirection: "row",
        gap: 12,
        padding: "0px 14px 0px 14px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
      }}>
        <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 96,
            height: 32,
          }}>
          <LiquidGlassRegularSmall3
            style={{ transform: "scale(2, 0.667)", transformOrigin: "0 0" }}
            mode={"dark"}
            state={"default"}
          />
        </div>
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 590,
          fontSize: 12,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgb(245,245,245)",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>{props.text1 ?? "apple.com"}</span>
      </div>
      <div style={{
        position: "relative",
        height: 48,
        borderRadius: 100,
        display: "flex",
        flexDirection: "row",
        padding: "0px 18px 0px 18px",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 380,
            height: 48,
          }}>
          <LiquidGlassRegularSmall
            style={{ transform: "scale(7.917, 1)", transformOrigin: "0 0" }}
            mode={"dark"}
            state={"default"}
          />
        </div>
        <div style={{
          position: "relative",
          width: 76,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 510,
            fontSize: 17,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "22px",
            letterSpacing: "-0.430px",
            color: "rgb(245,245,245)",
            flexShrink: 0,
          }}>{props.text2 ?? "􀆇"}</span>
          <span style={{
            position: "relative",
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 510,
            fontSize: 17,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "22px",
            letterSpacing: "-0.430px",
            color: "rgb(245,245,245)",
            flexShrink: 0,
          }}>{props.text3 ?? "􀆈"}</span>
        </div>
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 590,
          fontSize: 17,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "22px",
          color: "rgb(245,245,245)",
          flexShrink: 0,
        }}>{props.text4 ?? "􀆅"}</span>
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 402,
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "0px 11px 0px 11px",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 96,
        height: 32,
        borderRadius: 296,
        backgroundColor: "rgb(255,255,255)",
        display: "flex",
        flexDirection: "row",
        gap: 12,
        padding: "0px 14px 0px 14px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
      }}>
        <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 96,
            height: 32,
          }}>
          <LiquidGlassRegularSmall3
            style={{ transform: "scale(2, 0.667)", transformOrigin: "0 0" }}
            mode={"light"}
            state={"default"}
          />
        </div>
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 590,
          fontSize: 12,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgb(64,64,64)",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>{props.text1 ?? "apple.com"}</span>
      </div>
      <div style={{
        position: "relative",
        height: 48,
        borderRadius: 100,
        display: "flex",
        flexDirection: "row",
        padding: "0px 18px 0px 18px",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 380,
            height: 48,
          }}>
          <LiquidGlassRegularSmall
            style={{ transform: "scale(7.917, 1)", transformOrigin: "0 0" }}
            mode={"light"}
            state={"default"}
          />
        </div>
        <div style={{
          position: "relative",
          width: 76,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 510,
            fontSize: 17,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "22px",
            letterSpacing: "-0.430px",
            color: "var(--labels-vibrant-primary)",
            flexShrink: 0,
          }}>{props.text2 ?? "􀆇"}</span>
          <span style={{
            position: "relative",
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 510,
            fontSize: 17,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "22px",
            letterSpacing: "-0.430px",
            color: "var(--labels-vibrant-primary)",
            flexShrink: 0,
          }}>{props.text3 ?? "􀆈"}</span>
        </div>
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 590,
          fontSize: 17,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "22px",
          color: "var(--labels-vibrant-controls-primary)",
          flexShrink: 0,
        }}>{props.text4 ?? "􀆅"}</span>
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
export default AccessoryBarWebForm;
