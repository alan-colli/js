let lista = [];

let inputNome = document.querySelector("#inome");
let inputTarefa = document.querySelector("#itarefa");
let tabela = document.querySelector("#itabela");

function adicionar() {
  const listaTarefa = {
    id: crypto.randomUUID(),
    nome: inputNome.value,
    tarefa: inputTarefa.value,
  };

  lista.push(listaTarefa);
  inputNome.value = "";
  inputTarefa.value = "";
  listar();
}

function listar() {
  const tabela = document.getElementById("itabela");
  tabela.innerHTML = "";
  lista.forEach((listaTarefa) => {
    const row = document.createElement("tr");
    row.innerHTML += `
        <tr>
            <td>${listaTarefa.id}</td>
            <td>${listaTarefa.nome}</td>
            <td>${listaTarefa.tarefa}</td>
            <td>
                <button class="botao" onclick="excluir('${listaTarefa.id}')">Excluir</button>
            </td>
        </tr>
    `;
    tabela.appendChild(row);
  });
}

function excluir(id) {
  lista = lista.filter((listaTarefa) => listaTarefa.id !== id);
  listar();
}
