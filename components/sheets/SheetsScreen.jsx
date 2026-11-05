import { LiquidGlassRegularMedium } from '../alerts/LiquidGlassRegularMedium.jsx';
import { ToolbarTopSheet } from '../navigation/ToolbarTopSheet.jsx';

// figma node: 544:199443 
export function SheetsScreen(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 2500,
      height: 1200,
      borderRadius: 22,
      backgroundColor: "var(--section-fill)",
      boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.4)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 1000,
        top: 60,
        width: 402,
        height: 387,
        display: "flex",
        flexDirection: "column",
        padding: "0px 6px 6px 6px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
      }}>
        <div style={{
            position: "absolute",
            left: 6,
            top: 0,
            width: 390,
            height: 381,
          }}>
          <LiquidGlassRegularMedium
            style={{ transform: "scale(2.438, 2.381)", transformOrigin: "0 0" }}
            mode={"light"}
          />
        </div>
        <ToolbarTopSheet
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          mode={"light"}
          style2={"default"}
        />
      </div>
      <div style={{
        position: "absolute",
        left: 60,
        top: 1050,
        width: 100,
        height: 100,
        backgroundColor: "rgba(0,0,0,0.2)",
      }} />
      <div style={{
        position: "absolute",
        left: 60,
        top: 60,
        width: 890,
        height: 890,
        overflow: "hidden",
        borderRadius: 5,
      }}>
        <div style={{
          position: "absolute",
          left: 470,
          top: 20,
          width: 402,
          height: 852,
        }}>
          <div style={{
            position: "absolute",
            left: 16,
            top: 0,
            width: 370,
            height: 852,
            overflow: "hidden",
            borderRadius: "38px 38px 9.500px 9.500px",
            backgroundColor: "var(--backgrounds-primary)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            flexWrap: "nowrap",
          }}>
            <svg viewBox="0 0 370 852" fill="none" style={{
              position: "relative",
              flexGrow: 1,
              alignSelf: "stretch",
              color: "rgba(0,0,0,0.1)",
            }}>
              <path d={"M 0 0 L 370 0 L 370 852 L 0 852 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
          <div style={{
            position: "absolute",
            left: 0,
            top: 10,
            width: 402,
            height: 842,
            overflow: "hidden",
            borderRadius: "38px 38px 9.500px 9.500px",
            backgroundColor: "var(--backgrounds-primary-elevated-2)",
            boxShadow: "0px 15px 75px 0px rgba(0,0,0,0.18)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            flexWrap: "nowrap",
          }}>
            <ToolbarTopSheet
              style={{
                position: "relative",
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }}
              mode={"light"}
              style2={"default"}
            />
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 20,
          top: 20,
          width: 402,
          height: 852,
          borderRadius: "38px 38px 0px 0px",
          backgroundColor: "var(--backgrounds-primary-elevated-2)",
          boxShadow: "0px 15px 75px 0px rgba(0,0,0,0.18)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          flexWrap: "nowrap",
        }}>
          <ToolbarTopSheet
            style={{
              position: "relative",
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}
            mode={"light"}
            style2={"default"}
          />
        </div>
      </div>
      <div style={{
        position: "absolute",
        left: 1500,
        top: 60,
        width: 936,
        height: 852,
        borderRadius: 38,
        backgroundColor: "var(--backgrounds-primary-elevated-2)",
        boxShadow: "0px 15px 75px 0px rgba(0,0,0,0.18)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        flexWrap: "nowrap",
      }}>
        <ToolbarTopSheet
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          mode={"light"}
          style2={"default"}
        />
      </div>
    </div>
  );
}
export default SheetsScreen;
