function verificar() {
  let ttn = window.document.querySelector("input#iano");
  let ano = Number(ttn.value);
  let data = new Date();
  let atual = data.getFullYear();

  let res = window.document.querySelector("div#saidas");

  if (ano.length == 0 || ano > atual) {
    window.alert("[ERRO] Verifique os dados!");
  } else {
    let idade = atual - ano;
    let checkboxes = window.document.querySelector(
      'input[name="genero"]:checked'
    );
    let sexo = [];
    sexo.push(checkboxes.value);
    res.innerHTML = `<p>Sua idade é ${idade} e seu sexo é ${sexo}`;
  }
}
