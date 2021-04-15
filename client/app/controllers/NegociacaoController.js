class NegociacaoController {

    constructor(){
        let $ = document.querySelector.bind(document);
       
        // buscando os elementos
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
    }
    
    adiciona(event) {
        // cancelando a submissão do formulário
        event.preventDefault();
        // precisamos acessar as propriedades através de this
        console.log(this._inputData.value);
        console.log(parseInt(this._inputQuantidade.value));
        console.log(parseFloat(this._inputValor.value));
        }
}
