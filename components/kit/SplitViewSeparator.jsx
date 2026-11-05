// figma node: 0:8824 Split View Separator
export function SplitViewSeparator(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 10,
      height: 144,
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style,
    }}>
      <svg width={24} height={144} viewBox="0 0 24 144" fill="none" style={{
        position: "absolute",
        left: -7,
        top: 0,
        width: 24,
        height: 144,
      }}>
        <path d={"M 0 143.963 L 0 144 L 24 144 L 24 143.963 C 22.455 143.9 21.418 143.734 20.549 143.292 C 19.326 142.668 18.332 141.674 17.708 140.451 C 17 139.061 17 137.24 17 133.6 L 17 10.4 C 17 6.76 17 4.939 17.708 3.549 C 18.332 2.326 19.326 1.332 20.549 0.708 C 21.418 0.266 22.455 0.1 24 0.037 L 24 0 L 0 0 L 0 0.037 C 1.545 0.1 2.582 0.266 3.451 0.708 C 4.674 1.332 5.668 2.326 6.292 3.549 C 7 4.939 7 6.76 7 10.4 L 7 133.6 C 7 137.24 7 139.061 6.292 140.451 C 5.668 141.674 4.674 142.668 3.451 143.292 C 2.582 143.734 1.545 143.9 0 143.963 Z"} fill="currentColor" fillRule="evenodd" />
      </svg>
      <div style={{
        position: "absolute",
        left: 3,
        top: 50,
        width: 4,
        height: 44,
        borderRadius: 2,
        backgroundColor: "rgb(153,153,153)",
      }} />
    </div>
  );
}
export default SplitViewSeparator;
