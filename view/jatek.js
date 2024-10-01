export default class Jatek {
  #index;
  constructor(elem, index, szuloELEM) {
    this.elem = elem;
    this.szuloELEM = szuloELEM;
    this.#index = index;
    console.log(this.#index);
    this.gombELEM = $(".gomb");
    this.jatekGeneral();
    this.esemenyKezelo();
  }
  jatekGeneral() {
    this.szuloELEM.append(
      `<div class="card col-lg-4 text-center">
        <div class="card-header">${this.elem.nev}</div>
        <div class="card-body">${this.elem.stilus}</div>
        <div class="card-footer">${this.elem.ar} Ft</div>
        <div class="gomb"><button type="button">Törlés</button></div>
      </div>`
    );
  }
  esemenyKezelo() {
    this.gombELEM.on("click", () => {
      const e = new CustomEvent("kivalaszt", { detail: this.#index });
      window.dispatchEvent(e);
    });
  }
}
