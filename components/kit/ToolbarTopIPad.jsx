import { ButtonsTop } from '../actions/ButtonsTop.jsx';
import { SearchAccessory } from '../toolbars/SearchAccessory.jsx';
import { SearchTop } from '../toolbars/SearchTop.jsx';
import { SubtitleCaption } from '../navigation/SubtitleCaption.jsx';
import { SubtitleSubheadline } from '../navigation/SubtitleSubheadline.jsx';
import { TabBarButtonIPadText } from '../tab-bars/TabBarButtonIPadText.jsx';
import { TitleBody } from '../navigation/TitleBody.jsx';
import { TitleLargeTitle } from '../navigation/TitleLargeTitle.jsx';
import { TitleSubheadline } from '../navigation/TitleSubheadline.jsx';
import { WindowControls } from '../surfaces/WindowControls.jsx';

// figma node: 5561:41165 Toolbar - Top - iPad (8 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "style2=" + __venc(p.style2) + '|' + "tabBar=" + __venc(p.tabBar);

export function ToolbarTopIPad(_p = {}) {
  const props = { ..._p, showWindowControls: _p.showWindowControls ?? false, showSearch: _p.showSearch ?? false, showSubtitle: _p.showSubtitle ?? true, style2: _p.style2 ?? "title 2 line", tabBar: _p.tabBar ?? false };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 820,
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "0px 10px 10px 10px",
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
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 12,
          alignItems: "center",
          flexWrap: "nowrap",
          flexGrow: 1,
        }}>
          {props.showWindowControls && (
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            gap: 10,
            padding: "0px 4px 0px 10px",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <div style={{
                position: "relative",
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }}>{props.icon1 ?? <WindowControls state={"active"} />}</div>
          </div>
          )}
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
          gap: 12,
          justifyContent: "flex-end",
          alignItems: "center",
          flexWrap: "nowrap",
          flexGrow: 1,
        }}>
          <div style={{ position: "relative", height: 44, flexShrink: 0 }}>{props.icon3 ?? <ButtonsTop type={"1 symbol"} />}</div>
          <div style={{ position: "relative", height: 44, flexShrink: 0 }}>{props.icon4 ?? <ButtonsTop type={"1 symbol"} />}</div>
        </div>
      </div>
      <div style={{
        position: "absolute",
        left: 207.5,
        top: 0,
        display: "flex",
        flexDirection: "row",
        padding: "4px 4px 4px 4px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 416,
          height: 44,
        }}>
          <svg width={416} height={44} viewBox="0 0 416 44" fill="none" style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 416,
            height: 44,
            overflow: "hidden",
            borderRadius: 296,
            filter: "drop-shadow(0px 8px 40px rgba(0,0,0,0.12))",
          }}>
            <path d={"M 0 22 C 0 9.85 9.85 0 22 0 L 394 0 C 406.15 0 416 9.85 416 22 L 416 22 C 416 34.15 406.15 44 394 44 L 22 44 C 9.85 44 0 34.15 0 22 L 0 22 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        <div style={{
          position: "relative",
          width: 54,
          display: "flex",
          flexDirection: "row",
          padding: "8px 16px 8px 16px",
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
            fontSize: 15,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "20px",
            letterSpacing: "-0.230px",
            color: "var(--labels-vibrant-controls-primary)",
            flexShrink: 0,
          }}>􀰱</span>
        </div>
        <div style={{
          position: "relative",
          height: 36,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <TabBarButtonIPadText
            style={{
              position: "relative",
              width: 74,
              flexShrink: 0,
              alignSelf: "stretch",
              height: "auto",
            }}
            label={"Tab 1"}
            selected={true}
            mode={"light"}
          />
          <TabBarButtonIPadText
            style={{
              position: "relative",
              flexShrink: 0,
              alignSelf: "stretch",
              height: "auto",
            }}
            label={"Tab 2"}
            selected={false}
            mode={"light"}
          />
          <TabBarButtonIPadText
            style={{
              position: "relative",
              flexShrink: 0,
              alignSelf: "stretch",
              height: "auto",
            }}
            label={"Tab 3"}
            selected={false}
            mode={"light"}
          />
          <TabBarButtonIPadText
            style={{
              position: "relative",
              flexShrink: 0,
              alignSelf: "stretch",
              height: "auto",
            }}
            label={"Tab 4"}
            selected={false}
            mode={"light"}
          />
        </div>
        <div style={{
          position: "relative",
          width: 54,
          display: "flex",
          flexDirection: "row",
          padding: "8px 16px 8px 16px",
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
            fontSize: 15,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "20px",
            letterSpacing: "-0.230px",
            color: "var(--labels-vibrant-controls-primary)",
            flexShrink: 0,
          }}>􀊫</span>
        </div>
      </div>
      {props.showSearch && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "20px 0px 20px 0px",
        justifyContent: "center",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <SearchAccessory
          style={{ position: "relative", flexGrow: 1, width: "auto" }}
          showFilters={false}
        />
      </div>
      )}
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 820,
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "0px 10px 10px 10px",
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
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 12,
          alignItems: "center",
          flexWrap: "nowrap",
          flexGrow: 1,
        }}>
          {props.showWindowControls && (
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            gap: 10,
            padding: "0px 4px 0px 10px",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <div style={{
                position: "relative",
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }}>{props.icon1 ?? <WindowControls state={"active"} />}</div>
          </div>
          )}
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
          gap: 12,
          justifyContent: "flex-end",
          alignItems: "center",
          flexWrap: "nowrap",
          flexGrow: 1,
        }}>
          <div style={{ position: "relative", height: 44, flexShrink: 0 }}>{props.icon3 ?? <ButtonsTop type={"1 symbol"} />}</div>
          <div style={{ position: "relative", height: 44, flexShrink: 0 }}>{props.icon4 ?? <ButtonsTop type={"1 symbol"} />}</div>
        </div>
      </div>
      <div style={{
        position: "relative",
        height: 67,
        minHeight: 48,
        display: "flex",
        flexDirection: "column",
        gap: 2,
        padding: "4px 10px 4px 10px",
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
        <SubtitleSubheadline
          style={{ position: "relative", flexShrink: 0 }}
          mode={"light"}
        />
        )}
      </div>
      <div style={{
        position: "absolute",
        left: 207.5,
        top: 0,
        display: "flex",
        flexDirection: "row",
        padding: "4px 4px 4px 4px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 416,
          height: 44,
        }}>
          <svg width={416} height={44} viewBox="0 0 416 44" fill="none" style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 416,
            height: 44,
            overflow: "hidden",
            borderRadius: 296,
            filter: "drop-shadow(0px 8px 40px rgba(0,0,0,0.12))",
          }}>
            <path d={"M 0 22 C 0 9.85 9.85 0 22 0 L 394 0 C 406.15 0 416 9.85 416 22 L 416 22 C 416 34.15 406.15 44 394 44 L 22 44 C 9.85 44 0 34.15 0 22 L 0 22 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        <div style={{
          position: "relative",
          width: 54,
          display: "flex",
          flexDirection: "row",
          padding: "8px 16px 8px 16px",
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
            fontSize: 15,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "20px",
            letterSpacing: "-0.230px",
            color: "var(--labels-vibrant-controls-primary)",
            flexShrink: 0,
          }}>􀰱</span>
        </div>
        <div style={{
          position: "relative",
          height: 36,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <TabBarButtonIPadText
            style={{
              position: "relative",
              width: 74,
              flexShrink: 0,
              alignSelf: "stretch",
              height: "auto",
            }}
            label={"Tab 1"}
            selected={true}
            mode={"light"}
          />
          <TabBarButtonIPadText
            style={{
              position: "relative",
              flexShrink: 0,
              alignSelf: "stretch",
              height: "auto",
            }}
            label={"Tab 2"}
            selected={false}
            mode={"light"}
          />
          <TabBarButtonIPadText
            style={{
              position: "relative",
              flexShrink: 0,
              alignSelf: "stretch",
              height: "auto",
            }}
            label={"Tab 3"}
            selected={false}
            mode={"light"}
          />
          <TabBarButtonIPadText
            style={{
              position: "relative",
              flexShrink: 0,
              alignSelf: "stretch",
              height: "auto",
            }}
            label={"Tab 4"}
            selected={false}
            mode={"light"}
          />
        </div>
        <div style={{
          position: "relative",
          width: 54,
          display: "flex",
          flexDirection: "row",
          padding: "8px 16px 8px 16px",
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
            fontSize: 15,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "20px",
            letterSpacing: "-0.230px",
            color: "var(--labels-vibrant-controls-primary)",
            flexShrink: 0,
          }}>􀊫</span>
        </div>
      </div>
      {props.showSearch && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "20px 0px 20px 0px",
        justifyContent: "center",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <SearchAccessory
          style={{ position: "relative", flexGrow: 1, width: "auto" }}
          showFilters={false}
        />
      </div>
      )}
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 820,
      display: "flex",
      flexDirection: "column",
      gap: 6,
      padding: "0px 10px 10px 10px",
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
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 12,
          alignItems: "center",
          flexWrap: "nowrap",
          flexGrow: 1,
        }}>
          {props.showWindowControls && (
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            gap: 10,
            padding: "0px 4px 0px 10px",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <div style={{
                position: "relative",
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }}>{props.icon1 ?? <WindowControls state={"active"} />}</div>
          </div>
          )}
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
          gap: 12,
          justifyContent: "flex-end",
          alignItems: "center",
          flexWrap: "nowrap",
          flexGrow: 1,
        }}>
          <div style={{ position: "relative", height: 44, flexShrink: 0 }}>{props.icon3 ?? <ButtonsTop type={"1 symbol"} />}</div>
          <div style={{ position: "relative", height: 44, flexShrink: 0 }}>{props.icon4 ?? <ButtonsTop type={"1 symbol"} />}</div>
        </div>
      </div>
      <div style={{
        position: "relative",
        height: 38,
        display: "flex",
        flexDirection: "column",
        gap: 2,
        padding: "7.500px 10px 7.500px 10px",
        justifyContent: "center",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <TitleBody
          style={{
            position: "relative",
            width: 36,
            height: 22,
            flexShrink: 0,
          }}
          mode={"light"}
        />
        <SubtitleCaption
          style={{ position: "relative", flexShrink: 0 }}
          mode={"light"}
        />
      </div>
      <div style={{
        position: "absolute",
        left: 207.5,
        top: 0,
        display: "flex",
        flexDirection: "row",
        padding: "4px 4px 4px 4px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 416,
          height: 44,
        }}>
          <svg width={416} height={44} viewBox="0 0 416 44" fill="none" style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 416,
            height: 44,
            overflow: "hidden",
            borderRadius: 296,
            filter: "drop-shadow(0px 8px 40px rgba(0,0,0,0.12))",
          }}>
            <path d={"M 0 22 C 0 9.85 9.85 0 22 0 L 394 0 C 406.15 0 416 9.85 416 22 L 416 22 C 416 34.15 406.15 44 394 44 L 22 44 C 9.85 44 0 34.15 0 22 L 0 22 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        <div style={{
          position: "relative",
          width: 54,
          display: "flex",
          flexDirection: "row",
          padding: "8px 16px 8px 16px",
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
            fontSize: 15,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "20px",
            letterSpacing: "-0.230px",
            color: "var(--labels-vibrant-controls-primary)",
            flexShrink: 0,
          }}>􀰱</span>
        </div>
        <div style={{
          position: "relative",
          height: 36,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <TabBarButtonIPadText
            style={{
              position: "relative",
              width: 74,
              flexShrink: 0,
              alignSelf: "stretch",
              height: "auto",
            }}
            label={"Tab 1"}
            selected={true}
            mode={"light"}
          />
          <TabBarButtonIPadText
            style={{
              position: "relative",
              flexShrink: 0,
              alignSelf: "stretch",
              height: "auto",
            }}
            label={"Tab 2"}
            selected={false}
            mode={"light"}
          />
          <TabBarButtonIPadText
            style={{
              position: "relative",
              flexShrink: 0,
              alignSelf: "stretch",
              height: "auto",
            }}
            label={"Tab 3"}
            selected={false}
            mode={"light"}
          />
          <TabBarButtonIPadText
            style={{
              position: "relative",
              flexShrink: 0,
              alignSelf: "stretch",
              height: "auto",
            }}
            label={"Tab 4"}
            selected={false}
            mode={"light"}
          />
        </div>
        <div style={{
          position: "relative",
          width: 54,
          display: "flex",
          flexDirection: "row",
          padding: "8px 16px 8px 16px",
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
            fontSize: 15,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "20px",
            letterSpacing: "-0.230px",
            color: "var(--labels-vibrant-controls-primary)",
            flexShrink: 0,
          }}>􀊫</span>
        </div>
      </div>
      {props.showSearch && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "20px 0px 20px 0px",
        justifyContent: "center",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <SearchAccessory
          style={{ position: "relative", flexGrow: 1, width: "auto" }}
          showFilters={false}
        />
      </div>
      )}
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 820,
      display: "flex",
      flexDirection: "column",
      gap: 11,
      padding: "0px 10px 10px 10px",
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
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 12,
          alignItems: "center",
          flexWrap: "nowrap",
          flexGrow: 1,
        }}>
          {props.showWindowControls && (
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            gap: 10,
            padding: "0px 4px 0px 10px",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <div style={{
                position: "relative",
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }}>{props.icon1 ?? <WindowControls state={"active"} />}</div>
          </div>
          )}
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
          gap: 12,
          justifyContent: "flex-end",
          alignItems: "center",
          flexWrap: "nowrap",
          flexGrow: 1,
        }}>
          <div style={{ position: "relative", height: 44, flexShrink: 0 }}>{props.icon3 ?? <ButtonsTop type={"1 symbol"} />}</div>
          <div style={{ position: "relative", height: 44, flexShrink: 0 }}>{props.icon4 ?? <ButtonsTop type={"1 symbol"} />}</div>
        </div>
      </div>
      <div style={{
        position: "relative",
        height: 38,
        display: "flex",
        flexDirection: "column",
        gap: 2,
        padding: "6px 0px 6px 0px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <TitleBody
          style={{
            position: "relative",
            width: 36,
            height: 22,
            flexShrink: 0,
          }}
          mode={"light"}
        />
        <SubtitleCaption
          style={{ position: "relative", flexShrink: 0 }}
          mode={"light"}
        />
      </div>
      <div style={{
        position: "absolute",
        left: 207.5,
        top: 0,
        display: "flex",
        flexDirection: "row",
        padding: "4px 4px 4px 4px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 416,
          height: 44,
        }}>
          <svg width={416} height={44} viewBox="0 0 416 44" fill="none" style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 416,
            height: 44,
            overflow: "hidden",
            borderRadius: 296,
            filter: "drop-shadow(0px 8px 40px rgba(0,0,0,0.12))",
          }}>
            <path d={"M 0 22 C 0 9.85 9.85 0 22 0 L 394 0 C 406.15 0 416 9.85 416 22 L 416 22 C 416 34.15 406.15 44 394 44 L 22 44 C 9.85 44 0 34.15 0 22 L 0 22 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        <div style={{
          position: "relative",
          width: 54,
          display: "flex",
          flexDirection: "row",
          padding: "8px 16px 8px 16px",
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
            fontSize: 15,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "20px",
            letterSpacing: "-0.230px",
            color: "var(--labels-vibrant-controls-primary)",
            flexShrink: 0,
          }}>􀰱</span>
        </div>
        <div style={{
          position: "relative",
          height: 36,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <TabBarButtonIPadText
            style={{
              position: "relative",
              width: 74,
              flexShrink: 0,
              alignSelf: "stretch",
              height: "auto",
            }}
            label={"Tab 1"}
            selected={true}
            mode={"light"}
          />
          <TabBarButtonIPadText
            style={{
              position: "relative",
              flexShrink: 0,
              alignSelf: "stretch",
              height: "auto",
            }}
            label={"Tab 2"}
            selected={false}
            mode={"light"}
          />
          <TabBarButtonIPadText
            style={{
              position: "relative",
              flexShrink: 0,
              alignSelf: "stretch",
              height: "auto",
            }}
            label={"Tab 3"}
            selected={false}
            mode={"light"}
          />
          <TabBarButtonIPadText
            style={{
              position: "relative",
              flexShrink: 0,
              alignSelf: "stretch",
              height: "auto",
            }}
            label={"Tab 4"}
            selected={false}
            mode={"light"}
          />
        </div>
        <div style={{
          position: "relative",
          width: 54,
          display: "flex",
          flexDirection: "row",
          padding: "8px 16px 8px 16px",
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
            fontSize: 15,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "20px",
            letterSpacing: "-0.230px",
            color: "var(--labels-vibrant-controls-primary)",
            flexShrink: 0,
          }}>􀊫</span>
        </div>
      </div>
      {props.showSearch && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "16px 0px 4px 0px",
        justifyContent: "center",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <SearchAccessory
          style={{ position: "relative", flexGrow: 1, width: "auto" }}
          showFilters={false}
        />
      </div>
      )}
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: 820,
      display: "flex",
      flexDirection: "row",
      padding: "0px 10px 10px 10px",
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
        gap: 12,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.showWindowControls && (
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 10,
          padding: "0px 4px 0px 10px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <div style={{
              position: "relative",
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}>{props.icon1 ?? <WindowControls state={"active"} />}</div>
        </div>
        )}
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
        padding: "5px 12px 5px 12px",
        justifyContent: "center",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
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
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon3 ?? <ButtonsTop type={"1 symbol"} />}</div>
        <div style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon4 ?? <ButtonsTop type={"1 symbol"} />}</div>
        {props.showSearch && (
        <SearchTop
          style={{
            position: "relative",
            width: 180,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}
          mode={"light"}
          state={"placeholder"}
        />
        )}
      </div>
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: 820,
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "0px 10px 10px 10px",
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
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
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
          {props.showWindowControls && (
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            gap: 10,
            padding: "0px 4px 0px 10px",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <div style={{
                position: "relative",
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }}>{props.icon1 ?? <WindowControls state={"active"} />}</div>
          </div>
          )}
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
          <div style={{ position: "relative", height: 44, flexShrink: 0 }}>{props.icon3 ?? <ButtonsTop type={"1 symbol"} />}</div>
          <div style={{ position: "relative", height: 44, flexShrink: 0 }}>{props.icon4 ?? <ButtonsTop type={"1 symbol"} />}</div>
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
          {props.showSearch && (
          <SearchTop
            style={{
              position: "relative",
              width: 180,
              height: 44,
              flexShrink: 0,
            }}
            mode={"light"}
            state={"placeholder"}
          />
          )}
        </div>
      </div>
      <div style={{
        position: "relative",
        height: 67,
        display: "flex",
        flexDirection: "column",
        gap: 2,
        padding: "4px 10px 4px 10px",
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
        <SubtitleSubheadline
          style={{ position: "relative", flexShrink: 0 }}
          mode={"light"}
        />
        )}
      </div>
    </div>
  );
  const __body6 = () => (
    <div className={props.className} style={{
      width: 820,
      display: "flex",
      flexDirection: "row",
      padding: "0px 10px 10px 10px",
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
        gap: 12,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.showWindowControls && (
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 10,
          padding: "0px 4px 0px 10px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <div style={{
              position: "relative",
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}>{props.icon1 ?? <WindowControls state={"active"} />}</div>
        </div>
        )}
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
        gap: 2,
        padding: "7px 12px 7px 12px",
        justifyContent: "center",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
      }}>
        <div style={{ position: "relative", flexShrink: 0 }}>{props.icon3 ?? <TitleSubheadline mode={"light"} />}</div>
        <div style={{ position: "relative", flexShrink: 0 }}>{props.icon4 ?? <SubtitleCaption mode={"light"} />}</div>
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
        alignSelf: "stretch",
      }}>
        <ButtonsTop
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}
          type={"1 symbol"}
        />
        <ButtonsTop
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}
          type={"1 symbol"}
        />
        {props.showSearch && (
        <SearchTop
          style={{
            position: "relative",
            width: 180,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}
          mode={"light"}
          state={"placeholder"}
        />
        )}
      </div>
    </div>
  );
  const __body7 = () => (
    <div className={props.className} style={{
      width: 820,
      display: "flex",
      flexDirection: "row",
      padding: "0px 10px 10px 10px",
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
        gap: 12,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.showWindowControls && (
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 10,
          padding: "0px 4px 0px 10px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <div style={{
              position: "relative",
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}>{props.icon1 ?? <WindowControls state={"active"} />}</div>
        </div>
        )}
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
        <div style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon3 ?? <ButtonsTop type={"1 symbol"} />}</div>
        <div style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon4 ?? <ButtonsTop type={"1 symbol"} />}</div>
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
        alignSelf: "stretch",
      }}>
        <ButtonsTop
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}
          type={"1 symbol"}
        />
        <ButtonsTop
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}
          type={"1 symbol"}
        />
        {props.showSearch && (
        <SearchTop
          style={{
            position: "relative",
            width: 180,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}
          mode={"light"}
          state={"placeholder"}
        />
        )}
      </div>
      <div style={{
        position: "absolute",
        left: 20,
        top: 5,
        width: 780,
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
  );
  const __impls = {
    // figma: Style=Compact Large, Tab Bar=True
    "style2=compact large|tabBar=true": __body0,
    // figma: Style=Large Title, Tab Bar=True
    "style2=large title|tabBar=true": __body1,
    // figma: Style=Title 2 Line Left, Tab Bar=True
    "style2=title 2 line left|tabBar=true": __body2,
    // figma: Style=Title 2 Line, Tab Bar=True
    "style2=title 2 line|tabBar=true": __body3,
    // figma: Style=Compact Large, Tab Bar=False
    "style2=compact large|tabBar=false": __body4,
    // figma: Style=Large Title, Tab Bar=False
    "style2=large title|tabBar=false": __body5,
    // figma: Style=Title 2 Line Left, Tab Bar=False
    "style2=title 2 line left|tabBar=false": __body6,
    // figma: Style=Title 2 Line, Tab Bar=False
    "style2=title 2 line|tabBar=false": __body7,
  };
  return (__impls[__vkey(props)] ?? __body7)();
}
export default ToolbarTopIPad;
