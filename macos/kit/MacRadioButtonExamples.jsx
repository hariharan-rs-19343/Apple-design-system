import { MacRadioButton } from './MacRadioButton.jsx';

// figma node: 497:3310 Examples
export function MacRadioButtonExamples(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 340,
      height: 310,
      borderRadius: 2,
      backgroundColor: "rgb(236,235,235)",
      boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.1)",
      position: "relative",
      ...props.style,
    }}>
      <MacRadioButton
        style={{ position: "absolute", left: 210, top: 170 }}
        selection={"off"}
        state={"idle"}
        activeWindow={false}
      />
      <MacRadioButton
        style={{ position: "absolute", left: 210, top: 200 }}
        selection={"off"}
        state={"clicked"}
        activeWindow={false}
      />
      <MacRadioButton
        style={{ position: "absolute", left: 210, top: 230 }}
        selection={"off"}
        state={"disabled"}
        activeWindow={false}
      />
      <MacRadioButton
        style={{ position: "absolute", left: 140, top: 170 }}
        selection={"mixed"}
        state={"idle"}
        activeWindow={false}
      />
      <MacRadioButton
        style={{ position: "absolute", left: 140, top: 200 }}
        selection={"mixed"}
        state={"clicked"}
        activeWindow={false}
      />
      <MacRadioButton
        style={{ position: "absolute", left: 140, top: 230 }}
        selection={"mixed"}
        state={"disabled"}
        activeWindow={false}
      />
      <MacRadioButton
        style={{ position: "absolute", left: 70, top: 170 }}
        selection={"on"}
        state={"idle"}
        activeWindow={false}
      />
      <MacRadioButton
        style={{ position: "absolute", left: 70, top: 200 }}
        selection={"on"}
        state={"clicked"}
        activeWindow={false}
      />
      <MacRadioButton
        style={{ position: "absolute", left: 70, top: 230 }}
        selection={"on"}
        state={"disabled"}
        activeWindow={false}
      />
      <MacRadioButton
        style={{ position: "absolute", left: 210, top: 70 }}
        selection={"off"}
        state={"idle"}
        activeWindow={true}
      />
      <MacRadioButton
        style={{ position: "absolute", left: 210, top: 100 }}
        selection={"off"}
        state={"clicked"}
        activeWindow={true}
      />
      <MacRadioButton
        style={{ position: "absolute", left: 210, top: 130 }}
        selection={"off"}
        state={"disabled"}
        activeWindow={true}
      />
      <MacRadioButton
        style={{ position: "absolute", left: 140, top: 70 }}
        selection={"mixed"}
        state={"idle"}
        activeWindow={true}
      />
      <MacRadioButton
        style={{ position: "absolute", left: 140, top: 100 }}
        selection={"mixed"}
        state={"clicked"}
        activeWindow={true}
      />
      <MacRadioButton
        style={{ position: "absolute", left: 140, top: 130 }}
        selection={"mixed"}
        state={"disabled"}
        activeWindow={true}
      />
      <MacRadioButton
        style={{ position: "absolute", left: 70, top: 70 }}
        selection={"on"}
        state={"idle"}
        activeWindow={true}
      />
      <MacRadioButton
        style={{ position: "absolute", left: 70, top: 100 }}
        selection={"on"}
        state={"clicked"}
        activeWindow={true}
      />
      <MacRadioButton
        style={{ position: "absolute", left: 70, top: 130 }}
        selection={"on"}
        state={"disabled"}
        activeWindow={true}
      />
    </div>
  );
}
export default MacRadioButtonExamples;
