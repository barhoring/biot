import { useState } from "react";
import Util from "./Util";

const Sender = () => {
  const [text, setText] = useState("");
  const [lastMessageId, setLastMessageId] = useState(null);
  /* Init with true. Asume all messages never written were read */
  const [isLastMessageRead, setIsLastMessageRead] = useState(true);

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
          Util.addMessage(text, setLastMessageId, setIsLastMessageRead);

          // prepare for next message to be written
          setIsLastMessageRead(false);
          setText("");
        }}
      >
        Submit
      </button>
      {!isLastMessageRead && (
        <button onClick={() => Util.deleteMessage(lastMessageId)}>
          Delete last message: {lastMessageId}
        </button>
      )}
    </div>
  );
};
export default Sender;
