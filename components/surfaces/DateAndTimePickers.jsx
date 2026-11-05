import { DateAndTimeCollapsed } from '../lists/DateAndTimeCollapsed.jsx';
import { Materials } from '../materials/Materials.jsx';
import { Separator } from '../lists/Separator.jsx';

// figma node: 5442:1885 Date and time - Pickers (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "style2=" + __venc(p.style2);

export function DateAndTimePickers(_p = {}) {
  const props = { ..._p, style2: _p.style2 ?? "compact", showDate: _p.showDate ?? true, showTime: _p.showTime ?? true, text: _p.text ?? "Time" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 370,
      backgroundColor: "var(--backgrounds-grouped-secondary)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
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
      {props.showDate && (
      <div style={{
        position: "relative",
        height: 335,
        display: "flex",
        flexDirection: "column",
        padding: "6px 0px 6px 0px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          height: 40,
          borderRadius: 5,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 296,
            top: 7,
            display: "flex",
            flexDirection: "row",
            gap: 28,
            alignItems: "center",
            flexWrap: "nowrap",
          }}>
            <span style={{
              position: "relative",
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 20,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "100%",
              color: "var(--accents-blue)",
              flexShrink: 0,
            }}>{props.text1 ?? "􀆉"}</span>
            <span style={{
              position: "relative",
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 20,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "100%",
              color: "var(--accents-blue)",
              flexShrink: 0,
            }}>{props.text2 ?? "􀆊"}</span>
          </div>
          <div style={{
            position: "absolute",
            left: 16,
            top: 13,
            height: 24,
            display: "flex",
            flexDirection: "row",
            gap: 4,
            alignItems: "center",
            flexWrap: "nowrap",
          }}>
            <span style={{
              position: "relative",
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 590,
              fontSize: 17,
              whiteSpace: "nowrap",
              lineHeight: "22px",
              letterSpacing: "-0.430px",
              color: "var(--labels-primary)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>{props.text3 ?? "April 2025"}</span>
            <span style={{
              position: "relative",
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 700,
              fontSize: 15,
              whiteSpace: "nowrap",
              lineHeight: "18px",
              letterSpacing: "-0.500px",
              color: "var(--accents-blue)",
              flexShrink: 0,
            }}>{props.text4 ?? "􀆊"}</span>
          </div>
        </div>
        <div style={{
          position: "relative",
          height: 20,
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
          <span style={{
            position: "relative",
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 590,
            fontSize: 13,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "18px",
            color: "rgba(60,60,67,0.3)",
            textTransform: "uppercase",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>SUN</span>
          <span style={{
            position: "relative",
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 590,
            fontSize: 13,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "18px",
            color: "rgba(60,60,67,0.3)",
            textTransform: "uppercase",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>MON</span>
          <span style={{
            position: "relative",
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 590,
            fontSize: 13,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "18px",
            color: "rgba(60,60,67,0.3)",
            textTransform: "uppercase",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>TUE</span>
          <span style={{
            position: "relative",
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 590,
            fontSize: 13,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "18px",
            color: "rgba(60,60,67,0.3)",
            textTransform: "uppercase",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>WED</span>
          <span style={{
            position: "relative",
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 590,
            fontSize: 13,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "18px",
            color: "rgba(60,60,67,0.3)",
            textTransform: "uppercase",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>THU</span>
          <span style={{
            position: "relative",
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 590,
            fontSize: 13,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "18px",
            color: "rgba(60,60,67,0.3)",
            textTransform: "uppercase",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>FRI</span>
          <span style={{
            position: "relative",
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 590,
            fontSize: 13,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "18px",
            color: "rgba(60,60,67,0.3)",
            textTransform: "uppercase",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>SAT</span>
        </div>
        <div style={{
          position: "relative",
          height: 269,
          display: "flex",
          flexDirection: "column",
          gap: 7,
          padding: "3px 0px 3px 0px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            borderRadius: 5,
            display: "flex",
            flexDirection: "row",
            padding: "0px 16px 0px 16px",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              width: 44,
              height: 44,
              flexShrink: 0,
            }} />
            <div style={{
              position: "relative",
              width: 44,
              height: 44,
              flexShrink: 0,
            }} />
            <div style={{
              position: "relative",
              width: 44,
              height: 44,
              flexShrink: 0,
            }}>
              <span style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 44,
                height: 44,
                fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 20,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "100%",
                color: "var(--accents-blue)",
              }}>1</span>
            </div>
            <div style={{
              position: "relative",
              width: 44,
              height: 44,
              flexShrink: 0,
            }}>
              <span style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 44,
                height: 44,
                fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 20,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "100%",
                color: "var(--labels-primary)",
              }}>2</span>
            </div>
            <div style={{
              position: "relative",
              width: 44,
              height: 44,
              flexShrink: 0,
            }}>
              <span style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 44,
                height: 44,
                fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 20,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "100%",
                color: "var(--labels-primary)",
              }}>3</span>
            </div>
            <div style={{
              position: "relative",
              width: 44,
              height: 44,
              flexShrink: 0,
            }}>
              <span style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 44,
                height: 44,
                fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 20,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "100%",
                color: "var(--labels-primary)",
              }}>4</span>
            </div>
            <div style={{
              position: "relative",
              width: 44,
              height: 44,
              flexShrink: 0,
            }}>
              <span style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 44,
                height: 44,
                fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 20,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "100%",
                color: "var(--labels-primary)",
              }}>5</span>
            </div>
          </div>
          <div style={{
            position: "relative",
            height: 44,
            borderRadius: 5,
            display: "flex",
            flexDirection: "row",
            padding: "0px 16px 0px 16px",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              width: 44,
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <span style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 44,
                height: 44,
                fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 20,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "100%",
                color: "rgb(255,255,255)",
              }}>6</span>
            </div>
            <div style={{
              position: "relative",
              width: 44,
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <span style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 44,
                height: 44,
                fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 20,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "100%",
                color: "var(--labels-primary)",
              }}>7</span>
            </div>
            <div style={{
              position: "relative",
              width: 44,
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <span style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 44,
                height: 44,
                fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 20,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "100%",
                color: "rgb(255,255,255)",
              }}>8</span>
            </div>
            <div style={{
              position: "relative",
              width: 44,
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <span style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 44,
                height: 44,
                fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 20,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "100%",
                color: "rgb(255,255,255)",
              }}>9</span>
            </div>
            <div style={{
              position: "relative",
              width: 44,
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <span style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 44,
                height: 44,
                fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 20,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "100%",
                color: "rgb(255,255,255)",
              }}>10</span>
            </div>
            <div style={{
              position: "relative",
              width: 44,
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <span style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 44,
                height: 44,
                fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 20,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "100%",
                color: "rgb(255,255,255)",
              }}>11</span>
            </div>
            <div style={{
              position: "relative",
              width: 44,
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <span style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 44,
                height: 44,
                fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 20,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "100%",
                color: "rgb(255,255,255)",
              }}>12</span>
            </div>
          </div>
          <div style={{
            position: "relative",
            height: 44,
            borderRadius: 5,
            display: "flex",
            flexDirection: "row",
            padding: "0px 16px 0px 16px",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              width: 44,
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <span style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 44,
                height: 44,
                fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 20,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "100%",
                color: "var(--labels-primary)",
              }}>13</span>
            </div>
            <div style={{
              position: "relative",
              width: 44,
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <span style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 44,
                height: 44,
                fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 20,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "100%",
                color: "rgb(255,255,255)",
              }}>14</span>
            </div>
            <div style={{
              position: "relative",
              width: 44,
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <span style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 44,
                height: 44,
                fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 20,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "100%",
                color: "rgb(255,255,255)",
              }}>15</span>
            </div>
            <div style={{
              position: "relative",
              width: 44,
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <span style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 44,
                height: 44,
                fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 20,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "100%",
                color: "rgb(255,255,255)",
              }}>16</span>
            </div>
            <div style={{
              position: "relative",
              width: 44,
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <span style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 44,
                height: 44,
                fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 20,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "100%",
                color: "rgb(255,255,255)",
              }}>17</span>
            </div>
            <div style={{
              position: "relative",
              width: 44,
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <span style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 44,
                height: 44,
                fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 20,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "100%",
                color: "rgb(255,255,255)",
              }}>18</span>
            </div>
            <div style={{
              position: "relative",
              width: 44,
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <span style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 44,
                height: 44,
                fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 20,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "100%",
                color: "rgb(255,255,255)",
              }}>19</span>
            </div>
          </div>
          <div style={{
            position: "relative",
            height: 44,
            borderRadius: 5,
            display: "flex",
            flexDirection: "row",
            padding: "0px 16px 0px 16px",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              width: 44,
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <div style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 44,
                height: 44,
                opacity: 0.12,
                borderRadius: "50%",
                backgroundColor: "var(--accents-blue)",
              }} />
              <span style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 44,
                height: 44,
                fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 510,
                fontSize: 24,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "25px",
                color: "var(--accents-blue)",
              }}>20</span>
            </div>
            <div style={{
              position: "relative",
              width: 44,
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <span style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 44,
                height: 44,
                fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 20,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "100%",
                color: "rgb(255,255,255)",
              }}>21</span>
            </div>
            <div style={{
              position: "relative",
              width: 44,
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <span style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 44,
                height: 44,
                fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 20,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "100%",
                color: "rgb(255,255,255)",
              }}>22</span>
            </div>
            <div style={{
              position: "relative",
              width: 44,
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <span style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 44,
                height: 44,
                fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 20,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "100%",
                color: "var(--labels-primary)",
              }}>23</span>
            </div>
            <div style={{
              position: "relative",
              width: 44,
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <span style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 44,
                height: 44,
                fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 20,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "100%",
                color: "rgb(255,255,255)",
              }}>24</span>
            </div>
            <div style={{
              position: "relative",
              width: 44,
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <span style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 44,
                height: 44,
                fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 20,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "100%",
                color: "var(--labels-primary)",
              }}>25</span>
            </div>
            <div style={{
              position: "relative",
              width: 44,
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <span style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 44,
                height: 44,
                fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 20,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "100%",
                color: "rgb(255,255,255)",
              }}>26</span>
            </div>
          </div>
          <div style={{
            position: "relative",
            height: 44,
            borderRadius: 5,
            display: "flex",
            flexDirection: "row",
            padding: "0px 16px 0px 16px",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              width: 44,
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <span style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 44,
                height: 44,
                fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 20,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "100%",
                color: "rgb(255,255,255)",
              }}>27</span>
            </div>
            <div style={{
              position: "relative",
              width: 44,
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <span style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 44,
                height: 44,
                fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 20,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "100%",
                color: "var(--labels-primary)",
              }}>28</span>
            </div>
            <div style={{
              position: "relative",
              width: 44,
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <span style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 44,
                height: 44,
                fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 20,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "100%",
                color: "var(--labels-primary)",
              }}>29</span>
            </div>
            <div style={{
              position: "relative",
              width: 44,
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <span style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 44,
                height: 44,
                fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 20,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "100%",
                color: "var(--labels-primary)",
              }}>30</span>
            </div>
            <div style={{
              position: "relative",
              width: 44,
              flexShrink: 0,
              alignSelf: "stretch",
            }} />
            <div style={{
              position: "relative",
              width: 44,
              flexShrink: 0,
              alignSelf: "stretch",
            }} />
            <div style={{
              position: "relative",
              width: 44,
              flexShrink: 0,
              alignSelf: "stretch",
            }} />
          </div>
          <div style={{
            position: "relative",
            height: 11,
            display: "flex",
            flexDirection: "column",
            padding: "0px 16px 0px 16px",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <svg height={11} viewBox="0 0 338 11" fill="none" style={{
              position: "relative",
              height: 11,
              borderTop: "0.333px solid rgba(0,0,0,0.12)",
              borderRight: "0.333px solid rgba(0,0,0,0.12)",
              borderBottom: "0.500px solid rgba(0,0,0,0.12)",
              borderLeft: "0.333px solid rgba(0,0,0,0.12)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <path d={"M 338 11 L 338 10.5 L 0 10.5 L 0 11 L 0 11.5 L 338 11.5 L 338 11 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
      </div>
      )}
      {props.showTime && (
      <div style={{
        position: "relative",
        height: 52,
        overflow: "hidden",
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
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 17,
          whiteSpace: "nowrap",
          lineHeight: "22px",
          letterSpacing: "-0.400px",
          color: "var(--labels-primary)",
          flexShrink: 0,
        }}>{props.text}</span>
        <div style={{
          position: "relative",
          height: 44,
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
            showDate={false}
            state={"default"}
          />
        </div>
      </div>
      )}
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 370,
      overflow: "hidden",
      borderRadius: 13,
      boxShadow: "0px 10px 60px 0px rgba(0,0,0,0.1)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 370,
          height: 381,
        }}>
        <Materials
          style={{ transform: "scale(3.700, 3.810)", transformOrigin: "0 0" }}
          style2={"regular"}
        />
      </div>
      <div style={{
        position: "relative",
        height: 40,
        borderRadius: 5,
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "absolute",
          left: 296,
          top: 7,
          display: "flex",
          flexDirection: "row",
          gap: 28,
          alignItems: "center",
          flexWrap: "nowrap",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 510,
            fontSize: 20,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "var(--accents-blue)",
            flexShrink: 0,
          }}>{props.text1 ?? "􀆉"}</span>
          <span style={{
            position: "relative",
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 510,
            fontSize: 20,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "var(--accents-blue)",
            flexShrink: 0,
          }}>{props.text2 ?? "􀆊"}</span>
        </div>
        <div style={{
          position: "absolute",
          left: 16,
          top: 13,
          height: 24,
          display: "flex",
          flexDirection: "row",
          gap: 4,
          alignItems: "center",
          flexWrap: "nowrap",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 590,
            fontSize: 17,
            whiteSpace: "nowrap",
            lineHeight: "22px",
            letterSpacing: "-0.500px",
            color: "var(--labels-primary)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.text3 ?? "April 2025"}</span>
          <span style={{
            position: "relative",
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 700,
            fontSize: 15,
            whiteSpace: "nowrap",
            lineHeight: "18px",
            letterSpacing: "-0.500px",
            color: "var(--accents-blue)",
            flexShrink: 0,
          }}>{props.text4 ?? "􀆊"}</span>
        </div>
      </div>
      <div style={{
        position: "relative",
        height: 20,
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
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 590,
          fontSize: 13,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "18px",
          color: "rgba(60,60,67,0.3)",
          textTransform: "uppercase",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>SUN</span>
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 590,
          fontSize: 13,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "18px",
          color: "rgba(60,60,67,0.3)",
          textTransform: "uppercase",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>MON</span>
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 590,
          fontSize: 13,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "18px",
          color: "rgba(60,60,67,0.3)",
          textTransform: "uppercase",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>WED</span>
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 590,
          fontSize: 13,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "18px",
          color: "rgba(60,60,67,0.3)",
          textTransform: "uppercase",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>THU</span>
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 590,
          fontSize: 13,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "18px",
          color: "rgba(60,60,67,0.3)",
          textTransform: "uppercase",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>FRI</span>
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 590,
          fontSize: 13,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "18px",
          color: "rgba(60,60,67,0.3)",
          textTransform: "uppercase",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>SAT</span>
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 590,
          fontSize: 13,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "18px",
          color: "rgba(60,60,67,0.3)",
          textTransform: "uppercase",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>SUN</span>
      </div>
      <div style={{
        position: "relative",
        height: 269,
        display: "flex",
        flexDirection: "column",
        gap: 7,
        padding: "3px 0px 3px 0px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          borderRadius: 5,
          display: "flex",
          flexDirection: "row",
          padding: "0px 16px 0px 16px",
          justifyContent: "space-between",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            width: 44,
            height: 44,
            flexShrink: 0,
          }} />
          <div style={{
            position: "relative",
            width: 44,
            height: 44,
            flexShrink: 0,
          }} />
          <div style={{
            position: "relative",
            width: 44,
            height: 44,
            flexShrink: 0,
          }}>
            <span style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 44,
              height: 44,
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 20,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "100%",
              color: "var(--accents-blue)",
            }}>1</span>
          </div>
          <div style={{
            position: "relative",
            width: 44,
            height: 44,
            flexShrink: 0,
          }}>
            <span style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 44,
              height: 44,
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 20,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "100%",
              color: "var(--labels-primary)",
            }}>2</span>
          </div>
          <div style={{
            position: "relative",
            width: 44,
            height: 44,
            flexShrink: 0,
          }}>
            <span style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 44,
              height: 44,
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 20,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "100%",
              color: "var(--labels-primary)",
            }}>3</span>
          </div>
          <div style={{
            position: "relative",
            width: 44,
            height: 44,
            flexShrink: 0,
          }}>
            <span style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 44,
              height: 44,
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 20,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "100%",
              color: "var(--labels-primary)",
            }}>4</span>
          </div>
          <div style={{
            position: "relative",
            width: 44,
            height: 44,
            flexShrink: 0,
          }}>
            <span style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 44,
              height: 44,
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 20,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "100%",
              color: "var(--labels-primary)",
            }}>5</span>
          </div>
        </div>
        <div style={{
          position: "relative",
          height: 44,
          borderRadius: 5,
          display: "flex",
          flexDirection: "row",
          padding: "0px 16px 0px 16px",
          justifyContent: "space-between",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            width: 44,
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <span style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 44,
              height: 44,
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 20,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "100%",
              color: "rgb(255,255,255)",
            }}>6</span>
          </div>
          <div style={{
            position: "relative",
            width: 44,
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <span style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 44,
              height: 44,
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 20,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "100%",
              color: "var(--labels-primary)",
            }}>7</span>
          </div>
          <div style={{
            position: "relative",
            width: 44,
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <span style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 44,
              height: 44,
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 20,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "100%",
              color: "rgb(255,255,255)",
            }}>8</span>
          </div>
          <div style={{
            position: "relative",
            width: 44,
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <span style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 44,
              height: 44,
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 20,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "100%",
              color: "rgb(255,255,255)",
            }}>9</span>
          </div>
          <div style={{
            position: "relative",
            width: 44,
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <span style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 44,
              height: 44,
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 20,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "100%",
              color: "rgb(255,255,255)",
            }}>10</span>
          </div>
          <div style={{
            position: "relative",
            width: 44,
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <span style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 44,
              height: 44,
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 20,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "100%",
              color: "rgb(255,255,255)",
            }}>11</span>
          </div>
          <div style={{
            position: "relative",
            width: 44,
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <span style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 44,
              height: 44,
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 20,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "100%",
              color: "rgb(255,255,255)",
            }}>12</span>
          </div>
        </div>
        <div style={{
          position: "relative",
          height: 44,
          borderRadius: 5,
          display: "flex",
          flexDirection: "row",
          padding: "0px 16px 0px 16px",
          justifyContent: "space-between",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            width: 44,
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <span style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 44,
              height: 44,
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 20,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "100%",
              color: "var(--labels-primary)",
            }}>13</span>
          </div>
          <div style={{
            position: "relative",
            width: 44,
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <span style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 44,
              height: 44,
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 20,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "100%",
              color: "rgb(255,255,255)",
            }}>14</span>
          </div>
          <div style={{
            position: "relative",
            width: 44,
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <span style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 44,
              height: 44,
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 20,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "100%",
              color: "rgb(255,255,255)",
            }}>15</span>
          </div>
          <div style={{
            position: "relative",
            width: 44,
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <span style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 44,
              height: 44,
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 20,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "100%",
              color: "rgb(255,255,255)",
            }}>16</span>
          </div>
          <div style={{
            position: "relative",
            width: 44,
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <span style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 44,
              height: 44,
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 20,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "100%",
              color: "rgb(255,255,255)",
            }}>17</span>
          </div>
          <div style={{
            position: "relative",
            width: 44,
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <span style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 44,
              height: 44,
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 20,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "100%",
              color: "rgb(255,255,255)",
            }}>18</span>
          </div>
          <div style={{
            position: "relative",
            width: 44,
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <span style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 44,
              height: 44,
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 20,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "100%",
              color: "rgb(255,255,255)",
            }}>19</span>
          </div>
        </div>
        <div style={{
          position: "relative",
          height: 44,
          borderRadius: 5,
          display: "flex",
          flexDirection: "row",
          padding: "0px 16px 0px 16px",
          justifyContent: "space-between",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            width: 44,
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 44,
              height: 44,
              opacity: 0.12,
              borderRadius: "50%",
              backgroundColor: "var(--accents-blue)",
            }} />
            <span style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 44,
              height: 44,
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 24,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "25px",
              color: "var(--accents-blue)",
            }}>20</span>
          </div>
          <div style={{
            position: "relative",
            width: 44,
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <span style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 44,
              height: 44,
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 20,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "100%",
              color: "rgb(255,255,255)",
            }}>21</span>
          </div>
          <div style={{
            position: "relative",
            width: 44,
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <span style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 44,
              height: 44,
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 20,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "100%",
              color: "rgb(255,255,255)",
            }}>22</span>
          </div>
          <div style={{
            position: "relative",
            width: 44,
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <span style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 44,
              height: 44,
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 20,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "100%",
              color: "var(--labels-primary)",
            }}>23</span>
          </div>
          <div style={{
            position: "relative",
            width: 44,
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <span style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 44,
              height: 44,
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 20,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "100%",
              color: "rgb(255,255,255)",
            }}>24</span>
          </div>
          <div style={{
            position: "relative",
            width: 44,
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <span style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 44,
              height: 44,
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 20,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "100%",
              color: "var(--labels-primary)",
            }}>25</span>
          </div>
          <div style={{
            position: "relative",
            width: 44,
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <span style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 44,
              height: 44,
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 20,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "100%",
              color: "rgb(255,255,255)",
            }}>26</span>
          </div>
        </div>
        <div style={{
          position: "relative",
          height: 44,
          borderRadius: 5,
          display: "flex",
          flexDirection: "row",
          padding: "0px 16px 0px 16px",
          justifyContent: "space-between",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            width: 44,
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <span style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 44,
              height: 44,
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 20,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "100%",
              color: "rgb(255,255,255)",
            }}>27</span>
          </div>
          <div style={{
            position: "relative",
            width: 44,
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <span style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 44,
              height: 44,
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 20,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "100%",
              color: "var(--labels-primary)",
            }}>28</span>
          </div>
          <div style={{
            position: "relative",
            width: 44,
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <span style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 44,
              height: 44,
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 20,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "100%",
              color: "var(--labels-primary)",
            }}>29</span>
          </div>
          <div style={{
            position: "relative",
            width: 44,
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <span style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 44,
              height: 44,
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 20,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "100%",
              color: "var(--labels-primary)",
            }}>30</span>
          </div>
          <div style={{
            position: "relative",
            width: 44,
            flexShrink: 0,
            alignSelf: "stretch",
          }} />
          <div style={{
            position: "relative",
            width: 44,
            flexShrink: 0,
            alignSelf: "stretch",
          }} />
          <div style={{
            position: "relative",
            width: 44,
            flexShrink: 0,
            alignSelf: "stretch",
          }} />
        </div>
        <div style={{
          position: "relative",
          height: 11,
          display: "flex",
          flexDirection: "column",
          padding: "0px 16px 0px 16px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg height={11} viewBox="0 0 338 11" fill="none" style={{
            position: "relative",
            height: 11,
            borderTop: "0.333px solid rgba(0,0,0,0.12)",
            borderRight: "0.333px solid rgba(0,0,0,0.12)",
            borderBottom: "0.500px solid rgba(0,0,0,0.12)",
            borderLeft: "0.333px solid rgba(0,0,0,0.12)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <path d={"M 338 11 L 338 10.5 L 0 10.5 L 0 11 L 0 11.5 L 338 11.5 L 338 11 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.showTime && (
      <div style={{
        position: "relative",
        height: 52,
        overflow: "hidden",
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
        <span style={{
          position: "relative",
          width: 136,
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 17,
          lineHeight: "22px",
          letterSpacing: "-0.400px",
          color: "var(--labels-primary)",
          flexShrink: 0,
        }}>{props.text}</span>
        <div style={{
          position: "relative",
          height: 44,
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
            showDate={false}
            state={"default"}
          />
        </div>
      </div>
      )}
    </div>
  );
  const __impls = {
    // figma: Style=Inline
    "style2=inline": __body0,
    // figma: Style=Compact
    "style2=compact": __body1,
  };
  return (__impls[__vkey(props)] ?? __body1)();
}
export default DateAndTimePickers;
