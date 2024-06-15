const { exec } = require('child_process');

class CommandExecutor {
    constructor() {
        
    }

    executeCommand(command, callback = null) {
        return new Promise((resolve, reject) => {
            exec(command, (error, stdout, stderr) => {
                if (error) {
                    if (callback) callback(stderr || error.message, null);
                    return reject(stderr || error.message);
                }
                if (callback) callback(null, stdout);                
                resolve(stdout);
            })
        })
    }
}

module.exports = CommandExecutor;