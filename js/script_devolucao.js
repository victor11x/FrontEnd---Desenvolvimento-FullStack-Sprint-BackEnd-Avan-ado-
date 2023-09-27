let totalValorTotal = 0;
let qtdProduto = 0;
let ticketMedioDevolvidos = 0;
// Função para inserir um item na tabela
const insertList = (
  nome_produto,
  categoria,
  quantidade,
  nome_cliente,
  motivo,
  valor_total
) => {
  const tabela = document.getElementById("minhaTabelaDevolucao"); // Substitua "minhaTabela" pelo ID da sua tabela HTML

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
  cell3.textContent = quantidade;
  cell4.textContent = nome_cliente;
  cell5.textContent = motivo;
  cell6.textContent = valor_total;

  const valorTotalNumero = parseFloat(valor_total);
  const qtdProdutoNumero = parseInt(quantidade);

  // Adicione o valor total ao total global
  totalValorTotal += valorTotalNumero;
  qtdProduto += qtdProdutoNumero;
  ticketMedioDevolvidos = totalValorTotal / qtdProduto;

  // Atualize a variável no HTML
  document.getElementById("totalValorTotal").textContent =
    totalValorTotal.toFixed(2);

  document.getElementById("qtdProduto").textContent = qtdProduto;
  document.getElementById("ticketMedioDevolvidos").textContent =
    ticketMedioDevolvidos;

  const numeroDeLinhas = tabela.rows.length;
  // Exibe o número de linhas (por exemplo, em um elemento HTML)
  document.getElementById("numeroDeLinhas").textContent = numeroDeLinhas;

  // Converta o valor total para número (caso ele esteja em formato de string)
};

const getList = async () => {
  let url = "http://127.0.0.1:5004/devolucoes";
  fetch(url, {
    method: "get",
  })
    .then((response) => response.json())
    .then((data) => {
      data.devolucoes.forEach((item) =>
        insertList(
          item.nome_produto,
          item.categoria,
          item.quantidade,
          item.nome_cliente,
          item.motivo,
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
