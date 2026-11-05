import { LiquidGlassRegularSmall } from '../buttons/LiquidGlassRegularSmall.jsx';
import { TabBarButtonIPhoneSearch } from './TabBarButtonIPhoneSearch.jsx';
import { TabBarButtonIPhoneText } from './TabBarButtonIPhoneText.jsx';

// figma node: 3:70967 Tab Bar - iPhone (16 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "separateSearch=" + __venc(p.separateSearch) + '|' + "minimized=" + __venc(p.minimized) + '|' + "tabs=" + __venc(p.tabs);

export function TabBarIPhone(_p = {}) {
  const props = { ..._p, separateSearch: _p.separateSearch ?? false, minimized: _p.minimized ?? false, tabs: _p.tabs ?? "2" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 402,
      display: "flex",
      flexDirection: "row",
      padding: "30px 25px 25px 25px",
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
        gap: -5.5,
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "absolute",
            left: -4,
            top: -4,
            width: 48,
            height: 48,
          }}>{props.icon1 ?? <LiquidGlassRegularSmall mode={"light"} state={"default"} />}</div>
        <div style={{
            position: "relative",
            width: 40,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon2 ?? <TabBarButtonIPhoneText selected={false} mode={"light"} />}</div>
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 402,
      display: "flex",
      flexDirection: "row",
      gap: 16,
      padding: "30px 25px 25px 25px",
      justifyContent: "flex-end",
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
        gap: -7.333000183105469,
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "absolute",
            left: -4,
            top: -4,
            width: 48,
            height: 48,
          }}>{props.icon1 ?? <LiquidGlassRegularSmall mode={"light"} state={"default"} />}</div>
        <div style={{
            position: "relative",
            width: 40,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon2 ?? <TabBarButtonIPhoneText selected={false} mode={"light"} />}</div>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: -10,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "absolute",
            left: -4,
            top: -4,
            width: 48,
            height: 48,
          }}>{props.icon3 ?? <LiquidGlassRegularSmall mode={"light"} state={"default"} />}</div>
        <div style={{
            position: "relative",
            width: 40,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon4 ?? <TabBarButtonIPhoneSearch selected={false} mode={"light"} />}</div>
      </div>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 402,
      display: "flex",
      flexDirection: "row",
      gap: 16,
      padding: "30px 25px 25px 25px",
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
        gap: -10,
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "absolute",
            left: -4,
            top: -4,
            width: 48,
            height: 48,
          }}>{props.icon1 ?? <LiquidGlassRegularSmall mode={"light"} state={"default"} />}</div>
        <div style={{
            position: "relative",
            width: 40,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon2 ?? <TabBarButtonIPhoneText selected={false} mode={"light"} />}</div>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: -10,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "absolute",
            left: -4,
            top: -4,
            width: 48,
            height: 48,
          }}>{props.icon3 ?? <LiquidGlassRegularSmall mode={"light"} state={"default"} />}</div>
        <div style={{
            position: "relative",
            width: 40,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon4 ?? <TabBarButtonIPhoneSearch selected={false} mode={"light"} />}</div>
      </div>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 402,
      display: "flex",
      flexDirection: "row",
      padding: "30px 25px 25px 25px",
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
        gap: -10,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "absolute",
            left: -4,
            top: -4,
            width: 48,
            height: 48,
          }}>{props.icon1 ?? <LiquidGlassRegularSmall mode={"light"} state={"default"} />}</div>
        <div style={{
            position: "relative",
            width: 40,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon2 ?? <TabBarButtonIPhoneText selected={false} mode={"light"} />}</div>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: -10,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "absolute",
            left: -4,
            top: -4,
            width: 48,
            height: 48,
          }}>{props.icon3 ?? <LiquidGlassRegularSmall mode={"light"} state={"default"} />}</div>
        <div style={{
            position: "relative",
            width: 40,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon4 ?? <TabBarButtonIPhoneSearch selected={false} mode={"light"} />}</div>
      </div>
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: 402,
      display: "flex",
      flexDirection: "row",
      padding: "30px 25px 25px 25px",
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
        gap: -7.333000183105469,
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "absolute",
            left: -4,
            top: -4,
            width: 48,
            height: 48,
          }}>{props.icon1 ?? <LiquidGlassRegularSmall mode={"light"} state={"default"} />}</div>
        <div style={{
            position: "relative",
            width: 40,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon2 ?? <TabBarButtonIPhoneText selected={false} mode={"light"} />}</div>
      </div>
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: 402,
      display: "flex",
      flexDirection: "row",
      padding: "30px 25px 25px 25px",
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
        gap: -10,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "absolute",
            left: -4,
            top: -4,
            width: 48,
            height: 48,
          }}>{props.icon1 ?? <LiquidGlassRegularSmall mode={"light"} state={"default"} />}</div>
        <div style={{
            position: "relative",
            width: 40,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon2 ?? <TabBarButtonIPhoneText selected={false} mode={"light"} />}</div>
      </div>
    </div>
  );
  const __body6 = () => (
    <div className={props.className} style={{
      width: 402,
      display: "flex",
      flexDirection: "row",
      gap: 16,
      padding: "16px 25px 25px 25px",
      justifyContent: "flex-end",
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
        gap: -8,
        padding: "0px 2px 0px 2px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
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
        <TabBarButtonIPhoneText
          style={{
            position: "relative",
            flexGrow: 1,
            alignSelf: "stretch",
            width: "auto",
            height: "auto",
          }}
          symbol={"􀟉"}
          label={"Tab 1"}
          selected={true}
          mode={"light"}
        />
        <TabBarButtonIPhoneText
          style={{
            position: "relative",
            flexGrow: 1,
            alignSelf: "stretch",
            width: "auto",
            height: "auto",
          }}
          symbol={"􀀁"}
          label={"Tab 2"}
          selected={false}
          mode={"light"}
        />
        <TabBarButtonIPhoneText
          style={{
            position: "relative",
            flexGrow: 1,
            alignSelf: "stretch",
            width: "auto",
            height: "auto",
          }}
          symbol={"􀛤"}
          label={"Tab 3"}
          selected={false}
          mode={"light"}
        />
        <TabBarButtonIPhoneText
          style={{
            position: "relative",
            flexGrow: 1,
            alignSelf: "stretch",
            width: "auto",
            height: "auto",
          }}
          symbol={"􀟇"}
          label={"Tab 4"}
          selected={false}
          mode={"light"}
        />
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: -10,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "absolute",
            left: -4,
            top: -4,
            width: 62,
            height: 62,
          }}>{props.icon1 ?? <LiquidGlassRegularSmall mode={"light"} state={"default"} style={{ transform: "scale(1.292, 1.292)", transformOrigin: "0 0" }} />}</div>
        <div style={{
            position: "relative",
            width: 54,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon2 ?? <TabBarButtonIPhoneSearch selected={false} mode={"light"} />}</div>
      </div>
    </div>
  );
  const __body7 = () => (
    <div className={props.className} style={{
      width: 402,
      display: "flex",
      flexDirection: "row",
      gap: 16,
      padding: "16px 25px 25px 25px",
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
        gap: -8,
        padding: "0px 2px 0px 2px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
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
        <TabBarButtonIPhoneText
          style={{
            position: "relative",
            flexGrow: 1,
            alignSelf: "stretch",
            width: "auto",
            height: "auto",
          }}
          symbol={"􀟉"}
          label={"Tab 1"}
          selected={true}
          mode={"light"}
        />
        <TabBarButtonIPhoneText
          style={{
            position: "relative",
            flexGrow: 1,
            alignSelf: "stretch",
            width: "auto",
            height: "auto",
          }}
          symbol={"􀀁"}
          label={"Tab 2"}
          selected={false}
          mode={"light"}
        />
        <TabBarButtonIPhoneText
          style={{
            position: "relative",
            flexGrow: 1,
            alignSelf: "stretch",
            width: "auto",
            height: "auto",
          }}
          symbol={"􀛤"}
          label={"Tab 3"}
          selected={false}
          mode={"light"}
        />
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: -10,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "absolute",
            left: -4,
            top: -4,
            width: 62,
            height: 62,
          }}>{props.icon1 ?? <LiquidGlassRegularSmall mode={"light"} state={"default"} style={{ transform: "scale(1.292, 1.292)", transformOrigin: "0 0" }} />}</div>
        <div style={{
            position: "relative",
            width: 54,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon2 ?? <TabBarButtonIPhoneSearch selected={false} mode={"light"} />}</div>
      </div>
    </div>
  );
  const __body8 = () => (
    <div className={props.className} style={{
      width: 402,
      display: "flex",
      flexDirection: "row",
      padding: "16px 25px 25px 25px",
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
        gap: -8,
        padding: "0px 2px 0px 2px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "absolute",
            left: -4,
            top: -4,
            width: 208,
            height: 62,
          }}>
          <LiquidGlassRegularSmall
            style={{ transform: "scale(4.333, 1.292)", transformOrigin: "0 0" }}
            mode={"light"}
            state={"default"}
          />
        </div>
        <TabBarButtonIPhoneText
          style={{
            position: "relative",
            width: 102,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}
          symbol={"􀟉"}
          label={"Tab 1"}
          selected={true}
          mode={"light"}
        />
        <TabBarButtonIPhoneText
          style={{
            position: "relative",
            width: 102,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}
          symbol={"􀀁"}
          label={"Tab 2"}
          selected={false}
          mode={"light"}
        />
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: -10,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "absolute",
            left: -4,
            top: -4,
            width: 62,
            height: 62,
          }}>{props.icon1 ?? <LiquidGlassRegularSmall mode={"light"} state={"default"} style={{ transform: "scale(1.292, 1.292)", transformOrigin: "0 0" }} />}</div>
        <div style={{
            position: "relative",
            width: 54,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon2 ?? <TabBarButtonIPhoneSearch selected={false} mode={"light"} />}</div>
      </div>
    </div>
  );
  const __body9 = () => (
    <div className={props.className} style={{
      width: 402,
      display: "flex",
      flexDirection: "row",
      padding: "16px 25px 25px 25px",
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
        gap: -8,
        padding: "0px 2px 0px 2px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "absolute",
            left: -4,
            top: -4,
            width: 122,
            height: 62,
          }}>
          <LiquidGlassRegularSmall
            style={{ transform: "scale(2.542, 1.292)", transformOrigin: "0 0" }}
            mode={"light"}
            state={"default"}
          />
        </div>
        <TabBarButtonIPhoneText
          style={{
            position: "relative",
            width: 110,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}
          symbol={"􀟉"}
          label={"Tab 1"}
          selected={true}
          mode={"light"}
        />
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: -10,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "absolute",
            left: -4,
            top: -4,
            width: 62,
            height: 62,
          }}>{props.icon1 ?? <LiquidGlassRegularSmall mode={"light"} state={"default"} style={{ transform: "scale(1.292, 1.292)", transformOrigin: "0 0" }} />}</div>
        <div style={{
            position: "relative",
            width: 54,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon2 ?? <TabBarButtonIPhoneSearch selected={false} mode={"light"} />}</div>
      </div>
    </div>
  );
  const __body10 = () => (
    <div className={props.className} style={{
      width: 402,
      display: "flex",
      flexDirection: "row",
      padding: "16px 25px 25px 25px",
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
        gap: -8,
        padding: "0px 2px 0px 2px",
        justifyContent: "center",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
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
        <TabBarButtonIPhoneText
          style={{
            position: "relative",
            flexGrow: 1,
            alignSelf: "stretch",
            width: "auto",
            height: "auto",
          }}
          symbol={"􀟉"}
          label={"Tab 1"}
          selected={true}
          mode={"light"}
        />
        <TabBarButtonIPhoneText
          style={{
            position: "relative",
            flexGrow: 1,
            alignSelf: "stretch",
            width: "auto",
            height: "auto",
          }}
          symbol={"􀀁"}
          label={"Tab 2"}
          selected={false}
          mode={"light"}
        />
        <TabBarButtonIPhoneText
          style={{
            position: "relative",
            flexGrow: 1,
            alignSelf: "stretch",
            width: "auto",
            height: "auto",
          }}
          symbol={"􀛤"}
          label={"Tab 3"}
          selected={false}
          mode={"light"}
        />
        <TabBarButtonIPhoneText
          style={{
            position: "relative",
            flexGrow: 1,
            alignSelf: "stretch",
            width: "auto",
            height: "auto",
          }}
          symbol={"􀟇"}
          label={"Tab 4"}
          selected={false}
          mode={"light"}
        />
      </div>
    </div>
  );
  const __body11 = () => (
    <div className={props.className} style={{
      width: 402,
      display: "flex",
      flexDirection: "row",
      padding: "16px 25px 25px 25px",
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
        gap: -8,
        padding: "0px 2px 0px 2px",
        justifyContent: "center",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "absolute",
            left: -4,
            top: -4,
            width: 302,
            height: 62,
          }}>
          <LiquidGlassRegularSmall
            style={{ transform: "scale(6.292, 1.292)", transformOrigin: "0 0" }}
            mode={"light"}
            state={"default"}
          />
        </div>
        <TabBarButtonIPhoneText
          style={{
            position: "relative",
            width: 102,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}
          symbol={"􀟉"}
          label={"Tab 1"}
          selected={true}
          mode={"light"}
        />
        <TabBarButtonIPhoneText
          style={{
            position: "relative",
            width: 102,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}
          symbol={"􀀁"}
          label={"Tab 2"}
          selected={false}
          mode={"light"}
        />
        <TabBarButtonIPhoneText
          style={{
            position: "relative",
            width: 102,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}
          symbol={"􀛤"}
          selected={false}
          mode={"light"}
        />
      </div>
    </div>
  );
  const __body12 = () => (
    <div className={props.className} style={{
      width: 402,
      display: "flex",
      flexDirection: "row",
      padding: "16px 25px 25px 25px",
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
        gap: -8,
        padding: "0px 2px 0px 2px",
        justifyContent: "center",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "absolute",
            left: -4,
            top: -4,
            width: 208,
            height: 62,
          }}>
          <LiquidGlassRegularSmall
            style={{ transform: "scale(4.333, 1.292)", transformOrigin: "0 0" }}
            mode={"light"}
            state={"default"}
          />
        </div>
        <TabBarButtonIPhoneText
          style={{
            position: "relative",
            width: 102,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}
          symbol={"􀟉"}
          label={"Tab 1"}
          selected={true}
          mode={"light"}
        />
        <TabBarButtonIPhoneText
          style={{
            position: "relative",
            width: 102,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}
          symbol={"􀀁"}
          label={"Tab 2"}
          selected={false}
          mode={"light"}
        />
      </div>
    </div>
  );
  const __body13 = () => (
    <div className={props.className} style={{
      width: 402,
      display: "flex",
      flexDirection: "row",
      padding: "16px 25px 25px 25px",
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
        gap: -8,
        padding: "0px 2px 0px 2px",
        justifyContent: "center",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
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
        <TabBarButtonIPhoneText
          style={{
            position: "relative",
            flexGrow: 1,
            alignSelf: "stretch",
            width: "auto",
            height: "auto",
          }}
          symbol={"􀟉"}
          label={"Tab 1"}
          selected={true}
          mode={"light"}
        />
        <TabBarButtonIPhoneText
          style={{
            position: "relative",
            flexGrow: 1,
            alignSelf: "stretch",
            width: "auto",
            height: "auto",
          }}
          symbol={"􀀁"}
          label={"Tab 2"}
          selected={false}
          mode={"light"}
        />
        <TabBarButtonIPhoneText
          style={{
            position: "relative",
            flexGrow: 1,
            alignSelf: "stretch",
            width: "auto",
            height: "auto",
          }}
          symbol={"􀛤"}
          label={"Tab 3"}
          selected={false}
          mode={"light"}
        />
        <TabBarButtonIPhoneText
          style={{
            position: "relative",
            flexGrow: 1,
            alignSelf: "stretch",
            width: "auto",
            height: "auto",
          }}
          symbol={"􀟇"}
          label={"Tab 4"}
          selected={false}
          mode={"light"}
        />
        <TabBarButtonIPhoneText
          style={{
            position: "relative",
            flexGrow: 1,
            alignSelf: "stretch",
            width: "auto",
            height: "auto",
          }}
          symbol={"􀂓"}
          label={"Label"}
          selected={false}
          mode={"light"}
        />
      </div>
    </div>
  );
  const __impls = {
    // figma: Separate Search=False, Minimized=True, Tabs=5
    "separateSearch=false|minimized=true|tabs=5": __body0,
    // figma: Separate Search=True, Minimized=True, Tabs=5
    "separateSearch=true|minimized=true|tabs=5": __body1,
    // figma: Separate Search=True, Minimized=True, Tabs=4
    "separateSearch=true|minimized=true|tabs=4": __body2,
    // figma: Separate Search=True, Minimized=True, Tabs=3
    "separateSearch=true|minimized=true|tabs=3": __body3,
    // figma: Separate Search=True, Minimized=True, Tabs=2
    "separateSearch=true|minimized=true|tabs=2": __body3,
    // figma: Separate Search=False, Minimized=True, Tabs=4
    "separateSearch=false|minimized=true|tabs=4": __body4,
    // figma: Separate Search=False, Minimized=True, Tabs=3
    "separateSearch=false|minimized=true|tabs=3": __body5,
    // figma: Separate Search=False, Minimized=True, Tabs=2
    "separateSearch=false|minimized=true|tabs=2": __body5,
    // figma: Separate Search=True, Minimized=False, Tabs=5
    "separateSearch=true|minimized=false|tabs=5": __body6,
    // figma: Separate Search=True, Minimized=False, Tabs=4
    "separateSearch=true|minimized=false|tabs=4": __body7,
    // figma: Separate Search=True, Minimized=False, Tabs=3
    "separateSearch=true|minimized=false|tabs=3": __body8,
    // figma: Separate Search=True, Minimized=False, Tabs=2
    "separateSearch=true|minimized=false|tabs=2": __body9,
    // figma: Separate Search=False, Minimized=False, Tabs=4
    "separateSearch=false|minimized=false|tabs=4": __body10,
    // figma: Separate Search=False, Minimized=False, Tabs=3
    "separateSearch=false|minimized=false|tabs=3": __body11,
    // figma: Separate Search=False, Minimized=False, Tabs=2
    "separateSearch=false|minimized=false|tabs=2": __body12,
    // figma: Separate Search=False, Minimized=False, Tabs=5
    "separateSearch=false|minimized=false|tabs=5": __body13,
  };
  return (__impls[__vkey(props)] ?? __body12)();
}
export default TabBarIPhone;
