import { useState } from "react";
import ListGroup from "./components/ListGroup";
import Button from "./components/Button";
import Like from "./components/Like";

function App() {
  // const [visible, setVisible] = useState(false);
  // const items = ["New York", "Los Angeles", "San Francisco"];
  return (
    <div>
      {/* <ListGroup items={items} heading="Cities" /> */}
      {/* <Button onClick={() => {}}> My Button </Button> */}
      <Like onClick={() => console.log("Clicked")} />
    </div>
  );
}

export default App;
