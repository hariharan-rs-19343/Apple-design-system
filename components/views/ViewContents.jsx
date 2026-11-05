import { Actions } from './Actions.jsx';
import { ActionsLast } from './ActionsLast.jsx';
import { ActionsMiddle } from './ActionsMiddle.jsx';
import { ActionsSingle } from './ActionsSingle.jsx';
import { Airdrop } from './Airdrop.jsx';
import { App } from './App.jsx';
import { Contact } from '../fields/Contact.jsx';
import { HeaderDarkTitleSubtitle } from './HeaderDarkTitleSubtitle.jsx';
import { HeaderLightTitleSubtitle } from './HeaderLightTitleSubtitle.jsx';
import { Messages } from './Messages.jsx';
import { Notes } from './Notes.jsx';
import { Reminders } from './Reminders.jsx';
import { SystemIcons } from '../app-icons/SystemIcons.jsx';

// figma node: 127:58957 _View Contents (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "mode=" + __venc(p.mode);

export function ViewContents(_p = {}) {
  const props = { ..._p, mode: _p.mode ?? "light" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      background: "linear-gradient(rgb(92,92,92),rgb(92,92,92)), linear-gradient(rgba(153,153,153,0.97),rgba(153,153,153,0.97))",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <HeaderDarkTitleSubtitle
        style={{
          position: "relative",
          height: 92,
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        subtitle1={"Subtitle 1"}
        title={"Title"}
      />
      <svg height={0.333} viewBox="0 0 393 0.333" fill="none" style={{
        position: "relative",
        height: 0.333,
        flexShrink: 0,
        alignSelf: "stretch",
        color: "rgba(60,60,67,0.36)",
      }}>
        <path d={"M 0 0 L 393 0 L 393 0.333 L 0 0.333 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 26,
        padding: "21px 16px 28px 16px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <Contact
          style={{
            position: "relative",
            width: 78,
            height: 104,
            flexShrink: 0,
          }}
          firstName={"Sandy Wilder Cheng"}
          people={"1"}
        />
        <div style={{
          position: "relative",
          width: 78,
          height: 104,
          flexShrink: 0,
        }}>
          <div style={{
            position: "absolute",
            left: 0,
            top: 75,
            width: 78,
            display: "flex",
            flexDirection: "column",
            gap: 1,
            alignItems: "flex-start",
            flexWrap: "nowrap",
          }}>
            <span style={{
              position: "relative",
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 12,
              textAlign: "center",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              lineHeight: "15px",
              letterSpacing: "0.060px",
              color: "var(--labels-primary)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>Kevin Leong</span>
            <span style={{
              position: "relative",
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 12,
              textAlign: "center",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              lineHeight: "15px",
              letterSpacing: "0.060px",
              color: "var(--labels-primary)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>Last</span>
          </div>
          <svg width={70} height={70} viewBox="0 0 70 70" fill="none" style={{
            position: "absolute",
            left: 4,
            top: 0,
            width: 70,
            height: 70,
            overflow: "hidden",
            borderRadius: 100,
          }}>
            <path d={"M 0 35 C 0 15.67 15.67 0 35 0 C 54.33 0 70 15.67 70 35 C 70 54.33 54.33 70 35 70 C 15.67 70 0 54.33 0 35 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <div style={{
              position: "absolute",
              left: 54,
              top: 50,
              width: 20,
              height: 20,
            }}>
            <SystemIcons
              style={{ transform: "scale(0.303, 0.303)", transformOrigin: "0 0" }}
              icon={"messages"}
              mode={"default"}
            />
          </div>
        </div>
        <div style={{
          position: "relative",
          width: 78,
          height: 104,
          flexShrink: 0,
        }}>
          <div style={{
            position: "absolute",
            left: 0,
            top: 75,
            width: 78,
            display: "flex",
            flexDirection: "column",
            gap: 1,
            alignItems: "center",
            flexWrap: "nowrap",
          }}>
            <span style={{
              position: "relative",
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 10,
              textAlign: "center",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              lineHeight: "13px",
              letterSpacing: "0.060px",
              color: "var(--labels-primary)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>First and First</span>
            <span style={{
              position: "relative",
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 12,
              textAlign: "center",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              lineHeight: "15px",
              letterSpacing: "0.060px",
              color: "rgba(60,60,67,0.6)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>2 People</span>
          </div>
          <div style={{
            position: "absolute",
            left: 4,
            top: -1,
            width: 70,
            height: 70,
            borderRadius: 100,
            backgroundColor: "rgba(120,120,128,0.16)",
          }}>
            <svg width={22} height={22} viewBox="0 0 22 22" fill="none" style={{
              position: "absolute",
              left: 39,
              top: 39,
              width: 22,
              height: 22,
              overflow: "hidden",
              borderRadius: 100,
            }}>
              <path d={"M 0 11 C 0 4.925 4.925 0 11 0 C 17.075 0 22 4.925 22 11 C 22 17.075 17.075 22 11 22 C 4.925 22 0 17.075 0 11 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
            <svg width={37.333} height={37.333} viewBox="0 0 37.333 37.333" fill="none" style={{
              position: "absolute",
              left: 9,
              top: 9,
              width: 37.333,
              height: 37.333,
              overflow: "hidden",
              borderRadius: 100,
            }}>
              <path d={"M 0 18.667 C 0 8.357 8.357 0 18.667 0 C 28.976 0 37.333 8.357 37.333 18.667 C 37.333 28.976 28.976 37.333 18.667 37.333 C 8.357 37.333 0 28.976 0 18.667 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
          <div style={{
              position: "absolute",
              left: 54,
              top: 49,
              width: 20,
              height: 20,
            }}>
            <SystemIcons
              style={{ transform: "scale(0.303, 0.303)", transformOrigin: "0 0" }}
              icon={"messages"}
              mode={"default"}
            />
          </div>
        </div>
        <div style={{
          position: "relative",
          width: 78,
          height: 104,
          flexShrink: 0,
        }}>
          <div style={{
            position: "absolute",
            left: 0,
            top: 75,
            width: 78,
            display: "flex",
            flexDirection: "column",
            gap: 1,
            alignItems: "flex-start",
            flexWrap: "nowrap",
          }}>
            <span style={{
              position: "relative",
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 12,
              textAlign: "center",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              lineHeight: "15px",
              letterSpacing: "0.060px",
              color: "var(--labels-primary)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>Juliana Mejia</span>
            <span style={{
              position: "relative",
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 12,
              textAlign: "center",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              lineHeight: "15px",
              letterSpacing: "0.060px",
              color: "var(--labels-primary)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>Last</span>
          </div>
          <svg width={70} height={70} viewBox="0 0 70 70" fill="none" style={{
            position: "absolute",
            left: 4,
            top: 0,
            width: 70,
            height: 70,
            overflow: "hidden",
            borderRadius: 100,
          }}>
            <path d={"M 0 35 C 0 15.67 15.67 0 35 0 C 54.33 0 70 15.67 70 35 C 70 54.33 54.33 70 35 70 C 15.67 70 0 54.33 0 35 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <div style={{
              position: "absolute",
              left: 54,
              top: 50,
              width: 20,
              height: 20,
            }}>
            <SystemIcons
              style={{ transform: "scale(0.303, 0.303)", transformOrigin: "0 0" }}
              icon={"messages"}
              mode={"default"}
            />
          </div>
        </div>
        <div style={{
          position: "relative",
          width: 78,
          height: 104,
          flexShrink: 0,
        }}>
          <div style={{
            position: "absolute",
            left: 0,
            top: 75,
            width: 78,
            display: "flex",
            flexDirection: "column",
            gap: 1,
            alignItems: "flex-start",
            flexWrap: "nowrap",
          }}>
            <span style={{
              position: "relative",
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 12,
              textAlign: "center",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              lineHeight: "15px",
              letterSpacing: "0.060px",
              color: "var(--labels-primary)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>Greg Apodaca</span>
            <span style={{
              position: "relative",
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 12,
              textAlign: "center",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              lineHeight: "15px",
              letterSpacing: "0.060px",
              color: "var(--labels-primary)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>Last</span>
          </div>
          <svg width={70} height={70} viewBox="0 0 70 70" fill="none" style={{
            position: "absolute",
            left: 4,
            top: 0,
            width: 70,
            height: 70,
            overflow: "hidden",
            borderRadius: 100,
          }}>
            <path d={"M 0 35 C 0 15.67 15.67 0 35 0 C 54.33 0 70 15.67 70 35 C 70 54.33 54.33 70 35 70 C 15.67 70 0 54.33 0 35 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <div style={{
              position: "absolute",
              left: 54,
              top: 50,
              width: 20,
              height: 20,
            }}>
            <SystemIcons
              style={{ transform: "scale(0.303, 0.303)", transformOrigin: "0 0" }}
              icon={"messages"}
              mode={"default"}
            />
          </div>
        </div>
      </div>
      <svg height={0.333} viewBox="0 0 393 0.333" fill="none" style={{
        position: "relative",
        height: 0.333,
        flexShrink: 0,
        alignSelf: "stretch",
        color: "rgba(60,60,67,0.36)",
      }}>
        <path d={"M 0 0 L 393 0 L 393 0.333 L 0 0.333 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 26,
        padding: "21px 16px 28px 16px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <App
          style={{
            position: "relative",
            width: 60,
            height: 80,
            flexShrink: 0,
          }}
          instance={<Airdrop />}
          appName={"AirDrop"}
        />
        <App
          style={{
            position: "relative",
            width: 60,
            height: 80,
            flexShrink: 0,
          }}
          instance={<Messages />}
          appName={"Messages"}
        />
        <App
          style={{
            position: "relative",
            width: 60,
            height: 80,
            flexShrink: 0,
          }}
          appName={"Mail"}
        />
        <App
          style={{
            position: "relative",
            width: 60,
            height: 80,
            flexShrink: 0,
          }}
          instance={<Notes />}
          appName={"Notes"}
        />
        <App
          style={{
            position: "relative",
            width: 60,
            height: 80,
            flexShrink: 0,
          }}
          instance={<Reminders />}
          appName={"Reminders"}
        />
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <ActionsSingle
          style={{
            position: "relative",
            height: 50,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          text={"Copy"}
          symbol={"􀉁"}
        />
        <div style={{
          position: "relative",
          height: 10,
          backgroundColor: "rgba(255,0,0,0)",
          flexShrink: 0,
          alignSelf: "stretch",
        }} />
        <Actions
          style={{
            position: "relative",
            height: 50,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          action={"Add to Reading List"}
          symbol={"􀖆"}
          mode={"light"}
        />
        <ActionsMiddle
          style={{
            position: "relative",
            height: 50,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          text={"Add Bookmark"}
          symbol={"􀉚"}
        />
        <ActionsMiddle
          style={{
            position: "relative",
            height: 50,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          text={"Add to Favorites"}
        />
        <ActionsMiddle
          style={{
            position: "relative",
            height: 50,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          text={"Find on Page"}
          symbol={"􀊫"}
        />
        <ActionsLast
          style={{
            position: "relative",
            height: 50,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          text={"Add to Home Screen"}
          symbol={"􀑍"}
        />
        <div style={{
          position: "relative",
          height: 10,
          backgroundColor: "rgba(255,0,0,0)",
          flexShrink: 0,
          alignSelf: "stretch",
        }} />
        <Actions
          style={{
            position: "relative",
            height: 50,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          action={"Markup"}
          symbol={"􀉥"}
          mode={"light"}
        />
        <ActionsLast
          style={{
            position: "relative",
            height: 50,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          text={"Print"}
          symbol={"􀎚"}
        />
        <div style={{
          position: "relative",
          height: 10,
          backgroundColor: "rgba(255,0,0,0)",
          flexShrink: 0,
          alignSelf: "stretch",
        }} />
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          padding: "1px 32px 1px 32px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 17,
            whiteSpace: "nowrap",
            lineHeight: "22px",
            letterSpacing: "-0.500px",
            color: "rgb(0,122,255)",
            flexShrink: 0,
          }}>{props.text1 ?? "Edit Actions..."}</span>
        </div>
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}>{props.instance ?? <HeaderLightTitleSubtitle subtitle={"Subtitle 1"} title={"Title"} />}</div>
      <svg width={393} height={0.333} viewBox="0 0 393 0.333" fill="none" style={{
        position: "relative",
        width: 393,
        height: 0.333,
        flexShrink: 0,
        color: "rgba(60,60,67,0.36)",
      }}>
        <path d={"M 0 0 L 393 0 L 393 0.333 L 0 0.333 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
      <div style={{
        position: "relative",
        width: 393,
        display: "flex",
        flexDirection: "row",
        gap: 26,
        padding: "21px 16px 28px 16px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
      }}>
        <Contact
          style={{
            position: "relative",
            width: 78,
            height: 104,
            flexShrink: 0,
          }}
          firstName={"Sandy Wilder Cheng"}
          people={"1"}
        />
        <div style={{
          position: "relative",
          width: 78,
          height: 104,
          flexShrink: 0,
        }}>
          <div style={{
            position: "absolute",
            left: 0,
            top: 75,
            width: 78,
            display: "flex",
            flexDirection: "column",
            gap: 1,
            alignItems: "flex-start",
            flexWrap: "nowrap",
          }}>
            <span style={{
              position: "relative",
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 12,
              textAlign: "center",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              lineHeight: "15px",
              letterSpacing: "0.060px",
              color: "var(--labels-primary)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>Kevin Leong</span>
            <span style={{
              position: "relative",
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 12,
              textAlign: "center",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              lineHeight: "15px",
              letterSpacing: "0.060px",
              color: "var(--labels-primary)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>Last</span>
          </div>
          <svg width={70} height={70} viewBox="0 0 70 70" fill="none" style={{
            position: "absolute",
            left: 4,
            top: 0,
            width: 70,
            height: 70,
            overflow: "hidden",
            borderRadius: 100,
          }}>
            <path d={"M 0 35 C 0 15.67 15.67 0 35 0 C 54.33 0 70 15.67 70 35 C 70 54.33 54.33 70 35 70 C 15.67 70 0 54.33 0 35 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <div style={{
              position: "absolute",
              left: 54,
              top: 50,
              width: 20,
              height: 20,
            }}>
            <SystemIcons
              style={{ transform: "scale(0.303, 0.303)", transformOrigin: "0 0" }}
              icon={"messages"}
              mode={"default"}
            />
          </div>
        </div>
        <div style={{
          position: "relative",
          width: 78,
          height: 104,
          flexShrink: 0,
        }}>
          <div style={{
            position: "absolute",
            left: 0,
            top: 75,
            width: 78,
            display: "flex",
            flexDirection: "column",
            gap: 1,
            alignItems: "center",
            flexWrap: "nowrap",
          }}>
            <span style={{
              position: "relative",
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 10,
              textAlign: "center",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              lineHeight: "13px",
              letterSpacing: "0.060px",
              color: "var(--labels-primary)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>First and First</span>
            <span style={{
              position: "relative",
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 12,
              textAlign: "center",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              lineHeight: "15px",
              letterSpacing: "0.060px",
              color: "rgba(60,60,67,0.6)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>2 People</span>
          </div>
          <div style={{
            position: "absolute",
            left: 4,
            top: -1,
            width: 70,
            height: 70,
            borderRadius: 100,
            backgroundColor: "rgba(120,120,128,0.16)",
          }}>
            <svg width={22} height={22} viewBox="0 0 22 22" fill="none" style={{
              position: "absolute",
              left: 39,
              top: 39,
              width: 22,
              height: 22,
              overflow: "hidden",
              borderRadius: 100,
            }}>
              <path d={"M 0 11 C 0 4.925 4.925 0 11 0 C 17.075 0 22 4.925 22 11 C 22 17.075 17.075 22 11 22 C 4.925 22 0 17.075 0 11 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
            <svg width={37.333} height={37.333} viewBox="0 0 37.333 37.333" fill="none" style={{
              position: "absolute",
              left: 9,
              top: 9,
              width: 37.333,
              height: 37.333,
              overflow: "hidden",
              borderRadius: 100,
            }}>
              <path d={"M 0 18.667 C 0 8.357 8.357 0 18.667 0 C 28.976 0 37.333 8.357 37.333 18.667 C 37.333 28.976 28.976 37.333 18.667 37.333 C 8.357 37.333 0 28.976 0 18.667 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
          <div style={{
              position: "absolute",
              left: 54,
              top: 49,
              width: 20,
              height: 20,
            }}>
            <SystemIcons
              style={{ transform: "scale(0.303, 0.303)", transformOrigin: "0 0" }}
              icon={"messages"}
              mode={"default"}
            />
          </div>
        </div>
        <div style={{
          position: "relative",
          width: 78,
          height: 104,
          flexShrink: 0,
        }}>
          <div style={{
            position: "absolute",
            left: 0,
            top: 75,
            width: 78,
            display: "flex",
            flexDirection: "column",
            gap: 1,
            alignItems: "flex-start",
            flexWrap: "nowrap",
          }}>
            <span style={{
              position: "relative",
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 12,
              textAlign: "center",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              lineHeight: "15px",
              letterSpacing: "0.060px",
              color: "var(--labels-primary)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>Juliana Mejia</span>
            <span style={{
              position: "relative",
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 12,
              textAlign: "center",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              lineHeight: "15px",
              letterSpacing: "0.060px",
              color: "var(--labels-primary)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>Last</span>
          </div>
          <svg width={70} height={70} viewBox="0 0 70 70" fill="none" style={{
            position: "absolute",
            left: 4,
            top: 0,
            width: 70,
            height: 70,
            overflow: "hidden",
            borderRadius: 100,
          }}>
            <path d={"M 0 35 C 0 15.67 15.67 0 35 0 C 54.33 0 70 15.67 70 35 C 70 54.33 54.33 70 35 70 C 15.67 70 0 54.33 0 35 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <div style={{
              position: "absolute",
              left: 54,
              top: 50,
              width: 20,
              height: 20,
            }}>
            <SystemIcons
              style={{ transform: "scale(0.303, 0.303)", transformOrigin: "0 0" }}
              icon={"messages"}
              mode={"default"}
            />
          </div>
        </div>
        <div style={{
          position: "relative",
          width: 78,
          height: 104,
          flexShrink: 0,
        }}>
          <div style={{
            position: "absolute",
            left: 0,
            top: 75,
            width: 78,
            display: "flex",
            flexDirection: "column",
            gap: 1,
            alignItems: "flex-start",
            flexWrap: "nowrap",
          }}>
            <span style={{
              position: "relative",
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 12,
              textAlign: "center",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              lineHeight: "15px",
              letterSpacing: "0.060px",
              color: "var(--labels-primary)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>Greg Apodaca</span>
            <span style={{
              position: "relative",
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 12,
              textAlign: "center",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              lineHeight: "15px",
              letterSpacing: "0.060px",
              color: "var(--labels-primary)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>Last</span>
          </div>
          <svg width={70} height={70} viewBox="0 0 70 70" fill="none" style={{
            position: "absolute",
            left: 4,
            top: 0,
            width: 70,
            height: 70,
            overflow: "hidden",
            borderRadius: 100,
          }}>
            <path d={"M 0 35 C 0 15.67 15.67 0 35 0 C 54.33 0 70 15.67 70 35 C 70 54.33 54.33 70 35 70 C 15.67 70 0 54.33 0 35 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <div style={{
              position: "absolute",
              left: 54,
              top: 50,
              width: 20,
              height: 20,
            }}>
            <SystemIcons
              style={{ transform: "scale(0.303, 0.303)", transformOrigin: "0 0" }}
              icon={"messages"}
              mode={"default"}
            />
          </div>
        </div>
      </div>
      <svg width={393} height={0.333} viewBox="0 0 393 0.333" fill="none" style={{
        position: "relative",
        width: 393,
        height: 0.333,
        flexShrink: 0,
        color: "rgba(60,60,67,0.36)",
      }}>
        <path d={"M 0 0 L 393 0 L 393 0.333 L 0 0.333 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
      <div style={{
        position: "relative",
        width: 393,
        display: "flex",
        flexDirection: "row",
        gap: 26,
        padding: "21px 16px 28px 16px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
      }}>
        <App
          style={{
            position: "relative",
            width: 60,
            height: 80,
            flexShrink: 0,
          }}
          instance={<Airdrop />}
          appName={"AirDrop"}
        />
        <App
          style={{
            position: "relative",
            width: 60,
            height: 80,
            flexShrink: 0,
          }}
          instance={<Messages />}
          appName={"Messages"}
        />
        <App
          style={{
            position: "relative",
            width: 60,
            height: 80,
            flexShrink: 0,
          }}
          appName={"Mail"}
        />
        <App
          style={{
            position: "relative",
            width: 60,
            height: 80,
            flexShrink: 0,
          }}
          instance={<Notes />}
          appName={"Notes"}
        />
        <App
          style={{
            position: "relative",
            width: 60,
            height: 80,
            flexShrink: 0,
          }}
          instance={<Reminders />}
          appName={"Reminders"}
        />
      </div>
      <div style={{
        position: "relative",
        width: 393,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <ActionsSingle
          style={{
            position: "relative",
            height: 50,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          text={"Copy"}
          symbol={"􀉁"}
        />
        <div style={{
          position: "relative",
          height: 10,
          backgroundColor: "rgba(255,0,0,0)",
          flexShrink: 0,
          alignSelf: "stretch",
        }} />
        <Actions
          style={{
            position: "relative",
            height: 50,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          action={"Add to Reading List"}
          symbol={"􀖆"}
          mode={"light"}
        />
        <ActionsMiddle
          style={{
            position: "relative",
            height: 50,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          text={"Add Bookmark"}
          symbol={"􀉚"}
        />
        <ActionsMiddle
          style={{
            position: "relative",
            height: 50,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          text={"Add to Favorites"}
        />
        <ActionsMiddle
          style={{
            position: "relative",
            height: 50,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          text={"Find on Page"}
          symbol={"􀊫"}
        />
        <ActionsLast
          style={{
            position: "relative",
            height: 50,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          text={"Add to Home Screen"}
          symbol={"􀑍"}
        />
        <div style={{
          position: "relative",
          height: 10,
          backgroundColor: "rgba(255,0,0,0)",
          flexShrink: 0,
          alignSelf: "stretch",
        }} />
        <Actions
          style={{
            position: "relative",
            height: 50,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          action={"Markup"}
          symbol={"􀉥"}
          mode={"light"}
        />
        <ActionsLast
          style={{
            position: "relative",
            height: 50,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          text={"Print"}
          symbol={"􀎚"}
        />
        <div style={{
          position: "relative",
          height: 10,
          backgroundColor: "rgba(255,0,0,0)",
          flexShrink: 0,
          alignSelf: "stretch",
        }} />
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          padding: "1px 32px 1px 32px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 17,
            whiteSpace: "nowrap",
            lineHeight: "22px",
            letterSpacing: "-0.500px",
            color: "rgb(0,0,0)",
            flexShrink: 0,
          }}>{props.text1 ?? "Edit Actions..."}</span>
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
export default ViewContents;
