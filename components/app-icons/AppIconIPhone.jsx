import { Badge } from './Badge.jsx';
import { CustomIcon } from './CustomIcon.jsx';
import { SystemIcons } from './SystemIcons.jsx';

// figma node: 2402:17543 App Icon/iPhone (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "type=" + __venc(p.type);

export function AppIconIPhone(_p = {}) {
  const props = { ..._p, type: _p.type ?? "system", showAppName: _p.showAppName ?? true, showBadge: _p.showBadge ?? false, appName: _p.appName ?? "App Name" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      gap: 5,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          height: 64,
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}>{props.icon1 ?? <CustomIcon mode={"default"} />}</div>
      {props.showAppName && (
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 510,
        fontSize: 12,
        textAlign: "center",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "100%",
        color: "rgb(255,255,255)",
        flexShrink: 0,
        filter: "drop-shadow(0px 2px 25px rgb(0,0,0))",
      }}>{props.appName}</span>
      )}
      {props.showBadge && (
      <div style={{
          position: "absolute",
          left: 53,
          top: -12,
          width: 24,
        }}>{props.icon2 ?? <Badge count={"1"} />}</div>
      )}
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      gap: 5,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          height: 64,
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}>{props.icon1 ?? <SystemIcons icon={"app store"} mode={"default"} />}</div>
      {props.showAppName && (
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 510,
        fontSize: 12,
        textAlign: "center",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "100%",
        color: "rgb(255,255,255)",
        flexShrink: 0,
        filter: "drop-shadow(0px 2px 25px rgb(0,0,0))",
      }}>{props.appName}</span>
      )}
      {props.showBadge && (
      <div style={{
          position: "absolute",
          left: 53,
          top: -12,
          width: 24,
        }}>{props.icon2 ?? <Badge count={"1"} />}</div>
      )}
    </div>
  );
  const __impls = {
    // figma: Type=Custom
    "type=custom": __body0,
    // figma: Type=System
    "type=system": __body1,
  };
  return (__impls[__vkey(props)] ?? __body1)();
}
export default AppIconIPhone;
