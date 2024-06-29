function validate(cpfEntrada) {
    const validandoTipoEntrada = (cpfEntrada !== null && cpfEntrada !== undefined);
    const validandoTamanhoEntrada = (cpfEntrada?.length >= 11 || cpfEntrada?.length <= 14);

    if (validandoTipoEntrada && validandoTamanhoEntrada) {
        cpfEntrada = transformandoCPFemArray(cpfEntrada);
        if (validandoTodosOsValoresSaoIguais(cpfEntrada)) return false;
        try {
            let d1, d2;
            let dg1, dg2, rest;
            let digito;
            let nDigResult;
            d1 = d2 = 0;
            dg1 = dg2 = rest = 0;

            for (let nCount = 1; nCount < cpfEntrada.length - 1; nCount++) {
                digito = parseInt(cpfEntrada.substring(nCount - 1, nCount));
                d1 = d1 + (11 - nCount) * digito;
                d2 = d2 + (12 - nCount) * digito;
            };

            rest = (d1 % 11);
            dg1 = (rest < 2) ? dg1 = 0 : 11 - rest;
            d2 += 2 * dg1;
            rest = (d2 % 11);
            if (rest < 2)
                dg2 = 0;
            else
                dg2 = 11 - rest;
            let nDigVerific = cpfEntrada.substring(cpfEntrada.length - 2, cpfEntrada.length);
            nDigResult = "" + dg1 + "" + dg2;
            return nDigVerific == nDigResult;
        } catch (e) {
            console.error("Erro ao validar CPF: " + e);
            return false;
        }

    }
    return false;
}

const validandoTodosOsValoresSaoIguais = (cpf) => cpf.split("").every(c => c === cpf[0]);
const transformandoCPFemArray = (cpf) => cpf.replaceAll(/[.-]/g, '').trim()

module.exports = {
    validate
};