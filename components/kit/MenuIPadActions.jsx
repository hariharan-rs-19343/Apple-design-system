import { LiquidGlassRegularMedium } from '../alerts/LiquidGlassRegularMedium.jsx';
import { MenuItemsIPad } from '../kit/MenuItemsIPad.jsx';
import { MenuItemsSubmenusIPad } from '../kit/MenuItemsSubmenusIPad.jsx';
import { SeparatorIPad } from '../kit/SeparatorIPad.jsx';

// figma node: 5908:7176 Menu - iPad - Actions (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "mode=" + __venc(p.mode);

export function MenuIPadActions(_p = {}) {
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
          height: 541,
        }}>
        <LiquidGlassRegularMedium
          style={{ transform: "scale(1.488, 3.381)", transformOrigin: "0 0" }}
          mode={"dark"}
        />
      </div>
      <MenuItemsIPad
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        label={"Undo"}
        symbol={"􀱍"}
        letter={"Z"}
        mode={"dark"}
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
        label={"Redo"}
        symbol={"􀱓"}
        showShift={true}
        letter={"Z"}
        mode={"dark"}
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
        mode={"dark"}
      />
      <MenuItemsIPad
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        label={"Paste"}
        symbol={"􀉃"}
        letter={"V"}
        mode={"dark"}
        state={"default"}
        menuHasSelection={false}
      />
      <MenuItemsIPad
        style={{
          position: "relative",
          height: 58,
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        label={"Paste and Match Style"}
        symbol={"􀉃"}
        showOption={true}
        showShift={true}
        letter={"V"}
        mode={"dark"}
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
        label={"Delete"}
        symbol={"􀈑"}
        showCommand={false}
        letter={"􀆛"}
        mode={"dark"}
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
        label={"Select All"}
        symbol={"􀅶"}
        showShift={true}
        mode={"dark"}
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
        label={"Paste as Quotation"}
        showSymbol={false}
        showShift={true}
        letter={"V"}
        mode={"dark"}
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
        label={"Add Link"}
        showSymbol={false}
        showShift={true}
        letter={"V"}
        mode={"dark"}
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
        mode={"dark"}
      />
      <MenuItemsSubmenusIPad
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        label={"Find"}
        showSymbol={false}
        mode={"dark"}
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
        mode={"dark"}
      />
      <MenuItemsIPad
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        label={"Dictation"}
        showSymbol={false}
        letter={"D"}
        mode={"dark"}
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
        label={"Emoji"}
        symbol={"􀎸"}
        letter={"E"}
        mode={"dark"}
        state={"default"}
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
          height: 541,
        }}>
        <LiquidGlassRegularMedium
          style={{ transform: "scale(1.488, 3.381)", transformOrigin: "0 0" }}
          mode={"light"}
        />
      </div>
      <MenuItemsIPad
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        label={"Undo"}
        symbol={"􀱍"}
        letter={"Z"}
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
        label={"Redo"}
        symbol={"􀱓"}
        showShift={true}
        letter={"Z"}
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
        label={"Paste"}
        symbol={"􀉃"}
        letter={"V"}
        mode={"light"}
        state={"default"}
        menuHasSelection={false}
      />
      <MenuItemsIPad
        style={{
          position: "relative",
          height: 58,
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        label={"Paste and Match Style"}
        symbol={"􀉃"}
        showOption={true}
        showShift={true}
        letter={"V"}
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
        label={"Delete"}
        symbol={"􀈑"}
        showCommand={false}
        letter={"􀆛"}
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
        label={"Select All"}
        symbol={"􀅶"}
        showShift={true}
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
        label={"Paste as Quotation"}
        showSymbol={false}
        showShift={true}
        letter={"V"}
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
        label={"Add Link"}
        showSymbol={false}
        showShift={true}
        letter={"V"}
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
        label={"Find"}
        showSymbol={false}
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
        label={"Dictation"}
        showSymbol={false}
        letter={"D"}
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
        label={"Emoji"}
        symbol={"􀎸"}
        showSymbol={true}
        letter={"E"}
        mode={"light"}
        state={"default"}
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
export default MenuIPadActions;
