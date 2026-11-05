import { MacButtonsMedium } from './MacButtonsMedium.jsx';
import { MacDisclosureHeader } from './MacDisclosureHeader.jsx';
import { MacItem } from './MacItem.jsx';
import { MacLiquidGlassMedium } from './MacLiquidGlassMedium.jsx';
import { MacSectionHeader } from './MacSectionHeader.jsx';
import { MacWindowControlsStandard } from './MacWindowControlsStandard.jsx';

// figma node: 121:11474 Sidebars
export function MacSidebars(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 1000,
      height: 3140,
      borderRadius: 2,
      backgroundColor: "var(--mac-section-fill)",
      boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.4)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 50,
        top: 1360,
        width: 910,
        height: 1620,
        borderRadius: 5,
        backgroundColor: "var(--mac-component-fill)",
      }}>
        <div style={{
          position: "absolute",
          left: 620,
          top: 1560,
          width: 270,
          borderRadius: 5,
          display: "flex",
          flexDirection: "row",
          padding: "0px 10px 0px 10px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <div style={{
            position: "relative",
            opacity: 0.5,
            borderRadius: 8,
            display: "flex",
            flexDirection: "row",
            gap: 3,
            padding: "10px 10px 10px 62px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              width: 16,
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <span style={{
                position: "absolute",
                left: 0,
                top: -2,
                width: 16,
                height: 24,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 700,
                fontSize: 11,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "18px",
                color: "rgba(0,0,0,0.25)",
              }}>􀆈</span>
            </div>
            <div style={{
              position: "relative",
              width: 22,
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "nowrap",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <svg width={18} viewBox="0 0 18 18" fill="none" style={{
                position: "relative",
                width: 18,
                borderRadius: 3,
                flexShrink: 0,
                alignSelf: "stretch",
              }}>
                <path d={"M 0 4.8 C 0 3.12 0 2.28 0.327 1.638 C 0.615 1.074 1.074 0.615 1.638 0.327 C 2.28 0 3.12 0 4.8 0 L 13.2 0 C 14.88 0 15.72 0 16.362 0.327 C 16.926 0.615 17.385 1.074 17.673 1.638 C 18 2.28 18 3.12 18 4.8 L 18 13.2 C 18 14.88 18 15.72 17.673 16.362 C 17.385 16.926 16.926 17.385 16.362 17.673 C 15.72 18 14.88 18 13.2 18 L 4.8 18 C 3.12 18 2.28 18 1.638 17.673 C 1.074 17.385 0.615 16.926 0.327 16.362 C 0 15.72 0 14.88 0 13.2 L 0 4.8 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 15,
              whiteSpace: "nowrap",
              lineHeight: "20px",
              color: "var(--mac-labels-vibrant-use-plus-lighter-darker-primary)",
              flexGrow: 1,
            }}>Label</span>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 15,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "20px",
              color: "var(--mac-labels-vibrant-use-plus-lighter-darker-tertiary)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>Detail</span>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 620,
          top: 1510,
          width: 270,
          borderRadius: 5,
          display: "flex",
          flexDirection: "row",
          padding: "0px 10px 0px 10px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <div style={{
            position: "relative",
            borderRadius: 8,
            backgroundColor: "rgba(0,0,0,0.11)",
            display: "flex",
            flexDirection: "row",
            gap: 3,
            padding: "10px 10px 10px 62px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              width: 16,
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <span style={{
                position: "absolute",
                left: 0,
                top: -2,
                width: 16,
                height: 24,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 700,
                fontSize: 11,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "18px",
                color: "rgba(0,0,0,0.25)",
              }}>􀆈</span>
            </div>
            <div style={{
              position: "relative",
              width: 22,
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "nowrap",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <svg width={18} viewBox="0 0 18 18" fill="none" style={{
                position: "relative",
                width: 18,
                borderRadius: 3,
                flexShrink: 0,
                alignSelf: "stretch",
              }}>
                <path d={"M 0 4.8 C 0 3.12 0 2.28 0.327 1.638 C 0.615 1.074 1.074 0.615 1.638 0.327 C 2.28 0 3.12 0 4.8 0 L 13.2 0 C 14.88 0 15.72 0 16.362 0.327 C 16.926 0.615 17.385 1.074 17.673 1.638 C 18 2.28 18 3.12 18 4.8 L 18 13.2 C 18 14.88 18 15.72 17.673 16.362 C 17.385 16.926 16.926 17.385 16.362 17.673 C 15.72 18 14.88 18 13.2 18 L 4.8 18 C 3.12 18 2.28 18 1.638 17.673 C 1.074 17.385 0.615 16.926 0.327 16.362 C 0 15.72 0 14.88 0 13.2 L 0 4.8 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 15,
              whiteSpace: "nowrap",
              lineHeight: "20px",
              color: "rgba(0,0,0,0.85)",
              flexGrow: 1,
            }}>Label</span>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 15,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "20px",
              color: "var(--mac-labels-vibrant-use-plus-lighter-darker-tertiary)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>Detail</span>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 620,
          top: 1460,
          width: 270,
          borderRadius: 5,
          display: "flex",
          flexDirection: "row",
          padding: "0px 10px 0px 10px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <div style={{
            position: "relative",
            borderRadius: 8,
            display: "flex",
            flexDirection: "row",
            gap: 3,
            padding: "10px 10px 10px 62px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              width: 16,
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <span style={{
                position: "absolute",
                left: 0,
                top: -2,
                width: 16,
                height: 24,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 700,
                fontSize: 11,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "18px",
                color: "rgba(0,0,0,0.25)",
              }}>􀆈</span>
            </div>
            <div style={{
              position: "relative",
              width: 22,
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "nowrap",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <svg width={18} viewBox="0 0 18 18" fill="none" style={{
                position: "relative",
                width: 18,
                borderRadius: 3,
                flexShrink: 0,
                alignSelf: "stretch",
              }}>
                <path d={"M 0 4.8 C 0 3.12 0 2.28 0.327 1.638 C 0.615 1.074 1.074 0.615 1.638 0.327 C 2.28 0 3.12 0 4.8 0 L 13.2 0 C 14.88 0 15.72 0 16.362 0.327 C 16.926 0.615 17.385 1.074 17.673 1.638 C 18 2.28 18 3.12 18 4.8 L 18 13.2 C 18 14.88 18 15.72 17.673 16.362 C 17.385 16.926 16.926 17.385 16.362 17.673 C 15.72 18 14.88 18 13.2 18 L 4.8 18 C 3.12 18 2.28 18 1.638 17.673 C 1.074 17.385 0.615 16.926 0.327 16.362 C 0 15.72 0 14.88 0 13.2 L 0 4.8 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 15,
              whiteSpace: "nowrap",
              lineHeight: "20px",
              color: "rgba(0,0,0,0.85)",
              flexGrow: 1,
            }}>Label</span>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 15,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "20px",
              color: "var(--mac-labels-vibrant-use-plus-lighter-darker-tertiary)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>Detail</span>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 620,
          top: 1400,
          width: 270,
          borderRadius: 5,
          display: "flex",
          flexDirection: "row",
          padding: "0px 10px 0px 10px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <div style={{
            position: "relative",
            opacity: 0.5,
            borderRadius: 8,
            display: "flex",
            flexDirection: "row",
            gap: 3,
            padding: "10px 10px 10px 50px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              width: 16,
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <span style={{
                position: "absolute",
                left: 0,
                top: -2,
                width: 16,
                height: 24,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 700,
                fontSize: 11,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "18px",
                color: "rgba(0,0,0,0.25)",
              }}>􀆈</span>
            </div>
            <div style={{
              position: "relative",
              width: 22,
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "nowrap",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <svg width={18} viewBox="0 0 18 18" fill="none" style={{
                position: "relative",
                width: 18,
                borderRadius: 3,
                flexShrink: 0,
                alignSelf: "stretch",
              }}>
                <path d={"M 0 4.8 C 0 3.12 0 2.28 0.327 1.638 C 0.615 1.074 1.074 0.615 1.638 0.327 C 2.28 0 3.12 0 4.8 0 L 13.2 0 C 14.88 0 15.72 0 16.362 0.327 C 16.926 0.615 17.385 1.074 17.673 1.638 C 18 2.28 18 3.12 18 4.8 L 18 13.2 C 18 14.88 18 15.72 17.673 16.362 C 17.385 16.926 16.926 17.385 16.362 17.673 C 15.72 18 14.88 18 13.2 18 L 4.8 18 C 3.12 18 2.28 18 1.638 17.673 C 1.074 17.385 0.615 16.926 0.327 16.362 C 0 15.72 0 14.88 0 13.2 L 0 4.8 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 15,
              whiteSpace: "nowrap",
              lineHeight: "20px",
              color: "var(--mac-labels-vibrant-use-plus-lighter-darker-primary)",
              flexGrow: 1,
            }}>Label</span>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 15,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "20px",
              color: "var(--mac-labels-vibrant-use-plus-lighter-darker-tertiary)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>Detail</span>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 620,
          top: 1350,
          width: 270,
          borderRadius: 5,
          display: "flex",
          flexDirection: "row",
          padding: "0px 10px 0px 10px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <div style={{
            position: "relative",
            borderRadius: 8,
            backgroundColor: "rgba(0,0,0,0.11)",
            display: "flex",
            flexDirection: "row",
            gap: 3,
            padding: "10px 10px 10px 50px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              width: 16,
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <span style={{
                position: "absolute",
                left: 0,
                top: -2,
                width: 16,
                height: 24,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 700,
                fontSize: 11,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "18px",
                color: "rgba(0,0,0,0.25)",
              }}>􀆈</span>
            </div>
            <div style={{
              position: "relative",
              width: 22,
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "nowrap",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <svg width={18} viewBox="0 0 18 18" fill="none" style={{
                position: "relative",
                width: 18,
                borderRadius: 3,
                flexShrink: 0,
                alignSelf: "stretch",
              }}>
                <path d={"M 0 4.8 C 0 3.12 0 2.28 0.327 1.638 C 0.615 1.074 1.074 0.615 1.638 0.327 C 2.28 0 3.12 0 4.8 0 L 13.2 0 C 14.88 0 15.72 0 16.362 0.327 C 16.926 0.615 17.385 1.074 17.673 1.638 C 18 2.28 18 3.12 18 4.8 L 18 13.2 C 18 14.88 18 15.72 17.673 16.362 C 17.385 16.926 16.926 17.385 16.362 17.673 C 15.72 18 14.88 18 13.2 18 L 4.8 18 C 3.12 18 2.28 18 1.638 17.673 C 1.074 17.385 0.615 16.926 0.327 16.362 C 0 15.72 0 14.88 0 13.2 L 0 4.8 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 15,
              whiteSpace: "nowrap",
              lineHeight: "20px",
              color: "rgba(0,0,0,0.85)",
              flexGrow: 1,
            }}>Label</span>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 15,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "20px",
              color: "var(--mac-labels-vibrant-use-plus-lighter-darker-tertiary)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>Detail</span>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 620,
          top: 1300,
          width: 270,
          borderRadius: 5,
          display: "flex",
          flexDirection: "row",
          padding: "0px 10px 0px 10px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <div style={{
            position: "relative",
            borderRadius: 8,
            display: "flex",
            flexDirection: "row",
            gap: 3,
            padding: "10px 10px 10px 50px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              width: 16,
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <span style={{
                position: "absolute",
                left: 0,
                top: -2,
                width: 16,
                height: 24,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 700,
                fontSize: 11,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "18px",
                color: "rgba(0,0,0,0.25)",
              }}>􀆈</span>
            </div>
            <div style={{
              position: "relative",
              width: 22,
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "nowrap",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <svg width={18} viewBox="0 0 18 18" fill="none" style={{
                position: "relative",
                width: 18,
                borderRadius: 3,
                flexShrink: 0,
                alignSelf: "stretch",
              }}>
                <path d={"M 0 4.8 C 0 3.12 0 2.28 0.327 1.638 C 0.615 1.074 1.074 0.615 1.638 0.327 C 2.28 0 3.12 0 4.8 0 L 13.2 0 C 14.88 0 15.72 0 16.362 0.327 C 16.926 0.615 17.385 1.074 17.673 1.638 C 18 2.28 18 3.12 18 4.8 L 18 13.2 C 18 14.88 18 15.72 17.673 16.362 C 17.385 16.926 16.926 17.385 16.362 17.673 C 15.72 18 14.88 18 13.2 18 L 4.8 18 C 3.12 18 2.28 18 1.638 17.673 C 1.074 17.385 0.615 16.926 0.327 16.362 C 0 15.72 0 14.88 0 13.2 L 0 4.8 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 15,
              whiteSpace: "nowrap",
              lineHeight: "20px",
              color: "rgba(0,0,0,0.85)",
              flexGrow: 1,
            }}>Label</span>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 15,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "20px",
              color: "var(--mac-labels-vibrant-use-plus-lighter-darker-tertiary)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>Detail</span>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 620,
          top: 1240,
          width: 270,
          borderRadius: 5,
          display: "flex",
          flexDirection: "row",
          padding: "0px 10px 0px 10px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <div style={{
            position: "relative",
            opacity: 0.5,
            borderRadius: 8,
            display: "flex",
            flexDirection: "row",
            gap: 3,
            padding: "10px 10px 10px 38px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              width: 16,
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <span style={{
                position: "absolute",
                left: 0,
                top: -2,
                width: 16,
                height: 24,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 700,
                fontSize: 11,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "18px",
                color: "rgba(0,0,0,0.25)",
              }}>􀆈</span>
            </div>
            <div style={{
              position: "relative",
              width: 22,
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "nowrap",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <svg width={18} viewBox="0 0 18 18" fill="none" style={{
                position: "relative",
                width: 18,
                borderRadius: 3,
                flexShrink: 0,
                alignSelf: "stretch",
              }}>
                <path d={"M 0 4.8 C 0 3.12 0 2.28 0.327 1.638 C 0.615 1.074 1.074 0.615 1.638 0.327 C 2.28 0 3.12 0 4.8 0 L 13.2 0 C 14.88 0 15.72 0 16.362 0.327 C 16.926 0.615 17.385 1.074 17.673 1.638 C 18 2.28 18 3.12 18 4.8 L 18 13.2 C 18 14.88 18 15.72 17.673 16.362 C 17.385 16.926 16.926 17.385 16.362 17.673 C 15.72 18 14.88 18 13.2 18 L 4.8 18 C 3.12 18 2.28 18 1.638 17.673 C 1.074 17.385 0.615 16.926 0.327 16.362 C 0 15.72 0 14.88 0 13.2 L 0 4.8 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 15,
              whiteSpace: "nowrap",
              lineHeight: "20px",
              color: "var(--mac-labels-vibrant-use-plus-lighter-darker-primary)",
              flexGrow: 1,
            }}>Label</span>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 15,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "20px",
              color: "var(--mac-labels-vibrant-use-plus-lighter-darker-tertiary)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>Detail</span>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 620,
          top: 1190,
          width: 270,
          borderRadius: 5,
          display: "flex",
          flexDirection: "row",
          padding: "0px 10px 0px 10px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <div style={{
            position: "relative",
            borderRadius: 8,
            backgroundColor: "rgba(0,0,0,0.11)",
            display: "flex",
            flexDirection: "row",
            gap: 3,
            padding: "10px 10px 10px 38px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              width: 16,
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <span style={{
                position: "absolute",
                left: 0,
                top: -2,
                width: 16,
                height: 24,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 700,
                fontSize: 11,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "18px",
                color: "rgba(0,0,0,0.25)",
              }}>􀆈</span>
            </div>
            <div style={{
              position: "relative",
              width: 22,
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "nowrap",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <svg width={18} viewBox="0 0 18 18" fill="none" style={{
                position: "relative",
                width: 18,
                borderRadius: 3,
                flexShrink: 0,
                alignSelf: "stretch",
              }}>
                <path d={"M 0 4.8 C 0 3.12 0 2.28 0.327 1.638 C 0.615 1.074 1.074 0.615 1.638 0.327 C 2.28 0 3.12 0 4.8 0 L 13.2 0 C 14.88 0 15.72 0 16.362 0.327 C 16.926 0.615 17.385 1.074 17.673 1.638 C 18 2.28 18 3.12 18 4.8 L 18 13.2 C 18 14.88 18 15.72 17.673 16.362 C 17.385 16.926 16.926 17.385 16.362 17.673 C 15.72 18 14.88 18 13.2 18 L 4.8 18 C 3.12 18 2.28 18 1.638 17.673 C 1.074 17.385 0.615 16.926 0.327 16.362 C 0 15.72 0 14.88 0 13.2 L 0 4.8 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 15,
              whiteSpace: "nowrap",
              lineHeight: "20px",
              color: "rgba(0,0,0,0.85)",
              flexGrow: 1,
            }}>Label</span>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 15,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "20px",
              color: "var(--mac-labels-vibrant-use-plus-lighter-darker-tertiary)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>Detail</span>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 620,
          top: 1140,
          width: 270,
          borderRadius: 5,
          display: "flex",
          flexDirection: "row",
          padding: "0px 10px 0px 10px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <div style={{
            position: "relative",
            borderRadius: 8,
            display: "flex",
            flexDirection: "row",
            gap: 3,
            padding: "10px 10px 10px 38px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              width: 16,
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <span style={{
                position: "absolute",
                left: 0,
                top: -2,
                width: 16,
                height: 24,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 700,
                fontSize: 11,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "18px",
                color: "rgba(0,0,0,0.25)",
              }}>􀆈</span>
            </div>
            <div style={{
              position: "relative",
              width: 22,
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "nowrap",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <svg width={18} viewBox="0 0 18 18" fill="none" style={{
                position: "relative",
                width: 18,
                borderRadius: 3,
                flexShrink: 0,
                alignSelf: "stretch",
              }}>
                <path d={"M 0 4.8 C 0 3.12 0 2.28 0.327 1.638 C 0.615 1.074 1.074 0.615 1.638 0.327 C 2.28 0 3.12 0 4.8 0 L 13.2 0 C 14.88 0 15.72 0 16.362 0.327 C 16.926 0.615 17.385 1.074 17.673 1.638 C 18 2.28 18 3.12 18 4.8 L 18 13.2 C 18 14.88 18 15.72 17.673 16.362 C 17.385 16.926 16.926 17.385 16.362 17.673 C 15.72 18 14.88 18 13.2 18 L 4.8 18 C 3.12 18 2.28 18 1.638 17.673 C 1.074 17.385 0.615 16.926 0.327 16.362 C 0 15.72 0 14.88 0 13.2 L 0 4.8 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 15,
              whiteSpace: "nowrap",
              lineHeight: "20px",
              color: "rgba(0,0,0,0.85)",
              flexGrow: 1,
            }}>Label</span>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 15,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "20px",
              color: "var(--mac-labels-vibrant-use-plus-lighter-darker-tertiary)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>Detail</span>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 620,
          top: 1080,
          width: 270,
          borderRadius: 5,
          display: "flex",
          flexDirection: "row",
          padding: "0px 10px 0px 10px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <div style={{
            position: "relative",
            opacity: 0.5,
            borderRadius: 8,
            display: "flex",
            flexDirection: "row",
            gap: 3,
            padding: "10px 10px 10px 28px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              width: 16,
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <span style={{
                position: "absolute",
                left: 0,
                top: -2,
                width: 16,
                height: 24,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 700,
                fontSize: 11,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "18px",
                color: "rgba(0,0,0,0.25)",
              }}>􀆈</span>
            </div>
            <div style={{
              position: "relative",
              width: 22,
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "nowrap",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <svg width={18} viewBox="0 0 18 18" fill="none" style={{
                position: "relative",
                width: 18,
                borderRadius: 3,
                flexShrink: 0,
                alignSelf: "stretch",
              }}>
                <path d={"M 0 4.8 C 0 3.12 0 2.28 0.327 1.638 C 0.615 1.074 1.074 0.615 1.638 0.327 C 2.28 0 3.12 0 4.8 0 L 13.2 0 C 14.88 0 15.72 0 16.362 0.327 C 16.926 0.615 17.385 1.074 17.673 1.638 C 18 2.28 18 3.12 18 4.8 L 18 13.2 C 18 14.88 18 15.72 17.673 16.362 C 17.385 16.926 16.926 17.385 16.362 17.673 C 15.72 18 14.88 18 13.2 18 L 4.8 18 C 3.12 18 2.28 18 1.638 17.673 C 1.074 17.385 0.615 16.926 0.327 16.362 C 0 15.72 0 14.88 0 13.2 L 0 4.8 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 15,
              whiteSpace: "nowrap",
              lineHeight: "20px",
              color: "var(--mac-labels-vibrant-use-plus-lighter-darker-primary)",
              flexGrow: 1,
            }}>Label</span>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 15,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "20px",
              color: "var(--mac-labels-vibrant-use-plus-lighter-darker-tertiary)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>Detail</span>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 620,
          top: 1030,
          width: 270,
          borderRadius: 5,
          display: "flex",
          flexDirection: "row",
          padding: "0px 10px 0px 10px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <div style={{
            position: "relative",
            borderRadius: 8,
            backgroundColor: "rgba(0,0,0,0.11)",
            display: "flex",
            flexDirection: "row",
            gap: 3,
            padding: "10px 10px 10px 28px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              width: 16,
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <span style={{
                position: "absolute",
                left: 0,
                top: -2,
                width: 16,
                height: 24,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 700,
                fontSize: 11,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "18px",
                color: "rgba(0,0,0,0.25)",
              }}>􀆈</span>
            </div>
            <div style={{
              position: "relative",
              width: 22,
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "nowrap",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <svg width={18} viewBox="0 0 18 18" fill="none" style={{
                position: "relative",
                width: 18,
                borderRadius: 3,
                flexShrink: 0,
                alignSelf: "stretch",
              }}>
                <path d={"M 0 4.8 C 0 3.12 0 2.28 0.327 1.638 C 0.615 1.074 1.074 0.615 1.638 0.327 C 2.28 0 3.12 0 4.8 0 L 13.2 0 C 14.88 0 15.72 0 16.362 0.327 C 16.926 0.615 17.385 1.074 17.673 1.638 C 18 2.28 18 3.12 18 4.8 L 18 13.2 C 18 14.88 18 15.72 17.673 16.362 C 17.385 16.926 16.926 17.385 16.362 17.673 C 15.72 18 14.88 18 13.2 18 L 4.8 18 C 3.12 18 2.28 18 1.638 17.673 C 1.074 17.385 0.615 16.926 0.327 16.362 C 0 15.72 0 14.88 0 13.2 L 0 4.8 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 15,
              whiteSpace: "nowrap",
              lineHeight: "20px",
              color: "rgba(0,0,0,0.85)",
              flexGrow: 1,
            }}>Label</span>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 15,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "20px",
              color: "var(--mac-labels-vibrant-use-plus-lighter-darker-tertiary)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>Detail</span>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 620,
          top: 980,
          width: 270,
          borderRadius: 5,
          display: "flex",
          flexDirection: "row",
          padding: "0px 10px 0px 10px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <div style={{
            position: "relative",
            borderRadius: 8,
            display: "flex",
            flexDirection: "row",
            gap: 3,
            padding: "10px 10px 10px 28px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              width: 16,
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <span style={{
                position: "absolute",
                left: 0,
                top: -2,
                width: 16,
                height: 24,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 700,
                fontSize: 11,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "18px",
                color: "rgba(0,0,0,0.25)",
              }}>􀆈</span>
            </div>
            <div style={{
              position: "relative",
              width: 22,
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "nowrap",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <svg width={18} viewBox="0 0 18 18" fill="none" style={{
                position: "relative",
                width: 18,
                borderRadius: 3,
                flexShrink: 0,
                alignSelf: "stretch",
              }}>
                <path d={"M 0 4.8 C 0 3.12 0 2.28 0.327 1.638 C 0.615 1.074 1.074 0.615 1.638 0.327 C 2.28 0 3.12 0 4.8 0 L 13.2 0 C 14.88 0 15.72 0 16.362 0.327 C 16.926 0.615 17.385 1.074 17.673 1.638 C 18 2.28 18 3.12 18 4.8 L 18 13.2 C 18 14.88 18 15.72 17.673 16.362 C 17.385 16.926 16.926 17.385 16.362 17.673 C 15.72 18 14.88 18 13.2 18 L 4.8 18 C 3.12 18 2.28 18 1.638 17.673 C 1.074 17.385 0.615 16.926 0.327 16.362 C 0 15.72 0 14.88 0 13.2 L 0 4.8 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 15,
              whiteSpace: "nowrap",
              lineHeight: "20px",
              color: "rgba(0,0,0,0.85)",
              flexGrow: 1,
            }}>Label</span>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 15,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "20px",
              color: "var(--mac-labels-vibrant-use-plus-lighter-darker-tertiary)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>Detail</span>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 620,
          top: 920,
          width: 270,
          borderRadius: 5,
          display: "flex",
          flexDirection: "row",
          padding: "0px 10px 0px 10px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <div style={{
            position: "relative",
            opacity: 0.5,
            borderRadius: 8,
            display: "flex",
            flexDirection: "row",
            gap: 3,
            padding: "10px 10px 10px 6px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              width: 16,
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <span style={{
                position: "absolute",
                left: 0,
                top: -2,
                width: 16,
                height: 24,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 700,
                fontSize: 11,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "18px",
                color: "rgba(0,0,0,0.25)",
              }}>􀆈</span>
            </div>
            <div style={{
              position: "relative",
              width: 24,
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "nowrap",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <svg width={20} viewBox="0 0 20 20" fill="none" style={{
                position: "relative",
                width: 20,
                borderRadius: 3,
                flexShrink: 0,
                alignSelf: "stretch",
              }}>
                <path d={"M 0 4.8 C 0 3.12 0 2.28 0.327 1.638 C 0.615 1.074 1.074 0.615 1.638 0.327 C 2.28 0 3.12 0 4.8 0 L 15.2 0 C 16.88 0 17.72 0 18.362 0.327 C 18.926 0.615 19.385 1.074 19.673 1.638 C 20 2.28 20 3.12 20 4.8 L 20 15.2 C 20 16.88 20 17.72 19.673 18.362 C 19.385 18.926 18.926 19.385 18.362 19.673 C 17.72 20 16.88 20 15.2 20 L 4.8 20 C 3.12 20 2.28 20 1.638 19.673 C 1.074 19.385 0.615 18.926 0.327 18.362 C 0 17.72 0 16.88 0 15.2 L 0 4.8 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 15,
              whiteSpace: "nowrap",
              lineHeight: "20px",
              color: "var(--mac-labels-vibrant-use-plus-lighter-darker-primary)",
              flexGrow: 1,
            }}>Label</span>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 15,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "20px",
              color: "var(--mac-labels-vibrant-use-plus-lighter-darker-tertiary)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>Detail</span>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 620,
          top: 870,
          width: 270,
          borderRadius: 5,
          display: "flex",
          flexDirection: "row",
          padding: "0px 10px 0px 10px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <div style={{
            position: "relative",
            borderRadius: 8,
            backgroundColor: "rgba(0,0,0,0.11)",
            display: "flex",
            flexDirection: "row",
            gap: 3,
            padding: "10px 10px 10px 6px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              width: 16,
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <span style={{
                position: "absolute",
                left: 0,
                top: -2,
                width: 16,
                height: 24,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 700,
                fontSize: 11,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "18px",
                color: "rgba(0,0,0,0.25)",
              }}>􀆈</span>
            </div>
            <div style={{
              position: "relative",
              width: 24,
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "nowrap",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <svg width={20} viewBox="0 0 20 20" fill="none" style={{
                position: "relative",
                width: 20,
                borderRadius: 3,
                flexShrink: 0,
                alignSelf: "stretch",
              }}>
                <path d={"M 0 4.8 C 0 3.12 0 2.28 0.327 1.638 C 0.615 1.074 1.074 0.615 1.638 0.327 C 2.28 0 3.12 0 4.8 0 L 15.2 0 C 16.88 0 17.72 0 18.362 0.327 C 18.926 0.615 19.385 1.074 19.673 1.638 C 20 2.28 20 3.12 20 4.8 L 20 15.2 C 20 16.88 20 17.72 19.673 18.362 C 19.385 18.926 18.926 19.385 18.362 19.673 C 17.72 20 16.88 20 15.2 20 L 4.8 20 C 3.12 20 2.28 20 1.638 19.673 C 1.074 19.385 0.615 18.926 0.327 18.362 C 0 17.72 0 16.88 0 15.2 L 0 4.8 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 15,
              whiteSpace: "nowrap",
              lineHeight: "20px",
              color: "rgba(0,0,0,0.85)",
              flexGrow: 1,
            }}>Label</span>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 15,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "20px",
              color: "var(--mac-labels-vibrant-use-plus-lighter-darker-tertiary)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>Detail</span>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 620,
          top: 820,
          width: 270,
          borderRadius: 5,
          display: "flex",
          flexDirection: "row",
          padding: "0px 10px 0px 10px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <div style={{
            position: "relative",
            borderRadius: 8,
            display: "flex",
            flexDirection: "row",
            gap: 3,
            padding: "10px 10px 10px 6px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              width: 16,
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <span style={{
                position: "absolute",
                left: 0,
                top: -2,
                width: 16,
                height: 24,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 700,
                fontSize: 11,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "18px",
                color: "rgba(0,0,0,0.25)",
              }}>􀆈</span>
            </div>
            <div style={{
              position: "relative",
              width: 24,
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "nowrap",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <svg width={20} viewBox="0 0 20 20" fill="none" style={{
                position: "relative",
                width: 20,
                borderRadius: 3,
                flexShrink: 0,
                alignSelf: "stretch",
              }}>
                <path d={"M 0 4.8 C 0 3.12 0 2.28 0.327 1.638 C 0.615 1.074 1.074 0.615 1.638 0.327 C 2.28 0 3.12 0 4.8 0 L 15.2 0 C 16.88 0 17.72 0 18.362 0.327 C 18.926 0.615 19.385 1.074 19.673 1.638 C 20 2.28 20 3.12 20 4.8 L 20 15.2 C 20 16.88 20 17.72 19.673 18.362 C 19.385 18.926 18.926 19.385 18.362 19.673 C 17.72 20 16.88 20 15.2 20 L 4.8 20 C 3.12 20 2.28 20 1.638 19.673 C 1.074 19.385 0.615 18.926 0.327 18.362 C 0 17.72 0 16.88 0 15.2 L 0 4.8 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 15,
              whiteSpace: "nowrap",
              lineHeight: "20px",
              color: "rgba(0,0,0,0.85)",
              flexGrow: 1,
            }}>Label</span>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 15,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "20px",
              color: "var(--mac-labels-vibrant-use-plus-lighter-darker-tertiary)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>Detail</span>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 620,
          top: 760,
          width: 270,
          borderRadius: 5,
          display: "flex",
          flexDirection: "row",
          padding: "0px 10px 0px 10px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <div style={{
            position: "relative",
            opacity: 0.5,
            borderRadius: 8,
            display: "flex",
            flexDirection: "row",
            gap: 3,
            padding: "10px 10px 10px 62px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              width: 16,
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <span style={{
                position: "absolute",
                left: 0,
                top: -2,
                width: 16,
                height: 24,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 700,
                fontSize: 11,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "18px",
                color: "rgba(0,0,0,0.25)",
              }}>􀆈</span>
            </div>
            <div style={{
              position: "relative",
              width: 22,
              height: 16,
              flexShrink: 0,
            }}>
              <span style={{
                position: "absolute",
                left: 0,
                top: -2,
                width: 21,
                height: 20,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 510,
                fontSize: 15,
                textAlign: "right",
                whiteSpace: "nowrap",
                lineHeight: "20px",
                color: "var(--mac-labels-vibrant-use-plus-lighter-darker-primary)",
              }}>􀈕</span>
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 15,
              whiteSpace: "nowrap",
              lineHeight: "20px",
              color: "var(--mac-labels-vibrant-use-plus-lighter-darker-primary)",
              flexGrow: 1,
            }}>Label</span>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 15,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "20px",
              color: "var(--mac-labels-vibrant-use-plus-lighter-darker-tertiary)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>Detail</span>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 620,
          top: 710,
          width: 270,
          borderRadius: 5,
          display: "flex",
          flexDirection: "row",
          padding: "0px 10px 0px 10px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <div style={{
            position: "relative",
            borderRadius: 8,
            backgroundColor: "rgba(0,0,0,0.11)",
            display: "flex",
            flexDirection: "row",
            gap: 3,
            padding: "10px 10px 10px 62px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              width: 16,
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <span style={{
                position: "absolute",
                left: 0,
                top: -2,
                width: 16,
                height: 24,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 700,
                fontSize: 11,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "18px",
                color: "rgba(0,0,0,0.25)",
              }}>􀆈</span>
            </div>
            <div style={{
              position: "relative",
              width: 22,
              height: 16,
              flexShrink: 0,
            }}>
              <span style={{
                position: "absolute",
                left: 0,
                top: -2,
                width: 21,
                height: 20,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 510,
                fontSize: 15,
                textAlign: "right",
                whiteSpace: "nowrap",
                lineHeight: "20px",
                color: "rgb(0,122,255)",
              }}>􀈕</span>
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 15,
              whiteSpace: "nowrap",
              lineHeight: "20px",
              color: "rgba(0,0,0,0.85)",
              flexGrow: 1,
            }}>Label</span>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 15,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "20px",
              color: "var(--mac-labels-vibrant-use-plus-lighter-darker-tertiary)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>Detail</span>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 620,
          top: 660,
          width: 270,
          borderRadius: 5,
          display: "flex",
          flexDirection: "row",
          padding: "0px 10px 0px 10px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <div style={{
            position: "relative",
            borderRadius: 8,
            display: "flex",
            flexDirection: "row",
            gap: 3,
            padding: "10px 10px 10px 62px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              width: 16,
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <span style={{
                position: "absolute",
                left: 0,
                top: -2,
                width: 16,
                height: 24,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 700,
                fontSize: 11,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "18px",
                color: "rgba(0,0,0,0.25)",
              }}>􀆈</span>
            </div>
            <div style={{
              position: "relative",
              width: 22,
              height: 16,
              flexShrink: 0,
            }}>
              <span style={{
                position: "absolute",
                left: 0,
                top: -2,
                width: 21,
                height: 20,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 510,
                fontSize: 15,
                textAlign: "right",
                whiteSpace: "nowrap",
                lineHeight: "20px",
                color: "rgba(0,0,0,0.85)",
              }}>􀈕</span>
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 15,
              whiteSpace: "nowrap",
              lineHeight: "20px",
              color: "rgba(0,0,0,0.85)",
              flexGrow: 1,
            }}>Label</span>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 15,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "20px",
              color: "var(--mac-labels-vibrant-use-plus-lighter-darker-tertiary)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>Detail</span>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 620,
          top: 600,
          width: 270,
          borderRadius: 5,
          display: "flex",
          flexDirection: "row",
          padding: "0px 10px 0px 10px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <div style={{
            position: "relative",
            opacity: 0.5,
            borderRadius: 8,
            display: "flex",
            flexDirection: "row",
            gap: 3,
            padding: "10px 10px 10px 50px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              width: 16,
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <span style={{
                position: "absolute",
                left: 0,
                top: -2,
                width: 16,
                height: 24,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 700,
                fontSize: 11,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "18px",
                color: "rgba(0,0,0,0.25)",
              }}>􀆈</span>
            </div>
            <div style={{
              position: "relative",
              width: 22,
              height: 16,
              flexShrink: 0,
            }}>
              <span style={{
                position: "absolute",
                left: 0,
                top: -2,
                width: 21,
                height: 20,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 510,
                fontSize: 15,
                textAlign: "right",
                whiteSpace: "nowrap",
                lineHeight: "20px",
                color: "var(--mac-labels-vibrant-use-plus-lighter-darker-primary)",
              }}>􀈕</span>
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 15,
              whiteSpace: "nowrap",
              lineHeight: "20px",
              color: "var(--mac-labels-vibrant-use-plus-lighter-darker-primary)",
              flexGrow: 1,
            }}>Label</span>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 15,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "20px",
              color: "var(--mac-labels-vibrant-use-plus-lighter-darker-tertiary)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>Detail</span>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 620,
          top: 550,
          width: 270,
          borderRadius: 5,
          display: "flex",
          flexDirection: "row",
          padding: "0px 10px 0px 10px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <div style={{
            position: "relative",
            borderRadius: 8,
            backgroundColor: "rgba(0,0,0,0.11)",
            display: "flex",
            flexDirection: "row",
            gap: 3,
            padding: "10px 10px 10px 50px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              width: 16,
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <span style={{
                position: "absolute",
                left: 0,
                top: -2,
                width: 16,
                height: 24,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 700,
                fontSize: 11,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "18px",
                color: "rgba(0,0,0,0.25)",
              }}>􀆈</span>
            </div>
            <div style={{
              position: "relative",
              width: 22,
              height: 16,
              flexShrink: 0,
            }}>
              <span style={{
                position: "absolute",
                left: 0,
                top: -2,
                width: 21,
                height: 20,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 510,
                fontSize: 15,
                textAlign: "right",
                whiteSpace: "nowrap",
                lineHeight: "20px",
                color: "rgb(0,122,255)",
              }}>􀈕</span>
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 15,
              whiteSpace: "nowrap",
              lineHeight: "20px",
              color: "rgba(0,0,0,0.85)",
              flexGrow: 1,
            }}>Label</span>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 15,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "20px",
              color: "var(--mac-labels-vibrant-use-plus-lighter-darker-tertiary)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>Detail</span>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 620,
          top: 500,
          width: 270,
          borderRadius: 5,
          display: "flex",
          flexDirection: "row",
          padding: "0px 10px 0px 10px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <div style={{
            position: "relative",
            borderRadius: 8,
            display: "flex",
            flexDirection: "row",
            gap: 3,
            padding: "10px 10px 10px 50px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              width: 16,
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <span style={{
                position: "absolute",
                left: 0,
                top: -2,
                width: 16,
                height: 24,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 700,
                fontSize: 11,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "18px",
                color: "rgba(0,0,0,0.25)",
              }}>􀆈</span>
            </div>
            <div style={{
              position: "relative",
              width: 22,
              height: 16,
              flexShrink: 0,
            }}>
              <span style={{
                position: "absolute",
                left: 0,
                top: -2,
                width: 21,
                height: 20,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 510,
                fontSize: 15,
                textAlign: "right",
                whiteSpace: "nowrap",
                lineHeight: "20px",
                color: "rgba(0,0,0,0.85)",
              }}>􀈕</span>
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 15,
              whiteSpace: "nowrap",
              lineHeight: "20px",
              color: "rgba(0,0,0,0.85)",
              flexGrow: 1,
            }}>Label</span>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 15,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "20px",
              color: "var(--mac-labels-vibrant-use-plus-lighter-darker-tertiary)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>Detail</span>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 620,
          top: 440,
          width: 270,
          borderRadius: 5,
          display: "flex",
          flexDirection: "row",
          padding: "0px 10px 0px 10px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <div style={{
            position: "relative",
            opacity: 0.5,
            borderRadius: 8,
            display: "flex",
            flexDirection: "row",
            gap: 3,
            padding: "10px 10px 10px 38px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              width: 16,
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <span style={{
                position: "absolute",
                left: 0,
                top: -2,
                width: 16,
                height: 24,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 700,
                fontSize: 11,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "18px",
                color: "rgba(0,0,0,0.25)",
              }}>􀆈</span>
            </div>
            <div style={{
              position: "relative",
              width: 22,
              height: 16,
              flexShrink: 0,
            }}>
              <span style={{
                position: "absolute",
                left: -1,
                top: -2,
                width: 21,
                height: 20,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 510,
                fontSize: 15,
                textAlign: "right",
                whiteSpace: "nowrap",
                lineHeight: "20px",
                color: "var(--mac-labels-vibrant-use-plus-lighter-darker-primary)",
              }}>􀈕</span>
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 15,
              whiteSpace: "nowrap",
              lineHeight: "20px",
              color: "var(--mac-labels-vibrant-use-plus-lighter-darker-primary)",
              flexGrow: 1,
            }}>Label</span>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 15,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "20px",
              color: "var(--mac-labels-vibrant-use-plus-lighter-darker-tertiary)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>Detail</span>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 620,
          top: 390,
          width: 270,
          borderRadius: 5,
          display: "flex",
          flexDirection: "row",
          padding: "0px 10px 0px 10px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <div style={{
            position: "relative",
            borderRadius: 8,
            backgroundColor: "rgba(0,0,0,0.11)",
            display: "flex",
            flexDirection: "row",
            gap: 3,
            padding: "10px 10px 10px 38px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              width: 16,
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <span style={{
                position: "absolute",
                left: 0,
                top: -2,
                width: 16,
                height: 24,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 700,
                fontSize: 11,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "18px",
                color: "rgba(0,0,0,0.25)",
              }}>􀆈</span>
            </div>
            <div style={{
              position: "relative",
              width: 22,
              height: 16,
              flexShrink: 0,
            }}>
              <span style={{
                position: "absolute",
                left: -1,
                top: -2,
                width: 21,
                height: 20,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 510,
                fontSize: 15,
                textAlign: "right",
                whiteSpace: "nowrap",
                lineHeight: "20px",
                color: "rgb(0,122,255)",
              }}>􀈕</span>
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 15,
              whiteSpace: "nowrap",
              lineHeight: "20px",
              color: "rgba(0,0,0,0.85)",
              flexGrow: 1,
            }}>Label</span>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 15,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "20px",
              color: "var(--mac-labels-vibrant-use-plus-lighter-darker-tertiary)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>Detail</span>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 620,
          top: 340,
          width: 270,
          borderRadius: 5,
          display: "flex",
          flexDirection: "row",
          padding: "0px 10px 0px 10px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <div style={{
            position: "relative",
            borderRadius: 8,
            display: "flex",
            flexDirection: "row",
            gap: 3,
            padding: "10px 10px 10px 38px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              width: 16,
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <span style={{
                position: "absolute",
                left: 0,
                top: -2,
                width: 16,
                height: 24,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 700,
                fontSize: 11,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "18px",
                color: "rgba(0,0,0,0.25)",
              }}>􀆈</span>
            </div>
            <div style={{
              position: "relative",
              width: 22,
              height: 16,
              flexShrink: 0,
            }}>
              <span style={{
                position: "absolute",
                left: -1,
                top: -2,
                width: 21,
                height: 20,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 510,
                fontSize: 15,
                textAlign: "right",
                whiteSpace: "nowrap",
                lineHeight: "20px",
                color: "rgba(0,0,0,0.85)",
              }}>􀈕</span>
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 15,
              whiteSpace: "nowrap",
              lineHeight: "20px",
              color: "rgba(0,0,0,0.85)",
              flexGrow: 1,
            }}>Label</span>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 15,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "20px",
              color: "var(--mac-labels-vibrant-use-plus-lighter-darker-tertiary)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>Detail</span>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 620,
          top: 280,
          width: 270,
          borderRadius: 5,
          display: "flex",
          flexDirection: "row",
          padding: "0px 10px 0px 10px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <div style={{
            position: "relative",
            opacity: 0.5,
            borderRadius: 8,
            display: "flex",
            flexDirection: "row",
            gap: 4,
            padding: "10px 10px 10px 28px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              width: 16,
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <span style={{
                position: "absolute",
                left: 0,
                top: -2,
                width: 16,
                height: 24,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 700,
                fontSize: 11,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "18px",
                color: "rgba(0,0,0,0.25)",
              }}>􀆈</span>
            </div>
            <div style={{
              position: "relative",
              width: 22,
              height: 16,
              flexShrink: 0,
            }}>
              <span style={{
                position: "absolute",
                left: -1,
                top: -2,
                width: 21,
                height: 20,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 510,
                fontSize: 15,
                textAlign: "right",
                whiteSpace: "nowrap",
                lineHeight: "20px",
                color: "var(--mac-labels-vibrant-use-plus-lighter-darker-primary)",
              }}>􀈕</span>
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 15,
              whiteSpace: "nowrap",
              lineHeight: "20px",
              color: "var(--mac-labels-vibrant-use-plus-lighter-darker-primary)",
              flexGrow: 1,
            }}>Label</span>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 15,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "20px",
              color: "var(--mac-labels-vibrant-use-plus-lighter-darker-tertiary)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>Detail</span>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 620,
          top: 230,
          width: 270,
          borderRadius: 5,
          display: "flex",
          flexDirection: "row",
          padding: "0px 10px 0px 10px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <div style={{
            position: "relative",
            borderRadius: 8,
            backgroundColor: "rgba(0,0,0,0.11)",
            display: "flex",
            flexDirection: "row",
            gap: 4,
            padding: "10px 10px 10px 28px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              width: 16,
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <span style={{
                position: "absolute",
                left: 0,
                top: -2,
                width: 16,
                height: 24,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 700,
                fontSize: 11,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "18px",
                color: "rgba(0,0,0,0.25)",
              }}>􀆈</span>
            </div>
            <div style={{
              position: "relative",
              width: 22,
              height: 16,
              flexShrink: 0,
            }}>
              <span style={{
                position: "absolute",
                left: -1,
                top: -2,
                width: 21,
                height: 20,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 510,
                fontSize: 15,
                textAlign: "right",
                whiteSpace: "nowrap",
                lineHeight: "20px",
                color: "rgb(0,122,255)",
              }}>􀈕</span>
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 15,
              whiteSpace: "nowrap",
              lineHeight: "20px",
              color: "rgba(0,0,0,0.85)",
              flexGrow: 1,
            }}>Label</span>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 15,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "20px",
              color: "var(--mac-labels-vibrant-use-plus-lighter-darker-tertiary)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>Detail</span>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 620,
          top: 180,
          width: 270,
          borderRadius: 5,
          display: "flex",
          flexDirection: "row",
          padding: "0px 10px 0px 10px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <div style={{
            position: "relative",
            borderRadius: 8,
            display: "flex",
            flexDirection: "row",
            gap: 4,
            padding: "10px 10px 10px 28px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              width: 16,
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <span style={{
                position: "absolute",
                left: 0,
                top: -2,
                width: 16,
                height: 24,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 700,
                fontSize: 11,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "18px",
                color: "rgba(0,0,0,0.25)",
              }}>􀆈</span>
            </div>
            <div style={{
              position: "relative",
              width: 22,
              height: 16,
              flexShrink: 0,
            }}>
              <span style={{
                position: "absolute",
                left: -1,
                top: -2,
                width: 21,
                height: 20,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 510,
                fontSize: 15,
                textAlign: "right",
                whiteSpace: "nowrap",
                lineHeight: "20px",
                color: "rgba(0,0,0,0.85)",
              }}>􀈕</span>
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 15,
              whiteSpace: "nowrap",
              lineHeight: "20px",
              color: "rgba(0,0,0,0.85)",
              flexGrow: 1,
            }}>Label</span>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 15,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "20px",
              color: "var(--mac-labels-vibrant-use-plus-lighter-darker-tertiary)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>Detail</span>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 620,
          top: 120,
          width: 270,
          borderRadius: 5,
          display: "flex",
          flexDirection: "row",
          padding: "0px 10px 0px 10px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <div style={{
            position: "relative",
            opacity: 0.5,
            borderRadius: 8,
            display: "flex",
            flexDirection: "row",
            gap: 5,
            padding: "10px 10px 10px 6px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              width: 16,
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <span style={{
                position: "absolute",
                left: 0,
                top: -2,
                width: 16,
                height: 24,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 700,
                fontSize: 11,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "18px",
                color: "rgba(0,0,0,0.25)",
              }}>􀆈</span>
            </div>
            <div style={{
              position: "relative",
              width: 24,
              height: 16,
              flexShrink: 0,
            }}>
              <span style={{
                position: "absolute",
                left: -3,
                top: -2,
                width: 27,
                height: 20,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 510,
                fontSize: 15,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "20px",
                color: "var(--mac-labels-vibrant-use-plus-lighter-darker-primary)",
              }}>􀈕</span>
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 15,
              whiteSpace: "nowrap",
              lineHeight: "20px",
              color: "var(--mac-labels-vibrant-use-plus-lighter-darker-primary)",
              flexGrow: 1,
            }}>Label</span>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 15,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "20px",
              color: "var(--mac-labels-vibrant-use-plus-lighter-darker-tertiary)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>Detail</span>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 620,
          top: 70,
          width: 270,
          borderRadius: 5,
          display: "flex",
          flexDirection: "row",
          padding: "0px 10px 0px 10px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <div style={{
            position: "relative",
            borderRadius: 8,
            backgroundColor: "rgba(0,0,0,0.11)",
            display: "flex",
            flexDirection: "row",
            gap: 5,
            padding: "10px 10px 10px 6px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              width: 16,
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <span style={{
                position: "absolute",
                left: 0,
                top: -2,
                width: 16,
                height: 24,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 700,
                fontSize: 11,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "18px",
                color: "rgba(0,0,0,0.25)",
              }}>􀆈</span>
            </div>
            <div style={{
              position: "relative",
              width: 24,
              height: 16,
              flexShrink: 0,
            }}>
              <span style={{
                position: "absolute",
                left: -3,
                top: -2,
                width: 27,
                height: 20,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 510,
                fontSize: 15,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "20px",
                color: "rgb(0,122,255)",
              }}>􀈕</span>
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 15,
              whiteSpace: "nowrap",
              lineHeight: "20px",
              color: "rgba(0,0,0,0.85)",
              flexGrow: 1,
            }}>Label</span>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 15,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "20px",
              color: "var(--mac-labels-vibrant-use-plus-lighter-darker-tertiary)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>Detail</span>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 620,
          top: 20,
          width: 270,
          borderRadius: 5,
          display: "flex",
          flexDirection: "row",
          padding: "0px 10px 0px 10px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <div style={{
            position: "relative",
            borderRadius: 8,
            display: "flex",
            flexDirection: "row",
            gap: 5,
            padding: "10px 10px 10px 6px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              width: 16,
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <span style={{
                position: "absolute",
                left: 0,
                top: -2,
                width: 16,
                height: 24,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 700,
                fontSize: 11,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "18px",
                color: "rgba(0,0,0,0.25)",
              }}>􀆈</span>
            </div>
            <div style={{
              position: "relative",
              width: 24,
              height: 16,
              flexShrink: 0,
            }}>
              <span style={{
                position: "absolute",
                left: -3,
                top: -2,
                width: 27,
                height: 20,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 510,
                fontSize: 15,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "20px",
                color: "rgba(0,0,0,0.85)",
              }}>􀈕</span>
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 15,
              whiteSpace: "nowrap",
              lineHeight: "20px",
              color: "rgba(0,0,0,0.85)",
              flexGrow: 1,
            }}>Label</span>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 15,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "20px",
              color: "var(--mac-labels-vibrant-use-plus-lighter-darker-tertiary)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>Detail</span>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 320,
          top: 1560,
          width: 270,
          borderRadius: 5,
          display: "flex",
          flexDirection: "row",
          padding: "0px 10px 0px 10px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <div style={{
            position: "relative",
            opacity: 0.5,
            borderRadius: 8,
            display: "flex",
            flexDirection: "row",
            gap: 3,
            padding: "8px 10px 8px 62px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              width: 16,
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <span style={{
                position: "absolute",
                left: 0,
                top: -4,
                width: 16,
                height: 24,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 700,
                fontSize: 11,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "18px",
                color: "rgba(0,0,0,0.25)",
              }}>􀆈</span>
            </div>
            <div style={{
              position: "relative",
              width: 20,
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "nowrap",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <svg width={16} viewBox="0 0 16 16" fill="none" style={{
                position: "relative",
                width: 16,
                borderRadius: 3,
                flexShrink: 0,
                alignSelf: "stretch",
              }}>
                <path d={"M 0 4.8 C 0 3.12 0 2.28 0.327 1.638 C 0.615 1.074 1.074 0.615 1.638 0.327 C 2.28 0 3.12 0 4.8 0 L 11.2 0 C 12.88 0 13.72 0 14.362 0.327 C 14.926 0.615 15.385 1.074 15.673 1.638 C 16 2.28 16 3.12 16 4.8 L 16 11.2 C 16 12.88 16 13.72 15.673 14.362 C 15.385 14.926 14.926 15.385 14.362 15.673 C 13.72 16 12.88 16 11.2 16 L 4.8 16 C 3.12 16 2.28 16 1.638 15.673 C 1.074 15.385 0.615 14.926 0.327 14.362 C 0 13.72 0 12.88 0 11.2 L 0 4.8 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 13,
              whiteSpace: "nowrap",
              lineHeight: "16px",
              color: "var(--mac-labels-vibrant-use-plus-lighter-darker-primary)",
              flexGrow: 1,
              alignSelf: "stretch",
            }}>Label</span>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 13,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "16px",
              color: "var(--mac-labels-vibrant-use-plus-lighter-darker-tertiary)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>Detail</span>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 320,
          top: 1510,
          width: 270,
          borderRadius: 5,
          display: "flex",
          flexDirection: "row",
          padding: "0px 10px 0px 10px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <div style={{
            position: "relative",
            borderRadius: 8,
            backgroundColor: "rgba(0,0,0,0.11)",
            display: "flex",
            flexDirection: "row",
            gap: 3,
            padding: "8px 10px 8px 62px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              width: 16,
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <span style={{
                position: "absolute",
                left: 0,
                top: -4,
                width: 16,
                height: 24,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 700,
                fontSize: 11,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "18px",
                color: "rgba(0,0,0,0.25)",
              }}>􀆈</span>
            </div>
            <div style={{
              position: "relative",
              width: 20,
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "nowrap",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <svg width={16} viewBox="0 0 16 16" fill="none" style={{
                position: "relative",
                width: 16,
                borderRadius: 3,
                flexShrink: 0,
                alignSelf: "stretch",
              }}>
                <path d={"M 0 4.8 C 0 3.12 0 2.28 0.327 1.638 C 0.615 1.074 1.074 0.615 1.638 0.327 C 2.28 0 3.12 0 4.8 0 L 11.2 0 C 12.88 0 13.72 0 14.362 0.327 C 14.926 0.615 15.385 1.074 15.673 1.638 C 16 2.28 16 3.12 16 4.8 L 16 11.2 C 16 12.88 16 13.72 15.673 14.362 C 15.385 14.926 14.926 15.385 14.362 15.673 C 13.72 16 12.88 16 11.2 16 L 4.8 16 C 3.12 16 2.28 16 1.638 15.673 C 1.074 15.385 0.615 14.926 0.327 14.362 C 0 13.72 0 12.88 0 11.2 L 0 4.8 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 13,
              whiteSpace: "nowrap",
              lineHeight: "16px",
              color: "rgba(0,0,0,0.85)",
              flexGrow: 1,
              alignSelf: "stretch",
            }}>Label</span>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 13,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "16px",
              color: "var(--mac-labels-vibrant-use-plus-lighter-darker-tertiary)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>Detail</span>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 320,
          top: 1460,
          width: 270,
          borderRadius: 5,
          display: "flex",
          flexDirection: "row",
          padding: "0px 10px 0px 10px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <div style={{
            position: "relative",
            borderRadius: 8,
            display: "flex",
            flexDirection: "row",
            gap: 3,
            padding: "8px 10px 8px 62px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              width: 16,
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <span style={{
                position: "absolute",
                left: 0,
                top: -4,
                width: 16,
                height: 24,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 700,
                fontSize: 11,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "18px",
                color: "rgba(0,0,0,0.25)",
              }}>􀆈</span>
            </div>
            <div style={{
              position: "relative",
              width: 20,
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "nowrap",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <svg width={16} viewBox="0 0 16 16" fill="none" style={{
                position: "relative",
                width: 16,
                borderRadius: 3,
                flexShrink: 0,
                alignSelf: "stretch",
              }}>
                <path d={"M 0 4.8 C 0 3.12 0 2.28 0.327 1.638 C 0.615 1.074 1.074 0.615 1.638 0.327 C 2.28 0 3.12 0 4.8 0 L 11.2 0 C 12.88 0 13.72 0 14.362 0.327 C 14.926 0.615 15.385 1.074 15.673 1.638 C 16 2.28 16 3.12 16 4.8 L 16 11.2 C 16 12.88 16 13.72 15.673 14.362 C 15.385 14.926 14.926 15.385 14.362 15.673 C 13.72 16 12.88 16 11.2 16 L 4.8 16 C 3.12 16 2.28 16 1.638 15.673 C 1.074 15.385 0.615 14.926 0.327 14.362 C 0 13.72 0 12.88 0 11.2 L 0 4.8 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 13,
              whiteSpace: "nowrap",
              lineHeight: "16px",
              color: "rgba(0,0,0,0.85)",
              flexGrow: 1,
              alignSelf: "stretch",
            }}>Label</span>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 13,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "16px",
              color: "var(--mac-labels-vibrant-use-plus-lighter-darker-tertiary)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>Detail</span>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 320,
          top: 1400,
          width: 270,
          borderRadius: 5,
          display: "flex",
          flexDirection: "row",
          padding: "0px 10px 0px 10px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <div style={{
            position: "relative",
            opacity: 0.5,
            borderRadius: 8,
            display: "flex",
            flexDirection: "row",
            gap: 3,
            padding: "8px 10px 8px 50px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              width: 16,
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <span style={{
                position: "absolute",
                left: 0,
                top: -4,
                width: 16,
                height: 24,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 700,
                fontSize: 11,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "18px",
                color: "rgba(0,0,0,0.25)",
              }}>􀆈</span>
            </div>
            <div style={{
              position: "relative",
              width: 20,
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "nowrap",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <svg width={16} viewBox="0 0 16 16" fill="none" style={{
                position: "relative",
                width: 16,
                borderRadius: 3,
                flexShrink: 0,
                alignSelf: "stretch",
              }}>
                <path d={"M 0 4.8 C 0 3.12 0 2.28 0.327 1.638 C 0.615 1.074 1.074 0.615 1.638 0.327 C 2.28 0 3.12 0 4.8 0 L 11.2 0 C 12.88 0 13.72 0 14.362 0.327 C 14.926 0.615 15.385 1.074 15.673 1.638 C 16 2.28 16 3.12 16 4.8 L 16 11.2 C 16 12.88 16 13.72 15.673 14.362 C 15.385 14.926 14.926 15.385 14.362 15.673 C 13.72 16 12.88 16 11.2 16 L 4.8 16 C 3.12 16 2.28 16 1.638 15.673 C 1.074 15.385 0.615 14.926 0.327 14.362 C 0 13.72 0 12.88 0 11.2 L 0 4.8 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 13,
              whiteSpace: "nowrap",
              lineHeight: "16px",
              color: "var(--mac-labels-vibrant-use-plus-lighter-darker-primary)",
              flexGrow: 1,
              alignSelf: "stretch",
            }}>Label</span>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 13,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "16px",
              color: "var(--mac-labels-vibrant-use-plus-lighter-darker-tertiary)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>Detail</span>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 320,
          top: 1350,
          width: 270,
          borderRadius: 5,
          display: "flex",
          flexDirection: "row",
          padding: "0px 10px 0px 10px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <div style={{
            position: "relative",
            borderRadius: 8,
            backgroundColor: "rgba(0,0,0,0.11)",
            display: "flex",
            flexDirection: "row",
            gap: 3,
            padding: "8px 10px 8px 50px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              width: 16,
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <span style={{
                position: "absolute",
                left: 0,
                top: -4,
                width: 16,
                height: 24,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 700,
                fontSize: 11,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "18px",
                color: "rgba(0,0,0,0.25)",
              }}>􀆈</span>
            </div>
            <div style={{
              position: "relative",
              width: 20,
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "nowrap",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <svg width={16} viewBox="0 0 16 16" fill="none" style={{
                position: "relative",
                width: 16,
                borderRadius: 3,
                flexShrink: 0,
                alignSelf: "stretch",
              }}>
                <path d={"M 0 4.8 C 0 3.12 0 2.28 0.327 1.638 C 0.615 1.074 1.074 0.615 1.638 0.327 C 2.28 0 3.12 0 4.8 0 L 11.2 0 C 12.88 0 13.72 0 14.362 0.327 C 14.926 0.615 15.385 1.074 15.673 1.638 C 16 2.28 16 3.12 16 4.8 L 16 11.2 C 16 12.88 16 13.72 15.673 14.362 C 15.385 14.926 14.926 15.385 14.362 15.673 C 13.72 16 12.88 16 11.2 16 L 4.8 16 C 3.12 16 2.28 16 1.638 15.673 C 1.074 15.385 0.615 14.926 0.327 14.362 C 0 13.72 0 12.88 0 11.2 L 0 4.8 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 13,
              whiteSpace: "nowrap",
              lineHeight: "16px",
              color: "rgba(0,0,0,0.85)",
              flexGrow: 1,
              alignSelf: "stretch",
            }}>Label</span>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 13,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "16px",
              color: "var(--mac-labels-vibrant-use-plus-lighter-darker-tertiary)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>Detail</span>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 320,
          top: 1300,
          width: 270,
          borderRadius: 5,
          display: "flex",
          flexDirection: "row",
          padding: "0px 10px 0px 10px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <div style={{
            position: "relative",
            borderRadius: 8,
            display: "flex",
            flexDirection: "row",
            gap: 3,
            padding: "8px 10px 8px 50px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              width: 16,
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <span style={{
                position: "absolute",
                left: 0,
                top: -4,
                width: 16,
                height: 24,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 700,
                fontSize: 11,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "18px",
                color: "rgba(0,0,0,0.25)",
              }}>􀆈</span>
            </div>
            <div style={{
              position: "relative",
              width: 20,
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "nowrap",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <svg width={16} viewBox="0 0 16 16" fill="none" style={{
                position: "relative",
                width: 16,
                borderRadius: 3,
                flexShrink: 0,
                alignSelf: "stretch",
              }}>
                <path d={"M 0 4.8 C 0 3.12 0 2.28 0.327 1.638 C 0.615 1.074 1.074 0.615 1.638 0.327 C 2.28 0 3.12 0 4.8 0 L 11.2 0 C 12.88 0 13.72 0 14.362 0.327 C 14.926 0.615 15.385 1.074 15.673 1.638 C 16 2.28 16 3.12 16 4.8 L 16 11.2 C 16 12.88 16 13.72 15.673 14.362 C 15.385 14.926 14.926 15.385 14.362 15.673 C 13.72 16 12.88 16 11.2 16 L 4.8 16 C 3.12 16 2.28 16 1.638 15.673 C 1.074 15.385 0.615 14.926 0.327 14.362 C 0 13.72 0 12.88 0 11.2 L 0 4.8 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 13,
              whiteSpace: "nowrap",
              lineHeight: "16px",
              color: "rgba(0,0,0,0.85)",
              flexGrow: 1,
              alignSelf: "stretch",
            }}>Label</span>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 13,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "16px",
              color: "var(--mac-labels-vibrant-use-plus-lighter-darker-tertiary)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>Detail</span>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 320,
          top: 1240,
          width: 270,
          borderRadius: 5,
          display: "flex",
          flexDirection: "row",
          padding: "0px 10px 0px 10px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <div style={{
            position: "relative",
            opacity: 0.5,
            borderRadius: 8,
            display: "flex",
            flexDirection: "row",
            gap: 3,
            padding: "8px 10px 8px 38px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              width: 16,
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <span style={{
                position: "absolute",
                left: 0,
                top: -4,
                width: 16,
                height: 24,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 700,
                fontSize: 11,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "18px",
                color: "rgba(0,0,0,0.25)",
              }}>􀆈</span>
            </div>
            <div style={{
              position: "relative",
              width: 20,
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "nowrap",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <svg width={16} viewBox="0 0 16 16" fill="none" style={{
                position: "relative",
                width: 16,
                borderRadius: 3,
                flexShrink: 0,
                alignSelf: "stretch",
              }}>
                <path d={"M 0 4.8 C 0 3.12 0 2.28 0.327 1.638 C 0.615 1.074 1.074 0.615 1.638 0.327 C 2.28 0 3.12 0 4.8 0 L 11.2 0 C 12.88 0 13.72 0 14.362 0.327 C 14.926 0.615 15.385 1.074 15.673 1.638 C 16 2.28 16 3.12 16 4.8 L 16 11.2 C 16 12.88 16 13.72 15.673 14.362 C 15.385 14.926 14.926 15.385 14.362 15.673 C 13.72 16 12.88 16 11.2 16 L 4.8 16 C 3.12 16 2.28 16 1.638 15.673 C 1.074 15.385 0.615 14.926 0.327 14.362 C 0 13.72 0 12.88 0 11.2 L 0 4.8 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 13,
              whiteSpace: "nowrap",
              lineHeight: "16px",
              color: "var(--mac-labels-vibrant-use-plus-lighter-darker-primary)",
              flexGrow: 1,
              alignSelf: "stretch",
            }}>Label</span>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 13,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "16px",
              color: "var(--mac-labels-vibrant-use-plus-lighter-darker-tertiary)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>Detail</span>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 320,
          top: 1190,
          width: 270,
          borderRadius: 5,
          display: "flex",
          flexDirection: "row",
          padding: "0px 10px 0px 10px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <div style={{
            position: "relative",
            borderRadius: 8,
            backgroundColor: "rgba(0,0,0,0.11)",
            display: "flex",
            flexDirection: "row",
            gap: 3,
            padding: "8px 10px 8px 38px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              width: 16,
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <span style={{
                position: "absolute",
                left: 0,
                top: -4,
                width: 16,
                height: 24,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 700,
                fontSize: 11,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "18px",
                color: "rgba(0,0,0,0.25)",
              }}>􀆈</span>
            </div>
            <div style={{
              position: "relative",
              width: 20,
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "nowrap",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <svg width={16} viewBox="0 0 16 16" fill="none" style={{
                position: "relative",
                width: 16,
                borderRadius: 3,
                flexShrink: 0,
                alignSelf: "stretch",
              }}>
                <path d={"M 0 4.8 C 0 3.12 0 2.28 0.327 1.638 C 0.615 1.074 1.074 0.615 1.638 0.327 C 2.28 0 3.12 0 4.8 0 L 11.2 0 C 12.88 0 13.72 0 14.362 0.327 C 14.926 0.615 15.385 1.074 15.673 1.638 C 16 2.28 16 3.12 16 4.8 L 16 11.2 C 16 12.88 16 13.72 15.673 14.362 C 15.385 14.926 14.926 15.385 14.362 15.673 C 13.72 16 12.88 16 11.2 16 L 4.8 16 C 3.12 16 2.28 16 1.638 15.673 C 1.074 15.385 0.615 14.926 0.327 14.362 C 0 13.72 0 12.88 0 11.2 L 0 4.8 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 13,
              whiteSpace: "nowrap",
              lineHeight: "16px",
              color: "rgba(0,0,0,0.85)",
              flexGrow: 1,
              alignSelf: "stretch",
            }}>Label</span>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 13,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "16px",
              color: "var(--mac-labels-vibrant-use-plus-lighter-darker-tertiary)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>Detail</span>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 320,
          top: 1140,
          width: 270,
          borderRadius: 5,
          display: "flex",
          flexDirection: "row",
          padding: "0px 10px 0px 10px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <div style={{
            position: "relative",
            borderRadius: 8,
            display: "flex",
            flexDirection: "row",
            gap: 3,
            padding: "8px 10px 8px 38px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              width: 16,
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <span style={{
                position: "absolute",
                left: 0,
                top: -4,
                width: 16,
                height: 24,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 700,
                fontSize: 11,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "18px",
                color: "rgba(0,0,0,0.25)",
              }}>􀆈</span>
            </div>
            <div style={{
              position: "relative",
              width: 20,
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "nowrap",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <svg width={16} viewBox="0 0 16 16" fill="none" style={{
                position: "relative",
                width: 16,
                borderRadius: 3,
                flexShrink: 0,
                alignSelf: "stretch",
              }}>
                <path d={"M 0 4.8 C 0 3.12 0 2.28 0.327 1.638 C 0.615 1.074 1.074 0.615 1.638 0.327 C 2.28 0 3.12 0 4.8 0 L 11.2 0 C 12.88 0 13.72 0 14.362 0.327 C 14.926 0.615 15.385 1.074 15.673 1.638 C 16 2.28 16 3.12 16 4.8 L 16 11.2 C 16 12.88 16 13.72 15.673 14.362 C 15.385 14.926 14.926 15.385 14.362 15.673 C 13.72 16 12.88 16 11.2 16 L 4.8 16 C 3.12 16 2.28 16 1.638 15.673 C 1.074 15.385 0.615 14.926 0.327 14.362 C 0 13.72 0 12.88 0 11.2 L 0 4.8 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 13,
              whiteSpace: "nowrap",
              lineHeight: "16px",
              color: "rgba(0,0,0,0.85)",
              flexGrow: 1,
              alignSelf: "stretch",
            }}>Label</span>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 13,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "16px",
              color: "var(--mac-labels-vibrant-use-plus-lighter-darker-tertiary)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>Detail</span>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 320,
          top: 1080,
          width: 270,
          borderRadius: 5,
          display: "flex",
          flexDirection: "row",
          padding: "0px 10px 0px 10px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <div style={{
            position: "relative",
            opacity: 0.5,
            borderRadius: 8,
            display: "flex",
            flexDirection: "row",
            gap: 3,
            padding: "8px 10px 8px 28px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              width: 16,
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <span style={{
                position: "absolute",
                left: 0,
                top: -4,
                width: 16,
                height: 24,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 700,
                fontSize: 11,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "18px",
                color: "rgba(0,0,0,0.25)",
              }}>􀆈</span>
            </div>
            <div style={{
              position: "relative",
              width: 20,
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "nowrap",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <svg width={16} viewBox="0 0 16 16" fill="none" style={{
                position: "relative",
                width: 16,
                borderRadius: 3,
                flexShrink: 0,
                alignSelf: "stretch",
              }}>
                <path d={"M 0 4.8 C 0 3.12 0 2.28 0.327 1.638 C 0.615 1.074 1.074 0.615 1.638 0.327 C 2.28 0 3.12 0 4.8 0 L 11.2 0 C 12.88 0 13.72 0 14.362 0.327 C 14.926 0.615 15.385 1.074 15.673 1.638 C 16 2.28 16 3.12 16 4.8 L 16 11.2 C 16 12.88 16 13.72 15.673 14.362 C 15.385 14.926 14.926 15.385 14.362 15.673 C 13.72 16 12.88 16 11.2 16 L 4.8 16 C 3.12 16 2.28 16 1.638 15.673 C 1.074 15.385 0.615 14.926 0.327 14.362 C 0 13.72 0 12.88 0 11.2 L 0 4.8 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 13,
              whiteSpace: "nowrap",
              lineHeight: "16px",
              color: "var(--mac-labels-vibrant-use-plus-lighter-darker-primary)",
              flexGrow: 1,
              alignSelf: "stretch",
            }}>Label</span>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 13,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "16px",
              color: "var(--mac-labels-vibrant-use-plus-lighter-darker-tertiary)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>Detail</span>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 320,
          top: 1030,
          width: 270,
          borderRadius: 5,
          display: "flex",
          flexDirection: "row",
          padding: "0px 10px 0px 10px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <div style={{
            position: "relative",
            borderRadius: 8,
            backgroundColor: "rgba(0,0,0,0.11)",
            display: "flex",
            flexDirection: "row",
            gap: 3,
            padding: "8px 10px 8px 28px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              width: 16,
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <span style={{
                position: "absolute",
                left: 0,
                top: -4,
                width: 16,
                height: 24,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 700,
                fontSize: 11,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "18px",
                color: "rgba(0,0,0,0.25)",
              }}>􀆈</span>
            </div>
            <div style={{
              position: "relative",
              width: 20,
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "nowrap",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <svg width={16} viewBox="0 0 16 16" fill="none" style={{
                position: "relative",
                width: 16,
                borderRadius: 3,
                flexShrink: 0,
                alignSelf: "stretch",
              }}>
                <path d={"M 0 4.8 C 0 3.12 0 2.28 0.327 1.638 C 0.615 1.074 1.074 0.615 1.638 0.327 C 2.28 0 3.12 0 4.8 0 L 11.2 0 C 12.88 0 13.72 0 14.362 0.327 C 14.926 0.615 15.385 1.074 15.673 1.638 C 16 2.28 16 3.12 16 4.8 L 16 11.2 C 16 12.88 16 13.72 15.673 14.362 C 15.385 14.926 14.926 15.385 14.362 15.673 C 13.72 16 12.88 16 11.2 16 L 4.8 16 C 3.12 16 2.28 16 1.638 15.673 C 1.074 15.385 0.615 14.926 0.327 14.362 C 0 13.72 0 12.88 0 11.2 L 0 4.8 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 13,
              whiteSpace: "nowrap",
              lineHeight: "16px",
              color: "rgba(0,0,0,0.85)",
              flexGrow: 1,
              alignSelf: "stretch",
            }}>Label</span>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 13,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "16px",
              color: "var(--mac-labels-vibrant-use-plus-lighter-darker-tertiary)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>Detail</span>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 320,
          top: 980,
          width: 270,
          borderRadius: 5,
          display: "flex",
          flexDirection: "row",
          padding: "0px 10px 0px 10px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <div style={{
            position: "relative",
            borderRadius: 8,
            display: "flex",
            flexDirection: "row",
            gap: 3,
            padding: "8px 10px 8px 28px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              width: 16,
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <span style={{
                position: "absolute",
                left: 0,
                top: -4,
                width: 16,
                height: 24,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 700,
                fontSize: 11,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "18px",
                color: "rgba(0,0,0,0.25)",
              }}>􀆈</span>
            </div>
            <div style={{
              position: "relative",
              width: 20,
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "nowrap",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <svg width={16} viewBox="0 0 16 16" fill="none" style={{
                position: "relative",
                width: 16,
                borderRadius: 3,
                flexShrink: 0,
                alignSelf: "stretch",
              }}>
                <path d={"M 0 4.8 C 0 3.12 0 2.28 0.327 1.638 C 0.615 1.074 1.074 0.615 1.638 0.327 C 2.28 0 3.12 0 4.8 0 L 11.2 0 C 12.88 0 13.72 0 14.362 0.327 C 14.926 0.615 15.385 1.074 15.673 1.638 C 16 2.28 16 3.12 16 4.8 L 16 11.2 C 16 12.88 16 13.72 15.673 14.362 C 15.385 14.926 14.926 15.385 14.362 15.673 C 13.72 16 12.88 16 11.2 16 L 4.8 16 C 3.12 16 2.28 16 1.638 15.673 C 1.074 15.385 0.615 14.926 0.327 14.362 C 0 13.72 0 12.88 0 11.2 L 0 4.8 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 13,
              whiteSpace: "nowrap",
              lineHeight: "16px",
              color: "rgba(0,0,0,0.85)",
              flexGrow: 1,
              alignSelf: "stretch",
            }}>Label</span>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 13,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "16px",
              color: "var(--mac-labels-vibrant-use-plus-lighter-darker-tertiary)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>Detail</span>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 320,
          top: 920,
          width: 270,
          borderRadius: 5,
          display: "flex",
          flexDirection: "row",
          padding: "0px 10px 0px 10px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <div style={{
            position: "relative",
            opacity: 0.5,
            borderRadius: 8,
            display: "flex",
            flexDirection: "row",
            gap: 3,
            padding: "8px 10px 8px 6px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              width: 16,
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <span style={{
                position: "absolute",
                left: 0,
                top: -4,
                width: 16,
                height: 24,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 700,
                fontSize: 11,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "18px",
                color: "rgba(0,0,0,0.25)",
              }}>􀆈</span>
            </div>
            <div style={{
              position: "relative",
              width: 22,
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "nowrap",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <svg width={18} viewBox="0 0 18 18" fill="none" style={{
                position: "relative",
                width: 18,
                borderRadius: 3,
                flexShrink: 0,
                alignSelf: "stretch",
              }}>
                <path d={"M 0 4.8 C 0 3.12 0 2.28 0.327 1.638 C 0.615 1.074 1.074 0.615 1.638 0.327 C 2.28 0 3.12 0 4.8 0 L 13.2 0 C 14.88 0 15.72 0 16.362 0.327 C 16.926 0.615 17.385 1.074 17.673 1.638 C 18 2.28 18 3.12 18 4.8 L 18 13.2 C 18 14.88 18 15.72 17.673 16.362 C 17.385 16.926 16.926 17.385 16.362 17.673 C 15.72 18 14.88 18 13.2 18 L 4.8 18 C 3.12 18 2.28 18 1.638 17.673 C 1.074 17.385 0.615 16.926 0.327 16.362 C 0 15.72 0 14.88 0 13.2 L 0 4.8 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 13,
              whiteSpace: "nowrap",
              lineHeight: "16px",
              color: "var(--mac-labels-vibrant-use-plus-lighter-darker-primary)",
              flexGrow: 1,
              alignSelf: "stretch",
            }}>Label</span>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 13,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "16px",
              color: "var(--mac-labels-vibrant-use-plus-lighter-darker-tertiary)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>Detail</span>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 320,
          top: 870,
          width: 270,
          borderRadius: 5,
          display: "flex",
          flexDirection: "row",
          padding: "0px 10px 0px 10px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <div style={{
            position: "relative",
            borderRadius: 8,
            backgroundColor: "rgba(0,0,0,0.11)",
            display: "flex",
            flexDirection: "row",
            gap: 3,
            padding: "8px 10px 8px 6px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              width: 16,
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <span style={{
                position: "absolute",
                left: 0,
                top: -4,
                width: 16,
                height: 24,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 700,
                fontSize: 11,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "18px",
                color: "rgba(0,0,0,0.25)",
              }}>􀆈</span>
            </div>
            <div style={{
              position: "relative",
              width: 22,
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "nowrap",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <svg width={18} viewBox="0 0 18 18" fill="none" style={{
                position: "relative",
                width: 18,
                borderRadius: 3,
                flexShrink: 0,
                alignSelf: "stretch",
              }}>
                <path d={"M 0 4.8 C 0 3.12 0 2.28 0.327 1.638 C 0.615 1.074 1.074 0.615 1.638 0.327 C 2.28 0 3.12 0 4.8 0 L 13.2 0 C 14.88 0 15.72 0 16.362 0.327 C 16.926 0.615 17.385 1.074 17.673 1.638 C 18 2.28 18 3.12 18 4.8 L 18 13.2 C 18 14.88 18 15.72 17.673 16.362 C 17.385 16.926 16.926 17.385 16.362 17.673 C 15.72 18 14.88 18 13.2 18 L 4.8 18 C 3.12 18 2.28 18 1.638 17.673 C 1.074 17.385 0.615 16.926 0.327 16.362 C 0 15.72 0 14.88 0 13.2 L 0 4.8 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 13,
              whiteSpace: "nowrap",
              lineHeight: "16px",
              color: "rgba(0,0,0,0.85)",
              flexGrow: 1,
              alignSelf: "stretch",
            }}>Label</span>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 13,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "16px",
              color: "var(--mac-labels-vibrant-use-plus-lighter-darker-tertiary)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>Detail</span>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 320,
          top: 820,
          width: 270,
          borderRadius: 5,
          display: "flex",
          flexDirection: "row",
          padding: "0px 10px 0px 10px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <div style={{
            position: "relative",
            borderRadius: 8,
            display: "flex",
            flexDirection: "row",
            gap: 3,
            padding: "8px 10px 8px 6px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              width: 16,
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <span style={{
                position: "absolute",
                left: 0,
                top: -4,
                width: 16,
                height: 24,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 700,
                fontSize: 11,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "18px",
                color: "rgba(0,0,0,0.25)",
              }}>􀆈</span>
            </div>
            <div style={{
              position: "relative",
              width: 22,
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "nowrap",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <svg width={18} viewBox="0 0 18 18" fill="none" style={{
                position: "relative",
                width: 18,
                borderRadius: 3,
                flexShrink: 0,
                alignSelf: "stretch",
              }}>
                <path d={"M 0 4.8 C 0 3.12 0 2.28 0.327 1.638 C 0.615 1.074 1.074 0.615 1.638 0.327 C 2.28 0 3.12 0 4.8 0 L 13.2 0 C 14.88 0 15.72 0 16.362 0.327 C 16.926 0.615 17.385 1.074 17.673 1.638 C 18 2.28 18 3.12 18 4.8 L 18 13.2 C 18 14.88 18 15.72 17.673 16.362 C 17.385 16.926 16.926 17.385 16.362 17.673 C 15.72 18 14.88 18 13.2 18 L 4.8 18 C 3.12 18 2.28 18 1.638 17.673 C 1.074 17.385 0.615 16.926 0.327 16.362 C 0 15.72 0 14.88 0 13.2 L 0 4.8 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 13,
              whiteSpace: "nowrap",
              lineHeight: "16px",
              color: "rgba(0,0,0,0.85)",
              flexGrow: 1,
              alignSelf: "stretch",
            }}>Label</span>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 13,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "16px",
              color: "var(--mac-labels-vibrant-use-plus-lighter-darker-tertiary)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>Detail</span>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 320,
          top: 760,
          width: 270,
          borderRadius: 5,
          display: "flex",
          flexDirection: "row",
          padding: "0px 10px 0px 10px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <div style={{
            position: "relative",
            opacity: 0.5,
            borderRadius: 8,
            display: "flex",
            flexDirection: "row",
            gap: 3,
            padding: "8px 10px 8px 62px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              width: 16,
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <span style={{
                position: "absolute",
                left: 0,
                top: -4,
                width: 16,
                height: 24,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 700,
                fontSize: 11,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "18px",
                color: "rgba(0,0,0,0.25)",
              }}>􀆈</span>
            </div>
            <div style={{
              position: "relative",
              width: 20,
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <span style={{
                position: "absolute",
                left: 1,
                top: 0,
                width: 18,
                height: 16,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 510,
                fontSize: 13,
                textAlign: "right",
                whiteSpace: "nowrap",
                lineHeight: "16px",
                color: "var(--mac-labels-vibrant-use-plus-lighter-darker-primary)",
              }}>􀈕</span>
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 13,
              whiteSpace: "nowrap",
              lineHeight: "16px",
              color: "var(--mac-labels-vibrant-use-plus-lighter-darker-primary)",
              flexGrow: 1,
              alignSelf: "stretch",
            }}>Label</span>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 13,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "16px",
              color: "var(--mac-labels-vibrant-use-plus-lighter-darker-tertiary)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>Detail</span>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 320,
          top: 710,
          width: 270,
          borderRadius: 5,
          display: "flex",
          flexDirection: "row",
          padding: "0px 10px 0px 10px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <div style={{
            position: "relative",
            borderRadius: 8,
            backgroundColor: "rgba(0,0,0,0.11)",
            display: "flex",
            flexDirection: "row",
            gap: 3,
            padding: "8px 10px 8px 62px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              width: 16,
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <span style={{
                position: "absolute",
                left: 0,
                top: -4,
                width: 16,
                height: 24,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 700,
                fontSize: 11,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "18px",
                color: "rgba(0,0,0,0.25)",
              }}>􀆈</span>
            </div>
            <div style={{
              position: "relative",
              width: 20,
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <span style={{
                position: "absolute",
                left: 1,
                top: 0,
                width: 18,
                height: 16,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 510,
                fontSize: 13,
                textAlign: "right",
                whiteSpace: "nowrap",
                lineHeight: "16px",
                color: "rgb(0,122,255)",
              }}>􀈕</span>
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 13,
              whiteSpace: "nowrap",
              lineHeight: "16px",
              color: "rgba(0,0,0,0.85)",
              flexGrow: 1,
              alignSelf: "stretch",
            }}>Label</span>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 13,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "16px",
              color: "var(--mac-labels-vibrant-use-plus-lighter-darker-tertiary)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>Detail</span>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 320,
          top: 660,
          width: 270,
          borderRadius: 5,
          display: "flex",
          flexDirection: "row",
          padding: "0px 10px 0px 10px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <div style={{
            position: "relative",
            borderRadius: 8,
            display: "flex",
            flexDirection: "row",
            gap: 3,
            padding: "8px 10px 8px 62px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              width: 16,
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <span style={{
                position: "absolute",
                left: 0,
                top: -4,
                width: 16,
                height: 24,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 700,
                fontSize: 11,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "18px",
                color: "rgba(0,0,0,0.25)",
              }}>􀆈</span>
            </div>
            <div style={{
              position: "relative",
              width: 20,
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <span style={{
                position: "absolute",
                left: 1,
                top: 0,
                width: 18,
                height: 16,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 510,
                fontSize: 13,
                textAlign: "right",
                whiteSpace: "nowrap",
                lineHeight: "16px",
                color: "rgba(0,0,0,0.85)",
              }}>􀈕</span>
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 13,
              whiteSpace: "nowrap",
              lineHeight: "16px",
              color: "rgba(0,0,0,0.85)",
              flexGrow: 1,
              alignSelf: "stretch",
            }}>Label</span>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 13,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "16px",
              color: "var(--mac-labels-vibrant-use-plus-lighter-darker-tertiary)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>Detail</span>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 320,
          top: 600,
          width: 270,
          borderRadius: 5,
          display: "flex",
          flexDirection: "row",
          padding: "0px 10px 0px 10px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <div style={{
            position: "relative",
            opacity: 0.5,
            borderRadius: 8,
            display: "flex",
            flexDirection: "row",
            gap: 3,
            padding: "8px 10px 8px 50px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              width: 16,
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <span style={{
                position: "absolute",
                left: 0,
                top: -4,
                width: 16,
                height: 24,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 700,
                fontSize: 11,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "18px",
                color: "rgba(0,0,0,0.25)",
              }}>􀆈</span>
            </div>
            <div style={{
              position: "relative",
              width: 20,
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <span style={{
                position: "absolute",
                left: 1,
                top: 0,
                width: 18,
                height: 16,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 510,
                fontSize: 13,
                textAlign: "right",
                whiteSpace: "nowrap",
                lineHeight: "16px",
                color: "var(--mac-labels-vibrant-use-plus-lighter-darker-primary)",
              }}>􀈕</span>
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 13,
              whiteSpace: "nowrap",
              lineHeight: "16px",
              color: "var(--mac-labels-vibrant-use-plus-lighter-darker-primary)",
              flexGrow: 1,
              alignSelf: "stretch",
            }}>Label</span>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 13,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "16px",
              color: "var(--mac-labels-vibrant-use-plus-lighter-darker-tertiary)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>Detail</span>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 320,
          top: 550,
          width: 270,
          borderRadius: 5,
          display: "flex",
          flexDirection: "row",
          padding: "0px 10px 0px 10px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <div style={{
            position: "relative",
            borderRadius: 8,
            backgroundColor: "rgba(0,0,0,0.11)",
            display: "flex",
            flexDirection: "row",
            gap: 3,
            padding: "8px 10px 8px 50px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              width: 16,
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <span style={{
                position: "absolute",
                left: 0,
                top: -4,
                width: 16,
                height: 24,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 700,
                fontSize: 11,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "18px",
                color: "rgba(0,0,0,0.25)",
              }}>􀆈</span>
            </div>
            <div style={{
              position: "relative",
              width: 20,
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <span style={{
                position: "absolute",
                left: 1,
                top: 0,
                width: 18,
                height: 16,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 510,
                fontSize: 13,
                textAlign: "right",
                whiteSpace: "nowrap",
                lineHeight: "16px",
                color: "rgb(0,122,255)",
              }}>􀈕</span>
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 13,
              whiteSpace: "nowrap",
              lineHeight: "16px",
              color: "rgba(0,0,0,0.85)",
              flexGrow: 1,
              alignSelf: "stretch",
            }}>Label</span>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 13,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "16px",
              color: "var(--mac-labels-vibrant-use-plus-lighter-darker-tertiary)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>Detail</span>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 320,
          top: 500,
          width: 270,
          borderRadius: 5,
          display: "flex",
          flexDirection: "row",
          padding: "0px 10px 0px 10px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <div style={{
            position: "relative",
            borderRadius: 8,
            display: "flex",
            flexDirection: "row",
            gap: 3,
            padding: "8px 10px 8px 50px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              width: 16,
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <span style={{
                position: "absolute",
                left: 0,
                top: -4,
                width: 16,
                height: 24,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 700,
                fontSize: 11,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "18px",
                color: "rgba(0,0,0,0.25)",
              }}>􀆈</span>
            </div>
            <div style={{
              position: "relative",
              width: 20,
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <span style={{
                position: "absolute",
                left: 1,
                top: 0,
                width: 18,
                height: 16,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 510,
                fontSize: 13,
                textAlign: "right",
                whiteSpace: "nowrap",
                lineHeight: "16px",
                color: "rgba(0,0,0,0.85)",
              }}>􀈕</span>
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 13,
              whiteSpace: "nowrap",
              lineHeight: "16px",
              color: "rgba(0,0,0,0.85)",
              flexGrow: 1,
              alignSelf: "stretch",
            }}>Label</span>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 13,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "16px",
              color: "var(--mac-labels-vibrant-use-plus-lighter-darker-tertiary)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>Detail</span>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 320,
          top: 440,
          width: 270,
          borderRadius: 5,
          display: "flex",
          flexDirection: "row",
          padding: "0px 10px 0px 10px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <div style={{
            position: "relative",
            opacity: 0.5,
            borderRadius: 8,
            display: "flex",
            flexDirection: "row",
            gap: 3,
            padding: "8px 10px 8px 38px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              width: 16,
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <span style={{
                position: "absolute",
                left: 0,
                top: -4,
                width: 16,
                height: 24,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 700,
                fontSize: 11,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "18px",
                color: "rgba(0,0,0,0.25)",
              }}>􀆈</span>
            </div>
            <div style={{
              position: "relative",
              width: 20,
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <span style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 18,
                height: 16,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 510,
                fontSize: 13,
                textAlign: "right",
                whiteSpace: "nowrap",
                lineHeight: "16px",
                color: "var(--mac-labels-vibrant-use-plus-lighter-darker-primary)",
              }}>􀈕</span>
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 13,
              whiteSpace: "nowrap",
              lineHeight: "16px",
              color: "var(--mac-labels-vibrant-use-plus-lighter-darker-primary)",
              flexGrow: 1,
              alignSelf: "stretch",
            }}>Label</span>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 13,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "16px",
              color: "var(--mac-labels-vibrant-use-plus-lighter-darker-tertiary)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>Detail</span>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 320,
          top: 390,
          width: 270,
          borderRadius: 5,
          display: "flex",
          flexDirection: "row",
          padding: "0px 10px 0px 10px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <div style={{
            position: "relative",
            borderRadius: 8,
            backgroundColor: "rgba(0,0,0,0.11)",
            display: "flex",
            flexDirection: "row",
            gap: 3,
            padding: "8px 10px 8px 38px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              width: 16,
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <span style={{
                position: "absolute",
                left: 0,
                top: -4,
                width: 16,
                height: 24,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 700,
                fontSize: 11,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "18px",
                color: "rgba(0,0,0,0.25)",
              }}>􀆈</span>
            </div>
            <div style={{
              position: "relative",
              width: 20,
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <span style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 18,
                height: 16,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 510,
                fontSize: 13,
                textAlign: "right",
                whiteSpace: "nowrap",
                lineHeight: "16px",
                color: "rgb(0,122,255)",
              }}>􀈕</span>
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 13,
              whiteSpace: "nowrap",
              lineHeight: "16px",
              color: "rgba(0,0,0,0.85)",
              flexGrow: 1,
              alignSelf: "stretch",
            }}>Label</span>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 13,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "16px",
              color: "var(--mac-labels-vibrant-use-plus-lighter-darker-tertiary)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>Detail</span>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 320,
          top: 340,
          width: 270,
          borderRadius: 5,
          display: "flex",
          flexDirection: "row",
          padding: "0px 10px 0px 10px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <div style={{
            position: "relative",
            borderRadius: 8,
            display: "flex",
            flexDirection: "row",
            gap: 3,
            padding: "8px 10px 8px 38px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              width: 16,
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <span style={{
                position: "absolute",
                left: 0,
                top: -4,
                width: 16,
                height: 24,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 700,
                fontSize: 11,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "18px",
                color: "rgba(0,0,0,0.25)",
              }}>􀆈</span>
            </div>
            <div style={{
              position: "relative",
              width: 20,
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <span style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 18,
                height: 16,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 510,
                fontSize: 13,
                textAlign: "right",
                whiteSpace: "nowrap",
                lineHeight: "16px",
                color: "rgba(0,0,0,0.85)",
              }}>􀈕</span>
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 13,
              whiteSpace: "nowrap",
              lineHeight: "16px",
              color: "rgba(0,0,0,0.85)",
              flexGrow: 1,
              alignSelf: "stretch",
            }}>Label</span>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 13,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "16px",
              color: "var(--mac-labels-vibrant-use-plus-lighter-darker-tertiary)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>Detail</span>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 320,
          top: 280,
          width: 270,
          borderRadius: 5,
          display: "flex",
          flexDirection: "row",
          padding: "0px 10px 0px 10px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <div style={{
            position: "relative",
            opacity: 0.5,
            borderRadius: 8,
            display: "flex",
            flexDirection: "row",
            gap: 3,
            padding: "8px 10px 8px 28px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              width: 16,
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <span style={{
                position: "absolute",
                left: 0,
                top: -4,
                width: 16,
                height: 24,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 700,
                fontSize: 11,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "18px",
                color: "rgba(0,0,0,0.25)",
              }}>􀆈</span>
            </div>
            <div style={{
              position: "relative",
              width: 20,
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <span style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 18,
                height: 16,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 510,
                fontSize: 13,
                textAlign: "right",
                whiteSpace: "nowrap",
                lineHeight: "16px",
                color: "var(--mac-labels-vibrant-use-plus-lighter-darker-primary)",
              }}>􀈕</span>
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 13,
              whiteSpace: "nowrap",
              lineHeight: "16px",
              color: "var(--mac-labels-vibrant-use-plus-lighter-darker-primary)",
              flexGrow: 1,
              alignSelf: "stretch",
            }}>Label</span>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 13,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "16px",
              color: "var(--mac-labels-vibrant-use-plus-lighter-darker-tertiary)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>Detail</span>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 320,
          top: 230,
          width: 270,
          borderRadius: 5,
          display: "flex",
          flexDirection: "row",
          padding: "0px 10px 0px 10px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <div style={{
            position: "relative",
            borderRadius: 8,
            backgroundColor: "rgba(0,0,0,0.11)",
            display: "flex",
            flexDirection: "row",
            gap: 3,
            padding: "8px 10px 8px 28px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              width: 16,
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <span style={{
                position: "absolute",
                left: 0,
                top: -4,
                width: 16,
                height: 24,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 700,
                fontSize: 11,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "18px",
                color: "rgba(0,0,0,0.25)",
              }}>􀆈</span>
            </div>
            <div style={{
              position: "relative",
              width: 20,
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <span style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 18,
                height: 16,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 510,
                fontSize: 13,
                textAlign: "right",
                whiteSpace: "nowrap",
                lineHeight: "16px",
                color: "rgb(0,122,255)",
              }}>􀈕</span>
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 13,
              whiteSpace: "nowrap",
              lineHeight: "16px",
              color: "rgba(0,0,0,0.85)",
              flexGrow: 1,
              alignSelf: "stretch",
            }}>Label</span>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 13,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "16px",
              color: "var(--mac-labels-vibrant-use-plus-lighter-darker-tertiary)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>Detail</span>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 320,
          top: 180,
          width: 270,
          borderRadius: 5,
          display: "flex",
          flexDirection: "row",
          padding: "0px 10px 0px 10px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <div style={{
            position: "relative",
            borderRadius: 8,
            display: "flex",
            flexDirection: "row",
            gap: 3,
            padding: "8px 10px 8px 28px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              width: 16,
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <span style={{
                position: "absolute",
                left: 0,
                top: -4,
                width: 16,
                height: 24,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 700,
                fontSize: 11,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "18px",
                color: "rgba(0,0,0,0.25)",
              }}>􀆈</span>
            </div>
            <div style={{
              position: "relative",
              width: 20,
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <span style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 18,
                height: 16,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 510,
                fontSize: 13,
                textAlign: "right",
                whiteSpace: "nowrap",
                lineHeight: "16px",
                color: "rgba(0,0,0,0.85)",
              }}>􀈕</span>
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 13,
              whiteSpace: "nowrap",
              lineHeight: "16px",
              color: "rgba(0,0,0,0.85)",
              flexGrow: 1,
              alignSelf: "stretch",
            }}>Label</span>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 13,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "16px",
              color: "var(--mac-labels-vibrant-use-plus-lighter-darker-tertiary)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>Detail</span>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 320,
          top: 120,
          width: 270,
          borderRadius: 5,
          display: "flex",
          flexDirection: "row",
          padding: "0px 10px 0px 10px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <div style={{
            position: "relative",
            opacity: 0.5,
            borderRadius: 8,
            display: "flex",
            flexDirection: "row",
            gap: 4,
            padding: "8px 10px 8px 6px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              width: 16,
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <span style={{
                position: "absolute",
                left: 0,
                top: -4,
                width: 16,
                height: 24,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 700,
                fontSize: 11,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "18px",
                color: "rgba(0,0,0,0.25)",
              }}>􀆈</span>
            </div>
            <div style={{
              position: "relative",
              width: 22,
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <span style={{
                position: "absolute",
                left: -2,
                top: 0,
                width: 23,
                height: 16,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 510,
                fontSize: 13,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "16px",
                color: "var(--mac-labels-vibrant-use-plus-lighter-darker-primary)",
              }}>􀈕</span>
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 13,
              whiteSpace: "nowrap",
              lineHeight: "16px",
              color: "var(--mac-labels-vibrant-use-plus-lighter-darker-primary)",
              flexGrow: 1,
              alignSelf: "stretch",
            }}>Label</span>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 13,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "16px",
              color: "var(--mac-labels-vibrant-use-plus-lighter-darker-tertiary)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>Detail</span>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 320,
          top: 70,
          width: 270,
          borderRadius: 5,
          display: "flex",
          flexDirection: "row",
          padding: "0px 10px 0px 10px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <div style={{
            position: "relative",
            borderRadius: 8,
            backgroundColor: "rgba(0,0,0,0.11)",
            display: "flex",
            flexDirection: "row",
            gap: 4,
            padding: "8px 10px 8px 6px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              width: 16,
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <span style={{
                position: "absolute",
                left: 0,
                top: -4,
                width: 16,
                height: 24,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 700,
                fontSize: 11,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "18px",
                color: "rgba(0,0,0,0.25)",
              }}>􀆈</span>
            </div>
            <div style={{
              position: "relative",
              width: 22,
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <span style={{
                position: "absolute",
                left: -2,
                top: 0,
                width: 23,
                height: 16,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 510,
                fontSize: 13,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "16px",
                color: "rgb(0,122,255)",
              }}>􀈕</span>
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 13,
              whiteSpace: "nowrap",
              lineHeight: "16px",
              color: "rgba(0,0,0,0.85)",
              flexGrow: 1,
              alignSelf: "stretch",
            }}>Label</span>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 13,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "16px",
              color: "var(--mac-labels-vibrant-use-plus-lighter-darker-tertiary)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>Detail</span>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 320,
          top: 20,
          width: 270,
          borderRadius: 5,
          display: "flex",
          flexDirection: "row",
          padding: "0px 10px 0px 10px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <div style={{
            position: "relative",
            borderRadius: 8,
            display: "flex",
            flexDirection: "row",
            gap: 4,
            padding: "8px 10px 8px 6px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              width: 16,
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <span style={{
                position: "absolute",
                left: 0,
                top: -4,
                width: 16,
                height: 24,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 700,
                fontSize: 11,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "18px",
                color: "rgba(0,0,0,0.25)",
              }}>􀆈</span>
            </div>
            <div style={{
              position: "relative",
              width: 22,
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <span style={{
                position: "absolute",
                left: -2,
                top: 0,
                width: 23,
                height: 16,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 510,
                fontSize: 13,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "16px",
                color: "rgba(0,0,0,0.85)",
              }}>􀈕</span>
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 13,
              whiteSpace: "nowrap",
              lineHeight: "16px",
              color: "rgba(0,0,0,0.85)",
              flexGrow: 1,
              alignSelf: "stretch",
            }}>Label</span>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 13,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "16px",
              color: "var(--mac-labels-vibrant-use-plus-lighter-darker-tertiary)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>Detail</span>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 20,
          top: 1560,
          width: 270,
          borderRadius: 5,
          display: "flex",
          flexDirection: "row",
          padding: "0px 10px 0px 10px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <div style={{
            position: "relative",
            opacity: 0.5,
            borderRadius: 8,
            display: "flex",
            flexDirection: "row",
            gap: 3,
            padding: "4px 10px 4px 62px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              width: 16,
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <span style={{
                position: "absolute",
                left: 0,
                top: -4,
                width: 16,
                height: 24,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 700,
                fontSize: 11,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "18px",
                color: "rgba(0,0,0,0.25)",
              }}>􀆈</span>
            </div>
            <div style={{
              position: "relative",
              width: 14,
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "nowrap",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <svg width={12} height={12} viewBox="0 0 12 12" fill="none" style={{
                position: "relative",
                width: 12,
                height: 12,
                borderRadius: 3,
                flexShrink: 0,
              }}>
                <path d={"M 0 4.8 C 0 3.12 0 2.28 0.327 1.638 C 0.615 1.074 1.074 0.615 1.638 0.327 C 2.28 0 3.12 0 4.8 0 L 7.2 0 C 8.88 0 9.72 0 10.362 0.327 C 10.926 0.615 11.385 1.074 11.673 1.638 C 12 2.28 12 3.12 12 4.8 L 12 7.2 C 12 8.88 12 9.72 11.673 10.362 C 11.385 10.926 10.926 11.385 10.362 11.673 C 9.72 12 8.88 12 7.2 12 L 4.8 12 C 3.12 12 2.28 12 1.638 11.673 C 1.074 11.385 0.615 10.926 0.327 10.362 C 0 9.72 0 8.88 0 7.2 L 0 4.8 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 11,
              whiteSpace: "nowrap",
              lineHeight: "16px",
              color: "var(--mac-labels-vibrant-use-plus-lighter-darker-primary)",
              flexGrow: 1,
              alignSelf: "stretch",
            }}>Label</span>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 11,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "14px",
              color: "var(--mac-labels-vibrant-use-plus-lighter-darker-tertiary)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>Detail</span>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 20,
          top: 1510,
          width: 270,
          borderRadius: 5,
          display: "flex",
          flexDirection: "row",
          padding: "0px 10px 0px 10px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <div style={{
            position: "relative",
            borderRadius: 8,
            backgroundColor: "rgba(0,0,0,0.11)",
            display: "flex",
            flexDirection: "row",
            gap: 3,
            padding: "4px 10px 4px 62px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              width: 16,
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <span style={{
                position: "absolute",
                left: 0,
                top: -4,
                width: 16,
                height: 24,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 700,
                fontSize: 11,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "18px",
                color: "rgba(0,0,0,0.25)",
              }}>􀆈</span>
            </div>
            <div style={{
              position: "relative",
              width: 14,
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "nowrap",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <svg width={12} height={12} viewBox="0 0 12 12" fill="none" style={{
                position: "relative",
                width: 12,
                height: 12,
                borderRadius: 3,
                flexShrink: 0,
              }}>
                <path d={"M 0 4.8 C 0 3.12 0 2.28 0.327 1.638 C 0.615 1.074 1.074 0.615 1.638 0.327 C 2.28 0 3.12 0 4.8 0 L 7.2 0 C 8.88 0 9.72 0 10.362 0.327 C 10.926 0.615 11.385 1.074 11.673 1.638 C 12 2.28 12 3.12 12 4.8 L 12 7.2 C 12 8.88 12 9.72 11.673 10.362 C 11.385 10.926 10.926 11.385 10.362 11.673 C 9.72 12 8.88 12 7.2 12 L 4.8 12 C 3.12 12 2.28 12 1.638 11.673 C 1.074 11.385 0.615 10.926 0.327 10.362 C 0 9.72 0 8.88 0 7.2 L 0 4.8 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 11,
              whiteSpace: "nowrap",
              lineHeight: "16px",
              color: "rgba(0,0,0,0.85)",
              flexGrow: 1,
              alignSelf: "stretch",
            }}>Label</span>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 11,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "14px",
              color: "var(--mac-labels-vibrant-use-plus-lighter-darker-tertiary)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>Detail</span>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 20,
          top: 1460,
          width: 270,
          borderRadius: 5,
          display: "flex",
          flexDirection: "row",
          padding: "0px 10px 0px 10px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <div style={{
            position: "relative",
            borderRadius: 8,
            display: "flex",
            flexDirection: "row",
            gap: 3,
            padding: "4px 10px 4px 62px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              width: 16,
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <span style={{
                position: "absolute",
                left: 0,
                top: -4,
                width: 16,
                height: 24,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 700,
                fontSize: 11,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "18px",
                color: "rgba(0,0,0,0.25)",
              }}>􀆈</span>
            </div>
            <div style={{
              position: "relative",
              width: 14,
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "nowrap",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <svg width={12} height={12} viewBox="0 0 12 12" fill="none" style={{
                position: "relative",
                width: 12,
                height: 12,
                borderRadius: 3,
                flexShrink: 0,
              }}>
                <path d={"M 0 4.8 C 0 3.12 0 2.28 0.327 1.638 C 0.615 1.074 1.074 0.615 1.638 0.327 C 2.28 0 3.12 0 4.8 0 L 7.2 0 C 8.88 0 9.72 0 10.362 0.327 C 10.926 0.615 11.385 1.074 11.673 1.638 C 12 2.28 12 3.12 12 4.8 L 12 7.2 C 12 8.88 12 9.72 11.673 10.362 C 11.385 10.926 10.926 11.385 10.362 11.673 C 9.72 12 8.88 12 7.2 12 L 4.8 12 C 3.12 12 2.28 12 1.638 11.673 C 1.074 11.385 0.615 10.926 0.327 10.362 C 0 9.72 0 8.88 0 7.2 L 0 4.8 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 11,
              whiteSpace: "nowrap",
              lineHeight: "16px",
              color: "rgba(0,0,0,0.85)",
              flexGrow: 1,
              alignSelf: "stretch",
            }}>Label</span>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 11,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "14px",
              color: "var(--mac-labels-vibrant-use-plus-lighter-darker-tertiary)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>Detail</span>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 20,
          top: 1400,
          width: 270,
          borderRadius: 5,
          display: "flex",
          flexDirection: "row",
          padding: "0px 10px 0px 10px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <div style={{
            position: "relative",
            opacity: 0.5,
            borderRadius: 8,
            display: "flex",
            flexDirection: "row",
            gap: 3,
            padding: "4px 10px 4px 50px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              width: 16,
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <span style={{
                position: "absolute",
                left: 0,
                top: -4,
                width: 16,
                height: 24,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 700,
                fontSize: 11,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "18px",
                color: "rgba(0,0,0,0.25)",
              }}>􀆈</span>
            </div>
            <div style={{
              position: "relative",
              width: 14,
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "nowrap",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <svg width={12} height={12} viewBox="0 0 12 12" fill="none" style={{
                position: "relative",
                width: 12,
                height: 12,
                borderRadius: 3,
                flexShrink: 0,
              }}>
                <path d={"M 0 4.8 C 0 3.12 0 2.28 0.327 1.638 C 0.615 1.074 1.074 0.615 1.638 0.327 C 2.28 0 3.12 0 4.8 0 L 7.2 0 C 8.88 0 9.72 0 10.362 0.327 C 10.926 0.615 11.385 1.074 11.673 1.638 C 12 2.28 12 3.12 12 4.8 L 12 7.2 C 12 8.88 12 9.72 11.673 10.362 C 11.385 10.926 10.926 11.385 10.362 11.673 C 9.72 12 8.88 12 7.2 12 L 4.8 12 C 3.12 12 2.28 12 1.638 11.673 C 1.074 11.385 0.615 10.926 0.327 10.362 C 0 9.72 0 8.88 0 7.2 L 0 4.8 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 11,
              whiteSpace: "nowrap",
              lineHeight: "16px",
              color: "var(--mac-labels-vibrant-use-plus-lighter-darker-primary)",
              flexGrow: 1,
              alignSelf: "stretch",
            }}>Label</span>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 11,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "14px",
              color: "var(--mac-labels-vibrant-use-plus-lighter-darker-tertiary)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>Detail</span>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 20,
          top: 1350,
          width: 270,
          borderRadius: 5,
          display: "flex",
          flexDirection: "row",
          padding: "0px 10px 0px 10px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <div style={{
            position: "relative",
            borderRadius: 8,
            backgroundColor: "rgba(0,0,0,0.11)",
            display: "flex",
            flexDirection: "row",
            gap: 3,
            padding: "4px 10px 4px 50px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              width: 16,
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <span style={{
                position: "absolute",
                left: 0,
                top: -4,
                width: 16,
                height: 24,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 700,
                fontSize: 11,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "18px",
                color: "rgba(0,0,0,0.25)",
              }}>􀆈</span>
            </div>
            <div style={{
              position: "relative",
              width: 14,
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "nowrap",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <svg width={12} height={12} viewBox="0 0 12 12" fill="none" style={{
                position: "relative",
                width: 12,
                height: 12,
                borderRadius: 3,
                flexShrink: 0,
              }}>
                <path d={"M 0 4.8 C 0 3.12 0 2.28 0.327 1.638 C 0.615 1.074 1.074 0.615 1.638 0.327 C 2.28 0 3.12 0 4.8 0 L 7.2 0 C 8.88 0 9.72 0 10.362 0.327 C 10.926 0.615 11.385 1.074 11.673 1.638 C 12 2.28 12 3.12 12 4.8 L 12 7.2 C 12 8.88 12 9.72 11.673 10.362 C 11.385 10.926 10.926 11.385 10.362 11.673 C 9.72 12 8.88 12 7.2 12 L 4.8 12 C 3.12 12 2.28 12 1.638 11.673 C 1.074 11.385 0.615 10.926 0.327 10.362 C 0 9.72 0 8.88 0 7.2 L 0 4.8 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 11,
              whiteSpace: "nowrap",
              lineHeight: "16px",
              color: "rgba(0,0,0,0.85)",
              flexGrow: 1,
              alignSelf: "stretch",
            }}>Label</span>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 11,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "14px",
              color: "var(--mac-labels-vibrant-use-plus-lighter-darker-tertiary)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>Detail</span>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 20,
          top: 1300,
          width: 270,
          borderRadius: 5,
          display: "flex",
          flexDirection: "row",
          padding: "0px 10px 0px 10px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <div style={{
            position: "relative",
            borderRadius: 8,
            display: "flex",
            flexDirection: "row",
            gap: 3,
            padding: "4px 10px 4px 50px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              width: 16,
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <span style={{
                position: "absolute",
                left: 0,
                top: -4,
                width: 16,
                height: 24,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 700,
                fontSize: 11,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "18px",
                color: "rgba(0,0,0,0.25)",
              }}>􀆈</span>
            </div>
            <div style={{
              position: "relative",
              width: 14,
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "nowrap",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <svg width={12} height={12} viewBox="0 0 12 12" fill="none" style={{
                position: "relative",
                width: 12,
                height: 12,
                borderRadius: 3,
                flexShrink: 0,
              }}>
                <path d={"M 0 4.8 C 0 3.12 0 2.28 0.327 1.638 C 0.615 1.074 1.074 0.615 1.638 0.327 C 2.28 0 3.12 0 4.8 0 L 7.2 0 C 8.88 0 9.72 0 10.362 0.327 C 10.926 0.615 11.385 1.074 11.673 1.638 C 12 2.28 12 3.12 12 4.8 L 12 7.2 C 12 8.88 12 9.72 11.673 10.362 C 11.385 10.926 10.926 11.385 10.362 11.673 C 9.72 12 8.88 12 7.2 12 L 4.8 12 C 3.12 12 2.28 12 1.638 11.673 C 1.074 11.385 0.615 10.926 0.327 10.362 C 0 9.72 0 8.88 0 7.2 L 0 4.8 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 11,
              whiteSpace: "nowrap",
              lineHeight: "16px",
              color: "rgba(0,0,0,0.85)",
              flexGrow: 1,
              alignSelf: "stretch",
            }}>Label</span>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 11,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "14px",
              color: "var(--mac-labels-vibrant-use-plus-lighter-darker-tertiary)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>Detail</span>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 20,
          top: 1240,
          width: 270,
          borderRadius: 5,
          display: "flex",
          flexDirection: "row",
          padding: "0px 10px 0px 10px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <div style={{
            position: "relative",
            opacity: 0.5,
            borderRadius: 8,
            display: "flex",
            flexDirection: "row",
            gap: 3,
            padding: "4px 10px 4px 38px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              width: 16,
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <span style={{
                position: "absolute",
                left: 0,
                top: -4,
                width: 16,
                height: 24,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 700,
                fontSize: 11,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "18px",
                color: "rgba(0,0,0,0.25)",
              }}>􀆈</span>
            </div>
            <div style={{
              position: "relative",
              width: 14,
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "nowrap",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <svg width={12} height={12} viewBox="0 0 12 12" fill="none" style={{
                position: "relative",
                width: 12,
                height: 12,
                borderRadius: 3,
                flexShrink: 0,
              }}>
                <path d={"M 0 4.8 C 0 3.12 0 2.28 0.327 1.638 C 0.615 1.074 1.074 0.615 1.638 0.327 C 2.28 0 3.12 0 4.8 0 L 7.2 0 C 8.88 0 9.72 0 10.362 0.327 C 10.926 0.615 11.385 1.074 11.673 1.638 C 12 2.28 12 3.12 12 4.8 L 12 7.2 C 12 8.88 12 9.72 11.673 10.362 C 11.385 10.926 10.926 11.385 10.362 11.673 C 9.72 12 8.88 12 7.2 12 L 4.8 12 C 3.12 12 2.28 12 1.638 11.673 C 1.074 11.385 0.615 10.926 0.327 10.362 C 0 9.72 0 8.88 0 7.2 L 0 4.8 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 11,
              whiteSpace: "nowrap",
              lineHeight: "16px",
              color: "var(--mac-labels-vibrant-use-plus-lighter-darker-primary)",
              flexGrow: 1,
              alignSelf: "stretch",
            }}>Label</span>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 11,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "14px",
              color: "var(--mac-labels-vibrant-use-plus-lighter-darker-tertiary)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>Detail</span>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 20,
          top: 1190,
          width: 270,
          borderRadius: 5,
          display: "flex",
          flexDirection: "row",
          padding: "0px 10px 0px 10px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <div style={{
            position: "relative",
            borderRadius: 8,
            backgroundColor: "rgba(0,0,0,0.11)",
            display: "flex",
            flexDirection: "row",
            gap: 3,
            padding: "4px 10px 4px 38px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              width: 16,
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <span style={{
                position: "absolute",
                left: 0,
                top: -4,
                width: 16,
                height: 24,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 700,
                fontSize: 11,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "18px",
                color: "rgba(0,0,0,0.25)",
              }}>􀆈</span>
            </div>
            <div style={{
              position: "relative",
              width: 14,
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "nowrap",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <svg width={12} height={12} viewBox="0 0 12 12" fill="none" style={{
                position: "relative",
                width: 12,
                height: 12,
                borderRadius: 3,
                flexShrink: 0,
              }}>
                <path d={"M 0 4.8 C 0 3.12 0 2.28 0.327 1.638 C 0.615 1.074 1.074 0.615 1.638 0.327 C 2.28 0 3.12 0 4.8 0 L 7.2 0 C 8.88 0 9.72 0 10.362 0.327 C 10.926 0.615 11.385 1.074 11.673 1.638 C 12 2.28 12 3.12 12 4.8 L 12 7.2 C 12 8.88 12 9.72 11.673 10.362 C 11.385 10.926 10.926 11.385 10.362 11.673 C 9.72 12 8.88 12 7.2 12 L 4.8 12 C 3.12 12 2.28 12 1.638 11.673 C 1.074 11.385 0.615 10.926 0.327 10.362 C 0 9.72 0 8.88 0 7.2 L 0 4.8 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 11,
              whiteSpace: "nowrap",
              lineHeight: "16px",
              color: "rgba(0,0,0,0.85)",
              flexGrow: 1,
              alignSelf: "stretch",
            }}>Label</span>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 11,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "14px",
              color: "var(--mac-labels-vibrant-use-plus-lighter-darker-tertiary)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>Detail</span>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 20,
          top: 1140,
          width: 270,
          borderRadius: 5,
          display: "flex",
          flexDirection: "row",
          padding: "0px 10px 0px 10px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <div style={{
            position: "relative",
            borderRadius: 8,
            display: "flex",
            flexDirection: "row",
            gap: 3,
            padding: "4px 10px 4px 38px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              width: 16,
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <span style={{
                position: "absolute",
                left: 0,
                top: -4,
                width: 16,
                height: 24,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 700,
                fontSize: 11,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "18px",
                color: "rgba(0,0,0,0.25)",
              }}>􀆈</span>
            </div>
            <div style={{
              position: "relative",
              width: 14,
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "nowrap",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <svg width={12} height={12} viewBox="0 0 12 12" fill="none" style={{
                position: "relative",
                width: 12,
                height: 12,
                borderRadius: 3,
                flexShrink: 0,
              }}>
                <path d={"M 0 4.8 C 0 3.12 0 2.28 0.327 1.638 C 0.615 1.074 1.074 0.615 1.638 0.327 C 2.28 0 3.12 0 4.8 0 L 7.2 0 C 8.88 0 9.72 0 10.362 0.327 C 10.926 0.615 11.385 1.074 11.673 1.638 C 12 2.28 12 3.12 12 4.8 L 12 7.2 C 12 8.88 12 9.72 11.673 10.362 C 11.385 10.926 10.926 11.385 10.362 11.673 C 9.72 12 8.88 12 7.2 12 L 4.8 12 C 3.12 12 2.28 12 1.638 11.673 C 1.074 11.385 0.615 10.926 0.327 10.362 C 0 9.72 0 8.88 0 7.2 L 0 4.8 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 11,
              whiteSpace: "nowrap",
              lineHeight: "16px",
              color: "rgba(0,0,0,0.85)",
              flexGrow: 1,
              alignSelf: "stretch",
            }}>Label</span>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 11,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "14px",
              color: "var(--mac-labels-vibrant-use-plus-lighter-darker-tertiary)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>Detail</span>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 20,
          top: 1080,
          width: 270,
          borderRadius: 5,
          display: "flex",
          flexDirection: "row",
          padding: "0px 10px 0px 10px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <div style={{
            position: "relative",
            opacity: 0.5,
            borderRadius: 8,
            display: "flex",
            flexDirection: "row",
            gap: 3,
            padding: "4px 10px 4px 28px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              width: 16,
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <span style={{
                position: "absolute",
                left: 0,
                top: -4,
                width: 16,
                height: 24,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 700,
                fontSize: 11,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "18px",
                color: "rgba(0,0,0,0.25)",
              }}>􀆈</span>
            </div>
            <div style={{
              position: "relative",
              width: 14,
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "nowrap",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <svg width={12} height={12} viewBox="0 0 12 12" fill="none" style={{
                position: "relative",
                width: 12,
                height: 12,
                borderRadius: 3,
                flexShrink: 0,
              }}>
                <path d={"M 0 4.8 C 0 3.12 0 2.28 0.327 1.638 C 0.615 1.074 1.074 0.615 1.638 0.327 C 2.28 0 3.12 0 4.8 0 L 7.2 0 C 8.88 0 9.72 0 10.362 0.327 C 10.926 0.615 11.385 1.074 11.673 1.638 C 12 2.28 12 3.12 12 4.8 L 12 7.2 C 12 8.88 12 9.72 11.673 10.362 C 11.385 10.926 10.926 11.385 10.362 11.673 C 9.72 12 8.88 12 7.2 12 L 4.8 12 C 3.12 12 2.28 12 1.638 11.673 C 1.074 11.385 0.615 10.926 0.327 10.362 C 0 9.72 0 8.88 0 7.2 L 0 4.8 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 11,
              whiteSpace: "nowrap",
              lineHeight: "16px",
              color: "var(--mac-labels-vibrant-use-plus-lighter-darker-primary)",
              flexGrow: 1,
              alignSelf: "stretch",
            }}>Label</span>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 11,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "14px",
              color: "var(--mac-labels-vibrant-use-plus-lighter-darker-tertiary)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>Detail</span>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 20,
          top: 1030,
          width: 270,
          borderRadius: 5,
          display: "flex",
          flexDirection: "row",
          padding: "0px 10px 0px 10px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <div style={{
            position: "relative",
            borderRadius: 8,
            backgroundColor: "rgba(0,0,0,0.11)",
            display: "flex",
            flexDirection: "row",
            gap: 3,
            padding: "4px 10px 4px 28px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              width: 16,
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <span style={{
                position: "absolute",
                left: 0,
                top: -4,
                width: 16,
                height: 24,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 700,
                fontSize: 11,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "18px",
                color: "rgba(0,0,0,0.25)",
              }}>􀆈</span>
            </div>
            <div style={{
              position: "relative",
              width: 14,
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "nowrap",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <svg width={12} height={12} viewBox="0 0 12 12" fill="none" style={{
                position: "relative",
                width: 12,
                height: 12,
                borderRadius: 3,
                flexShrink: 0,
              }}>
                <path d={"M 0 4.8 C 0 3.12 0 2.28 0.327 1.638 C 0.615 1.074 1.074 0.615 1.638 0.327 C 2.28 0 3.12 0 4.8 0 L 7.2 0 C 8.88 0 9.72 0 10.362 0.327 C 10.926 0.615 11.385 1.074 11.673 1.638 C 12 2.28 12 3.12 12 4.8 L 12 7.2 C 12 8.88 12 9.72 11.673 10.362 C 11.385 10.926 10.926 11.385 10.362 11.673 C 9.72 12 8.88 12 7.2 12 L 4.8 12 C 3.12 12 2.28 12 1.638 11.673 C 1.074 11.385 0.615 10.926 0.327 10.362 C 0 9.72 0 8.88 0 7.2 L 0 4.8 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 11,
              whiteSpace: "nowrap",
              lineHeight: "16px",
              color: "rgba(0,0,0,0.85)",
              flexGrow: 1,
              alignSelf: "stretch",
            }}>Label</span>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 11,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "14px",
              color: "var(--mac-labels-vibrant-use-plus-lighter-darker-tertiary)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>Detail</span>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 20,
          top: 980,
          width: 270,
          borderRadius: 5,
          display: "flex",
          flexDirection: "row",
          padding: "0px 10px 0px 10px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <div style={{
            position: "relative",
            borderRadius: 8,
            display: "flex",
            flexDirection: "row",
            gap: 3,
            padding: "4px 10px 4px 28px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              width: 16,
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <span style={{
                position: "absolute",
                left: 0,
                top: -4,
                width: 16,
                height: 24,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 700,
                fontSize: 11,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "18px",
                color: "rgba(0,0,0,0.25)",
              }}>􀆈</span>
            </div>
            <div style={{
              position: "relative",
              width: 14,
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "nowrap",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <svg width={12} height={12} viewBox="0 0 12 12" fill="none" style={{
                position: "relative",
                width: 12,
                height: 12,
                borderRadius: 3,
                flexShrink: 0,
              }}>
                <path d={"M 0 4.8 C 0 3.12 0 2.28 0.327 1.638 C 0.615 1.074 1.074 0.615 1.638 0.327 C 2.28 0 3.12 0 4.8 0 L 7.2 0 C 8.88 0 9.72 0 10.362 0.327 C 10.926 0.615 11.385 1.074 11.673 1.638 C 12 2.28 12 3.12 12 4.8 L 12 7.2 C 12 8.88 12 9.72 11.673 10.362 C 11.385 10.926 10.926 11.385 10.362 11.673 C 9.72 12 8.88 12 7.2 12 L 4.8 12 C 3.12 12 2.28 12 1.638 11.673 C 1.074 11.385 0.615 10.926 0.327 10.362 C 0 9.72 0 8.88 0 7.2 L 0 4.8 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 11,
              whiteSpace: "nowrap",
              lineHeight: "16px",
              color: "rgba(0,0,0,0.85)",
              flexGrow: 1,
              alignSelf: "stretch",
            }}>Label</span>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 11,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "14px",
              color: "var(--mac-labels-vibrant-use-plus-lighter-darker-tertiary)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>Detail</span>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 20,
          top: 920,
          width: 270,
          borderRadius: 5,
          display: "flex",
          flexDirection: "row",
          padding: "0px 10px 0px 10px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <div style={{
            position: "relative",
            opacity: 0.5,
            borderRadius: 8,
            display: "flex",
            flexDirection: "row",
            gap: 3,
            padding: "4px 10px 4px 6px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              width: 16,
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <span style={{
                position: "absolute",
                left: 0,
                top: -4,
                width: 16,
                height: 24,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 700,
                fontSize: 11,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "18px",
                color: "rgba(0,0,0,0.25)",
              }}>􀆈</span>
            </div>
            <div style={{
              position: "relative",
              width: 18,
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "nowrap",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <svg width={14} viewBox="0 0 14 14" fill="none" style={{
                position: "relative",
                width: 14,
                borderRadius: 3,
                flexShrink: 0,
                alignSelf: "stretch",
              }}>
                <path d={"M 0 4.8 C 0 3.12 0 2.28 0.327 1.638 C 0.615 1.074 1.074 0.615 1.638 0.327 C 2.28 0 3.12 0 4.8 0 L 9.2 0 C 10.88 0 11.72 0 12.362 0.327 C 12.926 0.615 13.385 1.074 13.673 1.638 C 14 2.28 14 3.12 14 4.8 L 14 9.2 C 14 10.88 14 11.72 13.673 12.362 C 13.385 12.926 12.926 13.385 12.362 13.673 C 11.72 14 10.88 14 9.2 14 L 4.8 14 C 3.12 14 2.28 14 1.638 13.673 C 1.074 13.385 0.615 12.926 0.327 12.362 C 0 11.72 0 10.88 0 9.2 L 0 4.8 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 11,
              whiteSpace: "nowrap",
              lineHeight: "16px",
              color: "var(--mac-labels-vibrant-use-plus-lighter-darker-primary)",
              flexGrow: 1,
              alignSelf: "stretch",
            }}>Label</span>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 11,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "14px",
              color: "var(--mac-labels-vibrant-use-plus-lighter-darker-tertiary)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>Detail</span>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 20,
          top: 870,
          width: 270,
          borderRadius: 5,
          display: "flex",
          flexDirection: "row",
          padding: "0px 10px 0px 10px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <div style={{
            position: "relative",
            borderRadius: 8,
            backgroundColor: "rgba(0,0,0,0.11)",
            display: "flex",
            flexDirection: "row",
            gap: 3,
            padding: "4px 10px 4px 6px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              width: 16,
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <span style={{
                position: "absolute",
                left: 0,
                top: -4,
                width: 16,
                height: 24,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 700,
                fontSize: 11,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "18px",
                color: "rgba(0,0,0,0.25)",
              }}>􀆈</span>
            </div>
            <div style={{
              position: "relative",
              width: 18,
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "nowrap",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <svg width={14} viewBox="0 0 14 14" fill="none" style={{
                position: "relative",
                width: 14,
                borderRadius: 3,
                flexShrink: 0,
                alignSelf: "stretch",
              }}>
                <path d={"M 0 4.8 C 0 3.12 0 2.28 0.327 1.638 C 0.615 1.074 1.074 0.615 1.638 0.327 C 2.28 0 3.12 0 4.8 0 L 9.2 0 C 10.88 0 11.72 0 12.362 0.327 C 12.926 0.615 13.385 1.074 13.673 1.638 C 14 2.28 14 3.12 14 4.8 L 14 9.2 C 14 10.88 14 11.72 13.673 12.362 C 13.385 12.926 12.926 13.385 12.362 13.673 C 11.72 14 10.88 14 9.2 14 L 4.8 14 C 3.12 14 2.28 14 1.638 13.673 C 1.074 13.385 0.615 12.926 0.327 12.362 C 0 11.72 0 10.88 0 9.2 L 0 4.8 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 11,
              whiteSpace: "nowrap",
              lineHeight: "16px",
              color: "rgba(0,0,0,0.85)",
              flexGrow: 1,
              alignSelf: "stretch",
            }}>Label</span>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 11,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "14px",
              color: "var(--mac-labels-vibrant-use-plus-lighter-darker-tertiary)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>Detail</span>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 20,
          top: 820,
          width: 270,
          borderRadius: 5,
          display: "flex",
          flexDirection: "row",
          padding: "0px 10px 0px 10px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <div style={{
            position: "relative",
            borderRadius: 8,
            display: "flex",
            flexDirection: "row",
            gap: 3,
            padding: "4px 10px 4px 6px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              width: 16,
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <span style={{
                position: "absolute",
                left: 0,
                top: -4,
                width: 16,
                height: 24,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 700,
                fontSize: 11,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "18px",
                color: "rgba(0,0,0,0.25)",
              }}>􀆈</span>
            </div>
            <div style={{
              position: "relative",
              width: 18,
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "nowrap",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <svg width={14} viewBox="0 0 14 14" fill="none" style={{
                position: "relative",
                width: 14,
                borderRadius: 3,
                flexShrink: 0,
                alignSelf: "stretch",
              }}>
                <path d={"M 0 4.8 C 0 3.12 0 2.28 0.327 1.638 C 0.615 1.074 1.074 0.615 1.638 0.327 C 2.28 0 3.12 0 4.8 0 L 9.2 0 C 10.88 0 11.72 0 12.362 0.327 C 12.926 0.615 13.385 1.074 13.673 1.638 C 14 2.28 14 3.12 14 4.8 L 14 9.2 C 14 10.88 14 11.72 13.673 12.362 C 13.385 12.926 12.926 13.385 12.362 13.673 C 11.72 14 10.88 14 9.2 14 L 4.8 14 C 3.12 14 2.28 14 1.638 13.673 C 1.074 13.385 0.615 12.926 0.327 12.362 C 0 11.72 0 10.88 0 9.2 L 0 4.8 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 11,
              whiteSpace: "nowrap",
              lineHeight: "16px",
              color: "rgba(0,0,0,0.85)",
              flexGrow: 1,
              alignSelf: "stretch",
            }}>Label</span>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 11,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "14px",
              color: "var(--mac-labels-vibrant-use-plus-lighter-darker-tertiary)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>Detail</span>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 20,
          top: 760,
          width: 270,
          borderRadius: 5,
          display: "flex",
          flexDirection: "row",
          padding: "0px 10px 0px 10px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <div style={{
            position: "relative",
            opacity: 0.5,
            borderRadius: 8,
            display: "flex",
            flexDirection: "row",
            gap: 3,
            padding: "4px 10px 4px 62px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              width: 16,
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <span style={{
                position: "absolute",
                left: 0,
                top: -4,
                width: 16,
                height: 24,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 700,
                fontSize: 11,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "18px",
                color: "rgba(0,0,0,0.25)",
              }}>􀆈</span>
            </div>
            <div style={{
              position: "relative",
              width: 14,
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <span style={{
                position: "absolute",
                left: -2,
                top: 0,
                width: 16,
                height: 16,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 510,
                fontSize: 11,
                textAlign: "right",
                whiteSpace: "nowrap",
                lineHeight: "16px",
                color: "var(--mac-labels-vibrant-use-plus-lighter-darker-primary)",
              }}>􀈕</span>
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 11,
              whiteSpace: "nowrap",
              lineHeight: "16px",
              color: "var(--mac-labels-vibrant-use-plus-lighter-darker-primary)",
              flexGrow: 1,
              alignSelf: "stretch",
            }}>Label</span>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 11,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "14px",
              color: "var(--mac-labels-vibrant-use-plus-lighter-darker-tertiary)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>Detail</span>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 20,
          top: 710,
          width: 270,
          borderRadius: 5,
          display: "flex",
          flexDirection: "row",
          padding: "0px 10px 0px 10px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <div style={{
            position: "relative",
            borderRadius: 8,
            backgroundColor: "rgba(0,0,0,0.11)",
            display: "flex",
            flexDirection: "row",
            gap: 3,
            padding: "4px 10px 4px 62px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              width: 16,
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <span style={{
                position: "absolute",
                left: 0,
                top: -4,
                width: 16,
                height: 24,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 700,
                fontSize: 11,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "18px",
                color: "rgba(0,0,0,0.25)",
              }}>􀆈</span>
            </div>
            <div style={{
              position: "relative",
              width: 14,
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <span style={{
                position: "absolute",
                left: -2,
                top: 0,
                width: 16,
                height: 16,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 510,
                fontSize: 11,
                textAlign: "right",
                whiteSpace: "nowrap",
                lineHeight: "16px",
                color: "rgb(0,122,255)",
              }}>􀈕</span>
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 11,
              whiteSpace: "nowrap",
              lineHeight: "16px",
              color: "rgba(0,0,0,0.85)",
              flexGrow: 1,
              alignSelf: "stretch",
            }}>Label</span>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 11,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "14px",
              color: "var(--mac-labels-vibrant-use-plus-lighter-darker-tertiary)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>Detail</span>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 20,
          top: 660,
          width: 270,
          borderRadius: 5,
          display: "flex",
          flexDirection: "row",
          padding: "0px 10px 0px 10px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <div style={{
            position: "relative",
            borderRadius: 8,
            display: "flex",
            flexDirection: "row",
            gap: 3,
            padding: "4px 10px 4px 62px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              width: 16,
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <span style={{
                position: "absolute",
                left: 0,
                top: -4,
                width: 16,
                height: 24,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 700,
                fontSize: 11,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "18px",
                color: "rgba(0,0,0,0.25)",
              }}>􀆈</span>
            </div>
            <div style={{
              position: "relative",
              width: 14,
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <span style={{
                position: "absolute",
                left: -2,
                top: 0,
                width: 16,
                height: 16,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 510,
                fontSize: 11,
                textAlign: "right",
                whiteSpace: "nowrap",
                lineHeight: "16px",
                color: "rgba(0,0,0,0.85)",
              }}>􀈕</span>
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 11,
              whiteSpace: "nowrap",
              lineHeight: "16px",
              color: "rgba(0,0,0,0.85)",
              flexGrow: 1,
              alignSelf: "stretch",
            }}>Label</span>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 11,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "14px",
              color: "var(--mac-labels-vibrant-use-plus-lighter-darker-tertiary)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>Detail</span>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 20,
          top: 600,
          width: 270,
          borderRadius: 5,
          display: "flex",
          flexDirection: "row",
          padding: "0px 10px 0px 10px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <div style={{
            position: "relative",
            opacity: 0.5,
            borderRadius: 8,
            display: "flex",
            flexDirection: "row",
            gap: 3,
            padding: "4px 10px 4px 50px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              width: 16,
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <span style={{
                position: "absolute",
                left: 0,
                top: -4,
                width: 16,
                height: 24,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 700,
                fontSize: 11,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "18px",
                color: "rgba(0,0,0,0.25)",
              }}>􀆈</span>
            </div>
            <div style={{
              position: "relative",
              width: 14,
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <span style={{
                position: "absolute",
                left: -2,
                top: 0,
                width: 16,
                height: 16,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 510,
                fontSize: 11,
                textAlign: "right",
                whiteSpace: "nowrap",
                lineHeight: "16px",
                color: "var(--mac-labels-vibrant-use-plus-lighter-darker-primary)",
              }}>􀈕</span>
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 11,
              whiteSpace: "nowrap",
              lineHeight: "16px",
              color: "var(--mac-labels-vibrant-use-plus-lighter-darker-primary)",
              flexGrow: 1,
              alignSelf: "stretch",
            }}>Label</span>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 11,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "14px",
              color: "var(--mac-labels-vibrant-use-plus-lighter-darker-tertiary)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>Detail</span>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 20,
          top: 550,
          width: 270,
          borderRadius: 5,
          display: "flex",
          flexDirection: "row",
          padding: "0px 10px 0px 10px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <div style={{
            position: "relative",
            borderRadius: 8,
            backgroundColor: "rgba(0,0,0,0.11)",
            display: "flex",
            flexDirection: "row",
            gap: 3,
            padding: "4px 10px 4px 50px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              width: 16,
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <span style={{
                position: "absolute",
                left: 0,
                top: -4,
                width: 16,
                height: 24,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 700,
                fontSize: 11,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "18px",
                color: "rgba(0,0,0,0.25)",
              }}>􀆈</span>
            </div>
            <div style={{
              position: "relative",
              width: 14,
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <span style={{
                position: "absolute",
                left: -2,
                top: 0,
                width: 16,
                height: 16,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 510,
                fontSize: 11,
                textAlign: "right",
                whiteSpace: "nowrap",
                lineHeight: "16px",
                color: "rgb(0,122,255)",
              }}>􀈕</span>
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 11,
              whiteSpace: "nowrap",
              lineHeight: "16px",
              color: "rgba(0,0,0,0.85)",
              flexGrow: 1,
              alignSelf: "stretch",
            }}>Label</span>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 11,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "14px",
              color: "var(--mac-labels-vibrant-use-plus-lighter-darker-tertiary)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>Detail</span>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 20,
          top: 500,
          width: 270,
          borderRadius: 5,
          display: "flex",
          flexDirection: "row",
          padding: "0px 10px 0px 10px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <div style={{
            position: "relative",
            borderRadius: 8,
            display: "flex",
            flexDirection: "row",
            gap: 3,
            padding: "4px 10px 4px 50px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              width: 16,
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <span style={{
                position: "absolute",
                left: 0,
                top: -4,
                width: 16,
                height: 24,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 700,
                fontSize: 11,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "18px",
                color: "rgba(0,0,0,0.25)",
              }}>􀆈</span>
            </div>
            <div style={{
              position: "relative",
              width: 14,
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <span style={{
                position: "absolute",
                left: -2,
                top: 0,
                width: 16,
                height: 16,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 510,
                fontSize: 11,
                textAlign: "right",
                whiteSpace: "nowrap",
                lineHeight: "16px",
                color: "rgba(0,0,0,0.85)",
              }}>􀈕</span>
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 11,
              whiteSpace: "nowrap",
              lineHeight: "16px",
              color: "rgba(0,0,0,0.85)",
              flexGrow: 1,
              alignSelf: "stretch",
            }}>Label</span>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 11,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "14px",
              color: "var(--mac-labels-vibrant-use-plus-lighter-darker-tertiary)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>Detail</span>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 20,
          top: 440,
          width: 270,
          borderRadius: 5,
          display: "flex",
          flexDirection: "row",
          padding: "0px 10px 0px 10px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <div style={{
            position: "relative",
            opacity: 0.5,
            borderRadius: 8,
            display: "flex",
            flexDirection: "row",
            gap: 3,
            padding: "4px 10px 4px 38px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              width: 16,
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <span style={{
                position: "absolute",
                left: 0,
                top: -4,
                width: 16,
                height: 24,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 700,
                fontSize: 11,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "18px",
                color: "rgba(0,0,0,0.25)",
              }}>􀆈</span>
            </div>
            <div style={{
              position: "relative",
              width: 14,
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <span style={{
                position: "absolute",
                left: -2,
                top: 0,
                width: 16,
                height: 16,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 510,
                fontSize: 11,
                textAlign: "right",
                whiteSpace: "nowrap",
                lineHeight: "16px",
                color: "var(--mac-labels-vibrant-use-plus-lighter-darker-primary)",
              }}>􀈕</span>
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 11,
              whiteSpace: "nowrap",
              lineHeight: "16px",
              color: "var(--mac-labels-vibrant-use-plus-lighter-darker-primary)",
              flexGrow: 1,
              alignSelf: "stretch",
            }}>Label</span>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 11,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "14px",
              color: "var(--mac-labels-vibrant-use-plus-lighter-darker-tertiary)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>Detail</span>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 20,
          top: 390,
          width: 270,
          borderRadius: 5,
          display: "flex",
          flexDirection: "row",
          padding: "0px 10px 0px 10px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <div style={{
            position: "relative",
            borderRadius: 8,
            backgroundColor: "rgba(0,0,0,0.11)",
            display: "flex",
            flexDirection: "row",
            gap: 3,
            padding: "4px 10px 4px 38px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              width: 16,
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <span style={{
                position: "absolute",
                left: 0,
                top: -4,
                width: 16,
                height: 24,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 700,
                fontSize: 11,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "18px",
                color: "rgba(0,0,0,0.25)",
              }}>􀆈</span>
            </div>
            <div style={{
              position: "relative",
              width: 14,
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <span style={{
                position: "absolute",
                left: -2,
                top: 0,
                width: 16,
                height: 16,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 510,
                fontSize: 11,
                textAlign: "right",
                whiteSpace: "nowrap",
                lineHeight: "16px",
                color: "rgb(0,122,255)",
              }}>􀈕</span>
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 11,
              whiteSpace: "nowrap",
              lineHeight: "16px",
              color: "rgba(0,0,0,0.85)",
              flexGrow: 1,
              alignSelf: "stretch",
            }}>Label</span>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 11,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "14px",
              color: "var(--mac-labels-vibrant-use-plus-lighter-darker-tertiary)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>Detail</span>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 20,
          top: 340,
          width: 270,
          borderRadius: 5,
          display: "flex",
          flexDirection: "row",
          padding: "0px 10px 0px 10px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <div style={{
            position: "relative",
            borderRadius: 8,
            display: "flex",
            flexDirection: "row",
            gap: 3,
            padding: "4px 10px 4px 38px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              width: 16,
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <span style={{
                position: "absolute",
                left: 0,
                top: -4,
                width: 16,
                height: 24,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 700,
                fontSize: 11,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "18px",
                color: "rgba(0,0,0,0.25)",
              }}>􀆈</span>
            </div>
            <div style={{
              position: "relative",
              width: 14,
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <span style={{
                position: "absolute",
                left: -2,
                top: 0,
                width: 16,
                height: 16,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 510,
                fontSize: 11,
                textAlign: "right",
                whiteSpace: "nowrap",
                lineHeight: "16px",
                color: "rgba(0,0,0,0.85)",
              }}>􀈕</span>
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 11,
              whiteSpace: "nowrap",
              lineHeight: "16px",
              color: "rgba(0,0,0,0.85)",
              flexGrow: 1,
              alignSelf: "stretch",
            }}>Label</span>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 11,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "14px",
              color: "var(--mac-labels-vibrant-use-plus-lighter-darker-tertiary)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>Detail</span>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 20,
          top: 280,
          width: 270,
          borderRadius: 5,
          display: "flex",
          flexDirection: "row",
          padding: "0px 10px 0px 10px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <div style={{
            position: "relative",
            opacity: 0.5,
            borderRadius: 8,
            display: "flex",
            flexDirection: "row",
            gap: 3,
            padding: "4px 10px 4px 28px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              width: 16,
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <span style={{
                position: "absolute",
                left: 0,
                top: -4,
                width: 16,
                height: 24,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 700,
                fontSize: 11,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "18px",
                color: "rgba(0,0,0,0.25)",
              }}>􀆈</span>
            </div>
            <div style={{
              position: "relative",
              width: 14,
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <span style={{
                position: "absolute",
                left: -2,
                top: 0,
                width: 16,
                height: 16,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 510,
                fontSize: 11,
                textAlign: "right",
                whiteSpace: "nowrap",
                lineHeight: "16px",
                color: "var(--mac-labels-vibrant-use-plus-lighter-darker-primary)",
              }}>􀈕</span>
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 11,
              whiteSpace: "nowrap",
              lineHeight: "16px",
              color: "var(--mac-labels-vibrant-use-plus-lighter-darker-primary)",
              flexGrow: 1,
              alignSelf: "stretch",
            }}>Label</span>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 11,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "14px",
              color: "var(--mac-labels-vibrant-use-plus-lighter-darker-tertiary)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>Detail</span>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 20,
          top: 230,
          width: 270,
          borderRadius: 5,
          display: "flex",
          flexDirection: "row",
          padding: "0px 10px 0px 10px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <div style={{
            position: "relative",
            borderRadius: 8,
            backgroundColor: "rgba(0,0,0,0.11)",
            display: "flex",
            flexDirection: "row",
            gap: 3,
            padding: "4px 10px 4px 28px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              width: 16,
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <span style={{
                position: "absolute",
                left: 0,
                top: -4,
                width: 16,
                height: 24,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 700,
                fontSize: 11,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "18px",
                color: "rgba(0,0,0,0.25)",
              }}>􀆈</span>
            </div>
            <div style={{
              position: "relative",
              width: 14,
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <span style={{
                position: "absolute",
                left: -2,
                top: 0,
                width: 16,
                height: 16,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 510,
                fontSize: 11,
                textAlign: "right",
                whiteSpace: "nowrap",
                lineHeight: "16px",
                color: "rgb(0,122,255)",
              }}>􀈕</span>
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 11,
              whiteSpace: "nowrap",
              lineHeight: "16px",
              color: "rgba(0,0,0,0.85)",
              flexGrow: 1,
              alignSelf: "stretch",
            }}>Label</span>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 11,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "14px",
              color: "var(--mac-labels-vibrant-use-plus-lighter-darker-tertiary)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>Detail</span>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 20,
          top: 180,
          width: 270,
          borderRadius: 5,
          display: "flex",
          flexDirection: "row",
          padding: "0px 10px 0px 10px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <div style={{
            position: "relative",
            borderRadius: 8,
            display: "flex",
            flexDirection: "row",
            gap: 3,
            padding: "4px 10px 4px 28px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              width: 16,
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <span style={{
                position: "absolute",
                left: 0,
                top: -4,
                width: 16,
                height: 24,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 700,
                fontSize: 11,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "18px",
                color: "rgba(0,0,0,0.25)",
              }}>􀆈</span>
            </div>
            <div style={{
              position: "relative",
              width: 14,
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <span style={{
                position: "absolute",
                left: -2,
                top: 0,
                width: 16,
                height: 16,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 510,
                fontSize: 11,
                textAlign: "right",
                whiteSpace: "nowrap",
                lineHeight: "16px",
                color: "rgba(0,0,0,0.85)",
              }}>􀈕</span>
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 11,
              whiteSpace: "nowrap",
              lineHeight: "16px",
              color: "rgba(0,0,0,0.85)",
              flexGrow: 1,
              alignSelf: "stretch",
            }}>Label</span>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 11,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "14px",
              color: "var(--mac-labels-vibrant-use-plus-lighter-darker-tertiary)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>Detail</span>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 20,
          top: 120,
          width: 270,
          borderRadius: 5,
          display: "flex",
          flexDirection: "row",
          padding: "0px 10px 0px 10px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <div style={{
            position: "relative",
            opacity: 0.5,
            borderRadius: 8,
            display: "flex",
            flexDirection: "row",
            gap: 4,
            padding: "4px 10px 4px 6px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              width: 16,
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <span style={{
                position: "absolute",
                left: 0,
                top: -4,
                width: 16,
                height: 24,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 700,
                fontSize: 11,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "18px",
                color: "rgba(0,0,0,0.25)",
              }}>􀆈</span>
            </div>
            <div style={{
              position: "relative",
              width: 18,
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <span style={{
                position: "absolute",
                left: -2,
                top: 0,
                width: 20,
                height: 16,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 510,
                fontSize: 11,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "16px",
                color: "var(--mac-labels-vibrant-use-plus-lighter-darker-primary)",
              }}>􀈕</span>
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 11,
              whiteSpace: "nowrap",
              lineHeight: "16px",
              color: "var(--mac-labels-vibrant-use-plus-lighter-darker-primary)",
              flexGrow: 1,
              alignSelf: "stretch",
            }}>Label</span>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 11,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "14px",
              color: "var(--mac-labels-vibrant-use-plus-lighter-darker-tertiary)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>Detail</span>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 20,
          top: 70,
          width: 270,
          borderRadius: 5,
          display: "flex",
          flexDirection: "row",
          padding: "0px 10px 0px 10px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <div style={{
            position: "relative",
            borderRadius: 8,
            backgroundColor: "rgba(0,0,0,0.11)",
            display: "flex",
            flexDirection: "row",
            gap: 4,
            padding: "4px 10px 4px 6px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              width: 16,
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <span style={{
                position: "absolute",
                left: 0,
                top: -4,
                width: 16,
                height: 24,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 700,
                fontSize: 11,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "18px",
                color: "rgba(0,0,0,0.25)",
              }}>􀆈</span>
            </div>
            <div style={{
              position: "relative",
              width: 18,
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <span style={{
                position: "absolute",
                left: -2,
                top: 0,
                width: 20,
                height: 16,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 510,
                fontSize: 11,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "16px",
                color: "rgb(0,122,255)",
              }}>􀈕</span>
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 11,
              whiteSpace: "nowrap",
              lineHeight: "16px",
              color: "rgba(0,0,0,0.85)",
              flexGrow: 1,
              alignSelf: "stretch",
            }}>Label</span>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 11,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "14px",
              color: "var(--mac-labels-vibrant-use-plus-lighter-darker-tertiary)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>Detail</span>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 20,
          top: 20,
          width: 270,
          borderRadius: 5,
          display: "flex",
          flexDirection: "row",
          padding: "0px 10px 0px 10px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <div style={{
            position: "relative",
            borderRadius: 8,
            display: "flex",
            flexDirection: "row",
            gap: 4,
            padding: "4px 10px 4px 6px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              width: 16,
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <span style={{
                position: "absolute",
                left: 0,
                top: -4,
                width: 16,
                height: 24,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 700,
                fontSize: 11,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "18px",
                color: "rgba(0,0,0,0.25)",
              }}>􀆈</span>
            </div>
            <div style={{
              position: "relative",
              width: 18,
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <span style={{
                position: "absolute",
                left: -2,
                top: 0,
                width: 20,
                height: 16,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 510,
                fontSize: 11,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "16px",
                color: "rgba(0,0,0,0.85)",
              }}>􀈕</span>
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 11,
              whiteSpace: "nowrap",
              lineHeight: "16px",
              color: "rgba(0,0,0,0.85)",
              flexGrow: 1,
              alignSelf: "stretch",
            }}>Label</span>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 11,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "14px",
              color: "var(--mac-labels-vibrant-use-plus-lighter-darker-tertiary)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>Detail</span>
          </div>
        </div>
      </div>
      <div style={{
        position: "absolute",
        left: 50,
        top: 950,
        width: 910,
        height: 350,
        borderRadius: 5,
        backgroundColor: "var(--mac-component-fill)",
      }}>
        <div style={{
          position: "absolute",
          left: 620,
          top: 280,
          width: 270,
          borderRadius: 5,
          display: "flex",
          flexDirection: "row",
          padding: "0px 10px 0px 10px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <div style={{
            position: "relative",
            opacity: 0.5,
            borderRadius: 8,
            display: "flex",
            flexDirection: "row",
            gap: 5,
            padding: "10px 10px 10px 8px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              width: 24,
              display: "flex",
              flexDirection: "row",
              gap: 10,
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "nowrap",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <svg width={20} viewBox="0 0 20 20" fill="none" style={{
                position: "relative",
                width: 20,
                borderRadius: 3,
                flexShrink: 0,
                alignSelf: "stretch",
              }}>
                <path d={"M 0 4.8 C 0 3.12 0 2.28 0.327 1.638 C 0.615 1.074 1.074 0.615 1.638 0.327 C 2.28 0 3.12 0 4.8 0 L 15.2 0 C 16.88 0 17.72 0 18.362 0.327 C 18.926 0.615 19.385 1.074 19.673 1.638 C 20 2.28 20 3.12 20 4.8 L 20 15.2 C 20 16.88 20 17.72 19.673 18.362 C 19.385 18.926 18.926 19.385 18.362 19.673 C 17.72 20 16.88 20 15.2 20 L 4.8 20 C 3.12 20 2.28 20 1.638 19.673 C 1.074 19.385 0.615 18.926 0.327 18.362 C 0 17.72 0 16.88 0 15.2 L 0 4.8 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 15,
              whiteSpace: "nowrap",
              lineHeight: "20px",
              color: "var(--mac-labels-vibrant-use-plus-lighter-darker-primary)",
              flexGrow: 1,
            }}>Label</span>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 15,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "20px",
              color: "var(--mac-labels-vibrant-use-plus-lighter-darker-tertiary)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>Detail</span>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 620,
          top: 230,
          width: 270,
          borderRadius: 5,
          display: "flex",
          flexDirection: "row",
          padding: "0px 10px 0px 10px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <div style={{
            position: "relative",
            borderRadius: 8,
            backgroundColor: "rgba(0,0,0,0.11)",
            display: "flex",
            flexDirection: "row",
            gap: 5,
            padding: "10px 10px 10px 8px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              width: 24,
              display: "flex",
              flexDirection: "row",
              gap: 10,
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "nowrap",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <svg width={20} viewBox="0 0 20 20" fill="none" style={{
                position: "relative",
                width: 20,
                borderRadius: 3,
                flexShrink: 0,
                alignSelf: "stretch",
              }}>
                <path d={"M 0 4.8 C 0 3.12 0 2.28 0.327 1.638 C 0.615 1.074 1.074 0.615 1.638 0.327 C 2.28 0 3.12 0 4.8 0 L 15.2 0 C 16.88 0 17.72 0 18.362 0.327 C 18.926 0.615 19.385 1.074 19.673 1.638 C 20 2.28 20 3.12 20 4.8 L 20 15.2 C 20 16.88 20 17.72 19.673 18.362 C 19.385 18.926 18.926 19.385 18.362 19.673 C 17.72 20 16.88 20 15.2 20 L 4.8 20 C 3.12 20 2.28 20 1.638 19.673 C 1.074 19.385 0.615 18.926 0.327 18.362 C 0 17.72 0 16.88 0 15.2 L 0 4.8 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 15,
              whiteSpace: "nowrap",
              lineHeight: "20px",
              color: "rgba(0,0,0,0.85)",
              flexGrow: 1,
            }}>Label</span>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 15,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "20px",
              color: "var(--mac-labels-vibrant-use-plus-lighter-darker-tertiary)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>Detail</span>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 620,
          top: 180,
          width: 270,
          borderRadius: 5,
          display: "flex",
          flexDirection: "row",
          padding: "0px 10px 0px 10px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <div style={{
            position: "relative",
            borderRadius: 8,
            display: "flex",
            flexDirection: "row",
            gap: 5,
            padding: "10px 10px 10px 8px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              width: 24,
              display: "flex",
              flexDirection: "row",
              gap: 10,
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "nowrap",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <svg width={20} viewBox="0 0 20 20" fill="none" style={{
                position: "relative",
                width: 20,
                borderRadius: 3,
                flexShrink: 0,
                alignSelf: "stretch",
              }}>
                <path d={"M 0 4.8 C 0 3.12 0 2.28 0.327 1.638 C 0.615 1.074 1.074 0.615 1.638 0.327 C 2.28 0 3.12 0 4.8 0 L 15.2 0 C 16.88 0 17.72 0 18.362 0.327 C 18.926 0.615 19.385 1.074 19.673 1.638 C 20 2.28 20 3.12 20 4.8 L 20 15.2 C 20 16.88 20 17.72 19.673 18.362 C 19.385 18.926 18.926 19.385 18.362 19.673 C 17.72 20 16.88 20 15.2 20 L 4.8 20 C 3.12 20 2.28 20 1.638 19.673 C 1.074 19.385 0.615 18.926 0.327 18.362 C 0 17.72 0 16.88 0 15.2 L 0 4.8 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 15,
              whiteSpace: "nowrap",
              lineHeight: "20px",
              color: "rgba(0,0,0,0.85)",
              flexGrow: 1,
            }}>Label</span>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 15,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "20px",
              color: "var(--mac-labels-vibrant-use-plus-lighter-darker-tertiary)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>Detail</span>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 620,
          top: 120,
          width: 270,
          borderRadius: 5,
          display: "flex",
          flexDirection: "row",
          padding: "0px 10px 0px 10px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <div style={{
            position: "relative",
            opacity: 0.5,
            borderRadius: 8,
            display: "flex",
            flexDirection: "row",
            gap: 6,
            padding: "10px 10px 10px 8px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              width: 24,
              height: 16,
              flexShrink: 0,
            }}>
              <span style={{
                position: "absolute",
                left: 2,
                top: 0,
                width: 20,
                height: 16,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 510,
                fontSize: 15,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "20px",
                color: "var(--mac-labels-vibrant-use-plus-lighter-darker-primary)",
              }}>􀓔</span>
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 15,
              whiteSpace: "nowrap",
              lineHeight: "20px",
              color: "var(--mac-labels-vibrant-use-plus-lighter-darker-primary)",
              flexGrow: 1,
            }}>Label</span>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 15,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "20px",
              color: "var(--mac-labels-vibrant-use-plus-lighter-darker-tertiary)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>Detail</span>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 620,
          top: 70,
          width: 270,
          borderRadius: 5,
          display: "flex",
          flexDirection: "row",
          padding: "0px 10px 0px 10px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <div style={{
            position: "relative",
            borderRadius: 8,
            backgroundColor: "rgba(0,0,0,0.11)",
            display: "flex",
            flexDirection: "row",
            gap: 6,
            padding: "10px 10px 10px 8px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              width: 24,
              height: 16,
              flexShrink: 0,
            }}>
              <span style={{
                position: "absolute",
                left: 2,
                top: 0,
                width: 20,
                height: 16,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 510,
                fontSize: 15,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "20px",
                color: "rgb(0,122,255)",
              }}>􀓔</span>
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 15,
              whiteSpace: "nowrap",
              lineHeight: "20px",
              color: "rgba(0,0,0,0.85)",
              flexGrow: 1,
            }}>Label</span>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 15,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "20px",
              color: "var(--mac-labels-vibrant-use-plus-lighter-darker-tertiary)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>Detail</span>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 620,
          top: 20,
          width: 270,
          borderRadius: 5,
          display: "flex",
          flexDirection: "row",
          padding: "0px 10px 0px 10px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <div style={{
            position: "relative",
            borderRadius: 8,
            display: "flex",
            flexDirection: "row",
            gap: 6,
            padding: "10px 10px 10px 8px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              width: 24,
              height: 16,
              flexShrink: 0,
            }}>
              <span style={{
                position: "absolute",
                left: 2,
                top: 0,
                width: 20,
                height: 16,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 510,
                fontSize: 15,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "20px",
                color: "rgba(0,0,0,0.85)",
              }}>􀓔</span>
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 15,
              whiteSpace: "nowrap",
              lineHeight: "20px",
              color: "rgba(0,0,0,0.85)",
              flexGrow: 1,
            }}>Label</span>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 15,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "20px",
              color: "var(--mac-labels-vibrant-use-plus-lighter-darker-tertiary)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>Detail</span>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 320,
          top: 280,
          width: 270,
          borderRadius: 5,
          display: "flex",
          flexDirection: "row",
          padding: "0px 10px 0px 10px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <div style={{
            position: "relative",
            opacity: 0.5,
            borderRadius: 8,
            display: "flex",
            flexDirection: "row",
            gap: 4,
            padding: "8px 10px 8px 8px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              width: 22,
              display: "flex",
              flexDirection: "row",
              gap: 10,
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "nowrap",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <svg width={18} viewBox="0 0 18 18" fill="none" style={{
                position: "relative",
                width: 18,
                borderRadius: 3,
                flexShrink: 0,
                alignSelf: "stretch",
              }}>
                <path d={"M 0 4.8 C 0 3.12 0 2.28 0.327 1.638 C 0.615 1.074 1.074 0.615 1.638 0.327 C 2.28 0 3.12 0 4.8 0 L 13.2 0 C 14.88 0 15.72 0 16.362 0.327 C 16.926 0.615 17.385 1.074 17.673 1.638 C 18 2.28 18 3.12 18 4.8 L 18 13.2 C 18 14.88 18 15.72 17.673 16.362 C 17.385 16.926 16.926 17.385 16.362 17.673 C 15.72 18 14.88 18 13.2 18 L 4.8 18 C 3.12 18 2.28 18 1.638 17.673 C 1.074 17.385 0.615 16.926 0.327 16.362 C 0 15.72 0 14.88 0 13.2 L 0 4.8 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 13,
              whiteSpace: "nowrap",
              lineHeight: "16px",
              color: "var(--mac-labels-vibrant-use-plus-lighter-darker-primary)",
              flexGrow: 1,
              alignSelf: "stretch",
            }}>Label</span>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 13,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "16px",
              color: "var(--mac-labels-vibrant-use-plus-lighter-darker-tertiary)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>Detail</span>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 320,
          top: 230,
          width: 270,
          borderRadius: 5,
          display: "flex",
          flexDirection: "row",
          padding: "0px 10px 0px 10px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <div style={{
            position: "relative",
            borderRadius: 8,
            backgroundColor: "rgba(0,0,0,0.11)",
            display: "flex",
            flexDirection: "row",
            gap: 4,
            padding: "8px 10px 8px 8px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              width: 22,
              display: "flex",
              flexDirection: "row",
              gap: 10,
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "nowrap",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <svg width={18} viewBox="0 0 18 18" fill="none" style={{
                position: "relative",
                width: 18,
                borderRadius: 3,
                flexShrink: 0,
                alignSelf: "stretch",
              }}>
                <path d={"M 0 4.8 C 0 3.12 0 2.28 0.327 1.638 C 0.615 1.074 1.074 0.615 1.638 0.327 C 2.28 0 3.12 0 4.8 0 L 13.2 0 C 14.88 0 15.72 0 16.362 0.327 C 16.926 0.615 17.385 1.074 17.673 1.638 C 18 2.28 18 3.12 18 4.8 L 18 13.2 C 18 14.88 18 15.72 17.673 16.362 C 17.385 16.926 16.926 17.385 16.362 17.673 C 15.72 18 14.88 18 13.2 18 L 4.8 18 C 3.12 18 2.28 18 1.638 17.673 C 1.074 17.385 0.615 16.926 0.327 16.362 C 0 15.72 0 14.88 0 13.2 L 0 4.8 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 13,
              whiteSpace: "nowrap",
              lineHeight: "16px",
              color: "rgba(0,0,0,0.85)",
              flexGrow: 1,
              alignSelf: "stretch",
            }}>Label</span>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 13,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "16px",
              color: "var(--mac-labels-vibrant-use-plus-lighter-darker-tertiary)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>Detail</span>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 320,
          top: 180,
          width: 270,
          borderRadius: 5,
          display: "flex",
          flexDirection: "row",
          padding: "0px 10px 0px 10px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <div style={{
            position: "relative",
            borderRadius: 8,
            display: "flex",
            flexDirection: "row",
            gap: 4,
            padding: "8px 10px 8px 8px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              width: 22,
              display: "flex",
              flexDirection: "row",
              gap: 10,
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "nowrap",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <svg width={18} viewBox="0 0 18 18" fill="none" style={{
                position: "relative",
                width: 18,
                borderRadius: 3,
                flexShrink: 0,
                alignSelf: "stretch",
              }}>
                <path d={"M 0 4.8 C 0 3.12 0 2.28 0.327 1.638 C 0.615 1.074 1.074 0.615 1.638 0.327 C 2.28 0 3.12 0 4.8 0 L 13.2 0 C 14.88 0 15.72 0 16.362 0.327 C 16.926 0.615 17.385 1.074 17.673 1.638 C 18 2.28 18 3.12 18 4.8 L 18 13.2 C 18 14.88 18 15.72 17.673 16.362 C 17.385 16.926 16.926 17.385 16.362 17.673 C 15.72 18 14.88 18 13.2 18 L 4.8 18 C 3.12 18 2.28 18 1.638 17.673 C 1.074 17.385 0.615 16.926 0.327 16.362 C 0 15.72 0 14.88 0 13.2 L 0 4.8 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 13,
              whiteSpace: "nowrap",
              lineHeight: "16px",
              color: "rgba(0,0,0,0.85)",
              flexGrow: 1,
              alignSelf: "stretch",
            }}>Label</span>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 13,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "16px",
              color: "var(--mac-labels-vibrant-use-plus-lighter-darker-tertiary)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>Detail</span>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 320,
          top: 120,
          width: 270,
          borderRadius: 5,
          display: "flex",
          flexDirection: "row",
          padding: "0px 10px 0px 10px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <div style={{
            position: "relative",
            opacity: 0.5,
            borderRadius: 8,
            display: "flex",
            flexDirection: "row",
            gap: 6,
            padding: "8px 10px 8px 8px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              width: 22,
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <span style={{
                position: "absolute",
                left: 1,
                top: 0,
                width: 20,
                height: 16,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 510,
                fontSize: 13,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "16px",
                color: "var(--mac-labels-vibrant-use-plus-lighter-darker-primary)",
              }}>􀓔</span>
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 13,
              whiteSpace: "nowrap",
              lineHeight: "16px",
              color: "var(--mac-labels-vibrant-use-plus-lighter-darker-primary)",
              flexGrow: 1,
              alignSelf: "stretch",
            }}>Label</span>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 13,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "16px",
              color: "var(--mac-labels-vibrant-use-plus-lighter-darker-tertiary)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>Detail</span>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 320,
          top: 70,
          width: 270,
          borderRadius: 5,
          display: "flex",
          flexDirection: "row",
          padding: "0px 10px 0px 10px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <div style={{
            position: "relative",
            borderRadius: 8,
            backgroundColor: "rgba(0,0,0,0.11)",
            display: "flex",
            flexDirection: "row",
            gap: 6,
            padding: "8px 10px 8px 8px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              width: 22,
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <span style={{
                position: "absolute",
                left: 1,
                top: 0,
                width: 20,
                height: 16,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 510,
                fontSize: 13,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "16px",
                color: "rgb(0,122,255)",
              }}>􀓔</span>
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 13,
              whiteSpace: "nowrap",
              lineHeight: "16px",
              color: "rgba(0,0,0,0.85)",
              flexGrow: 1,
              alignSelf: "stretch",
            }}>Label</span>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 13,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "16px",
              color: "var(--mac-labels-vibrant-use-plus-lighter-darker-tertiary)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>Detail</span>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 320,
          top: 20,
          width: 270,
          borderRadius: 5,
          display: "flex",
          flexDirection: "row",
          padding: "0px 10px 0px 10px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <div style={{
            position: "relative",
            borderRadius: 8,
            display: "flex",
            flexDirection: "row",
            gap: 6,
            padding: "8px 10px 8px 8px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              width: 22,
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <span style={{
                position: "absolute",
                left: 1,
                top: 0,
                width: 20,
                height: 16,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 510,
                fontSize: 13,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "16px",
                color: "rgba(0,0,0,0.85)",
              }}>􀓔</span>
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 13,
              whiteSpace: "nowrap",
              lineHeight: "16px",
              color: "rgba(0,0,0,0.85)",
              flexGrow: 1,
              alignSelf: "stretch",
            }}>Label</span>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 13,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "16px",
              color: "var(--mac-labels-vibrant-use-plus-lighter-darker-tertiary)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>Detail</span>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 20,
          top: 280,
          width: 270,
          borderRadius: 5,
          display: "flex",
          flexDirection: "row",
          padding: "0px 10px 0px 10px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <div style={{
            position: "relative",
            opacity: 0.5,
            borderRadius: 8,
            display: "flex",
            flexDirection: "row",
            gap: 4,
            padding: "4px 10px 4px 8px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              gap: 10,
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "nowrap",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <svg width={14} viewBox="0 0 14 14" fill="none" style={{
                position: "relative",
                width: 14,
                borderRadius: 3,
                flexShrink: 0,
                alignSelf: "stretch",
              }}>
                <path d={"M 0 4.8 C 0 3.12 0 2.28 0.327 1.638 C 0.615 1.074 1.074 0.615 1.638 0.327 C 2.28 0 3.12 0 4.8 0 L 9.2 0 C 10.88 0 11.72 0 12.362 0.327 C 12.926 0.615 13.385 1.074 13.673 1.638 C 14 2.28 14 3.12 14 4.8 L 14 9.2 C 14 10.88 14 11.72 13.673 12.362 C 13.385 12.926 12.926 13.385 12.362 13.673 C 11.72 14 10.88 14 9.2 14 L 4.8 14 C 3.12 14 2.28 14 1.638 13.673 C 1.074 13.385 0.615 12.926 0.327 12.362 C 0 11.72 0 10.88 0 9.2 L 0 4.8 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 11,
              whiteSpace: "nowrap",
              lineHeight: "16px",
              color: "var(--mac-labels-vibrant-use-plus-lighter-darker-primary)",
              flexGrow: 1,
              alignSelf: "stretch",
            }}>Label</span>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 11,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "14px",
              color: "var(--mac-labels-vibrant-use-plus-lighter-darker-tertiary)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>Detail</span>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 20,
          top: 230,
          width: 270,
          borderRadius: 5,
          display: "flex",
          flexDirection: "row",
          padding: "0px 10px 0px 10px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <div style={{
            position: "relative",
            borderRadius: 8,
            backgroundColor: "rgba(0,0,0,0.11)",
            display: "flex",
            flexDirection: "row",
            gap: 4,
            padding: "4px 10px 4px 8px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              gap: 10,
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "nowrap",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <svg width={14} viewBox="0 0 14 14" fill="none" style={{
                position: "relative",
                width: 14,
                borderRadius: 3,
                flexShrink: 0,
                alignSelf: "stretch",
              }}>
                <path d={"M 0 4.8 C 0 3.12 0 2.28 0.327 1.638 C 0.615 1.074 1.074 0.615 1.638 0.327 C 2.28 0 3.12 0 4.8 0 L 9.2 0 C 10.88 0 11.72 0 12.362 0.327 C 12.926 0.615 13.385 1.074 13.673 1.638 C 14 2.28 14 3.12 14 4.8 L 14 9.2 C 14 10.88 14 11.72 13.673 12.362 C 13.385 12.926 12.926 13.385 12.362 13.673 C 11.72 14 10.88 14 9.2 14 L 4.8 14 C 3.12 14 2.28 14 1.638 13.673 C 1.074 13.385 0.615 12.926 0.327 12.362 C 0 11.72 0 10.88 0 9.2 L 0 4.8 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 11,
              whiteSpace: "nowrap",
              lineHeight: "16px",
              color: "rgba(0,0,0,0.85)",
              flexGrow: 1,
              alignSelf: "stretch",
            }}>Label</span>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 11,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "14px",
              color: "var(--mac-labels-vibrant-use-plus-lighter-darker-tertiary)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>Detail</span>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 20,
          top: 180,
          width: 270,
          borderRadius: 5,
          display: "flex",
          flexDirection: "row",
          padding: "0px 10px 0px 10px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <div style={{
            position: "relative",
            borderRadius: 8,
            display: "flex",
            flexDirection: "row",
            gap: 4,
            padding: "4px 10px 4px 8px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              gap: 10,
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "nowrap",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <svg width={14} viewBox="0 0 14 14" fill="none" style={{
                position: "relative",
                width: 14,
                borderRadius: 3,
                flexShrink: 0,
                alignSelf: "stretch",
              }}>
                <path d={"M 0 4.8 C 0 3.12 0 2.28 0.327 1.638 C 0.615 1.074 1.074 0.615 1.638 0.327 C 2.28 0 3.12 0 4.8 0 L 9.2 0 C 10.88 0 11.72 0 12.362 0.327 C 12.926 0.615 13.385 1.074 13.673 1.638 C 14 2.28 14 3.12 14 4.8 L 14 9.2 C 14 10.88 14 11.72 13.673 12.362 C 13.385 12.926 12.926 13.385 12.362 13.673 C 11.72 14 10.88 14 9.2 14 L 4.8 14 C 3.12 14 2.28 14 1.638 13.673 C 1.074 13.385 0.615 12.926 0.327 12.362 C 0 11.72 0 10.88 0 9.2 L 0 4.8 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 11,
              whiteSpace: "nowrap",
              lineHeight: "16px",
              color: "rgba(0,0,0,0.85)",
              flexGrow: 1,
              alignSelf: "stretch",
            }}>Label</span>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 11,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "14px",
              color: "var(--mac-labels-vibrant-use-plus-lighter-darker-tertiary)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>Detail</span>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 20,
          top: 120,
          width: 270,
          borderRadius: 5,
          display: "flex",
          flexDirection: "row",
          padding: "0px 10px 0px 10px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <div style={{
            position: "relative",
            opacity: 0.5,
            borderRadius: 8,
            display: "flex",
            flexDirection: "row",
            gap: 6,
            padding: "4px 10px 4px 8px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              width: 18,
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <span style={{
                position: "absolute",
                left: -2,
                top: 0,
                width: 20,
                height: 16,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 510,
                fontSize: 11,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "16px",
                color: "var(--mac-labels-vibrant-use-plus-lighter-darker-primary)",
              }}>􀓔</span>
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 11,
              whiteSpace: "nowrap",
              lineHeight: "16px",
              color: "var(--mac-labels-vibrant-use-plus-lighter-darker-primary)",
              flexGrow: 1,
              alignSelf: "stretch",
            }}>Label</span>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 11,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "14px",
              color: "var(--mac-labels-vibrant-use-plus-lighter-darker-tertiary)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>Detail</span>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 20,
          top: 70,
          width: 270,
          borderRadius: 5,
          display: "flex",
          flexDirection: "row",
          padding: "0px 10px 0px 10px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <div style={{
            position: "relative",
            borderRadius: 8,
            backgroundColor: "rgba(0,0,0,0.11)",
            display: "flex",
            flexDirection: "row",
            gap: 6,
            padding: "4px 10px 4px 8px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              width: 18,
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <span style={{
                position: "absolute",
                left: -2,
                top: 0,
                width: 20,
                height: 16,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 510,
                fontSize: 11,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "16px",
                color: "rgb(0,122,255)",
              }}>􀓔</span>
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 11,
              whiteSpace: "nowrap",
              lineHeight: "16px",
              color: "rgba(0,0,0,0.85)",
              flexGrow: 1,
              alignSelf: "stretch",
            }}>Label</span>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 11,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "14px",
              color: "var(--mac-labels-vibrant-use-plus-lighter-darker-tertiary)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>Detail</span>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 20,
          top: 20,
          width: 270,
          borderRadius: 5,
          display: "flex",
          flexDirection: "row",
          padding: "0px 10px 0px 10px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <div style={{
            position: "relative",
            borderRadius: 8,
            display: "flex",
            flexDirection: "row",
            gap: 6,
            padding: "4px 10px 4px 8px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              width: 18,
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <span style={{
                position: "absolute",
                left: -2,
                top: 0,
                width: 20,
                height: 16,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 510,
                fontSize: 11,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "16px",
                color: "rgba(0,0,0,0.85)",
              }}>􀓔</span>
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 11,
              whiteSpace: "nowrap",
              lineHeight: "16px",
              color: "rgba(0,0,0,0.85)",
              flexGrow: 1,
              alignSelf: "stretch",
            }}>Label</span>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 11,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "14px",
              color: "var(--mac-labels-vibrant-use-plus-lighter-darker-tertiary)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>Detail</span>
          </div>
        </div>
      </div>
      <div style={{
        position: "absolute",
        left: 50,
        top: 850,
        width: 90,
        height: 60,
        borderRadius: 5,
        backgroundColor: "var(--mac-subcomponent-fill)",
      }}>
        <div style={{
          position: "absolute",
          left: 50,
          top: 20,
          width: 24,
          height: 14,
        }}>
          <span style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 24,
            height: 14,
            fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 700,
            fontSize: 11,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "14px",
            color: "rgba(0,0,0,0.25)",
          }}>􀆊</span>
        </div>
        <div style={{
          position: "absolute",
          left: 20,
          top: 20,
          width: 24,
          height: 14,
        }}>
          <span style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 24,
            height: 14,
            fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 700,
            fontSize: 11,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "14px",
            color: "rgba(0,0,0,0.25)",
          }}>􀆈</span>
        </div>
      </div>
      <div style={{
        position: "absolute",
        left: 50,
        top: 730,
        width: 910,
        height: 90,
        overflow: "hidden",
        borderRadius: 5,
        backgroundColor: "var(--mac-component-fill)",
      }}>
        <div style={{
          position: "absolute",
          left: 20,
          top: 20,
          width: 270,
          display: "flex",
          flexDirection: "row",
          padding: "15px 12px 5px 18px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 700,
            fontSize: 11,
            whiteSpace: "nowrap",
            lineHeight: "14px",
            color: "rgba(0,0,0,0.5)",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>Section Title</span>
          <span style={{
            position: "relative",
            fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 510,
            fontSize: 11,
            whiteSpace: "nowrap",
            lineHeight: "14px",
            color: "rgba(0,0,0,0.5)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>Detail</span>
          <MacDisclosureHeader
            style={{
              position: "relative",
              width: 24,
              flexShrink: 0,
              alignSelf: "stretch",
              height: "auto",
            }}
            expanded={true}
          />
        </div>
        <div style={{
          position: "absolute",
          left: 320,
          top: 20,
          width: 270,
          display: "flex",
          flexDirection: "row",
          padding: "17px 12px 8px 18px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 700,
            fontSize: 11,
            whiteSpace: "nowrap",
            lineHeight: "14px",
            color: "rgba(0,0,0,0.5)",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>Section Title</span>
          <span style={{
            position: "relative",
            fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 510,
            fontSize: 11,
            whiteSpace: "nowrap",
            lineHeight: "14px",
            color: "rgba(0,0,0,0.5)",
            flexShrink: 0,
          }}>Detail</span>
          <MacDisclosureHeader
            style={{
              position: "relative",
              width: 24,
              flexShrink: 0,
              alignSelf: "stretch",
              height: "auto",
            }}
            expanded={true}
          />
        </div>
        <div style={{
          position: "absolute",
          left: 620,
          top: 20,
          width: 270,
          display: "flex",
          flexDirection: "row",
          padding: "18px 12px 9px 18px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 700,
            fontSize: 13,
            whiteSpace: "nowrap",
            lineHeight: "16px",
            color: "rgba(0,0,0,0.5)",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>Section Title</span>
          <span style={{
            position: "relative",
            fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 510,
            fontSize: 13,
            whiteSpace: "nowrap",
            lineHeight: "16px",
            color: "rgba(0,0,0,0.5)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>Detail</span>
          <MacDisclosureHeader
            style={{
              position: "relative",
              width: 24,
              flexShrink: 0,
              alignSelf: "stretch",
              height: "auto",
            }}
            expanded={true}
          />
        </div>
      </div>
      <div style={{
        position: "absolute",
        left: 50,
        top: 50,
        width: 910,
        height: 640,
        overflow: "hidden",
        borderRadius: 5,
        backgroundColor: "var(--mac-component-fill)",
      }}>
        <div style={{
          position: "absolute",
          left: 620,
          top: 20,
          width: 240,
          height: 600,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          flexWrap: "nowrap",
        }}>
          <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 240,
              height: 600,
            }}>
            <MacLiquidGlassMedium
              style={{ width: 240, height: 600, borderRadius: 18 }}
              mode={"light"}
            />
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            padding: "10px 0px 10px 0px",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              height: 32,
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <MacButtonsMedium
                style={{
                  position: "absolute",
                  left: 206,
                  top: -4,
                  width: 24,
                  height: 24,
                }}
                symbol={"􀏚"}
                state={"idle"}
              />
              <MacWindowControlsStandard
                style={{ position: "absolute", left: 10, top: 0 }}
                active={true}
              />
            </div>
            <MacItem
              style={{
                position: "relative",
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }}
              leadingSymbol={"􀈕"}
              label={"Text Edit"}
              size={"lg"}
              type={"symbol"}
              state={"selected"}
            />
            <MacItem
              style={{
                position: "relative",
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }}
              leadingSymbol={"􀐫"}
              label={"Recents"}
              size={"lg"}
              type={"symbol"}
              state={"default"}
            />
            <MacItem
              style={{
                position: "relative",
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }}
              leadingSymbol={"􀈝"}
              label={"Shared"}
              size={"lg"}
              type={"symbol"}
              state={"default"}
            />
            <MacSectionHeader
              style={{
                position: "relative",
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }}
              sectionTitle={"Favorites"}
              showDetail={false}
              size={"lg"}
            />
            <MacItem
              style={{
                position: "relative",
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }}
              leadingSymbol={"􀣰"}
              label={"Desktop"}
              size={"lg"}
              type={"symbol"}
              state={"default"}
            />
            <MacItem
              style={{
                position: "relative",
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }}
              leadingSymbol={"􀈷"}
              label={"Documents"}
              size={"lg"}
              type={"symbol"}
              state={"default"}
            />
            <MacItem
              style={{
                position: "relative",
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }}
              leadingSymbol={"􀁸"}
              label={"Downloads"}
              size={"lg"}
              type={"symbol"}
              state={"default"}
            />
            <MacSectionHeader
              style={{
                position: "relative",
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }}
              sectionTitle={"Locations"}
              size={"lg"}
            />
            <MacItem
              style={{
                position: "relative",
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }}
              leadingSymbol={"􀇂"}
              label={"iCloud Drive"}
              size={"lg"}
              type={"symbol"}
              state={"default"}
            />
            <MacItem
              style={{
                position: "relative",
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }}
              leadingSymbol={"􀎞"}
              label={"janeappleseed"}
              size={"lg"}
              type={"symbol"}
              state={"default"}
            />
            <MacItem
              style={{
                position: "relative",
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }}
              leadingSymbol={"􀥾"}
              label={"Macintosh HD"}
              size={"lg"}
              type={"symbol"}
              state={"default"}
            />
            <MacItem
              style={{
                position: "relative",
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }}
              leadingSymbol={"􀈑"}
              label={"Trash"}
              size={"lg"}
              type={"symbol"}
              state={"default"}
            />
            <MacSectionHeader
              style={{
                position: "relative",
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }}
              sectionTitle={"Tags"}
              icon1={<MacDisclosureHeader expanded={false} style={{ transform: "scale(1, 1.143)", transformOrigin: "0 0" }} />}
              size={"lg"}
            />
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 320,
          top: 20,
          width: 240,
          height: 600,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          flexWrap: "nowrap",
        }}>
          <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 240,
              height: 600,
            }}>
            <MacLiquidGlassMedium
              style={{ width: 240, height: 600, borderRadius: 18 }}
              mode={"light"}
            />
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            padding: "10px 0px 10px 0px",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              height: 32,
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <MacButtonsMedium
                style={{
                  position: "absolute",
                  left: 206,
                  top: -4,
                  width: 24,
                  height: 24,
                }}
                symbol={"􀏚"}
                state={"idle"}
              />
              <MacWindowControlsStandard
                style={{ position: "absolute", left: 10, top: 0 }}
                active={true}
              />
            </div>
            <MacItem
              style={{
                position: "relative",
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }}
              leadingSymbol={"􀈕"}
              label={"Text Edit"}
              size={"md"}
              type={"symbol"}
              state={"selected"}
            />
            <MacItem
              style={{
                position: "relative",
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }}
              leadingSymbol={"􀐫"}
              label={"Recents"}
              size={"md"}
              type={"symbol"}
              state={"default"}
            />
            <MacItem
              style={{
                position: "relative",
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }}
              leadingSymbol={"􀈝"}
              label={"Shared"}
              size={"md"}
              type={"symbol"}
              state={"default"}
            />
            <MacSectionHeader
              style={{
                position: "relative",
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }}
              sectionTitle={"Favorites"}
              showDetail={false}
              size={"md"}
            />
            <MacItem
              style={{
                position: "relative",
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }}
              leadingSymbol={"􀣰"}
              label={"Desktop"}
              size={"md"}
              type={"symbol"}
              state={"default"}
            />
            <MacItem
              style={{
                position: "relative",
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }}
              leadingSymbol={"􀈷"}
              label={"Documents"}
              size={"md"}
              type={"symbol"}
              state={"default"}
            />
            <MacItem
              style={{
                position: "relative",
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }}
              leadingSymbol={"􀁸"}
              label={"Downloads"}
              size={"md"}
              type={"symbol"}
              state={"default"}
            />
            <MacSectionHeader
              style={{
                position: "relative",
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }}
              sectionTitle={"Locations"}
              size={"md"}
            />
            <MacItem
              style={{
                position: "relative",
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }}
              leadingSymbol={"􀇂"}
              label={"iCloud Drive"}
              size={"md"}
              type={"symbol"}
              state={"default"}
            />
            <MacItem
              style={{
                position: "relative",
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }}
              leadingSymbol={"􀎞"}
              label={"janeappleseed"}
              size={"md"}
              type={"symbol"}
              state={"default"}
            />
            <MacItem
              style={{
                position: "relative",
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }}
              leadingSymbol={"􀥾"}
              label={"Macintosh HD"}
              size={"md"}
              type={"symbol"}
              state={"default"}
            />
            <MacItem
              style={{
                position: "relative",
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }}
              leadingSymbol={"􀈑"}
              label={"Trash"}
              size={"md"}
              type={"symbol"}
              state={"default"}
            />
            <MacSectionHeader
              style={{
                position: "relative",
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }}
              sectionTitle={"Tags"}
              icon1={<MacDisclosureHeader expanded={false} style={{ width: "100%", height: "100%" }} />}
              size={"md"}
            />
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 20,
          top: 20,
          width: 240,
          height: 600,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          flexWrap: "nowrap",
        }}>
          <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 240,
              height: 600,
            }}>
            <MacLiquidGlassMedium
              style={{ width: 240, height: 600, borderRadius: 18 }}
              mode={"light"}
            />
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            padding: "10px 0px 10px 0px",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              height: 32,
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <MacButtonsMedium
                style={{
                  position: "absolute",
                  left: 206,
                  top: -4,
                  width: 24,
                  height: 24,
                }}
                symbol={"􀏚"}
                state={"idle"}
              />
              <MacWindowControlsStandard
                style={{ position: "absolute", left: 10, top: 0 }}
                active={true}
              />
            </div>
            <MacItem
              style={{
                position: "relative",
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }}
              leadingSymbol={"􀈕"}
              label={"Text Edit"}
              size={"sm"}
              type={"symbol"}
              state={"selected"}
            />
            <MacItem
              style={{
                position: "relative",
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }}
              leadingSymbol={"􀐫"}
              label={"Recents"}
              size={"sm"}
              type={"symbol"}
              state={"default"}
            />
            <MacItem
              style={{
                position: "relative",
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }}
              leadingSymbol={"􀈝"}
              label={"Shared"}
              size={"sm"}
              type={"symbol"}
              state={"default"}
            />
            <MacSectionHeader
              style={{
                position: "relative",
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }}
              sectionTitle={"Favorites"}
              showDetail={false}
              size={"sm"}
            />
            <MacItem
              style={{
                position: "relative",
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }}
              leadingSymbol={"􀣰"}
              label={"Desktop"}
              size={"sm"}
              type={"symbol"}
              state={"default"}
            />
            <MacItem
              style={{
                position: "relative",
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }}
              leadingSymbol={"􀈷"}
              label={"Documents"}
              size={"sm"}
              type={"symbol"}
              state={"default"}
            />
            <MacItem
              style={{
                position: "relative",
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }}
              leadingSymbol={"􀁸"}
              label={"Downloads"}
              size={"sm"}
              type={"symbol"}
              state={"default"}
            />
            <MacSectionHeader
              style={{
                position: "relative",
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }}
              sectionTitle={"Locations"}
              size={"sm"}
            />
            <MacItem
              style={{
                position: "relative",
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }}
              leadingSymbol={"􀇂"}
              label={"iCloud Drive"}
              size={"sm"}
              type={"symbol"}
              state={"default"}
            />
            <MacItem
              style={{
                position: "relative",
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }}
              leadingSymbol={"􀎞"}
              label={"janeappleseed"}
              size={"sm"}
              type={"symbol"}
              state={"default"}
            />
            <MacItem
              style={{
                position: "relative",
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }}
              leadingSymbol={"􀥾"}
              label={"Macintosh HD"}
              size={"sm"}
              type={"symbol"}
              state={"default"}
            />
            <MacItem
              style={{
                position: "relative",
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }}
              leadingSymbol={"􀈑"}
              label={"Trash"}
              size={"sm"}
              type={"symbol"}
              state={"default"}
            />
            <MacSectionHeader
              style={{
                position: "relative",
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }}
              sectionTitle={"Tags"}
              showDisclosure={true}
              icon1={<MacDisclosureHeader expanded={false} style={{ width: "100%", height: "100%" }} />}
              size={"sm"}
            />
          </div>
        </div>
      </div>
      <div style={{
        position: "absolute",
        left: 50,
        top: 3020,
        width: 90,
        height: 60,
        borderRadius: 5,
        backgroundColor: "var(--mac-subcomponent-fill)",
      }}>
        <div style={{
          position: "absolute",
          left: 50,
          top: 20,
          width: 16,
          height: 24,
        }}>
          <span style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 16,
            height: 24,
            fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 700,
            fontSize: 11,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "18px",
            color: "rgba(0,0,0,0.25)",
          }}>􀆊</span>
        </div>
        <div style={{
          position: "absolute",
          left: 20,
          top: 20,
          width: 16,
          height: 24,
        }}>
          <span style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 16,
            height: 24,
            fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 700,
            fontSize: 11,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "18px",
            color: "rgba(0,0,0,0.25)",
          }}>􀆈</span>
        </div>
      </div>
    </div>
  );
}
export default MacSidebars;
