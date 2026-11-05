import { ButtonsTop } from '../actions/ButtonsTop.jsx';
import { IPadProM411 } from '../examples-sidebar/IPadProM411.jsx';
import { Keyboard2 } from './Keyboard2.jsx';
import { StatusBarAndMenuBar } from '../home-screen/StatusBarAndMenuBar.jsx';
import { SubtitleSubheadline } from '../navigation/SubtitleSubheadline.jsx';
import { TitleLargeTitle } from '../navigation/TitleLargeTitle.jsx';

// figma node: 770:21900 Examples/Keyboard (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "type=" + __venc(p.type);

export function ExamplesKeyboard2(_p = {}) {
  const props = { ..._p, type: _p.type ?? "text (lower case)" };
  const __body0 = () => (
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
        backgroundColor: "var(--backgrounds-primary)",
        display: "flex",
        flexDirection: "column",
        padding: "134px 20px 10px 20px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
      }}>
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
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 10,
          padding: "10px 0px 10px 0px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexGrow: 1,
          alignSelf: "stretch",
        }} />
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
            <ButtonsTop
              style={{ position: "relative", height: 44, flexShrink: 0 }}
              type={"1 symbol"}
            />
            <ButtonsTop
              style={{ position: "relative", height: 44, flexShrink: 0 }}
              type={"1 symbol"}
            />
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
            <ButtonsTop
              style={{ position: "relative", height: 44, flexShrink: 0 }}
              type={"5 symbols"}
            />
          </div>
        </div>
        <div style={{
          position: "relative",
          height: 67,
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
          <SubtitleSubheadline
            style={{ position: "relative", flexShrink: 0 }}
            mode={"light"}
          />
        </div>
      </div>
      <Keyboard2
        style={{
          position: "absolute",
          left: 0,
          top: 406,
          width: 1210,
        }}
        type={"shift"}
      />
      <StatusBarAndMenuBar
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 1208,
          height: 24,
        }}
        date={"Tue Apr 1"}
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
  const __body1 = () => (
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
        backgroundColor: "var(--backgrounds-primary)",
        display: "flex",
        flexDirection: "column",
        padding: "134px 20px 10px 20px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
      }}>
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
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 10,
          padding: "10px 0px 10px 0px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexGrow: 1,
          alignSelf: "stretch",
        }} />
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
            <ButtonsTop
              style={{ position: "relative", height: 44, flexShrink: 0 }}
              type={"1 symbol"}
            />
            <ButtonsTop
              style={{ position: "relative", height: 44, flexShrink: 0 }}
              type={"1 symbol"}
            />
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
            <ButtonsTop
              style={{ position: "relative", height: 44, flexShrink: 0 }}
              type={"5 symbols"}
            />
          </div>
        </div>
        <div style={{
          position: "relative",
          height: 67,
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
          <SubtitleSubheadline
            style={{ position: "relative", flexShrink: 0 }}
            mode={"light"}
          />
        </div>
      </div>
      <Keyboard2
        style={{
          position: "absolute",
          left: 0,
          top: 406,
          width: 1210,
        }}
        type={"default"}
      />
      <StatusBarAndMenuBar
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 1208,
          height: 24,
        }}
        date={"Tue Apr 1"}
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
  const __impls = {
    // figma: Type=Text (Upper Case)
    "type=text (upper case)": __body0,
    // figma: Type=Text (Lower Case)
    "type=text (lower case)": __body1,
  };
  return (__impls[__vkey(props)] ?? __body1)();
}
export default ExamplesKeyboard2;
