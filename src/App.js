import "./App.css";
import Sender from "./Sender";
import Receiver from "./Receiver";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Sender />
        <div style={{ maxWidth: "90%", display: "flex" }}>
          <Receiver />
          <Receiver />
        </div>
      </div>
    </div>
  );
}

export default App;
