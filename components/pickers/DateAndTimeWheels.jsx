import { Gradient } from '../backgrounds/Gradient.jsx';
import { Materials } from '../materials/Materials.jsx';

// figma node: 55:58302 Date and time - Wheels (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "type=" + __venc(p.type);

export function DateAndTimeWheels(_p = {}) {
  const props = { ..._p, type: _p.type ?? "date" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 297,
      height: 213,
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "18px 20px 18px 20px",
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
          width: 297,
          height: 213,
        }}>
        <Materials
          style={{ transform: "scale(2.970, 2.130)", transformOrigin: "0 0" }}
          style2={"regular"}
        />
      </div>
      <div style={{
        position: "relative",
        height: 177,
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "absolute",
          left: -20,
          top: 72,
          width: 297,
          height: 35,
          borderRadius: 17,
          backgroundColor: "rgba(116,116,128,0.08)",
        }} />
        <div className="fig-mask-d4f6bc88d18169df-cf0808d4" style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 257,
          height: 177,
        }}>
          <div style={{
            position: "absolute",
            left: -20,
            top: 72,
            width: 297,
            height: 35,
            borderRadius: 7,
            backgroundColor: "var(--labels-primary)",
          }} />
          <div style={{
              position: "absolute",
              left: -20,
              top: 107,
              width: 297,
              height: 72,
            }}>
            <Gradient
              style={{ transform: "scale(2.970, 0.720)", transformOrigin: "0 0" }}
              mode={"light"}
              position={"bottom"}
            />
          </div>
          <div style={{
              position: "absolute",
              left: -20,
              top: 0,
              width: 297,
              height: 72,
            }}>
            <Gradient
              style={{ transform: "scale(2.970, 0.720)", transformOrigin: "0 0" }}
              mode={"light"}
              position={"top"}
            />
          </div>
        </div>
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 198.5,
      height: 213.5,
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "18px 20px 18px 20px",
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
          width: 199,
          height: 214,
        }}>
        <Materials
          style={{ transform: "scale(1.990, 2.140)", transformOrigin: "0 0" }}
          style2={"regular"}
        />
      </div>
      <div style={{
        position: "relative",
        height: 177.5,
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "absolute",
          left: -20,
          top: 72,
          width: 198.5,
          height: 35,
          borderRadius: 17,
          backgroundColor: "rgba(116,116,128,0.08)",
        }} />
        <div className="fig-mask-54f47d69b6c743ee-0d8b0db8" style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 158.5,
          height: 177.5,
        }}>
          <div style={{
            position: "absolute",
            left: -20,
            top: 72,
            width: 198.5,
            height: 35,
            backgroundColor: "var(--labels-primary)",
          }} />
          <div style={{
              position: "absolute",
              left: -20,
              top: 107,
              width: 199,
              height: 72,
            }}>
            <Gradient
              style={{ transform: "scale(1.990, 0.720)", transformOrigin: "0 0" }}
              mode={"light"}
              position={"bottom"}
            />
          </div>
          <div style={{
              position: "absolute",
              left: -20,
              top: 0,
              width: 199,
              height: 72,
            }}>
            <Gradient
              style={{ transform: "scale(1.990, 0.720)", transformOrigin: "0 0" }}
              mode={"light"}
              position={"top"}
            />
          </div>
        </div>
      </div>
    </div>
  );
  const __impls = {
    // figma: Type=Date
    "type=date": __body0,
    // figma: Type=Time
    "type=time": __body1,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default DateAndTimeWheels;
