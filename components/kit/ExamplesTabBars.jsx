import { ButtonsTop } from '../actions/ButtonsTop.jsx';
import { IPadProM411 } from '../examples-sidebar/IPadProM411.jsx';
import { SearchAccessory } from '../toolbars/SearchAccessory.jsx';
import { StatusBarAndMenuBar } from '../home-screen/StatusBarAndMenuBar.jsx';
import { TabBarButtonIPadText } from '../tab-bars/TabBarButtonIPadText.jsx';

// figma node: 5735:66270 Examples/Tab Bars (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "type=" + __venc(p.type);

export function ExamplesTabBars(_p = {}) {
  const props = { ..._p, type: _p.type ?? "with search" };
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
          position: "absolute",
          left: 402.5,
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
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
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
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
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
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 8,
          padding: "20px 0px 20px 0px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <SearchAccessory
            style={{ position: "relative", flexGrow: 1, width: "auto" }}
            showFilters={false}
          />
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
          position: "absolute",
          left: 402.5,
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
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
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
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
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
    // figma: Type=With Search
    "type=with search": __body0,
    // figma: Type=Without Search
    "type=without search": __body1,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default ExamplesTabBars;
