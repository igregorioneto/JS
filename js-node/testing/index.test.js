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
        const filePath = './mocks/threeItems-valid.csv';
        const rejection = new Error(error.FILE_USERS_AGE_NOT_FILTER);
        const result = File.csvToJson(filePath, { minAge: 0, maxAge: 0 });
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
                "birthDay": 1995,
                "age": 29,
                "ageGroup": "young"
            },
            {
                "name": "Fabrício",
                "id": 321,
                "profession": "Javascript Specialist",
                "birthDay": 1942,
                "age": 82,
                "ageGroup": "old"
            },
            {
                "name": "Fernanda",
                "id": 231,
                "profession": "Java Developer",
                "birthDay": 1992,
                "age": 32,
                "ageGroup": "adult"
            }
        ];

        deepStrictEqual(JSON.stringify(result), JSON.stringify(expected));
    }

    {
        Date.prototype.getFullYear = () => 2024;
        const filePath = './mocks/threeItems-valid.csv';
        const result = await File.csvToJson(filePath, { minAge: 1, maxAge: 29 });
        const expected = [
            {
                "name": "João",
                "id": 123,
                "profession": "Javascript Programmer",
                "birthDay": 1995,
                "age": 29,
                "ageGroup": "young"
            }
        ];

        deepStrictEqual(JSON.stringify(result), JSON.stringify(expected));
    }

})();