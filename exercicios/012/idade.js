function verificar() {
  let ttn = window.document.querySelector("input#iano");
  let ano = Number(ttn.value);
  let idade = 2024 - ano;
  let res = window.document.querySelector("div#saidas");

  let checkboxes = window.document.querySelector(
    'input[name="genero"]:checked'
  );
  let sexo = [];
  sexo.push(checkboxes.value);
  res.innerHTML = `<p>Sua idade é ${idade} e seu sexo é ${sexo}`;
}
