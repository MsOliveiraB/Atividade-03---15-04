let form = document.getElementById("id_formulario");
// let form = document.querySelector("#id_formulario");

form.addEventListener(("submit"), (e)=>{
    e.preventDefault();
    console.log("Chamou!")

    let nome = document.getElementById("id_nome").value;
    console.log(nome);

    let idade = document.getElementById("id_idade").value;
    console.log(idade);

    let resultado = document.getElementById("id_resultado");
    resultado.innerHTML += `
    <p>Nome: ${nome} - Idade: ${idade}</p><br/>`;

});


// let nome = document.getElementById("id_nome");e");