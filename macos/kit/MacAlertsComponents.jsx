import { MacButtons } from './MacButtons.jsx';
import { MacLiquidGlassMedium } from './MacLiquidGlassMedium.jsx';

// figma node: 121:11166 Alerts Components
export function MacAlertsComponents(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 770,
      height: 700,
      borderRadius: 2,
      backgroundColor: "var(--mac-section-fill)",
      boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.4)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 80,
        top: 478,
        width: 270,
        height: 150,
        borderRadius: 5,
      }}>
        <div style={{
          position: "absolute",
          left: 20,
          top: 100,
          width: 228,
          height: 28,
          borderRadius: 100,
          backgroundColor: "rgba(255,56,60,0.23)",
          display: "flex",
          flexDirection: "row",
          padding: "0px 8px 0px 8px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 510,
            fontSize: 13,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "16px",
            color: "var(--mac-accents-red)",
            flexShrink: 0,
          }}>Label</span>
        </div>
        <div style={{
          position: "absolute",
          left: 20,
          top: 60,
          width: 228,
          height: 28,
          borderRadius: 100,
          backgroundColor: "var(--mac-fills-vibrant-use-plus-lighter-darker-secondary)",
          display: "flex",
          flexDirection: "row",
          padding: "0px 8px 0px 8px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 510,
            fontSize: 13,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "16px",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
          }}>Label</span>
        </div>
        <div style={{
          position: "absolute",
          left: 20,
          top: 20,
          width: 228,
          height: 28,
          borderRadius: 100,
          backgroundColor: "var(--mac-accents-blue)",
          display: "flex",
          flexDirection: "row",
          padding: "0px 8px 0px 8px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 510,
            fontSize: 13,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "16px",
            color: "var(--mac-labels-white)",
            flexShrink: 0,
          }}>Label</span>
        </div>
      </div>
      <div style={{
        position: "absolute",
        left: 80,
        top: 80,
        width: 590,
        height: 350,
        borderRadius: 5,
        backgroundColor: "var(--mac-component-fill)",
      }}>
        <div style={{
          position: "absolute",
          left: 20,
          top: 20,
          width: 260,
          borderRadius: 26,
          boxShadow: "0px 0px 1px 0px rgba(0,0,0,0.2), 0px 17px 45px 0px rgba(0,0,0,0.5)",
          display: "flex",
          flexDirection: "column",
          gap: 16,
          padding: "20px 16px 16px 16px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 260,
              height: 218,
            }}>
            <MacLiquidGlassMedium
              style={{ width: 260, height: 218.08, borderRadius: 26 }}
              mode={"light"}
            />
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            gap: 10,
            padding: "0px 6px 2px 6px",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 700,
              fontSize: 13,
              lineHeight: "16px",
              color: "rgba(0,0,0,0.85)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>Save this message as a draft?</span>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 11,
              lineHeight: "14px",
              color: "rgba(0,0,0,0.85)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>This message has not been sent and contains unsaved changes. You can save it as a draft to work on later.</span>
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            gap: 6,
            alignItems: "flex-start",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <MacButtons
              style={{
                position: "relative",
                height: 28,
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }}
              label={"Save"}
              type={"primary"}
            />
            <MacButtons
              style={{
                position: "relative",
                height: 28,
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }}
              label={"Don’t Save"}
              type={"destructive"}
            />
            <MacButtons
              style={{
                position: "relative",
                height: 28,
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }}
              label={"Cancel"}
              type={"secondary"}
            />
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 310,
          top: 20,
          width: 260,
          borderRadius: 26,
          boxShadow: "0px 0px 1px 0px rgba(0,0,0,0.2), 0px 17px 45px 0px rgba(0,0,0,0.5)",
          display: "flex",
          flexDirection: "column",
          gap: 16,
          padding: "20px 16px 16px 16px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 260,
              height: 154,
            }}>
            <MacLiquidGlassMedium
              style={{ width: 260, height: 154.08, borderRadius: 26 }}
              mode={"light"}
            />
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            gap: 10,
            padding: "0px 6px 2px 6px",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 700,
              fontSize: 13,
              lineHeight: "16px",
              color: "rgba(0,0,0,0.85)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>Save this message as a draft?</span>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 11,
              lineHeight: "14px",
              color: "rgba(0,0,0,0.85)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>This message has not been sent and contains unsaved changes. You can save it as a draft to work on later.</span>
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: 8,
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <MacButtons
              style={{
                position: "relative",
                height: 32,
                flexGrow: 1,
                width: "auto",
              }}
              type={"secondary"}
            />
            <MacButtons
              style={{
                position: "relative",
                height: 32,
                flexGrow: 1,
                width: "auto",
              }}
              type={"primary"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default MacAlertsComponents;
