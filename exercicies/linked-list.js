class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    // Adicionar um novo nó no início da lista
    addFirst(data) {
        let newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
    }

    // Adicionar um novo nó no final da lista
    addLast(data) {
        const newNode = new Node(data);
        if (this.head === null) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next != null) {
                current = current.next;
            }
            current.next = newNode;
        }        
    }

    // Remover o primeiro nó que contém o valor específico
    remove(data) {
        if (this.head === null) {
            return false;
        }

        if (this.head.data === data) {
            this.head = this.head.next;
            return true;
        }

        let current = this.head;
        while (current.next != null) {
            if (current.next.data === data) {
                current.next = current.next.next;
                return true;
            } 
            current = current.next;
        }
        return false;
    }

    // Retornar uma representação da lista ligada
    toString() {
        let result = "";
        let current = this.head;
        while(current != null) {
            result += current.data + " -> ";
            current = current.next;
        }
        return result + "null";        
    }
}

const linkedList = new LinkedList();
linkedList.addLast(1);
linkedList.addLast(2);
linkedList.addLast(3);
console.log("Lista após adicionar elementos ao final:");
console.log(linkedList.toString())

// Adicionando elemento no início
linkedList.addFirst(0);
console.log("Lista após adicionar elemento no início:");
console.log(linkedList.toString())

// Removendo um elemento
linkedList.remove(2);
console.log("Lista após remover elemento:")
console.log(linkedList.toString())