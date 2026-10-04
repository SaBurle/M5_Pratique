function calcularIMC(peso, altura) {

    let pesoPersona = parseFloat(document.getElementById("peso").value);
    let alturaPersona = parseFloat(document.getElementById("altura").value);

    if (alturaPersona <= 0) {
        throw new Error("A altura deve ser maior que zero.");
    }
    const imc = pesoPersona / ((alturaPersona / 100) * (alturaPersona / 100));

    document.getElementById("resultado").textContent = "Seu IMC é: " + imc.toFixed(2);

    if (imc < 18.5) {
        document.getElementById("classificacao").innerHTML = "Classificação: Abaixo do peso <br><br>É importante manter uma alimentação equilibrada e consultar um profissional de saúde para orientação.";
    } else if (imc >= 18.5 && imc < 24.9) {
        document.getElementById("classificacao").innerHTML = "Classificação: Peso normal <br><br>Continue mantendo hábitos saudáveis e praticando atividades físicas regularmente.";
    } else if (imc >= 25 && imc < 29.9) {
        document.getElementById("classificacao").innerHTML = "Classificação: Sobrepeso <br><br>É importante manter hábitos saudáveis e praticar atividades físicas regularmente para evitar complicações de saúde.";
    } else {
        document.getElementById("classificacao").innerHTML = "Classificação: Obesidade <br><br>É importante buscar orientação médica para um plano de tratamento adequado.";
    }

    document.getElementById("classificacao").innerHTML += "<br><br>A tabela de classificação do IMC é a seguinte:<br> - Abaixo do peso: IMC < 18,5<br> - Peso normal: 18,5 ≤ IMC < 24,9<br> - Sobrepeso: 25 ≤ IMC < 29,9<br> - Obesidade: IMC ≥ 30";

    document.getElementById("resultado").style.display = "block";
    document.getElementById("classificacao").style.display = "block";
    document.getElementById("resultado").style.fontWeight = "bold";
    document.getElementById("classificacao").style.fontWeight = "bold";

    return imc;
}