const { describe, it } = require('mocha');
const request = require('supertest');
const assert = require('assert');

const app = require('./api');

describe('APi Suite test', function() {
    describe('/contact', () => {
        it('Should request the contactpage and retu rn HTTP Status 200', async () => {
            const response = await request(app)
                .get('/contact')
                .expect(200);

            assert.deepStrictEqual(response.text, 'contact us page');
        })
    });

    describe('/hello', () => {
        it('Should request an inexistent route /hi and redirect to /hello', async () => {
            const response = await request(app)
                .get('/hi')
                .expect(200);

            assert.deepStrictEqual(response.text, 'Hello, world!');
        });
    });

    describe('/login', function() {
        it('Should login successfully on the login route and return HTTP Status 200', async function() {
            const response = await request(app)
                .post('/login')
                .send({ username: 'joao', password: '123456' })
                .expect(200);

            assert.deepStrictEqual(response.text, 'Login has succeeded!');
        });

        it('Should unauthorized a request when requesting it using wrong credentials and return HTTP Status 401', async function() {
            const response = await request(app)
                .post('/login')
                .send({ username: 'larissa', password: '123' })
                .expect(401);

            assert.ok(response.unauthorized);
            assert.deepStrictEqual(response.text, 'Logging failed!');
        });
    });

});