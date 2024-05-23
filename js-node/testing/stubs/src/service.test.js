const sinon = require('sinon');
const { deepStrictEqual } = require('assert');
const Service = require('./service');

const BASE_URL_1 = 'https://swapi.dev/api/planets/1';
const BASE_URL_2 = 'https://swapi.dev/api/planets/2';
const BASE_URL_3 = 'https://swapi.dev/api/planets/5';
const BASE_URL_4 = 'https://swapi.dev/api/planets/1000';

const mocks = {
    tatooine: require('./mocks/tatooine.json'),
    alderaan: require('./mocks/alderaan.json'),
    dagobah: require('./mocks/dagobah.json'),
    notFound: require('./mocks/error-planet-not-found.json'),
};

; (async () => {
    // Consulta de informações da api
    /*{
        // Caso desejar salvar consulta em formato json: node service.test.js > mocks/nome_arquivo.json
        const service = new Service();
        const withoutStub = await service.makeRequest(BASE_URL_4);
        console.log(JSON.stringify(withoutStub));
    }*/

    const service = new Service();
    const stub = sinon.stub(service, service.makeRequest.name);

    stub
        .withArgs(BASE_URL_1)
        .resolves(mocks.tatooine);

    stub
        .withArgs(BASE_URL_2)
        .resolves(mocks.alderaan);

    stub
        .withArgs(BASE_URL_3)
        .resolves(mocks.dagobah);

    stub
        .withArgs(BASE_URL_4)
        .resolves(mocks.notFound);

    {
        const expected = {
            name: 'Tatooine',
            terrain: 'desert',
            surfaceWater: '1',
            appearedIn: 5
        };
        const results = await service.getPlanets(BASE_URL_1);
        deepStrictEqual(results, expected);
    }

    {
        const expected = {
            name: 'Alderaan',
            terrain: 'grasslands, mountains',
            surfaceWater: '40',
            appearedIn: 2
        };
        const results = await service.getPlanets(BASE_URL_2);
        deepStrictEqual(results, expected);
    }

    {
        const excepted = {
            name: 'Dagobah',
            terrain: 'swamp, jungles',
            surfaceWater: '8',
            films: [
                'https://swapi.dev/api/films/2/',
                'https://swapi.dev/api/films/3/',
                'https://swapi.dev/api/films/6/'
            ],
        }
        const results = await service.getPlanetsAndFilms(BASE_URL_3);
        deepStrictEqual(results, excepted);
    }

    {
        const expected = {
            error: 'Not found',
        }
        const results = await service.getPlanetNotFound(BASE_URL_4);
        deepStrictEqual(results, expected);
    }
})();