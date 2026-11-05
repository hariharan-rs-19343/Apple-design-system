import { ActionSheet } from '../alerts/ActionSheet.jsx';
import { ButtonsTop } from '../actions/ButtonsTop.jsx';
import { IPadProM411 } from '../examples-sidebar/IPadProM411.jsx';
import { StatusBarAndMenuBar } from '../home-screen/StatusBarAndMenuBar.jsx';
import { SubtitleCaption } from '../navigation/SubtitleCaption.jsx';
import { TitleSubheadline } from '../navigation/TitleSubheadline.jsx';

// figma node: 754:62590 Examples/Action Sheet
export function ExamplesActionSheet2(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 1210,
      height: 834,
      backgroundColor: "var(--backgrounds-primary)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 54,
        width: 1210,
        height: 780,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 1210,
          height: 763,
        }} />
      </div>
      <div style={{
        position: "absolute",
        left: 0,
        top: 32,
        width: 1210,
        display: "flex",
        flexDirection: "row",
        padding: "0px 10px 10px 10px",
        justifyContent: "space-between",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 12,
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            width: 44,
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
              width: 44,
              height: 44,
            }}>
              <svg width={44} height={44} viewBox="0 0 44 44" fill="none" style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 44,
                height: 44,
                overflow: "hidden",
                borderRadius: 296,
                filter: "drop-shadow(0px 8px 40px rgba(0,0,0,0.12))",
              }}>
                <path d={"M 0 22 C 0 9.85 9.85 0 22 0 L 22 0 C 34.15 0 44 9.85 44 22 L 44 22 C 44 34.15 34.15 44 22 44 L 22 44 C 9.85 44 0 34.15 0 22 L 0 22 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
            <div style={{
              position: "relative",
              height: 36,
              minWidth: 36,
              borderRadius: 100,
              display: "flex",
              flexDirection: "row",
              gap: 2,
              padding: "0px 8px 0px 8px",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexShrink: 0,
            }}>
              <span style={{
                position: "relative",
                fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 510,
                fontSize: 17,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "100%",
                color: "var(--labels-vibrant-controls-primary)",
                flexShrink: 0,
              }}>􀯶</span>
            </div>
          </div>
          <ButtonsTop
            style={{ position: "relative", height: 44, flexShrink: 0 }}
            type={"1 symbol"}
          />
          <ButtonsTop
            style={{ position: "relative", height: 44, flexShrink: 0 }}
            type={"1 symbol"}
          />
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 12,
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
        </div>
        <div style={{
          position: "absolute",
          left: 20,
          top: 5,
          width: 1170,
          height: 36,
          display: "flex",
          flexDirection: "column",
          gap: 2,
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
        }}>
          <TitleSubheadline
            style={{ position: "relative", flexShrink: 0 }}
            mode={"light"}
          />
          <SubtitleCaption
            style={{ position: "relative", flexShrink: 0 }}
            mode={"light"}
          />
        </div>
      </div>
      <ActionSheet style={{
          position: "absolute",
          left: 900,
          top: 32,
          width: 300,
        }} />
      <StatusBarAndMenuBar
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 1210,
          height: 32,
        }}
        type={"status bar only"}
      />
      <IPadProM411
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 1210,
          height: 834,
        }}
        color={"silver"}
      />
    </div>
  );
}
export default ExamplesActionSheet2;
