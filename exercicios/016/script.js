let ttni = window.document.querySelector("input#inicio");
let ttnf = window.document.querySelector("input#fim");
let ttnp = window.document.querySelector("input#passo");

let inicio = Number(ttni.value);
let fim = Number(ttnf.value);
let passo = Number(ttnp.value);

let res = window.document.querySelector("div#saidas");
let numero = inicio;
function contar() {
  for (inicio; inicio >= fim; passo++) {
    numero = inicio;
    res.innerHTML = `<p>${numero}</p>`;
    numero = numero + passo;
  }
}
