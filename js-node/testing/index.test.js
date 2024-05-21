const { error } = require('./src/constants');
const File = require('./src/file');
const { rejects, deepStrictEqual } = require('assert');

(async () => {

    {
        const filePath = './mocks/emptyFile-invalid.csv';
        const rejection = new Error(error.FILE_LENGTH_ERROR_MESSAGE);
        const result = File.csvToJson(filePath);
        await rejects(result, rejection);
    }

    {
        const filePath = './mocks/fourItems-invalid.csv';
        const rejection = new Error(error.FILE_LENGTH_ERROR_MESSAGE);
        const result = File.csvToJson(filePath);
        await rejects(result, rejection);
    }

    {
        Date.prototype.getFullYear = () => 2024;
        const filePath = './mocks/threeItems-valid.csv';
        const result = await File.csvToJson(filePath);
        const expected = [
            {
                "name": "João",
                "id": 123,
                "profession": "Javascript Programmer",
                "birthDay": 1995
            },
            {
                "name": "Fabrício",
                "id": 321,
                "profession": "Javascript Specialist",
                "birthDay": 1942
            },
            {
                "name": "Fernanda",
                "id": 231,
                "profession": "Java Developer",
                "birthDay": 1992
            }
        ];

        deepStrictEqual(JSON.stringify(result), JSON.stringify(expected));
    }

})();