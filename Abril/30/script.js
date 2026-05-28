// function sortear(max, min){
//     return Math.floor(Math.random() * (max - min +1)) + min;
// }

// const numeroAleatorio = String((Math.floor(Math.random() * 10) + 1));
// console.log(numeroAleatorio)



// function mostraAlerta()
// {

//     while 
//     alert("Você clicou no botão");
// }

// window.onload=function(){
//     let botaoAlerta = document.getElementById("numero");

//     botaoAlerta.onclick = function () {

//         if 
//         mostraAlerta() ;
//     };
// }

const numeroSecreto = Math.floor(Math.random() * 10) + 1;
let tentativasRestantes = 3, acabou = false;
const container = document.getElementById('numeros-container');

container.addEventListener('click', (e) => {
    if (acabou || !e.target.classList.contains('numero')) return;
    let chute = +e.target.textContent;
    tentativasRestantes--;

    if (chute === numeroSecreto) {
    acabou = true;
    alert(`Parabéns! Acertou com ${tentativasRestantes} tentativas restantes.`);

    } 

    else {

    if (tentativasRestantes === 0) {
        alert(`Você perdeu! O número sorteado era ${numeroSecreto}!`);
        acabou = true;
    } 
    
    else {
        alert(`Errou! Tentativas restantes: ${tentativasRestantes}`);
    }
}

    if (acabou === true && tentativasRestantes === 0 && chute !== numeroSecreto) {
    const div = document.getElementById('resultado');
    div.innerHTML = "Que pena, Paulo vai continuar na rua! -1000 Aura";
    div.style.display = "flex";
}
    if (acabou = true && chute === numeroSecreto) {
    const div = document.getElementById('resultado2');
    div.innerHTML = "Parabéns, você salvou o Paulo e ele se converteu ao Lion! +1000 Aura";
    div.style.display = "flex";
}

});

