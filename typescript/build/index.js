"use strict";
console.log("Hello world!");
var Produto = (function () {
    function Produto(produtoNome, produtoValor) {
        this.nome = produtoNome;
        this.valor = produtoValor;
    }
    return Produto;
}());
var leite = new Produto("leite", 20);
