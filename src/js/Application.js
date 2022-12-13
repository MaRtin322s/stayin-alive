import EventEmitter from "eventemitter3";
import Beat from "./Beat";

export default class Application extends EventEmitter {
  static get events() {
    return {
      READY: "ready",
    };
  }

  constructor() {
    super();
    const lyrics = ["Ah", "ha", "ha", "ha", "stayin' alive", "stayin' alive"];
    let count = 0;

    this._beat = new Beat();
    this._beat.on('listen', function (data) {
    this.emit(Beat.events.BIT);

      if (count == 6) {
        count = 0;
      }
  
      let a = document.createElement('div');
      a.classList.add('message');
  
      for (let i = 0; i < 1; i++) {
        const element = lyrics[count];
        document.querySelector(".main").appendChild(a);
        a.innerHTML = element;
        count++;
      }
  
    })

    this._create()

    this.emit(Application.events.READY);
  }

  _create() {

  }
}
