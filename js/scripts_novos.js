let totalValorTotal = 0;
let qtdProduto = 0;
let saldo = 0;

// Função para inserir um item na tabela
const insertList = (
  nome_produto,
  categoria,
  prateleira,
  posicao,
  quantidade,
  total
) => {
  const tabela = document.getElementById("minhaTabela"); // Substitua "minhaTabela" pelo ID da sua tabela HTML

  // Crie uma nova linha da tabela
  const newRow = tabela.insertRow();

  // Crie células e insira dados
  const cell1 = newRow.insertCell(0);
  const cell2 = newRow.insertCell(1);
  const cell3 = newRow.insertCell(2);
  const cell4 = newRow.insertCell(3);
  const cell5 = newRow.insertCell(4);
  const cell6 = newRow.insertCell(5);

  // Preencha as células com os dados
  cell1.textContent = nome_produto;
  cell2.textContent = categoria;
  cell3.textContent = prateleira;
  cell4.textContent = posicao;
  cell5.textContent = quantidade;
  cell6.textContent = total;

  const valorTotalNumero = parseFloat(total);

  // Adicione o valor total ao total global
  totalValorTotal += total;
  qtdProduto += quantidade;
  saldo = 100000.0 - totalValorTotal;

  // Atualize a variável no HTML
  document.getElementById("totalValorTotal").textContent =
    totalValorTotal.toFixed(2);

  document.getElementById("qtdProduto").textContent = qtdProduto;
  document.getElementById("saldo").textContent = saldo;
};

const getList = async () => {
  let url = "http://127.0.0.1:5001/aquisicoes";
  fetch(url, {
    method: "get",
  })
    .then((response) => response.json())
    .then((data) => {
      data.aquisicoes.forEach((item) =>
        insertList(
          item.nome_produto,
          item.categoria,
          item.pratileira,
          item.posicao,
          item.quantidade,
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
