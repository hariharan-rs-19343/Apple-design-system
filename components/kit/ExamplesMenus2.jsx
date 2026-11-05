import { ButtonsTop } from '../actions/ButtonsTop.jsx';
import { EditMenu } from '../kit/EditMenu.jsx';
import { IPadProM411 } from '../examples-sidebar/IPadProM411.jsx';
import { LiquidGlassRegularMedium } from '../alerts/LiquidGlassRegularMedium.jsx';
import { MenuItemsIPad } from './MenuItemsIPad.jsx';
import { MenuItemsSubmenusIPad } from './MenuItemsSubmenusIPad.jsx';
import { QuickActionIPhone } from '../menus/QuickActionIPhone.jsx';
import { SeparatorIPad } from './SeparatorIPad.jsx';
import { SeparatorIPhone2 } from '../menus/SeparatorIPhone2.jsx';
import { StatusBarAndMenuBar } from '../home-screen/StatusBarAndMenuBar.jsx';
import { TextSelection2 } from './TextSelection2.jsx';
import { TitleLargeTitle } from '../navigation/TitleLargeTitle.jsx';

// figma node: 5719:26500 Examples/Menus (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "type=" + __venc(p.type);

export function ExamplesMenus2(_p = {}) {
  const props = { ..._p, type: _p.type ?? "edit menu" };
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
        left: 0,
        top: 54,
        width: 1210,
        height: 780,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 1210,
          height: 763,
        }}>
          <span style={{
            position: "absolute",
            left: 60,
            top: 80,
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
              left: 60,
              top: 80,
              width: 89,
              height: 20,
            }}>
            <TextSelection2 style={{ transform: "scale(0.947, 0.909)", transformOrigin: "0 0" }} />
          </div>
        </div>
      </div>
      <div style={{
        position: "absolute",
        left: 166,
        top: 128,
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
            height: 663,
          }}>
          <LiquidGlassRegularMedium
            style={{ transform: "scale(1.563, 4.144)", transformOrigin: "0 0" }}
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
          padding: "0px 8px 0px 8px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <SeparatorIPad
            style={{
              position: "relative",
              height: 21,
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}
            mode={"light"}
          />
          <MenuItemsIPad
            style={{
              position: "relative",
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}
            showShortcut={false}
            mode={"light"}
            state={"destructive"}
            menuHasSelection={false}
          />
          <SeparatorIPad
            style={{
              position: "relative",
              height: 21,
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}
            mode={"light"}
          />
          <MenuItemsSubmenusIPad
            style={{
              position: "relative",
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}
            mode={"light"}
            state={"default"}
            open={false}
            menuHasSelection={false}
          />
          <MenuItemsSubmenusIPad
            style={{
              position: "relative",
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}
            mode={"light"}
            state={"default"}
            open={false}
            menuHasSelection={false}
          />
          <SeparatorIPad
            style={{
              position: "relative",
              height: 21,
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}
            mode={"light"}
          />
          <MenuItemsIPad
            style={{
              position: "relative",
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}
            showShortcut={false}
            mode={"light"}
            state={"default"}
            menuHasSelection={false}
          />
          <SeparatorIPad
            style={{
              position: "relative",
              height: 21,
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}
            mode={"light"}
          />
          <MenuItemsIPad
            style={{
              position: "relative",
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}
            showShortcut={false}
            mode={"light"}
            state={"default"}
            menuHasSelection={false}
          />
          <SeparatorIPad
            style={{
              position: "relative",
              height: 21,
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}
            mode={"light"}
          />
          <MenuItemsSubmenusIPad
            style={{
              position: "relative",
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}
            mode={"light"}
            state={"default"}
            open={false}
            menuHasSelection={false}
          />
          <SeparatorIPad
            style={{
              position: "relative",
              height: 21,
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}
            mode={"light"}
          />
          <MenuItemsIPad
            style={{
              position: "relative",
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}
            showShortcut={false}
            mode={"light"}
            state={"default"}
            menuHasSelection={false}
          />
          <MenuItemsIPad
            style={{
              position: "relative",
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}
            showShortcut={false}
            mode={"light"}
            state={"default"}
            menuHasSelection={false}
          />
          <MenuItemsIPad
            style={{
              position: "relative",
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}
            showShortcut={false}
            mode={"light"}
            state={"default"}
            menuHasSelection={false}
          />
          <MenuItemsIPad
            style={{
              position: "relative",
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}
            showShortcut={false}
            mode={"light"}
            state={"default"}
            menuHasSelection={false}
          />
          <SeparatorIPad
            style={{
              position: "relative",
              height: 21,
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}
            mode={"light"}
          />
          <MenuItemsIPad
            style={{
              position: "relative",
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}
            showShortcut={false}
            mode={"light"}
            state={"default"}
            menuHasSelection={false}
          />
        </div>
      </div>
      <div style={{
        position: "absolute",
        left: 408,
        top: 489,
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
            height: 241,
          }}>
          <LiquidGlassRegularMedium
            style={{ transform: "scale(1.563, 1.506)", transformOrigin: "0 0" }}
            mode={"light"}
          />
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          padding: "0px 8px 0px 8px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <MenuItemsSubmenusIPad
            style={{
              position: "relative",
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}
            mode={"light"}
            state={"default"}
            open={false}
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
          <MenuItemsSubmenusIPad
            style={{
              position: "relative",
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}
            mode={"light"}
            state={"default"}
            open={false}
            menuHasSelection={false}
          />
          <MenuItemsSubmenusIPad
            style={{
              position: "relative",
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}
            mode={"light"}
            state={"default"}
            open={false}
            menuHasSelection={false}
          />
          <MenuItemsSubmenusIPad
            style={{
              position: "relative",
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}
            mode={"light"}
            state={"default"}
            open={false}
            menuHasSelection={false}
          />
          <MenuItemsSubmenusIPad
            style={{
              position: "relative",
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}
            mode={"light"}
            state={"default"}
            open={false}
            menuHasSelection={false}
          />
        </div>
      </div>
      <div style={{
        position: "absolute",
        left: 0,
        top: 32,
        width: 1210,
        display: "flex",
        flexDirection: "row",
        padding: "0px 10px 10px 10px",
        justifyContent: "space-between",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 12,
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
          height: 38,
          display: "flex",
          flexDirection: "column",
          padding: "5px 12px 5px 12px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexGrow: 1,
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
      <StatusBarAndMenuBar
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 1210,
          height: 32,
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
        left: 0,
        top: 54,
        width: 1210,
        height: 780,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 1210,
          height: 763,
        }}>
          <span style={{
            position: "absolute",
            left: 60,
            top: 80,
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
              left: 60,
              top: 80,
              width: 89,
              height: 20,
            }}>
            <TextSelection2 style={{ transform: "scale(0.947, 0.909)", transformOrigin: "0 0" }} />
          </div>
        </div>
      </div>
      <EditMenu style={{
          position: "absolute",
          left: 16,
          top: 178,
          height: 44,
        }} />
      <div style={{
        position: "absolute",
        left: 0,
        top: 32,
        width: 1210,
        display: "flex",
        flexDirection: "row",
        padding: "0px 10px 10px 10px",
        justifyContent: "space-between",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 12,
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
          height: 38,
          display: "flex",
          flexDirection: "column",
          padding: "5px 12px 5px 12px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexGrow: 1,
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
      <StatusBarAndMenuBar
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 1210,
          height: 32,
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
    // figma: Type=Menu and Submenu
    "type=menu and submenu": __body0,
    // figma: Type=Edit Menu
    "type=edit menu": __body1,
  };
  return (__impls[__vkey(props)] ?? __body1)();
}
export default ExamplesMenus2;
