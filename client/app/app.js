// client/app/app.js
// criou a instância do controller

let controller = new NegociacaoController();

// associa o evento de submissão do formulário à chamada do métod
o "adiciona"

document
.querySelector('.form')
.addEventListener('submit', function(event) { //primeiro é o nome do evento e o segundo é a funçao que desejamos chamar
controller.adiciona(event);
});