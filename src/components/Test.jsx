import Button from "./Button";
import Checkbox from "./Checkbox";

//test responsive behavior of button on form/ modal

export function Test() {
  return (
    <div
      style={{
        backgroundColor: "white",
        height: "300px",
        width: "284px",
        padding: "20px",
        border: "2px solid black",
        borderRadius: "24px",
      }}
    >
      <h2>Lorem ipsum, dolor exercitationem!</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda,
        fugit!
      </p>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap;",
        }}
      >
        <Checkbox />

        {/* <Button content={"Delete"} variant="danger"></Button>
        <Button content={"Cancel"} variant="secondary"></Button>
        <Button content="+" variant="btn-header_sm"></Button> */}
      </div>
    </div>
  );
}
