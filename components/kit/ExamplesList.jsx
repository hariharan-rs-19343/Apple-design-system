import { ButtonsTop } from '../actions/ButtonsTop.jsx';
import { ContentsDisclosure } from '../lists/ContentsDisclosure.jsx';
import { DateAndTimeCollapsed } from '../lists/DateAndTimeCollapsed.jsx';
import { Grabber3 } from '../lists/Grabber3.jsx';
import { IPhone17Pro } from '../kit/IPhone17Pro.jsx';
import { Row } from '../lists/Row.jsx';
import { RowButton } from '../lists/RowButton.jsx';
import { RowWithSwipeActions } from '../lists/RowWithSwipeActions.jsx';
import { ScrollEdgeEffectSoft } from '../kit/ScrollEdgeEffectSoft.jsx';
import { SectionTitle } from '../kit/SectionTitle.jsx';
import { Separator } from '../lists/Separator.jsx';
import { StatusBarIPhone2 } from '../navigation/StatusBarIPhone2.jsx';
import { Stepper } from '../lists/Stepper.jsx';
import { SubtitleSubheadline } from '../navigation/SubtitleSubheadline.jsx';
import { TitleLargeTitle } from '../navigation/TitleLargeTitle.jsx';
import { ToggleSwitch } from '../toggles/ToggleSwitch.jsx';

// figma node: 781:15374 Examples/List (3 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "type=" + __venc(p.type);

export function ExamplesList(_p = {}) {
  const props = { ..._p, type: _p.type ?? "full width" };
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
        backgroundColor: "var(--backgrounds-primary)",
        display: "flex",
        flexDirection: "column",
        padding: "177px 0px 177px 0px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          padding: "16px 0px 50px 0px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <SectionTitle style={{
              position: "relative",
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }} />
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
              height: 52,
              display: "flex",
              flexDirection: "column",
              padding: "0px 0px 1px 0px",
              justifyContent: "center",
              alignItems: "flex-start",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexGrow: 1,
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
                }}>Alexander Valley</span>
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
              height: 52,
              display: "flex",
              flexDirection: "column",
              padding: "0px 0px 1px 0px",
              justifyContent: "center",
              alignItems: "flex-start",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexGrow: 1,
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
                }}>Anderson Valley</span>
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
              height: 52,
              display: "flex",
              flexDirection: "column",
              padding: "0px 0px 1px 0px",
              justifyContent: "center",
              alignItems: "flex-start",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexGrow: 1,
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
                }}>Atlas Peak</span>
              </div>
            </div>
          </div>
          <SectionTitle
            style={{
              position: "relative",
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}
            text={"B"}
          />
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
              height: 52,
              display: "flex",
              flexDirection: "column",
              padding: "0px 0px 1px 0px",
              justifyContent: "center",
              alignItems: "flex-start",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexGrow: 1,
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
                }}>Bennett Valley</span>
              </div>
            </div>
          </div>
          <SectionTitle
            style={{
              position: "relative",
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}
            text={"C"}
          />
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
              height: 52,
              display: "flex",
              flexDirection: "column",
              padding: "0px 0px 1px 0px",
              justifyContent: "center",
              alignItems: "flex-start",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexGrow: 1,
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
                }}>Carneros</span>
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
              height: 52,
              display: "flex",
              flexDirection: "column",
              padding: "0px 0px 1px 0px",
              justifyContent: "center",
              alignItems: "flex-start",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexGrow: 1,
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
                }}>Calistoga</span>
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
              height: 52,
              display: "flex",
              flexDirection: "column",
              padding: "0px 0px 1px 0px",
              justifyContent: "center",
              alignItems: "flex-start",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexGrow: 1,
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
                }}>Chalk Hill</span>
              </div>
            </div>
          </div>
          <SectionTitle
            style={{
              position: "relative",
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}
            text={"D"}
          />
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
              height: 52,
              display: "flex",
              flexDirection: "column",
              padding: "0px 0px 1px 0px",
              justifyContent: "center",
              alignItems: "flex-start",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexGrow: 1,
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
                }}>Diamond Mountain</span>
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
              height: 52,
              display: "flex",
              flexDirection: "column",
              padding: "0px 0px 1px 0px",
              justifyContent: "center",
              alignItems: "flex-start",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexGrow: 1,
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
                }}>Dry Creek</span>
              </div>
            </div>
          </div>
          <SectionTitle
            style={{
              position: "relative",
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}
            text={"E"}
          />
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
              height: 52,
              display: "flex",
              flexDirection: "column",
              padding: "0px 0px 1px 0px",
              justifyContent: "center",
              alignItems: "flex-start",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexGrow: 1,
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
                }}>Fort Ross</span>
              </div>
            </div>
          </div>
          <SectionTitle
            style={{
              position: "relative",
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}
            text={"F"}
          />
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
              height: 52,
              display: "flex",
              flexDirection: "column",
              padding: "0px 0px 1px 0px",
              justifyContent: "center",
              alignItems: "flex-start",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexGrow: 1,
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
                }}>Green Valley</span>
              </div>
            </div>
          </div>
          <SectionTitle
            style={{
              position: "relative",
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}
            text={"G"}
          />
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
              height: 52,
              display: "flex",
              flexDirection: "column",
              padding: "0px 0px 1px 0px",
              justifyContent: "center",
              alignItems: "flex-start",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexGrow: 1,
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
                }}>Howell Mountain</span>
              </div>
            </div>
          </div>
          <SectionTitle
            style={{
              position: "relative",
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}
            text={"H"}
          />
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
              height: 52,
              display: "flex",
              flexDirection: "column",
              padding: "0px 0px 1px 0px",
              justifyContent: "center",
              alignItems: "flex-start",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexGrow: 1,
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
              </div>
            </div>
          </div>
        </div>
        <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 402,
            height: 187,
          }}>
          <ScrollEdgeEffectSoft
            style={{ transform: "scale(2.010, 0.935)", transformOrigin: "0 0" }}
            edge={"bottom"}
          />
        </div>
      </div>
      <div style={{
        position: "absolute",
        left: 0,
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
            <ButtonsTop
              style={{ position: "relative", height: 44, flexShrink: 0 }}
              type={"3 symbols"}
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
          <SubtitleSubheadline
            style={{
              position: "relative",
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
          height: 873,
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
        borderRadius: "0px 0px 40px 40px",
        backgroundColor: "var(--backgrounds-primary)",
        display: "flex",
        flexDirection: "column",
        padding: "177px 0px 177px 0px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          padding: "16px 0px 50px 0px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            backgroundColor: "var(--backgrounds-primary)",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <Row
              style={{
                position: "relative",
                height: 68,
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }}
              height={"tall"}
            />
            <RowWithSwipeActions
              style={{
                position: "relative",
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }}
              height={"tall"}
              swipe={"left"}
            />
            <Row
              style={{
                position: "relative",
                height: 68,
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }}
              height={"tall"}
            />
            <Row
              style={{
                position: "relative",
                height: 68,
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }}
              height={"tall"}
            />
            <Row
              style={{
                position: "relative",
                height: 68,
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }}
              height={"tall"}
            />
            <Row
              style={{
                position: "relative",
                height: 68,
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }}
              height={"tall"}
            />
          </div>
        </div>
        <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 402,
            height: 187,
          }}>
          <ScrollEdgeEffectSoft
            style={{ transform: "scale(2.010, 0.935)", transformOrigin: "0 0" }}
            edge={"top"}
          />
        </div>
      </div>
      <div style={{
        position: "absolute",
        left: 0,
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
            <ButtonsTop
              style={{ position: "relative", height: 44, flexShrink: 0 }}
              type={"3 symbols"}
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
          <SubtitleSubheadline
            style={{
              position: "relative",
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
          height: 873,
        }}
        color={"silver"}
      />
    </div>
  );
  const __body2 = () => (
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
        padding: "167px 0px 167px 0px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          padding: "16px 16px 50px 16px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            width: 362,
            height: 656,
            overflow: "hidden",
            borderRadius: 26,
            backgroundColor: "var(--backgrounds-grouped-secondary)",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            flexShrink: 0,
          }}>
            <Row
              style={{
                position: "relative",
                height: 52,
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }}
              height={"regular"}
            />
            <Row
              style={{
                position: "relative",
                height: 68,
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }}
              height={"tall"}
            />
            <Row
              style={{
                position: "relative",
                height: 68,
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }}
              showImage={true}
              showEditButton={false}
              showGrabber={false}
              height={"tall"}
            />
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
                      height: 22,
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "flex-end",
                      alignItems: "center",
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
                        letterSpacing: "-0.400px",
                        color: "var(--accents-blue)",
                        flexShrink: 0,
                      }}>Button</span>
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
                      gap: 12,
                      justifyContent: "flex-end",
                      alignItems: "center",
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
                        letterSpacing: "-0.400px",
                        color: "rgba(60,60,67,0.6)",
                        flexShrink: 0,
                      }}>Detail</span>
                      <ContentsDisclosure
                        style={{
                          position: "relative",
                          width: 8,
                          height: 32,
                          flexShrink: 0,
                        }}
                        disclosed={false}
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
                    <Grabber3 style={{
                        position: "relative",
                        flexShrink: 0,
                        alignSelf: "stretch",
                        height: "auto",
                      }} />
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
                      gap: 10,
                      padding: "0px 16px 0px 0px",
                      justifyContent: "flex-end",
                      alignItems: "flex-start",
                      flexWrap: "nowrap",
                      boxSizing: "border-box",
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
                        letterSpacing: "-0.400px",
                        color: "rgba(60,60,67,0.6)",
                        flexShrink: 0,
                      }}>Pop-up</span>
                      <span style={{
                        position: "relative",
                        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                        fontWeight: 400,
                        fontSize: 17,
                        textAlign: "right",
                        whiteSpace: "nowrap",
                        lineHeight: "22px",
                        color: "rgba(60,60,67,0.6)",
                        flexShrink: 0,
                      }}>􀆏</span>
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
                      <Stepper
                        style={{
                          position: "relative",
                          width: 92,
                          height: 32,
                          flexShrink: 0,
                        }}
                        mode={"light"}
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
                      <ToggleSwitch
                        style={{ position: "relative", width: 64, flexShrink: 0 }}
                        state={"on"}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <RowButton
              style={{
                position: "relative",
                height: 52,
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }}
              value={"default"}
            />
          </div>
        </div>
        <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 402,
            height: 167,
          }}>
          <ScrollEdgeEffectSoft
            style={{ transform: "scale(2.010, 0.835)", transformOrigin: "0 0" }}
            edge={"bottom"}
          />
        </div>
      </div>
      <div style={{
        position: "absolute",
        left: 0,
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
            <ButtonsTop
              style={{ position: "relative", height: 44, flexShrink: 0 }}
              type={"3 symbols"}
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
          <SubtitleSubheadline
            style={{
              position: "relative",
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
          height: 873,
        }}
        color={"silver"}
      />
    </div>
  );
  const __impls = {
    // figma: Type=Full Width + Section Headers
    "type=full width + section headers": __body0,
    // figma: Type=Full Width
    "type=full width": __body1,
    // figma: Type=Inset
    "type=inset": __body2,
  };
  return (__impls[__vkey(props)] ?? __body1)();
}
export default ExamplesList;
