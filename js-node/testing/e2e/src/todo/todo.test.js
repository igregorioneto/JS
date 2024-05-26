const { describe, it } = require('mocha');
const request = require('supertest');
const assert = require('assert');

const app = require('./api');

describe('API Suite test', () => {
    describe('/hi', () => {
        it('Should request default route', async () => {
            const response = await request(app)
                .get('/hi')
                .expect(200);

            assert.deepStrictEqual(response.text, 'Hello World!');
        })
    })
})
