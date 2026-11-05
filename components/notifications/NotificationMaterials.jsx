import { NotificationMaterialsModeOptionsLight } from './NotificationMaterialsModeOptionsLight.jsx';
import { NotificationMaterialsModeOptionsLight2 } from './NotificationMaterialsModeOptionsLight2.jsx';
import { NotificationMaterialsModeOptionsLight3 } from './NotificationMaterialsModeOptionsLight3.jsx';

// figma node: 531:105668 _Notification Materials (3 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "style2=" + __venc(p.style2);

export function NotificationMaterials(_p = {}) {
  const props = { ..._p, style2: _p.style2 ?? "top" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 100,
      height: 100,
      overflow: "hidden",
      position: "relative",
      ...props.style,
    }}>
      <NotificationMaterialsModeOptionsLight style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 100,
          height: 100,
        }} />
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 100,
      height: 100,
      overflow: "hidden",
      position: "relative",
      ...props.style,
    }}>
      <NotificationMaterialsModeOptionsLight2 style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 100,
          height: 100,
        }} />
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 100,
      height: 100,
      overflow: "hidden",
      position: "relative",
      ...props.style,
    }}>
      <NotificationMaterialsModeOptionsLight3 style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 100,
          height: 100,
        }} />
    </div>
  );
  const __impls = {
    // figma: Style=Bottom
    "style2=bottom": __body0,
    // figma: Style=Middle
    "style2=middle": __body1,
    // figma: Style=Top
    "style2=top": __body2,
  };
  return (__impls[__vkey(props)] ?? __body2)();
}
export default NotificationMaterials;
