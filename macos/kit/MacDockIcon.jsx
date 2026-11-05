import { MacSystemAppIcon } from './MacSystemAppIcon.jsx';

// figma node: 121:13165 _Dock Icon
export function MacDockIcon(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 36,
      height: 36,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          flexGrow: 1,
          alignSelf: "stretch",
          width: "auto",
          height: "auto",
        }}>{props.icon1 ?? <MacSystemAppIcon appIcon={"messages"} appIconMode={"default"} />}</div>
    </div>
  );
}
export default MacDockIcon;
