import { LiquidGlassRegularMedium } from '../alerts/LiquidGlassRegularMedium.jsx';
import { MenuItemsIPad } from '../kit/MenuItemsIPad.jsx';
import { MenuItemsSubmenusIPad } from '../kit/MenuItemsSubmenusIPad.jsx';
import { QuickActionIPad } from './QuickActionIPad.jsx';
import { SectionTitleIPad } from './SectionTitleIPad.jsx';
import { SeparatorIPad } from '../kit/SeparatorIPad.jsx';

// figma node: 5908:7177 Menu - iPad - Actions and Submenus (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "mode=" + __venc(p.mode);

export function MenuIPadActionsAndSubmenus(_p = {}) {
  const props = { ..._p, mode: _p.mode ?? "dark" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 238,
      display: "flex",
      flexDirection: "column",
      padding: "10px 8px 10px 8px",
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
          height: 436,
        }}>
        <LiquidGlassRegularMedium
          style={{ transform: "scale(1.488, 2.725)", transformOrigin: "0 0" }}
          mode={"dark"}
        />
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 6,
        padding: "0px 2px 0px 2px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{ position: "relative", flexGrow: 1, width: "auto" }}>{props.icon1 ?? <QuickActionIPad mode={"dark"} destructive={false} />}</div>
        <div style={{ position: "relative", flexGrow: 1, width: "auto" }}>{props.icon2 ?? <QuickActionIPad mode={"dark"} destructive={false} />}</div>
        <div style={{ position: "relative", flexGrow: 1, width: "auto" }}>{props.icon3 ?? <QuickActionIPad mode={"dark"} destructive={true} />}</div>
      </div>
      <SeparatorIPad
        style={{
          position: "relative",
          height: 21,
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        mode={"dark"}
      />
      <MenuItemsSubmenusIPad
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        label={"Find in Note"}
        symbol={"􀊫"}
        mode={"dark"}
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
        label={"Move Note"}
        symbol={"􀈕"}
        mode={"dark"}
        state={"disabled"}
        open={false}
        menuHasSelection={false}
      />
      <MenuItemsSubmenusIPad
        style={{
          position: "relative",
          height: 58,
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        label={"Math Results"}
        subtitle={"Suggest Results"}
        symbol={"􀁔"}
        showSubtitle={true}
        mode={"dark"}
        state={"default"}
        open={false}
        menuHasSelection={false}
      />
      <SeparatorIPad
        style={{
          position: "relative",
          height: 17,
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        mode={"dark"}
      />
      <SectionTitleIPad
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        mode={"dark"}
      />
      <MenuItemsSubmenusIPad
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        label={"Recent Notes"}
        symbol={"􀐫"}
        mode={"dark"}
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
        label={"Lines & Grids"}
        symbol={"􀮟"}
        mode={"dark"}
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
        label={"Format"}
        symbol={"􀅗"}
        mode={"dark"}
        state={"default"}
        open={false}
        menuHasSelection={false}
      />
      <MenuItemsIPad
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        label={"Delete"}
        symbol={"􀈑"}
        showCommand={false}
        letter={"􀆛"}
        mode={"dark"}
        state={"destructive"}
        menuHasSelection={false}
      />
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 238,
      display: "flex",
      flexDirection: "column",
      padding: "10px 8px 10px 8px",
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
          height: 436,
        }}>
        <LiquidGlassRegularMedium
          style={{ transform: "scale(1.488, 2.725)", transformOrigin: "0 0" }}
          mode={"light"}
        />
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 6,
        padding: "0px 2px 0px 2px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{ position: "relative", flexGrow: 1, width: "auto" }}>{props.icon1 ?? <QuickActionIPad mode={"light"} destructive={false} />}</div>
        <div style={{ position: "relative", flexGrow: 1, width: "auto" }}>{props.icon2 ?? <QuickActionIPad mode={"light"} destructive={false} />}</div>
        <div style={{ position: "relative", flexGrow: 1, width: "auto" }}>{props.icon3 ?? <QuickActionIPad mode={"light"} destructive={true} />}</div>
      </div>
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
        label={"Find in Note"}
        symbol={"􀊫"}
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
        label={"Move Note"}
        symbol={"􀈕"}
        mode={"light"}
        state={"disabled"}
        open={false}
        menuHasSelection={false}
      />
      <MenuItemsSubmenusIPad
        style={{
          position: "relative",
          height: 58,
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        label={"Math Results"}
        subtitle={"Suggest Results"}
        symbol={"􀁔"}
        showSubtitle={true}
        mode={"light"}
        state={"default"}
        open={false}
        menuHasSelection={false}
      />
      <SeparatorIPad
        style={{
          position: "relative",
          height: 17,
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        mode={"light"}
      />
      <SectionTitleIPad
        style={{
          position: "relative",
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
        label={"Recent Notes"}
        symbol={"􀐫"}
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
        label={"Lines & Grids"}
        symbol={"􀮟"}
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
        label={"Format"}
        symbol={"􀅗"}
        mode={"light"}
        state={"default"}
        open={false}
        menuHasSelection={false}
      />
      <MenuItemsIPad
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        label={"Delete"}
        symbol={"􀈑"}
        showCommand={false}
        letter={"􀆛"}
        mode={"light"}
        state={"destructive"}
        menuHasSelection={false}
      />
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
export default MenuIPadActionsAndSubmenus;
