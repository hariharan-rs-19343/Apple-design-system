import { SwipeActionsLarge } from '../actions/SwipeActionsLarge.jsx';
import { SwipeActionsSmall } from './SwipeActionsSmall.jsx';
import { Trailing2 } from './Trailing2.jsx';

// figma node: 550:49969 Row with Swipe Actions (4 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "height=" + __venc(p.height) + '|' + "swipe=" + __venc(p.swipe);

export function RowWithSwipeActions(_p = {}) {
  const props = { ..._p, height: _p.height ?? "regular", swipe: _p.swipe ?? "right", title: _p.title ?? "Title", showAction1: _p.showAction1 ?? true, showSubtitle: _p.showSubtitle ?? true, showAction2: _p.showAction2 ?? true, showAction3: _p.showAction3 ?? true, subtitle: _p.subtitle ?? "Subtitle" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 402,
      overflow: "hidden",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "0px 16px 0px 16px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 50,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon1 ?? <SwipeActionsSmall label={"Action"} />}</div>
        <div style={{
          position: "relative",
          width: 50,
          borderRadius: 100,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "absolute",
            left: 0,
            top: 53,
            width: 49,
            height: 20,
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 510,
            fontSize: 15,
            textAlign: "center",
            lineHeight: "20px",
            color: "rgba(60,60,67,0.6)",
          }}>Action</span>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 50,
            height: 50,
            borderRadius: 100,
            backgroundColor: "var(--grays-gray)",
          }}>
            <span style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 50,
              height: 50,
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 17,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "22px",
              color: "var(--grays-white)",
            }}>􀓞</span>
          </div>
        </div>
        <div style={{
          position: "relative",
          width: 50,
          borderRadius: 100,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "absolute",
            left: 0,
            top: 53,
            width: 49,
            height: 20,
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 510,
            fontSize: 15,
            textAlign: "center",
            lineHeight: "20px",
            color: "rgba(60,60,67,0.6)",
          }}>Action</span>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 50,
            height: 50,
            borderRadius: 100,
            backgroundColor: "var(--accents-red)",
          }}>
            <span style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 50,
              height: 50,
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 17,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "22px",
              color: "var(--grays-white)",
            }}>􀓞</span>
          </div>
        </div>
      </div>
      <div style={{
        position: "relative",
        borderRadius: 100,
        backgroundColor: "var(--grays-gray-5)",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        padding: "0px 16px 0px 16px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 584,
          borderTop: "0.500px solid rgba(0,0,0,0.12)",
          borderRight: "0.500px solid rgba(0,0,0,0.12)",
          borderBottom: "0.330px solid rgba(0,0,0,0.12)",
          borderLeft: "0.500px solid rgba(0,0,0,0.12)",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            height: 60,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            flexGrow: 1,
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
              flexShrink: 0,
              alignSelf: "stretch",
            }}>{props.title}</span>
            {props.showSubtitle && (
            <span style={{
              position: "relative",
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 15,
              whiteSpace: "nowrap",
              lineHeight: "20px",
              letterSpacing: "-0.230px",
              color: "rgba(60,60,67,0.6)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>{props.subtitle}</span>
            )}
          </div>
          <div style={{ position: "relative", width: 68, flexShrink: 0 }}>{props.icon4 ?? <Trailing2 showSymbol={false} showCheckmark={false} showInfo={false} type={"default"} />}</div>
        </div>
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 402,
      overflow: "hidden",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "0px 16px 0px 16px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.showAction3 && (
        <div style={{
            position: "relative",
            width: 52,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon1 ?? <SwipeActionsLarge />}</div>
        )}
        {props.showAction2 && (
        <div style={{
          position: "relative",
          width: 52,
          borderRadius: 100,
          backgroundColor: "var(--grays-gray)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 52,
            height: 52,
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 17,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "22px",
            color: "var(--grays-white)",
          }}>􀓞</span>
        </div>
        )}
        {props.showAction1 && (
        <div style={{
          position: "relative",
          width: 52,
          borderRadius: 100,
          backgroundColor: "var(--accents-red)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 52,
            height: 52,
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 17,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "22px",
            color: "var(--grays-white)",
          }}>􀓞</span>
        </div>
        )}
      </div>
      <div style={{
        position: "relative",
        borderRadius: 100,
        backgroundColor: "var(--grays-gray-5)",
        display: "flex",
        flexDirection: "row",
        padding: "0px 16px 0px 16px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 584,
          borderTop: "0.500px solid rgba(0,0,0,0.12)",
          borderRight: "0.500px solid rgba(0,0,0,0.12)",
          borderBottom: "0.330px solid rgba(0,0,0,0.12)",
          borderLeft: "0.500px solid rgba(0,0,0,0.12)",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
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
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.title}</span>
          <Trailing2
            style={{ position: "relative", width: 106, flexShrink: 0 }}
            showCheckmark={false}
            showInfo={false}
            type={"default"}
          />
        </div>
      </div>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 402,
      overflow: "hidden",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "0px 16px 0px 0px",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 100,
        backgroundColor: "var(--grays-gray-5)",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        padding: "0px 16px 0px 16px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 588,
          borderTop: "0.500px solid rgba(0,0,0,0.12)",
          borderRight: "0.500px solid rgba(0,0,0,0.12)",
          borderBottom: "0.330px solid rgba(0,0,0,0.12)",
          borderLeft: "0.500px solid rgba(0,0,0,0.12)",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            height: 60,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            flexGrow: 1,
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
              flexShrink: 0,
              alignSelf: "stretch",
            }}>{props.title}</span>
            {props.showSubtitle && (
            <span style={{
              position: "relative",
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 15,
              whiteSpace: "nowrap",
              lineHeight: "20px",
              letterSpacing: "-0.230px",
              color: "rgba(60,60,67,0.6)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>{props.subtitle}</span>
            )}
          </div>
          <Trailing2
            style={{ position: "relative", width: 106, flexShrink: 0 }}
            showSymbol={true}
            showCheckmark={false}
            showInfo={false}
            type={"default"}
          />
        </div>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 50,
          borderRadius: 100,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "absolute",
            left: 0,
            top: 53,
            width: 49,
            height: 20,
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 510,
            fontSize: 15,
            textAlign: "center",
            lineHeight: "20px",
            color: "rgba(60,60,67,0.6)",
          }}>Action</span>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 50,
            height: 50,
            borderRadius: 100,
            backgroundColor: "rgb(255,141,40)",
          }}>
            <span style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 50,
              height: 50,
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 17,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "22px",
              color: "var(--grays-white)",
            }}>􀓞</span>
          </div>
        </div>
        <div style={{
          position: "relative",
          width: 50,
          borderRadius: 100,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "absolute",
            left: 0,
            top: 53,
            width: 49,
            height: 20,
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 510,
            fontSize: 15,
            textAlign: "center",
            lineHeight: "20px",
            color: "rgba(60,60,67,0.6)",
          }}>Action</span>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 50,
            height: 50,
            borderRadius: 100,
            backgroundColor: "var(--accents-indigo)",
          }}>
            <span style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 50,
              height: 50,
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 17,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "22px",
              color: "var(--grays-white)",
            }}>􀓞</span>
          </div>
        </div>
        <div style={{
          position: "relative",
          width: 50,
          borderRadius: 100,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "absolute",
            left: 0,
            top: 53,
            width: 49,
            height: 20,
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 510,
            fontSize: 15,
            textAlign: "center",
            lineHeight: "20px",
            color: "rgba(60,60,67,0.6)",
          }}>Action</span>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 50,
            height: 50,
            borderRadius: 100,
            backgroundColor: "var(--accents-green)",
          }}>
            <span style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 50,
              height: 50,
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 17,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "22px",
              color: "var(--grays-white)",
            }}>􀓞</span>
          </div>
        </div>
      </div>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 402,
      overflow: "hidden",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "0px 16px 0px 0px",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 100,
        backgroundColor: "var(--grays-gray-5)",
        display: "flex",
        flexDirection: "row",
        padding: "0px 16px 0px 16px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 600,
          borderTop: "0.500px solid rgba(0,0,0,0.12)",
          borderRight: "0.500px solid rgba(0,0,0,0.12)",
          borderBottom: "0.330px solid rgba(0,0,0,0.12)",
          borderLeft: "0.500px solid rgba(0,0,0,0.12)",
          display: "flex",
          flexDirection: "row",
          padding: "0px 16px 0px 0px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
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
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.title}</span>
          <Trailing2
            style={{ position: "relative", width: 106, flexShrink: 0 }}
            showCheckmark={false}
            showInfo={false}
            type={"default"}
          />
        </div>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.showAction3 && (
        <div style={{
          position: "relative",
          width: 52,
          borderRadius: 100,
          backgroundColor: "var(--accents-purple)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 52,
            height: 52,
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 17,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "22px",
            color: "var(--grays-white)",
          }}>􀓞</span>
        </div>
        )}
        {props.showAction2 && (
        <div style={{
          position: "relative",
          width: 52,
          borderRadius: 100,
          backgroundColor: "var(--accents-indigo)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 52,
            height: 52,
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 17,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "22px",
            color: "var(--grays-white)",
          }}>􀓞</span>
        </div>
        )}
        {props.showAction1 && (
        <div style={{
          position: "relative",
          width: 52,
          borderRadius: 100,
          backgroundColor: "var(--accents-green)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 52,
            height: 52,
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 17,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "22px",
            color: "var(--grays-white)",
          }}>􀓞</span>
        </div>
        )}
      </div>
    </div>
  );
  const __impls = {
    // figma: Height=Tall, Swipe=Right
    "height=tall|swipe=right": __body0,
    // figma: Height=Regular, Swipe=Right
    "height=regular|swipe=right": __body1,
    // figma: Height=Tall, Swipe=Left
    "height=tall|swipe=left": __body2,
    // figma: Height=Regular, Swipe=Left
    "height=regular|swipe=left": __body3,
  };
  return (__impls[__vkey(props)] ?? __body1)();
}
export default RowWithSwipeActions;
