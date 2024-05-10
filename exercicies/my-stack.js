class MyStack {
    constructor() {
        this.elementos = [];
    }

    // Adicionando item na Pilha
    push(item) {
        this.elementos.push(item);
    }
    
    // Removendo item da Pilha, no caso vai remover o último item inserido
    pop() {
        if (this.isEmpty()) {
            throw new Error("A Pilha esta vazia.");
        }
        return this.elementos.pop();
    }

    // Visualizar o último valor da Pilha
    peek() {
        if (this.isEmpty()) {
            throw new Error("A Pilha esta vazia.");
        }
        return this.elementos[this.count() - 1];
    }

    // Verificar se a pilha esta vazia
    isEmpty() {
        return this.elementos.length === 0;
    }

    // Tamanho da Pilha
    count() {
        return this.elementos.length;
    }
}

const stack = new MyStack();

stack.push(10);
stack.push(20);
stack.push(30);

console.log("Pop:", stack.pop())
console.log("Peek:", stack.peek())

console.log("Pilha:")
while(!stack.isEmpty()) {
    console.log(stack.pop())
}