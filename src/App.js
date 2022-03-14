import { Dndprovider } from "react-dnd";
import Backend from "react-dnd-html5-backend";
import Example from "./example";

function App() {
  return (
    <div className="App">
      <Dndprovider backend={Backend}>
        <Example />
      </Dndprovider>
    </div>
  );
}

export default App;
