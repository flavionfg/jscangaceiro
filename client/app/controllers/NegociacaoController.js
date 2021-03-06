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
        let converter = new DateConverter();
        let data = converter.paraData(this._inputData.value);
        let negociacao =  new Negociacao(
            data,
            parseInt(this._inputQuantidade.value),
            parseFloat(this._inputValor.value)
        );
        let diaMesAno = converter.paraTexto(negociacao.data);
       
        console.log(negociacao);
        console.log(diaMesAno);
        }
}