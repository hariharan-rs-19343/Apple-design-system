import { MacHeader } from './MacHeader.jsx';

// figma node: 483:9203 Header
export function MacPageHeader(_p = {}) {
  const props = _p;
  return (
    <MacHeader
      className={props.className}
      style={{
        position: "relative",
        width: 1400,
        height: 242,
        ...props.style,
      }}
      showLink2={false}
      component={"Colors"}
      description={"Judicious use of color can enhance communication, evoke your brand, provide visual continuity, communicate status and feedback, and help people understand information."}
      text1={"Human Interface Guidelines 􀄫 Color"}
    />
  );
}
export default MacPageHeader;
