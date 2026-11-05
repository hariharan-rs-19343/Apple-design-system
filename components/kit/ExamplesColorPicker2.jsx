import { ColorPickerIPhone } from '../views/ColorPickerIPhone.jsx';
import { IPhone17Pro } from '../kit/IPhone17Pro.jsx';
import { Overlay2 } from './Overlay2.jsx';
import { StatusBarIPhone2 } from '../navigation/StatusBarIPhone2.jsx';

// figma node: 3147:15989 Examples/Color Picker
export function ExamplesColorPicker2(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 402,
      height: 874,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 402,
        height: 874,
        overflow: "hidden",
        borderRadius: 44,
        backgroundColor: "var(--backgrounds-primary)",
        display: "flex",
        flexDirection: "column",
        padding: "0px 16px 6px 16px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
      }}>
        <div style={{
          position: "relative",
          width: 402,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          alignItems: "center",
          flexWrap: "nowrap",
          flexGrow: 1,
        }} />
      </div>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 402,
          height: 874,
        }}>
        <Overlay2 style={{ transform: "scale(4.020, 8.740)", transformOrigin: "0 0" }} />
      </div>
      <ColorPickerIPhone style={{
          position: "absolute",
          left: 0,
          top: 162,
          width: 402,
          height: 706,
        }} />
      <StatusBarIPhone2 style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 402,
        }} />
      <IPhone17Pro
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 402,
          height: 874,
        }}
        color={"silver"}
      />
    </div>
  );
}
export default ExamplesColorPicker2;
