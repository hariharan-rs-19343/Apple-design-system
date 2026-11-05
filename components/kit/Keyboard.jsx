import { AccessoryBarIPhoneFind } from '../accessory-bars/AccessoryBarIPhoneFind.jsx';
import { AccessoryBarIPhoneFindAnd } from '../accessory-bars/AccessoryBarIPhoneFindAnd.jsx';
import { AccessoryBarIPhoneToolbar } from '../accessory-bars/AccessoryBarIPhoneToolbar.jsx';
import { AccessoryBarURL } from '../accessory-bars/AccessoryBarURL.jsx';
import { AccessoryBarWebForm } from '../accessory-bars/AccessoryBarWebForm.jsx';
import { Autocorrection } from '../accessory-bars/Autocorrection.jsx';
import { BackgroundIPhone } from '../backgrounds/BackgroundIPhone.jsx';
import { BottomButtons } from '../actions/BottomButtons.jsx';
import { EmojiTabs } from '../accessory-bars/EmojiTabs.jsx';
import { KeysIPhone } from '../keyboards/KeysIPhone.jsx';
import { KeysIPhoneNumeric } from '../keyboards-dark/KeysIPhoneNumeric.jsx';
import { KeysIPhoneSpace } from '../keyboards/KeysIPhoneSpace.jsx';
import { SearchEmoji } from '../pickers/SearchEmoji.jsx';
import { Suggestion } from '../accessory-bars/Suggestion.jsx';

// figma node: 106:60296 Keyboard (7 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "type=" + __venc(p.type);

export function Keyboard(_p = {}) {
  const props = { ..._p, showSuggestions: _p.showSuggestions ?? true, type: _p.type ?? "default", showAccessoryBar: _p.showAccessoryBar ?? true };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 402,
      borderRadius: "27px 27px 62px 62px",
      display: "flex",
      flexDirection: "column",
      gap: 6,
      padding: "24px 7.670px 74px 7.667px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <BackgroundIPhone
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 402,
          height: 308,
        }}
        mode={"light"}
      />
      <div style={{
        position: "relative",
        height: 48,
        display: "flex",
        flexDirection: "row",
        gap: 6,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          borderRadius: 8.5,
          background: "linear-gradient(rgba(255,255,255,0.67),rgba(255,255,255,0.67)), linear-gradient(rgb(25,25,25),rgb(25,25,25))",
          display: "flex",
          flexDirection: "column",
          padding: "3px 0px 4px 0px",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"SF Compact\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 457,
            fontSize: 23,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "28px",
            color: "rgb(255,255,255)",
            flexShrink: 0,
          }}>1</span>
          <span style={{
            position: "relative",
            fontFamily: "\"SF Compact\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 556,
            fontSize: 13,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "15px",
            letterSpacing: "2px",
            color: "var(--labels-primary)",
            flexShrink: 0,
          }}> </span>
        </div>
        <div style={{
          position: "relative",
          borderRadius: 8.5,
          background: "linear-gradient(rgba(255,255,255,0.67),rgba(255,255,255,0.67)), linear-gradient(rgb(25,25,25),rgb(25,25,25))",
          display: "flex",
          flexDirection: "column",
          padding: "3px 0px 4px 0px",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"SF Compact\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 457,
            fontSize: 23,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "28px",
            color: "rgb(255,255,255)",
            flexShrink: 0,
          }}>2</span>
          <span style={{
            position: "relative",
            fontFamily: "\"SF Compact\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 556,
            fontSize: 13,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "15px",
            letterSpacing: "2px",
            color: "var(--labels-primary)",
            flexShrink: 0,
          }}>ABC</span>
        </div>
        <div style={{
          position: "relative",
          borderRadius: 8.5,
          background: "linear-gradient(rgba(255,255,255,0.67),rgba(255,255,255,0.67)), linear-gradient(rgb(25,25,25),rgb(25,25,25))",
          display: "flex",
          flexDirection: "column",
          padding: "3px 0px 4px 0px",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"SF Compact\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 457,
            fontSize: 23,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "28px",
            color: "rgb(255,255,255)",
            flexShrink: 0,
          }}>3</span>
          <span style={{
            position: "relative",
            fontFamily: "\"SF Compact\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 556,
            fontSize: 13,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "15px",
            letterSpacing: "2px",
            color: "var(--labels-primary)",
            flexShrink: 0,
          }}>DEF</span>
        </div>
      </div>
      <div style={{
        position: "relative",
        height: 48,
        display: "flex",
        flexDirection: "row",
        gap: 6,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          borderRadius: 8.5,
          background: "linear-gradient(rgba(255,255,255,0.67),rgba(255,255,255,0.67)), linear-gradient(rgb(25,25,25),rgb(25,25,25))",
          display: "flex",
          flexDirection: "column",
          padding: "3px 0px 4px 0px",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"SF Compact\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 457,
            fontSize: 23,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "28px",
            color: "rgb(255,255,255)",
            flexShrink: 0,
          }}>4</span>
          <span style={{
            position: "relative",
            fontFamily: "\"SF Compact\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 556,
            fontSize: 13,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "15px",
            letterSpacing: "2px",
            color: "var(--labels-primary)",
            flexShrink: 0,
          }}>GHI</span>
        </div>
        <div style={{
          position: "relative",
          borderRadius: 8.5,
          background: "linear-gradient(rgba(255,255,255,0.67),rgba(255,255,255,0.67)), linear-gradient(rgb(25,25,25),rgb(25,25,25))",
          display: "flex",
          flexDirection: "column",
          padding: "3px 0px 4px 0px",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"SF Compact\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 457,
            fontSize: 23,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "28px",
            color: "rgb(255,255,255)",
            flexShrink: 0,
          }}>5</span>
          <span style={{
            position: "relative",
            fontFamily: "\"SF Compact\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 556,
            fontSize: 13,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "15px",
            letterSpacing: "2px",
            color: "var(--labels-primary)",
            flexShrink: 0,
          }}>JKL</span>
        </div>
        <div style={{
          position: "relative",
          borderRadius: 8.5,
          background: "linear-gradient(rgba(255,255,255,0.67),rgba(255,255,255,0.67)), linear-gradient(rgb(25,25,25),rgb(25,25,25))",
          display: "flex",
          flexDirection: "column",
          padding: "3px 0px 4px 0px",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"SF Compact\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 457,
            fontSize: 23,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "28px",
            color: "rgb(255,255,255)",
            flexShrink: 0,
          }}>6</span>
          <span style={{
            position: "relative",
            fontFamily: "\"SF Compact\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 556,
            fontSize: 13,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "15px",
            letterSpacing: "2px",
            color: "var(--labels-primary)",
            flexShrink: 0,
          }}>MNO</span>
        </div>
      </div>
      <div style={{
        position: "relative",
        height: 48,
        display: "flex",
        flexDirection: "row",
        gap: 6,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          borderRadius: 8.5,
          background: "linear-gradient(rgba(255,255,255,0.67),rgba(255,255,255,0.67)), linear-gradient(rgb(25,25,25),rgb(25,25,25))",
          display: "flex",
          flexDirection: "column",
          padding: "3px 0px 4px 0px",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"SF Compact\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 457,
            fontSize: 23,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "28px",
            color: "rgb(255,255,255)",
            flexShrink: 0,
          }}>7</span>
          <span style={{
            position: "relative",
            fontFamily: "\"SF Compact\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 556,
            fontSize: 13,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "15px",
            letterSpacing: "2px",
            color: "var(--labels-primary)",
            flexShrink: 0,
          }}>PQRS</span>
        </div>
        <div style={{
          position: "relative",
          borderRadius: 8.5,
          background: "linear-gradient(rgba(255,255,255,0.67),rgba(255,255,255,0.67)), linear-gradient(rgb(25,25,25),rgb(25,25,25))",
          display: "flex",
          flexDirection: "column",
          padding: "3px 0px 4px 0px",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"SF Compact\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 457,
            fontSize: 23,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "28px",
            color: "rgb(255,255,255)",
            flexShrink: 0,
          }}>8</span>
          <span style={{
            position: "relative",
            fontFamily: "\"SF Compact\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 556,
            fontSize: 13,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "15px",
            letterSpacing: "2px",
            color: "var(--labels-primary)",
            flexShrink: 0,
          }}>TUV</span>
        </div>
        <div style={{
          position: "relative",
          borderRadius: 8.5,
          background: "linear-gradient(rgba(255,255,255,0.67),rgba(255,255,255,0.67)), linear-gradient(rgb(25,25,25),rgb(25,25,25))",
          display: "flex",
          flexDirection: "column",
          padding: "3px 0px 4px 0px",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"SF Compact\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 457,
            fontSize: 23,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "28px",
            color: "rgb(255,255,255)",
            flexShrink: 0,
          }}>9</span>
          <span style={{
            position: "relative",
            fontFamily: "\"SF Compact\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 556,
            fontSize: 13,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "15px",
            letterSpacing: "2px",
            color: "var(--labels-primary)",
            flexShrink: 0,
          }}>WXYZ</span>
        </div>
      </div>
      <div style={{
        position: "relative",
        height: 48,
        display: "flex",
        flexDirection: "row",
        gap: 6,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{ position: "relative", flexGrow: 1, alignSelf: "stretch" }} />
        <div style={{
          position: "relative",
          borderRadius: 8.5,
          background: "linear-gradient(rgba(255,255,255,0.67),rgba(255,255,255,0.67)), linear-gradient(rgb(25,25,25),rgb(25,25,25))",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "absolute",
            left: 54,
            top: 9,
            width: 14,
            height: 28,
            fontFamily: "\"SF Compact\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 457,
            fontSize: 23,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "28px",
            color: "rgb(255,255,255)",
          }}>0</span>
        </div>
        <KeysIPhoneNumeric
          style={{
            position: "relative",
            flexGrow: 1,
            alignSelf: "stretch",
            width: "auto",
            height: "auto",
          }}
          line1={"􀆛"}
          mode={"light"}
          type={"math"}
        />
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 402,
      borderRadius: "27px 27px 62px 62px",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <BackgroundIPhone
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 402,
          height: 385,
        }}
        mode={"light"}
      />
      <SearchEmoji
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        mode={"light"}
      />
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        gap: 14,
        padding: "0px 10px 0px 10px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 40,
          display: "flex",
          flexDirection: "column",
          gap: 5,
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 32,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "38.500px",
            color: "rgb(0,0,0)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.text1 ?? "😂"}</span>
          <span style={{
            position: "relative",
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 32,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "38.500px",
            color: "rgb(0,0,0)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.text2 ?? "👊"}</span>
          <span style={{
            position: "relative",
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 32,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "38.500px",
            color: "rgb(0,0,0)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.text3 ?? "😭"}</span>
          <span style={{
            position: "relative",
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 32,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "38.500px",
            color: "rgb(0,0,0)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.text4 ?? "👀"}</span>
        </div>
        <div style={{
          position: "relative",
          width: 40,
          display: "flex",
          flexDirection: "column",
          gap: 5,
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 32,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "38.500px",
            color: "rgb(0,0,0)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>😩</span>
          <span style={{
            position: "relative",
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 32,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "38.500px",
            color: "rgb(0,0,0)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>😊</span>
          <span style={{
            position: "relative",
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 32,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "38.500px",
            color: "rgb(0,0,0)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>👻</span>
          <span style={{
            position: "relative",
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 32,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "38.500px",
            color: "rgb(0,0,0)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>💨</span>
        </div>
        <div style={{
          position: "relative",
          width: 40,
          display: "flex",
          flexDirection: "column",
          gap: 5,
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 32,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "38.500px",
            color: "rgb(0,0,0)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>😔</span>
          <span style={{
            position: "relative",
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 32,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "38.500px",
            color: "rgb(0,0,0)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>🦆</span>
          <div style={{
            position: "relative",
            height: 50,
            display: "flex",
            flexDirection: "row",
            gap: 10,
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div className="fig-asset-f464af0f69b74801" style={{
              position: "relative",
              width: 40,
              height: 43,
              flexShrink: 0,
            }} />
          </div>
          <span style={{
            position: "relative",
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 32,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "38.500px",
            color: "rgb(0,0,0)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>🐵</span>
        </div>
        <div style={{
          position: "relative",
          width: 40,
          display: "flex",
          flexDirection: "column",
          gap: 5,
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 32,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "38.500px",
            color: "rgb(0,0,0)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>😏</span>
          <span style={{
            position: "relative",
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 32,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "38.500px",
            color: "rgb(0,0,0)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>👊</span>
          <span style={{
            position: "relative",
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 32,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "38.500px",
            color: "rgb(0,0,0)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>👩‍💻</span>
          <span style={{
            position: "relative",
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 32,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "38.500px",
            color: "rgb(0,0,0)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>👍</span>
        </div>
        <div style={{
          position: "relative",
          width: 40,
          display: "flex",
          flexDirection: "column",
          gap: 5,
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 32,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "38.500px",
            color: "rgb(0,0,0)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>💕</span>
          <span style={{
            position: "relative",
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 32,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "38.500px",
            color: "rgb(0,0,0)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>🙆‍♀️</span>
          <span style={{
            position: "relative",
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 32,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "38.500px",
            color: "rgb(0,0,0)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>😭</span>
          <span style={{
            position: "relative",
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 32,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "38.500px",
            color: "rgb(0,0,0)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>🙃</span>
        </div>
        <div style={{
          position: "relative",
          width: 40,
          display: "flex",
          flexDirection: "column",
          gap: 5,
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 32,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "38.500px",
            color: "rgb(0,0,0)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>😂</span>
          <div style={{
            position: "relative",
            height: 50,
            display: "flex",
            flexDirection: "column",
            gap: 10,
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div className="fig-asset-4aaff5aa591ed603" style={{
              position: "relative",
              width: 35,
              height: 40,
              flexShrink: 0,
            }} />
          </div>
          <span style={{
            position: "relative",
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 32,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "38.500px",
            color: "rgb(0,0,0)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>👀</span>
          <div style={{
            position: "relative",
            height: 50,
            display: "flex",
            flexDirection: "row",
            gap: 10,
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div className="fig-asset-8a336fd001b7210f" style={{
              position: "relative",
              width: 40,
              height: 43,
              flexShrink: 0,
            }} />
          </div>
        </div>
        <div style={{
          position: "relative",
          width: 40,
          display: "flex",
          flexDirection: "column",
          gap: 5,
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 32,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "38.500px",
            color: "rgb(0,0,0)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>👁</span>
          <div style={{
            position: "relative",
            height: 50,
            display: "flex",
            flexDirection: "row",
            gap: 10,
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div className="fig-asset-b7accd5ef120b6c9" style={{
              position: "relative",
              width: 39.224,
              flexShrink: 0,
              alignSelf: "stretch",
            }} />
          </div>
          <span style={{
            position: "relative",
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 32,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "38.500px",
            color: "rgb(0,0,0)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>🏆</span>
          <div style={{
            position: "relative",
            height: 50,
            display: "flex",
            flexDirection: "column",
            gap: 10,
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div className="fig-asset-4067c3c028dc1c3f" style={{
              position: "relative",
              height: 39,
              flexShrink: 0,
              alignSelf: "stretch",
            }} />
          </div>
        </div>
        <div style={{
          position: "relative",
          width: 40,
          display: "flex",
          flexDirection: "column",
          gap: 5,
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 32,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "38.500px",
            color: "rgb(0,0,0)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>😀</span>
          <span style={{
            position: "relative",
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 32,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "38.500px",
            color: "rgb(0,0,0)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>😃</span>
          <span style={{
            position: "relative",
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 32,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "38.500px",
            color: "rgb(0,0,0)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>😄</span>
          <span style={{
            position: "relative",
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 32,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "38.500px",
            color: "rgb(0,0,0)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>😁</span>
        </div>
        <div style={{
          position: "relative",
          width: 40,
          display: "flex",
          flexDirection: "column",
          gap: 5,
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 32,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "38.500px",
            color: "rgb(0,0,0)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>🥹</span>
          <span style={{
            position: "relative",
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 32,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "38.500px",
            color: "rgb(0,0,0)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>😅</span>
          <span style={{
            position: "relative",
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 32,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "38.500px",
            color: "rgb(0,0,0)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>😂</span>
          <span style={{
            position: "relative",
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 32,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "38.500px",
            color: "rgb(0,0,0)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>🤣</span>
        </div>
      </div>
      <EmojiTabs
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        mode={"light"}
      />
      <BottomButtons
        style={{
          position: "relative",
          height: 71,
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        mode={"light"}
        type={"abc and mic"}
      />
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 402,
      display: "flex",
      flexDirection: "column",
      gap: 10,
      alignItems: "flex-end",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <AccessoryBarWebForm
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        mode={"light"}
      />
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <BackgroundIPhone
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 402,
            height: 330,
          }}
          mode={"light"}
        />
        {props.showSuggestions && (
        <Suggestion
          style={{
            position: "relative",
            height: 52,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          mode={"light"}
        />
        )}
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 11,
          padding: "0px 6.670px 0px 6.670px",
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
            gap: 6,
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <KeysIPhone
              style={{
                position: "relative",
                height: 43,
                flexGrow: 1,
                width: "auto",
              }}
              letter={"q"}
              mode={"light"}
              type={"lowercase"}
            />
            <KeysIPhone
              style={{
                position: "relative",
                height: 43,
                flexGrow: 1,
                width: "auto",
              }}
              letter={"w"}
              mode={"light"}
              type={"lowercase"}
            />
            <KeysIPhone
              style={{
                position: "relative",
                height: 43,
                flexGrow: 1,
                width: "auto",
              }}
              letter={"e"}
              mode={"light"}
              type={"lowercase"}
            />
            <KeysIPhone
              style={{
                position: "relative",
                height: 43,
                flexGrow: 1,
                width: "auto",
              }}
              letter={"r"}
              mode={"light"}
              type={"lowercase"}
            />
            <KeysIPhone
              style={{
                position: "relative",
                height: 43,
                flexGrow: 1,
                width: "auto",
              }}
              letter={"t"}
              mode={"light"}
              type={"lowercase"}
            />
            <KeysIPhone
              style={{
                position: "relative",
                height: 43,
                flexGrow: 1,
                width: "auto",
              }}
              letter={"y"}
              mode={"light"}
              type={"lowercase"}
            />
            <KeysIPhone
              style={{
                position: "relative",
                height: 43,
                flexGrow: 1,
                width: "auto",
              }}
              letter={"u"}
              mode={"light"}
              type={"lowercase"}
            />
            <KeysIPhone
              style={{
                position: "relative",
                height: 43,
                flexGrow: 1,
                width: "auto",
              }}
              letter={"i"}
              mode={"light"}
              type={"lowercase"}
            />
            <KeysIPhone
              style={{
                position: "relative",
                height: 43,
                flexGrow: 1,
                width: "auto",
              }}
              letter={"o"}
              mode={"light"}
              type={"lowercase"}
            />
            <KeysIPhone
              style={{
                position: "relative",
                height: 43,
                flexGrow: 1,
                width: "auto",
              }}
              letter={"p"}
              mode={"light"}
              type={"lowercase"}
            />
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: 6,
            padding: "0px 20px 0px 20px",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <KeysIPhone
              style={{
                position: "relative",
                height: 43,
                flexGrow: 1,
                width: "auto",
              }}
              letter={"a"}
              mode={"light"}
              type={"lowercase"}
            />
            <KeysIPhone
              style={{
                position: "relative",
                height: 43,
                flexGrow: 1,
                width: "auto",
              }}
              letter={"s"}
              mode={"light"}
              type={"lowercase"}
            />
            <KeysIPhone
              style={{
                position: "relative",
                height: 43,
                flexGrow: 1,
                width: "auto",
              }}
              letter={"d"}
              mode={"light"}
              type={"lowercase"}
            />
            <KeysIPhone
              style={{
                position: "relative",
                height: 43,
                flexGrow: 1,
                width: "auto",
              }}
              letter={"f"}
              mode={"light"}
              type={"lowercase"}
            />
            <KeysIPhone
              style={{
                position: "relative",
                height: 43,
                flexGrow: 1,
                width: "auto",
              }}
              letter={"g"}
              mode={"light"}
              type={"lowercase"}
            />
            <KeysIPhone
              style={{
                position: "relative",
                height: 43,
                flexGrow: 1,
                width: "auto",
              }}
              letter={"h"}
              mode={"light"}
              type={"lowercase"}
            />
            <KeysIPhone
              style={{
                position: "relative",
                height: 43,
                flexGrow: 1,
                width: "auto",
              }}
              letter={"j"}
              mode={"light"}
              type={"lowercase"}
            />
            <KeysIPhone
              style={{
                position: "relative",
                height: 43,
                flexGrow: 1,
                width: "auto",
              }}
              letter={"k"}
              mode={"light"}
              type={"lowercase"}
            />
            <KeysIPhone
              style={{
                position: "relative",
                height: 43,
                flexGrow: 1,
                width: "auto",
              }}
              letter={"l"}
              mode={"light"}
              type={"lowercase"}
            />
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: 14.25,
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              width: 45,
              height: 43,
              borderRadius: 8.5,
              background: "linear-gradient(rgba(255,255,255,0.67),rgba(255,255,255,0.67)), linear-gradient(rgb(25,25,25),rgb(25,25,25))",
              flexShrink: 0,
            }}>
              <span style={{
                position: "absolute",
                left: 0,
                top: 7,
                width: 45,
                height: 28,
                fontFamily: "\"SF Compact\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 457,
                fontSize: 20,
                textAlign: "center",
                lineHeight: "28px",
                color: "var(--labels-primary)",
                textTransform: "uppercase",
              }}>􀆞</span>
            </div>
            <div style={{
              position: "relative",
              height: 45,
              display: "flex",
              flexDirection: "row",
              gap: 6,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexGrow: 1,
            }}>
              <KeysIPhone
                style={{
                  position: "relative",
                  flexGrow: 1,
                  alignSelf: "stretch",
                  width: "auto",
                  height: "auto",
                }}
                letter={"z"}
                mode={"light"}
                type={"lowercase"}
              />
              <KeysIPhone
                style={{
                  position: "relative",
                  flexGrow: 1,
                  alignSelf: "stretch",
                  width: "auto",
                  height: "auto",
                }}
                letter={"x"}
                mode={"light"}
                type={"lowercase"}
              />
              <KeysIPhone
                style={{
                  position: "relative",
                  flexGrow: 1,
                  alignSelf: "stretch",
                  width: "auto",
                  height: "auto",
                }}
                letter={"c"}
                mode={"light"}
                type={"lowercase"}
              />
              <KeysIPhone
                style={{
                  position: "relative",
                  flexGrow: 1,
                  alignSelf: "stretch",
                  width: "auto",
                  height: "auto",
                }}
                letter={"v"}
                mode={"light"}
                type={"lowercase"}
              />
              <KeysIPhone
                style={{
                  position: "relative",
                  flexGrow: 1,
                  alignSelf: "stretch",
                  width: "auto",
                  height: "auto",
                }}
                letter={"b"}
                mode={"light"}
                type={"lowercase"}
              />
              <KeysIPhone
                style={{
                  position: "relative",
                  flexGrow: 1,
                  alignSelf: "stretch",
                  width: "auto",
                  height: "auto",
                }}
                letter={"n"}
                mode={"light"}
                type={"lowercase"}
              />
              <KeysIPhone
                style={{
                  position: "relative",
                  flexGrow: 1,
                  alignSelf: "stretch",
                  width: "auto",
                  height: "auto",
                }}
                letter={"m"}
                mode={"light"}
                type={"lowercase"}
              />
            </div>
            <div style={{
              position: "relative",
              width: 45,
              height: 43,
              borderRadius: 8.5,
              background: "linear-gradient(rgba(255,255,255,0.67),rgba(255,255,255,0.67)), linear-gradient(rgb(25,25,25),rgb(25,25,25))",
              flexShrink: 0,
            }}>
              <span style={{
                position: "absolute",
                left: 0,
                top: 7,
                width: 45,
                height: 28,
                fontFamily: "\"SF Compact\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 457,
                fontSize: 20,
                textAlign: "center",
                lineHeight: "28px",
                color: "var(--labels-primary)",
                textTransform: "uppercase",
              }}>􀆛</span>
            </div>
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: 6,
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
                position: "relative",
                width: 92,
                height: 43,
                flexShrink: 0,
              }}>
              <KeysIPhone
                style={{ transform: "scale(2.875, 1)", transformOrigin: "0 0" }}
                mode={"light"}
                type={"abc"}
              />
            </div>
            <KeysIPhoneSpace
              style={{ position: "relative", flexGrow: 1, width: "auto" }}
              mode={"light"}
              config={"email"}
            />
            <div style={{
              position: "relative",
              width: 92,
              height: 43,
              borderRadius: 8.5,
              flexShrink: 0,
            }}>
              <div style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 92,
                height: 43,
                borderRadius: 8.5,
                backgroundColor: "var(--accents-blue)",
              }} />
              <span style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 92,
                height: 42,
                fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 19,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "28px",
                color: "rgb(255,255,255)",
              }}>􀅇</span>
            </div>
          </div>
        </div>
        <BottomButtons
          style={{
            position: "relative",
            height: 71,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          mode={"light"}
          type={"emoji and mic"}
        />
      </div>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 402,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-end",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <AccessoryBarURL
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        mode={"light"}
      />
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <BackgroundIPhone
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 402,
            height: 307,
          }}
          mode={"light"}
        />
        <div style={{
          position: "relative",
          height: 229,
          display: "flex",
          flexDirection: "column",
          gap: 11,
          padding: "22px 6.670px 22px 6.670px",
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
            gap: 6,
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <KeysIPhone
              style={{
                position: "relative",
                height: 43,
                flexGrow: 1,
                width: "auto",
              }}
              letter={"q"}
              mode={"light"}
              type={"lowercase"}
            />
            <KeysIPhone
              style={{
                position: "relative",
                height: 43,
                flexGrow: 1,
                width: "auto",
              }}
              letter={"w"}
              mode={"light"}
              type={"lowercase"}
            />
            <KeysIPhone
              style={{
                position: "relative",
                height: 43,
                flexGrow: 1,
                width: "auto",
              }}
              letter={"e"}
              mode={"light"}
              type={"lowercase"}
            />
            <KeysIPhone
              style={{
                position: "relative",
                height: 43,
                flexGrow: 1,
                width: "auto",
              }}
              letter={"r"}
              mode={"light"}
              type={"lowercase"}
            />
            <KeysIPhone
              style={{
                position: "relative",
                height: 43,
                flexGrow: 1,
                width: "auto",
              }}
              letter={"t"}
              mode={"light"}
              type={"lowercase"}
            />
            <KeysIPhone
              style={{
                position: "relative",
                height: 43,
                flexGrow: 1,
                width: "auto",
              }}
              letter={"y"}
              mode={"light"}
              type={"lowercase"}
            />
            <KeysIPhone
              style={{
                position: "relative",
                height: 43,
                flexGrow: 1,
                width: "auto",
              }}
              letter={"u"}
              mode={"light"}
              type={"lowercase"}
            />
            <KeysIPhone
              style={{
                position: "relative",
                height: 43,
                flexGrow: 1,
                width: "auto",
              }}
              letter={"i"}
              mode={"light"}
              type={"lowercase"}
            />
            <KeysIPhone
              style={{
                position: "relative",
                height: 43,
                flexGrow: 1,
                width: "auto",
              }}
              letter={"o"}
              mode={"light"}
              type={"lowercase"}
            />
            <KeysIPhone
              style={{
                position: "relative",
                height: 43,
                flexGrow: 1,
                width: "auto",
              }}
              letter={"p"}
              mode={"light"}
              type={"lowercase"}
            />
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: 6,
            padding: "0px 20px 0px 20px",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <KeysIPhone
              style={{
                position: "relative",
                height: 43,
                flexGrow: 1,
                width: "auto",
              }}
              letter={"a"}
              mode={"light"}
              type={"lowercase"}
            />
            <KeysIPhone
              style={{
                position: "relative",
                height: 43,
                flexGrow: 1,
                width: "auto",
              }}
              letter={"s"}
              mode={"light"}
              type={"lowercase"}
            />
            <KeysIPhone
              style={{
                position: "relative",
                height: 43,
                flexGrow: 1,
                width: "auto",
              }}
              letter={"d"}
              mode={"light"}
              type={"lowercase"}
            />
            <KeysIPhone
              style={{
                position: "relative",
                height: 43,
                flexGrow: 1,
                width: "auto",
              }}
              letter={"f"}
              mode={"light"}
              type={"lowercase"}
            />
            <KeysIPhone
              style={{
                position: "relative",
                height: 43,
                flexGrow: 1,
                width: "auto",
              }}
              letter={"g"}
              mode={"light"}
              type={"lowercase"}
            />
            <KeysIPhone
              style={{
                position: "relative",
                height: 43,
                flexGrow: 1,
                width: "auto",
              }}
              letter={"h"}
              mode={"light"}
              type={"lowercase"}
            />
            <KeysIPhone
              style={{
                position: "relative",
                height: 43,
                flexGrow: 1,
                width: "auto",
              }}
              letter={"j"}
              mode={"light"}
              type={"lowercase"}
            />
            <KeysIPhone
              style={{
                position: "relative",
                height: 43,
                flexGrow: 1,
                width: "auto",
              }}
              letter={"k"}
              mode={"light"}
              type={"lowercase"}
            />
            <KeysIPhone
              style={{
                position: "relative",
                height: 43,
                flexGrow: 1,
                width: "auto",
              }}
              letter={"l"}
              mode={"light"}
              type={"lowercase"}
            />
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: 14.25,
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              width: 45,
              height: 43,
              borderRadius: 8.5,
              background: "linear-gradient(rgba(255,255,255,0.67),rgba(255,255,255,0.67)), linear-gradient(rgb(25,25,25),rgb(25,25,25))",
              flexShrink: 0,
            }}>
              <span style={{
                position: "absolute",
                left: 0,
                top: 7,
                width: 45,
                height: 28,
                fontFamily: "\"SF Compact\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 457,
                fontSize: 20,
                textAlign: "center",
                lineHeight: "28px",
                color: "var(--labels-primary)",
                textTransform: "uppercase",
              }}>􀆞</span>
            </div>
            <div style={{
              position: "relative",
              height: 45,
              display: "flex",
              flexDirection: "row",
              gap: 6,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexGrow: 1,
            }}>
              <KeysIPhone
                style={{
                  position: "relative",
                  flexGrow: 1,
                  alignSelf: "stretch",
                  width: "auto",
                  height: "auto",
                }}
                letter={"z"}
                mode={"light"}
                type={"lowercase"}
              />
              <KeysIPhone
                style={{
                  position: "relative",
                  flexGrow: 1,
                  alignSelf: "stretch",
                  width: "auto",
                  height: "auto",
                }}
                letter={"x"}
                mode={"light"}
                type={"lowercase"}
              />
              <KeysIPhone
                style={{
                  position: "relative",
                  flexGrow: 1,
                  alignSelf: "stretch",
                  width: "auto",
                  height: "auto",
                }}
                letter={"c"}
                mode={"light"}
                type={"lowercase"}
              />
              <KeysIPhone
                style={{
                  position: "relative",
                  flexGrow: 1,
                  alignSelf: "stretch",
                  width: "auto",
                  height: "auto",
                }}
                letter={"v"}
                mode={"light"}
                type={"lowercase"}
              />
              <KeysIPhone
                style={{
                  position: "relative",
                  flexGrow: 1,
                  alignSelf: "stretch",
                  width: "auto",
                  height: "auto",
                }}
                letter={"b"}
                mode={"light"}
                type={"lowercase"}
              />
              <KeysIPhone
                style={{
                  position: "relative",
                  flexGrow: 1,
                  alignSelf: "stretch",
                  width: "auto",
                  height: "auto",
                }}
                letter={"n"}
                mode={"light"}
                type={"lowercase"}
              />
              <KeysIPhone
                style={{
                  position: "relative",
                  flexGrow: 1,
                  alignSelf: "stretch",
                  width: "auto",
                  height: "auto",
                }}
                letter={"m"}
                mode={"light"}
                type={"lowercase"}
              />
            </div>
            <div style={{
              position: "relative",
              width: 45,
              height: 43,
              borderRadius: 8.5,
              background: "linear-gradient(rgba(255,255,255,0.67),rgba(255,255,255,0.67)), linear-gradient(rgb(25,25,25),rgb(25,25,25))",
              flexShrink: 0,
            }}>
              <span style={{
                position: "absolute",
                left: 0,
                top: 7,
                width: 45,
                height: 28,
                fontFamily: "\"SF Compact\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 457,
                fontSize: 20,
                textAlign: "center",
                lineHeight: "28px",
                color: "var(--labels-primary)",
                textTransform: "uppercase",
              }}>􀆛</span>
            </div>
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: 6,
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
                position: "relative",
                width: 92,
                height: 43,
                flexShrink: 0,
              }}>
              <KeysIPhone
                style={{ transform: "scale(2.875, 1)", transformOrigin: "0 0" }}
                mode={"light"}
                type={"abc"}
              />
            </div>
            <KeysIPhoneSpace
              style={{ position: "relative", flexGrow: 1, width: "auto" }}
              mode={"light"}
              config={"url"}
            />
            <div style={{
              position: "relative",
              width: 92,
              height: 43,
              borderRadius: 8.5,
              flexShrink: 0,
            }}>
              <div style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 92,
                height: 43,
                borderRadius: 8.5,
                backgroundColor: "var(--accents-blue)",
              }} />
              <span style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 92,
                height: 42,
                fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 19,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "28px",
                color: "rgb(255,255,255)",
              }}>􀅇</span>
            </div>
          </div>
        </div>
        <BottomButtons
          style={{
            position: "relative",
            height: 78,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          mode={"light"}
          type={"emoji and mic"}
        />
      </div>
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: 402,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-end",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <AccessoryBarIPhoneFindAnd
        style={{
          position: "relative",
          height: 101,
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        mode={"light"}
      />
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <BackgroundIPhone
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 402,
            height: 337,
          }}
          mode={"light"}
        />
        {props.showSuggestions && (
        <Autocorrection
          style={{
            position: "relative",
            height: 52,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          mode={"light"}
        />
        )}
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 11,
          padding: "0px 6.670px 0px 6.670px",
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
            gap: 6,
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <KeysIPhone
              style={{
                position: "relative",
                height: 43,
                flexGrow: 1,
                width: "auto",
              }}
              letter={"q"}
              mode={"light"}
              type={"lowercase"}
            />
            <KeysIPhone
              style={{
                position: "relative",
                height: 43,
                flexGrow: 1,
                width: "auto",
              }}
              letter={"w"}
              mode={"light"}
              type={"lowercase"}
            />
            <KeysIPhone
              style={{
                position: "relative",
                height: 43,
                flexGrow: 1,
                width: "auto",
              }}
              letter={"e"}
              mode={"light"}
              type={"lowercase"}
            />
            <KeysIPhone
              style={{
                position: "relative",
                height: 43,
                flexGrow: 1,
                width: "auto",
              }}
              letter={"r"}
              mode={"light"}
              type={"lowercase"}
            />
            <KeysIPhone
              style={{
                position: "relative",
                height: 43,
                flexGrow: 1,
                width: "auto",
              }}
              letter={"t"}
              mode={"light"}
              type={"lowercase"}
            />
            <KeysIPhone
              style={{
                position: "relative",
                height: 43,
                flexGrow: 1,
                width: "auto",
              }}
              letter={"y"}
              mode={"light"}
              type={"lowercase"}
            />
            <KeysIPhone
              style={{
                position: "relative",
                height: 43,
                flexGrow: 1,
                width: "auto",
              }}
              letter={"u"}
              mode={"light"}
              type={"lowercase"}
            />
            <KeysIPhone
              style={{
                position: "relative",
                height: 43,
                flexGrow: 1,
                width: "auto",
              }}
              letter={"i"}
              mode={"light"}
              type={"lowercase"}
            />
            <KeysIPhone
              style={{
                position: "relative",
                height: 43,
                flexGrow: 1,
                width: "auto",
              }}
              letter={"o"}
              mode={"light"}
              type={"lowercase"}
            />
            <KeysIPhone
              style={{
                position: "relative",
                height: 43,
                flexGrow: 1,
                width: "auto",
              }}
              letter={"p"}
              mode={"light"}
              type={"lowercase"}
            />
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: 6,
            padding: "0px 20px 0px 20px",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <KeysIPhone
              style={{
                position: "relative",
                height: 43,
                flexGrow: 1,
                width: "auto",
              }}
              letter={"a"}
              mode={"light"}
              type={"lowercase"}
            />
            <KeysIPhone
              style={{
                position: "relative",
                height: 43,
                flexGrow: 1,
                width: "auto",
              }}
              letter={"s"}
              mode={"light"}
              type={"lowercase"}
            />
            <KeysIPhone
              style={{
                position: "relative",
                height: 43,
                flexGrow: 1,
                width: "auto",
              }}
              letter={"d"}
              mode={"light"}
              type={"lowercase"}
            />
            <KeysIPhone
              style={{
                position: "relative",
                height: 43,
                flexGrow: 1,
                width: "auto",
              }}
              letter={"f"}
              mode={"light"}
              type={"lowercase"}
            />
            <KeysIPhone
              style={{
                position: "relative",
                height: 43,
                flexGrow: 1,
                width: "auto",
              }}
              letter={"g"}
              mode={"light"}
              type={"lowercase"}
            />
            <KeysIPhone
              style={{
                position: "relative",
                height: 43,
                flexGrow: 1,
                width: "auto",
              }}
              letter={"h"}
              mode={"light"}
              type={"lowercase"}
            />
            <KeysIPhone
              style={{
                position: "relative",
                height: 43,
                flexGrow: 1,
                width: "auto",
              }}
              letter={"j"}
              mode={"light"}
              type={"lowercase"}
            />
            <KeysIPhone
              style={{
                position: "relative",
                height: 43,
                flexGrow: 1,
                width: "auto",
              }}
              letter={"k"}
              mode={"light"}
              type={"lowercase"}
            />
            <KeysIPhone
              style={{
                position: "relative",
                height: 43,
                flexGrow: 1,
                width: "auto",
              }}
              letter={"l"}
              mode={"light"}
              type={"lowercase"}
            />
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: 14.25,
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              width: 45,
              height: 43,
              borderRadius: 8.5,
              background: "linear-gradient(rgba(255,255,255,0.67),rgba(255,255,255,0.67)), linear-gradient(rgb(25,25,25),rgb(25,25,25))",
              flexShrink: 0,
            }}>
              <span style={{
                position: "absolute",
                left: 0,
                top: 7,
                width: 45,
                height: 28,
                fontFamily: "\"SF Compact\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 457,
                fontSize: 20,
                textAlign: "center",
                lineHeight: "28px",
                color: "var(--labels-primary)",
                textTransform: "uppercase",
              }}>􀆞</span>
            </div>
            <div style={{
              position: "relative",
              height: 45,
              display: "flex",
              flexDirection: "row",
              gap: 6,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexGrow: 1,
            }}>
              <KeysIPhone
                style={{
                  position: "relative",
                  flexGrow: 1,
                  alignSelf: "stretch",
                  width: "auto",
                  height: "auto",
                }}
                letter={"z"}
                mode={"light"}
                type={"lowercase"}
              />
              <KeysIPhone
                style={{
                  position: "relative",
                  flexGrow: 1,
                  alignSelf: "stretch",
                  width: "auto",
                  height: "auto",
                }}
                letter={"x"}
                mode={"light"}
                type={"lowercase"}
              />
              <KeysIPhone
                style={{
                  position: "relative",
                  flexGrow: 1,
                  alignSelf: "stretch",
                  width: "auto",
                  height: "auto",
                }}
                letter={"c"}
                mode={"light"}
                type={"lowercase"}
              />
              <KeysIPhone
                style={{
                  position: "relative",
                  flexGrow: 1,
                  alignSelf: "stretch",
                  width: "auto",
                  height: "auto",
                }}
                letter={"v"}
                mode={"light"}
                type={"lowercase"}
              />
              <KeysIPhone
                style={{
                  position: "relative",
                  flexGrow: 1,
                  alignSelf: "stretch",
                  width: "auto",
                  height: "auto",
                }}
                letter={"b"}
                mode={"light"}
                type={"lowercase"}
              />
              <KeysIPhone
                style={{
                  position: "relative",
                  flexGrow: 1,
                  alignSelf: "stretch",
                  width: "auto",
                  height: "auto",
                }}
                letter={"n"}
                mode={"light"}
                type={"lowercase"}
              />
              <KeysIPhone
                style={{
                  position: "relative",
                  flexGrow: 1,
                  alignSelf: "stretch",
                  width: "auto",
                  height: "auto",
                }}
                letter={"m"}
                mode={"light"}
                type={"lowercase"}
              />
            </div>
            <div style={{
              position: "relative",
              width: 45,
              height: 43,
              borderRadius: 8.5,
              background: "linear-gradient(rgba(255,255,255,0.67),rgba(255,255,255,0.67)), linear-gradient(rgb(25,25,25),rgb(25,25,25))",
              flexShrink: 0,
            }}>
              <span style={{
                position: "absolute",
                left: 0,
                top: 7,
                width: 45,
                height: 28,
                fontFamily: "\"SF Compact\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 457,
                fontSize: 20,
                textAlign: "center",
                lineHeight: "28px",
                color: "var(--labels-primary)",
                textTransform: "uppercase",
              }}>􀆛</span>
            </div>
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: 6,
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
                position: "relative",
                width: 92,
                height: 43,
                flexShrink: 0,
              }}>
              <KeysIPhone
                style={{ transform: "scale(2.875, 1)", transformOrigin: "0 0" }}
                mode={"light"}
                type={"abc"}
              />
            </div>
            <KeysIPhoneSpace
              style={{ position: "relative", flexGrow: 1, width: "auto" }}
              mode={"light"}
              config={"default"}
            />
            <div style={{
              position: "relative",
              width: 92,
              height: 43,
              borderRadius: 8.5,
              flexShrink: 0,
            }}>
              <div style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 92,
                height: 43,
                borderRadius: 8.5,
                backgroundColor: "var(--accents-blue)",
              }} />
              <span style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 92,
                height: 42,
                fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 19,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "28px",
                color: "rgb(255,255,255)",
              }}>􀅇</span>
            </div>
          </div>
        </div>
        <BottomButtons
          style={{
            position: "relative",
            height: 78,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          mode={"light"}
          type={"emoji and mic"}
        />
      </div>
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: 402,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-end",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <AccessoryBarIPhoneFind
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        mode={"light"}
      />
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <BackgroundIPhone
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 402,
            height: 337,
          }}
          mode={"light"}
        />
        {props.showSuggestions && (
        <Autocorrection
          style={{
            position: "relative",
            height: 52,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          mode={"light"}
        />
        )}
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 11,
          padding: "0px 6.670px 0px 6.670px",
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
            gap: 6,
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <KeysIPhone
              style={{
                position: "relative",
                height: 43,
                flexGrow: 1,
                width: "auto",
              }}
              letter={"q"}
              mode={"light"}
              type={"lowercase"}
            />
            <KeysIPhone
              style={{
                position: "relative",
                height: 43,
                flexGrow: 1,
                width: "auto",
              }}
              letter={"w"}
              mode={"light"}
              type={"lowercase"}
            />
            <KeysIPhone
              style={{
                position: "relative",
                height: 43,
                flexGrow: 1,
                width: "auto",
              }}
              letter={"e"}
              mode={"light"}
              type={"lowercase"}
            />
            <KeysIPhone
              style={{
                position: "relative",
                height: 43,
                flexGrow: 1,
                width: "auto",
              }}
              letter={"r"}
              mode={"light"}
              type={"lowercase"}
            />
            <KeysIPhone
              style={{
                position: "relative",
                height: 43,
                flexGrow: 1,
                width: "auto",
              }}
              letter={"t"}
              mode={"light"}
              type={"lowercase"}
            />
            <KeysIPhone
              style={{
                position: "relative",
                height: 43,
                flexGrow: 1,
                width: "auto",
              }}
              letter={"y"}
              mode={"light"}
              type={"lowercase"}
            />
            <KeysIPhone
              style={{
                position: "relative",
                height: 43,
                flexGrow: 1,
                width: "auto",
              }}
              letter={"u"}
              mode={"light"}
              type={"lowercase"}
            />
            <KeysIPhone
              style={{
                position: "relative",
                height: 43,
                flexGrow: 1,
                width: "auto",
              }}
              letter={"i"}
              mode={"light"}
              type={"lowercase"}
            />
            <KeysIPhone
              style={{
                position: "relative",
                height: 43,
                flexGrow: 1,
                width: "auto",
              }}
              letter={"o"}
              mode={"light"}
              type={"lowercase"}
            />
            <KeysIPhone
              style={{
                position: "relative",
                height: 43,
                flexGrow: 1,
                width: "auto",
              }}
              letter={"p"}
              mode={"light"}
              type={"lowercase"}
            />
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: 6,
            padding: "0px 20px 0px 20px",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <KeysIPhone
              style={{
                position: "relative",
                height: 43,
                flexGrow: 1,
                width: "auto",
              }}
              letter={"a"}
              mode={"light"}
              type={"lowercase"}
            />
            <KeysIPhone
              style={{
                position: "relative",
                height: 43,
                flexGrow: 1,
                width: "auto",
              }}
              letter={"s"}
              mode={"light"}
              type={"lowercase"}
            />
            <KeysIPhone
              style={{
                position: "relative",
                height: 43,
                flexGrow: 1,
                width: "auto",
              }}
              letter={"d"}
              mode={"light"}
              type={"lowercase"}
            />
            <KeysIPhone
              style={{
                position: "relative",
                height: 43,
                flexGrow: 1,
                width: "auto",
              }}
              letter={"f"}
              mode={"light"}
              type={"lowercase"}
            />
            <KeysIPhone
              style={{
                position: "relative",
                height: 43,
                flexGrow: 1,
                width: "auto",
              }}
              letter={"g"}
              mode={"light"}
              type={"lowercase"}
            />
            <KeysIPhone
              style={{
                position: "relative",
                height: 43,
                flexGrow: 1,
                width: "auto",
              }}
              letter={"h"}
              mode={"light"}
              type={"lowercase"}
            />
            <KeysIPhone
              style={{
                position: "relative",
                height: 43,
                flexGrow: 1,
                width: "auto",
              }}
              letter={"j"}
              mode={"light"}
              type={"lowercase"}
            />
            <KeysIPhone
              style={{
                position: "relative",
                height: 43,
                flexGrow: 1,
                width: "auto",
              }}
              letter={"k"}
              mode={"light"}
              type={"lowercase"}
            />
            <KeysIPhone
              style={{
                position: "relative",
                height: 43,
                flexGrow: 1,
                width: "auto",
              }}
              letter={"l"}
              mode={"light"}
              type={"lowercase"}
            />
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: 14.25,
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              width: 45,
              height: 43,
              borderRadius: 8.5,
              background: "linear-gradient(rgba(255,255,255,0.67),rgba(255,255,255,0.67)), linear-gradient(rgb(25,25,25),rgb(25,25,25))",
              flexShrink: 0,
            }}>
              <span style={{
                position: "absolute",
                left: 0,
                top: 7,
                width: 45,
                height: 28,
                fontFamily: "\"SF Compact\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 457,
                fontSize: 20,
                textAlign: "center",
                lineHeight: "28px",
                color: "var(--labels-primary)",
                textTransform: "uppercase",
              }}>􀆞</span>
            </div>
            <div style={{
              position: "relative",
              height: 45,
              display: "flex",
              flexDirection: "row",
              gap: 6,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexGrow: 1,
            }}>
              <KeysIPhone
                style={{
                  position: "relative",
                  flexGrow: 1,
                  alignSelf: "stretch",
                  width: "auto",
                  height: "auto",
                }}
                letter={"z"}
                mode={"light"}
                type={"lowercase"}
              />
              <KeysIPhone
                style={{
                  position: "relative",
                  flexGrow: 1,
                  alignSelf: "stretch",
                  width: "auto",
                  height: "auto",
                }}
                letter={"x"}
                mode={"light"}
                type={"lowercase"}
              />
              <KeysIPhone
                style={{
                  position: "relative",
                  flexGrow: 1,
                  alignSelf: "stretch",
                  width: "auto",
                  height: "auto",
                }}
                letter={"c"}
                mode={"light"}
                type={"lowercase"}
              />
              <KeysIPhone
                style={{
                  position: "relative",
                  flexGrow: 1,
                  alignSelf: "stretch",
                  width: "auto",
                  height: "auto",
                }}
                letter={"v"}
                mode={"light"}
                type={"lowercase"}
              />
              <KeysIPhone
                style={{
                  position: "relative",
                  flexGrow: 1,
                  alignSelf: "stretch",
                  width: "auto",
                  height: "auto",
                }}
                letter={"b"}
                mode={"light"}
                type={"lowercase"}
              />
              <KeysIPhone
                style={{
                  position: "relative",
                  flexGrow: 1,
                  alignSelf: "stretch",
                  width: "auto",
                  height: "auto",
                }}
                letter={"n"}
                mode={"light"}
                type={"lowercase"}
              />
              <KeysIPhone
                style={{
                  position: "relative",
                  flexGrow: 1,
                  alignSelf: "stretch",
                  width: "auto",
                  height: "auto",
                }}
                letter={"m"}
                mode={"light"}
                type={"lowercase"}
              />
            </div>
            <div style={{
              position: "relative",
              width: 45,
              height: 43,
              borderRadius: 8.5,
              background: "linear-gradient(rgba(255,255,255,0.67),rgba(255,255,255,0.67)), linear-gradient(rgb(25,25,25),rgb(25,25,25))",
              flexShrink: 0,
            }}>
              <span style={{
                position: "absolute",
                left: 0,
                top: 7,
                width: 45,
                height: 28,
                fontFamily: "\"SF Compact\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 457,
                fontSize: 20,
                textAlign: "center",
                lineHeight: "28px",
                color: "var(--labels-primary)",
                textTransform: "uppercase",
              }}>􀆛</span>
            </div>
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: 6,
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
                position: "relative",
                width: 92,
                height: 43,
                flexShrink: 0,
              }}>
              <KeysIPhone
                style={{ transform: "scale(2.875, 1)", transformOrigin: "0 0" }}
                mode={"light"}
                type={"abc"}
              />
            </div>
            <KeysIPhoneSpace
              style={{ position: "relative", flexGrow: 1, width: "auto" }}
              mode={"light"}
              config={"default"}
            />
            <div style={{
              position: "relative",
              width: 92,
              height: 43,
              borderRadius: 8.5,
              flexShrink: 0,
            }}>
              <div style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 92,
                height: 43,
                borderRadius: 8.5,
                backgroundColor: "var(--accents-blue)",
              }} />
              <span style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 92,
                height: 42,
                fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 19,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "28px",
                color: "rgb(255,255,255)",
              }}>􀅇</span>
            </div>
          </div>
        </div>
        <BottomButtons
          style={{
            position: "relative",
            height: 78,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          mode={"light"}
          type={"emoji and mic"}
        />
      </div>
    </div>
  );
  const __body6 = () => (
    <div className={props.className} style={{
      width: 402,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-end",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.showAccessoryBar && (
      <AccessoryBarIPhoneToolbar
        style={{ position: "relative", height: 48, flexShrink: 0 }}
        mode={"light"}
        type={"6 symbols"}
      />
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <BackgroundIPhone
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 402,
            height: 337,
          }}
          mode={"light"}
        />
        {props.showSuggestions && (
        <Autocorrection
          style={{
            position: "relative",
            height: 52,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          mode={"light"}
        />
        )}
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 11,
          padding: "0px 6.670px 0px 6.670px",
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
            gap: 6,
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <KeysIPhone
              style={{
                position: "relative",
                height: 43,
                flexGrow: 1,
                width: "auto",
              }}
              letter={"q"}
              mode={"light"}
              type={"lowercase"}
            />
            <KeysIPhone
              style={{
                position: "relative",
                height: 43,
                flexGrow: 1,
                width: "auto",
              }}
              letter={"w"}
              mode={"light"}
              type={"lowercase"}
            />
            <KeysIPhone
              style={{
                position: "relative",
                height: 43,
                flexGrow: 1,
                width: "auto",
              }}
              letter={"e"}
              mode={"light"}
              type={"lowercase"}
            />
            <KeysIPhone
              style={{
                position: "relative",
                height: 43,
                flexGrow: 1,
                width: "auto",
              }}
              letter={"r"}
              mode={"light"}
              type={"lowercase"}
            />
            <KeysIPhone
              style={{
                position: "relative",
                height: 43,
                flexGrow: 1,
                width: "auto",
              }}
              letter={"t"}
              mode={"light"}
              type={"lowercase"}
            />
            <KeysIPhone
              style={{
                position: "relative",
                height: 43,
                flexGrow: 1,
                width: "auto",
              }}
              letter={"y"}
              mode={"light"}
              type={"lowercase"}
            />
            <KeysIPhone
              style={{
                position: "relative",
                height: 43,
                flexGrow: 1,
                width: "auto",
              }}
              letter={"u"}
              mode={"light"}
              type={"lowercase"}
            />
            <KeysIPhone
              style={{
                position: "relative",
                height: 43,
                flexGrow: 1,
                width: "auto",
              }}
              letter={"i"}
              mode={"light"}
              type={"lowercase"}
            />
            <KeysIPhone
              style={{
                position: "relative",
                height: 43,
                flexGrow: 1,
                width: "auto",
              }}
              letter={"o"}
              mode={"light"}
              type={"lowercase"}
            />
            <KeysIPhone
              style={{
                position: "relative",
                height: 43,
                flexGrow: 1,
                width: "auto",
              }}
              letter={"p"}
              mode={"light"}
              type={"lowercase"}
            />
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: 6,
            padding: "0px 20px 0px 20px",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <KeysIPhone
              style={{
                position: "relative",
                height: 43,
                flexGrow: 1,
                width: "auto",
              }}
              letter={"a"}
              mode={"light"}
              type={"lowercase"}
            />
            <KeysIPhone
              style={{
                position: "relative",
                height: 43,
                flexGrow: 1,
                width: "auto",
              }}
              letter={"s"}
              mode={"light"}
              type={"lowercase"}
            />
            <KeysIPhone
              style={{
                position: "relative",
                height: 43,
                flexGrow: 1,
                width: "auto",
              }}
              letter={"d"}
              mode={"light"}
              type={"lowercase"}
            />
            <KeysIPhone
              style={{
                position: "relative",
                height: 43,
                flexGrow: 1,
                width: "auto",
              }}
              letter={"f"}
              mode={"light"}
              type={"lowercase"}
            />
            <KeysIPhone
              style={{
                position: "relative",
                height: 43,
                flexGrow: 1,
                width: "auto",
              }}
              letter={"g"}
              mode={"light"}
              type={"lowercase"}
            />
            <KeysIPhone
              style={{
                position: "relative",
                height: 43,
                flexGrow: 1,
                width: "auto",
              }}
              letter={"h"}
              mode={"light"}
              type={"lowercase"}
            />
            <KeysIPhone
              style={{
                position: "relative",
                height: 43,
                flexGrow: 1,
                width: "auto",
              }}
              letter={"j"}
              mode={"light"}
              type={"lowercase"}
            />
            <KeysIPhone
              style={{
                position: "relative",
                height: 43,
                flexGrow: 1,
                width: "auto",
              }}
              letter={"k"}
              mode={"light"}
              type={"lowercase"}
            />
            <KeysIPhone
              style={{
                position: "relative",
                height: 43,
                flexGrow: 1,
                width: "auto",
              }}
              letter={"l"}
              mode={"light"}
              type={"lowercase"}
            />
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: 14.25,
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              width: 45,
              height: 43,
              borderRadius: 8.5,
              background: "linear-gradient(rgba(255,255,255,0.67),rgba(255,255,255,0.67)), linear-gradient(rgb(25,25,25),rgb(25,25,25))",
              flexShrink: 0,
            }}>
              <span style={{
                position: "absolute",
                left: 0,
                top: 7,
                width: 45,
                height: 28,
                fontFamily: "\"SF Compact\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 457,
                fontSize: 20,
                textAlign: "center",
                lineHeight: "28px",
                color: "var(--labels-primary)",
                textTransform: "uppercase",
              }}>􀆞</span>
            </div>
            <div style={{
              position: "relative",
              height: 45,
              display: "flex",
              flexDirection: "row",
              gap: 6,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexGrow: 1,
            }}>
              <KeysIPhone
                style={{
                  position: "relative",
                  flexGrow: 1,
                  alignSelf: "stretch",
                  width: "auto",
                  height: "auto",
                }}
                letter={"z"}
                mode={"light"}
                type={"lowercase"}
              />
              <KeysIPhone
                style={{
                  position: "relative",
                  flexGrow: 1,
                  alignSelf: "stretch",
                  width: "auto",
                  height: "auto",
                }}
                letter={"x"}
                mode={"light"}
                type={"lowercase"}
              />
              <KeysIPhone
                style={{
                  position: "relative",
                  flexGrow: 1,
                  alignSelf: "stretch",
                  width: "auto",
                  height: "auto",
                }}
                letter={"c"}
                mode={"light"}
                type={"lowercase"}
              />
              <KeysIPhone
                style={{
                  position: "relative",
                  flexGrow: 1,
                  alignSelf: "stretch",
                  width: "auto",
                  height: "auto",
                }}
                letter={"v"}
                mode={"light"}
                type={"lowercase"}
              />
              <KeysIPhone
                style={{
                  position: "relative",
                  flexGrow: 1,
                  alignSelf: "stretch",
                  width: "auto",
                  height: "auto",
                }}
                letter={"b"}
                mode={"light"}
                type={"lowercase"}
              />
              <KeysIPhone
                style={{
                  position: "relative",
                  flexGrow: 1,
                  alignSelf: "stretch",
                  width: "auto",
                  height: "auto",
                }}
                letter={"n"}
                mode={"light"}
                type={"lowercase"}
              />
              <KeysIPhone
                style={{
                  position: "relative",
                  flexGrow: 1,
                  alignSelf: "stretch",
                  width: "auto",
                  height: "auto",
                }}
                letter={"m"}
                mode={"light"}
                type={"lowercase"}
              />
            </div>
            <div style={{
              position: "relative",
              width: 45,
              height: 43,
              borderRadius: 8.5,
              background: "linear-gradient(rgba(255,255,255,0.67),rgba(255,255,255,0.67)), linear-gradient(rgb(25,25,25),rgb(25,25,25))",
              flexShrink: 0,
            }}>
              <span style={{
                position: "absolute",
                left: 0,
                top: 7,
                width: 45,
                height: 28,
                fontFamily: "\"SF Compact\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 457,
                fontSize: 20,
                textAlign: "center",
                lineHeight: "28px",
                color: "var(--labels-primary)",
                textTransform: "uppercase",
              }}>􀆛</span>
            </div>
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: 6,
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
                position: "relative",
                width: 92,
                height: 43,
                flexShrink: 0,
              }}>
              <KeysIPhone
                style={{ transform: "scale(2.875, 1)", transformOrigin: "0 0" }}
                mode={"light"}
                type={"abc"}
              />
            </div>
            <KeysIPhoneSpace
              style={{ position: "relative", flexGrow: 1, width: "auto" }}
              mode={"light"}
              config={"default"}
            />
            <div style={{
                position: "relative",
                width: 92,
                height: 43,
                flexShrink: 0,
              }}>
              <KeysIPhone
                style={{ transform: "scale(2.875, 1)", transformOrigin: "0 0" }}
                mode={"light"}
                type={"return-prominent"}
              />
            </div>
          </div>
        </div>
        <BottomButtons
          style={{
            position: "relative",
            height: 78,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          mode={"light"}
          type={"emoji and mic"}
        />
      </div>
    </div>
  );
  const __impls = {
    // figma: Type=Numbers and Punctuation
    "type=numbers and punctuation": __body0,
    // figma: Type=Emoji
    "type=emoji": __body1,
    // figma: Type=Web Form
    "type=web form": __body2,
    // figma: Type=Web
    "type=web": __body3,
    // figma: Type=Find and Replace
    "type=find and replace": __body4,
    // figma: Type=Find
    "type=find": __body5,
    // figma: Type=Default
    "type=default": __body6,
  };
  return (__impls[__vkey(props)] ?? __body6)();
}
export default Keyboard;
