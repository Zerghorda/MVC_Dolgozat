import Modell from "../modell/modell.js";
import Jatekok from "../view/jatekok.js";

export default class Control {
  constructor() {
    this.szuloElem = $("article");
    this.modell = new Modell();
    new Jatekok(this.modell.getLISTA(), this.szuloElem);
    this.#esemeny();
  }
  #esemeny() {
    $(window).on("kivalaszt", (event) => {
      console.log(event.detail);
      this.modell.removeAktELEM(event.detail);
      new Jatekok(this.modell.getLISTA(), this.taroloElem);
    });
  }
}
