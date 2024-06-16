class Livro {
    constructor(titulo, autor) {
        this.titulo = titulo
        this.autor = autor
        this.emprestado = false
    }

    get estadoEmprestimo() {
        return this.emprestado ? 'Emprestado' : 'Disponível'
    }

    set marcarComoEmprestado(valor) {
        this.emprestado = valor;
    }
}

class Biblioteca {
    constructor() {
        this.livros = [];
    }

    adicionarLivro(livro) {
        // Implementar
        this.livros.push(livro)
    }

    removerLivro(titulo) {
        // Implementar
        const index = this.livros.findIndex(b => b.titulo === titulo)
        if (index !== -1)
            this.livros.splice(index, 1)
    }

    listarLivros() {
        // Implementar
        this.livros.forEach(l => console.log(`${l.titulo} - ${l.autor} - ${l.estadoEmprestimo}`))
    }

    marcarComoEmprestado(titulo) {
        // Implementar
        const livro = this.livros.find(l => l.titulo === titulo)
        if (livro) {
            livro.emprestado = true
        }
    }

    marcarComoDisponivel(titulo) {
        // Implementar
        const livro = this.livros.find(l => l.titulo === titulo)
        if (livro) {
            livro.emprestado = false
        }
    }

    livrosEmprestados() {
        // Implementar
        this.livros.forEach(l => {
            if (l.emprestado) {
                console.log(`${l.titulo} - ${l.autor} - ${l.estadoEmprestimo}`)
            }
        })
    }

    livrosDisponiveis() {
        // Implementar
        this.livros.forEach(l => {
            if (!l.emprestado) {
                console.log(`${l.titulo} - ${l.autor} - ${l.estadoEmprestimo}`)
            }
        })
    }
}

// Teste do sistema de gerenciamento de biblioteca
const biblioteca = new Biblioteca();

const livro1 = new Livro('1984', 'George Orwell');
const livro2 = new Livro('Brave New World', 'Aldous Huxley');
const livro3 = new Livro('Fahrenheit 451', 'Ray Bradbury');

biblioteca.adicionarLivro(livro1);
biblioteca.adicionarLivro(livro2);
biblioteca.adicionarLivro(livro3);

biblioteca.marcarComoEmprestado('1984');

console.log('Todos os livros:');
biblioteca.listarLivros();

console.log('Livros emprestados:');
biblioteca.livrosEmprestados();

console.log('Livros disponíveis:');
biblioteca.livrosDisponiveis();

biblioteca.removerLivro('Brave New World');
console.log('Todos os livros após remoção:');
biblioteca.listarLivros();