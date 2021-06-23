import { v4 as uuidv4 } from "uuid";

export class Util {
  constructor() {
    this._messages = [];
    this._waitingPromises = [];
  }

  _createMessage = (text) => {
    return {
      Id: uuidv4(),
      text,
      creationTime: new Date(),
      receivedTime: null,
    };
  };

  addMessage = (text) => {
    const message = this._createMessage(text);

    if (this._waitingPromises.length > 0) {
      const promise = this._waitingPromises.shift();
      promise.resolve(message);
    } else {
      this._messages.push(message);
      console.log("msg added");
      console.log(this._messages);
    }
  };

  getNextMessage = async () => {
    if (this._messages.length === 0)
      return new Promise((resolve, reject) => {
        this._waitingPromises.push({ resolve, reject });
      });

    return this._messages.shift();
  };
}

export default new Util();
