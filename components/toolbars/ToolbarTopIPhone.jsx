import { ButtonsTop } from '../actions/ButtonsTop.jsx';
import { SubtitleCaption } from '../navigation/SubtitleCaption.jsx';
import { SubtitleSubheadline } from '../navigation/SubtitleSubheadline.jsx';
import { TitleBody } from '../navigation/TitleBody.jsx';
import { TitleLargeTitle } from '../navigation/TitleLargeTitle.jsx';
import { TitleSubheadline } from '../navigation/TitleSubheadline.jsx';

// figma node: 1:54472 Toolbar - Top - iPhone (5 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "style2=" + __venc(p.style2);

export function ToolbarTopIPhone(_p = {}) {
  const props = { ..._p, style2: _p.style2 ?? "default", showSubtitle: _p.showSubtitle ?? true };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 402,
      display: "flex",
      flexDirection: "row",
      gap: 5,
      padding: "0px 16px 10px 16px",
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <TitleLargeTitle
        style={{
          position: "relative",
          height: 41,
          flexGrow: 1,
          width: "auto",
        }}
        mode={"light"}
      />
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        justifyContent: "flex-end",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          borderRadius: 296,
          backgroundColor: "rgb(255,255,255)",
          display: "flex",
          flexDirection: "row",
          gap: 20,
          padding: "0px 4px 0px 4px",
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
            width: 44,
            height: 44,
          }}>
            <svg width={44} height={44} viewBox="0 0 44 44" fill="none" style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 44,
              height: 44,
              borderRadius: 1000,
              filter: "drop-shadow(0px 8px 40px rgba(0,0,0,0.12))",
            }}>
              <path d={"M 0 22 C 0 9.85 9.85 0 22 0 L 22 0 C 34.15 0 44 9.85 44 22 L 44 22 C 44 34.15 34.15 44 22 44 L 22 44 C 9.85 44 0 34.15 0 22 L 0 22 Z"} fill="currentColor" fillRule="nonzero" />
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
              color: "rgb(255,255,255)",
              flexGrow: 1,
              alignSelf: "stretch",
            }}>􀓔</span>
          </div>
        </div>
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 402,
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "0px 0px 10px 0px",
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
          <div style={{ position: "relative", height: 44, flexShrink: 0 }}>{props.icon2 ?? <ButtonsTop type={"1 symbol"} />}</div>
          <ButtonsTop
            style={{ position: "relative", height: 44, flexShrink: 0 }}
            type={"3 symbols"}
          />
        </div>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        padding: "0px 16px 0px 16px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <TitleLargeTitle
          style={{
            position: "relative",
            height: 41,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          mode={"light"}
        />
        {props.showSubtitle && (
        <div style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}>{props.icon3 ?? <SubtitleSubheadline mode={"light"} />}</div>
        )}
      </div>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 402,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "0px 16px 10px 16px",
      justifyContent: "center",
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
        gap: 10,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 44,
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
          alignSelf: "stretch",
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
      </div>
      <div style={{
        position: "relative",
        height: 38,
        display: "flex",
        flexDirection: "column",
        padding: "1px 2px 1px 2px",
        justifyContent: "center",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
      }}>
        <div style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}>{props.icon2 ?? <TitleSubheadline mode={"light"} />}</div>
        {props.showSubtitle && (
        <div style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}>{props.icon3 ?? <SubtitleCaption mode={"light"} />}</div>
        )}
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
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon4 ?? <ButtonsTop type={"1 symbol"} />}</div>
      </div>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 402,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "0px 16px 10px 16px",
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 44,
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
          alignSelf: "stretch",
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
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        justifyContent: "flex-end",
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon2 ?? <ButtonsTop type={"1 symbol"} />}</div>
      </div>
      <div style={{
        position: "absolute",
        left: 76,
        top: 0,
        width: 250,
        height: 38,
        display: "flex",
        flexDirection: "column",
        padding: "6px 0px 6px 0px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
      }}>
        <div style={{ position: "absolute", left: 109, top: 6 }}>{props.icon3 ?? <TitleSubheadline mode={"light"} />}</div>
        <div style={{ position: "absolute", left: 102, top: 24 }}>{props.icon4 ?? <SubtitleCaption mode={"light"} />}</div>
      </div>
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: 402,
      display: "flex",
      flexDirection: "row",
      padding: "0px 16px 10px 16px",
      justifyContent: "space-between",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 44,
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
          alignSelf: "stretch",
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
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          borderRadius: 296,
          backgroundColor: "rgb(255,255,255)",
          display: "flex",
          flexDirection: "row",
          gap: 20,
          padding: "0px 4px 0px 4px",
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
            width: 44,
            height: 44,
          }}>
            <svg width={44} height={44} viewBox="0 0 44 44" fill="none" style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 44,
              height: 44,
              borderRadius: 1000,
              filter: "drop-shadow(0px 8px 40px rgba(0,0,0,0.12))",
            }}>
              <path d={"M 0 22 C 0 9.85 9.85 0 22 0 L 22 0 C 34.15 0 44 9.85 44 22 L 44 22 C 44 34.15 34.15 44 22 44 L 22 44 C 9.85 44 0 34.15 0 22 L 0 22 Z"} fill="currentColor" fillRule="nonzero" />
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
              color: "rgb(255,255,255)",
              flexGrow: 1,
              alignSelf: "stretch",
            }}>􀓔</span>
          </div>
        </div>
      </div>
      <div style={{
          position: "absolute",
          left: 183,
          top: 13,
          width: 36,
          height: 22,
        }}>{props.icon3 ?? <TitleBody mode={"light"} />}</div>
    </div>
  );
  const __impls = {
    // figma: Style=Compact Large
    "style2=compact large": __body0,
    // figma: Style=Large Title
    "style2=large title": __body1,
    // figma: Style=Title 2 Line Left
    "style2=title 2 line left": __body2,
    // figma: Style=Title 2 Line
    "style2=title 2 line": __body3,
    // figma: Style=Default
    "style2=default": __body4,
  };
  return (__impls[__vkey(props)] ?? __body4)();
}
export default ToolbarTopIPhone;
