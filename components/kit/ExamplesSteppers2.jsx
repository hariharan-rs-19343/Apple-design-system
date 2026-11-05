import { IPhone17Pro } from '../kit/IPhone17Pro.jsx';
import { ScrollEdgeEffectSoft } from '../kit/ScrollEdgeEffectSoft.jsx';
import { Separator } from '../lists/Separator.jsx';
import { StatusBarIPhone2 } from '../navigation/StatusBarIPhone2.jsx';
import { Stepper } from '../lists/Stepper.jsx';

// figma node: 5661:43368 Examples/Steppers
export function ExamplesSteppers2(_p = {}) {
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
        backgroundColor: "var(--backgrounds-grouped-primary)",
        display: "flex",
        flexDirection: "column",
        padding: "116px 16px 10px 16px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
      }}>
        <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 402,
            height: 116,
          }}>
          <ScrollEdgeEffectSoft
            style={{ transform: "scale(2.010, 0.580)", transformOrigin: "0 0" }}
            edge={"top"}
          />
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 10,
          padding: "10px 0px 10px 0px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            overflow: "hidden",
            borderRadius: 26,
            backgroundColor: "var(--backgrounds-grouped-secondary)",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              height: 52,
              display: "flex",
              flexDirection: "row",
              padding: "0px 16px 0px 16px",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <div style={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                padding: "0px 0px 1px 0px",
                justifyContent: "center",
                alignItems: "flex-start",
                flexWrap: "nowrap",
                boxSizing: "border-box",
                flexGrow: 1,
                alignSelf: "stretch",
              }}>
                <Separator
                  style={{
                    position: "relative",
                    height: 1,
                    flexShrink: 0,
                    alignSelf: "stretch",
                    width: "auto",
                  }}
                  mode={"light"}
                />
                <div style={{
                  position: "relative",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  flexWrap: "nowrap",
                  flexGrow: 1,
                  alignSelf: "stretch",
                }}>
                  <span style={{
                    position: "relative",
                    fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                    fontWeight: 400,
                    fontSize: 17,
                    whiteSpace: "nowrap",
                    lineHeight: "22px",
                    letterSpacing: "-0.430px",
                    color: "var(--labels-primary)",
                    flexGrow: 1,
                    alignSelf: "stretch",
                  }}>Stepper</span>
                  <div style={{
                    position: "relative",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-end",
                    alignItems: "center",
                    flexWrap: "nowrap",
                    flexShrink: 0,
                    alignSelf: "stretch",
                  }}>
                    <div style={{
                      position: "relative",
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "flex-end",
                      alignItems: "center",
                      flexWrap: "nowrap",
                      flexShrink: 0,
                    }}>
                      <Stepper
                        style={{
                          position: "relative",
                          width: 92,
                          height: 32,
                          flexShrink: 0,
                        }}
                        mode={"light"}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{
        position: "absolute",
        left: 0,
        top: 62,
        width: 402,
        display: "flex",
        flexDirection: "row",
        padding: "0px 16px 10px 16px",
        justifyContent: "space-between",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
      }}>
        <div style={{
          position: "absolute",
          left: 183,
          top: 13,
          width: 36,
          height: 22,
        }}>
          <span style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 36,
            height: 22,
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 590,
            fontSize: 17,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "22px",
            letterSpacing: "-0.430px",
            color: "var(--labels-vibrant-primary)",
          }}>Title</span>
        </div>
      </div>
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
export default ExamplesSteppers2;
