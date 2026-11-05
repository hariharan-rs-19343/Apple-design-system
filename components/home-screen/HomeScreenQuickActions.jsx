import { HSQAActions } from './HSQAActions.jsx';
import { HSQAWidgetRow } from './HSQAWidgetRow.jsx';
import { LiquidGlassRegularMedium } from '../alerts/LiquidGlassRegularMedium.jsx';

// figma node: 2607:26472 _Home Screen Quick Actions
export function HomeScreenQuickActions(_p = {}) {
  const props = { ..._p, showAction4: _p.showAction4 ?? true, showAction5: _p.showAction5 ?? true, showAction3: _p.showAction3 ?? true, showAction6: _p.showAction6 ?? true, showAction2: _p.showAction2 ?? true };
  return (
    <div className={props.className} style={{
      width: 250,
      borderRadius: 12,
      display: "flex",
      flexDirection: "column",
      gap: 17.5,
      padding: "7.500px 0px 11px 0px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 250,
          height: 368,
        }}>
        <LiquidGlassRegularMedium
          style={{ transform: "scale(1.563, 2.300)", transformOrigin: "0 0" }}
          mode={"light"}
        />
      </div>
      <HSQAWidgetRow
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        mode={"light"}
      />
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <HSQAActions
          style={{
            position: "relative",
            height: 42,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          mode={"light"}
          state={"default"}
        />
        {props.showAction2 && (
        <HSQAActions
          style={{
            position: "relative",
            height: 42,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          mode={"light"}
          state={"default"}
        />
        )}
        {props.showAction3 && (
        <HSQAActions
          style={{
            position: "relative",
            height: 42,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          mode={"light"}
          state={"default"}
        />
        )}
        {props.showAction4 && (
        <HSQAActions
          style={{
            position: "relative",
            height: 42,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          mode={"light"}
          state={"default"}
        />
        )}
        {props.showAction5 && (
        <HSQAActions
          style={{
            position: "relative",
            height: 42,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          mode={"light"}
          state={"default"}
        />
        )}
        {props.showAction6 && (
        <HSQAActions
          style={{
            position: "relative",
            height: 42,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          mode={"light"}
          state={"default"}
        />
        )}
        {props.showAction6 && (
        <HSQAActions
          style={{
            position: "relative",
            height: 42,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          symbol={"􀁎"}
          label={"Remove App"}
          mode={"light"}
          state={"destructive"}
        />
        )}
      </div>
    </div>
  );
}
export default HomeScreenQuickActions;
