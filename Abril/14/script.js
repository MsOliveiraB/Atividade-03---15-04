document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.getElementById('id_formulario');

    formulario.addEventListener('submit', function(event) {
        event.preventDefault(); 

        const nome = document.getElementById('id_nome').value.trim();
        const endereco = document.getElementById('endereco').value.trim();

        if (nome === '') {
            alert('Por favor, informe seu nome.');
            return;
        }

        if (endereco === '') {
            alert('Por favor, informe seu endereço.');
            return;
        }

        const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
        let ingredientes = [];
        checkboxes.forEach(checkbox => {
            ingredientes.push(checkbox.value);
        });
        const ingredientesStr = ingredientes.length > 0 ? ingredientes.join(', ') : 'Nenhum ingrediente selecionado';

        const tamanhoSelecionado = document.querySelector('input[name="tamanho"]:checked');
        if (!tamanhoSelecionado) {
            alert('Por favor, escolha um tamanho de pizza.');
            return;
        }
        const tamanho = tamanhoSelecionado.value;

        const selectMassa = document.querySelector('select[name="massa"]');
        const massa = selectMassa.value;
        if (massa === '') {
            alert('Por favor, selecione um tipo de massa.');
            return;
        }

        const mensagem = `
            Pedido realizado com sucesso!
            ------------------------------
            Nome: ${nome}
            Ingredientes: ${ingredientesStr}
            Tamanho: ${tamanho}
            Tipo de massa: ${massa}
            Endereço de entrega: ${endereco}
        `;

        alert(mensagem);
    });
});