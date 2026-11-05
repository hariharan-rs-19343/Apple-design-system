import { Materials } from '../materials/Materials.jsx';

// figma node: 528:65480 _Menu - Compact Background
export function MenuCompactBackground(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 122,
      height: 50,
      boxShadow: "0px 3px 31px 0px rgba(0,0,0,0.25)",
      position: "relative",
      color: "rgb(255,0,0)",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 122,
        height: 40,
        overflow: "hidden",
        borderRadius: 8,
      }}>
        <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 122,
            height: 40,
          }}>
          <Materials
            style={{ transform: "scale(1.220, 0.400)", transformOrigin: "0 0" }}
            style2={"thick"}
          />
        </div>
      </div>
      <div style={{
        position: "absolute",
        left: 36,
        top: 40,
        width: 50,
        height: 10,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 50,
          height: 10,
          clipPath: "inset(0px 11px 2px 10px)",
        }}>
          <div style={{
            position: "absolute",
            left: 10.5,
            top: 0,
            width: 29,
            height: 8,
          }}>
            <div style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 29,
                height: 8,
                transform: "matrix(1,0,0,-1,0,8)",
                transformOrigin: "0 0",
              }}>{props.icon1 ?? <Materials style2={"thick"} style={{ transform: "scale(0.290, 0.080)", transformOrigin: "0 0" }} />}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default MenuCompactBackground;
