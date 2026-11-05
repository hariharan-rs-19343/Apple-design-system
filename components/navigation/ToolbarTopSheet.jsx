import { ButtonsTopSheets } from './ButtonsTopSheets.jsx';
import { Grabber2 } from './Grabber2.jsx';
import { SubtitleCaption } from './SubtitleCaption.jsx';
import { SubtitleSubheadline } from './SubtitleSubheadline.jsx';
import { TitleBody } from './TitleBody.jsx';
import { TitleLargeTitle } from './TitleLargeTitle.jsx';
import { TitleSubheadline } from './TitleSubheadline.jsx';

// figma node: 5726:33474 Toolbar - Top - Sheet (5 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "mode=" + __venc(p.mode) + '|' + "style2=" + __venc(p.style2);

export function ToolbarTopSheet(_p = {}) {
  const props = { ..._p, mode: _p.mode ?? "light", style2: _p.style2 ?? "default", showSubtitle: _p.showSubtitle ?? true };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 402,
      display: "flex",
      flexDirection: "column",
      padding: "0px 0px 10px 0px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
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
        <div style={{
            position: "relative",
            width: 36,
            height: 5,
            flexShrink: 0,
          }}>{props.icon1 ?? <Grabber2 mode={"light"} />}</div>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        padding: "0px 16px 0px 16px",
        justifyContent: "space-between",
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
            flexGrow: 1,
            width: "auto",
          }}
          mode={"light"}
        />
        <div style={{ position: "relative", height: 44, flexShrink: 0 }}>{props.icon2 ?? <ButtonsTopSheets symbol={"􀄨"} mode={"light"} state={"preferred"} />}</div>
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 402,
      display: "flex",
      flexDirection: "column",
      padding: "0px 0px 10px 0px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
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
        <div style={{
            position: "relative",
            width: 36,
            height: 5,
            flexShrink: 0,
          }}>{props.icon1 ?? <Grabber2 mode={"light"} />}</div>
      </div>
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
        <div style={{ position: "relative", height: 44, flexShrink: 0 }}>{props.icon2 ?? <ButtonsTopSheets mode={"light"} state={"default"} />}</div>
        <div style={{ position: "relative", height: 44, flexShrink: 0 }}>{props.icon3 ?? <ButtonsTopSheets symbol={"􀄨"} mode={"light"} state={"preferred"} />}</div>
        <div style={{
            position: "absolute",
            left: 183,
            top: 13,
            width: 36,
            height: 22,
          }}>{props.icon4 ?? <TitleBody mode={"light"} />}</div>
      </div>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 402,
      display: "flex",
      flexDirection: "column",
      padding: "0px 0px 10px 0px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
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
        <div style={{
            position: "relative",
            width: 36,
            height: 5,
            flexShrink: 0,
          }}>{props.icon1 ?? <Grabber2 mode={"light"} />}</div>
      </div>
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
        <div style={{ position: "relative", height: 44, flexShrink: 0 }}>{props.icon2 ?? <ButtonsTopSheets mode={"light"} state={"default"} />}</div>
        <div style={{ position: "relative", height: 44, flexShrink: 0 }}>{props.icon3 ?? <ButtonsTopSheets symbol={"􀄨"} mode={"light"} state={"preferred"} />}</div>
      </div>
      <div style={{
        position: "relative",
        height: 66,
        display: "flex",
        flexDirection: "column",
        padding: "5px 16px 5px 16px",
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
        {props.showSubtitle && (
        <div style={{ position: "relative", flexShrink: 0 }}>{props.icon4 ?? <SubtitleSubheadline mode={"light"} />}</div>
        )}
      </div>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 402,
      display: "flex",
      flexDirection: "column",
      padding: "0px 0px 10px 0px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
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
        <div style={{
            position: "relative",
            width: 36,
            height: 5,
            flexShrink: 0,
          }}>{props.icon1 ?? <Grabber2 mode={"light"} />}</div>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 16px 0px 16px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{ position: "relative", height: 44, flexShrink: 0 }}>{props.icon2 ?? <ButtonsTopSheets mode={"light"} state={"default"} />}</div>
        <div style={{
          position: "relative",
          height: 38,
          display: "flex",
          flexDirection: "column",
          padding: "1px 2px 1px 2px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexGrow: 1,
        }}>
          <div style={{ position: "relative", flexShrink: 0 }}>{props.icon3 ?? <TitleSubheadline mode={"light"} />}</div>
          {props.showSubtitle && (
          <div style={{ position: "relative", flexShrink: 0 }}>{props.icon4 ?? <SubtitleCaption mode={"light"} />}</div>
          )}
        </div>
        <ButtonsTopSheets
          style={{ position: "relative", height: 44, flexShrink: 0 }}
          symbol={"􀄨"}
          mode={"light"}
          state={"preferred"}
        />
      </div>
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: 402,
      display: "flex",
      flexDirection: "column",
      padding: "0px 0px 10px 0px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
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
        <div style={{
            position: "relative",
            width: 36,
            height: 5,
            flexShrink: 0,
          }}>{props.icon1 ?? <Grabber2 mode={"light"} />}</div>
      </div>
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
        <div style={{ position: "relative", height: 44, flexShrink: 0 }}>{props.icon2 ?? <ButtonsTopSheets mode={"light"} state={"default"} />}</div>
        <div style={{ position: "relative", height: 44, flexShrink: 0 }}>{props.icon3 ?? <ButtonsTopSheets symbol={"􀄨"} mode={"light"} state={"preferred"} />}</div>
      </div>
      <TitleSubheadline
        style={{
          position: "absolute",
          left: 76,
          top: 22,
          width: 250,
        }}
        mode={"light"}
      />
      <SubtitleCaption
        style={{
          position: "absolute",
          left: 76,
          top: 40,
          width: 250,
        }}
        mode={"light"}
      />
    </div>
  );
  const __impls = {
    // figma: Mode=Light, Style=Compact Large
    "mode=light|style2=compact large": __body0,
    // figma: Mode=Light, Style=Default
    "mode=light|style2=default": __body1,
    // figma: Mode=Light, Style=Large Title
    "mode=light|style2=large title": __body2,
    // figma: Mode=Light, Style=Title 2 Line Left
    "mode=light|style2=title 2 line left": __body3,
    // figma: Mode=Light, Style=Title 2 Line
    "mode=light|style2=title 2 line": __body4,
  };
  return (__impls[__vkey(props)] ?? __body1)();
}
export default ToolbarTopSheet;
