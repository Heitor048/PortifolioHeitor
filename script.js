// Seleciona o formulário
const formulario = document.getElementById("formContato");

// Executa quando clicar em Enviar
formulario.addEventListener("submit", function (event) {

    // Impede que a página recarregue
    event.preventDefault();

    // Pega os valores e remove espaços extras
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();

    // Verifica se todos os campos foram preenchidos
    if (nome === "" || email === "" || mensagem === "") {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    // Validação de e-mail
    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailValido.test(email)) {
        alert("Digite um e-mail válido.");
        return;
    }

    // Tudo certo
    alert("Mensagem enviada com sucesso!");

    // Limpa o formulário
    formulario.reset();
});