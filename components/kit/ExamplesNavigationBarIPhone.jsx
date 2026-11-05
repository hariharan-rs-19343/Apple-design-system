import { ButtonBack2 } from '../actions/ButtonBack2.jsx';
import { ButtonsTop } from '../actions/ButtonsTop.jsx';
import { HomeIndicator } from '../bezels/HomeIndicator.jsx';
import { IPhone16Pro } from '../bezels/IPhone16Pro.jsx';
import { LiquidGlassRegularSmall } from '../buttons/LiquidGlassRegularSmall.jsx';
import { StatusBarIPhone2 } from '../navigation/StatusBarIPhone2.jsx';

// figma node: 770:21903 Examples/Navigation Bar - iPhone (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "largeTitle=" + __venc(p.largeTitle);

export function ExamplesNavigationBarIPhone(_p = {}) {
  const props = { ..._p, largeTitle: _p.largeTitle ?? false };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 402,
      height: 874,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 402,
        height: 874,
        overflow: "hidden",
        borderRadius: 44,
        backgroundColor: "var(--backgrounds-grouped-primary)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        flexWrap: "nowrap",
      }}>
        <div style={{
          position: "relative",
          height: 202,
          backgroundColor: "rgba(235,54,255,0.3)",
          display: "flex",
          flexDirection: "column",
          gap: 10,
          padding: "0px 0px 10px 0px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            padding: "0px 16px 0px 16px",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              gap: 10,
              alignItems: "center",
              flexWrap: "nowrap",
              flexShrink: 0,
            }}>
              <div style={{
                position: "relative",
                height: 44,
                minWidth: 44,
                borderRadius: 296,
                backgroundColor: "rgb(255,255,255)",
                display: "flex",
                flexDirection: "row",
                gap: 12,
                padding: "0px 2px 0px 2px",
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
                    width: 84,
                    height: 44,
                  }}>
                  <LiquidGlassRegularSmall
                    style={{ transform: "scale(1.750, 0.917)", transformOrigin: "0 0" }}
                    mode={"light"}
                    state={"default"}
                  />
                </div>
                <ButtonBack2
                  style={{
                    position: "relative",
                    width: 80,
                    height: 36,
                    flexShrink: 0,
                  }}
                  mode={"light"}
                  state={"default"}
                />
              </div>
            </div>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              gap: 10,
              justifyContent: "flex-end",
              alignItems: "center",
              flexWrap: "nowrap",
              flexShrink: 0,
            }}>
              <ButtonsTop
                style={{ position: "relative", height: 44, flexShrink: 0 }}
                type={"1 symbol"}
              />
              <ButtonsTop
                style={{ position: "relative", height: 44, flexShrink: 0 }}
                type={"1 symbol"}
              />
              <ButtonsTop
                style={{ position: "relative", height: 44, flexShrink: 0 }}
                type={"1 symbol"}
              />
            </div>
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            gap: 10,
            padding: "0px 16px 0px 16px",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <span style={{
              position: "relative",
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 700,
              fontSize: 34,
              whiteSpace: "nowrap",
              lineHeight: "41px",
              letterSpacing: "0.400px",
              color: "var(--labels-primary-yyyy)",
              flexShrink: 0,
            }}>Title</span>
          </div>
        </div>
        <div style={{ position: "relative", flexGrow: 1, alignSelf: "stretch" }} />
      </div>
      <HomeIndicator
        style={{
          position: "absolute",
          left: 0,
          top: 840,
          width: 402,
          height: 34,
        }}
        device={"iPhone"}
        orientation={"portrait"}
      />
      <IPhone16Pro style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 402,
          height: 874,
        }} />
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 402,
      height: 874,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 402,
        height: 874,
        overflow: "hidden",
        borderRadius: 44,
        backgroundColor: "var(--backgrounds-grouped-primary)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        flexWrap: "nowrap",
      }}>
        <StatusBarIPhone2 style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }} />
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          padding: "0px 16px 10px 16px",
          justifyContent: "space-between",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: 10,
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
          }}>
            <div style={{
              position: "relative",
              width: 44,
              height: 44,
              minWidth: 44,
              borderRadius: 296,
              backgroundColor: "rgb(255,255,255)",
              display: "flex",
              flexDirection: "row",
              gap: 12,
              padding: "0px 2px 0px 2px",
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
                width: 44,
                height: 44,
              }}>
                <svg width={44} height={44} viewBox="0 0 44 44" fill="none" style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  width: 44,
                  height: 44,
                  overflow: "hidden",
                  borderRadius: 296,
                  filter: "drop-shadow(0px 8px 40px rgba(0,0,0,0.12))",
                }}>
                  <path d={"M 0 22 C 0 9.85 9.85 0 22 0 L 22 0 C 34.15 0 44 9.85 44 22 L 44 22 C 44 34.15 34.15 44 22 44 L 22 44 C 9.85 44 0 34.15 0 22 L 0 22 Z"} fill="currentColor" fillRule="nonzero" />
                </svg>
              </div>
              <div style={{
                position: "relative",
                height: 36,
                minWidth: 36,
                borderRadius: 100,
                display: "flex",
                flexDirection: "row",
                gap: 2,
                padding: "0px 8px 0px 8px",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "nowrap",
                boxSizing: "border-box",
                flexShrink: 0,
              }}>
                <span style={{
                  position: "relative",
                  fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 510,
                  fontSize: 17,
                  textAlign: "center",
                  whiteSpace: "nowrap",
                  lineHeight: "100%",
                  color: "var(--labels-vibrant-controls-primary)",
                  flexShrink: 0,
                }}>􀯶</span>
              </div>
            </div>
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: 10,
            justifyContent: "flex-end",
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
          }}>
            <div style={{
              position: "relative",
              height: 44,
              borderRadius: 296,
              backgroundColor: "rgb(255,255,255)",
              display: "flex",
              flexDirection: "row",
              gap: 20,
              padding: "0px 4px 0px 4px",
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
                width: 44,
                height: 44,
              }}>
                <svg width={44} height={44} viewBox="0 0 44 44" fill="none" style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  width: 44,
                  height: 44,
                  borderRadius: 1000,
                  filter: "drop-shadow(0px 8px 40px rgba(0,0,0,0.12))",
                }}>
                  <path d={"M 0 22 C 0 9.85 9.85 0 22 0 L 22 0 C 34.15 0 44 9.85 44 22 L 44 22 C 44 34.15 34.15 44 22 44 L 22 44 C 9.85 44 0 34.15 0 22 L 0 22 Z"} fill="currentColor" fillRule="nonzero" />
                </svg>
              </div>
              <div style={{
                position: "relative",
                width: 36,
                height: 36,
                borderRadius: 100,
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
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
                  lineHeight: "100%",
                  color: "rgb(255,255,255)",
                  flexGrow: 1,
                  alignSelf: "stretch",
                }}>􀓔</span>
              </div>
            </div>
          </div>
          <div style={{
            position: "absolute",
            left: 183,
            top: 13,
            width: 36,
            height: 22,
          }}>
            <span style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 36,
              height: 22,
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 590,
              fontSize: 17,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "22px",
              letterSpacing: "-0.430px",
              color: "var(--labels-vibrant-primary)",
            }}>Title</span>
          </div>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 10,
          padding: "10px 10px 10px 10px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexGrow: 1,
          alignSelf: "stretch",
        }} />
      </div>
      <HomeIndicator
        style={{
          position: "absolute",
          left: 0,
          top: 840,
          width: 402,
          height: 34,
        }}
        device={"iPhone"}
        orientation={"portrait"}
      />
      <IPhone16Pro style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 402,
          height: 874,
        }} />
    </div>
  );
  const __impls = {
    // figma: Large Title=True
    "largeTitle=true": __body0,
    // figma: Large Title=False
    "largeTitle=false": __body1,
  };
  return (__impls[__vkey(props)] ?? __body1)();
}
export default ExamplesNavigationBarIPhone;
