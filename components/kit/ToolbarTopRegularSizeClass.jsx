import { ButtonBottom48PtBack } from '../kit/ButtonBottom48PtBack.jsx';
import { ButtonSymbol } from '../buttons/ButtonSymbol.jsx';
import { ButtonText } from '../buttons/ButtonText.jsx';
import { MaterialsModeOptions } from '../materials/MaterialsModeOptions.jsx';
import { SearchField } from '../fields/SearchField.jsx';

// figma node: 130:65806 Toolbar - Top (Regular Size Class) (4 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "style2=" + __venc(p.style2);

export function ToolbarTopRegularSizeClass(_p = {}) {
  const props = { ..._p, style2: _p.style2 ?? "default", showLeading: _p.showLeading ?? true, showCenter: _p.showCenter ?? true, showTrailing: _p.showTrailing ?? true, showSearch: _p.showSearch ?? true, title: _p.title ?? "Title", showBackground: _p.showBackground ?? true, showSidebarControl: _p.showSidebarControl ?? true, showTitle: _p.showTitle ?? true };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 1210,
      display: "flex",
      flexDirection: "column",
      gap: 3,
      padding: "0px 4px 12px 4px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showBackground && (
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 1210,
        height: 75,
        overflow: "hidden",
        borderTop: "1px solid rgba(0,0,0,0.3)",
        borderRight: "1px solid rgba(0,0,0,0.3)",
        borderBottom: "0.333px solid rgba(0,0,0,0.3)",
        borderLeft: "1px solid rgba(0,0,0,0.3)",
      }}>
        <MaterialsModeOptions
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 1210,
            height: 75,
          }}
          mode={"light"}
          style2={"chrome"}
        />
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 3,
        padding: "9.500px 9.500px 9.500px 9.500px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 5,
          height: 5,
          borderRadius: "50%",
          backgroundColor: "rgba(255,255,255,0.4)",
          flexShrink: 0,
        }} />
        <div style={{
          position: "relative",
          width: 5,
          height: 5,
          borderRadius: "50%",
          backgroundColor: "rgba(255,255,255,0.4)",
          flexShrink: 0,
        }} />
        <div style={{
          position: "relative",
          width: 5,
          height: 5,
          borderRadius: "50%",
          backgroundColor: "rgba(255,255,255,0.4)",
          flexShrink: 0,
        }} />
      </div>
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
          gap: 30,
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          {props.showSidebarControl && (
          <div style={{ position: "relative", width: 31, flexShrink: 0 }}>{props.icon1 ?? <ButtonSymbol symbol={"􀰱"} enabled={true} />}</div>
          )}
          <div style={{ position: "relative", width: 16, flexShrink: 0 }}>{props.icon2 ?? <ButtonSymbol symbol={"􀯶"} enabled={true} />}</div>
          <div style={{ position: "relative", width: 16, flexShrink: 0 }}>{props.icon3 ?? <ButtonSymbol symbol={"􀆊"} enabled={false} />}</div>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 19,
          justifyContent: "flex-end",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <div style={{ position: "relative", width: 30, flexShrink: 0 }}>{props.icon4 ?? <ButtonSymbol symbol={"􀈙"} enabled={true} />}</div>
          <ButtonSymbol
            style={{ position: "relative", flexShrink: 0 }}
            symbol={"􀇷"}
            enabled={true}
          />
          <ButtonText
            style={{ position: "relative", width: 49, flexShrink: 0 }}
            label={"Select"}
            emphasized={false}
            enabled={true}
          />
          <SearchField
            style={{ position: "relative", width: 272, flexShrink: 0 }}
            state={"placeholder"}
          />
        </div>
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 1210,
      display: "flex",
      flexDirection: "column",
      gap: 3,
      padding: "0px 4px 0px 4px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showBackground && (
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 1210,
        height: 126,
        overflow: "hidden",
        borderTop: "1px solid rgba(0,0,0,0.3)",
        borderRight: "1px solid rgba(0,0,0,0.3)",
        borderBottom: "0.333px solid rgba(0,0,0,0.3)",
        borderLeft: "1px solid rgba(0,0,0,0.3)",
      }}>
        <MaterialsModeOptions
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 1210,
            height: 126,
          }}
          mode={"light"}
          style2={"chrome"}
        />
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 3,
        padding: "9.500px 9.500px 9.500px 9.500px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 5,
          height: 5,
          borderRadius: "50%",
          backgroundColor: "rgba(255,255,255,0.4)",
          flexShrink: 0,
        }} />
        <div style={{
          position: "relative",
          width: 5,
          height: 5,
          borderRadius: "50%",
          backgroundColor: "rgba(255,255,255,0.4)",
          flexShrink: 0,
        }} />
        <div style={{
          position: "relative",
          width: 5,
          height: 5,
          borderRadius: "50%",
          backgroundColor: "rgba(255,255,255,0.4)",
          flexShrink: 0,
        }} />
      </div>
      <div style={{
        position: "relative",
        height: 44,
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            height: 48,
          }}>{props.icon1 ?? <ButtonBottom48PtBack />}</div>
        {props.showTitle && (
        <span style={{
          position: "absolute",
          left: 583,
          top: 11,
          width: 36,
          height: 22,
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 590,
          fontSize: 17,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "22px",
          letterSpacing: "-0.430px",
          color: "var(--labels-primary)",
        }}>{props.title}</span>
        )}
        {props.showTrailing && (
        <div style={{
          position: "absolute",
          left: 1038,
          top: 0,
          boxShadow: "inset 0 0 0 1px rgb(255,0,0)",
          display: "flex",
          flexDirection: "row",
          gap: 16,
          padding: "11px 16px 11px 0px",
          justifyContent: "flex-end",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <div style={{
            position: "relative",
            backgroundColor: "rgb(255,105,105)",
            display: "flex",
            flexDirection: "row",
            gap: 10,
            alignItems: "flex-start",
            flexWrap: "nowrap",
            flexShrink: 0,
          }}>
            <span style={{
              position: "relative",
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 17,
              textAlign: "right",
              whiteSpace: "nowrap",
              lineHeight: "22px",
              color: "rgba(60,60,67,0.18)",
              flexShrink: 0,
            }}>􀓔</span>
          </div>
          <div style={{
            position: "relative",
            backgroundColor: "rgb(255,105,105)",
            display: "flex",
            flexDirection: "row",
            gap: 10,
            alignItems: "flex-start",
            flexWrap: "nowrap",
            flexShrink: 0,
          }}>
            <span style={{
              position: "relative",
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 17,
              textAlign: "right",
              whiteSpace: "nowrap",
              lineHeight: "22px",
              color: "var(--accents-blue)",
              flexShrink: 0,
            }}>􀓔</span>
          </div>
          <div style={{
            position: "relative",
            backgroundColor: "rgb(255,105,105)",
            display: "flex",
            flexDirection: "row",
            gap: 10,
            alignItems: "flex-start",
            flexWrap: "nowrap",
            flexShrink: 0,
          }}>
            <span style={{
              position: "relative",
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 17,
              textAlign: "right",
              whiteSpace: "nowrap",
              lineHeight: "22px",
              color: "var(--accents-blue)",
              flexShrink: 0,
            }}>􀓔</span>
          </div>
          <div style={{
            position: "relative",
            backgroundColor: "rgb(255,105,105)",
            display: "flex",
            flexDirection: "row",
            gap: 10,
            alignItems: "flex-start",
            flexWrap: "nowrap",
            flexShrink: 0,
          }}>
            <span style={{
              position: "relative",
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 17,
              textAlign: "right",
              whiteSpace: "nowrap",
              lineHeight: "22px",
              color: "var(--accents-blue)",
              flexShrink: 0,
            }}>􀓔</span>
          </div>
        </div>
        )}
      </div>
      {props.showSearch && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        padding: "1px 16px 15px 16px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <SearchField
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          searchText={"Search"}
          state={"placeholder"}
        />
      </div>
      )}
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 1210,
      display: "flex",
      flexDirection: "column",
      gap: 3,
      padding: "0px 4px 0px 4px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showBackground && (
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 1210,
        height: 178,
        overflow: "hidden",
        borderTop: "1px solid rgba(0,0,0,0.3)",
        borderRight: "1px solid rgba(0,0,0,0.3)",
        borderBottom: "0.333px solid rgba(0,0,0,0.3)",
        borderLeft: "1px solid rgba(0,0,0,0.3)",
      }}>
        <MaterialsModeOptions
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 1210,
            height: 178,
          }}
          mode={"light"}
          style2={"chrome"}
        />
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 3,
        padding: "9.500px 9.500px 9.500px 9.500px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 5,
          height: 5,
          borderRadius: "50%",
          backgroundColor: "rgba(255,255,255,0.4)",
          flexShrink: 0,
        }} />
        <div style={{
          position: "relative",
          width: 5,
          height: 5,
          borderRadius: "50%",
          backgroundColor: "rgba(255,255,255,0.4)",
          flexShrink: 0,
        }} />
        <div style={{
          position: "relative",
          width: 5,
          height: 5,
          borderRadius: "50%",
          backgroundColor: "rgba(255,255,255,0.4)",
          flexShrink: 0,
        }} />
      </div>
      <div style={{
        position: "relative",
        height: 44,
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            height: 48,
          }}>{props.icon1 ?? <ButtonBottom48PtBack />}</div>
        {props.showTrailing && (
        <div style={{
          position: "absolute",
          left: 1038,
          top: 0,
          boxShadow: "inset 0 0 0 1px rgb(255,0,0)",
          display: "flex",
          flexDirection: "row",
          gap: 16,
          padding: "11px 16px 11px 0px",
          justifyContent: "flex-end",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <div style={{
            position: "relative",
            backgroundColor: "rgb(255,105,105)",
            display: "flex",
            flexDirection: "row",
            gap: 10,
            alignItems: "flex-start",
            flexWrap: "nowrap",
            flexShrink: 0,
          }}>
            <span style={{
              position: "relative",
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 17,
              textAlign: "right",
              whiteSpace: "nowrap",
              lineHeight: "22px",
              color: "rgba(60,60,67,0.18)",
              flexShrink: 0,
            }}>􀓔</span>
          </div>
          <div style={{
            position: "relative",
            backgroundColor: "rgb(255,105,105)",
            display: "flex",
            flexDirection: "row",
            gap: 10,
            alignItems: "flex-start",
            flexWrap: "nowrap",
            flexShrink: 0,
          }}>
            <span style={{
              position: "relative",
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 17,
              textAlign: "right",
              whiteSpace: "nowrap",
              lineHeight: "22px",
              color: "var(--accents-blue)",
              flexShrink: 0,
            }}>􀓔</span>
          </div>
          <div style={{
            position: "relative",
            backgroundColor: "rgb(255,105,105)",
            display: "flex",
            flexDirection: "row",
            gap: 10,
            alignItems: "flex-start",
            flexWrap: "nowrap",
            flexShrink: 0,
          }}>
            <span style={{
              position: "relative",
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 17,
              textAlign: "right",
              whiteSpace: "nowrap",
              lineHeight: "22px",
              color: "var(--accents-blue)",
              flexShrink: 0,
            }}>􀓔</span>
          </div>
          <div style={{
            position: "relative",
            backgroundColor: "rgb(255,105,105)",
            display: "flex",
            flexDirection: "row",
            gap: 10,
            alignItems: "flex-start",
            flexWrap: "nowrap",
            flexShrink: 0,
          }}>
            <span style={{
              position: "relative",
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 17,
              textAlign: "right",
              whiteSpace: "nowrap",
              lineHeight: "22px",
              color: "var(--accents-blue)",
              flexShrink: 0,
            }}>􀓔</span>
          </div>
        </div>
        )}
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: "4px 16px 4px 16px",
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
          color: "var(--labels-primary)",
          flexShrink: 0,
        }}>{props.title}</span>
      </div>
      {props.showSearch && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        padding: "1px 16px 15px 16px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <SearchField
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          searchText={"Search"}
          state={"placeholder"}
        />
      </div>
      )}
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 1210,
      display: "flex",
      flexDirection: "column",
      gap: 3,
      padding: "0px 4px 0px 4px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showBackground && (
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 1210,
        height: 71,
        overflow: "hidden",
        borderTop: "1px solid rgba(0,0,0,0.3)",
        borderRight: "1px solid rgba(0,0,0,0.3)",
        borderBottom: "0.333px solid rgba(0,0,0,0.3)",
        borderLeft: "1px solid rgba(0,0,0,0.3)",
      }}>
        <MaterialsModeOptions
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 1210,
            height: 71,
          }}
          mode={"light"}
          style2={"chrome"}
        />
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 3,
        padding: "9.500px 9.500px 9.500px 9.500px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 5,
          height: 5,
          borderRadius: "50%",
          backgroundColor: "rgba(255,255,255,0.4)",
          flexShrink: 0,
        }} />
        <div style={{
          position: "relative",
          width: 5,
          height: 5,
          borderRadius: "50%",
          backgroundColor: "rgba(255,255,255,0.4)",
          flexShrink: 0,
        }} />
        <div style={{
          position: "relative",
          width: 5,
          height: 5,
          borderRadius: "50%",
          backgroundColor: "rgba(255,255,255,0.4)",
          flexShrink: 0,
        }} />
      </div>
      <div style={{
        position: "relative",
        height: 44,
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.showTrailing && (
        <div style={{
          position: "absolute",
          left: 964,
          top: 0,
          boxShadow: "inset 0 0 0 1px rgb(255,0,0)",
          display: "flex",
          flexDirection: "row",
          gap: 16,
          padding: "11px 16px 11px 0px",
          justifyContent: "flex-end",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <div style={{
            position: "relative",
            backgroundColor: "rgb(255,105,105)",
            display: "flex",
            flexDirection: "row",
            gap: 10,
            alignItems: "flex-start",
            flexWrap: "nowrap",
            flexShrink: 0,
          }}>
            <span style={{
              position: "relative",
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 17,
              textAlign: "right",
              whiteSpace: "nowrap",
              lineHeight: "22px",
              color: "var(--accents-blue)",
              flexShrink: 0,
            }}>􀈂</span>
          </div>
          <div style={{
            position: "relative",
            backgroundColor: "rgb(255,105,105)",
            display: "flex",
            flexDirection: "row",
            gap: 10,
            alignItems: "flex-start",
            flexWrap: "nowrap",
            flexShrink: 0,
          }}>
            <span style={{
              position: "relative",
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 17,
              textAlign: "right",
              whiteSpace: "nowrap",
              lineHeight: "22px",
              color: "var(--accents-blue)",
              flexShrink: 0,
            }}>􀊫</span>
          </div>
          <div style={{
            position: "relative",
            backgroundColor: "rgb(255,105,105)",
            display: "flex",
            flexDirection: "row",
            gap: 10,
            alignItems: "flex-start",
            flexWrap: "nowrap",
            flexShrink: 0,
          }}>
            <span style={{
              position: "relative",
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 17,
              textAlign: "right",
              whiteSpace: "nowrap",
              lineHeight: "22px",
              color: "var(--accents-blue)",
              flexShrink: 0,
            }}>􀈏</span>
          </div>
          <div style={{
            position: "relative",
            backgroundColor: "rgb(255,105,105)",
            display: "flex",
            flexDirection: "row",
            gap: 10,
            alignItems: "flex-start",
            flexWrap: "nowrap",
            flexShrink: 0,
          }}>
            <span style={{
              position: "relative",
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 17,
              textAlign: "right",
              whiteSpace: "nowrap",
              lineHeight: "22px",
              color: "var(--accents-blue)",
              flexShrink: 0,
            }}>􀉥</span>
          </div>
          <div style={{
            position: "relative",
            backgroundColor: "rgb(255,105,105)",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            flexShrink: 0,
          }}>
            <span style={{
              position: "relative",
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 590,
              fontSize: 17,
              textAlign: "right",
              whiteSpace: "nowrap",
              lineHeight: "22px",
              letterSpacing: "-0.400px",
              color: "var(--accents-blue)",
              flexShrink: 0,
            }}>Done</span>
          </div>
        </div>
        )}
        {props.showCenter && (
        <div style={{
          position: "absolute",
          left: 527,
          top: 0,
          boxShadow: "inset 0 0 0 1px rgb(255,0,0)",
          display: "flex",
          flexDirection: "row",
          gap: 16,
          padding: "11px 0px 11px 0px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <div style={{
            position: "relative",
            backgroundColor: "rgb(255,105,105)",
            display: "flex",
            flexDirection: "row",
            gap: 10,
            alignItems: "flex-start",
            flexWrap: "nowrap",
            flexShrink: 0,
          }}>
            <span style={{
              position: "relative",
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 17,
              textAlign: "right",
              whiteSpace: "nowrap",
              lineHeight: "22px",
              color: "var(--accents-blue)",
              flexShrink: 0,
            }}>􀓔</span>
          </div>
          <div style={{
            position: "relative",
            backgroundColor: "rgb(255,105,105)",
            display: "flex",
            flexDirection: "row",
            gap: 10,
            alignItems: "flex-start",
            flexWrap: "nowrap",
            flexShrink: 0,
          }}>
            <span style={{
              position: "relative",
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 17,
              textAlign: "right",
              whiteSpace: "nowrap",
              lineHeight: "22px",
              color: "var(--accents-blue)",
              flexShrink: 0,
            }}>􀓔</span>
          </div>
          <div style={{
            position: "relative",
            backgroundColor: "rgb(255,105,105)",
            display: "flex",
            flexDirection: "row",
            gap: 10,
            alignItems: "flex-start",
            flexWrap: "nowrap",
            flexShrink: 0,
          }}>
            <span style={{
              position: "relative",
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 17,
              textAlign: "right",
              whiteSpace: "nowrap",
              lineHeight: "22px",
              color: "var(--accents-blue)",
              flexShrink: 0,
            }}>􀓔</span>
          </div>
          <div style={{
            position: "relative",
            backgroundColor: "rgb(255,105,105)",
            display: "flex",
            flexDirection: "row",
            gap: 10,
            alignItems: "flex-start",
            flexWrap: "nowrap",
            flexShrink: 0,
          }}>
            <span style={{
              position: "relative",
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 17,
              textAlign: "right",
              whiteSpace: "nowrap",
              lineHeight: "22px",
              color: "var(--accents-blue)",
              flexShrink: 0,
            }}>􀓔</span>
          </div>
        </div>
        )}
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          display: "flex",
          flexDirection: "row",
          gap: 19,
          alignItems: "center",
          flexWrap: "nowrap",
        }}>
          {props.showLeading && (
          <div style={{
            position: "relative",
            width: 43,
            boxShadow: "inset 0 0 0 1px rgb(255,0,0)",
            display: "flex",
            flexDirection: "row",
            gap: 16,
            padding: "11px 16px 11px 16px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <div style={{
              position: "relative",
              backgroundColor: "rgb(255,105,105)",
              display: "flex",
              flexDirection: "row",
              gap: 10,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexShrink: 0,
            }}>
              <span style={{
                position: "relative",
                fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 17,
                textAlign: "right",
                whiteSpace: "nowrap",
                lineHeight: "22px",
                color: "var(--accents-blue)",
                flexShrink: 0,
              }}>􀋲</span>
            </div>
          </div>
          )}
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: 8,
            padding: "11px 0px 11px 0px",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
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
            }}>{props.text1 ?? "Document Title"}</span>
            <div style={{
              position: "relative",
              width: 13.696,
              height: 13.671,
              overflow: "hidden",
              flexShrink: 0,
            }}>
              <svg width={13.696} height={13.671} viewBox="0 0 13.696 13.671" fill="none" style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 13.696,
                height: 13.671,
                color: "rgba(60,60,67,0.18)",
              }}>
                <path d={"M 6.848 13.671 C 7.79 13.671 8.674 13.494 9.499 13.14 C 10.325 12.786 11.052 12.292 11.681 11.658 C 12.31 11.025 12.803 10.296 13.16 9.471 C 13.518 8.647 13.696 7.767 13.696 6.832 C 13.696 5.896 13.518 5.016 13.16 4.192 C 12.803 3.367 12.308 2.64 11.677 2.009 C 11.045 1.378 10.317 0.885 9.491 0.531 C 8.665 0.177 7.782 0 6.84 0 C 5.903 0 5.023 0.177 4.197 0.531 C 3.371 0.885 2.644 1.378 2.015 2.009 C 1.387 2.64 0.893 3.367 0.536 4.192 C 0.179 5.016 0 5.896 0 6.832 C 0 7.767 0.179 8.647 0.536 9.471 C 0.893 10.296 1.388 11.025 2.02 11.658 C 2.651 12.292 3.38 12.786 4.205 13.14 C 5.031 13.494 5.912 13.671 6.848 13.671 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
              <svg width={7.081} height={4.242} viewBox="0 0 7.081 4.242" fill="none" style={{
                position: "absolute",
                left: 3.312,
                top: 5.113,
                width: 7.081,
                height: 4.242,
                color: "rgba(60,60,67,0.6)",
              }}>
                <path d={"M 3.541 4.242 C 3.233 4.242 2.955 4.112 2.705 3.852 L 0.195 1.162 C 0.068 1.024 0.003 0.862 0 0.677 C -0.003 0.491 0.054 0.338 0.17 0.216 C 0.315 0.072 0.481 0 0.669 0 C 0.858 0 1.015 0.069 1.143 0.208 L 3.536 2.772 L 5.938 0.208 C 6.066 0.069 6.224 0.001 6.412 0.004 C 6.6 0.007 6.764 0.077 6.902 0.216 C 7.024 0.332 7.084 0.484 7.081 0.672 C 7.078 0.861 7.01 1.024 6.877 1.162 L 4.376 3.852 C 4.126 4.112 3.848 4.242 3.541 4.242 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  const __impls = {
    // figma: Style=Document Browser
    "style2=document browser": __body0,
    // figma: Style=Default
    "style2=default": __body1,
    // figma: Style=Large Title
    "style2=large title": __body2,
    // figma: Style=Document
    "style2=document": __body3,
  };
  return (__impls[__vkey(props)] ?? __body1)();
}
export default ToolbarTopRegularSizeClass;
