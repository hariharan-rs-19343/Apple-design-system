import { ButtonBack2 } from '../actions/ButtonBack2.jsx';
import { ButtonsTop } from '../actions/ButtonsTop.jsx';
import { HomeIndicator } from '../bezels/HomeIndicator.jsx';
import { IPhone16Pro } from '../bezels/IPhone16Pro.jsx';
import { LiquidGlassRegularSmall } from '../buttons/LiquidGlassRegularSmall.jsx';
import { RowTextFieldFocused } from './RowTextFieldFocused.jsx';
import { RowTextFieldTyping } from './RowTextFieldTyping.jsx';
import { RowTextFieldValueEntered } from '../text-fields/RowTextFieldValueEntered.jsx';
import { StatusBarIPhone } from './StatusBarIPhone.jsx';
import { TextField2 } from '../text-fields/TextField2.jsx';

// figma node: 595:25092 Examples/Text Fields
export function ExamplesTextFields(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 393,
      height: 852,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 393,
        height: 852,
        overflow: "hidden",
        borderRadius: 44,
        backgroundColor: "var(--backgrounds-grouped-primary)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        flexWrap: "nowrap",
      }}>
        <div style={{
          position: "relative",
          height: 195,
          backgroundColor: "rgba(235,54,255,0.3)",
          display: "flex",
          flexDirection: "column",
          gap: 10,
          padding: "0px 0px 10px 0px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            padding: "0px 16px 0px 16px",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              gap: 10,
              alignItems: "center",
              flexWrap: "nowrap",
              flexShrink: 0,
            }}>
              <div style={{
                position: "relative",
                height: 44,
                minWidth: 44,
                borderRadius: 296,
                backgroundColor: "rgb(255,255,255)",
                display: "flex",
                flexDirection: "row",
                gap: 12,
                padding: "0px 2px 0px 2px",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "nowrap",
                boxSizing: "border-box",
                flexShrink: 0,
              }}>
                <div style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: 84,
                    height: 44,
                  }}>
                  <LiquidGlassRegularSmall
                    style={{ transform: "scale(1.750, 0.917)", transformOrigin: "0 0" }}
                    mode={"light"}
                    state={"default"}
                  />
                </div>
                <ButtonBack2
                  style={{
                    position: "relative",
                    width: 80,
                    height: 36,
                    flexShrink: 0,
                  }}
                  mode={"light"}
                  state={"default"}
                />
              </div>
            </div>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              gap: 10,
              justifyContent: "flex-end",
              alignItems: "center",
              flexWrap: "nowrap",
              flexShrink: 0,
            }}>
              <ButtonsTop
                style={{ position: "relative", height: 44, flexShrink: 0 }}
                type={"1 symbol"}
              />
              <ButtonsTop
                style={{ position: "relative", height: 44, flexShrink: 0 }}
                type={"1 symbol"}
              />
              <ButtonsTop
                style={{ position: "relative", height: 44, flexShrink: 0 }}
                type={"1 symbol"}
              />
            </div>
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            gap: 10,
            padding: "0px 16px 0px 16px",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <span style={{
              position: "relative",
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 700,
              fontSize: 34,
              whiteSpace: "nowrap",
              lineHeight: "41px",
              letterSpacing: "0.400px",
              color: "var(--labels-primary-yyyy)",
              flexShrink: 0,
            }}>Text Fields</span>
          </div>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          padding: "16px 16px 16px 16px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            overflow: "hidden",
            borderRadius: 10,
            backgroundColor: "var(--backgrounds-grouped-secondary)",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <TextField2
              style={{
                position: "relative",
                height: 44,
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }}
              state={"placeholder"}
            />
            <RowTextFieldFocused style={{
                position: "relative",
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }} />
            <RowTextFieldTyping style={{
                position: "relative",
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }} />
            <RowTextFieldValueEntered style={{
                position: "relative",
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }} />
          </div>
        </div>
      </div>
      <HomeIndicator
        style={{
          position: "absolute",
          left: 1,
          top: 818,
          width: 400,
          height: 34,
        }}
        device={"iPhone"}
        orientation={"portrait"}
      />
      <StatusBarIPhone
        style={{
          position: "absolute",
          left: 0,
          top: -4.5,
          width: 402,
        }}
        size={"iphone 17"}
      />
      <IPhone16Pro style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 402,
          height: 874,
        }} />
    </div>
  );
}
export default ExamplesTextFields;
