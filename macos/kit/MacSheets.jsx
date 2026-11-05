import { MacWindow } from './MacWindow.jsx';

// figma node: 121:11416 Sheets
export function MacSheets(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 500,
      height: 500,
      borderRadius: 2,
      backgroundColor: "var(--mac-section-fill)",
      boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.4)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 100,
        top: 100,
        width: 300,
        height: 300,
        borderRadius: 10,
      }}>
        <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 300,
            height: 300,
          }}>
          <MacWindow
            style={{ transform: "scale(0.600, 1)", transformOrigin: "0 0" }}
            type={"default"}
          />
        </div>
      </div>
    </div>
  );
}
export default MacSheets;
