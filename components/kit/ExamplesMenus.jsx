import { ButtonSymbol2 } from '../buttons/ButtonSymbol2.jsx';
import { IPhone16Pro } from '../bezels/IPhone16Pro.jsx';
import { LiquidGlassRegularMedium } from '../alerts/LiquidGlassRegularMedium.jsx';
import { LiquidGlassRegularSmall } from '../buttons/LiquidGlassRegularSmall.jsx';
import { MenuItemsIPhone } from './MenuItemsIPhone.jsx';
import { MenuItemsSubmenusIPhone } from './MenuItemsSubmenusIPhone.jsx';
import { QuickActionIPhone } from '../menus/QuickActionIPhone.jsx';
import { ScrollEdgeEffectSoft } from '../kit/ScrollEdgeEffectSoft.jsx';
import { SeparatorIPhone2 } from '../menus/SeparatorIPhone2.jsx';
import { StatusBarIPhone2 } from '../navigation/StatusBarIPhone2.jsx';
import { TextSelection2 } from './TextSelection2.jsx';

// figma node: 770:21901 Examples/Menus (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "type=" + __venc(p.type);

export function ExamplesMenus(_p = {}) {
  const props = { ..._p, type: _p.type ?? "edit medium" };
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
        padding: "116px 0px 116px 0px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
      }}>
        <div style={{ position: "relative", flexGrow: 1, alignSelf: "stretch" }}>
          <span style={{
            position: "absolute",
            left: 16,
            top: 20,
            width: 89,
            height: 20,
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 17,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            letterSpacing: "-0.430px",
            color: "var(--labels-primary)",
          }}>{props.text1 ?? "Hello World"}</span>
          <div style={{
              position: "absolute",
              left: 16,
              top: 20,
              width: 89,
              height: 20,
            }}>
            <TextSelection2 style={{ transform: "scale(0.947, 0.909)", transformOrigin: "0 0" }} />
          </div>
        </div>
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
          <div style={{
            position: "relative",
            height: 44,
            borderRadius: 296,
            backgroundColor: "rgb(255,255,255)",
            display: "flex",
            flexDirection: "row",
            gap: 20,
            padding: "0px 6px 0px 6px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <div style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 104,
                height: 44,
              }}>
              <LiquidGlassRegularSmall
                style={{ transform: "scale(2.167, 0.917)", transformOrigin: "0 0" }}
                mode={"light"}
                state={"default"}
              />
            </div>
            <ButtonSymbol2
              style={{
                position: "relative",
                width: 36,
                height: 36,
                flexShrink: 0,
              }}
              mode={"light"}
              state={"default"}
            />
            <ButtonSymbol2
              style={{
                position: "relative",
                width: 36,
                height: 36,
                flexShrink: 0,
              }}
              mode={"light"}
              state={"default"}
            />
          </div>
        </div>
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
      <div style={{
        position: "absolute",
        left: 16,
        top: 180,
        width: 250,
        display: "flex",
        flexDirection: "column",
        padding: "10px 0px 10px 0px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
      }}>
        <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 250,
            height: 338,
          }}>
          <LiquidGlassRegularMedium
            style={{ transform: "scale(1.563, 2.112)", transformOrigin: "0 0" }}
            mode={"light"}
          />
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 6,
          padding: "0px 10px 0px 10px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <QuickActionIPhone
            style={{ position: "relative", flexGrow: 1, width: "auto" }}
            symbol={"􀉈"}
            label={"Cut"}
            showSelection={false}
            mode={"light"}
            destructive={false}
          />
          <QuickActionIPhone
            style={{ position: "relative", flexGrow: 1, width: "auto" }}
            symbol={"􀉁"}
            label={"Copy"}
            showSelection={false}
            mode={"light"}
            destructive={false}
          />
          <QuickActionIPhone
            style={{ position: "relative", flexGrow: 1, width: "auto" }}
            symbol={"􀉃"}
            label={"Paste"}
            showSelection={false}
            mode={"light"}
            destructive={false}
          />
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          padding: "0px 16px 0px 16px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <SeparatorIPhone2
            style={{
              position: "relative",
              height: 21,
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}
            mode={"light"}
          />
          <MenuItemsIPhone
            style={{
              position: "relative",
              height: 60,
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}
            showShortcut={false}
            label={"Paste and Match Style"}
            symbol={"􀉃"}
            mode={"light"}
            state={"default"}
            menuHasSelection={false}
          />
          <MenuItemsIPhone
            style={{
              position: "relative",
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}
            showShortcut={false}
            label={"Add Link"}
            symbol={"􀉣"}
            mode={"light"}
            state={"default"}
            menuHasSelection={false}
          />
          <SeparatorIPhone2
            style={{
              position: "relative",
              height: 21,
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}
            mode={"light"}
          />
          <MenuItemsSubmenusIPhone
            style={{
              position: "relative",
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}
            symbol={"􀅫"}
            label={"Replace..."}
            mode={"light"}
            state={"default"}
            open={false}
            menuHasSelection={false}
          />
          <MenuItemsIPhone
            style={{
              position: "relative",
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}
            showShortcut={false}
            label={"Writing Tools"}
            symbol={"􂷴"}
            mode={"light"}
            state={"default"}
            menuHasSelection={false}
          />
          <MenuItemsSubmenusIPhone
            style={{
              position: "relative",
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}
            symbol={"􀈏"}
            label={"AutoFill"}
            mode={"light"}
            state={"default"}
            open={false}
            menuHasSelection={false}
          />
        </div>
      </div>
      <IPhone16Pro style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 402,
          height: 874,
        }} />
      <StatusBarIPhone2 style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 402,
        }} />
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
        borderRadius: 44,
        backgroundColor: "var(--backgrounds-primary)",
        display: "flex",
        flexDirection: "column",
        padding: "116px 0px 116px 0px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
      }}>
        <div style={{ position: "relative", flexGrow: 1, alignSelf: "stretch" }}>
          <span style={{
            position: "absolute",
            left: 16,
            top: 20,
            width: 89,
            height: 20,
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 17,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            letterSpacing: "-0.430px",
            color: "var(--labels-primary)",
          }}>{props.text1 ?? "Hello World"}</span>
          <div style={{
              position: "absolute",
              left: 16,
              top: 20,
              width: 89,
              height: 20,
            }}>
            <TextSelection2 style={{ transform: "scale(0.947, 0.909)", transformOrigin: "0 0" }} />
          </div>
        </div>
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
          <div style={{
            position: "relative",
            height: 44,
            borderRadius: 296,
            backgroundColor: "rgb(255,255,255)",
            display: "flex",
            flexDirection: "row",
            gap: 20,
            padding: "0px 6px 0px 6px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <div style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 104,
                height: 44,
              }}>
              <LiquidGlassRegularSmall
                style={{ transform: "scale(2.167, 0.917)", transformOrigin: "0 0" }}
                mode={"light"}
                state={"default"}
              />
            </div>
            <ButtonSymbol2
              style={{
                position: "relative",
                width: 36,
                height: 36,
                flexShrink: 0,
              }}
              mode={"light"}
              state={"default"}
            />
            <ButtonSymbol2
              style={{
                position: "relative",
                width: 36,
                height: 36,
                flexShrink: 0,
              }}
              mode={"light"}
              state={"default"}
            />
          </div>
        </div>
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
      <div style={{
        position: "absolute",
        left: 16,
        top: 180,
        width: 238,
        height: 44,
        borderRadius: 100,
        display: "flex",
        flexDirection: "row",
        padding: "0px 4px 0px 20px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 238,
          height: 44,
        }}>
          <svg width={238} height={44} viewBox="0 0 238 44" fill="none" style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 238,
            height: 44,
            borderRadius: 34,
            filter: "drop-shadow(0px 8px 40px rgba(0,0,0,0.12))",
          }}>
            <path d={"M 0 22 C 0 9.85 9.85 0 22 0 L 216 0 C 228.15 0 238 9.85 238 22 L 238 22 C 238 34.15 228.15 44 216 44 L 22 44 C 9.85 44 0 34.15 0 22 L 0 22 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 16,
          padding: "0px 16px 0px 0px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 15,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            letterSpacing: "-0.600px",
            color: "var(--labels-vibrant-primary)",
            flexShrink: 0,
          }}>Cut</span>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 16,
          padding: "0px 16px 0px 0px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            width: 1,
            height: 18,
            backgroundColor: "var(--fills-vibrant-primary)",
            flexShrink: 0,
          }} />
          <span style={{
            position: "relative",
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 15,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            letterSpacing: "-0.600px",
            color: "var(--labels-vibrant-primary)",
            flexShrink: 0,
          }}>Copy</span>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 16,
          padding: "0px 16px 0px 0px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            width: 1,
            height: 18,
            backgroundColor: "var(--fills-vibrant-primary)",
            flexShrink: 0,
          }} />
          <span style={{
            position: "relative",
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 15,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            letterSpacing: "-0.600px",
            color: "var(--labels-vibrant-primary)",
            flexShrink: 0,
          }}>Paste</span>
        </div>
        <div style={{
          position: "relative",
          width: 63,
          display: "flex",
          flexDirection: "row",
          gap: 16,
          padding: "0px 16px 0px 0px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            width: 1,
            height: 18,
            backgroundColor: "var(--fills-vibrant-primary)",
            flexShrink: 0,
          }} />
          <span style={{
            position: "relative",
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 15,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            letterSpacing: "-0.600px",
            color: "var(--accents-red)",
            flexShrink: 0,
          }}>Delete</span>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 16,
          padding: "0px 16px 0px 0px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            width: 1,
            height: 18,
            backgroundColor: "var(--fills-vibrant-primary)",
            flexShrink: 0,
          }} />
          <span style={{
            position: "relative",
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 15,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            letterSpacing: "-0.600px",
            color: "var(--labels-vibrant-primary)",
            flexShrink: 0,
          }}>Item</span>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 16,
          padding: "0px 16px 0px 0px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            width: 1,
            height: 18,
            backgroundColor: "var(--fills-vibrant-primary)",
            flexShrink: 0,
          }} />
          <span style={{
            position: "relative",
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 15,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            letterSpacing: "-0.600px",
            color: "var(--labels-vibrant-primary)",
            flexShrink: 0,
          }}>Item</span>
        </div>
        <div style={{
          position: "relative",
          width: 36,
          height: 36,
          overflow: "hidden",
          borderRadius: 100,
          backgroundColor: "var(--fills-vibrant-tertiary)",
          flexShrink: 0,
        }}>
          <span style={{
            position: "absolute",
            left: 0,
            top: 9,
            width: 36,
            height: 18,
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 590,
            fontSize: 15,
            textAlign: "center",
            lineHeight: "100%",
            letterSpacing: "-0.600px",
            color: "var(--labels-vibrant-primary)",
          }}>􀆊</span>
        </div>
      </div>
      <IPhone16Pro style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 402,
          height: 874,
        }} />
      <StatusBarIPhone2 style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 402,
        }} />
    </div>
  );
  const __impls = {
    // figma: Type=Menu
    "type=menu": __body0,
    // figma: Type=Edit Medium
    "type=edit medium": __body1,
  };
  return (__impls[__vkey(props)] ?? __body1)();
}
export default ExamplesMenus;
