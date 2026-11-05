import { SidebarLeading } from './SidebarLeading.jsx';
import { SidebarTrailing } from './SidebarTrailing.jsx';

// figma node: 131:70029 Sidebar Row (12 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "state=" + __venc(p.state) + '|' + "indentLevel=" + __venc(p.indentLevel);

export function SidebarRow(_p = {}) {
  const props = { ..._p, state: _p.state ?? "default", indentLevel: _p.indentLevel ?? "0", showTrailing: _p.showTrailing ?? true, showImage: _p.showImage ?? true };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 320,
      height: 44,
      opacity: 0.5,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "0px 8px 0px 50px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showImage && (
      <SidebarLeading
        style={{
          position: "relative",
          flexGrow: 1,
          alignSelf: "stretch",
          width: "auto",
          height: "auto",
        }}
        mode={"light"}
        state={"default"}
        image={"symbol"}
      />
      )}
      {props.showTrailing && (
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <SidebarTrailing mode={"light"} state={"default"} type={"detail"} />}</div>
      )}
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 320,
      height: 44,
      opacity: 0.5,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "0px 8px 0px 30px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showImage && (
      <SidebarLeading
        style={{
          position: "relative",
          flexGrow: 1,
          alignSelf: "stretch",
          width: "auto",
          height: "auto",
        }}
        mode={"light"}
        state={"default"}
        image={"symbol"}
      />
      )}
      {props.showTrailing && (
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <SidebarTrailing mode={"light"} state={"default"} type={"detail"} />}</div>
      )}
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 320,
      height: 44,
      opacity: 0.5,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "0px 8px 0px 10px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showImage && (
      <SidebarLeading
        style={{
          position: "relative",
          flexGrow: 1,
          alignSelf: "stretch",
          width: "auto",
          height: "auto",
        }}
        mode={"light"}
        state={"default"}
        image={"symbol"}
      />
      )}
      {props.showTrailing && (
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <SidebarTrailing mode={"light"} state={"default"} type={"detail"} />}</div>
      )}
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 320,
      height: 44,
      borderRadius: 100,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "0px 8px 0px 50px",
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
        width: 320,
        height: 44,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 320,
          height: 44,
          borderRadius: 100,
          backgroundColor: "var(--fills-vibrant-tertiary)",
        }} />
      </div>
      {props.showImage && (
      <SidebarLeading
        style={{
          position: "relative",
          flexGrow: 1,
          alignSelf: "stretch",
          width: "auto",
          height: "auto",
        }}
        mode={"light"}
        state={"selected"}
        image={"symbol"}
      />
      )}
      {props.showTrailing && (
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <SidebarTrailing mode={"light"} state={"default"} type={"detail"} />}</div>
      )}
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: 320,
      height: 44,
      borderRadius: 100,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "0px 8px 0px 50px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showImage && (
      <SidebarLeading
        style={{
          position: "relative",
          flexGrow: 1,
          alignSelf: "stretch",
          width: "auto",
          height: "auto",
        }}
        mode={"light"}
        state={"selected"}
        image={"symbol"}
      />
      )}
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <SidebarTrailing mode={"light"} state={"default"} type={"disclosure"} />}</div>
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: 320,
      height: 44,
      borderRadius: 100,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "0px 8px 0px 30px",
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
        width: 320,
        height: 44,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 320,
          height: 44,
          borderRadius: 100,
          backgroundColor: "var(--fills-vibrant-tertiary)",
        }} />
      </div>
      {props.showImage && (
      <SidebarLeading
        style={{
          position: "relative",
          flexGrow: 1,
          alignSelf: "stretch",
          width: "auto",
          height: "auto",
        }}
        mode={"light"}
        state={"selected"}
        image={"symbol"}
      />
      )}
      {props.showTrailing && (
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <SidebarTrailing mode={"light"} state={"default"} type={"detail"} />}</div>
      )}
    </div>
  );
  const __body6 = () => (
    <div className={props.className} style={{
      width: 320,
      height: 44,
      borderRadius: 100,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "0px 8px 0px 30px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showImage && (
      <SidebarLeading
        style={{
          position: "relative",
          flexGrow: 1,
          alignSelf: "stretch",
          width: "auto",
          height: "auto",
        }}
        mode={"light"}
        state={"selected"}
        image={"symbol"}
      />
      )}
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <SidebarTrailing mode={"light"} state={"default"} type={"disclosure"} />}</div>
    </div>
  );
  const __body7 = () => (
    <div className={props.className} style={{
      width: 320,
      height: 44,
      borderRadius: 100,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "0px 8px 0px 10px",
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
        width: 320,
        height: 44,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 320,
          height: 44,
          borderRadius: 100,
          backgroundColor: "var(--fills-vibrant-tertiary)",
        }} />
      </div>
      {props.showImage && (
      <SidebarLeading
        style={{
          position: "relative",
          flexGrow: 1,
          alignSelf: "stretch",
          width: "auto",
          height: "auto",
        }}
        mode={"light"}
        state={"selected"}
        image={"symbol"}
      />
      )}
      {props.showTrailing && (
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <SidebarTrailing mode={"light"} state={"default"} type={"detail"} />}</div>
      )}
    </div>
  );
  const __body8 = () => (
    <div className={props.className} style={{
      width: 320,
      height: 44,
      borderRadius: 100,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "0px 8px 0px 10px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showImage && (
      <SidebarLeading
        style={{
          position: "relative",
          flexGrow: 1,
          alignSelf: "stretch",
          width: "auto",
          height: "auto",
        }}
        mode={"light"}
        state={"selected"}
        image={"symbol"}
      />
      )}
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <SidebarTrailing mode={"light"} state={"default"} type={"disclosure"} />}</div>
    </div>
  );
  const __body9 = () => (
    <div className={props.className} style={{
      width: 320,
      height: 44,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "0px 8px 0px 50px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showImage && (
      <SidebarLeading
        style={{
          position: "relative",
          flexGrow: 1,
          alignSelf: "stretch",
          width: "auto",
          height: "auto",
        }}
        mode={"light"}
        state={"default"}
        image={"symbol"}
      />
      )}
      {props.showTrailing && (
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <SidebarTrailing mode={"light"} state={"default"} type={"detail"} />}</div>
      )}
    </div>
  );
  const __body10 = () => (
    <div className={props.className} style={{
      width: 320,
      height: 44,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "0px 8px 0px 30px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showImage && (
      <SidebarLeading
        style={{
          position: "relative",
          flexGrow: 1,
          alignSelf: "stretch",
          width: "auto",
          height: "auto",
        }}
        mode={"light"}
        state={"default"}
        image={"symbol"}
      />
      )}
      {props.showTrailing && (
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <SidebarTrailing mode={"light"} state={"default"} type={"detail"} />}</div>
      )}
    </div>
  );
  const __body11 = () => (
    <div className={props.className} style={{
      width: 320,
      height: 44,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "0px 8px 0px 10px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showImage && (
      <SidebarLeading
        style={{
          position: "relative",
          flexGrow: 1,
          alignSelf: "stretch",
          width: "auto",
          height: "auto",
        }}
        mode={"light"}
        state={"default"}
        image={"symbol"}
      />
      )}
      {props.showTrailing && (
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <SidebarTrailing mode={"light"} state={"default"} type={"detail"} />}</div>
      )}
    </div>
  );
  const __impls = {
    // figma: State=Disabled, Indent Level=2
    "state=disabled|indentLevel=2": __body0,
    // figma: State=Disabled, Indent Level=1
    "state=disabled|indentLevel=1": __body1,
    // figma: State=Disabled, Indent Level=0
    "state=disabled|indentLevel=0": __body2,
    // figma: State=Selected, Indent Level=2
    "state=selected|indentLevel=2": __body3,
    // figma: State=Disclosable, Indent Level=2
    "state=disclosable|indentLevel=2": __body4,
    // figma: State=Selected, Indent Level=1
    "state=selected|indentLevel=1": __body5,
    // figma: State=Disclosable, Indent Level=1
    "state=disclosable|indentLevel=1": __body6,
    // figma: State=Selected, Indent Level=0
    "state=selected|indentLevel=0": __body7,
    // figma: State=Disclosable, Indent Level=0
    "state=disclosable|indentLevel=0": __body8,
    // figma: State=Default, Indent Level=2
    "state=default|indentLevel=2": __body9,
    // figma: State=Default, Indent Level=1
    "state=default|indentLevel=1": __body10,
    // figma: State=Default, Indent Level=0
    "state=default|indentLevel=0": __body11,
  };
  return (__impls[__vkey(props)] ?? __body11)();
}
export default SidebarRow;
