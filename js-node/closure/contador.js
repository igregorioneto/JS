const meuContador = (function() {
    let contador = 0;

    function incrementar() {
        contador++;
        return contador;
    }

    function decrementar() {
        contador--;
        return contador;
    }

    function resetar() {
        contador = 0;
        return contador;
    }
    
    return {
        incrementar,
        decrementar,
        resetar
    }
})();

console.log(meuContador.incrementar());
console.log(meuContador.incrementar());
console.log(meuContador.decrementar());
console.log(meuContador.resetar());