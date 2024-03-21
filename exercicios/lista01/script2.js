let num = document.querySelector("input#fnum");
let lista = document.querySelector("selecet#flista");
let res = document.querySelector("div#res");
let valores = [];

function isNumero(n) {
  if (Number(n) >= 1 && Number(n) <= 100) {
    return true;
  } else {
    return false;
  }
}

function inLista(n, l) {
  if (l.indexOf(Number(n)) != -1) {
    return true;
  } else {
    return false;
  }
}

function adicionar() {
  if (isNumero(num.value) && linLista(num.value, valores)) {
    window.alert("Tudo ok");
  } else {
    window.alert("Valor invalido ou ja encontrado");
  }
}
