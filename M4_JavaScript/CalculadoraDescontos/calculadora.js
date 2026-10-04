// Função para calcular o desconto
function calcularDesconto() {

    // Entrada de dados
    let valorOriginal = document.getElementById("valor").value;
    let desconto = document.getElementById("desconto").value;

    // Processamento
    let valorDesconto = (valorOriginal * desconto) / 100;
    let valorFinal = valorOriginal - valorDesconto;

    // Saída de dados
    document.getElementById("resultado").textContent = "Valor final com desconto: R$ " + valorFinal;

}


