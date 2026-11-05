import { Button } from '../views/Button.jsx';
import { Grabber2 } from '../navigation/Grabber2.jsx';
import { PageControl3 } from '../surfaces/PageControl3.jsx';
import { PopoversIPadOnly } from '../navigation/PopoversIPadOnly.jsx';
import { SegmentedControl } from '../segmented-controls/SegmentedControl.jsx';
import { Title } from '../views/Title.jsx';
import { ToolbarIPad2 } from '../views/ToolbarIPad2.jsx';
import { ToolbarIPhone } from '../views/ToolbarIPhone.jsx';

// figma node: 5581:27073 
export function Screen3(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 1050,
      height: 1560,
      borderRadius: 22,
      backgroundColor: "var(--section-fill)",
      boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.4)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 100,
        top: 910,
        width: 402,
        display: "flex",
        flexDirection: "column",
        gap: 5,
        padding: "8px 0px 10px 0px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
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
          <Button
            style={{ position: "relative", height: 44, flexShrink: 0 }}
            mode={"light"}
          />
          <Title
            style={{ position: "relative", flexShrink: 0 }}
            mode={"light"}
          />
          <Button
            style={{ position: "relative", height: 44, flexShrink: 0 }}
            text1={"􀆄"}
            mode={"light"}
          />
        </div>
      </div>
      <div style={{
        position: "absolute",
        left: 570,
        top: 910,
        width: 402,
        display: "flex",
        flexDirection: "column",
        gap: 5,
        padding: "8px 0px 10px 0px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
      }}>
        <div style={{
            position: "relative",
            width: 40,
            height: 5,
            flexShrink: 0,
          }}>
          <Grabber2
            style={{ transform: "scale(1.111, 1)", transformOrigin: "0 0" }}
            mode={"light"}
          />
        </div>
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
          <Button
            style={{ position: "relative", height: 44, flexShrink: 0 }}
            mode={"light"}
          />
          <Title
            style={{ position: "relative", flexShrink: 0 }}
            mode={"light"}
          />
          <Button
            style={{ position: "relative", height: 44, flexShrink: 0 }}
            text1={"􀆄"}
            mode={"light"}
          />
        </div>
      </div>
      <div style={{
        position: "absolute",
        left: 100,
        top: 1080,
        width: 84,
        height: 148,
        overflow: "hidden",
        borderRadius: 5,
        backgroundColor: "var(--subcomponent-fill)",
      }}>
        <div style={{
          position: "absolute",
          left: 20,
          top: 84,
          height: 44,
          borderRadius: 100,
          backgroundColor: "rgb(31,31,31)",
          display: "flex",
          flexDirection: "row",
          gap: 12,
          padding: "0px 4px 0px 4px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 510,
            fontSize: 17,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "rgb(138,138,138)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>􀎘</span>
        </div>
        <div style={{
          position: "absolute",
          left: 20,
          top: 20,
          height: 44,
          borderRadius: 100,
          backgroundColor: "var(--fills-vibrant-secondary)",
          display: "flex",
          flexDirection: "row",
          gap: 12,
          padding: "0px 4px 0px 4px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 510,
            fontSize: 17,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "var(--labels-vibrant-secondary)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>􀎘</span>
        </div>
      </div>
      <div style={{
        position: "absolute",
        left: 100,
        top: 1330,
        width: 152,
        height: 140,
        overflow: "hidden",
        borderRadius: 5,
      }}>
        <div style={{
          position: "absolute",
          left: 70,
          top: 68,
          width: 36,
          height: 36,
        }}>
          <div style={{
            position: "absolute",
            left: 5,
            top: 5,
            width: 26,
            height: 26,
            borderRadius: "50%",
            backgroundColor: "rgb(175,82,222)",
          }} />
          <svg width={36} height={36} viewBox="0 0 36 36" fill="none" style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 36,
            height: 36,
          }}>
            <path d={"M 18 36 C 27.941 36 36 27.941 36 18 C 36 8.059 27.941 0 18 0 C 8.059 0 0 8.059 0 18 C 0 27.941 8.059 36 18 36 Z M 18 33 C 26.284 33 33 26.284 33 18 C 33 9.716 26.284 3 18 3 C 9.716 3 3 9.716 3 18 C 3 26.284 9.716 33 18 33 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
        <div style={{
          position: "absolute",
          left: 70,
          top: 20,
          width: 36,
          height: 36,
        }}>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 36,
            height: 36,
            borderRadius: "50%",
            background: "radial-gradient(18px 18px at 50.00% 50.00%, rgb(228,228,228) 0.00%, rgba(228,228,228,0) 88.00%), conic-gradient(from 0deg at 50% 50%, rgb(231,224,64) 0.00deg, rgb(238,170,60) 44.65deg, rgb(232,64,59) 89.78deg, rgb(179,62,213) 131.61deg, rgb(105,74,232) 182.19deg, rgb(60,202,231) 231.34deg, rgb(60,232,133) 269.54deg, rgb(137,231,67) 313.04deg, rgb(231,224,64) 360.00deg)",
          }} />
        </div>
        <div style={{
          position: "absolute",
          left: 20,
          top: 68,
          width: 28,
          height: 28,
        }}>
          <div style={{
            position: "absolute",
            left: 5,
            top: 5,
            width: 18,
            height: 18,
            borderRadius: "50%",
            backgroundColor: "rgb(175,82,222)",
          }} />
          <svg width={28} height={28} viewBox="0 0 28 28" fill="none" style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 28,
            height: 28,
          }}>
            <path d={"M 14 28 C 21.732 28 28 21.732 28 14 C 28 6.268 21.732 0 14 0 C 6.268 0 0 6.268 0 14 C 0 21.732 6.268 28 14 28 Z M 14 25 C 20.075 25 25 20.075 25 14 C 25 7.925 20.075 3 14 3 C 7.925 3 3 7.925 3 14 C 3 20.075 7.925 25 14 25 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
        <div style={{
          position: "absolute",
          left: 20,
          top: 20,
          width: 28,
          height: 28,
        }}>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 28,
            height: 28,
            borderRadius: "50%",
            background: "radial-gradient(14px 14px at 50.00% 50.00%, rgb(228,228,228) 0.00%, rgba(228,228,228,0) 88.00%), conic-gradient(from 0deg at 50% 50%, rgb(231,224,64) 0.00deg, rgb(238,170,60) 44.65deg, rgb(232,64,59) 89.78deg, rgb(179,62,213) 131.61deg, rgb(105,74,232) 182.19deg, rgb(60,202,231) 231.34deg, rgb(60,232,133) 269.54deg, rgb(137,231,67) 313.04deg, rgb(231,224,64) 360.00deg)",
          }} />
        </div>
      </div>
      <div style={{
        position: "absolute",
        left: 550,
        top: 98,
        width: 402,
        height: 691,
      }}>
        <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 402,
            height: 691,
          }}>
          <PopoversIPadOnly
            style={{ transform: "scale(2.010, 3.455)", transformOrigin: "0 0" }}
            direction={"down - align center"}
          />
        </div>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 402,
          height: 691,
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          padding: "0px 16px 0px 16px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <ToolbarIPad2 style={{
              position: "relative",
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }} />
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            padding: "0px 0px 24px 0px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <SegmentedControl
              style={{
                position: "relative",
                height: 36,
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }}
              label1={"Grid"}
              label2={"Spectrum"}
              label3={"Sliders"}
              segments={"3"}
              selected={"1"}
            />
          </div>
          <div style={{
            position: "relative",
            overflow: "hidden",
            borderRadius: 18,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
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
                height: 30,
                backgroundColor: "rgb(254,255,254)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(235,235,235)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(214,214,214)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(194,194,194)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(173,173,173)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(153,153,153)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(133,133,133)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(112,112,112)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(92,92,92)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(71,71,71)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(51,51,51)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(0,0,0)",
                flexGrow: 1,
              }} />
            </div>
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
                height: 30,
                backgroundColor: "rgb(0,55,74)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(1,29,87)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(17,5,59)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(46,6,61)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(60,7,27)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(92,7,1)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(90,28,0)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(88,51,0)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(86,61,0)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(102,97,0)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(79,85,4)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(38,62,15)",
                flexGrow: 1,
              }} />
            </div>
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
                height: 30,
                backgroundColor: "rgb(0,77,101)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(1,47,123)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(26,10,82)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(69,13,89)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(85,16,41)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(131,17,0)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(123,41,0)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(122,74,0)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(120,88,0)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(141,134,2)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(111,118,10)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(56,87,26)",
                flexGrow: 1,
              }} />
            </div>
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
                height: 30,
                backgroundColor: "rgb(1,110,143)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(0,66,169)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(44,9,119)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(97,24,124)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(121,26,61)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(181,26,0)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(173,62,0)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(169,104,0)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(166,123,1)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(196,188,0)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(155,165,14)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(78,122,39)",
                flexGrow: 1,
              }} />
            </div>
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
                height: 30,
                backgroundColor: "rgb(0,140,180)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(0,86,214)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(55,26,148)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(122,33,158)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(153,36,79)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(226,36,0)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(218,81,0)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(211,131,1)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(209,157,1)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(245,236,0)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(195,209,23)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(102,157,52)",
                flexGrow: 1,
              }} />
            </div>
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
                height: 30,
                backgroundColor: "rgb(0,161,216)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(0,97,253)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(77,34,178)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(152,42,188)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(185,45,93)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(255,64,21)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(255,106,0)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(255,171,1)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(252,199,0)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(254,251,65)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(217,236,55)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(118,187,64)",
                flexGrow: 1,
              }} />
            </div>
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
                height: 30,
                backgroundColor: "rgb(1,199,252)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(58,135,253)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(94,48,235)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(190,56,243)",
                boxShadow: "inset 0 0 0 3px rgb(255,255,255)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(230,59,122)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(254,98,80)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(254,134,72)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(254,180,63)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(254,203,62)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(255,247,107)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(228,239,101)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(150,211,95)",
                flexGrow: 1,
              }} />
            </div>
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
                height: 30,
                backgroundColor: "rgb(82,214,252)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(116,167,255)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(134,79,253)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(211,87,254)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(238,113,158)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(255,140,130)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(254,165,125)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(254,199,119)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(254,217,119)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(255,249,148)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(234,242,143)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(177,221,139)",
                flexGrow: 1,
              }} />
            </div>
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
                height: 30,
                backgroundColor: "rgb(147,227,252)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(167,198,255)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(177,140,254)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(226,146,254)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(244,164,192)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(255,181,175)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(255,197,171)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(254,217,168)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(253,228,168)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(255,251,185)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(241,247,183)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(205,232,181)",
                flexGrow: 1,
              }} />
            </div>
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
                height: 30,
                backgroundColor: "rgb(203,240,255)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(210,226,254)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(216,201,254)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(239,202,254)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(249,211,224)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(255,218,216)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(255,226,214)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(254,236,212)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(254,241,213)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(253,251,221)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(246,250,219)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(222,238,212)",
                flexGrow: 1,
              }} />
            </div>
          </div>
          <div style={{
            position: "relative",
            borderTop: "1px solid var(--separators-opaque)",
            borderRight: "1px solid var(--separators-opaque)",
            borderBottom: "1px solid var(--separators-opaque)",
            borderLeft: "1px solid var(--separators-opaque)",
            display: "flex",
            flexDirection: "column",
            padding: "26px 0px 3px 0px",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <span style={{
              position: "relative",
              width: 67.197,
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 590,
              fontSize: 15,
              lineHeight: "20px",
              color: "var(--labels-primary)",
              flexShrink: 0,
            }}>Opacity</span>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              gap: 11,
              padding: "3px 0px 22px 0px",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <div className="fig-asset-8e58607ea75135ba-945472dc" style={{
                position: "relative",
                height: 40,
                overflow: "hidden",
                borderRadius: 100,
                display: "flex",
                flexDirection: "row",
                gap: 10,
                padding: "2px 2px 2px 2px",
                justifyContent: "flex-end",
                alignItems: "center",
                flexWrap: "nowrap",
                boxSizing: "border-box",
                flexGrow: 1,
              }}>
                <svg width={36} viewBox="0 0 36 36" fill="none" style={{
                  position: "relative",
                  width: 36,
                  borderRadius: 100,
                  flexShrink: 0,
                  alignSelf: "stretch",
                  filter: "drop-shadow(0px 0px 3px rgba(0,0,0,0.1))",
                  color: "rgb(255,255,255)",
                }}>
                  <path d={"M 18 36 L 18 33 C 9.716 33 3 26.284 3 18 L 0 18 L -3 18 C -3 29.598 6.402 39 18 39 L 18 36 Z M 36 18 L 33 18 C 33 26.284 26.284 33 18 33 L 18 36 L 18 39 C 29.598 39 39 29.598 39 18 L 36 18 Z M 18 0 L 18 3 C 26.284 3 33 9.716 33 18 L 36 18 L 39 18 C 39 6.402 29.598 -3 18 -3 L 18 0 Z M 18 0 L 18 -3 C 6.402 -3 -3 6.402 -3 18 L 0 18 L 3 18 C 3 9.716 9.716 3 18 3 L 18 0 Z"} fill="currentColor" fillRule="nonzero" />
                </svg>
              </div>
              <div style={{
                position: "relative",
                overflow: "hidden",
                borderRadius: 8,
                backgroundColor: "rgb(255,255,255)",
                display: "flex",
                flexDirection: "row",
                gap: 10,
                padding: "9px 14px 9px 14px",
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
                  whiteSpace: "nowrap",
                  lineHeight: "22px",
                  letterSpacing: "-0.400px",
                  color: "var(--labels-primary)",
                  flexShrink: 0,
                }}>100%</span>
              </div>
            </div>
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: 30,
            padding: "26px 0px 26px 0px",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <svg width={82} height={82} viewBox="0 0 82 82" fill="none" style={{
              position: "relative",
              width: 82,
              height: 82,
              borderRadius: 18,
              flexShrink: 0,
              color: "rgb(175,82,222)",
            }}>
              <path d={"M 0 28.8 C 0 18.719 0 13.679 1.962 9.828 C 3.688 6.441 6.441 3.688 9.828 1.962 C 13.679 0 18.719 0 28.8 0 L 53.2 0 C 63.281 0 68.321 0 72.172 1.962 C 75.559 3.688 78.312 6.441 80.038 9.828 C 82 13.679 82 18.719 82 28.8 L 82 53.2 C 82 63.281 82 68.321 80.038 72.172 C 78.312 75.559 75.559 78.312 72.172 80.038 C 68.321 82 63.281 82 53.2 82 L 28.8 82 C 18.719 82 13.679 82 9.828 80.038 C 6.441 78.312 3.688 75.559 1.962 72.172 C 0 68.321 0 63.281 0 53.2 L 0 28.8 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              gap: 22,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexGrow: 1,
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
                <svg width={30} height={30} viewBox="0 0 30 30" fill="none" style={{
                  position: "relative",
                  width: 30,
                  height: 30,
                  borderRadius: 100,
                  flexShrink: 0,
                  color: "rgb(0,0,0)",
                }}>
                  <path d={"M 0 15 C 0 6.716 6.716 0 15 0 L 15 0 C 23.284 0 30 6.716 30 15 L 30 15 C 30 23.284 23.284 30 15 30 L 15 30 C 6.716 30 0 23.284 0 15 L 0 15 Z"} fill="currentColor" fillRule="nonzero" />
                </svg>
                <svg width={30} height={30} viewBox="0 0 30 30" fill="none" style={{
                  position: "relative",
                  width: 30,
                  height: 30,
                  borderRadius: 100,
                  flexShrink: 0,
                  color: "rgb(0,122,255)",
                }}>
                  <path d={"M 0 15 C 0 6.716 6.716 0 15 0 L 15 0 C 23.284 0 30 6.716 30 15 L 30 15 C 30 23.284 23.284 30 15 30 L 15 30 C 6.716 30 0 23.284 0 15 L 0 15 Z"} fill="currentColor" fillRule="nonzero" />
                </svg>
                <svg width={30} height={30} viewBox="0 0 30 30" fill="none" style={{
                  position: "relative",
                  width: 30,
                  height: 30,
                  borderRadius: 100,
                  flexShrink: 0,
                  color: "rgb(52,199,89)",
                }}>
                  <path d={"M 0 15 C 0 6.716 6.716 0 15 0 L 15 0 C 23.284 0 30 6.716 30 15 L 30 15 C 30 23.284 23.284 30 15 30 L 15 30 C 6.716 30 0 23.284 0 15 L 0 15 Z"} fill="currentColor" fillRule="nonzero" />
                </svg>
                <svg width={30} height={30} viewBox="0 0 30 30" fill="none" style={{
                  position: "relative",
                  width: 30,
                  height: 30,
                  borderRadius: 100,
                  flexShrink: 0,
                  color: "rgb(255,204,0)",
                }}>
                  <path d={"M 0 15 C 0 6.716 6.716 0 15 0 L 15 0 C 23.284 0 30 6.716 30 15 L 30 15 C 30 23.284 23.284 30 15 30 L 15 30 C 6.716 30 0 23.284 0 15 L 0 15 Z"} fill="currentColor" fillRule="nonzero" />
                </svg>
                <svg width={30} height={30} viewBox="0 0 30 30" fill="none" style={{
                  position: "relative",
                  width: 30,
                  height: 30,
                  borderRadius: 100,
                  flexShrink: 0,
                  color: "rgb(255,59,48)",
                }}>
                  <path d={"M 0 15 C 0 6.716 6.716 0 15 0 L 15 0 C 23.284 0 30 6.716 30 15 L 30 15 C 30 23.284 23.284 30 15 30 L 15 30 C 6.716 30 0 23.284 0 15 L 0 15 Z"} fill="currentColor" fillRule="nonzero" />
                </svg>
              </div>
              <div style={{
                position: "relative",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "flex-start",
                flexWrap: "nowrap",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>
                <svg width={30} height={30} viewBox="0 0 30 30" fill="none" style={{
                  position: "relative",
                  width: 30,
                  height: 30,
                  borderRadius: 100,
                  flexShrink: 0,
                  color: "rgb(122,198,245)",
                }}>
                  <path d={"M 0 15 C 0 6.716 6.716 0 15 0 L 15 0 C 23.284 0 30 6.716 30 15 L 30 15 C 30 23.284 23.284 30 15 30 L 15 30 C 6.716 30 0 23.284 0 15 L 0 15 Z"} fill="currentColor" fillRule="nonzero" />
                </svg>
                <div style={{
                  position: "relative",
                  width: 30,
                  height: 30,
                  borderRadius: 100,
                  backgroundColor: "rgb(175,82,222)",
                  flexShrink: 0,
                }}>
                  <svg width={22} height={22} viewBox="0 0 22 22" fill="none" style={{
                    position: "absolute",
                    left: 4,
                    top: 4,
                    width: 22,
                    height: 22,
                    borderRadius: 100,
                    color: "rgb(255,255,255)",
                  }}>
                    <path d={"M 11 21 C 5.477 21 1 16.523 1 11 L -1 11 C -1 17.627 4.373 23 11 23 L 11 21 Z M 21 11 C 21 16.523 16.523 21 11 21 L 11 23 C 17.627 23 23 17.627 23 11 L 21 11 Z M 11 1 C 16.523 1 21 5.477 21 11 L 23 11 C 23 4.373 17.627 -1 11 -1 L 11 1 Z M 11 -1 C 4.373 -1 -1 4.373 -1 11 L 1 11 C 1 5.477 5.477 1 11 1 L 11 -1 Z"} fill="currentColor" fillRule="nonzero" />
                  </svg>
                </div>
                <svg width={30} height={30} viewBox="0 0 30 30" fill="none" style={{
                  position: "relative",
                  width: 30,
                  height: 30,
                  borderRadius: 100,
                  flexShrink: 0,
                  color: "rgb(88,86,214)",
                }}>
                  <path d={"M 0 15 C 0 6.716 6.716 0 15 0 L 15 0 C 23.284 0 30 6.716 30 15 L 30 15 C 30 23.284 23.284 30 15 30 L 15 30 C 6.716 30 0 23.284 0 15 L 0 15 Z"} fill="currentColor" fillRule="nonzero" />
                </svg>
                <svg width={30} height={30} viewBox="0 0 30 30" fill="none" style={{
                  position: "relative",
                  width: 30,
                  height: 30,
                  borderRadius: 100,
                  flexShrink: 0,
                  color: "rgb(255,45,85)",
                }}>
                  <path d={"M 0 15 C 0 6.716 6.716 0 15 0 L 15 0 C 23.284 0 30 6.716 30 15 L 30 15 C 30 23.284 23.284 30 15 30 L 15 30 C 6.716 30 0 23.284 0 15 L 0 15 Z"} fill="currentColor" fillRule="nonzero" />
                </svg>
                <div style={{
                  position: "relative",
                  width: 30,
                  height: 30,
                  borderRadius: 100,
                  backgroundColor: "rgba(120,120,120,0.2)",
                  flexShrink: 0,
                }}>
                  <svg width={14.667} height={14.667} viewBox="0 0 14.667 14.667" fill="none" style={{
                    position: "absolute",
                    left: 7.668,
                    top: 7.667,
                    width: 14.667,
                    height: 14.667,
                    color: "var(--labels-primary)",
                  }}>
                    <path d={"M 7.333 0 C 8.026 0 8.596 0.529 8.661 1.205 L 8.667 1.333 L 8.666 5.999 L 13.333 6 C 14.07 6 14.667 6.597 14.667 7.333 C 14.667 8.026 14.138 8.596 13.462 8.661 L 13.333 8.667 L 8.666 8.666 L 8.667 13.333 C 8.667 14.07 8.07 14.667 7.333 14.667 C 6.64 14.667 6.071 14.138 6.006 13.462 L 6 13.333 L 5.999 8.666 L 1.333 8.667 C 0.597 8.667 0 8.07 0 7.333 C 0 6.64 0.529 6.071 1.205 6.006 L 1.333 6 L 5.999 5.999 L 6 1.333 C 6 0.597 6.597 0 7.333 0 Z"} fill="currentColor" fillRule="nonzero" />
                  </svg>
                </div>
              </div>
              <PageControl3
                style={{
                  position: "relative",
                  height: 10,
                  flexShrink: 0,
                  alignSelf: "stretch",
                  width: "auto",
                }}
                dots={"2"}
                selection={"1"}
              />
            </div>
          </div>
        </div>
      </div>
      <div style={{
        position: "absolute",
        left: 100,
        top: 100,
        width: 402,
        height: 706,
        display: "flex",
        flexDirection: "column",
        padding: "0px 6px 0px 6px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 402,
          height: 710,
          display: "flex",
          flexDirection: "column",
          padding: "0px 6px 6px 6px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <div style={{
            position: "absolute",
            left: 6,
            top: 0,
            width: 390,
            height: 704,
          }}>
            <svg width={390} height={704} viewBox="0 0 390 704" fill="none" style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 390,
              height: 704,
              borderRadius: 34,
              filter: "drop-shadow(0px 8px 40px rgba(0,0,0,0.12))",
            }}>
              <path d={"M 0 54.4 C 0 35.358 0 25.837 3.706 18.564 C 6.965 12.167 12.167 6.965 18.564 3.706 C 25.837 0 35.358 0 54.4 0 L 335.6 0 C 354.642 0 364.163 0 371.436 3.706 C 377.833 6.965 383.035 12.167 386.294 18.564 C 390 25.837 390 35.358 390 54.4 L 390 611.2 C 390 643.683 390 659.925 383.678 672.331 C 378.118 683.245 369.245 692.118 358.331 697.678 C 345.925 704 329.683 704 297.2 704 L 92.8 704 C 60.317 704 44.075 704 31.669 697.678 C 20.755 692.118 11.882 683.245 6.322 672.331 C 0 659.925 0 643.683 0 611.2 L 0 54.4 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            padding: "0px 0px 10px 0px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              height: 16,
              display: "flex",
              flexDirection: "column",
              padding: "5px 0px 5px 0px",
              alignItems: "flex-start",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexShrink: 0,
            }}>
              <Grabber2
                style={{
                  position: "relative",
                  width: 36,
                  height: 5,
                  flexShrink: 0,
                }}
                mode={"light"}
              />
            </div>
          </div>
        </div>
        <div style={{
          position: "relative",
          borderRadius: 10,
          display: "flex",
          flexDirection: "column",
          padding: "0px 16px 20px 16px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <ToolbarIPhone style={{
              position: "relative",
              height: 70,
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }} />
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            padding: "0px 0px 24px 0px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <SegmentedControl
              style={{
                position: "relative",
                height: 36,
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }}
              label1={"Grid"}
              label2={"Spectrum"}
              label3={"Sliders"}
              segments={"3"}
              selected={"1"}
            />
          </div>
          <div style={{
            position: "relative",
            overflow: "hidden",
            borderRadius: 18,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
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
                height: 30,
                backgroundColor: "rgb(254,255,254)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(235,235,235)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(214,214,214)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(194,194,194)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(173,173,173)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(153,153,153)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(133,133,133)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(112,112,112)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(92,92,92)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(71,71,71)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(51,51,51)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(0,0,0)",
                flexGrow: 1,
              }} />
            </div>
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
                height: 30,
                backgroundColor: "rgb(0,55,74)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(1,29,87)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(17,5,59)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(46,6,61)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(60,7,27)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(92,7,1)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(90,28,0)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(88,51,0)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(86,61,0)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(102,97,0)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(79,85,4)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(38,62,15)",
                flexGrow: 1,
              }} />
            </div>
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
                height: 30,
                backgroundColor: "rgb(0,77,101)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(1,47,123)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(26,10,82)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(69,13,89)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(85,16,41)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(131,17,0)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(123,41,0)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(122,74,0)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(120,88,0)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(141,134,2)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(111,118,10)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(56,87,26)",
                flexGrow: 1,
              }} />
            </div>
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
                height: 30,
                backgroundColor: "rgb(1,110,143)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(0,66,169)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(44,9,119)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(97,24,124)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(121,26,61)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(181,26,0)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(173,62,0)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(169,104,0)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(166,123,1)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(196,188,0)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(155,165,14)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(78,122,39)",
                flexGrow: 1,
              }} />
            </div>
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
                height: 30,
                backgroundColor: "rgb(0,140,180)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(0,86,214)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(55,26,148)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(122,33,158)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(153,36,79)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(226,36,0)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(218,81,0)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(211,131,1)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(209,157,1)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(245,236,0)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(195,209,23)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(102,157,52)",
                flexGrow: 1,
              }} />
            </div>
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
                height: 30,
                backgroundColor: "rgb(0,161,216)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(0,97,253)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(77,34,178)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(152,42,188)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(185,45,93)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(255,64,21)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(255,106,0)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(255,171,1)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(252,199,0)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(254,251,65)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(217,236,55)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(118,187,64)",
                flexGrow: 1,
              }} />
            </div>
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
                height: 30,
                backgroundColor: "rgb(1,199,252)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(58,135,253)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(94,48,235)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(190,56,243)",
                boxShadow: "inset 0 0 0 3px rgb(255,255,255)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(230,59,122)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(254,98,80)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(254,134,72)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(254,180,63)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(254,203,62)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(255,247,107)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(228,239,101)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(150,211,95)",
                flexGrow: 1,
              }} />
            </div>
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
                height: 30,
                backgroundColor: "rgb(82,214,252)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(116,167,255)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(134,79,253)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(211,87,254)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(238,113,158)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(255,140,130)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(254,165,125)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(254,199,119)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(254,217,119)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(255,249,148)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(234,242,143)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(177,221,139)",
                flexGrow: 1,
              }} />
            </div>
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
                height: 30,
                backgroundColor: "rgb(147,227,252)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(167,198,255)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(177,140,254)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(226,146,254)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(244,164,192)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(255,181,175)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(255,197,171)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(254,217,168)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(253,228,168)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(255,251,185)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(241,247,183)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(205,232,181)",
                flexGrow: 1,
              }} />
            </div>
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
                height: 30,
                backgroundColor: "rgb(203,240,255)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(210,226,254)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(216,201,254)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(239,202,254)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(249,211,224)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(255,218,216)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(255,226,214)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(254,236,212)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(254,241,213)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(253,251,221)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(246,250,219)",
                flexGrow: 1,
              }} />
              <div style={{
                position: "relative",
                height: 30,
                backgroundColor: "rgb(222,238,212)",
                flexGrow: 1,
              }} />
            </div>
          </div>
          <div style={{
            position: "relative",
            borderTop: "1px solid var(--separators-opaque)",
            borderRight: "1px solid var(--separators-opaque)",
            borderBottom: "1px solid var(--separators-opaque)",
            borderLeft: "1px solid var(--separators-opaque)",
            display: "flex",
            flexDirection: "column",
            padding: "26px 0px 3px 0px",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <span style={{
              position: "relative",
              width: 67.197,
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 590,
              fontSize: 15,
              lineHeight: "20px",
              color: "var(--labels-primary)",
              flexShrink: 0,
            }}>Opacity</span>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              gap: 11,
              padding: "3px 0px 22px 0px",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <div className="fig-asset-8e58607ea75135ba-945472dc" style={{
                position: "relative",
                height: 40,
                overflow: "hidden",
                borderRadius: 100,
                display: "flex",
                flexDirection: "row",
                gap: 10,
                padding: "2px 2px 2px 2px",
                justifyContent: "flex-end",
                alignItems: "center",
                flexWrap: "nowrap",
                boxSizing: "border-box",
                flexGrow: 1,
              }}>
                <svg width={36} viewBox="0 0 36 36" fill="none" style={{
                  position: "relative",
                  width: 36,
                  borderRadius: 100,
                  flexShrink: 0,
                  alignSelf: "stretch",
                  filter: "drop-shadow(0px 0px 3px rgba(0,0,0,0.1))",
                  color: "rgb(255,255,255)",
                }}>
                  <path d={"M 18 36 L 18 33 C 9.716 33 3 26.284 3 18 L 0 18 L -3 18 C -3 29.598 6.402 39 18 39 L 18 36 Z M 36 18 L 33 18 C 33 26.284 26.284 33 18 33 L 18 36 L 18 39 C 29.598 39 39 29.598 39 18 L 36 18 Z M 18 0 L 18 3 C 26.284 3 33 9.716 33 18 L 36 18 L 39 18 C 39 6.402 29.598 -3 18 -3 L 18 0 Z M 18 0 L 18 -3 C 6.402 -3 -3 6.402 -3 18 L 0 18 L 3 18 C 3 9.716 9.716 3 18 3 L 18 0 Z"} fill="currentColor" fillRule="nonzero" />
                </svg>
              </div>
              <div style={{
                position: "relative",
                overflow: "hidden",
                borderRadius: 8,
                backgroundColor: "rgb(255,255,255)",
                display: "flex",
                flexDirection: "row",
                gap: 10,
                padding: "9px 14px 9px 14px",
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
                  whiteSpace: "nowrap",
                  lineHeight: "22px",
                  letterSpacing: "-0.400px",
                  color: "var(--labels-primary)",
                  flexShrink: 0,
                }}>100%</span>
              </div>
            </div>
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: 30,
            padding: "26px 0px 26px 0px",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <svg width={82} height={82} viewBox="0 0 82 82" fill="none" style={{
              position: "relative",
              width: 82,
              height: 82,
              borderRadius: 18,
              flexShrink: 0,
              color: "rgb(175,82,222)",
            }}>
              <path d={"M 0 28.8 C 0 18.719 0 13.679 1.962 9.828 C 3.688 6.441 6.441 3.688 9.828 1.962 C 13.679 0 18.719 0 28.8 0 L 53.2 0 C 63.281 0 68.321 0 72.172 1.962 C 75.559 3.688 78.312 6.441 80.038 9.828 C 82 13.679 82 18.719 82 28.8 L 82 53.2 C 82 63.281 82 68.321 80.038 72.172 C 78.312 75.559 75.559 78.312 72.172 80.038 C 68.321 82 63.281 82 53.2 82 L 28.8 82 C 18.719 82 13.679 82 9.828 80.038 C 6.441 78.312 3.688 75.559 1.962 72.172 C 0 68.321 0 63.281 0 53.2 L 0 28.8 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              gap: 22,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexGrow: 1,
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
                <svg width={30} height={30} viewBox="0 0 30 30" fill="none" style={{
                  position: "relative",
                  width: 30,
                  height: 30,
                  borderRadius: 100,
                  flexShrink: 0,
                  color: "rgb(0,0,0)",
                }}>
                  <path d={"M 0 15 C 0 6.716 6.716 0 15 0 L 15 0 C 23.284 0 30 6.716 30 15 L 30 15 C 30 23.284 23.284 30 15 30 L 15 30 C 6.716 30 0 23.284 0 15 L 0 15 Z"} fill="currentColor" fillRule="nonzero" />
                </svg>
                <svg width={30} height={30} viewBox="0 0 30 30" fill="none" style={{
                  position: "relative",
                  width: 30,
                  height: 30,
                  borderRadius: 100,
                  flexShrink: 0,
                  color: "rgb(0,122,255)",
                }}>
                  <path d={"M 0 15 C 0 6.716 6.716 0 15 0 L 15 0 C 23.284 0 30 6.716 30 15 L 30 15 C 30 23.284 23.284 30 15 30 L 15 30 C 6.716 30 0 23.284 0 15 L 0 15 Z"} fill="currentColor" fillRule="nonzero" />
                </svg>
                <svg width={30} height={30} viewBox="0 0 30 30" fill="none" style={{
                  position: "relative",
                  width: 30,
                  height: 30,
                  borderRadius: 100,
                  flexShrink: 0,
                  color: "rgb(52,199,89)",
                }}>
                  <path d={"M 0 15 C 0 6.716 6.716 0 15 0 L 15 0 C 23.284 0 30 6.716 30 15 L 30 15 C 30 23.284 23.284 30 15 30 L 15 30 C 6.716 30 0 23.284 0 15 L 0 15 Z"} fill="currentColor" fillRule="nonzero" />
                </svg>
                <svg width={30} height={30} viewBox="0 0 30 30" fill="none" style={{
                  position: "relative",
                  width: 30,
                  height: 30,
                  borderRadius: 100,
                  flexShrink: 0,
                  color: "rgb(255,204,0)",
                }}>
                  <path d={"M 0 15 C 0 6.716 6.716 0 15 0 L 15 0 C 23.284 0 30 6.716 30 15 L 30 15 C 30 23.284 23.284 30 15 30 L 15 30 C 6.716 30 0 23.284 0 15 L 0 15 Z"} fill="currentColor" fillRule="nonzero" />
                </svg>
                <svg width={30} height={30} viewBox="0 0 30 30" fill="none" style={{
                  position: "relative",
                  width: 30,
                  height: 30,
                  borderRadius: 100,
                  flexShrink: 0,
                  color: "rgb(255,59,48)",
                }}>
                  <path d={"M 0 15 C 0 6.716 6.716 0 15 0 L 15 0 C 23.284 0 30 6.716 30 15 L 30 15 C 30 23.284 23.284 30 15 30 L 15 30 C 6.716 30 0 23.284 0 15 L 0 15 Z"} fill="currentColor" fillRule="nonzero" />
                </svg>
              </div>
              <div style={{
                position: "relative",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "flex-start",
                flexWrap: "nowrap",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>
                <svg width={30} height={30} viewBox="0 0 30 30" fill="none" style={{
                  position: "relative",
                  width: 30,
                  height: 30,
                  borderRadius: 100,
                  flexShrink: 0,
                  color: "rgb(122,198,245)",
                }}>
                  <path d={"M 0 15 C 0 6.716 6.716 0 15 0 L 15 0 C 23.284 0 30 6.716 30 15 L 30 15 C 30 23.284 23.284 30 15 30 L 15 30 C 6.716 30 0 23.284 0 15 L 0 15 Z"} fill="currentColor" fillRule="nonzero" />
                </svg>
                <div style={{
                  position: "relative",
                  width: 30,
                  height: 30,
                  borderRadius: 100,
                  backgroundColor: "rgb(175,82,222)",
                  flexShrink: 0,
                }}>
                  <svg width={22} height={22} viewBox="0 0 22 22" fill="none" style={{
                    position: "absolute",
                    left: 4,
                    top: 4,
                    width: 22,
                    height: 22,
                    borderRadius: 100,
                    color: "rgb(255,255,255)",
                  }}>
                    <path d={"M 11 21 C 5.477 21 1 16.523 1 11 L -1 11 C -1 17.627 4.373 23 11 23 L 11 21 Z M 21 11 C 21 16.523 16.523 21 11 21 L 11 23 C 17.627 23 23 17.627 23 11 L 21 11 Z M 11 1 C 16.523 1 21 5.477 21 11 L 23 11 C 23 4.373 17.627 -1 11 -1 L 11 1 Z M 11 -1 C 4.373 -1 -1 4.373 -1 11 L 1 11 C 1 5.477 5.477 1 11 1 L 11 -1 Z"} fill="currentColor" fillRule="nonzero" />
                  </svg>
                </div>
                <svg width={30} height={30} viewBox="0 0 30 30" fill="none" style={{
                  position: "relative",
                  width: 30,
                  height: 30,
                  borderRadius: 100,
                  flexShrink: 0,
                  color: "rgb(88,86,214)",
                }}>
                  <path d={"M 0 15 C 0 6.716 6.716 0 15 0 L 15 0 C 23.284 0 30 6.716 30 15 L 30 15 C 30 23.284 23.284 30 15 30 L 15 30 C 6.716 30 0 23.284 0 15 L 0 15 Z"} fill="currentColor" fillRule="nonzero" />
                </svg>
                <svg width={30} height={30} viewBox="0 0 30 30" fill="none" style={{
                  position: "relative",
                  width: 30,
                  height: 30,
                  borderRadius: 100,
                  flexShrink: 0,
                  color: "rgb(255,45,85)",
                }}>
                  <path d={"M 0 15 C 0 6.716 6.716 0 15 0 L 15 0 C 23.284 0 30 6.716 30 15 L 30 15 C 30 23.284 23.284 30 15 30 L 15 30 C 6.716 30 0 23.284 0 15 L 0 15 Z"} fill="currentColor" fillRule="nonzero" />
                </svg>
                <div style={{
                  position: "relative",
                  width: 30,
                  height: 30,
                  borderRadius: 100,
                  backgroundColor: "rgba(120,120,120,0.2)",
                  flexShrink: 0,
                }}>
                  <svg width={14.667} height={14.667} viewBox="0 0 14.667 14.667" fill="none" style={{
                    position: "absolute",
                    left: 7.668,
                    top: 7.667,
                    width: 14.667,
                    height: 14.667,
                    color: "var(--labels-primary)",
                  }}>
                    <path d={"M 7.333 0 C 8.026 0 8.596 0.529 8.661 1.205 L 8.667 1.333 L 8.666 5.999 L 13.333 6 C 14.07 6 14.667 6.597 14.667 7.333 C 14.667 8.026 14.138 8.596 13.462 8.661 L 13.333 8.667 L 8.666 8.666 L 8.667 13.333 C 8.667 14.07 8.07 14.667 7.333 14.667 C 6.64 14.667 6.071 14.138 6.006 13.462 L 6 13.333 L 5.999 8.666 L 1.333 8.667 C 0.597 8.667 0 8.07 0 7.333 C 0 6.64 0.529 6.071 1.205 6.006 L 1.333 6 L 5.999 5.999 L 6 1.333 C 6 0.597 6.597 0 7.333 0 Z"} fill="currentColor" fillRule="nonzero" />
                  </svg>
                </div>
              </div>
              <PageControl3
                style={{
                  position: "relative",
                  height: 10,
                  flexShrink: 0,
                  alignSelf: "stretch",
                  width: "auto",
                }}
                dots={"2"}
                selection={"1"}
              />
            </div>
          </div>
        </div>
      </div>
      <div style={{
        position: "absolute",
        left: 220,
        top: 1080,
        width: 100,
        height: 120,
        overflow: "hidden",
        backgroundColor: "var(--subcomponent-fill)",
      }}>
        <div style={{
          position: "absolute",
          left: 20,
          top: 70,
          display: "flex",
          flexDirection: "row",
          gap: 10,
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 590,
            fontSize: 17,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "22px",
            letterSpacing: "-0.430px",
            color: "rgb(245,245,245)",
            flexShrink: 0,
          }}>Colors</span>
        </div>
        <div style={{
          position: "absolute",
          left: 20,
          top: 20,
          display: "flex",
          flexDirection: "row",
          gap: 10,
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 590,
            fontSize: 17,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "22px",
            letterSpacing: "-0.430px",
            color: "var(--labels-vibrant-primary)",
            flexShrink: 0,
          }}>Colors</span>
        </div>
      </div>
    </div>
  );
}
export default Screen3;
