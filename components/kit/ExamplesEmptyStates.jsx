import { ButtonsTop } from '../actions/ButtonsTop.jsx';
import { IPhone17Pro } from '../kit/IPhone17Pro.jsx';
import { StatusBarIPhone2 } from '../navigation/StatusBarIPhone2.jsx';
import { TitleLargeTitle } from '../navigation/TitleLargeTitle.jsx';

// figma node: 5581:40610 Examples/Empty States (3 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "config=" + __venc(p.config);

export function ExamplesEmptyStates(_p = {}) {
  const props = { ..._p, config: _p.config ?? "title and subtitle" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 402,
      height: 874,
      borderRadius: 44,
      position: "relative",
      ...props.style,
    }}>
      <svg width={402} height={874} viewBox="0 0 402 874" fill="none" style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 402,
        height: 874,
        overflow: "hidden",
        borderRadius: 50,
        display: "flex",
        flexDirection: "column",
        padding: "167px 16px 10px 16px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        color: "var(--backgrounds-primary)",
      }}>
        <path d={"M 0 50 C 0 22.386 22.386 0 50 0 L 352 0 C 379.614 0 402 22.386 402 50 L 402 824 C 402 851.614 379.614 874 352 874 L 50 874 C 22.386 874 0 851.614 0 824 L 0 50 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 402,
        height: 874,
        borderRadius: 44,
        display: "flex",
        flexDirection: "column",
        padding: "0px 34px 36px 34px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
      }}>
        <div style={{
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          gap: 16,
          padding: "253px 16px 253px 16px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 590,
            fontSize: 41,
            textAlign: "center",
            lineHeight: "100%",
            color: "rgb(0,136,255)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>􀋃</span>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <span style={{
              position: "relative",
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 590,
              fontSize: 22,
              textAlign: "center",
              lineHeight: "100%",
              color: "var(--labels-primary)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>VIP</span>
            <span style={{
              position: "relative",
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 22,
              textAlign: "center",
              lineHeight: "100%",
              color: "rgba(60,60,67,0.6)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>Quickly access mail from important people in your VIP mailbox</span>
          </div>
        </div>
        <div style={{
          position: "relative",
          height: 52,
          borderRadius: 1000,
          display: "flex",
          flexDirection: "row",
          gap: 4,
          padding: "6px 20px 6px 20px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 334,
            height: 52,
          }}>
            <svg width={334} height={52} viewBox="0 0 334 52" fill="none" style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 334,
              height: 52,
              borderRadius: 1000,
              filter: "drop-shadow(0px 8px 40px rgba(0,0,0,0.12))",
            }}>
              <path d={"M 0 26 C 0 11.641 11.641 0 26 0 L 308 0 C 322.359 0 334 11.641 334 26 L 334 26 C 334 40.359 322.359 52 308 52 L 26 52 C 11.641 52 0 40.359 0 26 L 0 26 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
          <div style={{
            position: "relative",
            height: 36,
            borderRadius: 100,
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
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
              flexShrink: 0,
            }}>Add VIP</span>
          </div>
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
      borderRadius: 44,
      position: "relative",
      ...props.style,
    }}>
      <svg width={402} height={874} viewBox="0 0 402 874" fill="none" style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 402,
        height: 874,
        overflow: "hidden",
        borderRadius: 50,
        display: "flex",
        flexDirection: "column",
        padding: "167px 16px 10px 16px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        color: "var(--backgrounds-primary)",
      }}>
        <path d={"M 0 50 C 0 22.386 22.386 0 50 0 L 352 0 C 379.614 0 402 22.386 402 50 L 402 824 C 402 851.614 379.614 874 352 874 L 50 874 C 22.386 874 0 851.614 0 824 L 0 50 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 402,
        height: 874,
        borderRadius: 44,
        display: "flex",
        flexDirection: "column",
        padding: "0px 34px 36px 34px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
      }}>
        <div style={{
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          gap: 16,
          padding: "253px 16px 253px 16px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            width: 50,
            height: 50,
            overflow: "hidden",
            borderRadius: 100,
            flexShrink: 0,
          }}>
            <svg width={50} height={50} viewBox="0 0 50 50" fill="none" style={{
              position: "absolute",
              left: 0.5,
              top: 0.5,
              width: 50,
              height: 50,
              opacity: 0.15,
              color: "var(--accents-pink)",
            }}>
              <path d={"M 0 0 L 50 0 L 50 50 L 0 50 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
            <span style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 50,
              height: 50,
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 590,
              fontSize: 22,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "100%",
              color: "var(--accents-pink)",
            }}>􀆅</span>
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <span style={{
              position: "relative",
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 590,
              fontSize: 22,
              textAlign: "center",
              lineHeight: "100%",
              color: "var(--labels-primary)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>No Reminders</span>
            <span style={{
              position: "relative",
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 22,
              textAlign: "center",
              lineHeight: "100%",
              color: "rgba(60,60,67,0.6)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>You’ve completed all tasks</span>
          </div>
        </div>
        <div style={{
          position: "relative",
          height: 52,
          borderRadius: 1000,
          display: "flex",
          flexDirection: "row",
          gap: 4,
          padding: "6px 20px 6px 20px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 334,
            height: 52,
          }}>
            <svg width={334} height={52} viewBox="0 0 334 52" fill="none" style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 334,
              height: 52,
              borderRadius: 1000,
              filter: "drop-shadow(0px 8px 40px rgba(0,0,0,0.12))",
            }}>
              <path d={"M 0 26 C 0 11.641 11.641 0 26 0 L 308 0 C 322.359 0 334 11.641 334 26 L 334 26 C 334 40.359 322.359 52 308 52 L 26 52 C 11.641 52 0 40.359 0 26 L 0 26 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
          <div style={{
            position: "relative",
            height: 36,
            borderRadius: 100,
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
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
              flexShrink: 0,
            }}>New Reminder</span>
          </div>
        </div>
      </div>
      <div style={{
        position: "absolute",
        left: -0.5,
        top: 62,
        width: 402,
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: "0px 0px 10px 0px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
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
          padding: "0px 16px 0px 16px",
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
  const __body2 = () => (
    <div className={props.className} style={{
      width: 402,
      height: 874,
      borderRadius: 44,
      position: "relative",
      ...props.style,
    }}>
      <svg width={402} height={874} viewBox="0 0 402 874" fill="none" style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 402,
        height: 874,
        overflow: "hidden",
        borderRadius: 50,
        display: "flex",
        flexDirection: "column",
        padding: "167px 16px 10px 16px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        color: "var(--backgrounds-primary)",
      }}>
        <path d={"M 0 50 C 0 22.386 22.386 0 50 0 L 352 0 C 379.614 0 402 22.386 402 50 L 402 824 C 402 851.614 379.614 874 352 874 L 50 874 C 22.386 874 0 851.614 0 824 L 0 50 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 402,
        height: 874,
        borderRadius: 44,
        display: "flex",
        flexDirection: "column",
        padding: "0px 34px 36px 34px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
      }}>
        <div style={{
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          padding: "253px 16px 253px 16px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <span style={{
              position: "relative",
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 590,
              fontSize: 22,
              textAlign: "center",
              lineHeight: "100%",
              color: "rgb(0,0,0)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>No Notes</span>
            <span style={{
              position: "relative",
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 22,
              textAlign: "center",
              lineHeight: "100%",
              color: "rgba(60,60,67,0.6)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>Start by adding a note</span>
          </div>
        </div>
        <div style={{
          position: "relative",
          height: 52,
          borderRadius: 1000,
          display: "flex",
          flexDirection: "row",
          gap: 4,
          padding: "6px 20px 6px 20px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 334,
            height: 52,
          }}>
            <svg width={334} height={52} viewBox="0 0 334 52" fill="none" style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 334,
              height: 52,
              borderRadius: 1000,
              filter: "drop-shadow(0px 8px 40px rgba(0,0,0,0.12))",
            }}>
              <path d={"M 0 26 C 0 11.641 11.641 0 26 0 L 308 0 C 322.359 0 334 11.641 334 26 L 334 26 C 334 40.359 322.359 52 308 52 L 26 52 C 11.641 52 0 40.359 0 26 L 0 26 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
          <div style={{
            position: "relative",
            height: 36,
            borderRadius: 100,
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
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
              flexShrink: 0,
            }}>Create Note</span>
          </div>
        </div>
      </div>
      <div style={{
        position: "absolute",
        left: -0.5,
        top: 62,
        width: 402,
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: "0px 0px 10px 0px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
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
          padding: "0px 16px 0px 16px",
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
    // figma: Config=Large Symbol
    "config=large symbol": __body0,
    // figma: Config=Symbol in Circle
    "config=symbol in circle": __body1,
    // figma: Config=Title and Subtitle
    "config=title and subtitle": __body2,
  };
  return (__impls[__vkey(props)] ?? __body2)();
}
export default ExamplesEmptyStates;
