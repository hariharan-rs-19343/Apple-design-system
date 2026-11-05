import { Decrement2 } from '../sliders/Decrement2.jsx';
import { Increment2 } from './Increment2.jsx';

// figma node: 5415:17683 
export function SteppersScreen(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 300,
      height: 230,
      borderRadius: 22,
      backgroundColor: "var(--section-fill)",
      boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.4)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 100,
        top: 100,
        width: 92,
        height: 32,
      }}>
        <div style={{
          position: "absolute",
          left: 45.5,
          top: 4,
          width: 1,
          height: 24,
          borderRadius: 8,
          backgroundColor: "rgba(60,60,67,0.3)",
        }} />
        <Decrement2
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 46,
            height: 32,
          }}
          style2={"default"}
        />
        <Increment2
          style={{
            position: "absolute",
            left: 46,
            top: 0,
            width: 46,
            height: 32,
          }}
          style2={"default"}
        />
      </div>
    </div>
  );
}
export default SteppersScreen;
