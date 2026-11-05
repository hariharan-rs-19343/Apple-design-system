import { ButtonAddItem } from './ButtonAddItem.jsx';
import { HeaderDark2 } from './HeaderDark2.jsx';
import { LeadingFalseSymbol } from './LeadingFalseSymbol.jsx';
import { Materials } from '../materials/Materials.jsx';
import { SectionHeader2 } from '../surfaces/SectionHeader2.jsx';
import { SidebarToolbarTopTopLarge } from './SidebarToolbarTopTopLarge.jsx';

// figma node: 148:64427 Sidebar/Vibrant
export function SidebarVibrant(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 320,
      height: 834,
      boxShadow: "0.500px 0px 0px 0px rgba(0,0,0,0.12)",
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
          width: 320,
          height: 834,
        }}>
        <Materials
          style={{ transform: "scale(3.200, 8.340)", transformOrigin: "0 0" }}
          style2={"regular"}
        />
      </div>
      <SidebarToolbarTopTopLarge style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }} />
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        padding: "0px 0px 12px 0px",
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
                fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 17,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "22px",
                color: "var(--labels-vibrant-primary)",
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
                  fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 400,
                  fontSize: 17,
                  whiteSpace: "nowrap",
                  lineHeight: "22px",
                  letterSpacing: "-0.430px",
                  color: "var(--labels-primary)",
                  flexShrink: 0,
                }}>Title</span>
              </div>
            </div>
          </div>
          <div style={{
            position: "relative",
            width: 52,
            display: "flex",
            flexDirection: "row",
            gap: 8,
            padding: "11px 0px 11px 0px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
            alignSelf: "stretch",
          }} />
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
                fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 17,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "22px",
                color: "var(--labels-vibrant-primary)",
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
                  fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 400,
                  fontSize: 17,
                  whiteSpace: "nowrap",
                  lineHeight: "22px",
                  letterSpacing: "-0.430px",
                  color: "var(--labels-primary)",
                  flexShrink: 0,
                }}>Title</span>
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
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 17,
              textAlign: "right",
              whiteSpace: "nowrap",
              lineHeight: "22px",
              letterSpacing: "-0.430px",
              color: "var(--labels-vibrant-secondary)",
              flexShrink: 0,
            }}>Detail</span>
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
                fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 17,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "22px",
                color: "var(--labels-vibrant-primary)",
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
                  fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 400,
                  fontSize: 17,
                  whiteSpace: "nowrap",
                  lineHeight: "22px",
                  letterSpacing: "-0.430px",
                  color: "var(--labels-primary)",
                  flexShrink: 0,
                }}>Title</span>
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
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 17,
              textAlign: "right",
              whiteSpace: "nowrap",
              lineHeight: "22px",
              letterSpacing: "-0.430px",
              color: "var(--labels-vibrant-secondary)",
              flexShrink: 0,
            }}>Detail</span>
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
                fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 17,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "22px",
                color: "var(--labels-vibrant-primary)",
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
                  fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 400,
                  fontSize: 17,
                  whiteSpace: "nowrap",
                  lineHeight: "22px",
                  letterSpacing: "-0.430px",
                  color: "var(--labels-primary)",
                  flexShrink: 0,
                }}>Title</span>
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
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 17,
              textAlign: "right",
              whiteSpace: "nowrap",
              lineHeight: "22px",
              letterSpacing: "-0.430px",
              color: "var(--labels-vibrant-secondary)",
              flexShrink: 0,
            }}>Detail</span>
          </div>
        </div>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        padding: "0px 0px 12px 0px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <HeaderDark2
          style={{
            position: "relative",
            height: 42,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          sectionHeading={"Section 2"}
        />
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
                fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 17,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "22px",
                color: "var(--labels-vibrant-primary)",
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
                  fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 400,
                  fontSize: 17,
                  whiteSpace: "nowrap",
                  lineHeight: "22px",
                  letterSpacing: "-0.430px",
                  color: "var(--labels-primary)",
                  flexShrink: 0,
                }}>Title</span>
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
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 17,
              textAlign: "right",
              whiteSpace: "nowrap",
              lineHeight: "22px",
              letterSpacing: "-0.430px",
              color: "var(--labels-vibrant-secondary)",
              flexShrink: 0,
            }}>Detail</span>
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
            position: "absolute",
            left: 0,
            top: 0,
            width: 320,
            height: 44,
          }}>
            <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 320,
              height: 44,
              borderRadius: 100,
              backgroundColor: "var(--fills-vibrant-tertiary)",
            }} />
          </div>
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
                fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
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
                  fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 590,
                  fontSize: 17,
                  whiteSpace: "nowrap",
                  lineHeight: "22px",
                  letterSpacing: "-0.430px",
                  color: "var(--accents-blue)",
                  flexShrink: 0,
                }}>Title</span>
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
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 17,
              textAlign: "right",
              whiteSpace: "nowrap",
              lineHeight: "22px",
              letterSpacing: "-0.430px",
              color: "var(--labels-vibrant-secondary)",
              flexShrink: 0,
            }}>Detail</span>
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
                fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 17,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "22px",
                color: "var(--labels-vibrant-primary)",
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
                  fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 400,
                  fontSize: 17,
                  whiteSpace: "nowrap",
                  lineHeight: "22px",
                  letterSpacing: "-0.430px",
                  color: "var(--labels-primary)",
                  flexShrink: 0,
                }}>Title</span>
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
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 17,
              textAlign: "right",
              whiteSpace: "nowrap",
              lineHeight: "22px",
              letterSpacing: "-0.430px",
              color: "var(--labels-vibrant-secondary)",
              flexShrink: 0,
            }}>Detail</span>
          </div>
        </div>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        padding: "0px 0px 12px 0px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <SectionHeader2 style={{
            position: "relative",
            height: 42,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }} />
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        padding: "0px 0px 12px 0px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <HeaderDark2
          style={{
            position: "relative",
            height: 42,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          sectionHeading={"Section 4"}
        />
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
                fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 17,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "22px",
                color: "var(--labels-vibrant-primary)",
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
                  fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 400,
                  fontSize: 17,
                  whiteSpace: "nowrap",
                  lineHeight: "22px",
                  letterSpacing: "-0.430px",
                  color: "var(--labels-primary)",
                  flexShrink: 0,
                }}>Title</span>
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
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 17,
              textAlign: "right",
              whiteSpace: "nowrap",
              lineHeight: "22px",
              letterSpacing: "-0.430px",
              color: "var(--labels-vibrant-secondary)",
              flexShrink: 0,
            }}>Detail</span>
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
                fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 17,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "22px",
                color: "var(--labels-vibrant-primary)",
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
                  fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 400,
                  fontSize: 17,
                  whiteSpace: "nowrap",
                  lineHeight: "22px",
                  letterSpacing: "-0.430px",
                  color: "var(--labels-primary)",
                  flexShrink: 0,
                }}>Title</span>
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
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 17,
              textAlign: "right",
              whiteSpace: "nowrap",
              lineHeight: "22px",
              letterSpacing: "-0.430px",
              color: "var(--labels-vibrant-secondary)",
              flexShrink: 0,
            }}>Detail</span>
          </div>
        </div>
        <div style={{
          position: "relative",
          height: 44,
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
            borderRadius: 11,
            backgroundColor: "var(--miscellaneous-sidebar-fill-selected)",
            boxShadow: "0px 0px 30px 0px rgba(0,0,0,0.2)",
            display: "flex",
            flexDirection: "row",
            gap: 8,
            padding: "0px 8px 0px 8px",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <LeadingFalseSymbol style={{ position: "relative", flexGrow: 1, width: "auto" }} />
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              gap: 8,
              padding: "11px 0px 11px 0px",
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
                textAlign: "right",
                whiteSpace: "nowrap",
                lineHeight: "19px",
                letterSpacing: "-0.400px",
                color: "rgba(60,60,67,0.6)",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>Detail</span>
            </div>
          </div>
          <div style={{
            position: "absolute",
            left: 15,
            top: -5,
            width: 290,
            height: 54,
            borderRadius: 12,
            boxShadow: "0 0 0 3px var(--accents-blue)",
          }} />
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
                fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 17,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "22px",
                color: "var(--labels-vibrant-primary)",
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
                  fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 400,
                  fontSize: 17,
                  whiteSpace: "nowrap",
                  lineHeight: "22px",
                  letterSpacing: "-0.430px",
                  color: "var(--labels-primary)",
                  flexShrink: 0,
                }}>Title</span>
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
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 17,
              textAlign: "right",
              whiteSpace: "nowrap",
              lineHeight: "22px",
              letterSpacing: "-0.430px",
              color: "var(--labels-vibrant-secondary)",
              flexShrink: 0,
            }}>Detail</span>
          </div>
        </div>
        <ButtonAddItem
          style={{ position: "relative", width: 155, flexShrink: 0 }}
          title={"Add Item"}
        />
      </div>
    </div>
  );
}
export default SidebarVibrant;
