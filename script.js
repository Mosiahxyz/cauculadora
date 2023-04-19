function alerta() {
    if (document.querySelector('#texto')) {
        var texto = document.querySelector('#texto');
        alert(texto === null || texto === void 0 ? void 0 : texto.value);
    }
    else {
        return alert("não existe");
    }
}
