const app = require('../server');
const testServer = require('supertest');


describe('testing server routes', () => {

    test('user route should return 200 if user is logged in', async () => {
        const agent = testServer.agent(app);
        const loginResponse = await agent.post('/api/user/login')
                                .send({username: 'simmyjuan', password: '1234'});
        expect(loginResponse.statusCode).toBe(200);
    });

    test('posts route should return 200 if new post is created', async () => {
        const testObj = {newPost: {url: 'text', description: 'yaya'}}
        const agent = testServer.agent(app);
        const response = await agent.post('/api/posts')
        .send(testObj)
        expect(response.statusCode).toBe(200);
    })
});