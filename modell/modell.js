export default class Modell {
  #lista = [
    { nev: "Total War:Warhammer3", stilus: "Rts", ar: 20000 },
    { nev: "Warframe", stilus: "Action", ar: 0 },
    { nev: "Halo", stilus: "Fps", ar: 16000 },
  ];
  constructor() {
    this.removeAktELEM();
  }
  removeAktELEM(index) {
   //this.#lista.pop(index);
  }

  getLISTA() {
    return this.#lista;
  }
}
