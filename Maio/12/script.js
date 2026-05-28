let torcedores = [];

const timesMap = {
    "valor1": { imagem: "paulo_ceara.png", nome: "Ceará" },
    "valor2": { imagem: "lion.png", nome: "Fortaleza" },
    "valor3": { imagem: "ericson.png", nome: "Outro Time" }
};

function criarElementoTorcedor(torcedor, index) {
    const torcedorDiv = document.createElement("div");
    torcedorDiv.className = "torcedor-item";
    torcedorDiv.setAttribute("data-index", index);
    
    const legenda = document.createElement("p");
    legenda.className = "legenda-torcedor";
    legenda.textContent = torcedor.nome;
    
    const img = document.createElement("img");
    img.src = timesMap[torcedor.time].imagem;
    img.alt = timesMap[torcedor.time].nome;
    img.className = "time-imagem";
    
    const botaoEditar = document.createElement("button");
    botaoEditar.textContent = "Editar";
    botaoEditar.className = "botao-editar";
    botaoEditar.addEventListener("click", (e) => {
        e.stopPropagation();
        editarTorcedor(index);
    });
    
    torcedorDiv.addEventListener("click", () => removerTorcedor(index));
    
    torcedorDiv.appendChild(legenda);
    torcedorDiv.appendChild(img);
    torcedorDiv.appendChild(botaoEditar);
    
    return torcedorDiv;
}




function atualizarExibicao() {
    const container = document.getElementById("torcedores-container");
    if (!container) return;
    
    container.innerHTML = "";
    
    torcedores.forEach((torcedor, index) => {
        const elemento = criarElementoTorcedor(torcedor, index);
        container.appendChild(elemento);
    });
}



function removerTorcedor(index) {
    const confirmar = confirm(`Tem certeza que deseja remover o torcedor ${torcedores[index].nome}?`);
    
    if (confirmar) {
        torcedores.splice(index, 1);
        atualizarExibicao();
        alert("Torcedor removido com sucesso!");
    }
}



function editarTorcedor(index) {
    const torcedor = torcedores[index];
    const novoNome = prompt("Digite o novo nome do torcedor:", torcedor.nome);
    
    if (novoNome && novoNome.trim() !== "") {
        torcedor.nome = novoNome.trim();
        atualizarExibicao();
        alert(`Nome alterado para "${torcedor.nome}" com sucesso!`);
    } else if (novoNome !== null) {
        alert("Nome inválido. Nenhuma alteração foi feita.");
    }
}



function validarTorcedorFortaleza(nome) {
    const perguntas = [
        `Fortaleza?\nTem certeza que quer cadastrar o ${nome} assim macho vei?`,
        `Papo dez mermo? Dá uma chance pro Vozão, lá tu é mais feliz`,
        `Então vai ser assim, fechado com a galera do fundão?`
    ];
    
    for (let i = 0; i < perguntas.length; i++) {
        const resposta = confirm(perguntas[i]);
        if (!resposta) {
            alert("Muito bem, o Vozão te aguarda,\nPra cima!");
            return false;
        }
    }
    
    return true;
}



function adicionarTorcedor(event) {
    event.preventDefault();
    
    const nome = document.getElementById("nome").value.trim();
    const idade = document.getElementById("idade").value;
    const timeSelect = document.querySelector("select[name='time']");
    const time = timeSelect.value;
    
    if (!nome) {
        alert("Por favor, informe o nome do torcedor!");
        return;
    }
    
    if (!idade || idade < 0) {
        alert("Por favor, informe uma idade válida!");
        return;
    }
    
    if (!time || time === "") {
        alert("Por favor, selecione um time!");
        return;
    }
    
    if (time === "valor2") {
        const cadastroAprovado = validarTorcedorFortaleza(nome);
        if (!cadastroAprovado) {
            document.getElementById("formulario").reset();
            return;
        }
        alert(`Tu é o mais desconstruído do Horizonte todin macho, juízo!...\nTá bom, ${nome} cadastrado com sucesso.`);
    }
    


    const novoTorcedor = {
        nome: nome,
        idade: parseInt(idade),
        time: time
    };
    
    torcedores.push(novoTorcedor);
    atualizarExibicao();
    


    if (time !== "valor2") {
        alert(`Torcedor ${nome} cadastrado com sucesso para o ${timesMap[time].nome}!`);
    }
    
    document.getElementById("formulario").reset();
}



function criarContainerSeNecessario() {
    if (!document.getElementById("torcedores-container")) {
        const container = document.createElement("div");
        container.id = "torcedores-container";
        container.className = "torcedores-container";
        document.body.appendChild(container);
    }
}



document.addEventListener("DOMContentLoaded", () => {
    criarContainerSeNecessario();
    const form = document.getElementById("formulario");
    form.addEventListener("submit", adicionarTorcedor);
});

