import { Day } from './Day.jsx';

// figma node: 50:63951 _Week
export function Week(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 393,
      borderRadius: 5,
      display: "flex",
      flexDirection: "row",
      padding: "0px 16px 0px 16px",
      justifyContent: "space-between",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 44,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <Day state={"default"} />}</div>
      <div style={{
          position: "relative",
          width: 44,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon2 ?? <Day state={"default"} />}</div>
      <div style={{
          position: "relative",
          width: 44,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon3 ?? <Day state={"default"} />}</div>
      <div style={{
          position: "relative",
          width: 44,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon4 ?? <Day state={"default"} />}</div>
      <Day
        style={{
          position: "relative",
          width: 44,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}
        state={"default"}
      />
      <Day
        style={{
          position: "relative",
          width: 44,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}
        state={"default"}
      />
      <Day
        style={{
          position: "relative",
          width: 44,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}
        state={"default"}
      />
    </div>
  );
}
export default Week;
