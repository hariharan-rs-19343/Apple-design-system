import { Autocorrection } from '../accessory-bars/Autocorrection.jsx';
import { BackgroundIPhone } from '../backgrounds/BackgroundIPhone.jsx';
import { BottomButtons } from '../actions/BottomButtons.jsx';
import { ButtonsTop } from '../actions/ButtonsTop.jsx';
import { FieldBG } from '../fields/FieldBG.jsx';
import { FieldFind } from '../fields/FieldFind.jsx';
import { FieldReplace } from '../fields/FieldReplace.jsx';
import { IPhone17Pro } from './IPhone17Pro.jsx';
import { Keyboard } from './Keyboard.jsx';
import { KeysIPhone } from '../keyboards/KeysIPhone.jsx';
import { KeysIPhoneSpace } from '../keyboards/KeysIPhoneSpace.jsx';
import { LiquidGlassRegularSmall } from '../buttons/LiquidGlassRegularSmall.jsx';
import { Next } from '../fields/Next.jsx';
import { Previous } from '../accessory-bars/Previous.jsx';
import { ReplaceButton } from '../accessory-bars/ReplaceButton.jsx';
import { ScrollEdgeEffectSoft } from './ScrollEdgeEffectSoft.jsx';
import { StatusBarIPhone2 } from '../navigation/StatusBarIPhone2.jsx';
import { Symbol2 } from '../accessory-bars/Symbol2.jsx';
import { TitleLargeTitle } from '../navigation/TitleLargeTitle.jsx';

// figma node: 770:21899 Examples/Keyboard (5 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "type=" + __venc(p.type);

export function ExamplesKeyboard(_p = {}) {
  const props = { ..._p, type: _p.type ?? "emoji" };
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
        }} />
        <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 402,
            height: 187,
          }}>
          <ScrollEdgeEffectSoft
            style={{ transform: "scale(2.010, 0.935)", transformOrigin: "0 0" }}
            edge={"top"}
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
      <div style={{
        position: "absolute",
        left: 0,
        top: 428,
        width: 402,
        borderRadius: "0px 0px 44px 44px",
        display: "flex",
        flexDirection: "column",
        gap: 8,
        alignItems: "flex-end",
        flexWrap: "nowrap",
      }}>
        <div style={{
          position: "relative",
          height: 101,
          display: "flex",
          flexDirection: "column",
          gap: 10,
          padding: "10px 12px 10px 12px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 12,
            top: 0,
            width: 378,
            height: 101,
          }}>
            <svg width={378} height={101} viewBox="0 0 378 101" fill="none" style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 378,
              height: 101,
              overflow: "hidden",
              borderRadius: 27,
              filter: "drop-shadow(0px 8px 40px rgba(0,0,0,0.12))",
            }}>
              <path d={"M 0 43.2 C 0 28.079 0 20.518 2.943 14.742 C 5.531 9.662 9.662 5.531 14.742 2.943 C 20.518 0 28.079 0 43.2 0 L 334.8 0 C 349.921 0 357.482 0 363.258 2.943 C 368.338 5.531 372.469 9.662 375.057 14.742 C 378 20.518 378 28.079 378 43.2 L 378 57.8 C 378 72.921 378 80.482 375.057 86.258 C 372.469 91.338 368.338 95.469 363.258 98.057 C 357.482 101 349.921 101 334.8 101 L 43.2 101 C 28.079 101 20.518 101 14.742 98.057 C 9.662 95.469 5.531 91.338 2.943 86.258 C 0 80.482 0 72.921 0 57.8 L 0 43.2 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
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
              width: 43,
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 590,
              fontSize: 17,
              textAlign: "center",
              lineHeight: "22px",
              letterSpacing: "-0.430px",
              color: "var(--accents-blue)",
              flexShrink: 0,
            }}>Done</span>
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
            <ReplaceButton
              style={{ position: "relative", height: 22, flexShrink: 0 }}
              mode={"light"}
              state={"disabled"}
            />
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
      backgroundColor: "rgb(255,255,255)",
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
        }} />
        <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 402,
            height: 187,
          }}>
          <ScrollEdgeEffectSoft
            style={{ transform: "scale(2.010, 0.935)", transformOrigin: "0 0" }}
            edge={"top"}
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
      <div style={{
        position: "absolute",
        left: 0,
        top: 481,
        width: 402,
        borderRadius: "0px 0px 44px 44px",
        display: "flex",
        flexDirection: "column",
        gap: 8,
        alignItems: "flex-end",
        flexWrap: "nowrap",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 10,
          padding: "0px 11px 0px 11px",
          justifyContent: "center",
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
            gap: 8,
            alignItems: "center",
            flexWrap: "nowrap",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              width: 84,
              display: "flex",
              flexDirection: "row",
              gap: 12,
              padding: "6px 14px 6px 14px",
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
                  width: 84,
                  height: 48,
                }}>
                <LiquidGlassRegularSmall
                  style={{ transform: "scale(1.750, 1)", transformOrigin: "0 0" }}
                  mode={"light"}
                  state={"default"}
                />
              </div>
              <Previous
                style={{
                  position: "relative",
                  width: 22,
                  flexShrink: 0,
                  alignSelf: "stretch",
                  height: "auto",
                }}
                mode={"light"}
                enabled={true}
              />
              <Next
                style={{
                  position: "relative",
                  width: 22,
                  flexShrink: 0,
                  alignSelf: "stretch",
                  height: "auto",
                }}
                mode={"light"}
                enabled={true}
              />
            </div>
            <div style={{
              position: "relative",
              borderRadius: 100,
              display: "flex",
              flexDirection: "row",
              gap: 6,
              padding: "0px 12px 0px 12px",
              alignItems: "center",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexGrow: 1,
              alignSelf: "stretch",
            }}>
              <div style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  width: 230,
                  height: 48,
                }}>
                <LiquidGlassRegularSmall
                  style={{ transform: "scale(4.792, 1)", transformOrigin: "0 0" }}
                  mode={"light"}
                  state={"default"}
                />
              </div>
              <FieldFind
                style={{ position: "relative", flexGrow: 1, width: "auto" }}
                mode={"light"}
                state={"text entered"}
              />
            </div>
          </div>
          <div style={{
            position: "relative",
            width: 48,
            height: 48,
            borderRadius: 1000,
            display: "flex",
            flexDirection: "row",
            gap: 4,
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
          }}>
            <LiquidGlassRegularSmall
              style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 48,
                height: 48,
              }}
              mode={"light"}
              state={"default"}
            />
            <Symbol2
              style={{
                position: "relative",
                width: 28,
                height: 22,
                flexShrink: 0,
              }}
              mode={"light"}
            />
          </div>
        </div>
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
  const __body2 = () => (
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
        }} />
        <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 402,
            height: 187,
          }}>
          <ScrollEdgeEffectSoft
            style={{ transform: "scale(2.010, 0.935)", transformOrigin: "0 0" }}
            edge={"top"}
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
      <Keyboard
        style={{
          position: "absolute",
          left: 0,
          top: 489,
          width: 402,
        }}
        type={"emoji"}
      />
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
  const __body3 = () => (
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
        }} />
        <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 402,
            height: 187,
          }}>
          <ScrollEdgeEffectSoft
            style={{ transform: "scale(2.010, 0.935)", transformOrigin: "0 0" }}
            edge={"top"}
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
      <Keyboard
        style={{
          position: "absolute",
          left: 0,
          top: 566,
          width: 402,
        }}
        type={"numbers and punctuation"}
      />
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
  const __body4 = () => (
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
        }} />
        <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 402,
            height: 187,
          }}>
          <ScrollEdgeEffectSoft
            style={{ transform: "scale(2.010, 0.935)", transformOrigin: "0 0" }}
            edge={"top"}
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
      <div style={{
        position: "absolute",
        left: 0,
        top: 481,
        width: 402,
        borderRadius: "0px 0px 44px 44px",
        display: "flex",
        flexDirection: "column",
        gap: 8,
        alignItems: "flex-end",
        flexWrap: "nowrap",
      }}>
        <div style={{
          position: "relative",
          height: 48,
          borderRadius: 296,
          backgroundColor: "rgb(255,255,255)",
          display: "flex",
          flexDirection: "row",
          gap: 12,
          padding: "0px 18px 0px 18px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <div style={{
            position: "absolute",
            left: 12,
            top: 0,
            width: 288,
            height: 48,
          }}>
            <svg width={288} height={48} viewBox="0 0 288 48" fill="none" style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 288,
              height: 48,
              overflow: "hidden",
              borderRadius: 296,
              filter: "drop-shadow(0px 8px 40px rgba(0,0,0,0.12))",
            }}>
              <path d={"M 0 24 C 0 10.745 10.745 0 24 0 L 264 0 C 277.255 0 288 10.745 288 24 L 288 24 C 288 37.255 277.255 48 264 48 L 24 48 C 10.745 48 0 37.255 0 24 L 0 24 Z"} fill="currentColor" fillRule="nonzero" />
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
              color: "var(--labels-vibrant-primary)",
              flexGrow: 1,
              alignSelf: "stretch",
            }}>􀓔</span>
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
              color: "var(--labels-vibrant-primary)",
              flexGrow: 1,
              alignSelf: "stretch",
            }}>􀓔</span>
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
              color: "var(--labels-vibrant-primary)",
              flexGrow: 1,
              alignSelf: "stretch",
            }}>􀓔</span>
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
              color: "var(--labels-vibrant-primary)",
              flexGrow: 1,
              alignSelf: "stretch",
            }}>􀓔</span>
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
              color: "var(--labels-vibrant-primary)",
              flexGrow: 1,
              alignSelf: "stretch",
            }}>􀓔</span>
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
              color: "var(--labels-vibrant-primary)",
              flexGrow: 1,
              alignSelf: "stretch",
            }}>􀓔</span>
          </div>
        </div>
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
    // figma: Type=Find and Replace
    "type=find and replace": __body0,
    // figma: Type=Find
    "type=find": __body1,
    // figma: Type=Emoji
    "type=emoji": __body2,
    // figma: Type=Numeric
    "type=numeric": __body3,
    // figma: Type=Text
    "type=text": __body4,
  };
  return (__impls[__vkey(props)] ?? __body2)();
}
export default ExamplesKeyboard;
