import { ComponentHeader } from './ComponentHeader.jsx';

// figma node: 544:191902 Header
export function Header3(_p = {}) {
  const props = _p;
  return (
    <ComponentHeader
      className={props.className}
      style={{
        position: "relative",
        width: 1400,
        ...props.style,
      }}
      description={"Lists and tables present data in one or more columns of rows. "}
      componentName={"Lists and tables"}
      link1={"Human Interface Guidelines 􀄫 Lists and tables"}
      showLink2={false}
      link2={""}
    />
  );
}
export default Header3;
