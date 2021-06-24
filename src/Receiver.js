import { useState } from "react";
import Util from "./Util";
import Loader from "./Loader";

const Message = ({ creationTime, text, id }) => {
  if (!creationTime) return null;
  return (
    <div>
      <div style={{ fontSize: "0.5rem" }}>
        creation time:
        {creationTime.toString()}
      </div>
      <div style={{ fontSize: "0.5rem" }}>
        received time time:
        {new Date().toString()}
      </div>
      <div>Message:</div>
      <textarea readonly value={text} />
    </div>
  );
};
const Receiver = () => {
  const [message, setMessage] = useState("");
  const [isWaiting, setIsWaiting] = useState(false);

  const onNext = async () => {
    if (isWaiting) {
      return alert("You've already pressed Next. Please wait");
    }
    setIsWaiting(true);
    setMessage("");
    const { message: msg, setIsLastMessageRead } = await Util.getNextMessage();
    setMessage(msg);
    setIsLastMessageRead(true);
    setIsWaiting(false);
  };

  return (
    <div className="receiver">
      <div>Press Next to start receiving messages</div>
      <button onClick={onNext}>Next</button>
      {isWaiting ? <Loader /> : <Message {...message} />}
    </div>
  );
};
export default Receiver;
