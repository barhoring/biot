import { v4 as uuidv4 } from "uuid";

export class Util {
  constructor() {
    this._messages = [];
    this._waitingPromises = [];
  }

  _createMessage = (text) => {
    return {
      id: uuidv4(),
      text,
      creationTime: new Date(),
      receivedTime: null,
    };
  };

  addMessage = (text, setLastId, setIsLastMessageRead) => {
    const message = this._createMessage(text);

    if (this._waitingPromises.length > 0) {
      const promise = this._waitingPromises.shift();
      promise.resolve({ message, setIsLastMessageRead });
    } else {
      this._messages.push({ message, setIsLastMessageRead });
    }
    setLastId(message.id);
  };

  getNextMessage = async () => {
    if (this._messages.length === 0)
      return new Promise((resolve, reject) => {
        this._waitingPromises.push({ resolve, reject });
      });

    const { message, setIsLastMessageRead } = this._messages.shift();
    // make clear that we return 2 things
    return { message, setIsLastMessageRead };
  };

  deleteMessage(mid) {
    this._messages = this._messages.filter(
      (e) => e.message.id !== mid || e.setIsLastMessageRead(true) // short circuit: setIsLastMessageRead will be invoked only when e.id===mid
    );
  }
}

export default new Util();
