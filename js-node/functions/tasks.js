const tarefas = [];

function adicionarTarefa(titulo, descricao) {
  // Implementar
  tarefas.push({ id: tarefas.length + 1 ,titulo, descricao, status: 'nao-concluida' })
}

function removerTarefa(titulo) {
  // Implementar
  const index = tarefas.findIndex(task => task.titulo === titulo);
  if (index !== -1) {
    tarefas.splice(index, 1);
  }
}

function marcarComoConcluida(titulo) {
  // Implementar
  let task = tarefas.find(task => task.titulo === titulo);
  if (task) {
    task.status = 'concluida'
  }
}

const listarTarefas = (filtro = null) => {
  // Implementar
  // filtro pode ser 'concluida', 'nao-concluida' ou null (para todas as tarefas)
  if (filtro) {
    return tarefas.filter(t => t.status === filtro);
  }
  return tarefas;
}

const contarTarefas = () => {
  // Implementar
  const total = tarefas.length;
  const concluidas = listarTarefas('concluida').length;
  const naoConcluidas = total - concluidas;
  return { total, concluidas, naoConcluidas }
}

// Exemplos de uso
adicionarTarefa("Estudar JavaScript", "Completar o desafio sobre funções");
adicionarTarefa("Fazer exercícios", "Exercícios de programação");
marcarComoConcluida("Estudar JavaScript");

console.log(listarTarefas());
console.log(listarTarefas('concluida'));
console.log(listarTarefas('nao-concluida'));
console.log(contarTarefas());

removerTarefa("Fazer exercícios");
console.log(listarTarefas());
