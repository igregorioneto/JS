// Função que simula a busca de dados de uma URL
async function buscarDados(url) {
    // Implemente a simulação de uma busca de dados
    // Retorne uma Promise que resolve com dados simulados após um atraso aleatório
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ url,  id: Math.floor(Math.random() * 10), status: Math.random() * 10 > 5 })
        }, 1000);
    })
}

// Função que simula o processamento de dados
async function processarDados(dados) {
    // Implemente a simulação de processamento de dados
    // Retorne uma Promise que resolve após um breve processamento simulado
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ ...dados, processed: true })
        }, 1000);
    })
}

// Função principal que gerencia as tarefas assíncronas
async function gerenciarTarefas(urls) {
    try {
        // Use Promise.all para buscar dados de todas as URLs ao mesmo tempo
        // Use Promise.race para retornar a primeira tarefa concluída
        // Processe os dados recebidos de cada URL
        // Lide com erros de forma adequada
        const promessas = urls.map(url => buscarDados(url));        
        let dados = await Promise.all(promessas);
        console.log('Dados Recebidos', dados)

        const promessasDados = dados.map(dado => processarDados(dado));
        dados = await Promise.all(promessasDados); 
        console.log('Dados Estruturados', dados)

        dados = await Promise.race(dados);
        console.log('Dados Recebidos', dados)
    } catch (erro) {
        // Tratamento de erro
        console.log(erro)
    }
}

// Array de URLs para simulação
const urls = [
    'https://api.example.com/dados1',
    'https://api.example.com/dados2',
    'https://api.example.com/dados3'
];

// Execute a função de gerenciamento de tarefas
gerenciarTarefas(urls);
