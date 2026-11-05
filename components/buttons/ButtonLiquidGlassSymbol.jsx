import { LabelSymbolDefault } from './LabelSymbolDefault.jsx';
import { LabelSymbolPreferred } from './LabelSymbolPreferred.jsx';
import { LiquidGlassRegularSmall } from './LiquidGlassRegularSmall.jsx';

// figma node: 5522:11866 Button - Liquid Glass - Symbol (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "tinted=" + __venc(p.tinted);

export function ButtonLiquidGlassSymbol(_p = {}) {
  const props = { ..._p, tinted: _p.tinted ?? true };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 48,
      height: 48,
      borderRadius: 1000,
      display: "flex",
      flexDirection: "row",
      gap: 4,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 48,
          height: 48,
        }}>{props.icon1 ?? <LiquidGlassRegularSmall mode={"light"} state={"primary"} />}</div>
      <div style={{ position: "relative", height: 36, flexShrink: 0 }}>{props.icon2 ?? <LabelSymbolPreferred mode={"light"} state={"default"} />}</div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 48,
      height: 48,
      borderRadius: 1000,
      display: "flex",
      flexDirection: "row",
      gap: 4,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 48,
          height: 48,
        }}>{props.icon1 ?? <LiquidGlassRegularSmall mode={"light"} state={"default"} />}</div>
      <div style={{ position: "relative", height: 36, flexShrink: 0 }}>{props.icon2 ?? <LabelSymbolDefault mode={"light"} state={"default"} />}</div>
    </div>
  );
  const __impls = {
    // figma: Tinted=True
    "tinted=true": __body0,
    // figma: Tinted=False
    "tinted=false": __body1,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default ButtonLiquidGlassSymbol;
