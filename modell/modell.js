export default class Modell {
  #lista = [];
  #tartalomELEM;

  constructor(lista, tartalomELEM) {
    this.#lista = lista;
    this.#tartalomELEM = tartalomELEM;  
    this.#tartalomELEM.empty();
  }
  
}
