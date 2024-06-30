function validate(cpfEntrada) {
    const validandoTipoEntrada = (cpfEntrada !== null && cpfEntrada !== undefined);
    const validandoTamanhoEntrada = (cpfEntrada?.length >= 11 || cpfEntrada?.length <= 14);

    if (validandoTipoEntrada && validandoTamanhoEntrada) {
        cpfEntrada = transformandoCPFemArray(cpfEntrada);
        if (validandoTodosOsValoresSaoIguais(cpfEntrada)) return false;
        try {
            let primeiroDigito = 0, segundoDigito = 0;
            primeiroDigito = calculoDosDigitos(cpfEntrada, primeiroDigito, 11);
            segundoDigito = calculoDosDigitos(cpfEntrada, segundoDigito, 12);

            primeiroDigito = calculoRestoDivisaoDigitoVerificador(primeiroDigito);
            segundoDigito += 2 * primeiroDigito;
            segundoDigito = calculoRestoDivisaoDigitoVerificador(segundoDigito);
            return digitosVerificadores(cpfEntrada) == resultadoDosDigitos(primeiroDigito, segundoDigito);
        } catch (e) {
            console.error("Erro ao validar CPF: " + e);
            return false;
        }

    }
    return false;
}

const validandoTodosOsValoresSaoIguais = (cpf) => cpf.split("").every(c => c === cpf[0]);
const transformandoCPFemArray = (cpf) => cpf.replaceAll(/[.-]/g, '').trim()
const calculoDosDigitos = (cpf, digitoResultado, valorReferencia) => {
    for (let contador = 1; contador < cpf.length - 1; contador++) {
        digito = parseInt(cpf.substring(contador - 1, contador));
        digitoResultado = digitoResultado + (valorReferencia - contador) * digito;
    };
    return digitoResultado;
}
const digitosVerificadores = (cpf) => cpf.substring(cpf.length - 2, cpf.length);
const resultadoDosDigitos = (primeiroDigito, segundoDigito) => primeiroDigito +''+ segundoDigito;
const calculoRestoDivisaoDigitoVerificador = (digito) => (digito % 11) < 2 ? 0 : 11 - (digito % 11);

module.exports = {
    validate
};