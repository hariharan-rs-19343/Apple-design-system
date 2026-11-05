import { ButtonBottom } from '../buttons/ButtonBottom.jsx';
import { ButtonBottom48PtBack } from '../kit/ButtonBottom48PtBack.jsx';
import { HomeIndicator } from '../bezels/HomeIndicator.jsx';
import { IPadProM411 } from '../examples-sidebar/IPadProM411.jsx';
import { MaterialsModeOptions } from '../materials/MaterialsModeOptions.jsx';
import { SearchField } from '../fields/SearchField.jsx';
import { SidebarVibrant } from './SidebarVibrant.jsx';
import { SplitViewSeparator } from './SplitViewSeparator.jsx';
import { StatusBarIPadFalseIPad } from '../kit/StatusBarIPadFalseIPad.jsx';
import { ToolbarTopRegularSizeClass } from './ToolbarTopRegularSizeClass.jsx';
import { WindowGrabber } from './WindowGrabber.jsx';

// figma node: 770:21910 Examples/Sidebars (1 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "style2=" + __venc(p.style2);

export function ExamplesSidebars(_p = {}) {
  const props = { ..._p, style2: _p.style2 ?? "overlay" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 1210,
      height: 834,
      backgroundColor: "var(--backgrounds-primary)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 839,
        height: 834,
      }}>
        <ToolbarTopRegularSizeClass
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 839,
            height: 71,
          }}
          showSearch={false}
          style2={"default"}
        />
        <SidebarVibrant style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 320,
            height: 834,
          }} />
        <div style={{ position: "absolute", left: 400, top: 0 }}>{props.icon1 ?? <WindowGrabber />}</div>
      </div>
      <div style={{
        position: "absolute",
        left: 849,
        top: 0,
        width: 361,
        height: 834,
      }}>
        <div style={{
          position: "absolute",
          left: -7,
          top: 751,
          width: 375,
          display: "flex",
          flexDirection: "row",
          padding: "4px 28px 32px 28px",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: 12,
            justifyContent: "flex-end",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            flexShrink: 0,
          }}>
            <ButtonBottom
              style={{ position: "relative", height: 48, flexShrink: 0 }}
              state={"1 symbol"}
            />
            <ButtonBottom
              style={{ position: "relative", height: 48, flexShrink: 0 }}
              state={"1 symbol"}
            />
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: 12,
            justifyContent: "flex-end",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            flexShrink: 0,
          }}>
            <ButtonBottom
              style={{ position: "relative", height: 48, flexShrink: 0 }}
              state={"1 symbol"}
            />
            <ButtonBottom
              style={{ position: "relative", height: 48, flexShrink: 0 }}
              state={"1 symbol"}
            />
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 361,
          height: 126,
          display: "flex",
          flexDirection: "column",
          gap: 3,
          padding: "0px 4px 0px 4px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 361,
            height: 126,
            overflow: "hidden",
            borderTop: "1px solid rgba(0,0,0,0.3)",
            borderRight: "1px solid rgba(0,0,0,0.3)",
            borderBottom: "0.333px solid rgba(0,0,0,0.3)",
            borderLeft: "1px solid rgba(0,0,0,0.3)",
          }}>
            <MaterialsModeOptions
              style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 361,
                height: 126,
              }}
              mode={"light"}
              style2={"chrome"}
            />
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: 3,
            padding: "9.500px 9.500px 9.500px 9.500px",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <div style={{
              position: "relative",
              width: 5,
              height: 5,
              borderRadius: "50%",
              backgroundColor: "rgba(255,255,255,0.4)",
              flexShrink: 0,
            }} />
            <div style={{
              position: "relative",
              width: 5,
              height: 5,
              borderRadius: "50%",
              backgroundColor: "rgba(255,255,255,0.4)",
              flexShrink: 0,
            }} />
            <div style={{
              position: "relative",
              width: 5,
              height: 5,
              borderRadius: "50%",
              backgroundColor: "rgba(255,255,255,0.4)",
              flexShrink: 0,
            }} />
          </div>
          <div style={{
            position: "relative",
            height: 38,
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <span style={{
              position: "absolute",
              left: 16,
              top: 7,
              width: 361,
              height: 30,
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 13,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "18px",
              color: "rgba(255,45,85,0.2)",
            }}>This is a prompt message.</span>
          </div>
          <div style={{
            position: "relative",
            height: 44,
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <ButtonBottom48PtBack style={{
                position: "absolute",
                left: 0,
                top: 0,
                height: 48,
              }} />
            <span style={{
              position: "absolute",
              left: 159,
              top: 11,
              width: 36,
              height: 22,
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 590,
              fontSize: 17,
              textAlign: "left",
              whiteSpace: "nowrap",
              lineHeight: "22px",
              letterSpacing: "-0.430px",
              color: "var(--labels-primary)",
            }}>Title</span>
            <div style={{
              position: "absolute",
              left: 189,
              top: 0,
              boxShadow: "inset 0 0 0 1px rgb(255,0,0)",
              display: "flex",
              flexDirection: "row",
              gap: 16,
              padding: "11px 16px 11px 0px",
              justifyContent: "flex-end",
              alignItems: "center",
              flexWrap: "nowrap",
              boxSizing: "border-box",
            }}>
              <div style={{
                position: "relative",
                backgroundColor: "rgb(255,105,105)",
                display: "flex",
                flexDirection: "row",
                gap: 10,
                alignItems: "flex-start",
                flexWrap: "nowrap",
                flexShrink: 0,
              }}>
                <span style={{
                  position: "relative",
                  fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 400,
                  fontSize: 17,
                  textAlign: "right",
                  whiteSpace: "nowrap",
                  lineHeight: "22px",
                  color: "rgba(60,60,67,0.18)",
                  flexShrink: 0,
                }}>􀓔</span>
              </div>
              <div style={{
                position: "relative",
                backgroundColor: "rgb(255,105,105)",
                display: "flex",
                flexDirection: "row",
                gap: 10,
                alignItems: "flex-start",
                flexWrap: "nowrap",
                flexShrink: 0,
              }}>
                <span style={{
                  position: "relative",
                  fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 400,
                  fontSize: 17,
                  textAlign: "right",
                  whiteSpace: "nowrap",
                  lineHeight: "22px",
                  color: "var(--accents-blue)",
                  flexShrink: 0,
                }}>􀓔</span>
              </div>
              <div style={{
                position: "relative",
                backgroundColor: "rgb(255,105,105)",
                display: "flex",
                flexDirection: "row",
                gap: 10,
                alignItems: "flex-start",
                flexWrap: "nowrap",
                flexShrink: 0,
              }}>
                <span style={{
                  position: "relative",
                  fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 400,
                  fontSize: 17,
                  textAlign: "right",
                  whiteSpace: "nowrap",
                  lineHeight: "22px",
                  color: "var(--accents-blue)",
                  flexShrink: 0,
                }}>􀓔</span>
              </div>
              <div style={{
                position: "relative",
                backgroundColor: "rgb(255,105,105)",
                display: "flex",
                flexDirection: "row",
                gap: 10,
                alignItems: "flex-start",
                flexWrap: "nowrap",
                flexShrink: 0,
              }}>
                <span style={{
                  position: "relative",
                  fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 400,
                  fontSize: 17,
                  textAlign: "right",
                  whiteSpace: "nowrap",
                  lineHeight: "22px",
                  color: "var(--accents-blue)",
                  flexShrink: 0,
                }}>􀓔</span>
              </div>
            </div>
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            padding: "1px 16px 15px 16px",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <SearchField
              style={{
                position: "relative",
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }}
              searchText={"Search"}
              state={"placeholder"}
            />
          </div>
        </div>
      </div>
      <div style={{
          position: "absolute",
          left: 839,
          top: 0,
          width: 10,
          height: 834,
        }}>
        <SplitViewSeparator style={{ transform: "scale(1, 5.792)", transformOrigin: "0 0" }} />
      </div>
      <div style={{
          position: "absolute",
          left: 0,
          top: 814,
          width: 1210,
          height: 19.5,
        }}>
        <HomeIndicator
          style={{ transform: "scale(3.025, 1)", transformOrigin: "0 0" }}
          device={"iPad"}
          orientation={"landscape"}
        />
      </div>
      <StatusBarIPadFalseIPad style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 1210,
        }} />
      <IPadProM411
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 1210,
          height: 834,
        }}
        color={"silver"}
      />
    </div>
  );
  const __impls = {
    // figma: Style=Overlay
    "style2=overlay": __body0,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default ExamplesSidebars;
