import { LiquidGlassRegularSmall } from '../buttons/LiquidGlassRegularSmall.jsx';
import { PageDots } from '../tab-bars/PageDots.jsx';

// figma node: 5704:38375 _Page control (35 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "dots=" + __venc(p.dots) + '|' + "selection=" + __venc(p.selection);

export function PageControl5(_p = {}) {
  const props = { ..._p, dots: _p.dots ?? "2", selection: _p.selection ?? "1" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 50,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "20px 24px 20px 24px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 168,
          height: 48,
        }}>
        <LiquidGlassRegularSmall
          style={{ transform: "scale(3.500, 1)", transformOrigin: "0 0" }}
          mode={"light"}
          state={"default"}
        />
      </div>
      <div style={{
        position: "relative",
        width: 8,
        display: "flex",
        flexDirection: "row",
        gap: 10,
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 4,
            height: 4,
            flexShrink: 0,
          }}>{props.icon1 ?? <PageDots mode={"light"} selected={false} style={{ transform: "scale(0.500, 0.500)", transformOrigin: "0 0" }} />}</div>
      </div>
      <div style={{
        position: "relative",
        width: 8,
        display: "flex",
        flexDirection: "row",
        gap: 10,
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 6,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon2 ?? <PageDots mode={"light"} selected={false} />}</div>
      </div>
      <div style={{
          position: "relative",
          width: 8,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon3 ?? <PageDots mode={"light"} selected={false} />}</div>
      <div style={{
          position: "relative",
          width: 8,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon4 ?? <PageDots mode={"light"} selected={false} />}</div>
      <PageDots
        style={{
          position: "relative",
          width: 8,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}
        mode={"light"}
        selected={false}
      />
      <PageDots
        style={{
          position: "relative",
          width: 8,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}
        mode={"light"}
        selected={false}
      />
      <PageDots
        style={{
          position: "relative",
          width: 8,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}
        mode={"light"}
        selected={false}
      />
      <PageDots
        style={{
          position: "relative",
          width: 8,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}
        mode={"light"}
        selected={true}
      />
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 50,
      backdropFilter: "blur(40px)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "20px 24px 20px 24px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 168,
          height: 48,
        }}>
        <LiquidGlassRegularSmall
          style={{ transform: "scale(3.500, 1)", transformOrigin: "0 0" }}
          mode={"light"}
          state={"default"}
        />
      </div>
      <div style={{
        position: "relative",
        width: 8,
        display: "flex",
        flexDirection: "row",
        gap: 10,
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 4,
            height: 4,
            flexShrink: 0,
          }}>{props.icon1 ?? <PageDots mode={"light"} selected={false} style={{ transform: "scale(0.500, 0.500)", transformOrigin: "0 0" }} />}</div>
      </div>
      <div style={{
        position: "relative",
        width: 8,
        display: "flex",
        flexDirection: "row",
        gap: 10,
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 6,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon2 ?? <PageDots mode={"light"} selected={false} />}</div>
      </div>
      <div style={{
          position: "relative",
          width: 8,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon3 ?? <PageDots mode={"light"} selected={false} />}</div>
      <div style={{
          position: "relative",
          width: 8,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon4 ?? <PageDots mode={"light"} selected={false} />}</div>
      <PageDots
        style={{
          position: "relative",
          width: 8,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}
        mode={"light"}
        selected={false}
      />
      <PageDots
        style={{
          position: "relative",
          width: 8,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}
        mode={"light"}
        selected={false}
      />
      <PageDots
        style={{
          position: "relative",
          width: 8,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}
        mode={"light"}
        selected={true}
      />
      <PageDots
        style={{
          position: "relative",
          width: 8,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}
        mode={"light"}
        selected={false}
      />
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 50,
      backdropFilter: "blur(40px)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "20px 24px 20px 24px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 168,
          height: 48,
        }}>
        <LiquidGlassRegularSmall
          style={{ transform: "scale(3.500, 1)", transformOrigin: "0 0" }}
          mode={"light"}
          state={"default"}
        />
      </div>
      <div style={{
        position: "relative",
        width: 8,
        display: "flex",
        flexDirection: "row",
        gap: 10,
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 4,
            height: 4,
            flexShrink: 0,
          }}>{props.icon1 ?? <PageDots mode={"light"} selected={false} style={{ transform: "scale(0.500, 0.500)", transformOrigin: "0 0" }} />}</div>
      </div>
      <div style={{
        position: "relative",
        width: 8,
        display: "flex",
        flexDirection: "row",
        gap: 10,
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 6,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon2 ?? <PageDots mode={"light"} selected={false} />}</div>
      </div>
      <div style={{
          position: "relative",
          width: 8,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon3 ?? <PageDots mode={"light"} selected={false} />}</div>
      <div style={{
          position: "relative",
          width: 8,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon4 ?? <PageDots mode={"light"} selected={false} />}</div>
      <PageDots
        style={{
          position: "relative",
          width: 8,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}
        mode={"light"}
        selected={false}
      />
      <PageDots
        style={{
          position: "relative",
          width: 8,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}
        mode={"light"}
        selected={true}
      />
      <PageDots
        style={{
          position: "relative",
          width: 8,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}
        mode={"light"}
        selected={false}
      />
      <PageDots
        style={{
          position: "relative",
          width: 8,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}
        mode={"light"}
        selected={false}
      />
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 50,
      backdropFilter: "blur(40px)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "20px 24px 20px 24px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 168,
          height: 48,
        }}>
        <LiquidGlassRegularSmall
          style={{ transform: "scale(3.500, 1)", transformOrigin: "0 0" }}
          mode={"light"}
          state={"default"}
        />
      </div>
      <div style={{
        position: "relative",
        width: 8,
        display: "flex",
        flexDirection: "row",
        gap: 10,
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 4,
            height: 4,
            flexShrink: 0,
          }}>{props.icon1 ?? <PageDots mode={"light"} selected={false} style={{ transform: "scale(0.500, 0.500)", transformOrigin: "0 0" }} />}</div>
      </div>
      <div style={{
        position: "relative",
        width: 8,
        display: "flex",
        flexDirection: "row",
        gap: 10,
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 6,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon2 ?? <PageDots mode={"light"} selected={false} />}</div>
      </div>
      <div style={{
          position: "relative",
          width: 8,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon3 ?? <PageDots mode={"light"} selected={false} />}</div>
      <div style={{
          position: "relative",
          width: 8,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon4 ?? <PageDots mode={"light"} selected={false} />}</div>
      <PageDots
        style={{
          position: "relative",
          width: 8,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}
        mode={"light"}
        selected={true}
      />
      <PageDots
        style={{
          position: "relative",
          width: 8,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}
        mode={"light"}
        selected={false}
      />
      <div style={{
        position: "relative",
        width: 8,
        display: "flex",
        flexDirection: "row",
        gap: 10,
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <PageDots
          style={{
            position: "relative",
            width: 6,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}
          mode={"light"}
          selected={false}
        />
      </div>
      <div style={{
        position: "relative",
        width: 8,
        display: "flex",
        flexDirection: "row",
        gap: 10,
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 4,
            height: 4,
            flexShrink: 0,
          }}>
          <PageDots
            style={{ transform: "scale(0.500, 0.500)", transformOrigin: "0 0" }}
            mode={"light"}
            selected={false}
          />
        </div>
      </div>
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 50,
      backdropFilter: "blur(40px)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "20px 24px 20px 24px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 168,
          height: 48,
        }}>
        <LiquidGlassRegularSmall
          style={{ transform: "scale(3.500, 1)", transformOrigin: "0 0" }}
          mode={"light"}
          state={"default"}
        />
      </div>
      <div style={{
          position: "relative",
          width: 8,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <PageDots mode={"light"} selected={false} />}</div>
      <div style={{
          position: "relative",
          width: 8,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon2 ?? <PageDots mode={"light"} selected={false} />}</div>
      <div style={{
          position: "relative",
          width: 8,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon3 ?? <PageDots mode={"light"} selected={false} />}</div>
      <div style={{
          position: "relative",
          width: 8,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon4 ?? <PageDots mode={"light"} selected={true} />}</div>
      <PageDots
        style={{
          position: "relative",
          width: 8,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}
        mode={"light"}
        selected={false}
      />
      <PageDots
        style={{
          position: "relative",
          width: 8,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}
        mode={"light"}
        selected={false}
      />
      <div style={{
        position: "relative",
        width: 8,
        display: "flex",
        flexDirection: "row",
        gap: 10,
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <PageDots
          style={{
            position: "relative",
            width: 6,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}
          mode={"light"}
          selected={false}
        />
      </div>
      <div style={{
        position: "relative",
        width: 8,
        display: "flex",
        flexDirection: "row",
        gap: 10,
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 4,
            height: 4,
            flexShrink: 0,
          }}>
          <PageDots
            style={{ transform: "scale(0.500, 0.500)", transformOrigin: "0 0" }}
            mode={"light"}
            selected={false}
          />
        </div>
      </div>
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 50,
      backdropFilter: "blur(40px)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "20px 24px 20px 24px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 168,
          height: 48,
        }}>
        <LiquidGlassRegularSmall
          style={{ transform: "scale(3.500, 1)", transformOrigin: "0 0" }}
          mode={"light"}
          state={"default"}
        />
      </div>
      <div style={{
          position: "relative",
          width: 8,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <PageDots mode={"light"} selected={false} />}</div>
      <div style={{
          position: "relative",
          width: 8,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon2 ?? <PageDots mode={"light"} selected={false} />}</div>
      <div style={{
          position: "relative",
          width: 8,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon3 ?? <PageDots mode={"light"} selected={true} />}</div>
      <div style={{
          position: "relative",
          width: 8,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon4 ?? <PageDots mode={"light"} selected={false} />}</div>
      <PageDots
        style={{
          position: "relative",
          width: 8,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}
        mode={"light"}
        selected={false}
      />
      <PageDots
        style={{
          position: "relative",
          width: 8,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}
        mode={"light"}
        selected={false}
      />
      <div style={{
        position: "relative",
        width: 8,
        display: "flex",
        flexDirection: "row",
        gap: 10,
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <PageDots
          style={{
            position: "relative",
            width: 6,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}
          mode={"light"}
          selected={false}
        />
      </div>
      <div style={{
        position: "relative",
        width: 8,
        display: "flex",
        flexDirection: "row",
        gap: 10,
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 4,
            height: 4,
            flexShrink: 0,
          }}>
          <PageDots
            style={{ transform: "scale(0.500, 0.500)", transformOrigin: "0 0" }}
            mode={"light"}
            selected={false}
          />
        </div>
      </div>
    </div>
  );
  const __body6 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 50,
      backdropFilter: "blur(40px)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "20px 24px 20px 24px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 168,
          height: 48,
        }}>
        <LiquidGlassRegularSmall
          style={{ transform: "scale(3.500, 1)", transformOrigin: "0 0" }}
          mode={"light"}
          state={"default"}
        />
      </div>
      <div style={{
          position: "relative",
          width: 8,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <PageDots mode={"light"} selected={false} />}</div>
      <div style={{
          position: "relative",
          width: 8,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon2 ?? <PageDots mode={"light"} selected={true} />}</div>
      <div style={{
          position: "relative",
          width: 8,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon3 ?? <PageDots mode={"light"} selected={false} />}</div>
      <div style={{
          position: "relative",
          width: 8,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon4 ?? <PageDots mode={"light"} selected={false} />}</div>
      <PageDots
        style={{
          position: "relative",
          width: 8,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}
        mode={"light"}
        selected={false}
      />
      <PageDots
        style={{
          position: "relative",
          width: 8,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}
        mode={"light"}
        selected={false}
      />
      <div style={{
        position: "relative",
        width: 8,
        display: "flex",
        flexDirection: "row",
        gap: 10,
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <PageDots
          style={{
            position: "relative",
            width: 6,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}
          mode={"light"}
          selected={false}
        />
      </div>
      <div style={{
        position: "relative",
        width: 8,
        display: "flex",
        flexDirection: "row",
        gap: 10,
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 4,
            height: 4,
            flexShrink: 0,
          }}>
          <PageDots
            style={{ transform: "scale(0.500, 0.500)", transformOrigin: "0 0" }}
            mode={"light"}
            selected={false}
          />
        </div>
      </div>
    </div>
  );
  const __body7 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 50,
      backdropFilter: "blur(40px)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "20px 24px 20px 24px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 168,
          height: 48,
        }}>
        <LiquidGlassRegularSmall
          style={{ transform: "scale(3.500, 1)", transformOrigin: "0 0" }}
          mode={"light"}
          state={"default"}
        />
      </div>
      <div style={{
          position: "relative",
          width: 8,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <PageDots mode={"light"} selected={true} />}</div>
      <div style={{
          position: "relative",
          width: 8,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon2 ?? <PageDots mode={"light"} selected={false} />}</div>
      <div style={{
          position: "relative",
          width: 8,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon3 ?? <PageDots mode={"light"} selected={false} />}</div>
      <div style={{
          position: "relative",
          width: 8,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon4 ?? <PageDots mode={"light"} selected={false} />}</div>
      <PageDots
        style={{
          position: "relative",
          width: 8,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}
        mode={"light"}
        selected={false}
      />
      <PageDots
        style={{
          position: "relative",
          width: 8,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}
        mode={"light"}
        selected={false}
      />
      <div style={{
        position: "relative",
        width: 8,
        display: "flex",
        flexDirection: "row",
        gap: 10,
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <PageDots
          style={{
            position: "relative",
            width: 6,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}
          mode={"light"}
          selected={false}
        />
      </div>
      <div style={{
        position: "relative",
        width: 8,
        display: "flex",
        flexDirection: "row",
        gap: 10,
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 4,
            height: 4,
            flexShrink: 0,
          }}>
          <PageDots
            style={{ transform: "scale(0.500, 0.500)", transformOrigin: "0 0" }}
            mode={"light"}
            selected={false}
          />
        </div>
      </div>
    </div>
  );
  const __body8 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 50,
      backdropFilter: "blur(40px)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "20px 24px 20px 24px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 152,
          height: 48,
        }}>
        <LiquidGlassRegularSmall
          style={{ transform: "scale(3.167, 1)", transformOrigin: "0 0" }}
          mode={"light"}
          state={"default"}
        />
      </div>
      <div style={{
        position: "relative",
        width: 8,
        display: "flex",
        flexDirection: "row",
        gap: 10,
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 6,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon1 ?? <PageDots mode={"light"} selected={false} />}</div>
      </div>
      <div style={{
          position: "relative",
          width: 8,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon2 ?? <PageDots mode={"light"} selected={false} />}</div>
      <div style={{
          position: "relative",
          width: 8,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon3 ?? <PageDots mode={"light"} selected={false} />}</div>
      <div style={{
          position: "relative",
          width: 8,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon4 ?? <PageDots mode={"light"} selected={false} />}</div>
      <PageDots
        style={{
          position: "relative",
          width: 8,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}
        mode={"light"}
        selected={false}
      />
      <PageDots
        style={{
          position: "relative",
          width: 8,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}
        mode={"light"}
        selected={false}
      />
      <PageDots
        style={{
          position: "relative",
          width: 8,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}
        mode={"light"}
        selected={true}
      />
    </div>
  );
  const __body9 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 50,
      backdropFilter: "blur(40px)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "20px 24px 20px 24px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 152,
          height: 48,
        }}>
        <LiquidGlassRegularSmall
          style={{ transform: "scale(3.167, 1)", transformOrigin: "0 0" }}
          mode={"light"}
          state={"default"}
        />
      </div>
      <div style={{
          position: "relative",
          width: 8,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <PageDots mode={"light"} selected={false} />}</div>
      <div style={{
          position: "relative",
          width: 8,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon2 ?? <PageDots mode={"light"} selected={false} />}</div>
      <div style={{
          position: "relative",
          width: 8,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon3 ?? <PageDots mode={"light"} selected={false} />}</div>
      <div style={{
          position: "relative",
          width: 8,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon4 ?? <PageDots mode={"light"} selected={false} />}</div>
      <PageDots
        style={{
          position: "relative",
          width: 8,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}
        mode={"light"}
        selected={false}
      />
      <PageDots
        style={{
          position: "relative",
          width: 8,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}
        mode={"light"}
        selected={true}
      />
      <div style={{
        position: "relative",
        width: 8,
        display: "flex",
        flexDirection: "row",
        gap: 10,
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <PageDots
          style={{
            position: "relative",
            width: 6,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}
          mode={"light"}
          selected={false}
        />
      </div>
    </div>
  );
  const __body10 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 50,
      backdropFilter: "blur(40px)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "20px 24px 20px 24px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 152,
          height: 48,
        }}>
        <LiquidGlassRegularSmall
          style={{ transform: "scale(3.167, 1)", transformOrigin: "0 0" }}
          mode={"light"}
          state={"default"}
        />
      </div>
      <div style={{
          position: "relative",
          width: 8,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <PageDots mode={"light"} selected={false} />}</div>
      <div style={{
          position: "relative",
          width: 8,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon2 ?? <PageDots mode={"light"} selected={false} />}</div>
      <div style={{
          position: "relative",
          width: 8,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon3 ?? <PageDots mode={"light"} selected={false} />}</div>
      <div style={{
          position: "relative",
          width: 8,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon4 ?? <PageDots mode={"light"} selected={false} />}</div>
      <PageDots
        style={{
          position: "relative",
          width: 8,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}
        mode={"light"}
        selected={true}
      />
      <PageDots
        style={{
          position: "relative",
          width: 8,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}
        mode={"light"}
        selected={false}
      />
      <div style={{
        position: "relative",
        width: 8,
        display: "flex",
        flexDirection: "row",
        gap: 10,
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <PageDots
          style={{
            position: "relative",
            width: 6,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}
          mode={"light"}
          selected={false}
        />
      </div>
    </div>
  );
  const __body11 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 50,
      backdropFilter: "blur(40px)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "20px 24px 20px 24px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 152,
          height: 48,
        }}>
        <LiquidGlassRegularSmall
          style={{ transform: "scale(3.167, 1)", transformOrigin: "0 0" }}
          mode={"light"}
          state={"default"}
        />
      </div>
      <div style={{
          position: "relative",
          width: 8,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <PageDots mode={"light"} selected={false} />}</div>
      <div style={{
          position: "relative",
          width: 8,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon2 ?? <PageDots mode={"light"} selected={false} />}</div>
      <div style={{
          position: "relative",
          width: 8,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon3 ?? <PageDots mode={"light"} selected={false} />}</div>
      <div style={{
          position: "relative",
          width: 8,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon4 ?? <PageDots mode={"light"} selected={true} />}</div>
      <PageDots
        style={{
          position: "relative",
          width: 8,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}
        mode={"light"}
        selected={false}
      />
      <PageDots
        style={{
          position: "relative",
          width: 8,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}
        mode={"light"}
        selected={false}
      />
      <div style={{
        position: "relative",
        width: 8,
        display: "flex",
        flexDirection: "row",
        gap: 10,
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <PageDots
          style={{
            position: "relative",
            width: 6,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}
          mode={"light"}
          selected={false}
        />
      </div>
    </div>
  );
  const __body12 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 50,
      backdropFilter: "blur(40px)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "20px 24px 20px 24px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 152,
          height: 48,
        }}>
        <LiquidGlassRegularSmall
          style={{ transform: "scale(3.167, 1)", transformOrigin: "0 0" }}
          mode={"light"}
          state={"default"}
        />
      </div>
      <div style={{
          position: "relative",
          width: 8,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <PageDots mode={"light"} selected={false} />}</div>
      <div style={{
          position: "relative",
          width: 8,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon2 ?? <PageDots mode={"light"} selected={false} />}</div>
      <div style={{
          position: "relative",
          width: 8,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon3 ?? <PageDots mode={"light"} selected={true} />}</div>
      <div style={{
          position: "relative",
          width: 8,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon4 ?? <PageDots mode={"light"} selected={false} />}</div>
      <PageDots
        style={{
          position: "relative",
          width: 8,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}
        mode={"light"}
        selected={false}
      />
      <PageDots
        style={{
          position: "relative",
          width: 8,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}
        mode={"light"}
        selected={false}
      />
      <div style={{
        position: "relative",
        width: 8,
        display: "flex",
        flexDirection: "row",
        gap: 10,
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <PageDots
          style={{
            position: "relative",
            width: 6,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}
          mode={"light"}
          selected={false}
        />
      </div>
    </div>
  );
  const __body13 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 50,
      backdropFilter: "blur(40px)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "20px 24px 20px 24px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 152,
          height: 48,
        }}>
        <LiquidGlassRegularSmall
          style={{ transform: "scale(3.167, 1)", transformOrigin: "0 0" }}
          mode={"light"}
          state={"default"}
        />
      </div>
      <div style={{
          position: "relative",
          width: 8,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <PageDots mode={"light"} selected={false} />}</div>
      <div style={{
          position: "relative",
          width: 8,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon2 ?? <PageDots mode={"light"} selected={true} />}</div>
      <div style={{
          position: "relative",
          width: 8,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon3 ?? <PageDots mode={"light"} selected={false} />}</div>
      <div style={{
          position: "relative",
          width: 8,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon4 ?? <PageDots mode={"light"} selected={false} />}</div>
      <PageDots
        style={{
          position: "relative",
          width: 8,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}
        mode={"light"}
        selected={false}
      />
      <PageDots
        style={{
          position: "relative",
          width: 8,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}
        mode={"light"}
        selected={false}
      />
      <div style={{
        position: "relative",
        width: 8,
        display: "flex",
        flexDirection: "row",
        gap: 10,
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <PageDots
          style={{
            position: "relative",
            width: 6,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}
          mode={"light"}
          selected={false}
        />
      </div>
    </div>
  );
  const __body14 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 50,
      backdropFilter: "blur(40px)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "20px 24px 20px 24px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 152,
          height: 48,
        }}>
        <LiquidGlassRegularSmall
          style={{ transform: "scale(3.167, 1)", transformOrigin: "0 0" }}
          mode={"light"}
          state={"default"}
        />
      </div>
      <div style={{
          position: "relative",
          width: 8,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <PageDots mode={"light"} selected={true} />}</div>
      <div style={{
          position: "relative",
          width: 8,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon2 ?? <PageDots mode={"light"} selected={false} />}</div>
      <div style={{
          position: "relative",
          width: 8,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon3 ?? <PageDots mode={"light"} selected={false} />}</div>
      <div style={{
          position: "relative",
          width: 8,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon4 ?? <PageDots mode={"light"} selected={false} />}</div>
      <PageDots
        style={{
          position: "relative",
          width: 8,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}
        mode={"light"}
        selected={false}
      />
      <PageDots
        style={{
          position: "relative",
          width: 8,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}
        mode={"light"}
        selected={false}
      />
      <div style={{
        position: "relative",
        width: 8,
        display: "flex",
        flexDirection: "row",
        gap: 10,
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <PageDots
          style={{
            position: "relative",
            width: 6,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}
          mode={"light"}
          selected={false}
        />
      </div>
    </div>
  );
  const __body15 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 50,
      backdropFilter: "blur(40px)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "20px 24px 20px 24px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 136,
          height: 48,
        }}>
        <LiquidGlassRegularSmall
          style={{ transform: "scale(2.833, 1)", transformOrigin: "0 0" }}
          mode={"light"}
          state={"default"}
        />
      </div>
      <div style={{
          position: "relative",
          width: 8,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <PageDots mode={"light"} selected={false} />}</div>
      <div style={{
          position: "relative",
          width: 8,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon2 ?? <PageDots mode={"light"} selected={false} />}</div>
      <div style={{
          position: "relative",
          width: 8,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon3 ?? <PageDots mode={"light"} selected={false} />}</div>
      <div style={{
          position: "relative",
          width: 8,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon4 ?? <PageDots mode={"light"} selected={false} />}</div>
      <PageDots
        style={{
          position: "relative",
          width: 8,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}
        mode={"light"}
        selected={false}
      />
      <PageDots
        style={{
          position: "relative",
          width: 8,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}
        mode={"light"}
        selected={true}
      />
    </div>
  );
  const __body16 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 50,
      backdropFilter: "blur(40px)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "20px 24px 20px 24px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 136,
          height: 48,
        }}>
        <LiquidGlassRegularSmall
          style={{ transform: "scale(2.833, 1)", transformOrigin: "0 0" }}
          mode={"light"}
          state={"default"}
        />
      </div>
      <div style={{
          position: "relative",
          width: 8,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <PageDots mode={"light"} selected={false} />}</div>
      <div style={{
          position: "relative",
          width: 8,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon2 ?? <PageDots mode={"light"} selected={false} />}</div>
      <div style={{
          position: "relative",
          width: 8,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon3 ?? <PageDots mode={"light"} selected={false} />}</div>
      <div style={{
          position: "relative",
          width: 8,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon4 ?? <PageDots mode={"light"} selected={false} />}</div>
      <PageDots
        style={{
          position: "relative",
          width: 8,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}
        mode={"light"}
        selected={true}
      />
      <PageDots
        style={{
          position: "relative",
          width: 8,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}
        mode={"light"}
        selected={false}
      />
    </div>
  );
  const __body17 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 50,
      backdropFilter: "blur(40px)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "20px 24px 20px 24px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 136,
          height: 48,
        }}>
        <LiquidGlassRegularSmall
          style={{ transform: "scale(2.833, 1)", transformOrigin: "0 0" }}
          mode={"light"}
          state={"default"}
        />
      </div>
      <div style={{
          position: "relative",
          width: 8,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <PageDots mode={"light"} selected={false} />}</div>
      <div style={{
          position: "relative",
          width: 8,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon2 ?? <PageDots mode={"light"} selected={false} />}</div>
      <div style={{
          position: "relative",
          width: 8,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon3 ?? <PageDots mode={"light"} selected={false} />}</div>
      <div style={{
          position: "relative",
          width: 8,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon4 ?? <PageDots mode={"light"} selected={true} />}</div>
      <PageDots
        style={{
          position: "relative",
          width: 8,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}
        mode={"light"}
        selected={false}
      />
      <PageDots
        style={{
          position: "relative",
          width: 8,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}
        mode={"light"}
        selected={false}
      />
    </div>
  );
  const __body18 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 50,
      backdropFilter: "blur(40px)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "20px 24px 20px 24px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 136,
          height: 48,
        }}>
        <LiquidGlassRegularSmall
          style={{ transform: "scale(2.833, 1)", transformOrigin: "0 0" }}
          mode={"light"}
          state={"default"}
        />
      </div>
      <div style={{
          position: "relative",
          width: 8,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <PageDots mode={"light"} selected={false} />}</div>
      <div style={{
          position: "relative",
          width: 8,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon2 ?? <PageDots mode={"light"} selected={false} />}</div>
      <div style={{
          position: "relative",
          width: 8,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon3 ?? <PageDots mode={"light"} selected={true} />}</div>
      <div style={{
          position: "relative",
          width: 8,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon4 ?? <PageDots mode={"light"} selected={false} />}</div>
      <PageDots
        style={{
          position: "relative",
          width: 8,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}
        mode={"light"}
        selected={false}
      />
      <PageDots
        style={{
          position: "relative",
          width: 8,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}
        mode={"light"}
        selected={false}
      />
    </div>
  );
  const __body19 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 50,
      backdropFilter: "blur(40px)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "20px 24px 20px 24px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 136,
          height: 48,
        }}>
        <LiquidGlassRegularSmall
          style={{ transform: "scale(2.833, 1)", transformOrigin: "0 0" }}
          mode={"light"}
          state={"default"}
        />
      </div>
      <div style={{
          position: "relative",
          width: 8,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <PageDots mode={"light"} selected={false} />}</div>
      <div style={{
          position: "relative",
          width: 8,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon2 ?? <PageDots mode={"light"} selected={true} />}</div>
      <div style={{
          position: "relative",
          width: 8,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon3 ?? <PageDots mode={"light"} selected={false} />}</div>
      <div style={{
          position: "relative",
          width: 8,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon4 ?? <PageDots mode={"light"} selected={false} />}</div>
      <PageDots
        style={{
          position: "relative",
          width: 8,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}
        mode={"light"}
        selected={false}
      />
      <PageDots
        style={{
          position: "relative",
          width: 8,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}
        mode={"light"}
        selected={false}
      />
    </div>
  );
  const __body20 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 50,
      backdropFilter: "blur(40px)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "20px 24px 20px 24px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 136,
          height: 48,
        }}>
        <LiquidGlassRegularSmall
          style={{ transform: "scale(2.833, 1)", transformOrigin: "0 0" }}
          mode={"light"}
          state={"default"}
        />
      </div>
      <div style={{
          position: "relative",
          width: 8,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <PageDots mode={"light"} selected={true} />}</div>
      <div style={{
          position: "relative",
          width: 8,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon2 ?? <PageDots mode={"light"} selected={false} />}</div>
      <div style={{
          position: "relative",
          width: 8,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon3 ?? <PageDots mode={"light"} selected={false} />}</div>
      <div style={{
          position: "relative",
          width: 8,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon4 ?? <PageDots mode={"light"} selected={false} />}</div>
      <PageDots
        style={{
          position: "relative",
          width: 8,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}
        mode={"light"}
        selected={false}
      />
      <PageDots
        style={{
          position: "relative",
          width: 8,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}
        mode={"light"}
        selected={false}
      />
    </div>
  );
  const __body21 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 50,
      backdropFilter: "blur(40px)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "20px 24px 20px 24px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 120,
          height: 48,
        }}>
        <LiquidGlassRegularSmall
          style={{ transform: "scale(2.500, 1)", transformOrigin: "0 0" }}
          mode={"light"}
          state={"default"}
        />
      </div>
      <div style={{
          position: "relative",
          width: 8,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <PageDots mode={"light"} selected={false} />}</div>
      <div style={{
          position: "relative",
          width: 8,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon2 ?? <PageDots mode={"light"} selected={false} />}</div>
      <div style={{
          position: "relative",
          width: 8,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon3 ?? <PageDots mode={"light"} selected={false} />}</div>
      <div style={{
          position: "relative",
          width: 8,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon4 ?? <PageDots mode={"light"} selected={false} />}</div>
      <PageDots
        style={{
          position: "relative",
          width: 8,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}
        mode={"light"}
        selected={true}
      />
    </div>
  );
  const __body22 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 50,
      backdropFilter: "blur(40px)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "20px 24px 20px 24px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 120,
          height: 48,
        }}>
        <LiquidGlassRegularSmall
          style={{ transform: "scale(2.500, 1)", transformOrigin: "0 0" }}
          mode={"light"}
          state={"default"}
        />
      </div>
      <div style={{
          position: "relative",
          width: 8,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <PageDots mode={"light"} selected={false} />}</div>
      <div style={{
          position: "relative",
          width: 8,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon2 ?? <PageDots mode={"light"} selected={false} />}</div>
      <div style={{
          position: "relative",
          width: 8,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon3 ?? <PageDots mode={"light"} selected={false} />}</div>
      <div style={{
          position: "relative",
          width: 8,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon4 ?? <PageDots mode={"light"} selected={true} />}</div>
      <PageDots
        style={{
          position: "relative",
          width: 8,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}
        mode={"light"}
        selected={false}
      />
    </div>
  );
  const __body23 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 50,
      backdropFilter: "blur(40px)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "20px 24px 20px 24px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 120,
          height: 48,
        }}>
        <LiquidGlassRegularSmall
          style={{ transform: "scale(2.500, 1)", transformOrigin: "0 0" }}
          mode={"light"}
          state={"default"}
        />
      </div>
      <div style={{
          position: "relative",
          width: 8,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <PageDots mode={"light"} selected={false} />}</div>
      <div style={{
          position: "relative",
          width: 8,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon2 ?? <PageDots mode={"light"} selected={false} />}</div>
      <div style={{
          position: "relative",
          width: 8,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon3 ?? <PageDots mode={"light"} selected={true} />}</div>
      <div style={{
          position: "relative",
          width: 8,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon4 ?? <PageDots mode={"light"} selected={false} />}</div>
      <PageDots
        style={{
          position: "relative",
          width: 8,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}
        mode={"light"}
        selected={false}
      />
    </div>
  );
  const __body24 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 50,
      backdropFilter: "blur(40px)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "20px 24px 20px 24px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 120,
          height: 48,
        }}>
        <LiquidGlassRegularSmall
          style={{ transform: "scale(2.500, 1)", transformOrigin: "0 0" }}
          mode={"light"}
          state={"default"}
        />
      </div>
      <div style={{
          position: "relative",
          width: 8,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <PageDots mode={"light"} selected={false} />}</div>
      <div style={{
          position: "relative",
          width: 8,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon2 ?? <PageDots mode={"light"} selected={true} />}</div>
      <div style={{
          position: "relative",
          width: 8,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon3 ?? <PageDots mode={"light"} selected={false} />}</div>
      <div style={{
          position: "relative",
          width: 8,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon4 ?? <PageDots mode={"light"} selected={false} />}</div>
      <PageDots
        style={{
          position: "relative",
          width: 8,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}
        mode={"light"}
        selected={false}
      />
    </div>
  );
  const __body25 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 50,
      backdropFilter: "blur(40px)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "20px 24px 20px 24px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 120,
          height: 48,
        }}>
        <LiquidGlassRegularSmall
          style={{ transform: "scale(2.500, 1)", transformOrigin: "0 0" }}
          mode={"light"}
          state={"default"}
        />
      </div>
      <div style={{
          position: "relative",
          width: 8,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <PageDots mode={"light"} selected={true} />}</div>
      <div style={{
          position: "relative",
          width: 8,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon2 ?? <PageDots mode={"light"} selected={false} />}</div>
      <div style={{
          position: "relative",
          width: 8,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon3 ?? <PageDots mode={"light"} selected={false} />}</div>
      <div style={{
          position: "relative",
          width: 8,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon4 ?? <PageDots mode={"light"} selected={false} />}</div>
      <PageDots
        style={{
          position: "relative",
          width: 8,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}
        mode={"light"}
        selected={false}
      />
    </div>
  );
  const __body26 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 50,
      backdropFilter: "blur(40px)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "20px 24px 20px 24px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 104,
          height: 48,
        }}>
        <LiquidGlassRegularSmall
          style={{ transform: "scale(2.167, 1)", transformOrigin: "0 0" }}
          mode={"light"}
          state={"default"}
        />
      </div>
      <div style={{
          position: "relative",
          width: 8,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <PageDots mode={"light"} selected={false} />}</div>
      <div style={{
          position: "relative",
          width: 8,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon2 ?? <PageDots mode={"light"} selected={false} />}</div>
      <div style={{
          position: "relative",
          width: 8,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon3 ?? <PageDots mode={"light"} selected={false} />}</div>
      <div style={{
          position: "relative",
          width: 8,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon4 ?? <PageDots mode={"light"} selected={true} />}</div>
    </div>
  );
  const __body27 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 50,
      backdropFilter: "blur(40px)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "20px 24px 20px 24px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 104,
          height: 48,
        }}>
        <LiquidGlassRegularSmall
          style={{ transform: "scale(2.167, 1)", transformOrigin: "0 0" }}
          mode={"light"}
          state={"default"}
        />
      </div>
      <div style={{
          position: "relative",
          width: 8,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <PageDots mode={"light"} selected={false} />}</div>
      <div style={{
          position: "relative",
          width: 8,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon2 ?? <PageDots mode={"light"} selected={false} />}</div>
      <div style={{
          position: "relative",
          width: 8,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon3 ?? <PageDots mode={"light"} selected={true} />}</div>
      <div style={{
          position: "relative",
          width: 8,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon4 ?? <PageDots mode={"light"} selected={false} />}</div>
    </div>
  );
  const __body28 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 50,
      backdropFilter: "blur(40px)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "20px 24px 20px 24px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 104,
          height: 48,
        }}>
        <LiquidGlassRegularSmall
          style={{ transform: "scale(2.167, 1)", transformOrigin: "0 0" }}
          mode={"light"}
          state={"default"}
        />
      </div>
      <div style={{
          position: "relative",
          width: 8,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <PageDots mode={"light"} selected={false} />}</div>
      <div style={{
          position: "relative",
          width: 8,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon2 ?? <PageDots mode={"light"} selected={true} />}</div>
      <div style={{
          position: "relative",
          width: 8,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon3 ?? <PageDots mode={"light"} selected={false} />}</div>
      <div style={{
          position: "relative",
          width: 8,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon4 ?? <PageDots mode={"light"} selected={false} />}</div>
    </div>
  );
  const __body29 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 50,
      backdropFilter: "blur(40px)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "20px 24px 20px 24px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 104,
          height: 48,
        }}>
        <LiquidGlassRegularSmall
          style={{ transform: "scale(2.167, 1)", transformOrigin: "0 0" }}
          mode={"light"}
          state={"default"}
        />
      </div>
      <div style={{
          position: "relative",
          width: 8,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <PageDots mode={"light"} selected={true} />}</div>
      <div style={{
          position: "relative",
          width: 8,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon2 ?? <PageDots mode={"light"} selected={false} />}</div>
      <div style={{
          position: "relative",
          width: 8,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon3 ?? <PageDots mode={"light"} selected={false} />}</div>
      <div style={{
          position: "relative",
          width: 8,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon4 ?? <PageDots mode={"light"} selected={false} />}</div>
    </div>
  );
  const __body30 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 50,
      backdropFilter: "blur(40px)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "20px 24px 20px 24px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 88,
          height: 48,
        }}>
        <LiquidGlassRegularSmall
          style={{ transform: "scale(1.833, 1)", transformOrigin: "0 0" }}
          mode={"light"}
          state={"default"}
        />
      </div>
      <div style={{
          position: "relative",
          width: 8,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <PageDots mode={"light"} selected={false} />}</div>
      <div style={{
          position: "relative",
          width: 8,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon2 ?? <PageDots mode={"light"} selected={false} />}</div>
      <div style={{
          position: "relative",
          width: 8,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon3 ?? <PageDots mode={"light"} selected={true} />}</div>
    </div>
  );
  const __body31 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 50,
      backdropFilter: "blur(40px)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "20px 24px 20px 24px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 88,
          height: 48,
        }}>
        <LiquidGlassRegularSmall
          style={{ transform: "scale(1.833, 1)", transformOrigin: "0 0" }}
          mode={"light"}
          state={"default"}
        />
      </div>
      <div style={{
          position: "relative",
          width: 8,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <PageDots mode={"light"} selected={false} />}</div>
      <div style={{
          position: "relative",
          width: 8,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon2 ?? <PageDots mode={"light"} selected={true} />}</div>
      <div style={{
          position: "relative",
          width: 8,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon3 ?? <PageDots mode={"light"} selected={false} />}</div>
    </div>
  );
  const __body32 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 50,
      backdropFilter: "blur(40px)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "20px 24px 20px 24px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 88,
          height: 48,
        }}>
        <LiquidGlassRegularSmall
          style={{ transform: "scale(1.833, 1)", transformOrigin: "0 0" }}
          mode={"light"}
          state={"default"}
        />
      </div>
      <div style={{
          position: "relative",
          width: 8,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <PageDots mode={"light"} selected={true} />}</div>
      <div style={{
          position: "relative",
          width: 8,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon2 ?? <PageDots mode={"light"} selected={false} />}</div>
      <div style={{
          position: "relative",
          width: 8,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon3 ?? <PageDots mode={"light"} selected={false} />}</div>
    </div>
  );
  const __body33 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 50,
      backdropFilter: "blur(40px)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "20px 24px 20px 24px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 72,
          height: 48,
        }}>{props.icon1 ?? <LiquidGlassRegularSmall mode={"light"} state={"default"} style={{ transform: "scale(1.500, 1)", transformOrigin: "0 0" }} />}</div>
      <div style={{
          position: "relative",
          width: 8,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon2 ?? <PageDots mode={"light"} selected={false} />}</div>
      <div style={{
          position: "relative",
          width: 8,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon3 ?? <PageDots mode={"light"} selected={true} />}</div>
    </div>
  );
  const __body34 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 50,
      backdropFilter: "blur(40px)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "20px 24px 20px 24px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 72,
          height: 48,
        }}>{props.icon1 ?? <LiquidGlassRegularSmall mode={"light"} state={"default"} style={{ transform: "scale(1.500, 1)", transformOrigin: "0 0" }} />}</div>
      <div style={{
          position: "relative",
          width: 8,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon2 ?? <PageDots mode={"light"} selected={true} />}</div>
      <div style={{
          position: "relative",
          width: 8,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon3 ?? <PageDots mode={"light"} selected={false} />}</div>
    </div>
  );
  const __impls = {
    // figma: Dots=8+, Selection=8
    "dots=8+|selection=8": __body0,
    // figma: Dots=8+, Selection=7
    "dots=8+|selection=7": __body1,
    // figma: Dots=8+, Selection=6
    "dots=8+|selection=6": __body2,
    // figma: Dots=8+, Selection=5
    "dots=8+|selection=5": __body3,
    // figma: Dots=8+, Selection=4
    "dots=8+|selection=4": __body4,
    // figma: Dots=8+, Selection=3
    "dots=8+|selection=3": __body5,
    // figma: Dots=8+, Selection=2
    "dots=8+|selection=2": __body6,
    // figma: Dots=8+, Selection=1
    "dots=8+|selection=1": __body7,
    // figma: Dots=7, Selection=7
    "dots=7|selection=7": __body8,
    // figma: Dots=7, Selection=6
    "dots=7|selection=6": __body9,
    // figma: Dots=7, Selection=5
    "dots=7|selection=5": __body10,
    // figma: Dots=7, Selection=4
    "dots=7|selection=4": __body11,
    // figma: Dots=7, Selection=3
    "dots=7|selection=3": __body12,
    // figma: Dots=7, Selection=2
    "dots=7|selection=2": __body13,
    // figma: Dots=7, Selection=1
    "dots=7|selection=1": __body14,
    // figma: Dots=6, Selection=6
    "dots=6|selection=6": __body15,
    // figma: Dots=6, Selection=5
    "dots=6|selection=5": __body16,
    // figma: Dots=6, Selection=4
    "dots=6|selection=4": __body17,
    // figma: Dots=6, Selection=3
    "dots=6|selection=3": __body18,
    // figma: Dots=6, Selection=2
    "dots=6|selection=2": __body19,
    // figma: Dots=6, Selection=1
    "dots=6|selection=1": __body20,
    // figma: Dots=5, Selection=5
    "dots=5|selection=5": __body21,
    // figma: Dots=5, Selection=4
    "dots=5|selection=4": __body22,
    // figma: Dots=5, Selection=3
    "dots=5|selection=3": __body23,
    // figma: Dots=5, Selection=2
    "dots=5|selection=2": __body24,
    // figma: Dots=5, Selection=1
    "dots=5|selection=1": __body25,
    // figma: Dots=4, Selection=4
    "dots=4|selection=4": __body26,
    // figma: Dots=4, Selection=3
    "dots=4|selection=3": __body27,
    // figma: Dots=4, Selection=2
    "dots=4|selection=2": __body28,
    // figma: Dots=4, Selection=1
    "dots=4|selection=1": __body29,
    // figma: Dots=3, Selection=3
    "dots=3|selection=3": __body30,
    // figma: Dots=3, Selection=2
    "dots=3|selection=2": __body31,
    // figma: Dots=3, Selection=1
    "dots=3|selection=1": __body32,
    // figma: Dots=2, Selection=2
    "dots=2|selection=2": __body33,
    // figma: Dots=2, Selection=1
    "dots=2|selection=1": __body34,
  };
  return (__impls[__vkey(props)] ?? __body34)();
}
export default PageControl5;
