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

    describe('/todos', () => {
        it('Should request list todos is empty', async () => {
            const todos = [];
            const response = await request(app)
                .get('/todos')
                .expect(200);
            
            assert.deepStrictEqual(response.body, todos);
        })

        it('Should request create todo', async () => {
            const todo = { title: 'New Task', status: 'pending' };
            const response = await request(app)
                .post('/todos')
                .send(todo)
                .expect(201);

            assert.deepStrictEqual(response.body.title, todo.title);
            assert.deepStrictEqual(response.body.status, todo.status);
        })

        it('Should request list tasks', async () => {
            const todos = [{ id: 1, title: 'New Task', status: 'pending' }];
            const response = await request(app)
                .get('/todos')
                .expect(200);            
            
            assert.deepStrictEqual(response.body, todos);
        })

        it('Should request todo By ID', async () => {
            const todo = { id: 1, title: 'New Task', status: 'pending' };
            const response = await request(app)
                .get('/todos?id=1')
                expect(200);

            assert.deepStrictEqual(response.body.id, todo.id);
            assert.deepStrictEqual(response.body.title, todo.title);
            assert.deepStrictEqual(response.body.status, todo.status);
        })
    })
})
