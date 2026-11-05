import { Toolbar } from '../accessory-bars/Toolbar.jsx';

// figma node: 515:63048 _Accessory Bar/Editing Tools/Dark
export function AccessoryBarEditingToolsDark(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 393,
      boxShadow: "inset 0 0 0 1px rgb(255,0,0)",
      display: "flex",
      flexDirection: "row",
      padding: "3px 18px 10px 18px",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 32,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <Toolbar symbol={"􀅒"} state={"default"} />}</div>
      <div style={{
          position: "relative",
          width: 32,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon2 ?? <Toolbar symbol={"􀏫"} state={"default"} />}</div>
      <div style={{
          position: "relative",
          width: 32,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon3 ?? <Toolbar symbol={"􀌞"} state={"default"} />}</div>
      <div style={{
          position: "relative",
          width: 32,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon4 ?? <Toolbar symbol={"􀎾"} state={"default"} />}</div>
      <Toolbar
        style={{
          position: "relative",
          width: 32,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}
        symbol={"􀹃"}
        state={"default"}
      />
      <Toolbar
        style={{
          position: "relative",
          width: 32,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}
        symbol={"􀈷"}
        state={"default"}
      />
      <Toolbar
        style={{
          position: "relative",
          width: 32,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}
        symbol={"􀉥"}
        state={"default"}
      />
    </div>
  );
}
export default AccessoryBarEditingToolsDark;
