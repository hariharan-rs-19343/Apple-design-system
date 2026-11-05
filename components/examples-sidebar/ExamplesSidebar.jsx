import { ButtonsTop } from '../actions/ButtonsTop.jsx';
import { IPadProM411 } from './IPadProM411.jsx';
import { LiquidGlassRegularMedium } from '../alerts/LiquidGlassRegularMedium.jsx';
import { SectionHeader2 } from '../surfaces/SectionHeader2.jsx';
import { Sidebar } from '../surfaces/Sidebar.jsx';
import { SidebarSearchField } from '../sidebar-items/SidebarSearchField.jsx';
import { SidebarToolbar } from './SidebarToolbar.jsx';
import { StatusBarAndMenuBar } from '../home-screen/StatusBarAndMenuBar.jsx';
import { SubtitleSubheadline } from '../navigation/SubtitleSubheadline.jsx';
import { TabBarButtonIPadText } from '../tab-bars/TabBarButtonIPadText.jsx';
import { TitleLargeTitle } from '../navigation/TitleLargeTitle.jsx';

// figma node: 5726:29555 Examples/Sidebar (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "type=" + __venc(p.type);

export function ExamplesSidebar(_p = {}) {
  const props = { ..._p, type: _p.type ?? "list" };
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
        left: 330,
        top: 32,
        width: 878,
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: "0px 10px 10px 10px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
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
            flexGrow: 1,
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
                  color: "rgb(247,247,247)",
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
                  fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
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
            flexGrow: 1,
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
          minHeight: 48,
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
        <div style={{
          position: "absolute",
          left: 236.5,
          top: 0,
          display: "flex",
          flexDirection: "row",
          padding: "4px 4px 4px 4px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 416,
            height: 44,
          }}>
            <svg width={416} height={44} viewBox="0 0 416 44" fill="none" style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 416,
              height: 44,
              overflow: "hidden",
              borderRadius: 296,
              filter: "drop-shadow(0px 8px 40px rgba(0,0,0,0.12))",
              color: "rgb(247,247,247)",
}}>
              <path d={"M 0 22 C 0 9.85 9.85 0 22 0 L 394 0 C 406.15 0 416 9.85 416 22 L 416 22 C 416 34.15 406.15 44 394 44 L 22 44 C 9.85 44 0 34.15 0 22 L 0 22 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
          <div style={{
            position: "relative",
            width: 54,
            display: "flex",
            flexDirection: "row",
            padding: "8px 16px 8px 16px",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 15,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "20px",
              letterSpacing: "-0.230px",
              color: "var(--labels-vibrant-controls-primary)",
              flexShrink: 0,
            }}>􀰱</span>
          </div>
          <div style={{
            position: "relative",
            height: 36,
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
          }}>
            <TabBarButtonIPadText
              style={{
                position: "relative",
                width: 74,
                flexShrink: 0,
                alignSelf: "stretch",
                height: "auto",
              }}
              label={"Tab 1"}
              selected={true}
              mode={"light"}
            />
            <TabBarButtonIPadText
              style={{
                position: "relative",
                flexShrink: 0,
                alignSelf: "stretch",
                height: "auto",
              }}
              label={"Tab 2"}
              selected={false}
              mode={"light"}
            />
            <TabBarButtonIPadText
              style={{
                position: "relative",
                flexShrink: 0,
                alignSelf: "stretch",
                height: "auto",
              }}
              label={"Tab 3"}
              selected={false}
              mode={"light"}
            />
            <TabBarButtonIPadText
              style={{
                position: "relative",
                flexShrink: 0,
                alignSelf: "stretch",
                height: "auto",
              }}
              label={"Tab 4"}
              selected={false}
              mode={"light"}
            />
          </div>
          <div style={{
            position: "relative",
            width: 54,
            display: "flex",
            flexDirection: "row",
            padding: "8px 16px 8px 16px",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 15,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "20px",
              letterSpacing: "-0.230px",
              color: "var(--labels-vibrant-controls-primary)",
              flexShrink: 0,
            }}>􀊫</span>
          </div>
        </div>
      </div>
      <Sidebar style={{
          position: "absolute",
          left: 10,
          top: 27,
          width: 320,
          height: 802,
        }} />
      <StatusBarAndMenuBar
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 1208,
          height: 24,
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
      backgroundColor: "var(--backgrounds-primary)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 330,
        top: 32,
        width: 878,
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: "0px 10px 10px 10px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
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
            flexGrow: 1,
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
                  color: "rgb(247,247,247)",
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
                  fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
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
            flexGrow: 1,
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
          minHeight: 48,
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
        <div style={{
          position: "absolute",
          left: 236.5,
          top: 0,
          display: "flex",
          flexDirection: "row",
          padding: "4px 4px 4px 4px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 416,
            height: 44,
          }}>
            <svg width={416} height={44} viewBox="0 0 416 44" fill="none" style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 416,
              height: 44,
              overflow: "hidden",
              borderRadius: 296,
              filter: "drop-shadow(0px 8px 40px rgba(0,0,0,0.12))",
              color: "rgb(247,247,247)",
}}>
              <path d={"M 0 22 C 0 9.85 9.85 0 22 0 L 394 0 C 406.15 0 416 9.85 416 22 L 416 22 C 416 34.15 406.15 44 394 44 L 22 44 C 9.85 44 0 34.15 0 22 L 0 22 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
          <div style={{
            position: "relative",
            width: 54,
            display: "flex",
            flexDirection: "row",
            padding: "8px 16px 8px 16px",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 15,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "20px",
              letterSpacing: "-0.230px",
              color: "var(--labels-vibrant-controls-primary)",
              flexShrink: 0,
            }}>􀰱</span>
          </div>
          <div style={{
            position: "relative",
            height: 36,
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
          }}>
            <TabBarButtonIPadText
              style={{
                position: "relative",
                width: 74,
                flexShrink: 0,
                alignSelf: "stretch",
                height: "auto",
              }}
              label={"Tab 1"}
              selected={true}
              mode={"light"}
            />
            <TabBarButtonIPadText
              style={{
                position: "relative",
                flexShrink: 0,
                alignSelf: "stretch",
                height: "auto",
              }}
              label={"Tab 2"}
              selected={false}
              mode={"light"}
            />
            <TabBarButtonIPadText
              style={{
                position: "relative",
                flexShrink: 0,
                alignSelf: "stretch",
                height: "auto",
              }}
              label={"Tab 3"}
              selected={false}
              mode={"light"}
            />
            <TabBarButtonIPadText
              style={{
                position: "relative",
                flexShrink: 0,
                alignSelf: "stretch",
                height: "auto",
              }}
              label={"Tab 4"}
              selected={false}
              mode={"light"}
            />
          </div>
          <div style={{
            position: "relative",
            width: 54,
            display: "flex",
            flexDirection: "row",
            padding: "8px 16px 8px 16px",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 15,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "20px",
              letterSpacing: "-0.230px",
              color: "var(--labels-vibrant-controls-primary)",
              flexShrink: 0,
            }}>􀊫</span>
          </div>
        </div>
      </div>
      <div style={{
        position: "absolute",
        left: 10,
        top: 27,
        width: 320,
        height: 802,
        display: "flex",
        flexDirection: "column",
        padding: "11px 16px 10px 16px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
      }}>
        <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 320,
            height: 802,
          }}>
          <LiquidGlassRegularMedium
            style={{ transform: "scale(2, 5.013)", transformOrigin: "0 0" }}
            mode={"light"}
          />
        </div>
        <SidebarToolbar style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }} />
        <SidebarSearchField
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          mode={"light"}
          state={"placeholder"}
        />
        <div style={{
          position: "relative",
          height: 196,
          display: "flex",
          flexDirection: "column",
          padding: "20px 0px 20px 0px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            height: 44,
            display: "flex",
            flexDirection: "row",
            gap: 8,
            padding: "0px 8px 0px 10px",
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
              gap: 8,
              alignItems: "center",
              flexWrap: "nowrap",
              flexGrow: 1,
              alignSelf: "stretch",
            }}>
              <div style={{
                position: "relative",
                width: 85,
                display: "flex",
                flexDirection: "row",
                gap: 4,
                alignItems: "center",
                flexWrap: "nowrap",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>
                <span style={{
                  position: "relative",
                  fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 400,
                  fontSize: 17,
                  textAlign: "center",
                  whiteSpace: "nowrap",
                  lineHeight: "22px",
                  color: "var(--labels-vibrant-primary)",
                  flexShrink: 0,
                  alignSelf: "stretch",
                }}>􀈩</span>
                <div style={{
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  gap: -2,
                  justifyContent: "center",
                  alignItems: "flex-start",
                  flexWrap: "nowrap",
                  flexShrink: 0,
                }}>
                  <span style={{
                    position: "relative",
                    fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                    fontWeight: 400,
                    fontSize: 17,
                    whiteSpace: "nowrap",
                    lineHeight: "22px",
                    letterSpacing: "-0.430px",
                    color: "var(--labels-primary)",
                    flexShrink: 0,
                  }}>All Inboxes</span>
                </div>
              </div>
            </div>
          </div>
          <div style={{
            position: "relative",
            height: 44,
            display: "flex",
            flexDirection: "row",
            gap: 8,
            padding: "0px 8px 0px 10px",
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
              gap: 8,
              alignItems: "center",
              flexWrap: "nowrap",
              flexGrow: 1,
              alignSelf: "stretch",
            }}>
              <div style={{
                position: "relative",
                width: 85,
                display: "flex",
                flexDirection: "row",
                gap: 4,
                alignItems: "center",
                flexWrap: "nowrap",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>
                <span style={{
                  position: "relative",
                  fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 400,
                  fontSize: 17,
                  textAlign: "center",
                  whiteSpace: "nowrap",
                  lineHeight: "22px",
                  color: "var(--labels-vibrant-primary)",
                  flexShrink: 0,
                  alignSelf: "stretch",
                }}>􀈣</span>
                <div style={{
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  gap: -2,
                  justifyContent: "center",
                  alignItems: "flex-start",
                  flexWrap: "nowrap",
                  flexShrink: 0,
                }}>
                  <span style={{
                    position: "relative",
                    fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                    fontWeight: 400,
                    fontSize: 17,
                    whiteSpace: "nowrap",
                    lineHeight: "22px",
                    letterSpacing: "-0.430px",
                    color: "var(--labels-primary)",
                    flexShrink: 0,
                  }}>iCloud</span>
                </div>
              </div>
            </div>
          </div>
          <div style={{
            position: "relative",
            height: 44,
            display: "flex",
            flexDirection: "row",
            gap: 8,
            padding: "0px 8px 0px 10px",
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
              gap: 8,
              alignItems: "center",
              flexWrap: "nowrap",
              flexGrow: 1,
              alignSelf: "stretch",
            }}>
              <div style={{
                position: "relative",
                width: 85,
                display: "flex",
                flexDirection: "row",
                gap: 4,
                alignItems: "center",
                flexWrap: "nowrap",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>
                <span style={{
                  position: "relative",
                  fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 400,
                  fontSize: 17,
                  textAlign: "center",
                  whiteSpace: "nowrap",
                  lineHeight: "22px",
                  color: "var(--labels-vibrant-primary)",
                  flexShrink: 0,
                  alignSelf: "stretch",
                }}>􀈣</span>
                <div style={{
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  gap: -2,
                  justifyContent: "center",
                  alignItems: "flex-start",
                  flexWrap: "nowrap",
                  flexShrink: 0,
                }}>
                  <span style={{
                    position: "relative",
                    fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                    fontWeight: 400,
                    fontSize: 17,
                    whiteSpace: "nowrap",
                    lineHeight: "22px",
                    letterSpacing: "-0.430px",
                    color: "var(--labels-primary)",
                    flexShrink: 0,
                  }}>Apple</span>
                </div>
              </div>
            </div>
          </div>
          <div style={{
            position: "relative",
            height: 44,
            display: "flex",
            flexDirection: "row",
            gap: 8,
            padding: "0px 8px 0px 10px",
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
              gap: 8,
              alignItems: "center",
              flexWrap: "nowrap",
              flexGrow: 1,
              alignSelf: "stretch",
            }}>
              <div style={{
                position: "relative",
                width: 85,
                display: "flex",
                flexDirection: "row",
                gap: 4,
                alignItems: "center",
                flexWrap: "nowrap",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>
                <span style={{
                  position: "relative",
                  fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 400,
                  fontSize: 17,
                  textAlign: "center",
                  whiteSpace: "nowrap",
                  lineHeight: "22px",
                  color: "var(--labels-vibrant-primary)",
                  flexShrink: 0,
                  alignSelf: "stretch",
                }}>􀋂</span>
                <div style={{
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  gap: -2,
                  justifyContent: "center",
                  alignItems: "flex-start",
                  flexWrap: "nowrap",
                  flexShrink: 0,
                }}>
                  <span style={{
                    position: "relative",
                    fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                    fontWeight: 400,
                    fontSize: 17,
                    whiteSpace: "nowrap",
                    lineHeight: "22px",
                    letterSpacing: "-0.430px",
                    color: "var(--labels-primary)",
                    flexShrink: 0,
                  }}>Apple</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{
          position: "relative",
          height: 372,
          display: "flex",
          flexDirection: "column",
          padding: "20px 0px 20px 0px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <SectionHeader2 style={{
              position: "relative",
              height: 44,
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }} />
          <div style={{
            position: "relative",
            height: 44,
            display: "flex",
            flexDirection: "row",
            gap: 8,
            padding: "0px 8px 0px 10px",
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
              gap: 8,
              alignItems: "center",
              flexWrap: "nowrap",
              flexGrow: 1,
              alignSelf: "stretch",
            }}>
              <div style={{
                position: "relative",
                width: 85,
                display: "flex",
                flexDirection: "row",
                gap: 4,
                alignItems: "center",
                flexWrap: "nowrap",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>
                <span style={{
                  position: "relative",
                  fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 400,
                  fontSize: 17,
                  textAlign: "center",
                  whiteSpace: "nowrap",
                  lineHeight: "22px",
                  color: "var(--labels-vibrant-primary)",
                  flexShrink: 0,
                  alignSelf: "stretch",
                }}>􀈣</span>
                <div style={{
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  gap: -2,
                  justifyContent: "center",
                  alignItems: "flex-start",
                  flexWrap: "nowrap",
                  flexShrink: 0,
                }}>
                  <span style={{
                    position: "relative",
                    fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                    fontWeight: 400,
                    fontSize: 17,
                    whiteSpace: "nowrap",
                    lineHeight: "22px",
                    letterSpacing: "-0.430px",
                    color: "var(--labels-primary)",
                    flexShrink: 0,
                  }}>Inbox</span>
                </div>
              </div>
            </div>
          </div>
          <div style={{
            position: "relative",
            height: 44,
            display: "flex",
            flexDirection: "row",
            gap: 8,
            padding: "0px 8px 0px 10px",
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
              gap: 8,
              alignItems: "center",
              flexWrap: "nowrap",
              flexGrow: 1,
              alignSelf: "stretch",
            }}>
              <div style={{
                position: "relative",
                width: 85,
                display: "flex",
                flexDirection: "row",
                gap: 4,
                alignItems: "center",
                flexWrap: "nowrap",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>
                <span style={{
                  position: "relative",
                  fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 400,
                  fontSize: 17,
                  textAlign: "center",
                  whiteSpace: "nowrap",
                  lineHeight: "22px",
                  color: "var(--labels-vibrant-primary)",
                  flexShrink: 0,
                  alignSelf: "stretch",
                }}>􀋉</span>
                <div style={{
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  gap: -2,
                  justifyContent: "center",
                  alignItems: "flex-start",
                  flexWrap: "nowrap",
                  flexShrink: 0,
                }}>
                  <span style={{
                    position: "relative",
                    fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                    fontWeight: 400,
                    fontSize: 17,
                    whiteSpace: "nowrap",
                    lineHeight: "22px",
                    letterSpacing: "-0.430px",
                    color: "var(--labels-primary)",
                    flexShrink: 0,
                  }}>Flagged</span>
                </div>
              </div>
            </div>
          </div>
          <div style={{
            position: "relative",
            height: 44,
            display: "flex",
            flexDirection: "row",
            gap: 8,
            padding: "0px 8px 0px 10px",
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
              gap: 8,
              alignItems: "center",
              flexWrap: "nowrap",
              flexGrow: 1,
              alignSelf: "stretch",
            }}>
              <div style={{
                position: "relative",
                width: 85,
                display: "flex",
                flexDirection: "row",
                gap: 4,
                alignItems: "center",
                flexWrap: "nowrap",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>
                <span style={{
                  position: "relative",
                  fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 400,
                  fontSize: 17,
                  textAlign: "center",
                  whiteSpace: "nowrap",
                  lineHeight: "22px",
                  color: "var(--labels-vibrant-primary)",
                  flexShrink: 0,
                  alignSelf: "stretch",
                }}>􀈟</span>
                <div style={{
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  gap: -2,
                  justifyContent: "center",
                  alignItems: "flex-start",
                  flexWrap: "nowrap",
                  flexShrink: 0,
                }}>
                  <span style={{
                    position: "relative",
                    fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                    fontWeight: 400,
                    fontSize: 17,
                    whiteSpace: "nowrap",
                    lineHeight: "22px",
                    letterSpacing: "-0.430px",
                    color: "var(--labels-primary)",
                    flexShrink: 0,
                  }}>Sent</span>
                </div>
              </div>
            </div>
          </div>
          <div style={{
            position: "relative",
            height: 44,
            borderRadius: 100,
            display: "flex",
            flexDirection: "row",
            gap: 8,
            padding: "0px 8px 0px 10px",
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
              gap: 8,
              alignItems: "center",
              flexWrap: "nowrap",
              flexGrow: 1,
              alignSelf: "stretch",
            }}>
              <div style={{
                position: "relative",
                width: 85,
                display: "flex",
                flexDirection: "row",
                gap: 4,
                alignItems: "center",
                flexWrap: "nowrap",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>
                <span style={{
                  position: "relative",
                  fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 590,
                  fontSize: 17,
                  textAlign: "center",
                  whiteSpace: "nowrap",
                  lineHeight: "22px",
                  color: "var(--accents-blue)",
                  flexShrink: 0,
                  alignSelf: "stretch",
                }}>􀓔</span>
                <div style={{
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  gap: -2,
                  justifyContent: "center",
                  alignItems: "flex-start",
                  flexWrap: "nowrap",
                  flexShrink: 0,
                }}>
                  <span style={{
                    position: "relative",
                    fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                    fontWeight: 590,
                    fontSize: 17,
                    whiteSpace: "nowrap",
                    lineHeight: "22px",
                    letterSpacing: "-0.430px",
                    color: "var(--accents-blue)",
                    flexShrink: 0,
                  }}>Scuba Trips</span>
                </div>
              </div>
            </div>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              gap: 4,
              padding: "0px 4px 0px 0px",
              justifyContent: "flex-end",
              alignItems: "center",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <span style={{
                position: "relative",
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 17,
                textAlign: "right",
                whiteSpace: "nowrap",
                lineHeight: "22px",
                letterSpacing: "-0.430px",
                color: "var(--labels-vibrant-secondary)",
                flexShrink: 0,
              }}>19</span>
              <div style={{
                position: "relative",
                width: 18,
                height: 18,
                flexShrink: 0,
              }}>
                <span style={{
                  position: "absolute",
                  left: 0,
                  top: 2,
                  width: 18,
                  height: 18,
                  fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 590,
                  fontSize: 17,
                  textAlign: "center",
                  whiteSpace: "nowrap",
                  lineHeight: "22px",
                  color: "rgb(153,153,153)",
                }}>􀆈</span>
              </div>
            </div>
          </div>
          <div style={{
            position: "relative",
            height: 44,
            display: "flex",
            flexDirection: "row",
            gap: 8,
            padding: "0px 8px 0px 30px",
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
              gap: 8,
              alignItems: "center",
              flexWrap: "nowrap",
              flexGrow: 1,
              alignSelf: "stretch",
            }}>
              <div style={{
                position: "relative",
                width: 85,
                display: "flex",
                flexDirection: "row",
                gap: 4,
                alignItems: "center",
                flexWrap: "nowrap",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>
                <span style={{
                  position: "relative",
                  fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 400,
                  fontSize: 17,
                  textAlign: "center",
                  whiteSpace: "nowrap",
                  lineHeight: "22px",
                  color: "var(--labels-vibrant-primary)",
                  flexShrink: 0,
                  alignSelf: "stretch",
                }}>􀈕</span>
                <div style={{
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  gap: -2,
                  justifyContent: "center",
                  alignItems: "flex-start",
                  flexWrap: "nowrap",
                  flexShrink: 0,
                }}>
                  <span style={{
                    position: "relative",
                    fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                    fontWeight: 400,
                    fontSize: 17,
                    whiteSpace: "nowrap",
                    lineHeight: "22px",
                    letterSpacing: "-0.430px",
                    color: "var(--labels-primary)",
                    flexShrink: 0,
                  }}>Philippines</span>
                </div>
              </div>
            </div>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              gap: 8,
              padding: "0px 8px 0px 0px",
              justifyContent: "flex-end",
              alignItems: "center",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <span style={{
                position: "relative",
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 17,
                textAlign: "right",
                whiteSpace: "nowrap",
                lineHeight: "22px",
                letterSpacing: "-0.430px",
                color: "var(--labels-vibrant-secondary)",
                flexShrink: 0,
              }}>2</span>
            </div>
          </div>
          <div style={{
            position: "relative",
            height: 44,
            display: "flex",
            flexDirection: "row",
            gap: 8,
            padding: "0px 8px 0px 30px",
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
              gap: 8,
              alignItems: "center",
              flexWrap: "nowrap",
              flexGrow: 1,
              alignSelf: "stretch",
            }}>
              <div style={{
                position: "relative",
                width: 85,
                display: "flex",
                flexDirection: "row",
                gap: 4,
                alignItems: "center",
                flexWrap: "nowrap",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>
                <span style={{
                  position: "relative",
                  fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 400,
                  fontSize: 17,
                  textAlign: "center",
                  whiteSpace: "nowrap",
                  lineHeight: "22px",
                  color: "var(--labels-vibrant-primary)",
                  flexShrink: 0,
                  alignSelf: "stretch",
                }}>􀈕</span>
                <div style={{
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  gap: -2,
                  justifyContent: "center",
                  alignItems: "flex-start",
                  flexWrap: "nowrap",
                  flexShrink: 0,
                }}>
                  <span style={{
                    position: "relative",
                    fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                    fontWeight: 400,
                    fontSize: 17,
                    whiteSpace: "nowrap",
                    lineHeight: "22px",
                    letterSpacing: "-0.430px",
                    color: "var(--labels-primary)",
                    flexShrink: 0,
                  }}>Palau</span>
                </div>
              </div>
            </div>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              gap: 8,
              padding: "0px 8px 0px 0px",
              justifyContent: "flex-end",
              alignItems: "center",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <span style={{
                position: "relative",
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 17,
                textAlign: "right",
                whiteSpace: "nowrap",
                lineHeight: "22px",
                letterSpacing: "-0.430px",
                color: "var(--labels-vibrant-secondary)",
                flexShrink: 0,
              }}>4</span>
            </div>
          </div>
          <div style={{
            position: "relative",
            height: 44,
            display: "flex",
            flexDirection: "row",
            gap: 8,
            padding: "0px 8px 0px 30px",
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
              gap: 8,
              alignItems: "center",
              flexWrap: "nowrap",
              flexGrow: 1,
              alignSelf: "stretch",
            }}>
              <div style={{
                position: "relative",
                width: 85,
                display: "flex",
                flexDirection: "row",
                gap: 4,
                alignItems: "center",
                flexWrap: "nowrap",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>
                <span style={{
                  position: "relative",
                  fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 400,
                  fontSize: 17,
                  textAlign: "center",
                  whiteSpace: "nowrap",
                  lineHeight: "22px",
                  color: "var(--labels-vibrant-primary)",
                  flexShrink: 0,
                  alignSelf: "stretch",
                }}>􀈕</span>
                <div style={{
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  gap: -2,
                  justifyContent: "center",
                  alignItems: "flex-start",
                  flexWrap: "nowrap",
                  flexShrink: 0,
                }}>
                  <span style={{
                    position: "relative",
                    fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                    fontWeight: 400,
                    fontSize: 17,
                    whiteSpace: "nowrap",
                    lineHeight: "22px",
                    letterSpacing: "-0.430px",
                    color: "var(--labels-primary)",
                    flexShrink: 0,
                  }}>BVI</span>
                </div>
              </div>
            </div>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              gap: 8,
              padding: "0px 8px 0px 0px",
              justifyContent: "flex-end",
              alignItems: "center",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <span style={{
                position: "relative",
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 17,
                textAlign: "right",
                whiteSpace: "nowrap",
                lineHeight: "22px",
                letterSpacing: "-0.430px",
                color: "var(--labels-vibrant-secondary)",
                flexShrink: 0,
              }}>13</span>
            </div>
          </div>
        </div>
      </div>
      <StatusBarAndMenuBar
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 1208,
          height: 24,
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
    // figma: Type=List
    "type=list": __body0,
    // figma: Type=List (Multi-level)
    "type=list (multi-level)": __body1,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default ExamplesSidebar;
