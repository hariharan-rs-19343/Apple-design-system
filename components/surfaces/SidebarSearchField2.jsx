import { SearchField2 } from './SearchField2.jsx';

// figma node: 5840:30516 Sidebar Search Field
export function SidebarSearchField2(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 200,
      borderRadius: 100,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <SearchField2
        style={{
          position: "relative",
          flexGrow: 1,
          alignSelf: "stretch",
          width: "auto",
          height: "auto",
        }}
        mode={"light"}
        state={"placeholder"}
      />
    </div>
  );
}
export default SidebarSearchField2;
