
let controller = new NegociacaoController();

// associa o evento de submissão do formulário à chamada do método "adiciona"

document
.querySelector('.form')
.addEventListener('submit', function(event) { //primeiro é o nome do evento e o segundo é a funçao que desejamos chamar
controller.adiciona(event);
});