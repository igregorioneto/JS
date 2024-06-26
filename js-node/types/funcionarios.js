function cadastrarFuncionario(dados) {
    var defaultData = {
        nome: dados.nome || "Desconhecido",
        idade: dados.idade || 0,
        cargo: dados.cargo || "Não especificado",
        salario: dados.salario || 0,
        rua: dados.rua || "Não especificado",
        cidade: dados.cidade || "Não especificado",
        estado: dados.estado || "Não especificado",
        cep: dados.cep || "Não especificado",
        telefone: dados.telefone || "Não especificado",
        email: dados.email || "Não especificado"
    };
    return Object.freeze(defaultData);
}
var novoFuncionario = {
    nome: 'G',
    cargo: 'Desenvolvedor',
    salario: 10000
};
var funcionarioCadastrado = cadastrarFuncionario(novoFuncionario);
console.log(funcionarioCadastrado);
