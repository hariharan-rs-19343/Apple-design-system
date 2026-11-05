import { PageControl2 } from './PageControl2.jsx';
import { PageControlPlatterLight } from './PageControlPlatterLight.jsx';

// figma node: 47:60488 Page Control (20 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "mode=" + __venc(p.mode) + '|' + "dots=" + __venc(p.dots) + '|' + "selection=" + __venc(p.selection);

export function PageControl(_p = {}) {
  const props = { ..._p, mode: _p.mode ?? "light", dots: _p.dots ?? "2", selection: _p.selection ?? "leading", platter: _p.platter ?? true };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 393,
      height: 44,
      position: "relative",
      ...props.style,
    }}>
      {props.platter && (
      <div style={{
          position: "absolute",
          left: 128,
          top: 10,
          width: 136,
          height: 24,
        }}>
        <PageControlPlatterLight style={{ transform: "scale(2.720, 1)", transformOrigin: "0 0" }} />
      </div>
      )}
      <div style={{
        position: "absolute",
        left: 137,
        top: 18,
        display: "flex",
        flexDirection: "row",
        gap: 8,
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
      }}>
        <div style={{
          position: "relative",
          width: 6,
          height: 6,
          flexShrink: 0,
        }}>
          <div style={{
              position: "absolute",
              left: 1,
              top: 1,
              width: 4,
              height: 4,
            }}>{props.icon1 ?? <PageControl2 selected={false} style={{ transform: "scale(0.500, 0.500)", transformOrigin: "0 0" }} />}</div>
        </div>
        <div style={{
          position: "relative",
          width: 8,
          height: 8,
          flexShrink: 0,
        }}>
          <div style={{
              position: "absolute",
              left: 1,
              top: 1,
              width: 6,
              height: 6,
            }}>{props.icon2 ?? <PageControl2 selected={false} style={{ transform: "scale(0.750, 0.750)", transformOrigin: "0 0" }} />}</div>
        </div>
        <div style={{
            position: "relative",
            width: 8,
            height: 8,
            flexShrink: 0,
          }}>{props.icon3 ?? <PageControl2 selected={false} />}</div>
        <div style={{
            position: "relative",
            width: 8,
            height: 8,
            flexShrink: 0,
          }}>{props.icon4 ?? <PageControl2 selected={false} />}</div>
        <PageControl2
          style={{
            position: "relative",
            width: 8,
            height: 8,
            flexShrink: 0,
          }}
          selected={false}
        />
        <PageControl2
          style={{
            position: "relative",
            width: 8,
            height: 8,
            flexShrink: 0,
          }}
          selected={false}
        />
        <PageControl2
          style={{
            position: "relative",
            width: 8,
            height: 8,
            flexShrink: 0,
          }}
          selected={false}
        />
        <PageControl2
          style={{
            position: "relative",
            width: 8,
            height: 8,
            flexShrink: 0,
          }}
          selected={true}
        />
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 393,
      height: 44,
      position: "relative",
      ...props.style,
    }}>
      {props.platter && (
      <div style={{
          position: "absolute",
          left: 111,
          top: 10,
          width: 170,
          height: 24,
        }}>
        <PageControlPlatterLight style={{ transform: "scale(3.400, 1)", transformOrigin: "0 0" }} />
      </div>
      )}
      <div style={{
        position: "absolute",
        left: 122,
        top: 18,
        display: "flex",
        flexDirection: "row",
        gap: 8,
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
      }}>
        <div style={{
          position: "relative",
          width: 6,
          height: 6,
          flexShrink: 0,
        }}>
          <div style={{
              position: "absolute",
              left: 1,
              top: 1,
              width: 4,
              height: 4,
            }}>{props.icon1 ?? <PageControl2 selected={false} style={{ transform: "scale(0.500, 0.500)", transformOrigin: "0 0" }} />}</div>
        </div>
        <div style={{
          position: "relative",
          width: 8,
          height: 8,
          flexShrink: 0,
        }}>
          <div style={{
              position: "absolute",
              left: 1,
              top: 1,
              width: 6,
              height: 6,
            }}>{props.icon2 ?? <PageControl2 selected={false} style={{ transform: "scale(0.750, 0.750)", transformOrigin: "0 0" }} />}</div>
        </div>
        <div style={{
            position: "relative",
            width: 8,
            height: 8,
            flexShrink: 0,
          }}>{props.icon3 ?? <PageControl2 selected={false} />}</div>
        <div style={{
            position: "relative",
            width: 8,
            height: 8,
            flexShrink: 0,
          }}>{props.icon4 ?? <PageControl2 selected={false} />}</div>
        <PageControl2
          style={{
            position: "relative",
            width: 8,
            height: 8,
            flexShrink: 0,
          }}
          selected={false}
        />
        <PageControl2
          style={{
            position: "relative",
            width: 8,
            height: 8,
            flexShrink: 0,
          }}
          selected={true}
        />
        <PageControl2
          style={{
            position: "relative",
            width: 8,
            height: 8,
            flexShrink: 0,
          }}
          selected={false}
        />
        <PageControl2
          style={{
            position: "relative",
            width: 8,
            height: 8,
            flexShrink: 0,
          }}
          selected={false}
        />
        <div style={{
          position: "relative",
          width: 8,
          height: 8,
          flexShrink: 0,
        }}>
          <div style={{
              position: "absolute",
              left: 1,
              top: 1,
              width: 6,
              height: 6,
            }}>
            <PageControl2
              style={{ transform: "scale(0.750, 0.750)", transformOrigin: "0 0" }}
              selected={false}
            />
          </div>
        </div>
        <div style={{
          position: "relative",
          width: 6,
          height: 6,
          flexShrink: 0,
        }}>
          <div style={{
              position: "absolute",
              left: 1,
              top: 1,
              width: 4,
              height: 4,
            }}>
            <PageControl2
              style={{ transform: "scale(0.500, 0.500)", transformOrigin: "0 0" }}
              selected={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 393,
      height: 44,
      position: "relative",
      ...props.style,
    }}>
      {props.platter && (
      <div style={{
          position: "absolute",
          left: 128,
          top: 10,
          width: 136,
          height: 24,
        }}>
        <PageControlPlatterLight style={{ transform: "scale(2.720, 1)", transformOrigin: "0 0" }} />
      </div>
      )}
      <div style={{
        position: "absolute",
        left: 137,
        top: 18,
        display: "flex",
        flexDirection: "row",
        gap: 8,
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
      }}>
        <div style={{
            position: "relative",
            width: 8,
            height: 8,
            flexShrink: 0,
          }}>{props.icon1 ?? <PageControl2 selected={true} />}</div>
        <div style={{
            position: "relative",
            width: 8,
            height: 8,
            flexShrink: 0,
          }}>{props.icon2 ?? <PageControl2 selected={false} />}</div>
        <div style={{
            position: "relative",
            width: 8,
            height: 8,
            flexShrink: 0,
          }}>{props.icon3 ?? <PageControl2 selected={false} />}</div>
        <div style={{
            position: "relative",
            width: 8,
            height: 8,
            flexShrink: 0,
          }}>{props.icon4 ?? <PageControl2 selected={false} />}</div>
        <PageControl2
          style={{
            position: "relative",
            width: 8,
            height: 8,
            flexShrink: 0,
          }}
          selected={false}
        />
        <PageControl2
          style={{
            position: "relative",
            width: 8,
            height: 8,
            flexShrink: 0,
          }}
          selected={false}
        />
        <div style={{
          position: "relative",
          width: 8,
          height: 8,
          flexShrink: 0,
        }}>
          <div style={{
              position: "absolute",
              left: 1,
              top: 1,
              width: 6,
              height: 6,
            }}>
            <PageControl2
              style={{ transform: "scale(0.750, 0.750)", transformOrigin: "0 0" }}
              selected={false}
            />
          </div>
        </div>
        <div style={{
          position: "relative",
          width: 6,
          height: 6,
          flexShrink: 0,
        }}>
          <div style={{
              position: "absolute",
              left: 1,
              top: 1,
              width: 4,
              height: 4,
            }}>
            <PageControl2
              style={{ transform: "scale(0.500, 0.500)", transformOrigin: "0 0" }}
              selected={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 393,
      height: 44,
      position: "relative",
      ...props.style,
    }}>
      {props.platter && (
      <div style={{
          position: "absolute",
          left: 136,
          top: 10,
          width: 120,
          height: 24,
        }}>
        <PageControlPlatterLight style={{ transform: "scale(2.400, 1)", transformOrigin: "0 0" }} />
      </div>
      )}
      <div style={{
        position: "absolute",
        left: 144,
        top: 18,
        display: "flex",
        flexDirection: "row",
        gap: 8,
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
      }}>
        <div style={{
          position: "relative",
          width: 8,
          height: 8,
          flexShrink: 0,
        }}>
          <div style={{
              position: "absolute",
              left: 1,
              top: 1,
              width: 6,
              height: 6,
            }}>{props.icon1 ?? <PageControl2 selected={false} style={{ transform: "scale(0.750, 0.750)", transformOrigin: "0 0" }} />}</div>
        </div>
        <div style={{
            position: "relative",
            width: 8,
            height: 8,
            flexShrink: 0,
          }}>{props.icon2 ?? <PageControl2 selected={false} />}</div>
        <div style={{
            position: "relative",
            width: 8,
            height: 8,
            flexShrink: 0,
          }}>{props.icon3 ?? <PageControl2 selected={false} />}</div>
        <div style={{
            position: "relative",
            width: 8,
            height: 8,
            flexShrink: 0,
          }}>{props.icon4 ?? <PageControl2 selected={false} />}</div>
        <PageControl2
          style={{
            position: "relative",
            width: 8,
            height: 8,
            flexShrink: 0,
          }}
          selected={false}
        />
        <PageControl2
          style={{
            position: "relative",
            width: 8,
            height: 8,
            flexShrink: 0,
          }}
          selected={false}
        />
        <PageControl2
          style={{
            position: "relative",
            width: 8,
            height: 8,
            flexShrink: 0,
          }}
          selected={true}
        />
      </div>
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: 393,
      height: 44,
      position: "relative",
      ...props.style,
    }}>
      {props.platter && (
      <div style={{
          position: "absolute",
          left: 136,
          top: 10,
          width: 120,
          height: 24,
        }}>
        <PageControlPlatterLight style={{ transform: "scale(2.400, 1)", transformOrigin: "0 0" }} />
      </div>
      )}
      <div style={{
        position: "absolute",
        left: 144,
        top: 18,
        display: "flex",
        flexDirection: "row",
        gap: 8,
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
      }}>
        <div style={{
            position: "relative",
            width: 8,
            height: 8,
            flexShrink: 0,
          }}>{props.icon1 ?? <PageControl2 selected={true} />}</div>
        <div style={{
            position: "relative",
            width: 8,
            height: 8,
            flexShrink: 0,
          }}>{props.icon2 ?? <PageControl2 selected={false} />}</div>
        <div style={{
            position: "relative",
            width: 8,
            height: 8,
            flexShrink: 0,
          }}>{props.icon3 ?? <PageControl2 selected={false} />}</div>
        <div style={{
            position: "relative",
            width: 8,
            height: 8,
            flexShrink: 0,
          }}>{props.icon4 ?? <PageControl2 selected={false} />}</div>
        <PageControl2
          style={{
            position: "relative",
            width: 8,
            height: 8,
            flexShrink: 0,
          }}
          selected={false}
        />
        <PageControl2
          style={{
            position: "relative",
            width: 8,
            height: 8,
            flexShrink: 0,
          }}
          selected={false}
        />
        <div style={{
          position: "relative",
          width: 8,
          height: 8,
          flexShrink: 0,
        }}>
          <div style={{
              position: "absolute",
              left: 1,
              top: 1,
              width: 6,
              height: 6,
            }}>
            <PageControl2
              style={{ transform: "scale(0.750, 0.750)", transformOrigin: "0 0" }}
              selected={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: 393,
      height: 44,
      position: "relative",
      ...props.style,
    }}>
      {props.platter && (
      <div style={{
          position: "absolute",
          left: 144,
          top: 10,
          width: 104,
          height: 24,
        }}>
        <PageControlPlatterLight style={{ transform: "scale(2.080, 1)", transformOrigin: "0 0" }} />
      </div>
      )}
      <div style={{
        position: "absolute",
        left: 152,
        top: 18,
        display: "flex",
        flexDirection: "row",
        gap: 8,
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
      }}>
        <div style={{
            position: "relative",
            width: 8,
            height: 8,
            flexShrink: 0,
          }}>{props.icon1 ?? <PageControl2 selected={true} />}</div>
        <div style={{
            position: "relative",
            width: 8,
            height: 8,
            flexShrink: 0,
          }}>{props.icon2 ?? <PageControl2 selected={false} />}</div>
        <div style={{
            position: "relative",
            width: 8,
            height: 8,
            flexShrink: 0,
          }}>{props.icon3 ?? <PageControl2 selected={false} />}</div>
        <div style={{
            position: "relative",
            width: 8,
            height: 8,
            flexShrink: 0,
          }}>{props.icon4 ?? <PageControl2 selected={false} />}</div>
        <PageControl2
          style={{
            position: "relative",
            width: 8,
            height: 8,
            flexShrink: 0,
          }}
          selected={false}
        />
        <PageControl2
          style={{
            position: "relative",
            width: 8,
            height: 8,
            flexShrink: 0,
          }}
          selected={false}
        />
      </div>
    </div>
  );
  const __body6 = () => (
    <div className={props.className} style={{
      width: 393,
      height: 44,
      position: "relative",
      ...props.style,
    }}>
      {props.platter && (
      <div style={{
          position: "absolute",
          left: 152,
          top: 10,
          width: 88,
          height: 24,
        }}>
        <PageControlPlatterLight style={{ transform: "scale(1.760, 1)", transformOrigin: "0 0" }} />
      </div>
      )}
      <div style={{
        position: "absolute",
        left: 160,
        top: 18,
        display: "flex",
        flexDirection: "row",
        gap: 8,
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
      }}>
        <div style={{
            position: "relative",
            width: 8,
            height: 8,
            flexShrink: 0,
          }}>{props.icon1 ?? <PageControl2 selected={true} />}</div>
        <div style={{
            position: "relative",
            width: 8,
            height: 8,
            flexShrink: 0,
          }}>{props.icon2 ?? <PageControl2 selected={false} />}</div>
        <div style={{
            position: "relative",
            width: 8,
            height: 8,
            flexShrink: 0,
          }}>{props.icon3 ?? <PageControl2 selected={false} />}</div>
        <div style={{
            position: "relative",
            width: 8,
            height: 8,
            flexShrink: 0,
          }}>{props.icon4 ?? <PageControl2 selected={false} />}</div>
        <PageControl2
          style={{
            position: "relative",
            width: 8,
            height: 8,
            flexShrink: 0,
          }}
          selected={false}
        />
      </div>
    </div>
  );
  const __body7 = () => (
    <div className={props.className} style={{
      width: 393,
      height: 44,
      position: "relative",
      ...props.style,
    }}>
      {props.platter && (
      <div style={{
          position: "absolute",
          left: 154,
          top: 10,
          width: 84,
          height: 24,
        }}>
        <PageControlPlatterLight style={{ transform: "scale(1.680, 1)", transformOrigin: "0 0" }} />
      </div>
      )}
      <div style={{
        position: "absolute",
        left: 168,
        top: 18,
        display: "flex",
        flexDirection: "row",
        gap: 8,
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
      }}>
        <div style={{
            position: "relative",
            width: 8,
            height: 8,
            flexShrink: 0,
          }}>{props.icon1 ?? <PageControl2 selected={true} />}</div>
        <div style={{
            position: "relative",
            width: 8,
            height: 8,
            flexShrink: 0,
          }}>{props.icon2 ?? <PageControl2 selected={false} />}</div>
        <div style={{
            position: "relative",
            width: 8,
            height: 8,
            flexShrink: 0,
          }}>{props.icon3 ?? <PageControl2 selected={false} />}</div>
        <div style={{
            position: "relative",
            width: 8,
            height: 8,
            flexShrink: 0,
          }}>{props.icon4 ?? <PageControl2 selected={false} />}</div>
      </div>
    </div>
  );
  const __body8 = () => (
    <div className={props.className} style={{
      width: 393,
      height: 44,
      position: "relative",
      ...props.style,
    }}>
      {props.platter && (
      <div style={{
          position: "absolute",
          left: 162,
          top: 10,
          width: 66,
          height: 24,
        }}>{props.icon1 ?? <PageControlPlatterLight style={{ transform: "scale(1.320, 1)", transformOrigin: "0 0" }} />}</div>
      )}
      <div style={{
        position: "absolute",
        left: 176,
        top: 18,
        display: "flex",
        flexDirection: "row",
        gap: 8,
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
      }}>
        <div style={{
            position: "relative",
            width: 8,
            height: 8,
            flexShrink: 0,
          }}>{props.icon2 ?? <PageControl2 selected={true} />}</div>
        <div style={{
            position: "relative",
            width: 8,
            height: 8,
            flexShrink: 0,
          }}>{props.icon3 ?? <PageControl2 selected={false} />}</div>
        <div style={{
            position: "relative",
            width: 8,
            height: 8,
            flexShrink: 0,
          }}>{props.icon4 ?? <PageControl2 selected={false} />}</div>
      </div>
    </div>
  );
  const __body9 = () => (
    <div className={props.className} style={{
      width: 393,
      height: 44,
      position: "relative",
      ...props.style,
    }}>
      {props.platter && (
      <div style={{
          position: "absolute",
          left: 171,
          top: 10,
          width: 50,
          height: 24,
        }}>{props.icon1 ?? <PageControlPlatterLight />}</div>
      )}
      <div style={{
        position: "absolute",
        left: 184,
        top: 18,
        display: "flex",
        flexDirection: "row",
        gap: 8,
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
      }}>
        <div style={{
            position: "relative",
            width: 8,
            height: 8,
            flexShrink: 0,
          }}>{props.icon2 ?? <PageControl2 selected={true} />}</div>
        <div style={{
            position: "relative",
            width: 8,
            height: 8,
            flexShrink: 0,
          }}>{props.icon3 ?? <PageControl2 selected={false} />}</div>
      </div>
    </div>
  );
  const __impls = {
    // figma: Mode=Light, Dots=8+, Selection=Trailing
    "mode=light|dots=8+|selection=trailing": __body0,
    // figma: Mode=Light, Dots=8+, Selection=Middle
    "mode=light|dots=8+|selection=middle": __body1,
    // figma: Mode=Light, Dots=8+, Selection=Leading
    "mode=light|dots=8+|selection=leading": __body2,
    // figma: Mode=Light, Dots=7, Selection=Trailing
    "mode=light|dots=7|selection=trailing": __body3,
    // figma: Mode=Light, Dots=7, Selection=Leading
    "mode=light|dots=7|selection=leading": __body4,
    // figma: Mode=Light, Dots=6, Selection=N/A ( <7 Dots )
    "mode=light|dots=6|selection=n/a ( <7 dots )": __body5,
    // figma: Mode=Light, Dots=5, Selection=N/A ( <7 Dots )
    "mode=light|dots=5|selection=n/a ( <7 dots )": __body6,
    // figma: Mode=Light, Dots=4, Selection=N/A ( <7 Dots )
    "mode=light|dots=4|selection=n/a ( <7 dots )": __body7,
    // figma: Mode=Light, Dots=3, Selection=N/A ( <7 Dots )
    "mode=light|dots=3|selection=n/a ( <7 dots )": __body8,
    // figma: Mode=Light, Dots=2, Selection=N/A ( <7 Dots )
    "mode=light|dots=2|selection=n/a ( <7 dots )": __body9,
    // figma: Mode=Dark, Dots=8+, Selection=Trailing
    "mode=dark|dots=8+|selection=trailing": __body0,
    // figma: Mode=Dark, Dots=8+, Selection=Middle
    "mode=dark|dots=8+|selection=middle": __body1,
    // figma: Mode=Dark, Dots=8+, Selection=Leading
    "mode=dark|dots=8+|selection=leading": __body2,
    // figma: Mode=Dark, Dots=7, Selection=Trailing
    "mode=dark|dots=7|selection=trailing": __body3,
    // figma: Mode=Dark, Dots=7, Selection=Leading
    "mode=dark|dots=7|selection=leading": __body4,
    // figma: Mode=Dark, Dots=6, Selection=N/A ( <7 Dots )
    "mode=dark|dots=6|selection=n/a ( <7 dots )": __body5,
    // figma: Mode=Dark, Dots=5, Selection=N/A ( <7 Dots )
    "mode=dark|dots=5|selection=n/a ( <7 dots )": __body6,
    // figma: Mode=Dark, Dots=4, Selection=N/A ( <7 Dots )
    "mode=dark|dots=4|selection=n/a ( <7 dots )": __body7,
    // figma: Mode=Dark, Dots=3, Selection=N/A ( <7 Dots )
    "mode=dark|dots=3|selection=n/a ( <7 dots )": __body8,
    // figma: Mode=Dark, Dots=2, Selection=N/A ( <7 Dots )
    "mode=dark|dots=2|selection=n/a ( <7 dots )": __body9,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default PageControl;
