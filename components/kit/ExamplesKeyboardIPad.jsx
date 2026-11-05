import { ButtonBottom48PtBack } from './ButtonBottom48PtBack.jsx';
import { HomeIndicator } from '../bezels/HomeIndicator.jsx';
import { IPadPro11M4Silver } from './IPadPro11M4Silver.jsx';
import { Keyboard2 } from './Keyboard2.jsx';
import { KeyboardIPadEmailLight } from './KeyboardIPadEmailLight.jsx';
import { KeyboardIPadEmojiLight } from './KeyboardIPadEmojiLight.jsx';
import { KeyboardIPadFindAndReplace } from './KeyboardIPadFindAndReplace.jsx';
import { KeyboardIPadNumbersAndSpecial } from './KeyboardIPadNumbersAndSpecial.jsx';
import { MaterialsModeOptions } from '../materials/MaterialsModeOptions.jsx';
import { StatusBarIPadFalseIPad } from './StatusBarIPadFalseIPad.jsx';

// figma node: 2608:26918 Examples/Keyboard - iPad (6 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "type=" + __venc(p.type);

export function ExamplesKeyboardIPad(_p = {}) {
  const props = { ..._p, type: _p.type ?? "email" };
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
        alignItems: "flex-start",
        flexWrap: "nowrap",
      }}>
        <div style={{
          position: "relative",
          height: 71,
          display: "flex",
          flexDirection: "column",
          gap: 3,
          padding: "0px 4px 0px 4px",
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
            width: 1210,
            height: 71,
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
                width: 1210,
                height: 71,
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
              left: 583,
              top: 11,
              width: 36,
              height: 22,
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 590,
              fontSize: 17,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "22px",
              letterSpacing: "-0.430px",
              color: "var(--labels-primary)",
            }}>Title</span>
            <div style={{
              position: "absolute",
              left: 1038,
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
        </div>
        <div style={{
          position: "relative",
          height: 763,
          flexShrink: 0,
          alignSelf: "stretch",
        }} />
      </div>
      <KeyboardIPadFindAndReplace style={{
          position: "absolute",
          left: 0,
          top: 406,
          width: 1210,
          height: 428,
        }} />
      <StatusBarIPadFalseIPad style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 1208,
        }} />
      <div style={{
          position: "absolute",
          left: 0,
          top: 814,
          width: 1212,
          height: 20,
        }}>
        <HomeIndicator
          style={{ transform: "scale(3.030, 1.026)", transformOrigin: "0 0" }}
          device={"iPad"}
          orientation={"portrait"}
        />
      </div>
      <IPadPro11M4Silver style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 1210,
          height: 834,
        }} />
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
        alignItems: "flex-start",
        flexWrap: "nowrap",
      }}>
        <div style={{
          position: "relative",
          height: 71,
          display: "flex",
          flexDirection: "column",
          gap: 3,
          padding: "0px 4px 0px 4px",
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
            width: 1210,
            height: 71,
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
                width: 1210,
                height: 71,
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
              left: 583,
              top: 11,
              width: 36,
              height: 22,
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 590,
              fontSize: 17,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "22px",
              letterSpacing: "-0.430px",
              color: "var(--labels-primary)",
            }}>Title</span>
            <div style={{
              position: "absolute",
              left: 1038,
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
        </div>
        <div style={{
          position: "relative",
          height: 763,
          flexShrink: 0,
          alignSelf: "stretch",
        }} />
      </div>
      <KeyboardIPadEmojiLight style={{
          position: "absolute",
          left: 0,
          top: 406,
          width: 1210,
          height: 428,
        }} />
      <StatusBarIPadFalseIPad style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 1208,
        }} />
      <div style={{
          position: "absolute",
          left: 0,
          top: 814,
          width: 1212,
          height: 20,
        }}>
        <HomeIndicator
          style={{ transform: "scale(3.030, 1.026)", transformOrigin: "0 0" }}
          device={"iPad"}
          orientation={"portrait"}
        />
      </div>
      <IPadPro11M4Silver style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 1210,
          height: 834,
        }} />
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
        alignItems: "flex-start",
        flexWrap: "nowrap",
      }}>
        <div style={{
          position: "relative",
          height: 71,
          display: "flex",
          flexDirection: "column",
          gap: 3,
          padding: "0px 4px 0px 4px",
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
            width: 1210,
            height: 71,
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
                width: 1210,
                height: 71,
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
              left: 583,
              top: 11,
              width: 36,
              height: 22,
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 590,
              fontSize: 17,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "22px",
              letterSpacing: "-0.430px",
              color: "var(--labels-primary)",
            }}>Title</span>
            <div style={{
              position: "absolute",
              left: 1038,
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
        </div>
        <div style={{
          position: "relative",
          height: 763,
          flexShrink: 0,
          alignSelf: "stretch",
        }} />
      </div>
      <KeyboardIPadEmailLight style={{
          position: "absolute",
          left: 0,
          top: 406,
          width: 1210,
          height: 428,
        }} />
      <StatusBarIPadFalseIPad style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 1208,
        }} />
      <div style={{
          position: "absolute",
          left: 0,
          top: 814,
          width: 1212,
          height: 20,
        }}>
        <HomeIndicator
          style={{ transform: "scale(3.030, 1.026)", transformOrigin: "0 0" }}
          device={"iPad"}
          orientation={"portrait"}
        />
      </div>
      <IPadPro11M4Silver style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 1210,
          height: 834,
        }} />
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
        alignItems: "flex-start",
        flexWrap: "nowrap",
      }}>
        <div style={{
          position: "relative",
          height: 71,
          display: "flex",
          flexDirection: "column",
          gap: 3,
          padding: "0px 4px 0px 4px",
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
            width: 1210,
            height: 71,
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
                width: 1210,
                height: 71,
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
              left: 583,
              top: 11,
              width: 36,
              height: 22,
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 590,
              fontSize: 17,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "22px",
              letterSpacing: "-0.430px",
              color: "var(--labels-primary)",
            }}>Title</span>
            <div style={{
              position: "absolute",
              left: 1038,
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
        </div>
        <div style={{
          position: "relative",
          height: 763,
          flexShrink: 0,
          alignSelf: "stretch",
        }} />
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
      <StatusBarIPadFalseIPad style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 1208,
        }} />
      <div style={{
          position: "absolute",
          left: 0,
          top: 814,
          width: 1212,
          height: 20,
        }}>
        <HomeIndicator
          style={{ transform: "scale(3.030, 1.026)", transformOrigin: "0 0" }}
          device={"iPad"}
          orientation={"portrait"}
        />
      </div>
      <IPadPro11M4Silver style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 1210,
          height: 834,
        }} />
    </div>
  );
  const __body4 = () => (
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
        alignItems: "flex-start",
        flexWrap: "nowrap",
      }}>
        <div style={{
          position: "relative",
          height: 71,
          display: "flex",
          flexDirection: "column",
          gap: 3,
          padding: "0px 4px 0px 4px",
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
            width: 1210,
            height: 71,
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
                width: 1210,
                height: 71,
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
              left: 583,
              top: 11,
              width: 36,
              height: 22,
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 590,
              fontSize: 17,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "22px",
              letterSpacing: "-0.430px",
              color: "var(--labels-primary)",
            }}>Title</span>
            <div style={{
              position: "absolute",
              left: 1038,
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
        </div>
        <div style={{
          position: "relative",
          height: 763,
          flexShrink: 0,
          alignSelf: "stretch",
        }} />
      </div>
      <KeyboardIPadNumbersAndSpecial style={{
          position: "absolute",
          left: 0,
          top: 406,
          width: 1210,
        }} />
      <StatusBarIPadFalseIPad style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 1208,
        }} />
      <div style={{
          position: "absolute",
          left: 0,
          top: 814,
          width: 1212,
          height: 20,
        }}>
        <HomeIndicator
          style={{ transform: "scale(3.030, 1.026)", transformOrigin: "0 0" }}
          device={"iPad"}
          orientation={"portrait"}
        />
      </div>
      <IPadPro11M4Silver style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 1210,
          height: 834,
        }} />
    </div>
  );
  const __body5 = () => (
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
        alignItems: "flex-start",
        flexWrap: "nowrap",
      }}>
        <div style={{
          position: "relative",
          height: 71,
          display: "flex",
          flexDirection: "column",
          gap: 3,
          padding: "0px 4px 0px 4px",
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
            width: 1210,
            height: 71,
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
                width: 1210,
                height: 71,
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
              left: 583,
              top: 11,
              width: 36,
              height: 22,
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 590,
              fontSize: 17,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "22px",
              letterSpacing: "-0.430px",
              color: "var(--labels-primary)",
            }}>Title</span>
            <div style={{
              position: "absolute",
              left: 1038,
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
        </div>
        <div style={{
          position: "relative",
          height: 763,
          flexShrink: 0,
          alignSelf: "stretch",
        }} />
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
      <StatusBarIPadFalseIPad style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 1208,
        }} />
      <div style={{
          position: "absolute",
          left: 0,
          top: 814,
          width: 1212,
          height: 20,
        }}>
        <HomeIndicator
          style={{ transform: "scale(3.030, 1.026)", transformOrigin: "0 0" }}
          device={"iPad"}
          orientation={"portrait"}
        />
      </div>
      <IPadPro11M4Silver style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 1210,
          height: 834,
        }} />
    </div>
  );
  const __impls = {
    // figma: Type=Find and Replace
    "type=find and replace": __body0,
    // figma: Type=Emoji
    "type=emoji": __body1,
    // figma: Type=Email
    "type=email": __body2,
    // figma: Type=Text (Shift)
    "type=text (shift)": __body3,
    // figma: Type=Text
    "type=text": __body4,
    // figma: Type=Text (Enter Emphasized)
    "type=text (enter emphasized)": __body5,
  };
  return (__impls[__vkey(props)] ?? __body2)();
}
export default ExamplesKeyboardIPad;
