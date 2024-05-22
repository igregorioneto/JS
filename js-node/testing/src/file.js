const { readFile } = require('fs/promises');
const { join } = require('path');

const { error } = require('./constants');
const User = require('./user');

const DEFAULT_OPTIONS = {
    maxLines: 3,
    fields: ['id', 'name', 'profession', 'age']
}

const DEFAULT_FILTERED = { minAge: 1, maxAge : 100 }

class File {
    static async csvToJson(filePath, filtered = DEFAULT_FILTERED) {
        const content = await File.getFileContent(filePath);
        const validation = await File.isValid(content);
        if (!validation.valid) {
            throw new Error(validation.error);
        }

        let users = File.parseCSVToJson(content);

        users = users.filter(user => user.age >= filtered.minAge && user.age <= filtered.maxAge);
        
        if (users.length === 0) {
            throw new Error(error.FILE_USERS_AGE_NOT_FILTER);
        }

        return users;
    }

    static async getFileContent(filePath) {
        return (await readFile(filePath)).toString('utf8');
    }

    static async isValid(csvString, options = DEFAULT_OPTIONS) {
        const [header, ...fileWithoutHeader] = csvString.split('\n');
        const isHeaderValid = header === options.fields.join(',');

        if (!isHeaderValid) {
            return {
                error: error.FILE_FIELDS_ERROR_MESSAGE,
                valid: false
            }
        }

        const isContentLengthAccepted = (
            fileWithoutHeader.length > 0 &&
            fileWithoutHeader.length <= options.maxLines
        );

        if (!isContentLengthAccepted) {
            return {
                error: error.FILE_LENGTH_ERROR_MESSAGE,
                valid: false
            }
        }      

        return {
            valid: true
        }
    }

    static parseCSVToJson(csvString) {
        const lines = csvString.split('\n');

        // Remove o primeiro elemento e coloca na variável 'firstLine'
        const firstLine = lines.shift();
        const header = firstLine.split(',');
        const users = lines.map(line => {
            const columns = line.split(',');
            let user = {};
            for (const index in columns) {
                user[header[index]] = columns[index].trim();
            }
            return new User(user);
        });

        return users;
    }
}

module.exports = File;