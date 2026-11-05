import { ButtonContentArea } from '../buttons/ButtonContentArea.jsx';
import { ButtonsTop } from '../actions/ButtonsTop.jsx';
import { IPadProM411 } from '../examples-sidebar/IPadProM411.jsx';
import { PopoversIPadOnly } from '../navigation/PopoversIPadOnly.jsx';
import { StatusBarAndMenuBar } from '../home-screen/StatusBarAndMenuBar.jsx';
import { TitleLargeTitle } from '../navigation/TitleLargeTitle.jsx';

// figma node: 754:64525 Examples/Popover
export function ExamplesPopover(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 1210,
      height: 834,
      backgroundColor: "rgb(255,255,255)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 1208,
        height: 834,
        overflow: "hidden",
        backgroundColor: "var(--backgrounds-grouped-primary)",
        display: "flex",
        flexDirection: "column",
        padding: "134px 20px 10px 20px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
      }}>
        <div style={{ position: "relative", flexGrow: 1, alignSelf: "stretch" }}>
          <ButtonContentArea
            style={{
              position: "absolute",
              left: 510,
              top: 509,
              width: 149,
            }}
            label={"Open Popover"}
            size={"lg"}
            destructive={false}
            style2={"bordered - prominent"}
            enabled={true}
            labelType={"text"}
          />
          <div style={{
              position: "absolute",
              left: 374,
              top: 65,
              width: 420,
              height: 420,
            }}>
            <PopoversIPadOnly
              style={{ transform: "scale(2.100, 2.100)", transformOrigin: "0 0" }}
              direction={"down - align center"}
            />
          </div>
        </div>
      </div>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 1208,
        height: 134,
        backdropFilter: "blur(10px)",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 1208,
          height: 134,
          clipPath: "inset(0px 0px 0px 0px)",
        }}>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 1208,
            height: 134,
            opacity: 0.9,
            backgroundColor: "var(--backgrounds-primary)",
            backdropFilter: "blur(60px)",
          }} />
        </div>
      </div>
      <div style={{
        position: "absolute",
        left: 0,
        top: 32,
        width: 1210,
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: "0px 10px 10px 10px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: 12,
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
            gap: 12,
            justifyContent: "flex-end",
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
          }}>
            <ButtonsTop
              style={{ position: "relative", height: 44, flexShrink: 0 }}
              type={"3 symbols"}
            />
          </div>
        </div>
        <div style={{
          position: "relative",
          height: 45,
          display: "flex",
          flexDirection: "column",
          gap: 2,
          padding: "4px 10px 4px 10px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <TitleLargeTitle
            style={{
              position: "relative",
              height: 41,
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}
            mode={"light"}
          />
        </div>
      </div>
      <StatusBarAndMenuBar
        style={{
          position: "absolute",
          left: -1,
          top: 0,
          width: 1210,
          height: 32,
        }}
        type={"status bar only"}
      />
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
}
export default ExamplesPopover;
