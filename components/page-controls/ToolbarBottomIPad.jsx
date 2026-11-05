import { ButtonsTop } from '../actions/ButtonsTop.jsx';

// figma node: 8515:13163 Toolbar - Bottom - iPad
export function ToolbarBottomIPad(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 500,
      display: "flex",
      flexDirection: "row",
      padding: "4px 10px 10px 10px",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 12,
        justifyContent: "flex-end",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon1 ?? <ButtonsTop type={"1 symbol"} />}</div>
        <div style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon2 ?? <ButtonsTop type={"1 symbol"} />}</div>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 12,
        justifyContent: "flex-end",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon3 ?? <ButtonsTop type={"1 symbol"} />}</div>
        <div style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon4 ?? <ButtonsTop type={"1 symbol"} />}</div>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 12,
        justifyContent: "flex-end",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <ButtonsTop
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}
          type={"1 symbol"}
        />
        <ButtonsTop
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}
          type={"1 symbol"}
        />
      </div>
    </div>
  );
}
export default ToolbarBottomIPad;
