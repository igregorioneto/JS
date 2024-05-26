class Todo {
    static nextId = 1;
    constructor(title, status) {
        this.id = Todo.nextId++;
        this.title = title;
        this.status = status;
    }
}

class TodoList {
    constructor() {
        this.listTodo = [];
    }

    add(todo) {
        listTodo.push(todo);
    }

    list() {
        return this.listTodo;
    }

    getById(id) {
        return this.listTodo.filter(t => t.id === id);
    }

    update(id, title, status) {
        let todo = getById(id);
        if (todo) {
            todo.title = title;
            todo.status = status;
        } else {
            console.log(`Todo with id ${id} not found.`);
        }
    }

    delete(id) {
        const index = this.listTodo.findIndex(t => t.id === id);
        if (index !== -1) {
            this.listTodo.splice(index, 1);
        } else {
            console.log(`Todo with id ${id} not found.`);
        }
    }
}