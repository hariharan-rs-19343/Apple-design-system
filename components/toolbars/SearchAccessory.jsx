import { LiquidGlassRegularSmall } from '../buttons/LiquidGlassRegularSmall.jsx';
import { SearchTop } from './SearchTop.jsx';
import { SegmentedControlButton } from './SegmentedControlButton.jsx';

// figma node: 5573:24624 _Search Accessory (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "showFilters=" + __venc(p.showFilters);

export function SearchAccessory(_p = {}) {
  const props = { ..._p, showFilters: _p.showFilters ?? true };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 820,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <SearchTop
        style={{
          position: "relative",
          flexGrow: 1,
          alignSelf: "stretch",
          width: "auto",
          height: "auto",
        }}
        text2={"􀊱"}
        mode={"light"}
        state={"value"}
      />
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        padding: "4px 8px 4px 8px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 258,
            height: 44,
          }}>
          <LiquidGlassRegularSmall
            style={{ transform: "scale(5.375, 0.917)", transformOrigin: "0 0" }}
            mode={"light"}
            state={"default"}
          />
        </div>
        <SegmentedControlButton
          style={{
            position: "relative",
            width: 121,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}
          mode={"light"}
          selected={true}
        />
        <SegmentedControlButton
          style={{
            position: "relative",
            width: 121,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}
          mode={"light"}
          selected={false}
        />
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 820,
      display: "flex",
      flexDirection: "column",
      gap: 10,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <SearchTop
        style={{
          position: "relative",
          width: 500,
          height: 44,
          flexShrink: 0,
        }}
        text2={"􀊱"}
        mode={"light"}
        state={"value"}
      />
    </div>
  );
  const __impls = {
    // figma: Show Filters=True
    "showFilters=true": __body0,
    // figma: Show Filters=False
    "showFilters=false": __body1,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default SearchAccessory;
