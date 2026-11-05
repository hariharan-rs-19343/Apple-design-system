import { Selection2 } from './Selection2.jsx';

// figma node: 5711:35414 Text Selection
export function TextSelection2(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 94,
      height: 22,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: -3,
          width: 94,
          height: 28,
        }}>
        <Selection2
          style={{ transform: "scale(2.350, 1)", transformOrigin: "0 0" }}
          mode={"light"}
        />
      </div>
      <div style={{
        position: "absolute",
        left: 85,
        top: 0,
        width: 16,
        height: 22,
      }}>
        <div style={{
          position: "absolute",
          left: 7,
          top: -3,
          width: 2,
          height: 32,
          borderRadius: 2,
          backgroundColor: "var(--accents-blue)",
        }} />
        <div style={{
          position: "absolute",
          left: 0,
          top: 22,
          width: 16,
          height: 16,
          borderRadius: "50%",
          backgroundColor: "var(--accents-blue)",
          boxShadow: "0px 3px 14px 6px rgba(0,0,0,0.12)",
        }} />
      </div>
      <div style={{
        position: "absolute",
        left: -7,
        top: 0,
        width: 16,
        height: 22,
      }}>
        <div style={{
          position: "absolute",
          left: 7,
          top: -7,
          width: 2,
          height: 32,
          borderRadius: 2,
          backgroundColor: "var(--accents-blue)",
        }} />
        <div style={{
          position: "absolute",
          left: 0,
          top: -16,
          width: 16,
          height: 16,
          borderRadius: "50%",
          backgroundColor: "var(--accents-blue)",
          boxShadow: "0px 3px 14px 6px rgba(0,0,0,0.12)",
        }} />
      </div>
    </div>
  );
}
export default TextSelection2;
