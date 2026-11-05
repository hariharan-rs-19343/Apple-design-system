import { LiquidGlassRegularMedium } from '../alerts/LiquidGlassRegularMedium.jsx';
import { MenuItemsIPhone } from '../kit/MenuItemsIPhone.jsx';
import { MenuItemsSubmenusIPhone } from '../kit/MenuItemsSubmenusIPhone.jsx';
import { QuickActionIPhone } from '../menus/QuickActionIPhone.jsx';
import { SectionTitleIPhone } from '../menus/SectionTitleIPhone.jsx';
import { SeparatorIPhone2 } from '../menus/SeparatorIPhone2.jsx';

// figma node: 5908:6487 Menu - iPhone (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "mode=" + __venc(p.mode);

export function MenuIPhone(_p = {}) {
  const props = { ..._p, mode: _p.mode ?? "dark" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 238,
      display: "flex",
      flexDirection: "column",
      padding: "10px 0px 10px 0px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 238,
          height: 578,
        }}>
        <LiquidGlassRegularMedium
          style={{ transform: "scale(1.488, 3.612)", transformOrigin: "0 0" }}
          mode={"dark"}
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
        <div style={{ position: "relative", flexGrow: 1, width: "auto" }}>{props.icon1 ?? <QuickActionIPhone showSelection={true} mode={"dark"} destructive={false} />}</div>
        <div style={{ position: "relative", flexGrow: 1, width: "auto" }}>{props.icon2 ?? <QuickActionIPhone mode={"dark"} destructive={false} />}</div>
        <div style={{ position: "relative", flexGrow: 1, width: "auto" }}>{props.icon3 ?? <QuickActionIPhone label={"Desctructive"} mode={"dark"} destructive={true} />}</div>
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
        <SeparatorIPhone2
          style={{
            position: "relative",
            height: 21,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          mode={"dark"}
        />
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 6,
          padding: "0px 8px 0px 6px",
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
          }}>
            <span style={{
              position: "relative",
              width: 28,
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 17,
              textAlign: "center",
              lineHeight: "22px",
              color: "rgb(245,245,245)",
              flexShrink: 0,
            }}>􀓔</span>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              gap: 2,
              padding: "10px 0px 10px 0px",
              justifyContent: "center",
              alignItems: "flex-start",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexGrow: 1,
            }}>
              <span style={{
                position: "relative",
                fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 17,
                lineHeight: "20px",
                letterSpacing: "-0.430px",
                color: "rgb(51,51,51)",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>Label</span>
            </div>
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: 1,
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
          }}>
            <span style={{
              position: "relative",
              width: 14,
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 15,
              textAlign: "center",
              lineHeight: "20px",
              color: "rgb(138,138,138)",
              flexShrink: 0,
            }}>􀆔</span>
            <span style={{
              position: "relative",
              width: 14,
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 15,
              textAlign: "center",
              lineHeight: "20px",
              color: "rgb(138,138,138)",
              flexShrink: 0,
            }}>A</span>
          </div>
        </div>
        <MenuItemsIPhone
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          label={"Disabled Action"}
          letter={"B"}
          mode={"dark"}
          state={"disabled"}
          menuHasSelection={false}
        />
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 6,
          padding: "0px 8px 0px 6px",
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
          }}>
            <span style={{
              position: "relative",
              width: 28,
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 17,
              textAlign: "center",
              lineHeight: "22px",
              color: "rgb(255,66,69)",
              flexShrink: 0,
            }}>􀓔</span>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              gap: 2,
              padding: "10px 0px 10px 0px",
              justifyContent: "center",
              alignItems: "flex-start",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexGrow: 1,
            }}>
              <span style={{
                position: "relative",
                fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 17,
                lineHeight: "20px",
                letterSpacing: "-0.430px",
                color: "var(--accents-red)",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>Destructive Action</span>
            </div>
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: 1,
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
          }}>
            <span style={{
              position: "relative",
              width: 14,
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 15,
              textAlign: "center",
              lineHeight: "20px",
              color: "rgb(138,138,138)",
              flexShrink: 0,
            }}>􀆔</span>
            <span style={{
              position: "relative",
              width: 14,
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 15,
              textAlign: "center",
              lineHeight: "20px",
              color: "rgb(138,138,138)",
              flexShrink: 0,
            }}>C</span>
          </div>
        </div>
        <SeparatorIPhone2
          style={{
            position: "relative",
            height: 21,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          mode={"dark"}
        />
        <MenuItemsIPhone
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          showShortcut={false}
          label={"Action"}
          mode={"dark"}
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
          mode={"dark"}
        />
        <SectionTitleIPhone
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          mode={"dark"}
        />
        <MenuItemsSubmenusIPhone
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          label={"Submenu"}
          showSymbol={false}
          mode={"dark"}
          state={"default"}
          open={false}
          menuHasSelection={false}
        />
        <MenuItemsSubmenusIPhone
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          label={"Submenu"}
          showSymbol={false}
          mode={"dark"}
          state={"default"}
          open={false}
          menuHasSelection={false}
        />
        <MenuItemsSubmenusIPhone
          style={{
            position: "relative",
            height: 60,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          label={"Submenu with a long title"}
          showSymbol={false}
          mode={"dark"}
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
          mode={"dark"}
        />
        <SectionTitleIPhone
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          mode={"dark"}
        />
        <MenuItemsIPhone
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          label={"Action"}
          letter={"Y"}
          mode={"dark"}
          state={"default"}
          menuHasSelection={false}
        />
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 238,
      display: "flex",
      flexDirection: "column",
      padding: "10px 0px 10px 0px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 238,
          height: 578,
        }}>
        <LiquidGlassRegularMedium
          style={{ transform: "scale(1.488, 3.612)", transformOrigin: "0 0" }}
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
        <div style={{ position: "relative", flexGrow: 1, width: "auto" }}>{props.icon1 ?? <QuickActionIPhone showSelection={true} mode={"light"} destructive={false} />}</div>
        <div style={{ position: "relative", flexGrow: 1, width: "auto" }}>{props.icon2 ?? <QuickActionIPhone showSelection={false} mode={"light"} destructive={false} />}</div>
        <div style={{ position: "relative", flexGrow: 1, width: "auto" }}>{props.icon3 ?? <QuickActionIPhone label={"Desctructive"} showSelection={false} mode={"light"} destructive={true} />}</div>
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
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          label={"Label"}
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
          label={"Disabled Action"}
          letter={"B"}
          mode={"light"}
          state={"disabled"}
          menuHasSelection={false}
        />
        <MenuItemsIPhone
          style={{
            position: "relative",
            height: 60,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          label={"Destructive Action"}
          letter={"C"}
          mode={"light"}
          state={"destructive"}
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
        <MenuItemsIPhone
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          showShortcut={false}
          label={"Action"}
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
        <SectionTitleIPhone
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          text={"Section Title"}
          mode={"light"}
        />
        <MenuItemsSubmenusIPhone
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          label={"Submenu"}
          showSymbol={false}
          mode={"light"}
          state={"default"}
          open={false}
          menuHasSelection={false}
        />
        <MenuItemsSubmenusIPhone
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          label={"Submenu"}
          showSymbol={false}
          mode={"light"}
          state={"default"}
          open={false}
          menuHasSelection={false}
        />
        <MenuItemsSubmenusIPhone
          style={{
            position: "relative",
            height: 60,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          label={"Submenu with a long title"}
          showSymbol={false}
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
        <SectionTitleIPhone
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          text={"Section Title"}
          mode={"light"}
        />
        <MenuItemsIPhone
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          label={"Action"}
          letter={"Y"}
          mode={"light"}
          state={"default"}
          menuHasSelection={false}
        />
      </div>
    </div>
  );
  const __impls = {
    // figma: Mode=Dark
    "mode=dark": __body0,
    // figma: Mode=Light
    "mode=light": __body1,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default MenuIPhone;
