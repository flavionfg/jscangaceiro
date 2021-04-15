class NegociacaoController {

    constructor(){
        let $ = document.querySelector.bind(document);
       
        // buscando os elementos
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
    }
    adiciona(event) {
        event.preventDefault();
        let data = new Date(
            ...this._inputData.value
            .split('-')
            .map((item, indice) => item - indice % 2) 
            );
            let negociacao = new Negociacao(
                data, //nao esquecer de mudar esta linha!
                parseInt(this._inputQuantidade.value),
                parseFloat(this._inputValor.value)
            );
                console.log(negociacao);
        }
}