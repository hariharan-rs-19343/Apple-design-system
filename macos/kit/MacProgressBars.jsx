import { MacTracks } from './MacTracks.jsx';

// figma node: 121:12207 Progress Bars
export function MacProgressBars(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 400,
      height: 580,
      borderRadius: 2,
      backgroundColor: "var(--mac-section-fill)",
      boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.4)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 50,
        top: 50,
        width: 140,
        height: 480,
        borderRadius: 5,
      }}>
        <div style={{
          position: "absolute",
          left: 20,
          top: 20,
          width: 100,
          height: 10,
          borderRadius: 100,
        }}>
          <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 100,
              height: 10,
            }}>
            <MacTracks
              style={{ transform: "scale(5, 0.500)", transformOrigin: "0 0" }}
              active={true}
              on={false}
              state={"idle"}
              context={"content area"}
            />
          </div>
          <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 10,
              height: 10,
            }}>
            <MacTracks
              style={{ transform: "scale(0.500, 0.500)", transformOrigin: "0 0" }}
              active={true}
              on={true}
              state={"idle"}
              context={"content area"}
            />
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 20,
          top: 40,
          width: 100,
          height: 10,
          borderRadius: 100,
        }}>
          <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 100,
              height: 10,
            }}>
            <MacTracks
              style={{ transform: "scale(5, 0.500)", transformOrigin: "0 0" }}
              active={true}
              on={false}
              state={"idle"}
              context={"content area"}
            />
          </div>
          <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 19,
              height: 10,
            }}>
            <MacTracks
              style={{ transform: "scale(0.950, 0.500)", transformOrigin: "0 0" }}
              active={true}
              on={true}
              state={"idle"}
              context={"content area"}
            />
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 20,
          top: 60,
          width: 100,
          height: 10,
          borderRadius: 100,
        }}>
          <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 100,
              height: 10,
            }}>
            <MacTracks
              style={{ transform: "scale(5, 0.500)", transformOrigin: "0 0" }}
              active={true}
              on={false}
              state={"idle"}
              context={"content area"}
            />
          </div>
          <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 28,
              height: 10,
            }}>
            <MacTracks
              style={{ transform: "scale(1.400, 0.500)", transformOrigin: "0 0" }}
              active={true}
              on={true}
              state={"idle"}
              context={"content area"}
            />
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 20,
          top: 80,
          width: 100,
          height: 10,
          borderRadius: 100,
        }}>
          <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 100,
              height: 10,
            }}>
            <MacTracks
              style={{ transform: "scale(5, 0.500)", transformOrigin: "0 0" }}
              active={true}
              on={false}
              state={"idle"}
              context={"content area"}
            />
          </div>
          <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 37,
              height: 10,
            }}>
            <MacTracks
              style={{ transform: "scale(1.850, 0.500)", transformOrigin: "0 0" }}
              active={true}
              on={true}
              state={"idle"}
              context={"content area"}
            />
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 20,
          top: 100,
          width: 100,
          height: 10,
          borderRadius: 100,
        }}>
          <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 100,
              height: 10,
            }}>
            <MacTracks
              style={{ transform: "scale(5, 0.500)", transformOrigin: "0 0" }}
              active={true}
              on={false}
              state={"idle"}
              context={"content area"}
            />
          </div>
          <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 46,
              height: 10,
            }}>
            <MacTracks
              style={{ transform: "scale(2.300, 0.500)", transformOrigin: "0 0" }}
              active={true}
              on={true}
              state={"idle"}
              context={"content area"}
            />
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 20,
          top: 120,
          width: 100,
          height: 10,
          borderRadius: 100,
        }}>
          <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 100,
              height: 10,
            }}>
            <MacTracks
              style={{ transform: "scale(5, 0.500)", transformOrigin: "0 0" }}
              active={true}
              on={false}
              state={"idle"}
              context={"content area"}
            />
          </div>
          <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 55,
              height: 10,
            }}>
            <MacTracks
              style={{ transform: "scale(2.750, 0.500)", transformOrigin: "0 0" }}
              active={true}
              on={true}
              state={"idle"}
              context={"content area"}
            />
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 20,
          top: 140,
          width: 100,
          height: 10,
          borderRadius: 100,
        }}>
          <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 100,
              height: 10,
            }}>
            <MacTracks
              style={{ transform: "scale(5, 0.500)", transformOrigin: "0 0" }}
              active={true}
              on={false}
              state={"idle"}
              context={"content area"}
            />
          </div>
          <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 64,
              height: 10,
            }}>
            <MacTracks
              style={{ transform: "scale(3.200, 0.500)", transformOrigin: "0 0" }}
              active={true}
              on={true}
              state={"idle"}
              context={"content area"}
            />
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 20,
          top: 160,
          width: 100,
          height: 10,
          borderRadius: 100,
        }}>
          <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 100,
              height: 10,
            }}>
            <MacTracks
              style={{ transform: "scale(5, 0.500)", transformOrigin: "0 0" }}
              active={true}
              on={false}
              state={"idle"}
              context={"content area"}
            />
          </div>
          <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 73,
              height: 10,
            }}>
            <MacTracks
              style={{ transform: "scale(3.650, 0.500)", transformOrigin: "0 0" }}
              active={true}
              on={true}
              state={"idle"}
              context={"content area"}
            />
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 20,
          top: 180,
          width: 100,
          height: 10,
          borderRadius: 100,
        }}>
          <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 100,
              height: 10,
            }}>
            <MacTracks
              style={{ transform: "scale(5, 0.500)", transformOrigin: "0 0" }}
              active={true}
              on={false}
              state={"idle"}
              context={"content area"}
            />
          </div>
          <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 82,
              height: 10,
            }}>
            <MacTracks
              style={{ transform: "scale(4.100, 0.500)", transformOrigin: "0 0" }}
              active={true}
              on={true}
              state={"idle"}
              context={"content area"}
            />
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 20,
          top: 200,
          width: 100,
          height: 10,
          borderRadius: 100,
        }}>
          <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 100,
              height: 10,
            }}>
            <MacTracks
              style={{ transform: "scale(5, 0.500)", transformOrigin: "0 0" }}
              active={true}
              on={false}
              state={"idle"}
              context={"content area"}
            />
          </div>
          <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 91,
              height: 10,
            }}>
            <MacTracks
              style={{ transform: "scale(4.550, 0.500)", transformOrigin: "0 0" }}
              active={true}
              on={true}
              state={"idle"}
              context={"content area"}
            />
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 20,
          top: 220,
          width: 100,
          height: 10,
          borderRadius: 100,
        }}>
          <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 100,
              height: 10,
            }}>
            <MacTracks
              style={{ transform: "scale(5, 0.500)", transformOrigin: "0 0" }}
              active={true}
              on={false}
              state={"idle"}
              context={"content area"}
            />
          </div>
          <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 100,
              height: 10,
            }}>
            <MacTracks
              style={{ transform: "scale(5, 0.500)", transformOrigin: "0 0" }}
              active={true}
              on={true}
              state={"idle"}
              context={"content area"}
            />
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 20,
          top: 250,
          width: 100,
          height: 6,
          borderRadius: 100,
        }}>
          <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 100,
              height: 6,
            }}>
            <MacTracks
              style={{ transform: "scale(5, 0.300)", transformOrigin: "0 0" }}
              active={true}
              on={false}
              state={"idle"}
              context={"content area"}
            />
          </div>
          <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 6,
              height: 6,
            }}>
            <MacTracks
              style={{ transform: "scale(0.300, 0.300)", transformOrigin: "0 0" }}
              active={true}
              on={true}
              state={"idle"}
              context={"content area"}
            />
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 20,
          top: 270,
          width: 100,
          height: 6,
          borderRadius: 100,
        }}>
          <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 100,
              height: 6,
            }}>
            <MacTracks
              style={{ transform: "scale(5, 0.300)", transformOrigin: "0 0" }}
              active={true}
              on={false}
              state={"idle"}
              context={"content area"}
            />
          </div>
          <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 15,
              height: 6,
            }}>
            <MacTracks
              style={{ transform: "scale(0.750, 0.300)", transformOrigin: "0 0" }}
              active={true}
              on={true}
              state={"idle"}
              context={"content area"}
            />
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 20,
          top: 290,
          width: 100,
          height: 6,
          borderRadius: 100,
        }}>
          <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 100,
              height: 6,
            }}>
            <MacTracks
              style={{ transform: "scale(5, 0.300)", transformOrigin: "0 0" }}
              active={true}
              on={false}
              state={"idle"}
              context={"content area"}
            />
          </div>
          <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 26,
              height: 6,
            }}>
            <MacTracks
              style={{ transform: "scale(1.300, 0.300)", transformOrigin: "0 0" }}
              active={true}
              on={true}
              state={"idle"}
              context={"content area"}
            />
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 20,
          top: 310,
          width: 100,
          height: 6,
          borderRadius: 100,
        }}>
          <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 100,
              height: 6,
            }}>
            <MacTracks
              style={{ transform: "scale(5, 0.300)", transformOrigin: "0 0" }}
              active={true}
              on={false}
              state={"idle"}
              context={"content area"}
            />
          </div>
          <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 35,
              height: 6,
            }}>
            <MacTracks
              style={{ transform: "scale(1.750, 0.300)", transformOrigin: "0 0" }}
              active={true}
              on={true}
              state={"idle"}
              context={"content area"}
            />
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 20,
          top: 330,
          width: 100,
          height: 6,
          borderRadius: 100,
        }}>
          <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 100,
              height: 6,
            }}>
            <MacTracks
              style={{ transform: "scale(5, 0.300)", transformOrigin: "0 0" }}
              active={true}
              on={false}
              state={"idle"}
              context={"content area"}
            />
          </div>
          <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 44,
              height: 6,
            }}>
            <MacTracks
              style={{ transform: "scale(2.200, 0.300)", transformOrigin: "0 0" }}
              active={true}
              on={true}
              state={"idle"}
              context={"content area"}
            />
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 20,
          top: 350,
          width: 100,
          height: 6,
          borderRadius: 100,
        }}>
          <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 100,
              height: 6,
            }}>
            <MacTracks
              style={{ transform: "scale(5, 0.300)", transformOrigin: "0 0" }}
              active={true}
              on={false}
              state={"idle"}
              context={"content area"}
            />
          </div>
          <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 54,
              height: 6,
            }}>
            <MacTracks
              style={{ transform: "scale(2.700, 0.300)", transformOrigin: "0 0" }}
              active={true}
              on={true}
              state={"idle"}
              context={"content area"}
            />
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 20,
          top: 370,
          width: 100,
          height: 6,
          borderRadius: 100,
        }}>
          <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 100,
              height: 6,
            }}>
            <MacTracks
              style={{ transform: "scale(5, 0.300)", transformOrigin: "0 0" }}
              active={true}
              on={false}
              state={"idle"}
              context={"content area"}
            />
          </div>
          <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 63,
              height: 6,
            }}>
            <MacTracks
              style={{ transform: "scale(3.150, 0.300)", transformOrigin: "0 0" }}
              active={true}
              on={true}
              state={"idle"}
              context={"content area"}
            />
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 20,
          top: 390,
          width: 100,
          height: 6,
          borderRadius: 100,
        }}>
          <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 100,
              height: 6,
            }}>
            <MacTracks
              style={{ transform: "scale(5, 0.300)", transformOrigin: "0 0" }}
              active={true}
              on={false}
              state={"idle"}
              context={"content area"}
            />
          </div>
          <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 73,
              height: 6,
            }}>
            <MacTracks
              style={{ transform: "scale(3.650, 0.300)", transformOrigin: "0 0" }}
              active={true}
              on={true}
              state={"idle"}
              context={"content area"}
            />
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 20,
          top: 410,
          width: 100,
          height: 6,
          borderRadius: 100,
        }}>
          <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 100,
              height: 6,
            }}>
            <MacTracks
              style={{ transform: "scale(5, 0.300)", transformOrigin: "0 0" }}
              active={true}
              on={false}
              state={"idle"}
              context={"content area"}
            />
          </div>
          <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 82,
              height: 6,
            }}>
            <MacTracks
              style={{ transform: "scale(4.100, 0.300)", transformOrigin: "0 0" }}
              active={true}
              on={true}
              state={"idle"}
              context={"content area"}
            />
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 20,
          top: 430,
          width: 100,
          height: 6,
          borderRadius: 100,
        }}>
          <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 100,
              height: 6,
            }}>
            <MacTracks
              style={{ transform: "scale(5, 0.300)", transformOrigin: "0 0" }}
              active={true}
              on={false}
              state={"idle"}
              context={"content area"}
            />
          </div>
          <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 91,
              height: 6,
            }}>
            <MacTracks
              style={{ transform: "scale(4.550, 0.300)", transformOrigin: "0 0" }}
              active={true}
              on={true}
              state={"idle"}
              context={"content area"}
            />
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 20,
          top: 450,
          width: 100,
          height: 6,
          borderRadius: 100,
        }}>
          <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 100,
              height: 6,
            }}>
            <MacTracks
              style={{ transform: "scale(5, 0.300)", transformOrigin: "0 0" }}
              active={true}
              on={false}
              state={"idle"}
              context={"content area"}
            />
          </div>
          <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 100,
              height: 6,
            }}>
            <MacTracks
              style={{ transform: "scale(5, 0.300)", transformOrigin: "0 0" }}
              active={true}
              on={true}
              state={"idle"}
              context={"content area"}
            />
          </div>
        </div>
      </div>
      <div style={{
        position: "absolute",
        left: 210,
        top: 50,
        width: 140,
        height: 400,
        borderRadius: 5,
      }}>
        <div style={{
          position: "absolute",
          left: 20,
          top: 370,
          width: 100,
          height: 6,
          borderRadius: 100,
        }}>
          <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 100,
              height: 6,
            }}>
            <MacTracks
              style={{ transform: "scale(5, 0.300)", transformOrigin: "0 0" }}
              active={true}
              on={false}
              state={"idle"}
              context={"content area"}
            />
          </div>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 100,
            height: 6,
            clipPath: "inset(0px 52px 0px 0px round 1000px)",
          }}>
            <div style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 100,
                height: 6,
              }}>
              <MacTracks
                style={{ transform: "scale(5, 0.300)", transformOrigin: "0 0" }}
                active={true}
                on={true}
                state={"idle"}
                context={"content area"}
              />
            </div>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 20,
          top: 350,
          width: 100,
          height: 6,
          borderRadius: 100,
        }}>
          <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 100,
              height: 6,
            }}>
            <MacTracks
              style={{ transform: "scale(5, 0.300)", transformOrigin: "0 0" }}
              active={true}
              on={false}
              state={"idle"}
              context={"content area"}
            />
          </div>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 100,
            height: 6,
            clipPath: "inset(0px 26px 0px 26px round 1000px)",
          }}>
            <div style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 100,
                height: 6,
              }}>
              <MacTracks
                style={{ transform: "scale(5, 0.300)", transformOrigin: "0 0" }}
                active={true}
                on={true}
                state={"idle"}
                context={"content area"}
              />
            </div>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 20,
          top: 330,
          width: 100,
          height: 6,
          borderRadius: 100,
        }}>
          <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 100,
              height: 6,
            }}>
            <MacTracks
              style={{ transform: "scale(5, 0.300)", transformOrigin: "0 0" }}
              active={true}
              on={false}
              state={"idle"}
              context={"content area"}
            />
          </div>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 100,
            height: 6,
            clipPath: "inset(0px 0px 0px 52px round 1000px)",
          }}>
            <div style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 100,
                height: 6,
              }}>
              <MacTracks
                style={{ transform: "scale(5, 0.300)", transformOrigin: "0 0" }}
                active={true}
                on={true}
                state={"idle"}
                context={"content area"}
              />
            </div>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 20,
          top: 310,
          width: 100,
          height: 6,
          borderRadius: 100,
        }}>
          <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 100,
              height: 6,
            }}>
            <MacTracks
              style={{ transform: "scale(5, 0.300)", transformOrigin: "0 0" }}
              active={true}
              on={false}
              state={"idle"}
              context={"content area"}
            />
          </div>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 100,
            height: 6,
            clipPath: "inset(0px 0px 0px 52px round 1000px)",
          }}>
            <div style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 100,
                height: 6,
              }}>
              <MacTracks
                style={{ transform: "scale(5, 0.300)", transformOrigin: "0 0" }}
                active={true}
                on={true}
                state={"idle"}
                context={"content area"}
              />
            </div>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 20,
          top: 290,
          width: 100,
          height: 6,
          borderRadius: 100,
        }}>
          <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 100,
              height: 6,
            }}>
            <MacTracks
              style={{ transform: "scale(5, 0.300)", transformOrigin: "0 0" }}
              active={true}
              on={false}
              state={"idle"}
              context={"content area"}
            />
          </div>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 100,
            height: 6,
            clipPath: "inset(0px 26px 0px 26px round 1000px)",
          }}>
            <div style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 100,
                height: 6,
              }}>
              <MacTracks
                style={{ transform: "scale(5, 0.300)", transformOrigin: "0 0" }}
                active={true}
                on={true}
                state={"idle"}
                context={"content area"}
              />
            </div>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 20,
          top: 270,
          width: 100,
          height: 6,
          borderRadius: 100,
        }}>
          <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 100,
              height: 6,
            }}>
            <MacTracks
              style={{ transform: "scale(5, 0.300)", transformOrigin: "0 0" }}
              active={true}
              on={false}
              state={"idle"}
              context={"content area"}
            />
          </div>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 100,
            height: 6,
            clipPath: "inset(0px 52px 0px 0px round 1000px)",
          }}>
            <div style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 100,
                height: 6,
              }}>
              <MacTracks
                style={{ transform: "scale(5, 0.300)", transformOrigin: "0 0" }}
                active={true}
                on={true}
                state={"idle"}
                context={"content area"}
              />
            </div>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 20,
          top: 250,
          width: 100,
          height: 6,
          borderRadius: 100,
        }}>
          <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 100,
              height: 6,
            }}>
            <MacTracks
              style={{ transform: "scale(5, 0.300)", transformOrigin: "0 0" }}
              active={true}
              on={false}
              state={"idle"}
              context={"content area"}
            />
          </div>
          <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 8,
              height: 6,
            }}>
            <MacTracks
              style={{ transform: "scale(0.400, 0.300)", transformOrigin: "0 0" }}
              active={true}
              on={true}
              state={"idle"}
              context={"content area"}
            />
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 20,
          top: 140,
          width: 100,
          height: 10,
          borderRadius: 100,
        }}>
          <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 100,
              height: 10,
            }}>
            <MacTracks
              style={{ transform: "scale(5, 0.500)", transformOrigin: "0 0" }}
              active={true}
              on={false}
              state={"idle"}
              context={"content area"}
            />
          </div>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 100,
            height: 10,
            clipPath: "inset(0px 52px 0px 0px round 1000px)",
          }}>
            <div style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 100,
                height: 10,
              }}>
              <MacTracks
                style={{ transform: "scale(5, 0.500)", transformOrigin: "0 0" }}
                active={true}
                on={true}
                state={"idle"}
                context={"content area"}
              />
            </div>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 20,
          top: 120,
          width: 100,
          height: 10,
          borderRadius: 100,
        }}>
          <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 100,
              height: 10,
            }}>
            <MacTracks
              style={{ transform: "scale(5, 0.500)", transformOrigin: "0 0" }}
              active={true}
              on={false}
              state={"idle"}
              context={"content area"}
            />
          </div>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 100,
            height: 10,
            clipPath: "inset(0px 26px 0px 26px round 1000px)",
          }}>
            <div style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 100,
                height: 10,
              }}>
              <MacTracks
                style={{ transform: "scale(5, 0.500)", transformOrigin: "0 0" }}
                active={true}
                on={true}
                state={"idle"}
                context={"content area"}
              />
            </div>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 20,
          top: 100,
          width: 100,
          height: 10,
          borderRadius: 100,
        }}>
          <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 100,
              height: 10,
            }}>
            <MacTracks
              style={{ transform: "scale(5, 0.500)", transformOrigin: "0 0" }}
              active={true}
              on={false}
              state={"idle"}
              context={"content area"}
            />
          </div>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 100,
            height: 10,
            clipPath: "inset(0px 0px 0px 52px round 1000px)",
          }}>
            <div style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 100,
                height: 10,
              }}>
              <MacTracks
                style={{ transform: "scale(5, 0.500)", transformOrigin: "0 0" }}
                active={true}
                on={true}
                state={"idle"}
                context={"content area"}
              />
            </div>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 20,
          top: 80,
          width: 100,
          height: 10,
          borderRadius: 100,
        }}>
          <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 100,
              height: 10,
            }}>
            <MacTracks
              style={{ transform: "scale(5, 0.500)", transformOrigin: "0 0" }}
              active={true}
              on={false}
              state={"idle"}
              context={"content area"}
            />
          </div>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 100,
            height: 10,
            clipPath: "inset(0px 0px 0px 52px round 1000px)",
          }}>
            <div style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 100,
                height: 10,
              }}>
              <MacTracks
                style={{ transform: "scale(5, 0.500)", transformOrigin: "0 0" }}
                active={true}
                on={true}
                state={"idle"}
                context={"content area"}
              />
            </div>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 20,
          top: 60,
          width: 100,
          height: 10,
          borderRadius: 100,
        }}>
          <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 100,
              height: 10,
            }}>
            <MacTracks
              style={{ transform: "scale(5, 0.500)", transformOrigin: "0 0" }}
              active={true}
              on={false}
              state={"idle"}
              context={"content area"}
            />
          </div>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 100,
            height: 10,
            clipPath: "inset(0px 26px 0px 26px round 1000px)",
          }}>
            <div style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 100,
                height: 10,
              }}>
              <MacTracks
                style={{ transform: "scale(5, 0.500)", transformOrigin: "0 0" }}
                active={true}
                on={true}
                state={"idle"}
                context={"content area"}
              />
            </div>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 20,
          top: 40,
          width: 100,
          height: 10,
          borderRadius: 100,
        }}>
          <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 100,
              height: 10,
            }}>
            <MacTracks
              style={{ transform: "scale(5, 0.500)", transformOrigin: "0 0" }}
              active={true}
              on={false}
              state={"idle"}
              context={"content area"}
            />
          </div>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 100,
            height: 10,
            clipPath: "inset(0px 52px 0px 0px round 1000px)",
          }}>
            <div style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 100,
                height: 10,
              }}>
              <MacTracks
                style={{ transform: "scale(5, 0.500)", transformOrigin: "0 0" }}
                active={true}
                on={true}
                state={"idle"}
                context={"content area"}
              />
            </div>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 20,
          top: 20,
          width: 100,
          height: 10,
          borderRadius: 100,
        }}>
          <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 100,
              height: 10,
            }}>
            <MacTracks
              style={{ transform: "scale(5, 0.500)", transformOrigin: "0 0" }}
              active={true}
              on={false}
              state={"idle"}
              context={"content area"}
            />
          </div>
          <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 10,
              height: 10,
            }}>
            <MacTracks
              style={{ transform: "scale(0.500, 0.500)", transformOrigin: "0 0" }}
              active={true}
              on={true}
              state={"idle"}
              context={"content area"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default MacProgressBars;
