import { MacTextField } from './MacTextField.jsx';

// figma node: 480:340 Examples
export function MacTextFieldExamples(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 770,
      height: 380,
      borderRadius: 2,
      backgroundColor: "rgb(236,235,235)",
      boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.1)",
      position: "relative",
      ...props.style,
    }}>
      <MacTextField
        style={{
          position: "absolute",
          left: 600,
          top: 300,
          width: 120,
          height: 36,
        }}
        text={true}
        state={"disabled"}
      />
      <MacTextField
        style={{
          position: "absolute",
          left: 460,
          top: 300,
          width: 120,
          height: 28,
        }}
        text={true}
        state={"disabled"}
      />
      <MacTextField
        style={{
          position: "absolute",
          left: 320,
          top: 300,
          width: 120,
          height: 24,
        }}
        text={true}
        state={"disabled"}
      />
      <MacTextField
        style={{
          position: "absolute",
          left: 180,
          top: 300,
          width: 120,
          height: 20,
        }}
        text={true}
        state={"disabled"}
      />
      <MacTextField
        style={{
          position: "absolute",
          left: 40,
          top: 300,
          width: 120,
          height: 16,
        }}
        text={true}
        state={"disabled"}
      />
      <MacTextField
        style={{
          position: "absolute",
          left: 600,
          top: 250,
          width: 120,
          height: 36,
        }}
        text={true}
        state={"focused"}
      />
      <MacTextField
        style={{
          position: "absolute",
          left: 460,
          top: 250,
          width: 120,
          height: 28,
        }}
        text={true}
        state={"focused"}
      />
      <MacTextField
        style={{
          position: "absolute",
          left: 320,
          top: 250,
          width: 120,
          height: 24,
        }}
        text={true}
        state={"focused"}
      />
      <MacTextField
        style={{
          position: "absolute",
          left: 180,
          top: 250,
          width: 120,
          height: 20,
        }}
        text={true}
        state={"focused"}
      />
      <MacTextField
        style={{
          position: "absolute",
          left: 40,
          top: 250,
          width: 120,
          height: 16,
        }}
        text={true}
        state={"focused"}
      />
      <MacTextField
        style={{
          position: "absolute",
          left: 600,
          top: 200,
          width: 120,
          height: 36,
        }}
        text={true}
        state={"idle"}
      />
      <MacTextField
        style={{
          position: "absolute",
          left: 460,
          top: 200,
          width: 120,
          height: 28,
        }}
        text={true}
        state={"idle"}
      />
      <MacTextField
        style={{
          position: "absolute",
          left: 320,
          top: 200,
          width: 120,
          height: 24,
        }}
        text={true}
        state={"idle"}
      />
      <MacTextField
        style={{
          position: "absolute",
          left: 180,
          top: 200,
          width: 120,
          height: 20,
        }}
        text={true}
        state={"idle"}
      />
      <MacTextField
        style={{
          position: "absolute",
          left: 40,
          top: 200,
          width: 120,
          height: 16,
        }}
        text={true}
        state={"idle"}
      />
      <MacTextField
        style={{
          position: "absolute",
          left: 600,
          top: 140,
          width: 120,
          height: 36,
        }}
        text={false}
        state={"disabled"}
      />
      <MacTextField
        style={{
          position: "absolute",
          left: 460,
          top: 140,
          width: 120,
          height: 28,
        }}
        text={false}
        state={"disabled"}
      />
      <MacTextField
        style={{
          position: "absolute",
          left: 320,
          top: 140,
          width: 120,
          height: 24,
        }}
        text={false}
        state={"disabled"}
      />
      <MacTextField
        style={{
          position: "absolute",
          left: 180,
          top: 140,
          width: 120,
          height: 20,
        }}
        text={false}
        state={"disabled"}
      />
      <MacTextField
        style={{
          position: "absolute",
          left: 40,
          top: 140,
          width: 120,
          height: 16,
        }}
        text={false}
        state={"disabled"}
      />
      <MacTextField
        style={{
          position: "absolute",
          left: 600,
          top: 90,
          width: 120,
          height: 36,
        }}
        text={false}
        state={"focused"}
      />
      <MacTextField
        style={{
          position: "absolute",
          left: 460,
          top: 90,
          width: 120,
          height: 28,
        }}
        text={false}
        state={"focused"}
      />
      <MacTextField
        style={{
          position: "absolute",
          left: 320,
          top: 90,
          width: 120,
          height: 24,
        }}
        text={false}
        state={"focused"}
      />
      <MacTextField
        style={{
          position: "absolute",
          left: 180,
          top: 90,
          width: 120,
          height: 20,
        }}
        text={false}
        state={"focused"}
      />
      <MacTextField
        style={{
          position: "absolute",
          left: 40,
          top: 90,
          width: 120,
          height: 16,
        }}
        text={false}
        state={"focused"}
      />
      <MacTextField
        style={{
          position: "absolute",
          left: 600,
          top: 40,
          width: 120,
          height: 36,
        }}
        text={false}
        state={"idle"}
      />
      <MacTextField
        style={{
          position: "absolute",
          left: 460,
          top: 40,
          width: 120,
          height: 28,
        }}
        text={false}
        state={"idle"}
      />
      <MacTextField
        style={{
          position: "absolute",
          left: 320,
          top: 40,
          width: 120,
          height: 24,
        }}
        text={false}
        state={"idle"}
      />
      <MacTextField
        style={{
          position: "absolute",
          left: 180,
          top: 40,
          width: 120,
          height: 20,
        }}
        text={false}
        state={"idle"}
      />
      <MacTextField
        style={{
          position: "absolute",
          left: 40,
          top: 40,
          width: 120,
          height: 16,
        }}
        text={false}
        state={"idle"}
      />
    </div>
  );
}
export default MacTextFieldExamples;
