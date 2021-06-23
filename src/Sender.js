import { useState } from "react";
import Util from "./Util";

const Sender = () => {
  const [text, setText] = useState("");
  return (
    <div className="sender">
      <h1>Welcome</h1>
      <label for="message">let's send a message</label>
      <textarea
        placeholder="your message"
        type="text"
        id="message"
        name="message"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        disabled={!text}
        type="submit"
        value="Submit"
        onClick={() => {
          Util.addMessage(text);
          setText("");
        }}
      >
        Submit
      </button>
    </div>
  );
};
export default Sender;
