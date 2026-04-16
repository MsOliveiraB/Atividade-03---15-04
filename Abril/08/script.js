let form = document.getElementById("id_formulario");

form.addEventListener("submit", evento => {
    evento.preventDefault();

    let nome = document.getElementById("id_nome").value;
    let email = document.getElementById("id_email").value;
    let idade = document.getElementById("id_idade").value;
    let radio = document.querySelector('input[name="radio_s"]:checked').value;

    
    console.log();

    let checkbox = document.querySelectorAll('input[name="checkbox_tech"]');
    let checks_selecionados = "";
    for(let i = 0; i < checkbox.length; i++){
        console.log(checkbox[i]);
        if(checkbox[i].checked){
            checks_selecionados += `${checkbox[i].value} `;
        }
    }
    
    console.log(checks_selecionados)
    
    // let checks_selecionados2 = "";
    // let checkbox_outrOpcao = document.querySelectorAll('input[name="checkbox_tech"]:checked');
    
    // for(let i = 0; i < checkbox_outrOpcao.length; i++){
    //     checks_selecionados2 += ` ${checkbox_outrOpcao[i].value} `;
    //     // checks_selecionados += checkbox[i].checked
    // }

    // console.log(checks_selecionados2)

    let bloco = document.createElement("div");
    bloco.setAttribute("class", "caixa");
    bloco.innerHTML= 
    `<strong>Nome:</strong>  ${nome}<br>
    <strong>E-mail:</strong> ${email}<br>
    <strong>Idade:</strong> ${idade}<br> 
    <strong>Radio:</strong> ${radio}<br> 
    <strong>Tecnologias:</strong> ${checks_selecionados}<br>
    ------------------------------`;
    document.body.appendChild(bloco);

});