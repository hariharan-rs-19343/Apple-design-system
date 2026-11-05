import { Label } from '../labels/Label.jsx';
import { Symbol } from '../tab-bars/Symbol.jsx';

// figma node: 548:43748 _Items/iPhone/False/Disabled/False/Light
export function ItemsIPhoneFalseDisabledFalse(_p = {}) {
  const props = { ..._p, showCheckmark: _p.showCheckmark ?? true, showSymbol: _p.showSymbol ?? true, showTrailing: _p.showTrailing ?? true, subtitle: _p.subtitle ?? "Subtitle", label: _p.label ?? "Label", showSubtitle: _p.showSubtitle ?? true, symbol: _p.symbol ?? "􀓔" };
  return (
    <div className={props.className} style={{
      width: 160,
      minHeight: 42,
      display: "flex",
      flexDirection: "row",
      gap: 4,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 28,
          height: 22,
          flexShrink: 0,
        }}>{props.icon1 ?? <Symbol state={"default"} mode={"light"} />}</div>
      <Label
        style={{
          position: "relative",
          height: 39,
          flexGrow: 1,
          width: "auto",
        }}
        state={"disabled"}
        mode={"light"}
      />
      {props.showTrailing && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          width: 14,
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 700,
          fontSize: 15,
          textAlign: "center",
          lineHeight: "20px",
          color: "rgb(153,153,153)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>􀆊</span>
      </div>
      )}
    </div>
  );
}
export default ItemsIPhoneFalseDisabledFalse;
