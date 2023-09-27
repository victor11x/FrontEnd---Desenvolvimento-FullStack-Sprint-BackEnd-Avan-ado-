let totalValorTotal = 0;
let qtdProduto = 0;
let ticketMedioDevolvidos = 0;
// Função para inserir um item na tabela
const insertList = (
  descricao_pedidos,
  quantidade,
  valor_compra,
  valor_frete,
  valor_total
) => {
  const tabela = document.getElementById("minhaTabelaPedidos"); // Substitua "minhaTabela" pelo ID da sua tabela HTML

  // Crie uma nova linha da tabela
  const newRow = tabela.insertRow();

  // Crie células e insira dados
  const cell1 = newRow.insertCell(0);
  const cell2 = newRow.insertCell(1);
  const cell3 = newRow.insertCell(2);
  const cell4 = newRow.insertCell(3);
  const cell5 = newRow.insertCell(4);

  // Preencha as células com os dados
  cell1.textContent = descricao_pedidos;
  cell2.textContent = quantidade;
  cell3.textContent = valor_compra;
  cell4.textContent = valor_frete;
  cell5.textContent = valor_total;

  // Adicione o valor total ao total global
  totalValorTotal += valor_total;
  qtdProduto += quantidade;
  ticketMedioDevolvidos = valor_total / quantidade;

  // Atualize a variável no HTML
  document.getElementById("totalValorTotal").textContent =
    totalValorTotal.toFixed(2);

  document.getElementById("qtdProduto").textContent = qtdProduto;
  document.getElementById("ticketMedioDevolvidos").textContent =
    ticketMedioDevolvidos;
};

const getList = async () => {
  let url = "http://127.0.0.1:5003/pedidos";
  fetch(url, {
    method: "get",
  })
    .then((response) => response.json())
    .then((data) => {
      data.pedidos.forEach((item) =>
        insertList(
          item.descricao_pedidos,
          item.quantidade,
          item.valor_compra,
          item.valor_frete,
          item.valor_total
        )
      );
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

// Chamada da função para carregamento inicial dos dados
getList();
