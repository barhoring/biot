import "./App.css";
import u from "./Util";
import Sender from "./Sender";
import Receiver from "./Receiver";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Sender addMessage={u.addMessage} />
        <Receiver />
      </header>
    </div>
  );
}

export default App;
