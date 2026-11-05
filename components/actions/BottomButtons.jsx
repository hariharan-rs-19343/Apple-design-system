// figma node: 5915:55555 _Bottom Buttons (4 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "mode=" + __venc(p.mode) + '|' + "type=" + __venc(p.type);

export function BottomButtons(_p = {}) {
  const props = { ..._p, mode: _p.mode ?? "light", type: _p.type ?? "emoji and mic" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 402,
      height: 78,
      display: "flex",
      flexDirection: "row",
      padding: "0px 32px 2px 32px",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"SF Compact\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 457,
        fontSize: 21,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "rgb(255,255,255)",
        flexShrink: 0,
      }}>{props.text1 ?? "ABC"}</span>
      <span style={{
        position: "relative",
        fontFamily: "\"SF Compact\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 457,
        fontSize: 24,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "rgb(255,255,255)",
        flexShrink: 0,
      }}>{props.text2 ?? "􀊰"}</span>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 402,
      height: 78,
      display: "flex",
      flexDirection: "row",
      padding: "0px 32px 2px 32px",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"SF Compact\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 457,
        fontSize: 21,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--miscellaneous-keyboards-emoji-mic)",
        flexShrink: 0,
      }}>{props.text1 ?? "ABC"}</span>
      <span style={{
        position: "relative",
        fontFamily: "\"SF Compact\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 457,
        fontSize: 24,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--miscellaneous-keyboards-emoji-mic)",
        flexShrink: 0,
      }}>{props.text2 ?? "􀊰"}</span>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 402,
      height: 78,
      display: "flex",
      flexDirection: "row",
      padding: "0px 32px 2px 32px",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "rgb(255,255,255)",
      ...props.style,
    }}>
      <svg width={26.800} height={26.800} viewBox="0 0 26.800 26.800" fill="none" style={{
        position: "relative",
        width: 26.8,
        height: 26.8,
        flexShrink: 0,
      }}>
        <path d={"M 13.4 26.8 C 20.796 26.8 26.8 20.783 26.8 13.4 C 26.8 6.004 20.796 0 13.4 0 C 6.017 0 0 6.004 0 13.4 C 0 20.783 6.017 26.8 13.4 26.8 Z M 13.387 22.609 C 8.736 22.609 5.005 19.193 4.493 15.134 C 4.375 14.32 4.913 13.939 5.623 14.162 C 8.263 14.937 10.694 15.371 13.387 15.371 C 16.08 15.371 18.524 14.937 21.151 14.162 C 21.86 13.939 22.399 14.32 22.294 15.134 C 21.782 19.193 18.051 22.609 13.387 22.609 Z M 13.387 18.418 C 15.568 18.418 17.88 18.103 19.995 17.578 C 20.363 16.987 20.652 16.343 20.809 15.686 C 18.576 16.316 16.001 16.737 13.387 16.737 C 10.786 16.737 8.198 16.316 5.977 15.686 C 6.122 16.343 6.411 16.987 6.792 17.578 C 8.907 18.103 11.206 18.418 13.387 18.418 Z M 9.367 12.139 C 8.513 12.139 7.764 11.364 7.764 10.273 C 7.764 9.17 8.513 8.408 9.367 8.408 C 10.234 8.408 10.983 9.17 10.983 10.273 C 10.983 11.364 10.234 12.139 9.367 12.139 Z M 17.394 12.139 C 16.54 12.139 15.791 11.364 15.791 10.273 C 15.791 9.17 16.54 8.408 17.394 8.408 C 18.261 8.408 19.01 9.17 19.01 10.273 C 19.01 11.364 18.261 12.139 17.394 12.139 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
      <span style={{
        position: "relative",
        fontFamily: "\"SF Compact\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 457,
        fontSize: 24,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "rgb(255,255,255)",
        flexShrink: 0,
      }}>{props.text1 ?? "􀊰"}</span>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 402,
      height: 78,
      display: "flex",
      flexDirection: "row",
      padding: "0px 32px 2px 32px",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "var(--miscellaneous-keyboards-emoji-mic)",
      ...props.style,
    }}>
      <svg width={26.800} height={26.800} viewBox="0 0 26.800 26.800" fill="none" style={{
        position: "relative",
        width: 26.8,
        height: 26.8,
        flexShrink: 0,
      }}>
        <path d={"M 13.4 26.8 C 20.731 26.8 26.8 20.718 26.8 13.4 C 26.8 6.069 20.718 0 13.387 0 C 6.069 0 0 6.069 0 13.4 C 0 20.718 6.083 26.8 13.4 26.8 Z M 13.4 24.567 C 7.199 24.567 2.246 19.601 2.246 13.4 C 2.246 7.199 7.186 2.233 13.387 2.233 C 19.588 2.233 24.54 7.199 24.554 13.4 C 24.567 19.574 19.601 24.567 13.4 24.567 Z M 9.498 12.205 C 10.339 12.205 11.088 11.337 11.088 10.339 C 11.088 9.314 10.352 8.474 9.498 8.474 C 8.631 8.474 7.922 9.327 7.922 10.339 C 7.922 11.324 8.644 12.205 9.498 12.205 Z M 17.315 12.205 C 18.156 12.205 18.878 11.324 18.878 10.339 C 18.878 9.327 18.169 8.474 17.315 8.474 C 16.448 8.474 15.712 9.314 15.712 10.339 C 15.712 11.337 16.461 12.205 17.315 12.205 Z M 13.4 22.399 C 17.919 22.399 21.532 19.075 22.031 15.147 C 22.136 14.346 21.624 13.991 20.928 14.201 C 18.379 14.95 16.014 15.371 13.4 15.371 C 10.786 15.371 8.421 14.95 5.872 14.201 C 5.163 13.991 4.664 14.359 4.769 15.147 C 5.268 19.075 8.881 22.399 13.4 22.399 Z M 13.387 18.326 C 11.298 18.326 9.065 18.037 7.304 17.591 C 7.055 17.525 6.91 17.407 6.805 17.223 C 6.608 16.868 6.398 16.422 6.24 15.844 C 6.227 15.752 6.28 15.712 6.358 15.725 C 8.487 16.303 10.917 16.697 13.387 16.697 C 15.857 16.697 18.287 16.303 20.415 15.725 C 20.494 15.712 20.547 15.752 20.534 15.844 C 20.389 16.408 20.139 16.894 19.969 17.223 C 19.85 17.407 19.732 17.512 19.483 17.591 C 17.709 18.037 15.476 18.326 13.387 18.326 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
      <span style={{
        position: "relative",
        fontFamily: "\"SF Compact\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 457,
        fontSize: 24,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--miscellaneous-keyboards-emoji-mic)",
        flexShrink: 0,
      }}>{props.text1 ?? "􀊰"}</span>
    </div>
  );
  const __impls = {
    // figma: Mode=Dark, Type=ABC and Mic
    "mode=dark|type=abc and mic": __body0,
    // figma: Mode=Light, Type=ABC and Mic
    "mode=light|type=abc and mic": __body1,
    // figma: Type=Emoji and Mic, Mode=Dark
    "mode=dark|type=emoji and mic": __body2,
    // figma: Type=Emoji and Mic, Mode=Light
    "mode=light|type=emoji and mic": __body3,
  };
  return (__impls[__vkey(props)] ?? __body3)();
}
export default BottomButtons;
