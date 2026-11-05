import { ButtonSymbol2 } from '../buttons/ButtonSymbol2.jsx';
import { LiquidGlassRegularSmall } from '../buttons/LiquidGlassRegularSmall.jsx';

// figma node: 5565:31844 _Button - Bottom/Dim/1 Symbol
export function ButtonBottomDim1Symbol(_p = {}) {
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
        }}>{props.icon1 ?? <LiquidGlassRegularSmall mode={"dark"} state={"default"} />}</div>
      <div style={{
          position: "relative",
          width: 36,
          height: 36,
          flexShrink: 0,
        }}>{props.icon2 ?? <ButtonSymbol2 mode={"dark"} state={"default"} />}</div>
    </div>
  );
}
export default ButtonBottomDim1Symbol;
