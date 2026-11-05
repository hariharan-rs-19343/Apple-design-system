import { WindowResize } from './WindowResize.jsx';

// figma node: 5588:3741 Window
export function Window(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 400,
      height: 400,
      overflow: "hidden",
      borderRadius: 34,
      backgroundColor: "var(--backgrounds-primary)",
      boxShadow: "0px 20px 76px 0px rgba(0,0,0,0.2)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 335,
          top: 335,
          width: 65,
          height: 65,
        }}>{props.icon1 ?? <WindowResize />}</div>
    </div>
  );
}
export default Window;
