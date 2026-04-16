const form = document.getElementById("calculadora_imc");
const resultado = document.getElementById("resultado");

form.addEventListener("submit", function(event) {
    event.preventDefault(); // impede o recarregamento da página

    const nome = document.getElementById("nome").value.trim();
    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);

    // Validação simples
    if (peso <= 0 || altura <= 0 || isNaN(peso) || isNaN(altura)) {
        resultado.innerHTML = `<p style="color:red;">Por favor, insira valores válidos.</p>`;
        return;
    }

    const imc = peso / (altura * altura);
    const imcFormatado = imc.toFixed(2);

    let classificacao = "";
    let cor = "";

if (imc < 18.5) {
    classificacao = "Abaixo do peso";
}

else if (imc >= 18.5 && imc <= 24.9) {
    classificacao = "Peso normal";
}

else if (imc >= 25.0 && imc <= 29.9) {
    classificacao = "Acima do peso";
}

else if (imc >= 30.0 && imc <= 34.9) {
    classificacao = "Obeso(a) Grau 1";
}

else if (imc >= 35.0 && imc <= 39.9) {
    classificacao = "Obeso(a) Grau 2";
}

else if (imc >= 40.0) {
    classificacao = "Obeso(a) Grau 3"
}

resultado.innerHTML = `
        <p>Olá, <strong>${nome}</strong>!</p>
        <p>Seu IMC é <strong>${imcFormatado}</strong></p>
        <p style="color:${cor}; font-weight:bold;">
            Classificação: ${classificacao}
        </p>
    `;
});