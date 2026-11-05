import { ButtonsTop } from '../actions/ButtonsTop.jsx';
import { IPhone17Pro } from '../kit/IPhone17Pro.jsx';
import { LiquidGlassRegularSmall } from '../buttons/LiquidGlassRegularSmall.jsx';
import { ScrollEdgeEffectSoft } from '../kit/ScrollEdgeEffectSoft.jsx';
import { StatusBarIPhone2 } from '../navigation/StatusBarIPhone2.jsx';
import { TabBarButtonIPhoneSearch } from '../tab-bars/TabBarButtonIPhoneSearch.jsx';
import { TitleLargeTitle } from '../navigation/TitleLargeTitle.jsx';

// figma node: 5660:57680 Examples/Tab Bar (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "splitSearch=" + __venc(p.splitSearch);

export function ExamplesTabBar(_p = {}) {
  const props = { ..._p, splitSearch: _p.splitSearch ?? true };
  const __body0 = () => (
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
        borderRadius: 50,
        backgroundColor: "var(--backgrounds-primary)",
        display: "flex",
        flexDirection: "column",
        padding: "167px 16px 10px 16px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
      }}>
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
          <span style={{
            position: "relative",
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 590,
            fontSize: 17,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "22px",
            color: "var(--labels-primary)",
            flexShrink: 0,
          }}>{props.text1 ?? "Content area"}</span>
        </div>
        <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 402,
            height: 200,
          }}>
          <ScrollEdgeEffectSoft
            style={{ transform: "scale(2.010, 1)", transformOrigin: "0 0" }}
            edge={"top"}
          />
        </div>
        <div style={{
            position: "absolute",
            left: 0,
            top: 764,
            width: 402,
            height: 110,
          }}>
          <ScrollEdgeEffectSoft
            style={{ transform: "scale(2.010, 0.550)", transformOrigin: "0 0" }}
            edge={"bottom"}
          />
        </div>
      </div>
      <div style={{
        position: "absolute",
        left: 0,
        top: 779,
        width: 402,
        display: "flex",
        flexDirection: "row",
        padding: "16px 25px 25px 25px",
        justifyContent: "center",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: -8,
          padding: "0px 2px 0px 2px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexGrow: 1,
        }}>
          <div style={{
              position: "absolute",
              left: -4,
              top: -4,
              width: 360,
              height: 62,
            }}>
            <LiquidGlassRegularSmall
              style={{ transform: "scale(7.500, 1.292)", transformOrigin: "0 0" }}
              mode={"light"}
              state={"default"}
            />
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            gap: 1,
            padding: "6px 8px 7px 8px",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
          }}>
            <div style={{
              position: "absolute",
              left: -2,
              top: 0,
              width: 97,
              height: 54,
              borderRadius: 100,
              backgroundColor: "var(--fills-vibrant-tertiary)",
            }} />
            <span style={{
              position: "relative",
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 590,
              fontSize: 18,
              textAlign: "center",
              lineHeight: "28px",
              color: "var(--accents-blue)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>􀋃</span>
            <span style={{
              position: "relative",
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 590,
              fontSize: 10,
              textAlign: "center",
              lineHeight: "12px",
              letterSpacing: "-0.100px",
              color: "var(--accents-blue)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>Tab 1</span>
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            gap: 0.5,
            padding: "6px 8px 7px 8px",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
          }}>
            <span style={{
              position: "relative",
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 590,
              fontSize: 18,
              textAlign: "center",
              lineHeight: "28px",
              color: "var(--labels-vibrant-controls-primary)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>􀋃</span>
            <span style={{
              position: "relative",
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 590,
              fontSize: 10,
              textAlign: "center",
              lineHeight: "12px",
              color: "var(--labels-vibrant-controls-primary)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>Tab 2</span>
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            gap: 0.5,
            padding: "6px 8px 7px 8px",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
          }}>
            <span style={{
              position: "relative",
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 590,
              fontSize: 18,
              textAlign: "center",
              lineHeight: "28px",
              color: "var(--labels-vibrant-controls-primary)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>􀋃</span>
            <span style={{
              position: "relative",
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 590,
              fontSize: 10,
              textAlign: "center",
              lineHeight: "12px",
              color: "var(--labels-vibrant-controls-primary)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>Tab 3</span>
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            gap: 0.5,
            padding: "6px 8px 7px 8px",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
          }}>
            <span style={{
              position: "relative",
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 590,
              fontSize: 18,
              textAlign: "center",
              lineHeight: "28px",
              color: "var(--labels-vibrant-controls-primary)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>􀋃</span>
            <span style={{
              position: "relative",
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 590,
              fontSize: 10,
              textAlign: "center",
              lineHeight: "12px",
              color: "var(--labels-vibrant-controls-primary)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>Tab 4</span>
          </div>
        </div>
      </div>
      <div style={{
        position: "absolute",
        left: 0,
        top: 62,
        width: 402,
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: "0px 0px 10px 0px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
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
            justifyContent: "flex-end",
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
          }}>
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
  const __body1 = () => (
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
        borderRadius: 50,
        backgroundColor: "var(--backgrounds-primary)",
        display: "flex",
        flexDirection: "column",
        padding: "167px 16px 10px 16px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
      }}>
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
          <span style={{
            position: "relative",
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 590,
            fontSize: 17,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "22px",
            color: "var(--labels-primary)",
            flexShrink: 0,
          }}>{props.text1 ?? "Content area"}</span>
        </div>
        <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 402,
            height: 200,
          }}>
          <ScrollEdgeEffectSoft
            style={{ transform: "scale(2.010, 1)", transformOrigin: "0 0" }}
            edge={"top"}
          />
        </div>
        <div style={{
            position: "absolute",
            left: 0,
            top: 764,
            width: 402,
            height: 110,
          }}>
          <ScrollEdgeEffectSoft
            style={{ transform: "scale(2.010, 0.550)", transformOrigin: "0 0" }}
            edge={"bottom"}
          />
        </div>
      </div>
      <div style={{
        position: "absolute",
        left: 0,
        top: 779,
        width: 402,
        display: "flex",
        flexDirection: "row",
        gap: 16,
        padding: "16px 25px 25px 25px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: -8,
          padding: "0px 2px 0px 2px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexGrow: 1,
        }}>
          <div style={{
              position: "absolute",
              left: -4,
              top: -4,
              width: 290,
              height: 62,
            }}>
            <LiquidGlassRegularSmall
              style={{ transform: "scale(6.042, 1.292)", transformOrigin: "0 0" }}
              mode={"light"}
              state={"default"}
            />
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            gap: 1,
            padding: "6px 8px 7px 8px",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
          }}>
            <div style={{
              position: "absolute",
              left: -2,
              top: 0,
              width: 102,
              height: 54,
              borderRadius: 100,
              backgroundColor: "var(--fills-vibrant-tertiary)",
            }} />
            <span style={{
              position: "relative",
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 590,
              fontSize: 18,
              textAlign: "center",
              lineHeight: "28px",
              color: "var(--accents-blue)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>􀋃</span>
            <span style={{
              position: "relative",
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 590,
              fontSize: 10,
              textAlign: "center",
              lineHeight: "12px",
              letterSpacing: "-0.100px",
              color: "var(--accents-blue)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>Tab 1</span>
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            gap: 0.5,
            padding: "6px 8px 7px 8px",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
          }}>
            <span style={{
              position: "relative",
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 590,
              fontSize: 18,
              textAlign: "center",
              lineHeight: "28px",
              color: "var(--labels-vibrant-controls-primary)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>􀋃</span>
            <span style={{
              position: "relative",
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 590,
              fontSize: 10,
              textAlign: "center",
              lineHeight: "12px",
              color: "var(--labels-vibrant-controls-primary)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>Tab 2</span>
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            gap: 0.5,
            padding: "6px 8px 7px 8px",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
          }}>
            <span style={{
              position: "relative",
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 590,
              fontSize: 18,
              textAlign: "center",
              lineHeight: "28px",
              color: "var(--labels-vibrant-controls-primary)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>􀋃</span>
            <span style={{
              position: "relative",
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 590,
              fontSize: 10,
              textAlign: "center",
              lineHeight: "12px",
              color: "var(--labels-vibrant-controls-primary)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>Tab 3</span>
          </div>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: -10,
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <div style={{
              position: "absolute",
              left: -4,
              top: -4,
              width: 62,
              height: 62,
            }}>
            <LiquidGlassRegularSmall
              style={{ transform: "scale(1.292, 1.292)", transformOrigin: "0 0" }}
              mode={"light"}
              state={"default"}
            />
          </div>
          <TabBarButtonIPhoneSearch
            style={{
              position: "relative",
              width: 54,
              height: 54,
              flexShrink: 0,
            }}
            selected={false}
            mode={"light"}
          />
        </div>
      </div>
      <div style={{
        position: "absolute",
        left: 0,
        top: 62,
        width: 402,
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: "0px 0px 10px 0px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
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
            justifyContent: "flex-end",
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
          }}>
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
  const __impls = {
    // figma: Split Search=False
    "splitSearch=false": __body0,
    // figma: Split Search=True
    "splitSearch=true": __body1,
  };
  return (__impls[__vkey(props)] ?? __body1)();
}
export default ExamplesTabBar;
