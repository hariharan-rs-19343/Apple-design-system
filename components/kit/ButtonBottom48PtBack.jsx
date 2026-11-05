import { ButtonBack2 } from '../actions/ButtonBack2.jsx';
import { ButtonBackgroundOverDarkBackground } from '../buttons/ButtonBackgroundOverDarkBackground.jsx';

// figma node: 5426:6950 Button - Bottom (48 pt)/Back
export function ButtonBottom48PtBack(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: "fit-content",
      height: 48,
      borderRadius: 296,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "0px 6px 0px 6px",
      justifyContent: "center",
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
          width: 48,
          height: 48,
        }}>{props.icon1 ?? <ButtonBackgroundOverDarkBackground />}</div>
      <div style={{
          position: "relative",
          width: 36,
          height: 36,
          flexShrink: 0,
        }}>{props.icon2 ?? <ButtonBack2 mode={"light"} state={"default"} />}</div>
    </div>
  );
}
export default ButtonBottom48PtBack;
