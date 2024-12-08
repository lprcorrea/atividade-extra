document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form-cadastro');
    const dadosDiv = document.getElementById('dados');
    const tabelaCorpo = document.getElementById('tabela-corpo');
    const voltarBtn = document.getElementById('voltar-btn');
    const formulario = document.getElementById('form-cadastro');

    // Função para carregar os clientes na tabela (sem usar localStorage)
    function carregarClientes() {
        tabelaCorpo.innerHTML = ''; // Limpa a tabela antes de recarregar
    }

    // Chama a função para carregar a tabela ao carregar a página
    carregarClientes();

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Captura os dados do formulário
        const nome = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const telefone = document.getElementById('telephone').value;
        const observacoes = document.getElementById('obs').value;

        // Cria uma nova linha na table com os dados inseridos
        const novaLinha = document.createElement('tr');
        novaLinha.innerHTML = `
            <td>${nome}</td>
            <td>${email}</td>
            <td>${telefone}</td>
            <td>${observacoes}</td>
        `;
        tabelaCorpo.appendChild(novaLinha);

        // Esconde o formulário e mostra a tabela
        formulario.style.display = 'none';
        dadosDiv.style.display = 'block';
    });

    voltarBtn.addEventListener('click', function() {
        // Esconde a tabela e mostra o formulário
        dadosDiv.style.display = 'none';
        formulario.style.display = 'block';
    });
});