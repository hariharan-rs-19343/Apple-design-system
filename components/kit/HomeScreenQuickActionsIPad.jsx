import { CustomIcon } from '../app-icons/CustomIcon.jsx';
import { HomeScreenIPad } from '../home-screen/HomeScreenIPad.jsx';
import { HomeScreenQuickActions } from '../home-screen/HomeScreenQuickActions.jsx';

// figma node: 2607:25388 Home Screen Quick Actions - iPad
export function HomeScreenQuickActionsIPad(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 1210,
      height: 834,
      overflow: "hidden",
      position: "relative",
      ...props.style,
    }}>
      <HomeScreenIPad
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 1210,
          height: 834,
        }}
        widgets={"none"}
      />
      <svg width={1210} height={834} viewBox="0 0 1210 834" fill="none" style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 1210,
        height: 834,
        color: "rgba(0,0,0,0.23)",
      }}>
        <path d={"M 0 0 L 200 0 L 200 200 L 0 200 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
      <div style={{
          position: "absolute",
          left: 157,
          top: 466,
          width: 78,
          height: 78,
        }}>
        <CustomIcon
          style={{ transform: "scale(1.182, 1.182)", transformOrigin: "0 0" }}
          mode={"default"}
        />
      </div>
      <HomeScreenQuickActions style={{
          position: "absolute",
          left: 157,
          top: 90,
          width: 250,
        }} />
    </div>
  );
}
export default HomeScreenQuickActionsIPad;
