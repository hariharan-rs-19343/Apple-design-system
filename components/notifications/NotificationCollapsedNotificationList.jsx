import { NotificationCollapsed } from './NotificationCollapsed.jsx';

// figma node: 135:73247 Notification - Collapsed/Notification - List
export function NotificationCollapsedNotificationList(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 402,
      borderRadius: 5,
      backgroundColor: "var(--component-fill)",
      outline: "1px dashed var(--component-stroke)",
      outlineOffset: "-1px",
      display: "flex",
      flexDirection: "column",
      gap: 20,
      padding: "20px 20px 20px 20px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: -10,
        width: 402,
        height: 404,
        backgroundColor: "rgba(0,0,0,0.05)",
      }} />
      <NotificationCollapsed
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        stack={"1"}
      />
      <NotificationCollapsed
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        stack={"1"}
      />
      <NotificationCollapsed
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        stack={"2"}
      />
      <NotificationCollapsed
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        stack={"3"}
      />
    </div>
  );
}
export default NotificationCollapsedNotificationList;
