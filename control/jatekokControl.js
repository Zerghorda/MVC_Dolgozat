import Modell from "../modell/modell.js";
import Jatekok from "../view/jatekok.js";

export default class Control {
  #szuloElem;
  #modell;
  #view;
  constructor() {
    this.#modell = new Modell();
    this.#view = new Jatekok();
    this.#szuloElem = $("article");
    megjelenitis();
  }
  megjelenitis() {
    this.#view.jatekokGeneral(this.#szuloElem);
  }
  esemeny(){
    $(window).addEventListener("click",function () {
        document.getElementById("gomb")
    })

    
  }
}
