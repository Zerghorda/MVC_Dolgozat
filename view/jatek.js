export default class Jatek {
  #nev;
  #stilus;
  #ar;
  #index;
  constructor() {
    this.#nev = nev;
    this.#stilus = stilus;
    this.#ar = ar;
    jatekGeneral();
    this.esemenyKezelo();
  }
  jatekGeneral() {
    this.szuloELEM.appand(
      `<div class="card">
        <div class="card-header">${this.#nev}</div>
        <div class="card-body">${this.#stilus}</div>
        <div class="card-footer">${this.#ar}</div>
        <div class="gomb"><button type="button">Törlés</button></div>
      </div>`
    );
  }
  esemenyKezelo() {
    this.gombELEM.on("click", () => {
      const e = new CustomEvent("esemeny", { detail: this.#index });
      window.dispatchEvent(e);
    });
  }
}
