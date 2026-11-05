import { DateAndTimeCollapsed } from '../lists/DateAndTimeCollapsed.jsx';
import { DateAndTimePickers } from '../surfaces/DateAndTimePickers.jsx';
import { IPhone17Pro } from '../kit/IPhone17Pro.jsx';
import { ScrollEdgeEffectSoft } from '../kit/ScrollEdgeEffectSoft.jsx';
import { Separator } from '../lists/Separator.jsx';
import { StatusBarIPhone2 } from '../navigation/StatusBarIPhone2.jsx';

// figma node: 5661:46038 Examples/Picker (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "type=" + __venc(p.type);

export function ExamplesPicker2(_p = {}) {
  const props = { ..._p, type: _p.type ?? "compact" };
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
        borderRadius: 50,
        backgroundColor: "var(--backgrounds-grouped-primary)",
        display: "flex",
        flexDirection: "column",
        padding: "116px 16px 10px 16px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
      }}>
        <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 402,
            height: 116,
          }}>
          <ScrollEdgeEffectSoft
            style={{ transform: "scale(2.010, 0.580)", transformOrigin: "0 0" }}
            edge={"top"}
          />
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
        }}>
          <DateAndTimePickers
            style={{
              position: "relative",
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}
            style2={"compact"}
          />
        </div>
      </div>
      <div style={{
        position: "absolute",
        left: 0,
        top: 62,
        width: 402,
        display: "flex",
        flexDirection: "row",
        padding: "0px 16px 10px 16px",
        justifyContent: "space-between",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
      }}>
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
      <StatusBarIPhone2 style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 402,
        }} />
      <IPhone17Pro
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 402,
          height: 874,
        }}
        color={"silver"}
      />
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
        borderRadius: 50,
        backgroundColor: "var(--backgrounds-grouped-primary)",
        display: "flex",
        flexDirection: "column",
        padding: "116px 16px 10px 16px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
      }}>
        <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 402,
            height: 116,
          }}>
          <ScrollEdgeEffectSoft
            style={{ transform: "scale(2.010, 0.580)", transformOrigin: "0 0" }}
            edge={"top"}
          />
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
        }}>
          <div style={{
            position: "relative",
            overflow: "hidden",
            borderRadius: 26,
            backgroundColor: "var(--backgrounds-grouped-secondary)",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <DateAndTimePickers
              style={{
                position: "relative",
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }}
              style2={"compact"}
            />
          </div>
          <div style={{
            position: "relative",
            overflow: "hidden",
            borderRadius: 26,
            backgroundColor: "var(--backgrounds-grouped-secondary)",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              height: 52,
              display: "flex",
              flexDirection: "row",
              padding: "0px 16px 0px 16px",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <div style={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                padding: "0px 0px 1px 0px",
                justifyContent: "center",
                alignItems: "flex-start",
                flexWrap: "nowrap",
                boxSizing: "border-box",
                flexGrow: 1,
                alignSelf: "stretch",
              }}>
                <Separator
                  style={{
                    position: "relative",
                    height: 1,
                    flexShrink: 0,
                    alignSelf: "stretch",
                    width: "auto",
                  }}
                  mode={"light"}
                />
                <div style={{
                  position: "relative",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  flexWrap: "nowrap",
                  flexGrow: 1,
                  alignSelf: "stretch",
                }}>
                  <span style={{
                    position: "relative",
                    fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                    fontWeight: 400,
                    fontSize: 17,
                    whiteSpace: "nowrap",
                    lineHeight: "22px",
                    letterSpacing: "-0.430px",
                    color: "var(--labels-primary)",
                    flexGrow: 1,
                    alignSelf: "stretch",
                  }}>Title</span>
                  <div style={{
                    position: "relative",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-end",
                    alignItems: "center",
                    flexWrap: "nowrap",
                    flexShrink: 0,
                    alignSelf: "stretch",
                  }}>
                    <div style={{
                      position: "relative",
                      display: "flex",
                      flexDirection: "row",
                      gap: 6,
                      justifyContent: "flex-end",
                      alignItems: "center",
                      flexWrap: "nowrap",
                      flexShrink: 0,
                    }}>
                      <DateAndTimeCollapsed
                        style={{
                          position: "relative",
                          height: 34,
                          width: 198,
                          flexShrink: 0,
                        }}
                        month={"June"}
                        year={"2024"}
                        state={"default"}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div style={{
              position: "relative",
              height: 52,
              display: "flex",
              flexDirection: "row",
              padding: "0px 16px 0px 16px",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <div style={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                padding: "0px 0px 1px 0px",
                justifyContent: "center",
                alignItems: "flex-start",
                flexWrap: "nowrap",
                boxSizing: "border-box",
                flexGrow: 1,
                alignSelf: "stretch",
              }}>
                <Separator
                  style={{
                    position: "relative",
                    height: 1,
                    flexShrink: 0,
                    alignSelf: "stretch",
                    width: "auto",
                  }}
                  mode={"light"}
                />
                <div style={{
                  position: "relative",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  flexWrap: "nowrap",
                  flexGrow: 1,
                  alignSelf: "stretch",
                }}>
                  <span style={{
                    position: "relative",
                    fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                    fontWeight: 400,
                    fontSize: 17,
                    whiteSpace: "nowrap",
                    lineHeight: "22px",
                    letterSpacing: "-0.430px",
                    color: "var(--labels-primary)",
                    flexGrow: 1,
                    alignSelf: "stretch",
                  }}>Title</span>
                  <div style={{
                    position: "relative",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-end",
                    alignItems: "center",
                    flexWrap: "nowrap",
                    flexShrink: 0,
                    alignSelf: "stretch",
                  }}>
                    <div style={{
                      position: "relative",
                      display: "flex",
                      flexDirection: "row",
                      gap: 8,
                      justifyContent: "flex-end",
                      alignItems: "center",
                      flexWrap: "nowrap",
                      flexShrink: 0,
                    }}>
                      <DateAndTimeCollapsed
                        style={{
                          position: "relative",
                          height: 34,
                          width: 86,
                          flexShrink: 0,
                        }}
                        month={"June"}
                        year={"2024"}
                        showDate={false}
                        state={"default"}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div style={{
              position: "relative",
              height: 52,
              display: "flex",
              flexDirection: "row",
              padding: "0px 16px 0px 16px",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <div style={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                padding: "0px 0px 1px 0px",
                justifyContent: "center",
                alignItems: "flex-start",
                flexWrap: "nowrap",
                boxSizing: "border-box",
                flexGrow: 1,
                alignSelf: "stretch",
              }}>
                <Separator
                  style={{
                    position: "relative",
                    height: 1,
                    flexShrink: 0,
                    alignSelf: "stretch",
                    width: "auto",
                  }}
                  mode={"light"}
                />
                <div style={{
                  position: "relative",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  flexWrap: "nowrap",
                  flexGrow: 1,
                  alignSelf: "stretch",
                }}>
                  <span style={{
                    position: "relative",
                    fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                    fontWeight: 400,
                    fontSize: 17,
                    whiteSpace: "nowrap",
                    lineHeight: "22px",
                    letterSpacing: "-0.430px",
                    color: "var(--labels-primary)",
                    flexGrow: 1,
                    alignSelf: "stretch",
                  }}>Title</span>
                  <div style={{
                    position: "relative",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-end",
                    alignItems: "center",
                    flexWrap: "nowrap",
                    flexShrink: 0,
                    alignSelf: "stretch",
                  }}>
                    <div style={{
                      position: "relative",
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "flex-end",
                      alignItems: "center",
                      flexWrap: "nowrap",
                      flexShrink: 0,
                    }}>
                      <DateAndTimeCollapsed
                        style={{
                          position: "relative",
                          height: 34,
                          width: 106,
                          flexShrink: 0,
                        }}
                        month={"June"}
                        year={"2024"}
                        showTime={false}
                        state={"default"}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{
        position: "absolute",
        left: 0,
        top: 62,
        width: 402,
        display: "flex",
        flexDirection: "row",
        padding: "0px 16px 10px 16px",
        justifyContent: "space-between",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
      }}>
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
      <StatusBarIPhone2 style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 402,
        }} />
      <IPhone17Pro
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 402,
          height: 874,
        }}
        color={"silver"}
      />
    </div>
  );
  const __impls = {
    // figma: Type=Inline
    "type=inline": __body0,
    // figma: Type=Compact
    "type=compact": __body1,
  };
  return (__impls[__vkey(props)] ?? __body1)();
}
export default ExamplesPicker2;
