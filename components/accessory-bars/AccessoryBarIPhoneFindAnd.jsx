import { FieldBG } from '../fields/FieldBG.jsx';
import { FieldFind } from '../fields/FieldFind.jsx';
import { FieldReplace } from '../fields/FieldReplace.jsx';
import { LiquidGlassRegularSmall } from '../buttons/LiquidGlassRegularSmall.jsx';
import { ReplaceButton } from './ReplaceButton.jsx';

// figma node: 5720:48008 _Accessory Bar - iPhone - Find and Replace (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "mode=" + __venc(p.mode);

export function AccessoryBarIPhoneFindAnd(_p = {}) {
  const props = { ..._p, mode: _p.mode ?? "light" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 402,
      height: 101,
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "10px 12px 10px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 12,
          top: 0,
          width: 378,
          height: 101,
        }}>
        <LiquidGlassRegularSmall
          style={{ transform: "scale(7.875, 2.104)", transformOrigin: "0 0" }}
          mode={"dark"}
          state={"default"}
        />
      </div>
      <div style={{
        position: "relative",
        height: 36,
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "0px 12px 0px 12px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 62,
          display: "flex",
          flexDirection: "row",
          gap: 12,
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            width: 22,
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <span style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 22,
              height: 36,
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 17,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "22px",
              letterSpacing: "-0.430px",
              color: "var(--labels-vibrant-primary)",
            }}>􀆇</span>
          </div>
          <div style={{
            position: "relative",
            width: 22,
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <span style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 22,
              height: 36,
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 17,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "22px",
              letterSpacing: "-0.430px",
              color: "rgb(245,245,245)",
            }}>􀆈</span>
          </div>
        </div>
        <div style={{
          position: "relative",
          borderRadius: 100,
          display: "flex",
          flexDirection: "row",
          gap: 6,
          padding: "0px 7px 0px 12px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>
          <FieldBG
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 233,
              height: 36,
            }}
            mode={"dark"}
          />
          <FieldFind
            style={{ position: "relative", flexGrow: 1, width: "auto" }}
            mode={"dark"}
            state={"text entered"}
          />
        </div>
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 590,
          fontSize: 17,
          textAlign: "center",
          lineHeight: "22px",
          letterSpacing: "-0.430px",
          color: "rgb(0,145,255)",
          flexShrink: 0,
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "Done"}</span>
      </div>
      <div style={{
        position: "relative",
        height: 36,
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "0px 12px 0px 12px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{ position: "relative", flexShrink: 0 }}>{props.icon3 ?? <ReplaceButton mode={"dark"} state={"disabled"} />}</div>
        <div style={{
          position: "relative",
          borderRadius: 100,
          display: "flex",
          flexDirection: "row",
          gap: 6,
          padding: "0px 7px 0px 12px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>
          <FieldBG
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 233,
              height: 36,
            }}
            mode={"dark"}
          />
          <FieldReplace
            style={{ position: "relative", flexGrow: 1, width: "auto" }}
            mode={"dark"}
            state={"default"}
          />
        </div>
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 402,
      height: 101,
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "10px 12px 10px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 12,
          top: 0,
          width: 378,
          height: 101,
        }}>
        <LiquidGlassRegularSmall
          style={{ transform: "scale(7.875, 2.104)", transformOrigin: "0 0" }}
          mode={"light"}
          state={"default"}
        />
      </div>
      <div style={{
        position: "relative",
        height: 36,
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "0px 12px 0px 12px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 62,
          display: "flex",
          flexDirection: "row",
          gap: 12,
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            width: 22,
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <span style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 22,
              height: 36,
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 17,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "22px",
              letterSpacing: "-0.430px",
              color: "var(--labels-vibrant-primary)",
            }}>􀆇</span>
          </div>
          <div style={{
            position: "relative",
            width: 22,
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <span style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 22,
              height: 36,
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 17,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "22px",
              letterSpacing: "-0.430px",
              color: "var(--labels-vibrant-primary)",
            }}>􀆈</span>
          </div>
        </div>
        <div style={{
          position: "relative",
          borderRadius: 100,
          display: "flex",
          flexDirection: "row",
          gap: 6,
          padding: "0px 7px 0px 12px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>
          <svg width={233} height={36} viewBox="0 0 233 36" fill="none" style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 233,
            height: 36,
            borderRadius: 100,
            display: "flex",
            flexDirection: "row",
            gap: 6,
            alignItems: "center",
            flexWrap: "nowrap",
            color: "var(--fills-vibrant-tertiary)",
          }}>
            <path d={"M 0 18 C 0 8.059 8.059 0 18 0 L 215 0 C 224.941 0 233 8.059 233 18 L 233 18 C 233 27.941 224.941 36 215 36 L 18 36 C 8.059 36 0 27.941 0 18 L 0 18 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <FieldFind
            style={{ position: "relative", flexGrow: 1, width: "auto" }}
            mode={"light"}
            state={"text entered"}
          />
        </div>
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 590,
          fontSize: 17,
          textAlign: "center",
          lineHeight: "22px",
          letterSpacing: "-0.430px",
          color: "var(--accents-blue)",
          flexShrink: 0,
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "Done"}</span>
      </div>
      <div style={{
        position: "relative",
        height: 36,
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "0px 12px 0px 12px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{ position: "relative", height: 22, flexShrink: 0 }}>{props.icon3 ?? <ReplaceButton mode={"light"} state={"disabled"} />}</div>
        <div style={{
          position: "relative",
          borderRadius: 100,
          display: "flex",
          flexDirection: "row",
          gap: 6,
          padding: "0px 7px 0px 12px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>
          <FieldBG
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 233,
              height: 36,
            }}
            mode={"light"}
          />
          <FieldReplace
            style={{
              position: "relative",
              height: 22,
              flexGrow: 1,
              width: "auto",
            }}
            mode={"light"}
            state={"default"}
          />
        </div>
      </div>
    </div>
  );
  const __impls = {
    // figma: Mode=Dark
    "mode=dark": __body0,
    // figma: Mode=Light
    "mode=light": __body1,
  };
  return (__impls[__vkey(props)] ?? __body1)();
}
export default AccessoryBarIPhoneFindAnd;
