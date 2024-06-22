const fs = require('fs');

;(() => {
    // Criar uma pasta vazia
    let isDirectory = false
    fs.readdir('./files/', { recursive: true } ,(err, files) => {
        for (const file of files) {
            if (file === 'tmp') {
                isDirectory = true
                console.log('Diretório tmp já existe!')
                break;
            }
        }
    })

    if (!isDirectory) {
        fs.mkdir('./files/tmp', { recursive: true } , (err, files) => {
            console.log('Diretório tmp criado com sucesso!')
        })
    }

    // Criar um arquivo na pasta
    fs.writeFile('./files/tmp/arquivo.txt', 'Hello World!',  (err) => {
        console.log('Arquivo criado com sucesso...')
    })

    // Ler o texto do arquivo
    fs.readFile('./files/tmp/arquivo.txt', 'utf-8', (err, dados) => {
        console.log('Conteúdo do arquivo', dados)
    })
})();