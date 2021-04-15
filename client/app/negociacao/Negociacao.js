class Negociacao {

    constructor(data, quantidade, valor) {
        Object.assign(this, { _data: new Date(data.getTime()), _quantidade: quantidade, _valor: valor});
        Object.freeze(this);
    }

    get volume() {
        return this._quantidade * this._valor;
    }
    get data(){
        return this._data;
    }
    get quantidade() {
        return this._quantidade;
    }
    get valor() {
       
        return this._valor
    }
}