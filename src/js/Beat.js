import EventEmitter from "eventemitter3";

export default class Beat extends EventEmitter {
  static get events() {
    return {
      BIT: "bit",
    };
  }

  constructor() {
    super()
    setInterval(() => {
        this.emit('listen', Beat.events.BIT);
    }, 600);
  }
}