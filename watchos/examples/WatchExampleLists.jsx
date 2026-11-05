import { WatchBezels } from '../bezels/WatchBezels.jsx';
import { WatchButtonCircular } from '../buttons/WatchButtonCircular.jsx';
import { WatchButtonFloatingDefault } from '../alerts/WatchButtonFloatingDefault.jsx';
import { WatchFooter } from '../lists/WatchFooter.jsx';
import { WatchHeader } from '../lists/WatchHeader.jsx';
import { WatchItem } from '../lists/WatchItem.jsx';
import { WatchItemCarousel } from '../lists/WatchItemCarousel.jsx';
import { WatchItemLinkedTableview } from '../lists/WatchItemLinkedTableview.jsx';
import { WatchItemSourceList } from '../lists/WatchItemSourceList.jsx';
import { WatchNavigationBar } from '../navigation/WatchNavigationBar.jsx';

// figma node: 6512:4247 Example/Lists (4 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "type=" + __venc(p.type);

export function WatchExampleLists(_p = {}) {
  const props = { ..._p, type: _p.type ?? "grouped list items" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "calc(var(--watch-screen-width) * 1px)",
      height: "calc(var(--watch-screen-height) * 1px)",
      borderRadius: 20,
      backgroundColor: "rgb(0,0,0)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: "calc(var(--watch-screen-width) * 1px)",
        height: "calc(var(--watch-screen-height) * 1px)",
        overflow: "hidden",
        borderRadius: 20,
        display: "flex",
        flexDirection: "column",
        gap: 4,
        padding: "0px 0px 10px 0px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
      }}>
        <div style={{
          position: "relative",
          height: "calc(var(--watch-nav-bar-height) * 1px)",
          backdropFilter: "blur(30px)",
          display: "flex",
          flexDirection: "column",
          gap: "calc(var(--watch-nav-bar-gap-large-title) * 1px)",
          padding: "3px 9.500px 3px 9.500px",
          alignItems: "flex-end",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          paddingLeft: "calc(var(--watch-margin-lr-copy-safe-area) * 1px)",
          paddingTop: "calc(var(--watch-nav-bar-margin-top-large-title) * 1px)",
          paddingRight: "calc(var(--watch-margin-lr-copy-safe-area) * 1px)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"SF Compact\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 556,
            fontSize: "calc(var(--watch-nav-bar-font-size) * 1px)",
            textAlign: "right",
            whiteSpace: "nowrap",
            lineHeight: "18.500px",
            color: "var(--watch-colors-white-fff)",
            flexShrink: 0,
          }}>10:09</span>
          <span style={{
            position: "relative",
            fontFamily: "\"SF Compact\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 556,
            fontSize: "calc(var(--watch-nav-bar-label-font-size) * 1px)",
            lineHeight: "26.500px",
            color: "rgb(166,255,0)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>Workout</span>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 4,
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <WatchItemCarousel
            style={{
              position: "relative",
              height: 105.5,
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}
            label={"Outdoor Cycle"}
            subtitle={"Open Goal"}
            scrollState={"full view"}
            tinted={true}
          />
          <WatchItemCarousel
            style={{
              position: "relative",
              height: 105.5,
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}
            label={"Pilates"}
            subtitle={"Open Goal"}
            symbol={"􁌓"}
            scrollState={"partially clipped"}
            tinted={true}
          />
        </div>
        <WatchButtonFloatingDefault
          style={{
            position: "relative",
            height: 73,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          label={"Add Workout"}
        />
      </div>
      <WatchBezels
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 205,
          height: 251,
        }}
        bezelSize={"49mm"}
      />
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "calc(var(--watch-screen-width) * 1px)",
      height: "calc(var(--watch-screen-height) * 1px)",
      borderRadius: 20,
      backgroundColor: "rgb(0,0,0)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: "calc(var(--watch-screen-width) * 1px)",
        height: "calc(var(--watch-screen-height) * 1px)",
        overflow: "hidden",
        borderRadius: 20,
        display: "flex",
        flexDirection: "column",
        gap: 4,
        padding: "0px 0px 10px 0px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
      }}>
        <WatchNavigationBar
          style={{
            position: "relative",
            height: 64,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          type={"status + title"}
        />
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 10,
          padding: "0px 2px 0px 2px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            overflow: "hidden",
            borderRadius: 14.5,
            display: "flex",
            flexDirection: "column",
            gap: 1,
            alignItems: "flex-start",
            flexWrap: "nowrap",
            flexGrow: 1,
          }}>
            <WatchItemLinkedTableview style={{
                position: "relative",
                height: 57.5,
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }} />
            <WatchItemLinkedTableview
              style={{
                position: "relative",
                height: 57.5,
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }}
              showCheckmark={false}
            />
            <WatchItemLinkedTableview
              style={{
                position: "relative",
                height: 57.5,
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }}
              showCheckmark={false}
            />
            <WatchItemLinkedTableview
              style={{
                position: "relative",
                height: 57.5,
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }}
              showCheckmark={false}
            />
            <WatchItemLinkedTableview
              style={{
                position: "relative",
                height: 57.5,
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }}
              showCheckmark={false}
            />
          </div>
        </div>
      </div>
      <WatchBezels
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 205,
          height: 251,
        }}
        bezelSize={"49mm"}
      />
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: "calc(var(--watch-screen-width) * 1px)",
      height: "calc(var(--watch-screen-height) * 1px)",
      borderRadius: 20,
      backgroundColor: "rgb(0,0,0)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: "calc(var(--watch-screen-width) * 1px)",
        height: "calc(var(--watch-screen-height) * 1px)",
        overflow: "hidden",
        borderRadius: 20,
        display: "flex",
        flexDirection: "column",
        gap: 4,
        padding: "0px 0px 10px 0px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
      }}>
        <WatchNavigationBar
          style={{
            position: "relative",
            height: 64,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          type={"status + title"}
        />
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 4,
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <WatchItemSourceList
            style={{
              position: "relative",
              height: 92.5,
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}
            showSubtitle={true}
            scrollState={"full view"}
          />
          <div style={{
            position: "relative",
            height: 90.5,
            display: "flex",
            flexDirection: "row",
            padding: "4px 9.500px 4.500px 9.500px",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "absolute",
              left: 2,
              top: 0,
              width: 201,
              height: 91,
              borderRadius: 8.5,
              background: "linear-gradient(180deg, rgb(38,59,131) 0.00%, rgb(118,91,177) 46.50%, rgb(187,132,157) 100.00%)",
            }} />
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexGrow: 1,
            }}>
              <div style={{
                position: "relative",
                display: "flex",
                flexDirection: "row",
                gap: 2,
                alignItems: "flex-start",
                flexWrap: "nowrap",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>
                <span style={{
                  position: "relative",
                  fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 510,
                  fontSize: "calc(var(--watch-list-font-size) * 1px)",
                  lineHeight: "18px",
                  color: "var(--watch-text-colors-primary)",
                  flexGrow: 1,
                }}>Label</span>
              </div>
              <span style={{
                position: "relative",
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 274,
                fontSize: "calc(var(--watch-list-font-size-source-list-large) * 1px)",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                lineHeight: "32px",
                color: "var(--watch-text-colors-primary)",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>67º</span>
              <div style={{
                position: "relative",
                height: 16,
                flexShrink: 0,
                alignSelf: "stretch",
              }}>
                <span style={{
                  position: "absolute",
                  left: 0,
                  top: -2,
                  width: 144,
                  height: 19,
                  fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 510,
                  fontSize: "calc(var(--watch-list-font-size) * 1px)",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  lineHeight: "18px",
                  color: "rgba(188,188,188,0.6)",
                }}>Subtitle</span>
              </div>
            </div>
          </div>
          <div style={{
            position: "relative",
            height: 90.5,
            display: "flex",
            flexDirection: "row",
            padding: "4px 9.500px 4.500px 9.500px",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "absolute",
              left: 2,
              top: 0,
              width: 201,
              height: 91,
              borderRadius: 8.5,
              background: "linear-gradient(180deg, rgb(85,93,116) 0.00%, rgb(128,135,144) 100.00%)",
            }} />
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexGrow: 1,
            }}>
              <div style={{
                position: "relative",
                display: "flex",
                flexDirection: "row",
                gap: 2,
                alignItems: "flex-start",
                flexWrap: "nowrap",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>
                <span style={{
                  position: "relative",
                  fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 510,
                  fontSize: "calc(var(--watch-list-font-size) * 1px)",
                  lineHeight: "18px",
                  color: "var(--watch-text-colors-primary)",
                  flexGrow: 1,
                }}>Label</span>
              </div>
              <span style={{
                position: "relative",
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 274,
                fontSize: "calc(var(--watch-list-font-size-source-list-large) * 1px)",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                lineHeight: "32px",
                color: "var(--watch-text-colors-primary)",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>67º</span>
              <div style={{
                position: "relative",
                height: 16,
                flexShrink: 0,
                alignSelf: "stretch",
              }}>
                <span style={{
                  position: "absolute",
                  left: 0,
                  top: -2,
                  width: 144,
                  height: 19,
                  fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 510,
                  fontSize: "calc(var(--watch-list-font-size) * 1px)",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  lineHeight: "18px",
                  color: "rgba(188,188,188,0.6)",
                }}>Secondary Text</span>
              </div>
            </div>
          </div>
          <div style={{
            position: "relative",
            height: 0,
            flexShrink: 0,
            alignSelf: "stretch",
          }} />
          <div style={{
              position: "relative",
              width: 47,
              height: 47,
              flexShrink: 0,
            }}>{props.icon1 ?? <WatchButtonCircular label={"􀅼"} type={"default"} />}</div>
        </div>
      </div>
      <WatchBezels
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 205,
          height: 251,
        }}
        bezelSize={"49mm"}
      />
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: "calc(var(--watch-screen-width) * 1px)",
      height: "calc(var(--watch-screen-height) * 1px)",
      borderRadius: 20,
      backgroundColor: "rgb(0,0,0)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: "calc(var(--watch-screen-width) * 1px)",
        height: "calc(var(--watch-screen-height) * 1px)",
        overflow: "hidden",
        borderRadius: 20,
        display: "flex",
        flexDirection: "column",
        gap: 4,
        padding: "0px 0px 10px 0px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
      }}>
        <WatchNavigationBar
          style={{
            position: "relative",
            height: 64,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          type={"child - status + title"}
        />
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 66,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            gap: 4,
            padding: "0px 0px 18px 0px",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <WatchHeader style={{
                position: "relative",
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }} />
            <WatchItem
              style={{
                position: "relative",
                height: 57.5,
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }}
              symbolLeading={false}
              symbolTrailing={false}
              text={"default"}
            />
            <WatchItem
              style={{
                position: "relative",
                height: 57.5,
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }}
              text={"default"}
            />
            <WatchFooter style={{
                position: "relative",
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }} />
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            gap: 4,
            alignItems: "flex-start",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <WatchItem
              style={{
                position: "relative",
                height: 57.5,
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }}
              label={"Primary Text Primary Text"}
              text={"default"}
            />
            <WatchItem
              style={{
                position: "relative",
                height: 58.5,
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }}
              text={"subtitle + title"}
            />
            <WatchItem
              style={{
                position: "relative",
                height: 77.5,
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }}
              text={"3-line label + symbol"}
            />
            <WatchFooter style={{
                position: "relative",
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }} />
          </div>
        </div>
      </div>
      <WatchBezels
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 205,
          height: 251,
        }}
        bezelSize={"49mm"}
      />
    </div>
  );
  const __impls = {
    // figma: Type=Workout
    "type=workout": __body0,
    // figma: Type=Menu
    "type=menu": __body1,
    // figma: Type=Colorful
    "type=colorful": __body2,
    // figma: Type=Grouped List Items
    "type=grouped list items": __body3,
  };
  return (__impls[__vkey(props)] ?? __body3)();
}
export default WatchExampleLists;
