class MyQueue {
    constructor() {
        this.elementos = [];
    }
    // Adicionando elemento na Fila
    push(item) {
        this.elementos.push(item);
    }

    // Remover o primeiro elemento da Fila
    pop() {
        if (this.isEmpty()) {
            throw Error("A Fila esta vazia.");
        }
        return this.elementos.shift();
    }

    // Visualizar o primeiro elemento da Fila
    peek() {
        if (this.isEmpty()) {
            throw Error("A Fila esta vazia.");
        }
        return this.elementos[0];
    }

    // Verificar se a fila esta vazia
    isEmpty() {
        return this.elementos.length === 0;
    }

    // Quantidade de items na Fila
    count() {
        return this.elementos.length;
    }

}

const queue = new MyQueue();
queue.push(10);
queue.push(20);
queue.push(30);

console.log("Pop:", queue.pop());
console.log("Peek:", queue.peek());
console.log("Queue:")
while(!queue.isEmpty()) {
    console.log(queue.pop());
}
