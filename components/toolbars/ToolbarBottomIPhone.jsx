import { ButtonBottom } from '../buttons/ButtonBottom.jsx';
import { PageControl5 } from './PageControl5.jsx';
import { SearchBottom } from './SearchBottom.jsx';

// figma node: 4:55732 Toolbar - Bottom - iPhone (6 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "type=" + __venc(p.type);

export function ToolbarBottomIPhone(_p = {}) {
  const props = { ..._p, type: _p.type ?? "buttons" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 402,
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "4px 28px 32px 28px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <SearchBottom
        style={{
          position: "relative",
          flexGrow: 1,
          alignSelf: "stretch",
          width: "auto",
          height: "auto",
        }}
        mode={"light"}
        state={"placeholder"}
      />
      <div style={{
        position: "relative",
        borderRadius: 296,
        backgroundColor: "rgb(255,255,255)",
        display: "flex",
        flexDirection: "row",
        gap: 18,
        padding: "0px 6px 0px 6px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 48,
          height: 48,
        }}>
          <svg width={48} height={48} viewBox="0 0 48 48" fill="none" style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 48,
            height: 48,
            overflow: "hidden",
            borderRadius: 296,
            filter: "drop-shadow(0px 8px 40px rgba(0,0,0,0.12))",
          }}>
            <path d={"M 0 24 C 0 10.745 10.745 0 24 0 L 24 0 C 37.255 0 48 10.745 48 24 L 48 24 C 48 37.255 37.255 48 24 48 L 24 48 C 10.745 48 0 37.255 0 24 L 0 24 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        <div style={{
          position: "relative",
          width: 36,
          height: 36,
          borderRadius: 100,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          flexWrap: "nowrap",
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
            flexGrow: 1,
            alignSelf: "stretch",
          }}>􀆄</span>
        </div>
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 402,
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "4px 28px 32px 28px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 296,
        backgroundColor: "rgb(255,255,255)",
        display: "flex",
        flexDirection: "row",
        gap: 18,
        padding: "0px 6px 0px 6px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 48,
          height: 48,
        }}>
          <svg width={48} height={48} viewBox="0 0 48 48" fill="none" style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 48,
            height: 48,
            overflow: "hidden",
            borderRadius: 296,
            filter: "drop-shadow(0px 8px 40px rgba(0,0,0,0.12))",
          }}>
            <path d={"M 0 24 C 0 10.745 10.745 0 24 0 L 24 0 C 37.255 0 48 10.745 48 24 L 48 24 C 48 37.255 37.255 48 24 48 L 24 48 C 10.745 48 0 37.255 0 24 L 0 24 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        <div style={{
          position: "relative",
          width: 36,
          height: 36,
          borderRadius: 100,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          flexWrap: "nowrap",
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
            flexGrow: 1,
            alignSelf: "stretch",
          }}>􀀀</span>
        </div>
      </div>
      <SearchBottom
        style={{
          position: "relative",
          flexGrow: 1,
          alignSelf: "stretch",
          width: "auto",
          height: "auto",
        }}
        mode={"light"}
        state={"placeholder"}
      />
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 402,
      display: "flex",
      flexDirection: "row",
      padding: "4px 28px 32px 28px",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <SearchBottom
        style={{
          position: "relative",
          flexGrow: 1,
          alignSelf: "stretch",
          width: "auto",
          height: "auto",
        }}
        mode={"light"}
        state={"placeholder"}
      />
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 402,
      display: "flex",
      flexDirection: "row",
      padding: "4px 28px 32px 28px",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 12,
        justifyContent: "flex-end",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon1 ?? <ButtonBottom state={"1 symbol"} />}</div>
        <div style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon2 ?? <ButtonBottom state={"1 symbol"} />}</div>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 12,
        justifyContent: "flex-end",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon3 ?? <ButtonBottom state={"1 symbol"} />}</div>
        <div style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon4 ?? <ButtonBottom state={"1 symbol"} />}</div>
      </div>
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: 402,
      display: "flex",
      flexDirection: "row",
      padding: "4px 28px 32px 28px",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <ButtonBottom state={"1 symbol"} />}</div>
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon2 ?? <ButtonBottom state={"1 symbol"} />}</div>
      <PageControl5
        style={{ position: "absolute", left: 157, top: 4 }}
        dots={"3"}
        selection={"2"}
      />
    </div>
  );
  const __impls = {
    // figma: Type=Search with Focus
    "type=search with focus": __body0,
    // figma: Type=Search + Leading Item
    "type=search + leading item": __body1,
    // figma: Type=Search + Trailing Item
    "type=search + trailing item": __body0,
    // figma: Type=Search
    "type=search": __body2,
    // figma: Type=Buttons
    "type=buttons": __body3,
    // figma: Type=Buttons + Page Dots
    "type=buttons + page dots": __body4,
  };
  return (__impls[__vkey(props)] ?? __body3)();
}
export default ToolbarBottomIPhone;
