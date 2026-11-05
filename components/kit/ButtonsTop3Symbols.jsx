import { ButtonSymbolBGContextBright } from './ButtonSymbolBGContextBright.jsx';
import { LiquidGlassRegularSmall } from '../buttons/LiquidGlassRegularSmall.jsx';

// figma node: 5565:35472 _Buttons - Top/3 Symbols
export function ButtonsTop3Symbols(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: "fit-content",
      height: 44,
      borderRadius: 296,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "0px 4px 0px 4px",
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
          width: 140,
          height: 44,
        }}>
        <LiquidGlassRegularSmall
          style={{ transform: "scale(2.917, 0.917)", transformOrigin: "0 0" }}
          mode={"dark"}
          state={"default"}
        />
      </div>
      <div style={{
          position: "relative",
          width: 36,
          height: 36,
          flexShrink: 0,
        }}>{props.icon1 ?? <ButtonSymbolBGContextBright />}</div>
      <div style={{
          position: "relative",
          width: 36,
          height: 36,
          flexShrink: 0,
        }}>{props.icon2 ?? <ButtonSymbolBGContextBright />}</div>
      <div style={{
          position: "relative",
          width: 36,
          height: 36,
          flexShrink: 0,
        }}>{props.icon3 ?? <ButtonSymbolBGContextBright />}</div>
    </div>
  );
}
export default ButtonsTop3Symbols;
