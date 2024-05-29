const { Worker } = require('worker_threads');

function runWorker(number) {
    return new Promise((resolve, reject) => {
        const worker = new Worker('./worker.js');
        worker.postMessage(number);
        worker.on('message', resolve);
        worker.on('error', reject);
        worker.on('exit', (code) => {
            if (code !== 0) {
                reject(new Error(`Worker stopped with exit code ${code}`));
            }
        });
    });
}

const numbers = [10, 20, 5, 6, 30, 10, 40]; // Números para calcular o fatorial

async function main() {
    const promises = numbers.map(runWorker);

    // Continuar com outras operações enquanto os cálculos estão em andamento
    console.log('Os cálculos de fatoriais foram iniciados.');
    console.log('Continuando com outras operações no programa principal...');

    // Aqui você pode adicionar outras operações que deseja realizar

    // Aguardar a conclusão dos cálculos
    const results = await Promise.allSettled(promises);

    results.forEach((result, index) => {
        if (result.status === 'fulfilled') {
            console.log(`Fatorial de ${numbers[index]} é ${result.value}`);
        } else {
            console.error(`Erro ao calcular o fatorial de ${numbers[index]}: ${result.reason}`);
        }
    });

    console.log('Todos os cálculos de fatoriais foram concluídos.');
}

main().catch(err => console.error(err));