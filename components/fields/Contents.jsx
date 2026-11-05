import { ButtonBack } from '../buttons/ButtonBack.jsx';
import { ControlsTrailing } from './ControlsTrailing.jsx';
import { Prompt } from './Prompt.jsx';
import { SearchField } from './SearchField.jsx';
import { TitleDefaultCompact } from './TitleDefaultCompact.jsx';

// figma node: 130:62202 _Contents (4 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "sizeClass=" + __venc(p.sizeClass) + '|' + "style2=" + __venc(p.style2);

export function Contents(_p = {}) {
  const props = { ..._p, showTitleAccessories: _p.showTitleAccessories ?? true, sizeClass: _p.sizeClass ?? "compact", style2: _p.style2 ?? "large title", showTitle: _p.showTitle ?? true, showSearch: _p.showSearch ?? true, showTrailing: _p.showTrailing ?? true, showLeading: _p.showLeading ?? true, showPrompt: _p.showPrompt ?? false };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 393,
      display: "flex",
      flexDirection: "column",
      padding: "0px 0px 10px 0px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showPrompt && (
      <Prompt style={{
          position: "relative",
          height: 38,
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }} />
      )}
      {props.showTitleAccessories && (
      <div style={{
        position: "relative",
        height: 44,
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.showLeading && (
        <div style={{ position: "absolute", left: 0, top: 0 }}>{props.leadingControls ?? <ButtonBack enabled={true} />}</div>
        )}
        {props.showTitle && (
        <div style={{
            position: "absolute",
            left: 178,
            top: 0,
            width: 38,
            height: 44,
          }}>{props.icon1 ?? <TitleDefaultCompact mode={"light"} titleType={"default"} />}</div>
        )}
        {props.showTrailing && (
        <div style={{ position: "absolute", left: 352, top: 0 }}>{props.trailingControls ?? <ControlsTrailing config={"symbols - 1"} />}</div>
        )}
      </div>
      )}
      <SearchField
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        state={"placeholder"}
      />
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 393,
      display: "flex",
      flexDirection: "column",
      padding: "0px 0px 10px 0px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showPrompt && (
      <Prompt style={{
          position: "relative",
          height: 38,
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }} />
      )}
      {props.showTitleAccessories && (
      <div style={{
        position: "relative",
        height: 44,
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.showLeading && (
        <div style={{ position: "absolute", left: 0, top: 0 }}>{props.leadingControls ?? <ButtonBack enabled={true} />}</div>
        )}
        {props.showTrailing && (
        <div style={{ position: "absolute", left: 352, top: 0 }}>{props.trailingControls ?? <ControlsTrailing config={"symbols - 1"} />}</div>
        )}
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: "4px 16px 4px 16px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 700,
          fontSize: 34,
          whiteSpace: "nowrap",
          lineHeight: "41px",
          color: "rgb(0,0,0)",
          flexShrink: 0,
        }}>{props.text1 ?? "Title"}</span>
      </div>
      <SearchField
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        state={"placeholder"}
      />
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 393,
      display: "flex",
      flexDirection: "column",
      padding: "0px 4px 10px 4px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showPrompt && (
      <Prompt style={{
          position: "relative",
          height: 38,
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }} />
      )}
      {props.showTitleAccessories && (
      <div style={{
        position: "relative",
        height: 44,
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.showLeading && (
        <div style={{ position: "absolute", left: 0, top: 0 }}>{props.leadingControls ?? <ButtonBack enabled={true} />}</div>
        )}
        {props.showTitle && (
        <div style={{
          position: "absolute",
          left: 90.5,
          top: 0,
          width: 200,
          height: 44,
        }}>
          <span style={{
            position: "absolute",
            left: 81,
            top: 11,
            width: 38,
            height: 22,
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 590,
            fontSize: 17,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "22px",
            color: "rgb(0,0,0)",
          }}>Title</span>
        </div>
        )}
        {props.showTrailing && (
        <div style={{ position: "absolute", left: 344, top: 0 }}>{props.trailingControls ?? <ControlsTrailing config={"symbols - 1"} />}</div>
        )}
      </div>
      )}
      <SearchField
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        state={"placeholder"}
      />
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 393,
      display: "flex",
      flexDirection: "column",
      padding: "0px 4px 10px 4px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showPrompt && (
      <div style={{
        position: "relative",
        height: 38,
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "absolute",
          left: 16,
          top: 7,
          width: 361,
          height: 30,
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 13,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "18px",
          color: "rgba(60,60,67,0.6)",
        }}>This is a prompt message.</span>
      </div>
      )}
      {props.showTitleAccessories && (
      <div style={{
        position: "relative",
        height: 44,
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.showLeading && (
        <div style={{ position: "absolute", left: 0, top: 0 }}>{props.leadingControls ?? <ButtonBack enabled={true} />}</div>
        )}
        {props.showTrailing && (
        <div style={{ position: "absolute", left: 344, top: 0 }}>{props.trailingControls ?? <ControlsTrailing config={"symbols - 1"} />}</div>
        )}
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: "4px 16px 4px 16px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 700,
          fontSize: 34,
          whiteSpace: "nowrap",
          lineHeight: "41px",
          color: "rgb(0,0,0)",
          flexShrink: 0,
        }}>{props.text1 ?? "Title"}</span>
      </div>
      <SearchField
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        state={"placeholder"}
      />
    </div>
  );
  const __impls = {
    // figma: Size Class=Compact, Style=Default
    "sizeClass=compact|style2=default": __body0,
    // figma: Size Class=Compact, Style=Large Title
    "sizeClass=compact|style2=large title": __body1,
    // figma: Size Class=Regular, Style=Default
    "sizeClass=regular|style2=default": __body2,
    // figma: Size Class=Regular, Style=Large Title
    "sizeClass=regular|style2=large title": __body3,
  };
  return (__impls[__vkey(props)] ?? __body1)();
}
export default Contents;
