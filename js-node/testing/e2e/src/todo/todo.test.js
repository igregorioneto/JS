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

            const response = await request(app)
                .get('/todos?id=1')
                .expect(200);

            const todo = { id: 1, title: 'New Task', status: 'pending' };

            assert.deepStrictEqual(response.body.id, todo.id);
            assert.deepStrictEqual(response.body.title, todo.title);
            assert.deepStrictEqual(response.body.status, todo.status);
        })

        it('Should request todo By ID NOT FOUND', async () => {
            const response = await request(app)
                .get('/todos?id=2')
                .expect(404);

            const error = { error: 'Todo not found' }

            assert.deepEqual(response.body, error)
        })

        it('Should request updated todo', async () => {
            const todo = { title: 'New', status: 'done' };
            const response = await request(app)
                .put('/todos?id=1')
                .send(todo)
                .expect(200);

            assert.deepStrictEqual(response.body.title, todo.title);
            assert.deepStrictEqual(response.body.status, todo.status);
        })

        it('Should request updated todo not found', async () => {
            const response = await request(app)
                .put('/todos?id=2')
                .expect(404);

            const error = { error: "Not Found" }
            assert.deepStrictEqual(response.body, error);
        })

        it('Should request updated todo Bad Request', async () => {
            const response = await request(app)
                .put('/todos')
                .expect(400);

            const error = { error: 'Bad Request' }
            assert.deepStrictEqual(response.body, error);
        })

        it('Should request deleted todo', async () => {
            const response = await request(app)
                .delete('/todos?id=1')
                .expect(204);

            assert.deepStrictEqual(response.status, 204);
        })

        it('Should request deleted todo not found', async () => {
            const response = await request(app)
                .delete('/todos?id=2')
                .expect(404);

            const error = { error: "Not Found" }
            assert.deepStrictEqual(response.body, error);
        })

        it('Should request deleted todo Bad Request', async () => {
            const response = await request(app)
                .delete('/todos')
                .expect(400);

            const error = { error: 'Bad Request' }
            assert.deepStrictEqual(response.body, error);
        })
    })
})
