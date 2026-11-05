// figma node: 558:44490 _Dock Material
export function DockMaterial(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 100,
      height: 100,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 100,
        height: 100,
        opacity: 0.67,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 100,
          height: 100,
          clipPath: "inset(-76px 0px 0px -76px)",
        }}>
          <svg width={100} height={100} viewBox="0 0 100 100" fill="none" style={{
            position: "absolute",
            left: 0,
            top: 2,
            width: 100,
            height: 100,
            borderRadius: 38,
            backdropFilter: "blur(60px)",
            color: "rgba(0,0,0,0.4)",
          }}>
            <path d={"M 0 50 C 0 38.842 0 33.263 1.163 28.672 C 4.588 15.148 15.148 4.588 28.672 1.163 C 33.263 0 38.842 0 50 0 L 50 0 C 61.158 0 66.737 0 71.328 1.163 C 84.852 4.588 95.412 15.148 98.837 28.672 C 100 33.263 100 38.842 100 50 L 100 50 C 100 61.158 100 66.737 98.837 71.328 C 95.412 84.852 84.852 95.412 71.328 98.837 C 66.737 100 61.158 100 50 100 L 50 100 C 38.842 100 33.263 100 28.672 98.837 C 15.148 95.412 4.588 84.852 1.163 71.328 C 0 66.737 0 61.158 0 50 L 0 50 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      <svg width={100} height={100} viewBox="0 0 100 100" fill="none" style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 100,
        height: 100,
        borderRadius: 38,
        color: "rgba(0,0,0,0.2)",
      }}>
        <path d={"M 0 50 C 0 38.842 0 33.263 1.163 28.672 C 4.588 15.148 15.148 4.588 28.672 1.163 C 33.263 0 38.842 0 50 0 L 50 0 C 61.158 0 66.737 0 71.328 1.163 C 84.852 4.588 95.412 15.148 98.837 28.672 C 100 33.263 100 38.842 100 50 L 100 50 C 100 61.158 100 66.737 98.837 71.328 C 95.412 84.852 84.852 95.412 71.328 98.837 C 66.737 100 61.158 100 50 100 L 50 100 C 38.842 100 33.263 100 28.672 98.837 C 15.148 95.412 4.588 84.852 1.163 71.328 C 0 66.737 0 61.158 0 50 L 0 50 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
}
export default DockMaterial;
