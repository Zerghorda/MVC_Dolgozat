import Jatek from "./jatek.js";

export default class Jatekok {
  #lista = [];
  #tartalomELEM;

  constructor(lista, tartalomELEM) {
    this.#lista = lista;
    this.#tartalomELEM = tartalomELEM;
    //this.#tartalomELEM.empty();
    this.jatekokGeneral();
  }

  jatekokGeneral() {
    this.#lista.forEach((elem, index) => {
      console.log(elem);
      new Jatek(elem, index, this.#tartalomELEM);
    });
  }
}
