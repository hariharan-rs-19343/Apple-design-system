import { ButtonHorizontalStack } from '../tab-bars/ButtonHorizontalStack.jsx';
import { ButtonVerticalStack } from '../tab-bars/ButtonVerticalStack.jsx';
import { Materials } from '../materials/Materials.jsx';

// figma node: 128:104137 Tab Bar - iPad (35 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "tabs=" + __venc(p.tabs);

export function TabBarIPad(_p = {}) {
  const props = { ..._p, tabs: _p.tabs ?? "2 (1 selected)" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 1210,
      height: 65,
      backgroundColor: "rgb(255,51,0)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 1210,
          height: 65,
        }}>
        <Materials
          style={{ transform: "scale(12.100, 0.650)", transformOrigin: "0 0" }}
          style2={"chrome"}
        />
      </div>
      <div style={{
        position: "absolute",
        left: 156.064,
        top: 7,
        width: 897.873,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
        flexWrap: "nowrap",
      }}>
        <div style={{
            position: "relative",
            width: 48,
            height: 40,
            flexShrink: 0,
          }}>{props.icon1 ?? <ButtonVerticalStack label={"Tab 1"} selected={false} />}</div>
        <div style={{
            position: "relative",
            width: 48,
            height: 40,
            flexShrink: 0,
          }}>{props.icon2 ?? <ButtonVerticalStack label={"Tab 2"} selected={false} />}</div>
        <div style={{
            position: "relative",
            width: 48,
            height: 40,
            flexShrink: 0,
          }}>{props.icon3 ?? <ButtonVerticalStack label={"Tab 3"} selected={false} />}</div>
        <div style={{
            position: "relative",
            width: 48,
            height: 40,
            flexShrink: 0,
          }}>{props.icon4 ?? <ButtonVerticalStack label={"Tab 4"} selected={false} />}</div>
        <ButtonVerticalStack
          style={{
            position: "relative",
            width: 48,
            height: 40,
            flexShrink: 0,
          }}
          label={"Tab 5"}
          selected={false}
        />
        <ButtonVerticalStack
          style={{
            position: "relative",
            width: 48,
            height: 40,
            flexShrink: 0,
          }}
          label={"Tab 6"}
          selected={false}
        />
        <ButtonVerticalStack
          style={{
            position: "relative",
            width: 48,
            height: 40,
            flexShrink: 0,
          }}
          label={"Tab 7"}
          selected={false}
        />
        <ButtonVerticalStack
          style={{
            position: "relative",
            width: 48,
            height: 40,
            flexShrink: 0,
          }}
          label={"Tab 8"}
          selected={true}
        />
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 1210,
      height: 65,
      backgroundColor: "rgb(255,51,0)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 1210,
          height: 65,
        }}>
        <Materials
          style={{ transform: "scale(12.100, 0.650)", transformOrigin: "0 0" }}
          style2={"chrome"}
        />
      </div>
      <div style={{
        position: "absolute",
        left: 156.064,
        top: 7,
        width: 897.873,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
        flexWrap: "nowrap",
      }}>
        <div style={{
            position: "relative",
            width: 48,
            height: 40,
            flexShrink: 0,
          }}>{props.icon1 ?? <ButtonVerticalStack label={"Tab 1"} selected={false} />}</div>
        <div style={{
            position: "relative",
            width: 48,
            height: 40,
            flexShrink: 0,
          }}>{props.icon2 ?? <ButtonVerticalStack label={"Tab 2"} selected={false} />}</div>
        <div style={{
            position: "relative",
            width: 48,
            height: 40,
            flexShrink: 0,
          }}>{props.icon3 ?? <ButtonVerticalStack label={"Tab 3"} selected={false} />}</div>
        <div style={{
            position: "relative",
            width: 48,
            height: 40,
            flexShrink: 0,
          }}>{props.icon4 ?? <ButtonVerticalStack label={"Tab 4"} selected={false} />}</div>
        <ButtonVerticalStack
          style={{
            position: "relative",
            width: 48,
            height: 40,
            flexShrink: 0,
          }}
          label={"Tab 5"}
          selected={false}
        />
        <ButtonVerticalStack
          style={{
            position: "relative",
            width: 48,
            height: 40,
            flexShrink: 0,
          }}
          label={"Tab 6"}
          selected={false}
        />
        <ButtonVerticalStack
          style={{
            position: "relative",
            width: 48,
            height: 40,
            flexShrink: 0,
          }}
          label={"Tab 7"}
          selected={true}
        />
        <ButtonVerticalStack
          style={{
            position: "relative",
            width: 48,
            height: 40,
            flexShrink: 0,
          }}
          label={"Tab 8"}
          selected={false}
        />
      </div>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 1210,
      height: 65,
      backgroundColor: "rgb(255,51,0)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 1210,
          height: 65,
        }}>
        <Materials
          style={{ transform: "scale(12.100, 0.650)", transformOrigin: "0 0" }}
          style2={"chrome"}
        />
      </div>
      <div style={{
        position: "absolute",
        left: 156.064,
        top: 7,
        width: 897.873,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
        flexWrap: "nowrap",
      }}>
        <div style={{
            position: "relative",
            width: 48,
            height: 40,
            flexShrink: 0,
          }}>{props.icon1 ?? <ButtonVerticalStack label={"Tab 1"} selected={false} />}</div>
        <div style={{
            position: "relative",
            width: 48,
            height: 40,
            flexShrink: 0,
          }}>{props.icon2 ?? <ButtonVerticalStack label={"Tab 2"} selected={false} />}</div>
        <div style={{
            position: "relative",
            width: 48,
            height: 40,
            flexShrink: 0,
          }}>{props.icon3 ?? <ButtonVerticalStack label={"Tab 3"} selected={false} />}</div>
        <div style={{
            position: "relative",
            width: 48,
            height: 40,
            flexShrink: 0,
          }}>{props.icon4 ?? <ButtonVerticalStack label={"Tab 4"} selected={false} />}</div>
        <ButtonVerticalStack
          style={{
            position: "relative",
            width: 48,
            height: 40,
            flexShrink: 0,
          }}
          label={"Tab 5"}
          selected={false}
        />
        <ButtonVerticalStack
          style={{
            position: "relative",
            width: 48,
            height: 40,
            flexShrink: 0,
          }}
          label={"Tab 6"}
          selected={true}
        />
        <ButtonVerticalStack
          style={{
            position: "relative",
            width: 48,
            height: 40,
            flexShrink: 0,
          }}
          label={"Tab 7"}
          selected={false}
        />
        <ButtonVerticalStack
          style={{
            position: "relative",
            width: 48,
            height: 40,
            flexShrink: 0,
          }}
          label={"Tab 8"}
          selected={false}
        />
      </div>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 1210,
      height: 65,
      backgroundColor: "rgb(255,51,0)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 1210,
          height: 65,
        }}>
        <Materials
          style={{ transform: "scale(12.100, 0.650)", transformOrigin: "0 0" }}
          style2={"chrome"}
        />
      </div>
      <div style={{
        position: "absolute",
        left: 156.064,
        top: 7,
        width: 897.873,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
        flexWrap: "nowrap",
      }}>
        <div style={{
            position: "relative",
            width: 48,
            height: 40,
            flexShrink: 0,
          }}>{props.icon1 ?? <ButtonVerticalStack label={"Tab 1"} selected={false} />}</div>
        <div style={{
            position: "relative",
            width: 48,
            height: 40,
            flexShrink: 0,
          }}>{props.icon2 ?? <ButtonVerticalStack label={"Tab 2"} selected={false} />}</div>
        <div style={{
            position: "relative",
            width: 48,
            height: 40,
            flexShrink: 0,
          }}>{props.icon3 ?? <ButtonVerticalStack label={"Tab 3"} selected={false} />}</div>
        <div style={{
            position: "relative",
            width: 48,
            height: 40,
            flexShrink: 0,
          }}>{props.icon4 ?? <ButtonVerticalStack label={"Tab 4"} selected={false} />}</div>
        <ButtonVerticalStack
          style={{
            position: "relative",
            width: 48,
            height: 40,
            flexShrink: 0,
          }}
          label={"Tab 5"}
          selected={true}
        />
        <ButtonVerticalStack
          style={{
            position: "relative",
            width: 48,
            height: 40,
            flexShrink: 0,
          }}
          label={"Tab 6"}
          selected={false}
        />
        <ButtonVerticalStack
          style={{
            position: "relative",
            width: 48,
            height: 40,
            flexShrink: 0,
          }}
          label={"Tab 7"}
          selected={false}
        />
        <ButtonVerticalStack
          style={{
            position: "relative",
            width: 48,
            height: 40,
            flexShrink: 0,
          }}
          label={"Tab 8"}
          selected={false}
        />
      </div>
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: 1210,
      height: 65,
      backgroundColor: "rgb(255,51,0)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 1210,
          height: 65,
        }}>
        <Materials
          style={{ transform: "scale(12.100, 0.650)", transformOrigin: "0 0" }}
          style2={"chrome"}
        />
      </div>
      <div style={{
        position: "absolute",
        left: 156.064,
        top: 7,
        width: 897.873,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
        flexWrap: "nowrap",
      }}>
        <div style={{
            position: "relative",
            width: 48,
            height: 40,
            flexShrink: 0,
          }}>{props.icon1 ?? <ButtonVerticalStack label={"Tab 1"} selected={false} />}</div>
        <div style={{
            position: "relative",
            width: 48,
            height: 40,
            flexShrink: 0,
          }}>{props.icon2 ?? <ButtonVerticalStack label={"Tab 2"} selected={false} />}</div>
        <div style={{
            position: "relative",
            width: 48,
            height: 40,
            flexShrink: 0,
          }}>{props.icon3 ?? <ButtonVerticalStack label={"Tab 3"} selected={false} />}</div>
        <div style={{
            position: "relative",
            width: 48,
            height: 40,
            flexShrink: 0,
          }}>{props.icon4 ?? <ButtonVerticalStack label={"Tab 4"} selected={true} />}</div>
        <ButtonVerticalStack
          style={{
            position: "relative",
            width: 48,
            height: 40,
            flexShrink: 0,
          }}
          label={"Tab 5"}
          selected={false}
        />
        <ButtonVerticalStack
          style={{
            position: "relative",
            width: 48,
            height: 40,
            flexShrink: 0,
          }}
          label={"Tab 6"}
          selected={false}
        />
        <ButtonVerticalStack
          style={{
            position: "relative",
            width: 48,
            height: 40,
            flexShrink: 0,
          }}
          label={"Tab 7"}
          selected={false}
        />
        <ButtonVerticalStack
          style={{
            position: "relative",
            width: 48,
            height: 40,
            flexShrink: 0,
          }}
          label={"Tab 8"}
          selected={false}
        />
      </div>
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: 1210,
      height: 65,
      backgroundColor: "rgb(255,51,0)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 1210,
          height: 65,
        }}>
        <Materials
          style={{ transform: "scale(12.100, 0.650)", transformOrigin: "0 0" }}
          style2={"chrome"}
        />
      </div>
      <div style={{
        position: "absolute",
        left: 156.064,
        top: 7,
        width: 897.873,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
        flexWrap: "nowrap",
      }}>
        <div style={{
            position: "relative",
            width: 48,
            height: 40,
            flexShrink: 0,
          }}>{props.icon1 ?? <ButtonVerticalStack label={"Tab 1"} selected={false} />}</div>
        <div style={{
            position: "relative",
            width: 48,
            height: 40,
            flexShrink: 0,
          }}>{props.icon2 ?? <ButtonVerticalStack label={"Tab 2"} selected={false} />}</div>
        <div style={{
            position: "relative",
            width: 48,
            height: 40,
            flexShrink: 0,
          }}>{props.icon3 ?? <ButtonVerticalStack label={"Tab 3"} selected={true} />}</div>
        <div style={{
            position: "relative",
            width: 48,
            height: 40,
            flexShrink: 0,
          }}>{props.icon4 ?? <ButtonVerticalStack label={"Tab 4"} selected={false} />}</div>
        <ButtonVerticalStack
          style={{
            position: "relative",
            width: 48,
            height: 40,
            flexShrink: 0,
          }}
          label={"Tab 5"}
          selected={false}
        />
        <ButtonVerticalStack
          style={{
            position: "relative",
            width: 48,
            height: 40,
            flexShrink: 0,
          }}
          label={"Tab 6"}
          selected={false}
        />
        <ButtonVerticalStack
          style={{
            position: "relative",
            width: 48,
            height: 40,
            flexShrink: 0,
          }}
          label={"Tab 7"}
          selected={false}
        />
        <ButtonVerticalStack
          style={{
            position: "relative",
            width: 48,
            height: 40,
            flexShrink: 0,
          }}
          label={"Tab 8"}
          selected={false}
        />
      </div>
    </div>
  );
  const __body6 = () => (
    <div className={props.className} style={{
      width: 1210,
      height: 65,
      backgroundColor: "rgb(255,51,0)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 1210,
          height: 65,
        }}>
        <Materials
          style={{ transform: "scale(12.100, 0.650)", transformOrigin: "0 0" }}
          style2={"chrome"}
        />
      </div>
      <div style={{
        position: "absolute",
        left: 156.064,
        top: 7,
        width: 897.873,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
        flexWrap: "nowrap",
      }}>
        <div style={{
            position: "relative",
            width: 48,
            height: 40,
            flexShrink: 0,
          }}>{props.icon1 ?? <ButtonVerticalStack label={"Tab 1"} selected={false} />}</div>
        <div style={{
            position: "relative",
            width: 48,
            height: 40,
            flexShrink: 0,
          }}>{props.icon2 ?? <ButtonVerticalStack label={"Tab 2"} selected={true} />}</div>
        <div style={{
            position: "relative",
            width: 48,
            height: 40,
            flexShrink: 0,
          }}>{props.icon3 ?? <ButtonVerticalStack label={"Tab 3"} selected={false} />}</div>
        <div style={{
            position: "relative",
            width: 48,
            height: 40,
            flexShrink: 0,
          }}>{props.icon4 ?? <ButtonVerticalStack label={"Tab 4"} selected={false} />}</div>
        <ButtonVerticalStack
          style={{
            position: "relative",
            width: 48,
            height: 40,
            flexShrink: 0,
          }}
          label={"Tab 5"}
          selected={false}
        />
        <ButtonVerticalStack
          style={{
            position: "relative",
            width: 48,
            height: 40,
            flexShrink: 0,
          }}
          label={"Tab 6"}
          selected={false}
        />
        <ButtonVerticalStack
          style={{
            position: "relative",
            width: 48,
            height: 40,
            flexShrink: 0,
          }}
          label={"Tab 7"}
          selected={false}
        />
        <ButtonVerticalStack
          style={{
            position: "relative",
            width: 48,
            height: 40,
            flexShrink: 0,
          }}
          label={"Tab 8"}
          selected={false}
        />
      </div>
    </div>
  );
  const __body7 = () => (
    <div className={props.className} style={{
      width: 1210,
      height: 65,
      backgroundColor: "rgb(255,51,0)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 1210,
          height: 65,
        }}>
        <Materials
          style={{ transform: "scale(12.100, 0.650)", transformOrigin: "0 0" }}
          style2={"chrome"}
        />
      </div>
      <div style={{
        position: "absolute",
        left: 156.064,
        top: 7,
        width: 897.873,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
        flexWrap: "nowrap",
      }}>
        <div style={{
            position: "relative",
            width: 48,
            height: 40,
            flexShrink: 0,
          }}>{props.icon1 ?? <ButtonVerticalStack label={"Tab 1"} selected={true} />}</div>
        <div style={{
            position: "relative",
            width: 48,
            height: 40,
            flexShrink: 0,
          }}>{props.icon2 ?? <ButtonVerticalStack label={"Tab 2"} selected={false} />}</div>
        <div style={{
            position: "relative",
            width: 48,
            height: 40,
            flexShrink: 0,
          }}>{props.icon3 ?? <ButtonVerticalStack label={"Tab 3"} selected={false} />}</div>
        <div style={{
            position: "relative",
            width: 48,
            height: 40,
            flexShrink: 0,
          }}>{props.icon4 ?? <ButtonVerticalStack label={"Tab 4"} selected={false} />}</div>
        <ButtonVerticalStack
          style={{
            position: "relative",
            width: 48,
            height: 40,
            flexShrink: 0,
          }}
          label={"Tab 5"}
          selected={false}
        />
        <ButtonVerticalStack
          style={{
            position: "relative",
            width: 48,
            height: 40,
            flexShrink: 0,
          }}
          label={"Tab 6"}
          selected={false}
        />
        <ButtonVerticalStack
          style={{
            position: "relative",
            width: 48,
            height: 40,
            flexShrink: 0,
          }}
          label={"Tab 7"}
          selected={false}
        />
        <ButtonVerticalStack
          style={{
            position: "relative",
            width: 48,
            height: 40,
            flexShrink: 0,
          }}
          label={"Tab 8"}
          selected={false}
        />
      </div>
    </div>
  );
  const __body8 = () => (
    <div className={props.className} style={{
      width: 1210,
      height: 65,
      backgroundColor: "rgb(255,51,0)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 1210,
          height: 65,
        }}>
        <Materials
          style={{ transform: "scale(12.100, 0.650)", transformOrigin: "0 0" }}
          style2={"chrome"}
        />
      </div>
      <div style={{
        position: "absolute",
        left: 243.216,
        top: 7,
        width: 723.568,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
        flexWrap: "nowrap",
      }}>
        <div style={{
            position: "relative",
            width: 48,
            height: 40,
            flexShrink: 0,
          }}>{props.icon1 ?? <ButtonVerticalStack label={"Tab 1"} selected={false} />}</div>
        <div style={{
            position: "relative",
            width: 48,
            height: 40,
            flexShrink: 0,
          }}>{props.icon2 ?? <ButtonVerticalStack label={"Tab 2"} selected={false} />}</div>
        <div style={{
            position: "relative",
            width: 48,
            height: 40,
            flexShrink: 0,
          }}>{props.icon3 ?? <ButtonVerticalStack label={"Tab 3"} selected={false} />}</div>
        <div style={{
            position: "relative",
            width: 48,
            height: 40,
            flexShrink: 0,
          }}>{props.icon4 ?? <ButtonVerticalStack label={"Tab 4"} selected={false} />}</div>
        <ButtonVerticalStack
          style={{
            position: "relative",
            width: 48,
            height: 40,
            flexShrink: 0,
          }}
          label={"Tab 5"}
          selected={false}
        />
        <ButtonVerticalStack
          style={{
            position: "relative",
            width: 48,
            height: 40,
            flexShrink: 0,
          }}
          label={"Tab 6"}
          selected={false}
        />
        <ButtonVerticalStack
          style={{
            position: "relative",
            width: 48,
            height: 40,
            flexShrink: 0,
          }}
          label={"Tab 7"}
          selected={true}
        />
      </div>
    </div>
  );
  const __body9 = () => (
    <div className={props.className} style={{
      width: 1210,
      height: 65,
      backgroundColor: "rgb(255,51,0)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 1210,
          height: 65,
        }}>
        <Materials
          style={{ transform: "scale(12.100, 0.650)", transformOrigin: "0 0" }}
          style2={"chrome"}
        />
      </div>
      <div style={{
        position: "absolute",
        left: 243.216,
        top: 7,
        width: 723.568,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
        flexWrap: "nowrap",
      }}>
        <div style={{
            position: "relative",
            width: 48,
            height: 40,
            flexShrink: 0,
          }}>{props.icon1 ?? <ButtonVerticalStack label={"Tab 1"} selected={false} />}</div>
        <div style={{
            position: "relative",
            width: 48,
            height: 40,
            flexShrink: 0,
          }}>{props.icon2 ?? <ButtonVerticalStack label={"Tab 2"} selected={false} />}</div>
        <div style={{
            position: "relative",
            width: 48,
            height: 40,
            flexShrink: 0,
          }}>{props.icon3 ?? <ButtonVerticalStack label={"Tab 3"} selected={false} />}</div>
        <div style={{
            position: "relative",
            width: 48,
            height: 40,
            flexShrink: 0,
          }}>{props.icon4 ?? <ButtonVerticalStack label={"Tab 4"} selected={false} />}</div>
        <ButtonVerticalStack
          style={{
            position: "relative",
            width: 48,
            height: 40,
            flexShrink: 0,
          }}
          label={"Tab 5"}
          selected={false}
        />
        <ButtonVerticalStack
          style={{
            position: "relative",
            width: 48,
            height: 40,
            flexShrink: 0,
          }}
          label={"Tab 6"}
          selected={true}
        />
        <ButtonVerticalStack
          style={{
            position: "relative",
            width: 48,
            height: 40,
            flexShrink: 0,
          }}
          label={"Tab 7"}
          selected={false}
        />
      </div>
    </div>
  );
  const __body10 = () => (
    <div className={props.className} style={{
      width: 1210,
      height: 65,
      backgroundColor: "rgb(255,51,0)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 1210,
          height: 65,
        }}>
        <Materials
          style={{ transform: "scale(12.100, 0.650)", transformOrigin: "0 0" }}
          style2={"chrome"}
        />
      </div>
      <div style={{
        position: "absolute",
        left: 243.216,
        top: 7,
        width: 723.568,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
        flexWrap: "nowrap",
      }}>
        <div style={{
            position: "relative",
            width: 48,
            height: 40,
            flexShrink: 0,
          }}>{props.icon1 ?? <ButtonVerticalStack label={"Tab 1"} selected={false} />}</div>
        <div style={{
            position: "relative",
            width: 48,
            height: 40,
            flexShrink: 0,
          }}>{props.icon2 ?? <ButtonVerticalStack label={"Tab 2"} selected={false} />}</div>
        <div style={{
            position: "relative",
            width: 48,
            height: 40,
            flexShrink: 0,
          }}>{props.icon3 ?? <ButtonVerticalStack label={"Tab 3"} selected={false} />}</div>
        <div style={{
            position: "relative",
            width: 48,
            height: 40,
            flexShrink: 0,
          }}>{props.icon4 ?? <ButtonVerticalStack label={"Tab 4"} selected={false} />}</div>
        <ButtonVerticalStack
          style={{
            position: "relative",
            width: 48,
            height: 40,
            flexShrink: 0,
          }}
          label={"Tab 5"}
          selected={true}
        />
        <ButtonVerticalStack
          style={{
            position: "relative",
            width: 48,
            height: 40,
            flexShrink: 0,
          }}
          label={"Tab 6"}
          selected={false}
        />
        <ButtonVerticalStack
          style={{
            position: "relative",
            width: 48,
            height: 40,
            flexShrink: 0,
          }}
          label={"Tab 7"}
          selected={false}
        />
      </div>
    </div>
  );
  const __body11 = () => (
    <div className={props.className} style={{
      width: 1210,
      height: 65,
      backgroundColor: "rgb(255,51,0)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 1210,
          height: 65,
        }}>
        <Materials
          style={{ transform: "scale(12.100, 0.650)", transformOrigin: "0 0" }}
          style2={"chrome"}
        />
      </div>
      <div style={{
        position: "absolute",
        left: 243.216,
        top: 7,
        width: 723.568,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
        flexWrap: "nowrap",
      }}>
        <div style={{
            position: "relative",
            width: 48,
            height: 40,
            flexShrink: 0,
          }}>{props.icon1 ?? <ButtonVerticalStack label={"Tab 1"} selected={false} />}</div>
        <div style={{
            position: "relative",
            width: 48,
            height: 40,
            flexShrink: 0,
          }}>{props.icon2 ?? <ButtonVerticalStack label={"Tab 2"} selected={false} />}</div>
        <div style={{
            position: "relative",
            width: 48,
            height: 40,
            flexShrink: 0,
          }}>{props.icon3 ?? <ButtonVerticalStack label={"Tab 3"} selected={false} />}</div>
        <div style={{
            position: "relative",
            width: 48,
            height: 40,
            flexShrink: 0,
          }}>{props.icon4 ?? <ButtonVerticalStack label={"Tab 4"} selected={true} />}</div>
        <ButtonVerticalStack
          style={{
            position: "relative",
            width: 48,
            height: 40,
            flexShrink: 0,
          }}
          label={"Tab 5"}
          selected={false}
        />
        <ButtonVerticalStack
          style={{
            position: "relative",
            width: 48,
            height: 40,
            flexShrink: 0,
          }}
          label={"Tab 6"}
          selected={false}
        />
        <ButtonVerticalStack
          style={{
            position: "relative",
            width: 48,
            height: 40,
            flexShrink: 0,
          }}
          label={"Tab 7"}
          selected={false}
        />
      </div>
    </div>
  );
  const __body12 = () => (
    <div className={props.className} style={{
      width: 1210,
      height: 65,
      backgroundColor: "rgb(255,51,0)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 1210,
          height: 65,
        }}>
        <Materials
          style={{ transform: "scale(12.100, 0.650)", transformOrigin: "0 0" }}
          style2={"chrome"}
        />
      </div>
      <div style={{
        position: "absolute",
        left: 243.216,
        top: 7,
        width: 723.568,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
        flexWrap: "nowrap",
      }}>
        <div style={{
            position: "relative",
            width: 48,
            height: 40,
            flexShrink: 0,
          }}>{props.icon1 ?? <ButtonVerticalStack label={"Tab 1"} selected={false} />}</div>
        <div style={{
            position: "relative",
            width: 48,
            height: 40,
            flexShrink: 0,
          }}>{props.icon2 ?? <ButtonVerticalStack label={"Tab 2"} selected={false} />}</div>
        <div style={{
            position: "relative",
            width: 48,
            height: 40,
            flexShrink: 0,
          }}>{props.icon3 ?? <ButtonVerticalStack label={"Tab 3"} selected={true} />}</div>
        <div style={{
            position: "relative",
            width: 48,
            height: 40,
            flexShrink: 0,
          }}>{props.icon4 ?? <ButtonVerticalStack label={"Tab 4"} selected={false} />}</div>
        <ButtonVerticalStack
          style={{
            position: "relative",
            width: 48,
            height: 40,
            flexShrink: 0,
          }}
          label={"Tab 5"}
          selected={false}
        />
        <ButtonVerticalStack
          style={{
            position: "relative",
            width: 48,
            height: 40,
            flexShrink: 0,
          }}
          label={"Tab 6"}
          selected={false}
        />
        <ButtonVerticalStack
          style={{
            position: "relative",
            width: 48,
            height: 40,
            flexShrink: 0,
          }}
          label={"Tab 7"}
          selected={false}
        />
      </div>
    </div>
  );
  const __body13 = () => (
    <div className={props.className} style={{
      width: 1210,
      height: 65,
      backgroundColor: "rgb(255,51,0)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 1210,
          height: 65,
        }}>
        <Materials
          style={{ transform: "scale(12.100, 0.650)", transformOrigin: "0 0" }}
          style2={"chrome"}
        />
      </div>
      <div style={{
        position: "absolute",
        left: 243.216,
        top: 7,
        width: 723.568,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
        flexWrap: "nowrap",
      }}>
        <div style={{
            position: "relative",
            width: 48,
            height: 40,
            flexShrink: 0,
          }}>{props.icon1 ?? <ButtonVerticalStack label={"Tab 1"} selected={false} />}</div>
        <div style={{
            position: "relative",
            width: 48,
            height: 40,
            flexShrink: 0,
          }}>{props.icon2 ?? <ButtonVerticalStack label={"Tab 2"} selected={true} />}</div>
        <div style={{
            position: "relative",
            width: 48,
            height: 40,
            flexShrink: 0,
          }}>{props.icon3 ?? <ButtonVerticalStack label={"Tab 3"} selected={false} />}</div>
        <div style={{
            position: "relative",
            width: 48,
            height: 40,
            flexShrink: 0,
          }}>{props.icon4 ?? <ButtonVerticalStack label={"Tab 4"} selected={false} />}</div>
        <ButtonVerticalStack
          style={{
            position: "relative",
            width: 48,
            height: 40,
            flexShrink: 0,
          }}
          label={"Tab 5"}
          selected={false}
        />
        <ButtonVerticalStack
          style={{
            position: "relative",
            width: 48,
            height: 40,
            flexShrink: 0,
          }}
          label={"Tab 6"}
          selected={false}
        />
        <ButtonVerticalStack
          style={{
            position: "relative",
            width: 48,
            height: 40,
            flexShrink: 0,
          }}
          label={"Tab 7"}
          selected={false}
        />
      </div>
    </div>
  );
  const __body14 = () => (
    <div className={props.className} style={{
      width: 1210,
      height: 65,
      backgroundColor: "rgb(255,51,0)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 1210,
          height: 65,
        }}>
        <Materials
          style={{ transform: "scale(12.100, 0.650)", transformOrigin: "0 0" }}
          style2={"chrome"}
        />
      </div>
      <div style={{
        position: "absolute",
        left: 243.216,
        top: 7,
        width: 723.568,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
        flexWrap: "nowrap",
      }}>
        <div style={{
            position: "relative",
            width: 48,
            height: 40,
            flexShrink: 0,
          }}>{props.icon1 ?? <ButtonVerticalStack label={"Tab 1"} selected={true} />}</div>
        <div style={{
            position: "relative",
            width: 48,
            height: 40,
            flexShrink: 0,
          }}>{props.icon2 ?? <ButtonVerticalStack label={"Tab 2"} selected={false} />}</div>
        <div style={{
            position: "relative",
            width: 48,
            height: 40,
            flexShrink: 0,
          }}>{props.icon3 ?? <ButtonVerticalStack label={"Tab 3"} selected={false} />}</div>
        <div style={{
            position: "relative",
            width: 48,
            height: 40,
            flexShrink: 0,
          }}>{props.icon4 ?? <ButtonVerticalStack label={"Tab 4"} selected={false} />}</div>
        <ButtonVerticalStack
          style={{
            position: "relative",
            width: 48,
            height: 40,
            flexShrink: 0,
          }}
          label={"Tab 5"}
          selected={false}
        />
        <ButtonVerticalStack
          style={{
            position: "relative",
            width: 48,
            height: 40,
            flexShrink: 0,
          }}
          label={"Tab 6"}
          selected={false}
        />
        <ButtonVerticalStack
          style={{
            position: "relative",
            width: 48,
            height: 40,
            flexShrink: 0,
          }}
          label={"Tab 7"}
          selected={false}
        />
      </div>
    </div>
  );
  const __body15 = () => (
    <div className={props.className} style={{
      width: 1210,
      height: 65,
      backgroundColor: "rgb(255,51,0)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 1210,
          height: 65,
        }}>
        <Materials
          style={{ transform: "scale(12.100, 0.650)", transformOrigin: "0 0" }}
          style2={"chrome"}
        />
      </div>
      <div style={{
        position: "absolute",
        left: 117.554,
        top: 4,
        width: 974.891,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
        flexWrap: "nowrap",
      }}>
        <ButtonHorizontalStack
          style={{ position: "relative", width: 103, flexShrink: 0 }}
          label={"Tab 1"}
          selected={false}
        />
        <ButtonHorizontalStack
          style={{ position: "relative", width: 103, flexShrink: 0 }}
          label={"Tab 2"}
          selected={false}
        />
        <ButtonHorizontalStack
          style={{ position: "relative", width: 103, flexShrink: 0 }}
          label={"Tab 3"}
          selected={false}
        />
        <ButtonHorizontalStack
          style={{ position: "relative", width: 103, flexShrink: 0 }}
          label={"Tab 4"}
          selected={false}
        />
        <ButtonHorizontalStack
          style={{ position: "relative", width: 103, flexShrink: 0 }}
          label={"Tab 5"}
          selected={false}
        />
        <ButtonHorizontalStack
          style={{ position: "relative", width: 103, flexShrink: 0 }}
          label={"Tab 6"}
          selected={true}
        />
      </div>
    </div>
  );
  const __body16 = () => (
    <div className={props.className} style={{
      width: 1210,
      height: 65,
      backgroundColor: "rgb(255,51,0)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 1210,
          height: 65,
        }}>
        <Materials
          style={{ transform: "scale(12.100, 0.650)", transformOrigin: "0 0" }}
          style2={"chrome"}
        />
      </div>
      <div style={{
        position: "absolute",
        left: 117.554,
        top: 4,
        width: 974.891,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
        flexWrap: "nowrap",
      }}>
        <ButtonHorizontalStack
          style={{ position: "relative", width: 103, flexShrink: 0 }}
          label={"Tab 1"}
          selected={false}
        />
        <ButtonHorizontalStack
          style={{ position: "relative", width: 103, flexShrink: 0 }}
          label={"Tab 2"}
          selected={false}
        />
        <ButtonHorizontalStack
          style={{ position: "relative", width: 103, flexShrink: 0 }}
          label={"Tab 3"}
          selected={false}
        />
        <ButtonHorizontalStack
          style={{ position: "relative", width: 103, flexShrink: 0 }}
          label={"Tab 4"}
          selected={false}
        />
        <ButtonHorizontalStack
          style={{ position: "relative", width: 103, flexShrink: 0 }}
          label={"Tab 5"}
          selected={true}
        />
        <ButtonHorizontalStack
          style={{ position: "relative", width: 103, flexShrink: 0 }}
          label={"Tab 6"}
          selected={false}
        />
      </div>
    </div>
  );
  const __body17 = () => (
    <div className={props.className} style={{
      width: 1210,
      height: 65,
      backgroundColor: "rgb(255,51,0)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 1210,
          height: 65,
        }}>
        <Materials
          style={{ transform: "scale(12.100, 0.650)", transformOrigin: "0 0" }}
          style2={"chrome"}
        />
      </div>
      <div style={{
        position: "absolute",
        left: 117.554,
        top: 4,
        width: 974.891,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
        flexWrap: "nowrap",
      }}>
        <ButtonHorizontalStack
          style={{ position: "relative", width: 103, flexShrink: 0 }}
          label={"Tab 1"}
          selected={false}
        />
        <ButtonHorizontalStack
          style={{ position: "relative", width: 103, flexShrink: 0 }}
          label={"Tab 2"}
          selected={false}
        />
        <ButtonHorizontalStack
          style={{ position: "relative", width: 103, flexShrink: 0 }}
          label={"Tab 3"}
          selected={false}
        />
        <ButtonHorizontalStack
          style={{ position: "relative", width: 103, flexShrink: 0 }}
          label={"Tab 4"}
          selected={true}
        />
        <ButtonHorizontalStack
          style={{ position: "relative", width: 103, flexShrink: 0 }}
          label={"Tab 5"}
          selected={false}
        />
        <ButtonHorizontalStack
          style={{ position: "relative", width: 103, flexShrink: 0 }}
          label={"Tab 6"}
          selected={false}
        />
      </div>
    </div>
  );
  const __body18 = () => (
    <div className={props.className} style={{
      width: 1210,
      height: 65,
      backgroundColor: "rgb(255,51,0)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 1210,
          height: 65,
        }}>
        <Materials
          style={{ transform: "scale(12.100, 0.650)", transformOrigin: "0 0" }}
          style2={"chrome"}
        />
      </div>
      <div style={{
        position: "absolute",
        left: 117.554,
        top: 4,
        width: 974.891,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
        flexWrap: "nowrap",
      }}>
        <ButtonHorizontalStack
          style={{ position: "relative", width: 103, flexShrink: 0 }}
          label={"Tab 1"}
          selected={false}
        />
        <ButtonHorizontalStack
          style={{ position: "relative", width: 103, flexShrink: 0 }}
          label={"Tab 2"}
          selected={false}
        />
        <ButtonHorizontalStack
          style={{ position: "relative", width: 103, flexShrink: 0 }}
          label={"Tab 3"}
          selected={true}
        />
        <ButtonHorizontalStack
          style={{ position: "relative", width: 103, flexShrink: 0 }}
          label={"Tab 4"}
          selected={false}
        />
        <ButtonHorizontalStack
          style={{ position: "relative", width: 103, flexShrink: 0 }}
          label={"Tab 5"}
          selected={false}
        />
        <ButtonHorizontalStack
          style={{ position: "relative", width: 103, flexShrink: 0 }}
          label={"Tab 6"}
          selected={false}
        />
      </div>
    </div>
  );
  const __body19 = () => (
    <div className={props.className} style={{
      width: 1210,
      height: 65,
      backgroundColor: "rgb(255,51,0)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 1210,
          height: 65,
        }}>
        <Materials
          style={{ transform: "scale(12.100, 0.650)", transformOrigin: "0 0" }}
          style2={"chrome"}
        />
      </div>
      <div style={{
        position: "absolute",
        left: 117.554,
        top: 4,
        width: 974.891,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
        flexWrap: "nowrap",
      }}>
        <ButtonHorizontalStack
          style={{ position: "relative", width: 103, flexShrink: 0 }}
          label={"Tab 1"}
          selected={false}
        />
        <ButtonHorizontalStack
          style={{ position: "relative", width: 103, flexShrink: 0 }}
          label={"Tab 2"}
          selected={true}
        />
        <ButtonHorizontalStack
          style={{ position: "relative", width: 103, flexShrink: 0 }}
          label={"Tab 3"}
          selected={false}
        />
        <ButtonHorizontalStack
          style={{ position: "relative", width: 103, flexShrink: 0 }}
          label={"Tab 4"}
          selected={false}
        />
        <ButtonHorizontalStack
          style={{ position: "relative", width: 103, flexShrink: 0 }}
          label={"Tab 5"}
          selected={false}
        />
        <ButtonHorizontalStack
          style={{ position: "relative", width: 103, flexShrink: 0 }}
          label={"Tab 6"}
          selected={false}
        />
      </div>
    </div>
  );
  const __body20 = () => (
    <div className={props.className} style={{
      width: 1210,
      height: 65,
      backgroundColor: "rgb(255,51,0)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 1210,
          height: 65,
        }}>
        <Materials
          style={{ transform: "scale(12.100, 0.650)", transformOrigin: "0 0" }}
          style2={"chrome"}
        />
      </div>
      <div style={{
        position: "absolute",
        left: 117.554,
        top: 4,
        width: 974.891,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
        flexWrap: "nowrap",
      }}>
        <ButtonHorizontalStack
          style={{ position: "relative", width: 103, flexShrink: 0 }}
          label={"Tab 1"}
          selected={true}
        />
        <ButtonHorizontalStack
          style={{ position: "relative", width: 103, flexShrink: 0 }}
          label={"Tab 2"}
          selected={false}
        />
        <ButtonHorizontalStack
          style={{ position: "relative", width: 103, flexShrink: 0 }}
          label={"Tab 3"}
          selected={false}
        />
        <ButtonHorizontalStack
          style={{ position: "relative", width: 103, flexShrink: 0 }}
          label={"Tab 4"}
          selected={false}
        />
        <ButtonHorizontalStack
          style={{ position: "relative", width: 103, flexShrink: 0 }}
          label={"Tab 5"}
          selected={false}
        />
        <ButtonHorizontalStack
          style={{ position: "relative", width: 103, flexShrink: 0 }}
          label={"Tab 6"}
          selected={false}
        />
      </div>
    </div>
  );
  const __body21 = () => (
    <div className={props.className} style={{
      width: 1210,
      height: 65,
      backgroundColor: "rgb(255,51,0)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 1210,
          height: 65,
        }}>
        <Materials
          style={{ transform: "scale(12.100, 0.650)", transformOrigin: "0 0" }}
          style2={"chrome"}
        />
      </div>
      <div style={{
        position: "absolute",
        left: 142.889,
        top: 4,
        width: 924.221,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
        flexWrap: "nowrap",
      }}>
        <ButtonHorizontalStack
          style={{ position: "relative", width: 103, flexShrink: 0 }}
          label={"Tab 1"}
          selected={false}
        />
        <ButtonHorizontalStack
          style={{ position: "relative", width: 103, flexShrink: 0 }}
          label={"Tab 2"}
          selected={false}
        />
        <ButtonHorizontalStack
          style={{ position: "relative", width: 103, flexShrink: 0 }}
          label={"Tab 3"}
          selected={false}
        />
        <ButtonHorizontalStack
          style={{ position: "relative", width: 103, flexShrink: 0 }}
          label={"Tab 4"}
          selected={false}
        />
        <ButtonHorizontalStack
          style={{ position: "relative", width: 103, flexShrink: 0 }}
          label={"Tab 5"}
          selected={true}
        />
      </div>
    </div>
  );
  const __body22 = () => (
    <div className={props.className} style={{
      width: 1210,
      height: 65,
      backgroundColor: "rgb(255,51,0)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 1210,
          height: 65,
        }}>
        <Materials
          style={{ transform: "scale(12.100, 0.650)", transformOrigin: "0 0" }}
          style2={"chrome"}
        />
      </div>
      <div style={{
        position: "absolute",
        left: 142.889,
        top: 4,
        width: 924.221,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
        flexWrap: "nowrap",
      }}>
        <ButtonHorizontalStack
          style={{ position: "relative", width: 103, flexShrink: 0 }}
          label={"Tab 1"}
          selected={false}
        />
        <ButtonHorizontalStack
          style={{ position: "relative", width: 103, flexShrink: 0 }}
          label={"Tab 2"}
          selected={false}
        />
        <ButtonHorizontalStack
          style={{ position: "relative", width: 103, flexShrink: 0 }}
          symbol={"􀋃"}
          label={"Tab 3"}
          selected={false}
        />
        <ButtonHorizontalStack
          style={{ position: "relative", width: 103, flexShrink: 0 }}
          label={"Tab 4"}
          selected={true}
        />
        <ButtonHorizontalStack
          style={{ position: "relative", width: 103, flexShrink: 0 }}
          label={"Tab 5"}
          selected={false}
        />
      </div>
    </div>
  );
  const __body23 = () => (
    <div className={props.className} style={{
      width: 1210,
      height: 65,
      backgroundColor: "rgb(255,51,0)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 1210,
          height: 65,
        }}>
        <Materials
          style={{ transform: "scale(12.100, 0.650)", transformOrigin: "0 0" }}
          style2={"chrome"}
        />
      </div>
      <div style={{
        position: "absolute",
        left: 142.889,
        top: 4,
        width: 924.221,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
        flexWrap: "nowrap",
      }}>
        <ButtonHorizontalStack
          style={{ position: "relative", width: 103, flexShrink: 0 }}
          label={"Tab 1"}
          selected={false}
        />
        <ButtonHorizontalStack
          style={{ position: "relative", width: 103, flexShrink: 0 }}
          label={"Tab 2"}
          selected={false}
        />
        <ButtonHorizontalStack
          style={{ position: "relative", width: 103, flexShrink: 0 }}
          label={"Tab 3"}
          selected={true}
        />
        <ButtonHorizontalStack
          style={{ position: "relative", width: 103, flexShrink: 0 }}
          label={"Tab 4"}
          selected={false}
        />
        <ButtonHorizontalStack
          style={{ position: "relative", width: 103, flexShrink: 0 }}
          label={"Tab 5"}
          selected={false}
        />
      </div>
    </div>
  );
  const __body24 = () => (
    <div className={props.className} style={{
      width: 1210,
      height: 65,
      backgroundColor: "rgb(255,51,0)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 1210,
          height: 65,
        }}>
        <Materials
          style={{ transform: "scale(12.100, 0.650)", transformOrigin: "0 0" }}
          style2={"chrome"}
        />
      </div>
      <div style={{
        position: "absolute",
        left: 142.889,
        top: 4,
        width: 924.221,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
        flexWrap: "nowrap",
      }}>
        <ButtonHorizontalStack
          style={{ position: "relative", width: 103, flexShrink: 0 }}
          label={"Tab 1"}
          selected={false}
        />
        <ButtonHorizontalStack
          style={{ position: "relative", width: 103, flexShrink: 0 }}
          label={"Tab 2"}
          selected={true}
        />
        <ButtonHorizontalStack
          style={{ position: "relative", width: 103, flexShrink: 0 }}
          label={"Tab 3"}
          selected={false}
        />
        <ButtonHorizontalStack
          style={{ position: "relative", width: 103, flexShrink: 0 }}
          label={"Tab 4"}
          selected={false}
        />
        <ButtonHorizontalStack
          style={{ position: "relative", width: 103, flexShrink: 0 }}
          label={"Tab 5"}
          selected={false}
        />
      </div>
    </div>
  );
  const __body25 = () => (
    <div className={props.className} style={{
      width: 1210,
      height: 65,
      backgroundColor: "rgb(255,51,0)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 1210,
          height: 65,
        }}>
        <Materials
          style={{ transform: "scale(12.100, 0.650)", transformOrigin: "0 0" }}
          style2={"chrome"}
        />
      </div>
      <div style={{
        position: "absolute",
        left: 142.889,
        top: 4,
        width: 924.221,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
        flexWrap: "nowrap",
      }}>
        <ButtonHorizontalStack
          style={{ position: "relative", width: 103, flexShrink: 0 }}
          label={"Tab 1"}
          selected={true}
        />
        <ButtonHorizontalStack
          style={{ position: "relative", width: 103, flexShrink: 0 }}
          label={"Tab 2"}
          selected={false}
        />
        <ButtonHorizontalStack
          style={{ position: "relative", width: 103, flexShrink: 0 }}
          label={"Tab 3"}
          selected={false}
        />
        <ButtonHorizontalStack
          style={{ position: "relative", width: 103, flexShrink: 0 }}
          label={"Tab 4"}
          selected={false}
        />
        <ButtonHorizontalStack
          style={{ position: "relative", width: 103, flexShrink: 0 }}
          label={"Tab 5"}
          selected={false}
        />
      </div>
    </div>
  );
  const __body26 = () => (
    <div className={props.className} style={{
      width: 1210,
      height: 65,
      backgroundColor: "rgb(255,51,0)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 1210,
          height: 65,
        }}>
        <Materials
          style={{ transform: "scale(12.100, 0.650)", transformOrigin: "0 0" }}
          style2={"chrome"}
        />
      </div>
      <div style={{
        position: "absolute",
        left: 184.439,
        top: 4,
        width: 841.122,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
        flexWrap: "nowrap",
      }}>
        <ButtonHorizontalStack
          style={{ position: "relative", width: 103, flexShrink: 0 }}
          label={"Tab 1"}
          selected={false}
        />
        <ButtonHorizontalStack
          style={{ position: "relative", width: 103, flexShrink: 0 }}
          label={"Tab 2"}
          selected={false}
        />
        <ButtonHorizontalStack
          style={{ position: "relative", width: 103, flexShrink: 0 }}
          label={"Tab 3"}
          selected={false}
        />
        <ButtonHorizontalStack
          style={{ position: "relative", width: 103, flexShrink: 0 }}
          label={"Tab 4"}
          selected={true}
        />
      </div>
    </div>
  );
  const __body27 = () => (
    <div className={props.className} style={{
      width: 1210,
      height: 65,
      backgroundColor: "rgb(255,51,0)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 1210,
          height: 65,
        }}>
        <Materials
          style={{ transform: "scale(12.100, 0.650)", transformOrigin: "0 0" }}
          style2={"chrome"}
        />
      </div>
      <div style={{
        position: "absolute",
        left: 184.439,
        top: 4,
        width: 841.122,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
        flexWrap: "nowrap",
      }}>
        <ButtonHorizontalStack
          style={{ position: "relative", width: 103, flexShrink: 0 }}
          label={"Tab 1"}
          selected={false}
        />
        <ButtonHorizontalStack
          style={{ position: "relative", width: 103, flexShrink: 0 }}
          label={"Tab 2"}
          selected={false}
        />
        <ButtonHorizontalStack
          style={{ position: "relative", width: 103, flexShrink: 0 }}
          label={"Tab 3"}
          selected={true}
        />
        <ButtonHorizontalStack
          style={{ position: "relative", width: 103, flexShrink: 0 }}
          label={"Tab 4"}
          selected={false}
        />
      </div>
    </div>
  );
  const __body28 = () => (
    <div className={props.className} style={{
      width: 1210,
      height: 65,
      backgroundColor: "rgb(255,51,0)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 1210,
          height: 65,
        }}>
        <Materials
          style={{ transform: "scale(12.100, 0.650)", transformOrigin: "0 0" }}
          style2={"chrome"}
        />
      </div>
      <div style={{
        position: "absolute",
        left: 184.439,
        top: 4,
        width: 841.122,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
        flexWrap: "nowrap",
      }}>
        <ButtonHorizontalStack
          style={{ position: "relative", width: 103, flexShrink: 0 }}
          label={"Tab 1"}
          selected={false}
        />
        <ButtonHorizontalStack
          style={{ position: "relative", width: 103, flexShrink: 0 }}
          label={"Tab 2"}
          selected={true}
        />
        <ButtonHorizontalStack
          style={{ position: "relative", width: 103, flexShrink: 0 }}
          label={"Tab 3"}
          selected={false}
        />
        <ButtonHorizontalStack
          style={{ position: "relative", width: 103, flexShrink: 0 }}
          label={"Tab 4"}
          selected={false}
        />
      </div>
    </div>
  );
  const __body29 = () => (
    <div className={props.className} style={{
      width: 1210,
      height: 65,
      backgroundColor: "rgb(255,51,0)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 1210,
          height: 65,
        }}>
        <Materials
          style={{ transform: "scale(12.100, 0.650)", transformOrigin: "0 0" }}
          style2={"chrome"}
        />
      </div>
      <div style={{
        position: "absolute",
        left: 184.439,
        top: 4,
        width: 841.122,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
        flexWrap: "nowrap",
      }}>
        <ButtonHorizontalStack
          style={{ position: "relative", width: 103, flexShrink: 0 }}
          label={"Tab 1"}
          selected={true}
        />
        <ButtonHorizontalStack
          style={{ position: "relative", width: 103, flexShrink: 0 }}
          label={"Tab 2"}
          selected={false}
        />
        <ButtonHorizontalStack
          style={{ position: "relative", width: 103, flexShrink: 0 }}
          label={"Tab 3"}
          selected={false}
        />
        <ButtonHorizontalStack
          style={{ position: "relative", width: 103, flexShrink: 0 }}
          label={"Tab 4"}
          selected={false}
        />
      </div>
    </div>
  );
  const __body30 = () => (
    <div className={props.className} style={{
      width: 1210,
      height: 65,
      backgroundColor: "rgb(255,51,0)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 1210,
          height: 65,
        }}>
        <Materials
          style={{ transform: "scale(12.100, 0.650)", transformOrigin: "0 0" }}
          style2={"chrome"}
        />
      </div>
      <div style={{
        position: "absolute",
        left: 240.176,
        top: 4,
        width: 729.648,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
        flexWrap: "nowrap",
      }}>
        <ButtonHorizontalStack
          style={{ position: "relative", width: 103, flexShrink: 0 }}
          label={"Tab 1"}
          selected={false}
        />
        <ButtonHorizontalStack
          style={{ position: "relative", width: 103, flexShrink: 0 }}
          label={"Tab 2"}
          selected={false}
        />
        <ButtonHorizontalStack
          style={{ position: "relative", width: 103, flexShrink: 0 }}
          label={"Tab 3"}
          selected={true}
        />
      </div>
    </div>
  );
  const __body31 = () => (
    <div className={props.className} style={{
      width: 1210,
      height: 65,
      backgroundColor: "rgb(255,51,0)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 1210,
          height: 65,
        }}>
        <Materials
          style={{ transform: "scale(12.100, 0.650)", transformOrigin: "0 0" }}
          style2={"chrome"}
        />
      </div>
      <div style={{
        position: "absolute",
        left: 240.176,
        top: 4,
        width: 729.648,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
        flexWrap: "nowrap",
      }}>
        <ButtonHorizontalStack
          style={{ position: "relative", width: 103, flexShrink: 0 }}
          label={"Tab 1"}
          selected={false}
        />
        <ButtonHorizontalStack
          style={{ position: "relative", width: 103, flexShrink: 0 }}
          label={"Tab 2"}
          selected={true}
        />
        <ButtonHorizontalStack
          style={{ position: "relative", width: 103, flexShrink: 0 }}
          label={"Tab 3"}
          selected={false}
        />
      </div>
    </div>
  );
  const __body32 = () => (
    <div className={props.className} style={{
      width: 1210,
      height: 65,
      backgroundColor: "rgb(255,51,0)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 1210,
          height: 65,
        }}>
        <Materials
          style={{ transform: "scale(12.100, 0.650)", transformOrigin: "0 0" }}
          style2={"chrome"}
        />
      </div>
      <div style={{
        position: "absolute",
        left: 240.176,
        top: 4,
        width: 729.648,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
        flexWrap: "nowrap",
      }}>
        <ButtonHorizontalStack
          style={{ position: "relative", width: 103, flexShrink: 0 }}
          label={"Tab 1"}
          selected={true}
        />
        <ButtonHorizontalStack
          style={{ position: "relative", width: 103, flexShrink: 0 }}
          label={"Tab 2"}
          selected={false}
        />
        <ButtonHorizontalStack
          style={{ position: "relative", width: 103, flexShrink: 0 }}
          label={"Tab 3"}
          selected={false}
        />
      </div>
    </div>
  );
  const __body33 = () => (
    <div className={props.className} style={{
      width: 1210,
      height: 65,
      backgroundColor: "rgb(255,51,0)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 1210,
          height: 65,
        }}>
        <Materials
          style={{ transform: "scale(12.100, 0.650)", transformOrigin: "0 0" }}
          style2={"chrome"}
        />
      </div>
      <div style={{
        position: "absolute",
        left: 358.744,
        top: 4,
        width: 493.526,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
        flexWrap: "nowrap",
      }}>
        <ButtonHorizontalStack
          style={{ position: "relative", width: 103, flexShrink: 0 }}
          label={"Tab 1"}
          selected={false}
        />
        <ButtonHorizontalStack
          style={{ position: "relative", width: 103, flexShrink: 0 }}
          label={"Tab 2"}
          selected={true}
        />
      </div>
    </div>
  );
  const __body34 = () => (
    <div className={props.className} style={{
      width: 1210,
      height: 65,
      backgroundColor: "rgb(255,51,0)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 1210,
          height: 65,
        }}>
        <Materials
          style={{ transform: "scale(12.100, 0.650)", transformOrigin: "0 0" }}
          style2={"chrome"}
        />
      </div>
      <div style={{
        position: "absolute",
        left: 358.744,
        top: 4,
        width: 493.526,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
        flexWrap: "nowrap",
      }}>
        <ButtonHorizontalStack
          style={{ position: "relative", width: 103, flexShrink: 0 }}
          label={"Tab 1"}
          selected={true}
        />
        <ButtonHorizontalStack
          style={{ position: "relative", width: 103, flexShrink: 0 }}
          label={"Tab 2"}
          selected={false}
        />
      </div>
    </div>
  );
  const __impls = {
    // figma: Tabs=8 (8 Selected)
    "tabs=8 (8 selected)": __body0,
    // figma: Tabs=8 (7 Selected)
    "tabs=8 (7 selected)": __body1,
    // figma: Tabs=8 (6 Selected)
    "tabs=8 (6 selected)": __body2,
    // figma: Tabs=8 (5 Selected)
    "tabs=8 (5 selected)": __body3,
    // figma: Tabs=8 (4 Selected)
    "tabs=8 (4 selected)": __body4,
    // figma: Tabs=8 (3 Selected)
    "tabs=8 (3 selected)": __body5,
    // figma: Tabs=8 (2 Selected)
    "tabs=8 (2 selected)": __body6,
    // figma: Tabs=8 (1 Selected)
    "tabs=8 (1 selected)": __body7,
    // figma: Tabs=7 (7 Selected)
    "tabs=7 (7 selected)": __body8,
    // figma: Tabs=7 (6 Selected)
    "tabs=7 (6 selected)": __body9,
    // figma: Tabs=7 (5 Selected)
    "tabs=7 (5 selected)": __body10,
    // figma: Tabs=7 (4 Selected)
    "tabs=7 (4 selected)": __body11,
    // figma: Tabs=7 (3 Selected)
    "tabs=7 (3 selected)": __body12,
    // figma: Tabs=7 (2 Selected)
    "tabs=7 (2 selected)": __body13,
    // figma: Tabs=7 (1 Selected)
    "tabs=7 (1 selected)": __body14,
    // figma: Tabs=6 (6 Selected)
    "tabs=6 (6 selected)": __body15,
    // figma: Tabs=6 (5 Selected)
    "tabs=6 (5 selected)": __body16,
    // figma: Tabs=6 (4 Selected)
    "tabs=6 (4 selected)": __body17,
    // figma: Tabs=6 (3 Selected)
    "tabs=6 (3 selected)": __body18,
    // figma: Tabs=6 (2 Selected)
    "tabs=6 (2 selected)": __body19,
    // figma: Tabs=6 (1 Selected)
    "tabs=6 (1 selected)": __body20,
    // figma: Tabs=5 (5 Selected)
    "tabs=5 (5 selected)": __body21,
    // figma: Tabs=5 (4 Selected)
    "tabs=5 (4 selected)": __body22,
    // figma: Tabs=5 (3 Selected)
    "tabs=5 (3 selected)": __body23,
    // figma: Tabs=5 (2 Selected)
    "tabs=5 (2 selected)": __body24,
    // figma: Tabs=5 (1 Selected)
    "tabs=5 (1 selected)": __body25,
    // figma: Tabs=4 (4 Selected)
    "tabs=4 (4 selected)": __body26,
    // figma: Tabs=4 (3 Selected)
    "tabs=4 (3 selected)": __body27,
    // figma: Tabs=4 (2 Selected)
    "tabs=4 (2 selected)": __body28,
    // figma: Tabs=4 (1 Selected)
    "tabs=4 (1 selected)": __body29,
    // figma: Tabs=3 (3 Selected)
    "tabs=3 (3 selected)": __body30,
    // figma: Tabs=3 (2 Selected)
    "tabs=3 (2 selected)": __body31,
    // figma: Tabs=3 (1 Selected)
    "tabs=3 (1 selected)": __body32,
    // figma: Tabs=2 (2 Selected)
    "tabs=2 (2 selected)": __body33,
    // figma: Tabs=2 (1 Selected)
    "tabs=2 (1 selected)": __body34,
  };
  return (__impls[__vkey(props)] ?? __body34)();
}
export default TabBarIPad;
