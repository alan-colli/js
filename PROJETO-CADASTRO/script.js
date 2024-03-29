let lista = [];
let inputNome = document.getElementById("iproduto");
let inputValor = document.getElementById("ivalor");
let tabela = document.getElementById("tabela");

function adicionar() {
  const produto = {
    id: crypto.randomUUID(),
    nome: inputNome.value,
    valor: inputValor.value,
  };

  lista.push(produto);
  inputNome.value = "";
  inputValor.value = "";
  listar();
}

function listar() {
  const tabela = document.getElementById("tabela"); // Assuming "tabela" is the id of your table element
  tabela.innerHTML = ""; // Clearing existing content

  for (let produto of lista) {
    // Creating a new table row for each product
    const row = document.createElement("tr");
    row.id = "row-" + produto.id; // Unique id for each row

    // Adding table data for each attribute of the product
    row.innerHTML += ` 
        <td>${produto.id}</td>
        <td>${produto.nome}</td>
        <td>${produto.valor}</td>
        <td>
          <input type="button" class="botao" value="Excluir" data-product-id="${produto.id}">
        </td>`;

    // Adding click event listener to the delete button
    const botaoExcluir = row.querySelector(
      'input[data-product-id="' + produto.id + '"]'
    );
    botaoExcluir.addEventListener("click", () => {
      excluir(produto.id);
    });

    // Appending the row to the table
    tabela.appendChild(row);
  }
}
function excluir(id) {
  lista = lista.filter((produto) => produto.id !== id);
  listar();
}
