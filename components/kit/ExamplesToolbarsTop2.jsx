import { ButtonsTop } from '../actions/ButtonsTop.jsx';
import { IPadProM411 } from '../examples-sidebar/IPadProM411.jsx';
import { StatusBarAndMenuBar } from '../home-screen/StatusBarAndMenuBar.jsx';
import { SubtitleCaption } from '../navigation/SubtitleCaption.jsx';
import { SubtitleSubheadline } from '../navigation/SubtitleSubheadline.jsx';
import { TitleLargeTitle } from '../navigation/TitleLargeTitle.jsx';
import { TitleSubheadline } from '../navigation/TitleSubheadline.jsx';
import { ToolbarBottomIPad } from '../page-controls/ToolbarBottomIPad.jsx';

// figma node: 5732:63624 Examples/Toolbars - Top (4 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "type=" + __venc(p.type);

export function ExamplesToolbarsTop2(_p = {}) {
  const props = { ..._p, type: _p.type ?? "2 line - left aligned" };
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
        width: 1210,
        height: 834,
        overflow: "hidden",
        backgroundColor: "var(--backgrounds-primary)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        flexWrap: "nowrap",
      }}>
        <div style={{ position: "relative", flexGrow: 1, alignSelf: "stretch" }} />
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
      <StatusBarAndMenuBar
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 1208,
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
        width: 1210,
        height: 834,
        overflow: "hidden",
        backgroundColor: "var(--backgrounds-primary)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        flexWrap: "nowrap",
      }}>
        <div style={{ position: "relative", flexGrow: 1, alignSelf: "stretch" }} />
      </div>
      <div style={{
        position: "absolute",
        left: 0,
        top: 32,
        width: 1210,
        display: "flex",
        flexDirection: "row",
        padding: "0px 10px 10px 10px",
        justifyContent: "space-between",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
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
          height: 38,
          display: "flex",
          flexDirection: "column",
          padding: "5px 12px 5px 12px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexGrow: 1,
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
            type={"1 symbol"}
          />
          <ButtonsTop
            style={{ position: "relative", height: 44, flexShrink: 0 }}
            type={"1 symbol"}
          />
        </div>
      </div>
      <StatusBarAndMenuBar
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 1208,
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
  const __body2 = () => (
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
        width: 1210,
        height: 834,
        overflow: "hidden",
        backgroundColor: "var(--backgrounds-primary)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        flexWrap: "nowrap",
      }}>
        <div style={{ position: "relative", flexGrow: 1, alignSelf: "stretch" }} />
      </div>
      <div style={{
        position: "absolute",
        left: 0,
        top: 32,
        width: 1210,
        display: "flex",
        flexDirection: "row",
        padding: "0px 10px 10px 10px",
        justifyContent: "space-between",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
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
            type={"1 symbol"}
          />
          <ButtonsTop
            style={{ position: "relative", height: 44, flexShrink: 0 }}
            type={"1 symbol"}
          />
        </div>
        <div style={{
          position: "absolute",
          left: 20,
          top: 5,
          width: 1170,
          height: 36,
          display: "flex",
          flexDirection: "column",
          gap: 2,
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
        }}>
          <TitleSubheadline
            style={{ position: "relative", flexShrink: 0 }}
            mode={"light"}
          />
          <SubtitleCaption
            style={{ position: "relative", flexShrink: 0 }}
            mode={"light"}
          />
        </div>
      </div>
      <StatusBarAndMenuBar
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 1208,
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
  const __body3 = () => (
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
        width: 1210,
        height: 834,
        overflow: "hidden",
        backgroundColor: "var(--backgrounds-primary)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        flexWrap: "nowrap",
      }}>
        <div style={{ position: "relative", flexGrow: 1, alignSelf: "stretch" }} />
      </div>
      <ToolbarBottomIPad style={{
          position: "absolute",
          left: 0,
          top: 776,
          width: 1210,
        }} />
      <div style={{
        position: "absolute",
        left: 0,
        top: 32,
        width: 1210,
        display: "flex",
        flexDirection: "row",
        padding: "0px 10px 10px 10px",
        justifyContent: "space-between",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
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
          height: 38,
          display: "flex",
          flexDirection: "column",
          gap: 2,
          padding: "7px 12px 7px 12px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexGrow: 1,
        }}>
          <TitleSubheadline
            style={{ position: "relative", flexShrink: 0 }}
            mode={"light"}
          />
          <SubtitleCaption
            style={{ position: "relative", flexShrink: 0 }}
            mode={"light"}
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
            type={"1 symbol"}
          />
          <ButtonsTop
            style={{ position: "relative", height: 44, flexShrink: 0 }}
            type={"1 symbol"}
          />
        </div>
      </div>
      <StatusBarAndMenuBar
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 1208,
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
  const __impls = {
    // figma: Type=2 Line - Large Title
    "type=2 line - large title": __body0,
    // figma: Type=2 Line - Large Title Inline
    "type=2 line - large title inline": __body1,
    // figma: Type=2 Line - Center Aligned
    "type=2 line - center aligned": __body2,
    // figma: Type=2 Line - Left Aligned
    "type=2 line - left aligned": __body3,
  };
  return (__impls[__vkey(props)] ?? __body3)();
}
export default ExamplesToolbarsTop2;
