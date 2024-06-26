type Address = {
    rua: string;
    cidade: string;
    estado: string;
    cep: string;
}

type Contact = {
    telefone: string;
    email: string;
}

interface Person {
    nome: string;
    idade: number;
}

interface Employee {
    cargo: string;
    salario: number;
}

type EmployeeDetails = Person & Employee & Address & Contact;

type PartialEmployee = Partial<EmployeeDetails>;
type ReadonlyEmployee = Readonly<EmployeeDetails>;
type EmployeeWithoutContact = Omit<EmployeeDetails, "telefone" | "email">;

function cadastrarFuncionario(dados: PartialEmployee): ReadonlyEmployee {
    const defaultData: EmployeeDetails = {
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
    }
    return Object.freeze(defaultData);
}

const novoFuncionario: PartialEmployee = {
    nome: 'G',
    cargo: 'Desenvolvedor',
    salario: 10000,
}
const funcionarioCadastrado = cadastrarFuncionario(novoFuncionario);
console.log(funcionarioCadastrado);
